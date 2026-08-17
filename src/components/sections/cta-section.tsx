import { ArrowRight, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * The end-of-page conversion block, used on every content page.
 *
 * Carries the response-time promise, which the conversion spec requires near
 * every form — a visible commitment measurably lifts submission rates, and it
 * is one we can actually keep.
 */
export function CtaSection({
  title = "Tell us what you need building",
  description = "A 30-minute call, then a fixed quote with the scope written down. No obligation, and we will tell you if you do not need what you think you need.",
  serviceSlug,
}: {
  title?: string;
  description?: string;
  /** Pre-selects the service on the contact form. */
  serviceSlug?: string;
}) {
  const contactHref = serviceSlug
    ? `/contact?service=${encodeURIComponent(serviceSlug)}`
    : "/contact";

  return (
    <section className="container-site my-24">
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-8 md:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl [background-image:var(--gradient-brand)]"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="gradient">
              <Link href={contactHref}>
                Start a project
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={`tel:${site.contact.phone}`}>
                <Phone aria-hidden="true" />
                {site.contact.phone}
              </a>
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
            {site.contact.responsePromise} · {site.hours.label}
          </p>
        </div>
      </div>
    </section>
  );
}
