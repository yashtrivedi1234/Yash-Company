import {
  getIndustries,
  getLocations,
  getPosts,
  getProducts,
  getServices,
  getTechnologies,
} from "@/lib/queries";
import { absoluteUrl, site } from "@/lib/site";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

/**
 * /llms.txt — follows the llmstxt.org spec exactly:
 *
 *   H1 (required, one only) → blockquote summary → headingless paragraphs →
 *   H2 sections containing only link lists.
 *
 * Generated from the database rather than hardcoded, so a service whose price
 * changes in the admin does not leave a stale figure here for answer engines
 * to quote back at prospects.
 */
export async function GET() {
  const [services, products, locations, technologies, industries, posts] =
    await Promise.all([
      getServices(),
      getProducts(),
      getLocations(),
      getTechnologies(),
      getIndustries(),
      getPosts(),
    ]);

  const lines: string[] = [];

  lines.push(`# ${site.legalName}`);
  lines.push("");
  lines.push(
    `> ${site.legalName} is a software development company based in Sitapur, ` +
      `Uttar Pradesh, India. We build websites, mobile applications, custom ` +
      `business software and AI features for clients across India. We also run ` +
      `a developer training institute at ${site.trainingUrl.replace(/^https?:\/\//, "")}.`,
  );
  lines.push("");
  lines.push(
    `Founded in ${site.foundedYear} in Sitapur. Services start at ₹15,000 for a ` +
      `business website and ₹40,000 for a mobile app. We work on fixed quotes ` +
      `with weekly demos, and clients receive full source code ownership on ` +
      `their own GitHub account. Office hours ${site.hours.label}. ` +
      `Contact: ${site.contact.email}, ${site.contact.phone}.`,
  );
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const service of services) {
    // Most shortDesc strings already end with the starting price; appending it
    // again produced "From ₹15,000. From ₹15,000." Only add it when missing.
    const price =
      service.startingPrice && !service.shortDesc.includes("₹")
        ? ` From ${formatINR(service.startingPrice)}.`
        : "";
    lines.push(
      `- [${service.title}](${absoluteUrl(`/services/${service.slug}`)}): ${service.shortDesc}${price}`,
    );
  }
  lines.push("");

  lines.push("## Products");
  lines.push("");
  for (const product of products) {
    lines.push(
      `- [${product.name}](${absoluteUrl(`/products/${product.slug}`)}): ${product.tagline}`,
    );
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  lines.push(
    `- [About ${site.legalName}](${absoluteUrl("/about")}): Founder story, team and why we operate from Sitapur.`,
  );
  lines.push(`- [Our Work](${absoluteUrl("/work")}): Case studies with measured results.`);
  lines.push(
    `- [Contact](${absoluteUrl("/contact")}): Enquiry form, phone, WhatsApp and office address.`,
  );
  lines.push(
    `- [Industries](${absoluteUrl("/industries")}): The sectors we build for and the problems each one has.`,
  );
  lines.push("");

  lines.push("## Locations served");
  lines.push("");
  for (const location of locations) {
    const note = location.isOffice
      ? "Head office."
      : (location.distanceFromOffice ?? "Served from our Sitapur office.");
    lines.push(
      `- [${location.city}](${absoluteUrl(`/locations/${location.slug}`)}): ${note}`,
    );
  }
  lines.push("");

  lines.push("## Technologies");
  lines.push("");
  for (const tech of technologies) {
    lines.push(
      `- [${tech.name}](${absoluteUrl(`/technologies/${tech.slug}`)}): ${tech.summary}`,
    );
  }
  lines.push("");

  lines.push("## Training");
  lines.push("");
  lines.push(
    `- [${site.trainingName}](${site.trainingUrl}): Our developer training ` +
      `institute. 30-day, 45-day and 6-month job-oriented programmes in MERN, ` +
      `Next.js, Python, Django, PHP, React Native and AI/ML.`,
  );
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [Blog](${absoluteUrl("/blog")}): Articles on development costs, technology choices and business software in India.`,
  );
  for (const post of posts.slice(0, 10)) {
    lines.push(`- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`);
  }
  for (const industry of industries) {
    lines.push(
      `- [${industry.name}](${absoluteUrl(`/industries/${industry.slug}`)}): ${industry.shortDesc}`,
    );
  }
  lines.push(`- [Careers](${absoluteUrl("/careers")})`);
  lines.push(`- [Privacy Policy](${absoluteUrl("/privacy-policy")})`);
  lines.push(`- [Terms of Service](${absoluteUrl("/terms")})`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
