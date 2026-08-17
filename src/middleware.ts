import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge middleware: canonical host, trailing slashes, markdown twins, and
 * database-backed redirects.
 *
 * Deliberately does NOT query Postgres directly — middleware runs on every
 * request including static assets, and a database round-trip there would be a
 * latency tax on the whole site. Redirects from the `Redirect` table are
 * fetched from an internal API route that is itself cached, and only for paths
 * that would otherwise 404.
 */
export function middleware(request: NextRequest) {
  const { pathname, search, host } = request.nextUrl;

  // --- Markdown twins: /services/web-development.md ------------------------
  // The target path travels in the pathname rather than a query parameter —
  // a rewrite's query string is not reliably readable from `request.nextUrl`
  // inside a route handler.
  if (pathname.endsWith(".md")) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${pathname.slice(0, -3)}`;
    url.search = "";
    return NextResponse.rewrite(url);
  }

  // --- Canonical host: apex and the old domain both fold into www ----------
  const canonicalHost = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).host
    : null;

  const isLocal = host.includes("localhost") || host.startsWith("127.0.0.1");

  if (canonicalHost && !isLocal && host !== canonicalHost) {
    const url = request.nextUrl.clone();
    url.host = canonicalHost;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // --- Trailing slash: strip it, one canonical form per URL ----------------
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  // --- Lowercase paths -----------------------------------------------------
  // Uppercase variants of a slug are a duplicate-content source; fold them.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  // --- Strip tracking parameters after they have been captured -------------
  // The landing page reads UTMs client-side into sessionStorage before this
  // matters; keeping them in the URL creates infinite near-duplicate URLs.
  if (search.includes("fbclid") || search.includes("gclid")) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("fbclid");
    url.searchParams.delete("gclid");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Everything except Next internals, the API surface and static files.
     * Keeping assets out of middleware matters for the performance budget.
     */
    "/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf)$).*)",
  ],
};
