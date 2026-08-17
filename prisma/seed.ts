import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { industries } from "./seed-data/industries";
import { locations } from "./seed-data/locations";
import {
  author,
  glossary,
  globalFaqs,
  jobPostings,
  moneyPages,
  posts,
} from "./seed-data/misc";
import { products } from "./seed-data/products";
import { services } from "./seed-data/services";
import { technologies } from "./seed-data/technologies";
import type { SeedFaq } from "./seed-data/types";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const wordCount = (text: string) => text.trim().split(/\s+/).length;

/**
 * The brief's hard rule for location pages: 400+ words of genuinely
 * city-specific content, or the page should not exist. Enforced here so a thin
 * page fails the seed rather than quietly shipping.
 */
function assertLocationDepth() {
  const thin = locations
    .map((l) => ({ slug: l.slug, words: wordCount(l.bodyMdx) }))
    .filter((l) => l.words < 400);

  if (thin.length > 0) {
    const list = thin.map((l) => `  ${l.slug}: ${l.words} words`).join("\n");
    throw new Error(
      `Location pages must carry 400+ words of city-specific content.\n${list}\n` +
        `Either write the page properly or remove it — a templated city page ` +
        `risks the whole domain being treated as thin content.`,
    );
  }
}

/** Every slug referenced by a relation must exist, or the nav will 404. */
function assertReferentialIntegrity() {
  const techSlugs = new Set(technologies.map((t) => t.slug));
  const industrySlugs = new Set(industries.map((i) => i.slug));
  const serviceSlugs = new Set(services.map((s) => s.slug));
  const locationSlugs = new Set(locations.map((l) => l.slug));
  const errors: string[] = [];

  for (const s of services) {
    for (const t of s.technologies) {
      if (!techSlugs.has(t)) errors.push(`service "${s.slug}" → unknown technology "${t}"`);
    }
    for (const i of s.industries) {
      if (!industrySlugs.has(i)) errors.push(`service "${s.slug}" → unknown industry "${i}"`);
    }
  }
  for (const t of technologies) {
    for (const s of t.services) {
      if (!serviceSlugs.has(s)) errors.push(`technology "${t.slug}" → unknown service "${s}"`);
    }
  }
  for (const i of industries) {
    for (const s of i.services) {
      if (!serviceSlugs.has(s)) errors.push(`industry "${i.slug}" → unknown service "${s}"`);
    }
  }
  for (const m of moneyPages) {
    if (!serviceSlugs.has(m.serviceSlug)) errors.push(`money page "${m.slug}" → unknown service "${m.serviceSlug}"`);
    if (!locationSlugs.has(m.citySlug)) errors.push(`money page "${m.slug}" → unknown location "${m.citySlug}"`);
  }

  if (errors.length > 0) {
    throw new Error(`Seed data references missing records:\n  ${errors.join("\n  ")}`);
  }
}

const faqRows = (faqs: SeedFaq[], scope: string, key: string, id: string) =>
  faqs.map((f, order) => ({ ...f, order, scope, [key]: id }));

