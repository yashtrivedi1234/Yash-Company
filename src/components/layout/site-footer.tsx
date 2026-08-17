import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { GitHubIcon, LinkedInIcon } from "@/components/brand/social-icons";
import {
  companyNav,
  legalNav,
  locationNav,
  serviceNav,
  technologyNav,
} from "@/lib/navigation";
import { formattedAddress, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface/50">
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Identity + NAP. Matches the LocalBusiness node exactly. */}
          <div>
            <Link href="/" aria-label="Codivra Solutions — home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.positioning} We build websites, mobile apps and custom
              software from Sitapur for clients across India.
            </p>

            <address className="mt-6 space-y-2.5 text-sm not-italic text-muted-foreground">
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{formattedAddress}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${site.contact.phone}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.phone}
                </a>
              </span>
              <span className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </span>
            </address>

            <p className="mt-4 text-sm text-muted-foreground">
              {site.hours.label}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codivra Solutions on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codivra Solutions on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceNav} />
          <FooterColumn title="Technologies" links={technologyNav} />
          <FooterColumn title="Locations" links={locationNav} />
          <FooterColumn title="Company" links={companyNav} />
        </div>

        {/* Cross-domain link to the training site with descriptive anchor
            text — a bare domain here would waste the strongest sitewide link
            we control. */}
        <div className="mt-14 rounded-[var(--radius-card)] border border-border bg-surface p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-base font-medium text-foreground">
              Looking to learn instead of hire?
            </p>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {site.trainingName} runs 30-day, 45-day and 6-month job-oriented
              developer programmes in Sitapur, covering MERN, Next.js, Python,
              Django, PHP, React Native and AI/ML.
            </p>
          </div>
          <a
            href={site.trainingUrl}
            className="mt-4 inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-link transition-colors hover:text-link-hover md:mt-0"
          >
            Explore developer training courses in Sitapur →
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Registered in {site.address.region},{" "}
            {site.address.countryName}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  const headingId = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <nav aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="text-xs font-semibold uppercase tracking-wider text-foreground"
      >
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
