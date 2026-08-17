import { JsonLd } from "@/components/schema/json-ld";
import { areaServed, site } from "@/lib/site";

/**
 * Stable @id values. Every other node on the site references these instead of
 * repeating the Organization block, which is what lets crawlers resolve the
 * whole site to one entity.
 */
export const ORGANIZATION_ID = `${site.url}/#organization`;
export const LOCALBUSINESS_ID = `${site.url}/#localbusiness`;
export const WEBSITE_ID = `${site.url}/#website`;

/**
 * Root @graph: Organization + LocalBusiness + WebSite.
 *
 * Emitted once from the root layout. Deliberately omits `aggregateRating` —
 * the brief forbids it without verifiable public reviews, and a fabricated
 * rating is a manual-action risk, not just a soft signal.
 */
export function RootGraph() {
  const sameAs = [site.social.linkedin, site.social.github, site.social.gbp]
    .filter((url): url is string => Boolean(url));

  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: site.legalName,
            alternateName: site.shortName,
            url: site.url,
            description: site.description,
            logo: {
              "@type": "ImageObject",
              url: `${site.url}/logo.png`,
              width: 512,
              height: 512,
            },
            image: `${site.url}/og/default.png`,
            foundingDate: String(site.foundedYear),
            founder: {
              "@type": "Person",
              name: site.founder.name,
              jobTitle: site.founder.role,
              sameAs: [site.founder.linkedin, site.founder.github],
            },
            address,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: site.contact.phone,
                email: site.contact.email,
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
            ],
            ...(sameAs.length > 0 ? { sameAs } : {}),
            subOrganization: {
              "@type": "EducationalOrganization",
              name: site.trainingName,
              url: site.trainingUrl,
            },
          },
          {
            "@type": "LocalBusiness",
            "@id": LOCALBUSINESS_ID,
            name: site.legalName,
            url: site.url,
            image: `${site.url}/office.jpg`,
            priceRange: "₹₹",
            telephone: site.contact.phone,
            email: site.contact.email,
            address,
            geo: {
              "@type": "GeoCoordinates",
              latitude: site.geo.lat,
              longitude: site.geo.lng,
            },
            parentOrganization: { "@id": ORGANIZATION_ID },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [...site.hours.days],
                opens: site.hours.opens,
                closes: site.hours.closes,
              },
            ],
            areaServed: [
              ...areaServed.map((city) => ({ "@type": "City", name: city })),
              { "@type": "State", name: site.address.region },
            ],
          },
          {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            url: site.url,
            name: site.legalName,
            description: site.description,
            inLanguage: "en-IN",
            publisher: { "@id": ORGANIZATION_ID },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${site.url}/search?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          },
        ],
      }}
    />
  );
}
