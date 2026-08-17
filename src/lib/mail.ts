import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { serverEnv } from "@/lib/env";
import { formattedAddress, site } from "@/lib/site";

/**
 * Transactional email over SMTP.
 *
 * Two deliberate behaviours:
 *
 *  - **Unconfigured SMTP is not an error.** Without SMTP_HOST the transport
 *    logs the message and reports success. A contact form must never 500
 *    because mail is misconfigured — the lead is already safely in Postgres by
 *    the time we try to send, and losing the enquiry is far worse than losing
 *    the notification.
 *  - **Sending never throws to the caller.** `sendMail` returns a result
 *    object. Callers decide what to do; the lead route logs and carries on.
 */

let cached: Transporter | null = null;

function getTransport(): Transporter | null {
  const env = serverEnv();
  if (!env.SMTP_HOST) return null;
  if (cached) return cached;

  cached = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: env.SMTP_USER
      ? { user: env.SMTP_USER, pass: env.SMTP_PASSWORD }
      : undefined,
    // Reuse one connection across a burst rather than reconnecting per send.
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
  });

  return cached;
}

export type MailResult =
  | { ok: true; skipped?: boolean; messageId?: string }
  | { ok: false; error: string };

export async function sendMail(message: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<MailResult> {
  const env = serverEnv();
  const transport = getTransport();

  if (!transport) {
    console.warn(
      `[mail] SMTP_HOST is not set — skipping send.\n` +
        `       to: ${message.to}\n  subject: ${message.subject}`,
    );
    return { ok: true, skipped: true };
  }

  try {
    const info = await transport.sendMail({
      from: env.MAIL_FROM,
      to: message.to,
      subject: message.subject,
      text: message.text,
      html: message.html,
      replyTo: message.replyTo,
    });
    return { ok: true, messageId: info.messageId };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.error(`[mail] send failed to ${message.to}: ${reason}`);
    return { ok: false, error: reason };
  }
}

/** Verifies SMTP credentials without sending. Used by the admin health check. */
export async function verifyMailConnection(): Promise<MailResult> {
  const transport = getTransport();
  if (!transport) return { ok: false, error: "SMTP_HOST is not configured" };

  try {
    await transport.verify();
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

// ---------------------------------------------------------------------------
// Templates
//
// Deliberately plain HTML with inline styles and no build step. Email clients
// strip <style> blocks and ignore most modern CSS; a table-free, inline-styled
// layout is what actually renders consistently in Gmail and Outlook.
// ---------------------------------------------------------------------------

export type LeadEmailData = {
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  budgetRange?: string | null;
  timeline?: string | null;
  serviceSlug?: string | null;
  message: string;
  sourcePage: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function shell(bodyHtml: string): string {
  return `<!doctype html>
<html lang="en"><body style="margin:0;padding:24px;background:#f4f4f5;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#18181b;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
  <div style="padding:20px 24px;background:#0a0a0b;">
    <span style="font-size:16px;font-weight:600;color:#fafafa;">Codivra</span><span style="font-size:16px;color:#a1a1aa;"> Solutions</span>
  </div>
  <div style="padding:24px;">${bodyHtml}</div>
  <div style="padding:16px 24px;border-top:1px solid #e4e4e7;font-size:12px;line-height:1.6;color:#71717a;">
    ${escapeHtml(formattedAddress)}<br>
    <a href="tel:${site.contact.phone}" style="color:#4338ca;">${site.contact.phone}</a> ·
    <a href="mailto:${site.contact.email}" style="color:#4338ca;">${site.contact.email}</a>
  </div>
</div>
</body></html>`;
}

const row = (label: string, value?: string | null) =>
  value
    ? `<tr><td style="padding:6px 12px 6px 0;color:#71717a;font-size:14px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;font-size:14px;color:#18181b;">${escapeHtml(value)}</td></tr>`
    : "";

/** Internal notification to the sales inbox. Reply-To is the enquirer. */
export function leadNotificationEmail(lead: LeadEmailData) {
  const subject = `New enquiry: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`;

  const attribution =
    lead.utmSource || lead.utmMedium || lead.utmCampaign
      ? `${lead.utmSource ?? "—"} / ${lead.utmMedium ?? "—"} / ${lead.utmCampaign ?? "—"}`
      : null;

  const html = shell(`
    <h1 style="margin:0 0 16px;font-size:20px;">New enquiry</h1>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", lead.name)}
      ${row("Email", lead.email)}
      ${row("Phone", lead.phone)}
      ${row("Company", lead.company)}
      ${row("Service", lead.serviceSlug)}
      ${row("Budget", lead.budgetRange)}
      ${row("Timeline", lead.timeline)}
      ${row("Page", lead.sourcePage)}
      ${row("Source / medium / campaign", attribution)}
    </table>
    <div style="margin-top:20px;padding:16px;background:#f4f4f5;border-radius:8px;">
      <div style="font-size:12px;color:#71717a;margin-bottom:6px;">Message</div>
      <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(lead.message)}</div>
    </div>
    <p style="margin:20px 0 0;font-size:13px;color:#71717a;">
      Reply directly to this email to reach ${escapeHtml(lead.name)}.
      Response promise on the site is <strong>${site.contact.responsePromise.toLowerCase()}</strong>.
    </p>
  `);

  const text = [
    "New enquiry",
    "",
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    `Phone:    ${lead.phone}`,
    lead.company ? `Company:  ${lead.company}` : null,
    lead.serviceSlug ? `Service:  ${lead.serviceSlug}` : null,
    lead.budgetRange ? `Budget:   ${lead.budgetRange}` : null,
    lead.timeline ? `Timeline: ${lead.timeline}` : null,
    `Page:     ${lead.sourcePage}`,
    attribution ? `Source:   ${attribution}` : null,
    "",
    "Message:",
    lead.message,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}

/** Autoresponder to the person who enquired. */
export function leadAutoresponderEmail(lead: LeadEmailData) {
  const subject = `We've got your enquiry — ${site.legalName}`;

  const html = shell(`
    <h1 style="margin:0 0 16px;font-size:20px;">Thanks, ${escapeHtml(lead.name.split(" ")[0] ?? lead.name)} — we've got it</h1>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.65;">
      Your enquiry has reached us and a real person will read it, not an
      autoresponder queue. ${escapeHtml(site.contact.responsePromise)}, during
      ${escapeHtml(site.hours.label)}.
    </p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.65;">
      When we reply it will be from an engineer, with either a question about
      scope or a first view on what the work involves. If it turns out you need
      something smaller than you asked for, we will say that too.
    </p>
    <div style="margin:20px 0;padding:16px;background:#f4f4f5;border-radius:8px;">
      <div style="font-size:12px;color:#71717a;margin-bottom:6px;">What you sent us</div>
      <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(lead.message)}</div>
    </div>
    <p style="margin:0;font-size:15px;line-height:1.65;">
      If it is urgent, call <a href="tel:${site.contact.phone}" style="color:#4338ca;">${site.contact.phone}</a>
      or message us on WhatsApp.
    </p>
  `);

  const text = [
    `Thanks, ${lead.name.split(" ")[0] ?? lead.name} — we've got it`,
    "",
    `Your enquiry has reached us and a real person will read it. ${site.contact.responsePromise}, during ${site.hours.label}.`,
    "",
    "What you sent us:",
    lead.message,
    "",
    `Urgent? Call ${site.contact.phone}.`,
    "",
    site.legalName,
    formattedAddress,
  ].join("\n");

  return { subject, html, text };
}

/**
 * Fires both emails for a new lead.
 *
 * Sent in parallel and never rethrown — the lead is already persisted, so a
 * mail failure must not fail the request the visitor is waiting on.
 */
export async function sendLeadEmails(lead: LeadEmailData): Promise<void> {
  const env = serverEnv();
  const notification = leadNotificationEmail(lead);
  const autoresponder = leadAutoresponderEmail(lead);

  await Promise.allSettled([
    sendMail({
      to: env.SALES_NOTIFICATION_EMAIL,
      replyTo: lead.email,
      ...notification,
    }),
    sendMail({ to: lead.email, ...autoresponder }),
  ]);
}
