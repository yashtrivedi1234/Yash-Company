import { unstable_cache } from "next/cache";
import { db } from "@/lib/db";

/**
 * Cached data access.
 *
 * Every read goes through `unstable_cache` with a tag, so pages stay
 * statically generated and revalidate on a schedule rather than putting
 * Postgres on the critical path of each request. The admin panel invalidates
 * by tag on save (see `revalidateContent`).
 */

const DAY = 60 * 60 * 24;

export const TAGS = {
  services: "services",
  technologies: "technologies",
  industries: "industries",
  locations: "locations",
  products: "products",
  posts: "posts",
  moneyPages: "money-pages",
  projects: "projects",
  testimonials: "testimonials",
  faqs: "faqs",
  glossary: "glossary",
  jobs: "jobs",
} as const;

const faqSelect = { question: true, answer: true } as const;
const faqOrder = { order: "asc" } as const;

// --- Services ---------------------------------------------------------------

export const getServices = unstable_cache(
  async () =>
    db.service.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ["services:list"],
  { tags: [TAGS.services], revalidate: DAY },
);

export const getServiceBySlug = unstable_cache(
  async (slug: string) =>
    db.service.findFirst({
      where: { slug, published: true },
      include: {
        faqs: { select: faqSelect, orderBy: faqOrder },
        technologies: {
          where: { published: true },
          orderBy: { order: "asc" },
          select: { slug: true, name: true, summary: true, category: true },
        },
        industries: {
          where: { published: true },
          orderBy: { order: "asc" },
          select: { slug: true, name: true, shortDesc: true, iconName: true },
        },
        projects: {
          where: { published: true },
          take: 2,
          orderBy: { year: "desc" },
          select: { slug: true, title: true, summary: true, coverImage: true, metrics: true },
        },
      },
    }),
  ["services:detail"],
  { tags: [TAGS.services], revalidate: DAY },
);

// --- Technologies -----------------------------------------------------------

export const getTechnologies = unstable_cache(
  async () =>
    db.technology.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ["technologies:list"],
  { tags: [TAGS.technologies], revalidate: DAY },
);

export const getTechnologyBySlug = unstable_cache(
  async (slug: string) =>
    db.technology.findFirst({
      where: { slug, published: true },
      include: {
        faqs: { select: faqSelect, orderBy: faqOrder },
        services: {
          where: { published: true },
          orderBy: { order: "asc" },
          select: { slug: true, title: true, shortDesc: true, startingPrice: true, iconName: true },
        },
        projects: {
          where: { published: true },
          take: 3,
          select: { slug: true, title: true, summary: true, coverImage: true },
        },
      },
    }),
  ["technologies:detail"],
  { tags: [TAGS.technologies], revalidate: DAY },
);

// --- Industries -------------------------------------------------------------

export const getIndustries = unstable_cache(
  async () =>
    db.industry.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ["industries:list"],
  { tags: [TAGS.industries], revalidate: DAY },
);

export const getIndustryBySlug = unstable_cache(
  async (slug: string) =>
    db.industry.findFirst({
      where: { slug, published: true },
      include: {
        faqs: { select: faqSelect, orderBy: faqOrder },
        services: {
          where: { published: true },
          orderBy: { order: "asc" },
          select: { slug: true, title: true, shortDesc: true, startingPrice: true, iconName: true },
        },
        projects: {
          where: { published: true },
          take: 3,
          orderBy: { year: "desc" },
          select: { slug: true, title: true, summary: true, coverImage: true, metrics: true },
        },
      },
    }),
  ["industries:detail"],
  { tags: [TAGS.industries], revalidate: DAY },
);

// --- Locations --------------------------------------------------------------

export const getLocations = unstable_cache(
  async () =>
    db.location.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ["locations:list"],
  { tags: [TAGS.locations], revalidate: DAY },
);

export const getLocationBySlug = unstable_cache(
  async (slug: string) =>
    db.location.findFirst({
      where: { slug, published: true },
      include: {
        faqs: { select: faqSelect, orderBy: faqOrder },
        moneyPages: {
          where: { published: true },
          select: { slug: true, h1: true },
        },
      },
    }),
  ["locations:detail"],
  { tags: [TAGS.locations], revalidate: DAY },
);

// --- Money pages ------------------------------------------------------------

export const getMoneyPages = unstable_cache(
  async () =>
    db.moneyPage.findMany({
      where: { published: true },
      orderBy: { slug: "asc" },
    }),
  ["money-pages:list"],
  { tags: [TAGS.moneyPages], revalidate: DAY },
);

export const getMoneyPageBySlug = unstable_cache(
  async (slug: string) =>
    db.moneyPage.findFirst({
      where: { slug, published: true },
      include: {
        faqs: { select: faqSelect, orderBy: faqOrder },
        service: {
          select: { slug: true, title: true, startingPrice: true, deliveryWeeks: true },
        },
        location: { select: { slug: true, city: true, district: true, isOffice: true } },
      },
    }),
  ["money-pages:detail"],
  { tags: [TAGS.moneyPages], revalidate: DAY },
);