async function main() {
  console.log("→ Validating seed data");
  assertLocationDepth();
  assertReferentialIntegrity();

  console.log("→ Clearing existing content");
  // Order matters: Faq holds FKs into almost everything.
  await prisma.faq.deleteMany();
  await prisma.leadNote.deleteMany();
  await prisma.moneyPage.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.post.deleteMany();
  await prisma.project.deleteMany();
  await prisma.product.deleteMany();
  await prisma.location.deleteMany();
  await prisma.industry.deleteMany();
  await prisma.service.deleteMany();
  await prisma.technology.deleteMany();
  await prisma.author.deleteMany();
  await prisma.glossaryTerm.deleteMany();
  await prisma.jobPosting.deleteMany();
  await prisma.redirect.deleteMany();

  console.log("→ Author");
  const authorRow = await prisma.author.create({ data: author });

  console.log(`→ ${technologies.length} technologies`);
  for (const tech of technologies) {
    const { faqs, services: _serviceSlugs, ...data } = tech;
    const row = await prisma.technology.create({ data });
    await prisma.faq.createMany({
      data: faqRows(faqs, "technology", "technologyId", row.id),
    });
  }

  console.log(`→ ${industries.length} industries`);
  for (const industry of industries) {
    const { faqs, services: _serviceSlugs, ...data } = industry;
    const row = await prisma.industry.create({ data });
    await prisma.faq.createMany({
      data: faqRows(faqs, "industry", "industryId", row.id),
    });
  }

  console.log(`→ ${services.length} services`);
  for (const service of services) {
    const { faqs, technologies: techSlugs, industries: industrySlugs, ...data } = service;
    const row = await prisma.service.create({
      data: {
        ...data,
        technologies: { connect: techSlugs.map((slug) => ({ slug })) },
        industries: { connect: industrySlugs.map((slug) => ({ slug })) },
      },
    });
    await prisma.faq.createMany({
      data: faqRows(faqs, "service", "serviceId", row.id),
    });
  }

  console.log(`→ ${locations.length} locations`);
  for (const location of locations) {
    const { faqs, ...data } = location;
    const row = await prisma.location.create({ data });
    await prisma.faq.createMany({
      data: faqRows(faqs, "location", "locationId", row.id),
    });
  }

  console.log(`→ ${products.length} products`);
  for (const product of products) {
    const { faqs, ...data } = product;
    const row = await prisma.product.create({ data });
    await prisma.faq.createMany({
      data: faqRows(faqs, "product", "productId", row.id),
    });
  }

  console.log(`→ ${moneyPages.length} money pages`);
  for (const page of moneyPages) {
    const { faqs, serviceSlug, citySlug, ...data } = page;
    const [service, location] = await Promise.all([
      prisma.service.findUniqueOrThrow({ where: { slug: serviceSlug } }),
      prisma.location.findUniqueOrThrow({ where: { slug: citySlug } }),
    ]);
    const row = await prisma.moneyPage.create({
      data: { ...data, serviceId: service.id, locationId: location.id },
    });
    await prisma.faq.createMany({
      data: faqRows(faqs, "moneyPage", "moneyPageId", row.id),
    });
  }

  console.log(`→ ${posts.length} blog posts`);
  for (const post of posts) {
    const { faqs, publishedAt, ...data } = post;
    const row = await prisma.post.create({
      data: {
        ...data,
        authorId: authorRow.id,
        published: true,
        publishedAt: new Date(publishedAt),
      },
    });
    await prisma.faq.createMany({
      data: faqRows(faqs, "post", "postId", row.id),
    });
  }

  console.log(`→ ${glossary.length} glossary terms`);
  await prisma.glossaryTerm.createMany({ data: glossary });

  console.log(`→ ${jobPostings.length} job postings`);
  await prisma.jobPosting.createMany({
    data: jobPostings.map((j) => ({
      ...j,
      // JobPosting rich results require an expiry; 90 days from seed.
      validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })),
  });

  console.log(`→ ${globalFaqs.length} global FAQs`);
  await prisma.faq.createMany({
    data: globalFaqs.map((f, order) => ({ ...f, order, scope: "global" })),
  });

  // No testimonials or case studies are seeded. Codivra was founded in 2026;
  // inventing named clients and quotes would fabricate exactly the trust
  // signals the brief forbids. Add real ones through /admin as work completes.
  console.log("→ Testimonials and case studies: none (see comment in seed.ts)");

  console.log("→ Redirects");
  await prisma.redirect.createMany({
    data: [
      { from: "/services/seo", to: "/services/seo-and-digital-marketing", status: 301 },
      { from: "/services/app-development", to: "/services/mobile-app-development", status: 301 },
      { from: "/portfolio", to: "/work", status: 301 },
      { from: "/pricing", to: "/services", status: 301 },
    ],
  });

  console.log("→ Admin user");
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (email && password) {
    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: author.name,
        password: await bcrypt.hash(password, 12),
        role: "ADMIN",
      },
    });
    console.log(`  admin: ${email}`);
  } else {
    console.warn("  skipped — set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD");
  }

  console.log("\n✓ Seed complete");
}

main()
  .catch((error) => {
    console.error("\n✗ Seed failed\n", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
