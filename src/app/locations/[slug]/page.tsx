import { MapPin, Navigation } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Mdx } from "@/components/mdx";
import { JsonLd } from "@/components/schema/json-ld";
import { LOCALBUSINESS_ID, ORGANIZATION_ID } from "@/components/schema/graph";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { getLocationBySlug, getLocations } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const revalidate = 86400;

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) return {};

  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDesc,
    path: `/locations/${location.slug}`,
    imageSubtitle: `${location.city}, ${location.state}`,
  });
}

export default async function LocationPage({
  params,
}: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) notFound();

  const path = `/locations/${location.slug}`;

  return (
    <>
      {/*
        The office location gets the full LocalBusiness node with address and
        geo. Every other city gets a Service node with areaServed — claiming a
        LocalBusiness at an address we do not occupy would be a spam signal.
      */}
      <JsonLd
        data={
          location.isOffice
            ? {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": LOCALBUSINESS_ID,
                name: site.legalName,
                url: absoluteUrl(path),
                telephone: site.contact.phone,
                email: site.contact.email,
                priceRange: "₹₹",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: site.address.street,
                  addressLocality: location.city,
                  addressRegion: location.state,
                  postalCode: site.address.postalCode,
                  addressCountry: "IN",
                },
                ...(location.lat && location.lng
                  ? {
                      geo: {
                        "@type": "GeoCoordinates",
                        latitude: location.lat,
                        longitude: location.lng,
                      },
                    }
                  : {}),
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [...site.hours.days],
                    opens: site.hours.opens,
                    closes: site.hours.closes,
                  },
                ],
              }
            : {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": `${absoluteUrl(path)}#service`,
                name: `Software development in ${location.city}`,
                description: location.metaDesc,
                url: absoluteUrl(path),
                provider: { "@id": ORGANIZATION_ID },
                areaServed: {
                  "@type": "City",
                  name: location.city,
                  containedInPlace: { "@type": "State", name: location.state },
                },
              }
        }
      />

      <div className="container-site pt-8">
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/locations" },
            { label: location.city, href: path },
          ]}
        />
      </div>

      <header className="container-site">
        <div className="flex flex-wrap items-center gap-2">
          {location.isOffice ? (
            <Badge variant="success">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Our office
            </Badge>
          ) : (
            location.distanceFromOffice && (
              <Badge>
                <Navigation className="h-3 w-3" aria-hidden="true" />
                {location.distanceFromOffice}
              </Badge>
            )
          )}
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl">
          Software &amp; web development in {location.city}
        </h1>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label={`Codivra in ${location.city}`}>
          {location.answerBlock}
        </AnswerBlock>
      </div>

      <div className="container-site mt-16">
        <Mdx source={location.bodyMdx} />
      </div>

      {location.localProof && (
        <section className="container-site mt-16" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className="text-2xl">
            Our work in {location.city}
          </h2>
          <div className="mt-6">
            <Mdx source={location.localProof} />
          </div>
        </section>
      )}

      {location.moneyPages.length > 0 && (
        <section className="container-site mt-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl">
            More in {location.city}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {location.moneyPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  {page.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {location.faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={location.faqs} />
        </div>
      )}

      <CtaSection title={`Start a project in ${location.city}`} />
    </>
  );
}
