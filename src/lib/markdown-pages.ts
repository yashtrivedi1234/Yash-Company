import { unstable_cache } from "next/cache";
import {
  getGlossaryTerms,
  getIndustries,
  getLocations,
  getMoneyPages,
  getPosts,
  getProducts,
  getServices,
  getTechnologies,
  TAGS,
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
/**
 * Cached as one unit, not just as eight cached sub-queries.
 *
 * This function is called once per markdown-twin route, and there are ~70 of
 * them. Relying on the individual `:list` caches meant every route raced the
 * others before any cache populated — roughly 560 concurrent full-table
 * queries per build worker, which produced 622 connection timeouts and turned
 * a sub-second build into a 90-second one.
 *
 * One cache key over the whole composite collapses that to a single fetch per
 * worker. It carries every content tag, so any admin edit invalidates it.
 */
export const getAllMarkdownPages = unstable_cache(
  async (): Promise<MarkdownPage[]> => buildMarkdownPages(),
  ["markdown-pages:all"],
  {
    tags: [
      TAGS.services,
      TAGS.technologies,
      TAGS.industries,
      TAGS.locations,
      TAGS.moneyPages,
      TAGS.products,
      TAGS.posts,
      TAGS.glossary,
    ],
    revalidate: 86400,
  },
);

async function buildMarkdownPages(): Promise<MarkdownPage[]> {
  // Sequential, not Promise.all, and deliberately so.
  //
  // Eight parallel queries per call, multiplied by seven build workers, is a
  // 56-connection burst. Neon's free-tier compute auto-suspends and is slow to
  // wake — a bare `migrate status` takes ~10s cold — so that burst times out
  // and fails the build. Each query below is individually cached, so once warm
  // this costs no more than the parallel version; when cold it degrades to
  // slow rather than to broken.
  const services = await getServices();
  const technologies = await getTechnologies();
  const industries = await getIndustries();
  const locations = await getLocations();
  const moneyPages = await getMoneyPages();
  const products = await getProducts();
  const posts = await getPosts();
  const glossary = await getGlossaryTerms();

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
