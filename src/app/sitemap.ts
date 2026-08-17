import type { MetadataRoute } from "next";
import {
  getGlossaryTerms,
  getIndustries,
  getJobPostings,
  getLocations,
  getMoneyPages,
  getPosts,
  getProducts,
  getProjects,
  getServices,
  getTechnologies,
} from "@/lib/queries";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 86400;

/**
 * Generated from the database, never hardcoded — a sitemap that drifts from
 * what is actually published is worse than none.
 *
 * `lastModified` comes from each row's `updatedAt`, so editing a page in the
 * admin genuinely updates its sitemap entry rather than stamping every URL
 * with the build time.
 *
 * Priorities follow the brief: home 1.0, services and money pages 0.9,
 * work/products 0.8, blog 0.7, legal 0.3.
 *
 * NOTE: Next's sitemap.ts emits a single file. Once this exceeds 1,000 URLs,
 * split it into a sitemap index — see SEO-CHECKLIST.md for the exact change.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [
    services,
    technologies,
    industries,
    locations,
    moneyPages,
    products,
    projects,
    posts,
    glossary,
    jobs,
  ] = await Promise.all([
    getServices(),
    getTechnologies(),
    getIndustries(),
    getLocations(),
    getMoneyPages(),
    getProducts(),
    getProjects(),
    getPosts(),
    getGlossaryTerms(),
    getJobPostings(),
  ]);

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/work"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/products"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/technologies"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/industries"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/locations"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/careers"), lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: absoluteUrl("/sitemap"), lastModified: now, changeFrequency: "weekly", priority: 0.3 },
    { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/refund-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes,

    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: s.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Money pages carry their own priority column so a high-intent combination
    // can be weighted above the rest from the admin.
    ...moneyPages.map((m) => ({
      url: absoluteUrl(`/${m.slug}`),
      lastModified: m.updatedAt,
      changeFrequency: "monthly" as const,
      priority: m.priority,
    })),

    ...products.map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      lastModified: p.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...projects.map((p) => ({
      url: absoluteUrl(`/work/${p.slug}`),
      lastModified: p.updatedAt,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),

    ...technologies.map((t) => ({
      url: absoluteUrl(`/technologies/${t.slug}`),
      lastModified: t.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...industries.map((i) => ({
      url: absoluteUrl(`/industries/${i.slug}`),
      lastModified: i.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...locations.map((l) => ({
      url: absoluteUrl(`/locations/${l.slug}`),
      lastModified: l.updatedAt,
      changeFrequency: "monthly" as const,
      priority: l.isOffice ? 0.9 : 0.7,
    })),

    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    ...glossary.map((g) => ({
      url: absoluteUrl(`/glossary/${g.slug}`),
      lastModified: g.updatedAt,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),

    ...jobs.map((j) => ({
      url: absoluteUrl(`/careers/${j.slug}`),
      lastModified: j.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
