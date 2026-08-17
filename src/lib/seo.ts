import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export type SeoInput = {
  /** Page title without the brand suffix — the suffix is appended here. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/web-development". */
  path: string;
  /**
   * Absolute image URL. Omit to generate a branded OG card from the title.
   */
  image?: string;
  /** Subtitle drawn on the generated OG card. Ignored when `image` is set. */
  imageSubtitle?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  /** Article section, e.g. "Web Development". */
  section?: string;
  tags?: string[];
  noindex?: boolean;
  /** Set false on the homepage, where the title already carries the brand. */
  appendBrand?: boolean;
};

const BRAND_SUFFIX = `Codivra Solutions`;

/** 1200×630 branded card rendered by /api/og. */
export function ogImageUrl(title: string, subtitle?: string): string {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return `${site.url}/api/og?${params.toString()}`;
}

/**
 * The single metadata builder. Every route calls this — no route is allowed to
 * fall through to Next's defaults, because a missing canonical on a site with
 * this many near-neighbour URLs (service × city) is how duplicate-content
 * problems start.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageSubtitle,
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
  section,
  tags,
  noindex = false,
  appendBrand = true,
}: SeoInput): Metadata {
  const fullTitle =
    appendBrand && !title.includes(BRAND_SUFFIX)
      ? `${title} | ${BRAND_SUFFIX}`
      : title;

  const canonical = absoluteUrl(path);
  const imageUrl = image ?? ogImageUrl(title, imageSubtitle ?? description);

  if (process.env.NODE_ENV !== "production") {
    if (fullTitle.length > 60) {
      console.warn(
        `[seo] Title is ${fullTitle.length} chars (>60), will be truncated in SERPs: "${fullTitle}"`,
      );
    }
    if (description.length < 140 || description.length > 158) {
      console.warn(
        `[seo] Description is ${description.length} chars for ${path}; target is 140–158.`,
      );
    }
  }

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,

    alternates: {
      canonical,
      languages: {
        "en-IN": canonical,
        // Single-locale site: x-default points at the same URL so hreflang is
        // self-consistent rather than absent.
        "x-default": canonical,
      },
      types: {
        // Plain-markdown twin of this page, for answer engines that prefer it.
        "text/markdown": `${canonical === site.url ? `${site.url}/index` : canonical}.md`,
      },
    },

    robots: noindex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    openGraph: {
      type: type === "profile" ? "profile" : type,
      title: fullTitle,
      description,
      url: canonical,
      siteName: BRAND_SUFFIX,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: authorName ? [authorName] : undefined,
            section,
            tags,
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },

    authors: authorName ? [{ name: authorName }] : undefined,
    creator: BRAND_SUFFIX,
    publisher: BRAND_SUFFIX,

    formatDetection: { telephone: true, address: true, email: true },

    category: section,
  };
}

/**
 * Metadata for a page that must never be indexed (admin, previews, thank-you
 * pages that would otherwise cannibalise the conversion path).
 */
export function noindexMetadata(title: string): Metadata {
  return {
    title: `${title} | ${BRAND_SUFFIX}`,
    robots: { index: false, follow: false, nocache: true },
  };
}
