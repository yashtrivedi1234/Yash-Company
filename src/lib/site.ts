import { env } from "@/lib/env";

/**
 * Single source of truth for company facts.
 *
 * Anything that appears in JSON-LD, llms.txt, the footer, or the contact page
 * is read from here so the same string cannot drift between the visible page
 * and the structured data describing it.
 */
export const site = {
  legalName: "Codivra Solutions",
  name: "Codivra Solutions",
  shortName: "Codivra",
  url: env.NEXT_PUBLIC_SITE_URL,
  trainingUrl: env.NEXT_PUBLIC_TRAINING_URL,
  trainingName: "Codivra Training",

  positioning: "A software company built in a district, shipping to the country.",
  description:
    "Codivra Solutions builds websites, mobile apps and custom software from Sitapur, Uttar Pradesh. Fixed quotes, weekly demos, code you own.",

  foundedYear: 2026,

  founder: {
    name: "Yash Trivedi",
    role: "Founder & Lead Engineer",
    linkedin: "https://linkedin.com/in/yash-trivedi-contact",
    github: "https://github.com/yashtrivedi1234",
  },

  contact: {
    phone: env.NEXT_PUBLIC_PHONE,
    /** Digits only — used to build wa.me deep links. */
    whatsapp: env.NEXT_PUBLIC_WHATSAPP,
    email: env.NEXT_PUBLIC_EMAIL,
    /** Shown next to every form. Keep this honest. */
    responsePromise: "We reply within 4 working hours",
  },

  address: {
    street: "816, Vikas Nagar Colony, Khoobpur",
    locality: "Sitapur",
    region: "Uttar Pradesh",
    postalCode: "261001",
    country: "IN",
    countryName: "India",
  },

  geo: {
    lat: 27.5678,
    lng: 80.682,
  },

  hours: {
    label: "Monday to Saturday, 10:00 – 19:00 IST",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ] as const,
    opens: "10:00",
    closes: "19:00",
  },

  /**
   * Only URLs that actually resolve belong here — `sameAs` pointing at a dead
   * profile is a trust signal working against you.
   *
   * A Google Business Profile URL belongs here once the listing is live: for a
   * local business it is one of the strongest entity signals available. Add it
   * as a literal string when you have one.
   */
  social: {
    linkedin: "https://linkedin.com/in/yash-trivedi-contact",
    github: "https://github.com/yashtrivedi1234",
  },

  analytics: {
    gaId: env.NEXT_PUBLIC_GA_ID,
    clarityId: env.NEXT_PUBLIC_CLARITY_ID,
  },
} as const;

/** Absolute URL for a site-relative path. Accepts "/x" or "x". */
export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized === "/" ? "" : normalized}`;
}

/** Full postal address on one line, for footers and contact blocks. */
export const formattedAddress = [
  site.address.street,
  site.address.locality,
  `${site.address.region} ${site.address.postalCode}`,
  site.address.countryName,
].join(", ");

/** wa.me deep link carrying a prefilled message that names the current page. */
export function whatsappLink(pageUrl?: string, message?: string): string {
  const base =
    message ??
    "Hi Codivra, I'd like to discuss a project.";
  const text = pageUrl ? `${base}\n\nPage: ${pageUrl}` : base;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Districts we actively quote for. Drives `areaServed` in LocalBusiness. */
export const areaServed = [
  "Sitapur",
  "Lucknow",
  "Lakhimpur Kheri",
  "Hardoi",
  "Barabanki",
  "Shahjahanpur",
  "Bahraich",
  "Kanpur",
  "Gorakhpur",
  "Varanasi",
] as const;
