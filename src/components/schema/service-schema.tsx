import { JsonLd } from "@/components/schema/json-ld";
import { ORGANIZATION_ID } from "@/components/schema/graph";
import { absoluteUrl, areaServed, site } from "@/lib/site";
import type { SeedTier } from "../../../prisma/seed-data/types";

/**
 * Service node. `provider` points at the Organization @id rather than
 * repeating the block, so crawlers resolve every service to one entity.
 */
export function ServiceSchema({
  name,
  description,
  path,
  startingPrice,
  tiers,
}: {
  name: string;
  description: string;
  path: string;
  startingPrice?: number | null;
  tiers?: SeedTier[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name,
        description,
        url: absoluteUrl(path),
        serviceType: name,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          ...areaServed.map((city) => ({ "@type": "City", name: city })),
          { "@type": "State", name: site.address.region },
          { "@type": "Country", name: "India" },
        ],
        ...(startingPrice
          ? {
              offers: {
                "@type": "Offer",
                price: startingPrice,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: absoluteUrl(path),
              },
            }
          : {}),
        ...(tiers && tiers.length > 0
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `${name} packages`,
                itemListElement: tiers.map((tier) => ({
                  "@type": "Offer",
                  name: tier.name,
                  description: tier.includes.join(". "),
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: tier.price,
                    priceCurrency: "INR",
                  },
                })),
              },
            }
          : {}),
      }}
    />
  );
}
