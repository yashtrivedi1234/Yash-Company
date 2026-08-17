import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serviceNav } from "@/lib/navigation";
import { noindexMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = noindexMetadata("Page not found");

/**
 * Suggests a way forward rather than dead-ending. A 404 that offers the most
 * likely destinations recovers a share of visits that would otherwise bounce.
 */
export default function NotFound() {
  return (
    <div className="container-site py-24">
      <p className="font-mono text-sm text-link">404</p>
      <h1 className="mt-3 max-w-2xl text-4xl">
        That page does not exist
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        The link may be out of date, or the address may have a typo. Here is
        where most people are heading.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg" variant="gradient">
          <Link href="/">
            Go to the homepage
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>

      <section className="mt-16" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-2xl">
          Popular pages
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceNav.map((item) => (
            <Card key={item.href} interactive className="p-5">
              <Link href={item.href} className="block">
                <h3 className="font-medium text-foreground">{item.label}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-muted-foreground">
        Still stuck? Call{" "}
        <a
          href={`tel:${site.contact.phone}`}
          className="text-link hover:text-link-hover"
        >
          {site.contact.phone}
        </a>{" "}
        or browse the{" "}
        <Link href="/sitemap" className="text-link hover:text-link-hover">
          full sitemap
        </Link>
        .
      </p>
    </div>
  );
}
