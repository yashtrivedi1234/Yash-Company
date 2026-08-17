/**
 * Navigation is defined statically rather than queried per request.
 *
 * The header and footer render on every route; a database round-trip there
 * would put Postgres on the critical path of the LCP for the whole site. These
 * slugs are the canonical set and the seed script asserts they all exist, so a
 * renamed slug fails the seed rather than silently producing a 404 in the nav.
 */

export type NavLink = {
  href: string;
  label: string;
  /** Shown in the mega-menu under the label. */
  description?: string;
};

export const serviceNav: readonly NavLink[] = [
  {
    href: "/services/web-development",
    label: "Web Development",
    description: "Business websites and web apps. From ₹15,000.",
  },
  {
    href: "/services/mobile-app-development",
    label: "Mobile App Development",
    description: "Android and iOS apps. From ₹40,000.",
  },
  {
    href: "/services/custom-software-development",
    label: "Custom Software",
    description: "ERP, CRM and internal tools. From ₹50,000.",
  },
  {
    href: "/services/ecommerce-development",
    label: "Ecommerce Development",
    description: "Online stores with payments. From ₹25,000.",
  },
  {
    href: "/services/ai-ml-solutions",
    label: "AI & Machine Learning",
    description: "Chatbots, RAG and automation. From ₹60,000.",
  },
  {
    href: "/services/ui-ux-design",
    label: "UI/UX Design",
    description: "Product and website design. From ₹10,000.",
  },
  {
    href: "/services/seo-and-digital-marketing",
    label: "SEO & Digital Marketing",
    description: "Technical and local SEO. From ₹8,000/mo.",
  },
  {
    href: "/services/maintenance-and-support",
    label: "Maintenance & Support",
    description: "Updates, backups, monitoring. From ₹3,000/mo.",
  },
] as const;

/** Subset shown in the footer — the full 24 live on /technologies. */
export const technologyNav: readonly NavLink[] = [
  { href: "/technologies/nextjs", label: "Next.js" },
  { href: "/technologies/react", label: "React" },
  { href: "/technologies/nodejs", label: "Node.js" },
  { href: "/technologies/mern-stack", label: "MERN Stack" },
  { href: "/technologies/python", label: "Python" },
  { href: "/technologies/django", label: "Django" },
  { href: "/technologies/laravel", label: "Laravel" },
  { href: "/technologies/react-native", label: "React Native" },
  { href: "/technologies/flutter", label: "Flutter" },
  { href: "/technologies/wordpress", label: "WordPress" },
] as const;

/**
 * Only districts with a genuinely written location page appear here. Kanpur,
 * Gorakhpur, Varanasi and Bahraich are intentionally absent until someone has
 * written 400+ words about each that is actually about that city — linking to a
 * templated page would be worse than not linking at all.
 */
export const locationNav: readonly NavLink[] = [
  { href: "/locations/sitapur", label: "Sitapur" },
  { href: "/locations/lucknow", label: "Lucknow" },
  { href: "/locations/lakhimpur-kheri", label: "Lakhimpur Kheri" },
  { href: "/locations/hardoi", label: "Hardoi" },
  { href: "/locations/barabanki", label: "Barabanki" },
  { href: "/locations/shahjahanpur", label: "Shahjahanpur" },
] as const;

export const industryNav: readonly NavLink[] = [
  { href: "/industries/education", label: "Education" },
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/retail-and-wholesale", label: "Retail & Wholesale" },
  { href: "/industries/real-estate", label: "Real Estate" },
  { href: "/industries/automobile", label: "Automobile" },
  { href: "/industries/manufacturing", label: "Manufacturing & Agri" },
  { href: "/industries/hospitality", label: "Hospitality" },
  { href: "/industries/professional-services", label: "Professional Services" },
] as const;

export const companyNav: readonly NavLink[] = [
  { href: "/about", label: "About Codivra" },
  { href: "/work", label: "Our Work" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Sitemap" },
] as const;

export const legalNav: readonly NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

/** Top-level header items. Services gets a mega-menu; the rest are plain. */
export const primaryNav: readonly NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/technologies", label: "Technologies" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