// --- Products ---------------------------------------------------------------

export const getProducts = unstable_cache(
  async () =>
    db.product.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ["products:list"],
  { tags: [TAGS.products], revalidate: DAY },
);

export const getProductBySlug = unstable_cache(
  async (slug: string) =>
    db.product.findFirst({
      where: { slug, published: true },
      include: { faqs: { select: faqSelect, orderBy: faqOrder } },
    }),
  ["products:detail"],
  { tags: [TAGS.products], revalidate: DAY },
);

// --- Projects (case studies) ------------------------------------------------

export const getProjects = unstable_cache(
  async () =>
    db.project.findMany({
      where: { published: true },
      orderBy: [{ featured: "desc" }, { year: "desc" }],
      include: {
        industry: { select: { slug: true, name: true } },
        services: { select: { slug: true, title: true } },
        technologies: { select: { slug: true, name: true } },
      },
    }),
  ["projects:list"],
  { tags: [TAGS.projects], revalidate: DAY },
);

export const getProjectBySlug = unstable_cache(
  async (slug: string) =>
    db.project.findFirst({
      where: { slug, published: true },
      include: {
        industry: { select: { slug: true, name: true } },
        services: { select: { slug: true, title: true } },
        technologies: { select: { slug: true, name: true } },
        testimonial: true,
      },
    }),
  ["projects:detail"],
  { tags: [TAGS.projects], revalidate: DAY },
);

export const getFeaturedProjects = unstable_cache(
  async (take = 3) =>
    db.project.findMany({
      where: { published: true, featured: true },
      orderBy: { year: "desc" },
      take,
      include: { industry: { select: { slug: true, name: true } } },
    }),
  ["projects:featured"],
  { tags: [TAGS.projects], revalidate: DAY },
);

// --- Blog -------------------------------------------------------------------

export const getPosts = unstable_cache(
  async () =>
    db.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      include: { author: { select: { slug: true, name: true, role: true, avatar: true } } },
    }),
  ["posts:list"],
  { tags: [TAGS.posts], revalidate: DAY },
);

export const getPostBySlug = unstable_cache(
  async (slug: string) =>
    db.post.findFirst({
      where: { slug, published: true },
      include: {
        author: true,
        faqs: { select: faqSelect, orderBy: faqOrder },
      },
    }),
  ["posts:detail"],
  { tags: [TAGS.posts], revalidate: DAY },
);

export const getAuthors = unstable_cache(
  async () => db.author.findMany({ orderBy: { name: "asc" } }),
  ["authors:list"],
  { tags: [TAGS.posts], revalidate: DAY },
);

export const getAuthorBySlug = unstable_cache(
  async (slug: string) =>
    db.author.findUnique({
      where: { slug },
      include: {
        posts: {
          where: { published: true },
          orderBy: { publishedAt: "desc" },
        },
      },
    }),
  ["authors:detail"],
  { tags: [TAGS.posts], revalidate: DAY },
);

// --- Testimonials, FAQs, glossary, jobs -------------------------------------

export const getFeaturedTestimonials = unstable_cache(
  async (take = 3) =>
    db.testimonial.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
      take,
    }),
  ["testimonials:featured"],
  { tags: [TAGS.testimonials], revalidate: DAY },
);

export const getGlobalFaqs = unstable_cache(
  async (take = 8) =>
    db.faq.findMany({
      where: { scope: "global" },
      orderBy: { order: "asc" },
      take,
      select: faqSelect,
    }),
  ["faqs:global"],
  { tags: [TAGS.faqs], revalidate: DAY },
);

export const getGlossaryTerms = unstable_cache(
  async () =>
    db.glossaryTerm.findMany({
      where: { published: true },
      orderBy: { term: "asc" },
    }),
  ["glossary:list"],
  { tags: [TAGS.glossary], revalidate: DAY },
);

export const getGlossaryTermBySlug = unstable_cache(
  async (slug: string) =>
    db.glossaryTerm.findFirst({ where: { slug, published: true } }),
  ["glossary:detail"],
  { tags: [TAGS.glossary], revalidate: DAY },
);

export const getJobPostings = unstable_cache(
  async () =>
    db.jobPosting.findMany({
      where: { published: true },
      orderBy: { postedAt: "desc" },
    }),
  ["jobs:list"],
  { tags: [TAGS.jobs], revalidate: DAY },
);

export const getJobPostingBySlug = unstable_cache(
  async (slug: string) =>
    db.jobPosting.findFirst({ where: { slug, published: true } }),
  ["jobs:detail"],
  { tags: [TAGS.jobs], revalidate: DAY },
);
