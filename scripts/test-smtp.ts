import "dotenv/config";
import nodemailer from "nodemailer";

/**
 * SMTP smoke test: verifies credentials, then optionally sends a real message.
 *
 *   pnpm test:smtp                  # verify connection only, sends nothing
 *   pnpm test:smtp you@example.com  # verify, then send a test email
 *
 * Deliberately standalone — it reads process.env directly rather than
 * importing src/lib/mail.ts, so a broken app build cannot mask a mail problem
 * (or the reverse).
 */

const {
  SMTP_HOST,
  SMTP_PORT = "587",
  SMTP_SECURE = "false",
  SMTP_USER,
  SMTP_PASSWORD,
  MAIL_FROM,
  SALES_NOTIFICATION_EMAIL,
} = process.env;

const recipient = process.argv[2];

function fail(message: string): never {
  console.error(`\n✗ ${message}\n`);
  process.exit(1);
}

async function main() {
  console.log("SMTP configuration");
  console.log(`  host:   ${SMTP_HOST || "(not set)"}`);
  console.log(`  port:   ${SMTP_PORT}`);
  console.log(`  secure: ${SMTP_SECURE}`);
  console.log(`  user:   ${SMTP_USER || "(not set)"}`);
  console.log(`  pass:   ${SMTP_PASSWORD ? `set (${SMTP_PASSWORD.length} chars)` : "(not set)"}`);
  console.log(`  from:   ${MAIL_FROM || "(not set)"}`);
  console.log("");

  if (!SMTP_HOST) fail("SMTP_HOST is not set.");

  const port = Number(SMTP_PORT);
  const secure = SMTP_SECURE === "true";

  // The single most common misconfiguration: 465 needs implicit TLS, 587 needs
  // STARTTLS. Mismatching them produces a hang rather than a useful error.
  if (port === 465 && !secure) {
    fail("Port 465 requires SMTP_SECURE=\"true\" (implicit TLS). As set, this will hang.");
  }
  if (port === 587 && secure) {
    fail("Port 587 requires SMTP_SECURE=\"false\" (STARTTLS). As set, this will hang.");
  }

  if (SMTP_HOST.includes("gmail") && SMTP_PASSWORD) {
    if (SMTP_PASSWORD.length !== 16) {
      console.warn(
        `⚠ Gmail app passwords are exactly 16 characters; yours is ${SMTP_PASSWORD.length}. ` +
          `If it still has spaces, remove them.\n`,
      );
    }
    const fromAddress = MAIL_FROM?.match(/<(.+)>/)?.[1] ?? MAIL_FROM;
    if (fromAddress && SMTP_USER && fromAddress !== SMTP_USER) {
      console.warn(
        `⚠ MAIL_FROM (${fromAddress}) differs from SMTP_USER (${SMTP_USER}).\n` +
          `  Gmail only permits sending as the authenticated account or a verified\n` +
          `  alias — it will silently rewrite the From header otherwise.\n`,
      );
    }
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASSWORD } : undefined,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
  });

  console.log("→ Verifying connection and credentials…");
  try {
    await transport.verify();
    console.log("✓ SMTP connection and authentication OK\n");
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    if (/invalid login|username and password not accepted|535/i.test(reason)) {
      fail(
        `Authentication rejected: ${reason}\n` +
          `  For Gmail: 2-Step Verification must be on, and SMTP_PASSWORD must be a\n` +
          `  16-character App Password — not the account password.`,
      );
    }
    if (/timeout|ETIMEDOUT|ECONNREFUSED/i.test(reason)) {
      fail(
        `Could not reach ${SMTP_HOST}:${port} — ${reason}\n` +
          `  Check the port/secure pairing, and whether outbound SMTP is blocked.`,
      );
    }
    fail(reason);
  }

  if (!recipient) {
    console.log("No recipient given, so nothing was sent.");
    console.log("To send a real test:  pnpm test:smtp you@example.com\n");
    transport.close();
    return;
  }

  console.log(`→ Sending test message to ${recipient}…`);
  const info = await transport.sendMail({
    from: MAIL_FROM,
    to: recipient,
    subject: "Codivra SMTP test — this one worked",
    text: [
      "This is a test message from the Codivra Solutions website.",
      "",
      "If you are reading it, SMTP is configured correctly and the contact form",
      "will be able to send enquiry notifications and autoresponders.",
      "",
      `Host: ${SMTP_HOST}:${port} (secure: ${secure})`,
      `From: ${MAIL_FROM}`,
      `Sales notifications go to: ${SALES_NOTIFICATION_EMAIL}`,
      `Sent: ${new Date().toISOString()}`,
    ].join("\n"),
    html: `
      <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;">
        <div style="padding:16px 20px;background:#0a0a0b;border-radius:10px 10px 0 0;">
          <span style="font-size:16px;font-weight:600;color:#fafafa;">Codivra</span><span style="font-size:16px;color:#a1a1aa;"> Solutions</span>
        </div>
        <div style="padding:20px;border:1px solid #e4e4e7;border-top:none;border-radius:0 0 10px 10px;">
          <h1 style="margin:0 0 12px;font-size:18px;color:#18181b;">SMTP is working</h1>
          <p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#3f3f46;">
            If you are reading this, credentials are valid and the contact form will
            be able to send enquiry notifications and autoresponders.
          </p>
          <table style="font-size:13px;color:#71717a;border-collapse:collapse;">
            <tr><td style="padding:3px 12px 3px 0;">Host</td><td>${SMTP_HOST}:${port}</td></tr>
            <tr><td style="padding:3px 12px 3px 0;">Secure</td><td>${secure}</td></tr>
            <tr><td style="padding:3px 12px 3px 0;">From</td><td>${MAIL_FROM}</td></tr>
            <tr><td style="padding:3px 12px 3px 0;">Notifications to</td><td>${SALES_NOTIFICATION_EMAIL}</td></tr>
          </table>
        </div>
      </div>`,
  });

  console.log(`✓ Sent. Message ID: ${info.messageId}`);
  if (info.accepted?.length) console.log(`  accepted: ${info.accepted.join(", ")}`);
  if (info.rejected?.length) console.log(`  rejected: ${info.rejected.join(", ")}`);
  console.log("\nCheck the inbox — and the spam folder, which is where an\n" +
    "unauthenticated domain usually lands.\n");

  transport.close();
}

main().catch((error) => {
  console.error("\n✗ Unexpected failure\n", error);
  process.exit(1);
});
