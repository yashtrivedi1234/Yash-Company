import type { TechCategory } from "../../src/generated/prisma/enums";

export type SeedFaq = {
  question: string;
  /** 50–150 words, answer-first. */
  answer: string;
};

export type SeedTechnology = {
  slug: string;
  name: string;
  category: TechCategory;
  logoUrl: string;
  summary: string;
  bodyMdx: string;
  metaTitle: string;
  metaDesc: string;
  order: number;
  faqs: SeedFaq[];
  /** Service slugs this technology is used on. */
  services: string[];
};

export type SeedTier = {
  name: string;
  price: string;
  priceNote: string;
  timeline: string;
  includes: string[];
  excludes: string[];
  popular?: boolean;
};

export type SeedService = {
  slug: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  answerBlock: string;
  bodyMdx: string;
  iconName: string;
  startingPrice: number | null;
  deliveryWeeks: string;
  tiers: SeedTier[];
  featured: boolean;
  order: number;
  metaTitle: string;
  metaDesc: string;
  faqs: SeedFaq[];
  technologies: string[];
  industries: string[];
};

export type SeedIndustry = {
  slug: string;
  name: string;
  shortDesc: string;
  answerBlock: string;
  bodyMdx: string;
  painPoints: { problem: string; consequence: string; solution: string }[];
  iconName: string;
  order: number;
  metaTitle: string;
  metaDesc: string;
  faqs: SeedFaq[];
  services: string[];
};

export type SeedLocation = {
  slug: string;
  city: string;
  district: string;
  isOffice: boolean;
  address?: string;
  lat?: number;
  lng?: number;
  distanceFromOffice?: string;
  answerBlock: string;
  /** Enforced at 400+ words by the seed. */
  bodyMdx: string;
  localProof?: string;
  metaTitle: string;
  metaDesc: string;
  order: number;
  faqs: SeedFaq[];
};

export type SeedProject = {
  slug: string;
  title: string;
  clientName?: string;
  industrySlug: string;
  summary: string;
  challengeMdx: string;
  solutionMdx: string;
  resultMdx: string;
  metrics: { label: string; before: string; after: string }[];
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  durationWeeks: number;
  year: number;
  featured: boolean;
  metaTitle: string;
  metaDesc: string;
  services: string[];
  technologies: string[];
};

export type SeedProduct = {
  slug: string;
  name: string;
  tagline: string;
  answerBlock: string;
  bodyMdx: string;
  features: { title: string; description: string; iconName: string }[];
  screenshots: string[];
  pricingMdx: string;
  demoUrl?: string;
  order: number;
  metaTitle: string;
  metaDesc: string;
  faqs: SeedFaq[];
};

export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  answerBlock: string;
  bodyMdx: string;
  coverImage: string;
  category: string;
  tags: string[];
  readMinutes: number;
  metaTitle: string;
  metaDesc: string;
  publishedAt: string;
  changelog: { date: string; note: string }[];
  faqs: SeedFaq[];
};

export type SeedMoneyPage = {
  slug: string;
  h1: string;
  serviceSlug: string;
  citySlug: string;
  answerBlock: string;
  bodyMdx: string;
  localProof?: string;
  metaTitle: string;
  metaDesc: string;
  faqs: SeedFaq[];
};
