import { getAllMarkdownPages, renderMarkdownPage } from "@/lib/markdown-pages";

export const revalidate = 86400;

/**
 * Serves the markdown twin of a page.
 *
 * Public URL is `/services/web-development.md`; `middleware.ts` rewrites that
 * to `/api/markdown/services/web-development`.
 *
 * Two design notes worth keeping:
 *
 *  - The route folder cannot simply be named `[...slug].md` — the `.md` suffix
 *    stops Next's typed routes parsing it as a dynamic segment.
 *  - The target path travels in the *pathname*, not a query parameter. A
 *    rewrite's query string is not reliably readable from `request.nextUrl`
 *    inside a route handler, so a `?path=` approach silently 400s.
 */
/**
 * Deliberately no `generateStaticParams`.
 *
 * These twins are a machine-readable surface for answer engines, not pages a
 * person browses — they are fetched rarely and cached for 24h after the first
 * hit. Prerendering all ~70 at build time meant every one of them resolving
 * the full content set before the cache warmed, which stampeded the database
 * and failed the build against Neon on a cold start.
 *
 * Rendering on demand with ISR gives the same result for consumers at a
 * fraction of the build cost: the first request pays for one query, everything
 * after it is served from cache.
 */
export async function GET(
  _request: Request,
  { params }: RouteContext<"/api/markdown/[...path]">,
) {
  const { path } = await params;
  const target = `/${path.join("/")}`;

  const pages = await getAllMarkdownPages();
  const page = pages.find((p) => p.path === target);

  if (!page) {
    return new Response(`No markdown source for ${target}`, {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(renderMarkdownPage(page), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
