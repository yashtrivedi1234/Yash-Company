import { getAllMarkdownPages, renderMarkdownPage } from "@/lib/markdown-pages";
import { site } from "@/lib/site";

// Regenerated on the same schedule as the pages it concatenates.
/**
 * Rendered on demand rather than prerendered at build time.
 *
 * This route reads the entire published content set. Prerendering it meant
 * every build worker racing that full scan against the database, which on a
 * small instance exceeds the connection timeout and fails the build.
 *
 * On demand is also the better design here: crawlers fetch this rarely, the
 * response carries an s-maxage so the CDN serves repeats, and generating it
 * per request means it can never be staler than the database.
 */
export const dynamic = "force-dynamic";

/**
 * /llms-full.txt — the full plain-markdown body of every published page,
 * each prefixed with its URL and separated by a horizontal rule.
 *
 * This is the file an answer engine ingests when it wants the whole site in
 * one request instead of crawling it page by page.
 */
export async function GET() {
  const pages = await getAllMarkdownPages();

  const header = [
    `# ${site.legalName} — full content`,
    "",
    `> ${site.description}`,
    "",
    `Generated ${new Date().toISOString().slice(0, 10)}. ${pages.length} pages.`,
    `Canonical site: ${site.url}`,
    "",
  ].join("\n");

  const body = pages
    .map(renderMarkdownPage)
    .join("\n---\n\n");

  return new Response(`${header}\n---\n\n${body}`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
