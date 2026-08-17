import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Build fails on type errors. The deliverable spec is "zero build warnings",
  // so this must never be relaxed to unblock a deploy. (Next 16 dropped the
  // `eslint` config key — linting runs as its own CI step via `pnpm lint`.)
  typescript: { ignoreBuildErrors: false },

  images: {
    // AVIF first, WebP fallback — matches the Cloudinary f_auto behaviour.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
    // Sized to the actual container widths used across the design, so the
    // optimizer is not generating variants nothing renders at.
    deviceSizes: [400, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  experimental: {
    // Tree-shakes barrel imports; lucide-react alone is ~1,500 modules
    // otherwise and blows the 180KB budget on its own.
    optimizePackageImports: ["lucide-react", "motion", "date-fns"],

    // Cap build parallelism. Next defaults to one worker per core (7 here),
    // and every worker holds its own connection pool — roughly 35 concurrent
    // queries against the database during prerendering.
    //
    // Neon's free tier runs on 0.25 vCPU and auto-suspends, so that much
    // concurrency queues past the connection timeout and fails the build.
    // Two workers keeps the build comfortably inside what a small instance
    // serves. Raise it once the database has real capacity — this is a
    // constraint of the database plan, not of the site.
    cpus: 2,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Answer engines fetch these directly; make them cheap to re-fetch.
        source: "/llms:path(.*).txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
