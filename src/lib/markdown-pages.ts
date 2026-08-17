import {
  getGlossaryTerms,
  getIndustries,
  getLocations,
  getMoneyPages,
  getPosts,
  getProducts,
  getServices,
  getTechnologies,
} from "@/lib/queries";
import { absoluteUrl } from "@/lib/site";

export type MarkdownPage = {
  /** Site-relative path without extension, e.g. "/services/web-development". */
  path: string;
  title: string;
  description: string;
  /** Answer-first paragraph, when the page type has one. */
  answer?: string;
  body: string;
  /**
   * `unstable_cache` round-trips values through JSON, so a Date written by
   * Prisma comes back out as an ISO string. Accept both rather than assuming.
   */
  updatedAt: Date | string;
};

/**
 * The plain-markdown twin of every published page.
 *
 * Answer engines that prefer markdown over HTML get a clean source with no
 * navigation, no scripts and no layout noise. Shared by `/llms-full.txt` and
 * the per-page `/[...slug].md` route so the two can never disagree.
 */
export async function getAllMarkdownPages(): Promise<MarkdownPage[]> {
  const [services, technologies, industries, locations, moneyPages, products, posts, glossary] =
    await Promise.all([
      getServices(),
      getTechnologies(),
      getIndustries(),
      getLocations(),
      getMoneyPages(),
      getProducts(),
      getPosts(),
      getGlossaryTerms(),
    ]);

  return [
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      title: s.title,
      description: s.metaDesc,
      answer: s.answerBlock,
      body: s.bodyMdx,
      updatedAt: s.updatedAt,
    })),
    ...technologies.map((t) => ({
      path: `/technologies/${t.slug}`,
      title: `${t.name} development`,
      description: t.metaDesc,
      answer: t.summary,
      body: t.bodyMdx,
      updatedAt: t.updatedAt,
    })),
    ...industries.map((i) => ({
      path: `/industries/${i.slug}`,
      title: `Software for ${i.name}`,
      description: i.metaDesc,
      answer: i.answerBlock,
      body: i.bodyMdx,
      updatedAt: i.updatedAt,
    })),
    ...locations.map((l) => ({
      path: `/locations/${l.slug}`,
      title: `Software development in ${l.city}`,
      description: l.metaDesc,
      answer: l.answerBlock,
      body: [l.bodyMdx, l.localProof].filter(Boolean).join("\n\n"),
      updatedAt: l.updatedAt,
    })),
    ...moneyPages.map((m) => ({
      path: `/${m.slug}`,
      title: m.h1,
      description: m.metaDesc,
      answer: m.answerBlock,
      body: [m.bodyMdx, m.localProof].filter(Boolean).join("\n\n"),
      updatedAt: m.updatedAt,
    })),
    ...products.map((p) => ({
      path: `/products/${p.slug}`,
      title: p.name,
      description: p.metaDesc,
      answer: p.answerBlock,
      body: [p.bodyMdx, p.pricingMdx].filter(Boolean).join("\n\n## Pricing\n\n"),
      updatedAt: p.updatedAt,
    })),
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      title: p.title,
      description: p.metaDesc,
      answer: p.answerBlock,
      body: p.bodyMdx,
      updatedAt: p.updatedAt,
    })),
    ...glossary.map((g) => ({
      path: `/glossary/${g.slug}`,
      title: g.term,
      description: g.definition,
      answer: g.definition,
      body: g.bodyMdx,
      updatedAt: g.updatedAt,
    })),
  ];
}

/** One page rendered as a standalone markdown document. */
export function renderMarkdownPage(page: MarkdownPage): string {
  return [
    `# ${page.title}`,
    "",
    `> ${page.description}`,
    "",
    `URL: ${absoluteUrl(page.path)}`,
    `Last updated: ${new Date(page.updatedAt).toISOString().slice(0, 10)}`,
    "",
    ...(page.answer ? [page.answer, ""] : []),
    page.body,
    "",
  ].join("\n");
}
