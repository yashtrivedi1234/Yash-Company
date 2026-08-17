import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Crawler policy.
 *
 * The deliberate position: AI search engines and AI training crawlers are
 * ALLOWED, because being inside the models and being citable in answers is
 * distribution. Scrapers that resell content without sending traffic or
 * citations are blocked, because there is nothing in it for us.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = ["/"];

  const aiSearchAndAnswerEngines = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Claude-Web",
    "Google-Extended",
    "Applebot-Extended",
    "Amazonbot",
    "YouBot",
  ];

  const aiTrainingCrawlers = [
    "GPTBot",
    "ClaudeBot",
    "anthropic-ai",
    "CCBot",
    "cohere-ai",
    "FacebookBot",
  ];

  const blockedScrapers = [
    "Bytespider",
    "Diffbot",
    "omgili",
    "omgilibot",
    "img2dataset",
    "PetalBot",
    "DataForSeoBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: allowAll,
        disallow: [
          "/admin",
          "/api/",
          "/_next/",
          // Tracking parameters create infinite near-duplicate URLs.
          "/*?utm_",
          "/*?fbclid",
        ],
      },
      { userAgent: "Googlebot", allow: allowAll },
      { userAgent: "Bingbot", allow: allowAll },

      ...aiSearchAndAnswerEngines.map((userAgent) => ({
        userAgent,
        allow: allowAll,
      })),
      ...aiTrainingCrawlers.map((userAgent) => ({
        userAgent,
        allow: allowAll,
      })),
      ...blockedScrapers.map((userAgent) => ({
        userAgent,
        disallow: ["/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url.replace(/^https?:\/\//, ""),
  };
}
