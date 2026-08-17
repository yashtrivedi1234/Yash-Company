import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Mdx } from "@/components/mdx";
import { ORGANIZATION_ID } from "@/components/schema/graph";
import { JsonLd } from "@/components/schema/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { getMoneyPageBySlug, getMoneyPages } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

/**
 * Root-level [service]-company-in-[city] landing pages.
 *
 * `dynamicParams = false` is important: this segment sits at the root, so
 * without it every unmatched URL on the site would fall through to here and
 * render instead of 404ing.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getMoneyPages();
  return pages.map((p) => ({ moneyPage: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[moneyPage]">): Promise<Metadata> {
  const { moneyPage } = await params;
  const page = await getMoneyPageBySlug(moneyPage);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDesc,
    path: `/${page.slug}`,
    imageSubtitle: page.h1,
  });
}

export default async function MoneyPage({ params }: PageProps<"/[moneyPage]">) {
  const { moneyPage } = await params;
  const page = await getMoneyPageBySlug(moneyPage);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${absoluteUrl(`/${page.slug}`)}#service`,
          name: page.h1,
          description: page.metaDesc,
          url: absoluteUrl(`/${page.slug}`),
          serviceType: page.service.title,
          provider: { "@id": ORGANIZATION_ID },
          areaServed: {
            "@type": "City",
            name: page.location.city,
            containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
          },
          ...(page.service.startingPrice
            ? {
                offers: {
                  "@type": "Offer",
                  price: page.service.startingPrice,
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              }
            : {}),
        }}
      />

      <div className="container-site pt-8">
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/locations" },
            { label: page.location.city, href: `/locations/${page.location.slug}` },
            { label: page.h1, href: `/${page.slug}` },
          ]}
        />
      </div>

      <header className="container-site">
        <div className="flex flex-wrap items-center gap-2">
          {page.service.startingPrice && (
            <Badge variant="primary">
              From {formatINR(page.service.startingPrice)}
            </Badge>
          )}
          {page.service.deliveryWeeks && <Badge>{page.service.deliveryWeeks}</Badge>}
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl">{page.h1}</h1>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer">{page.answerBlock}</AnswerBlock>
      </div>

      <div className="container-site mt-16">
        <Mdx source={page.bodyMdx} />
      </div>

      {page.localProof && (
        <section className="container-site mt-16" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className="text-2xl">
            Our work in {page.location.city}
          </h2>
          <div className="mt-6">
            <Mdx source={page.localProof} />
          </div>
        </section>
      )}

      <section className="container-site mt-16">
        <p className="text-sm text-muted-foreground">
          Read the full{" "}
          <Link href={`/services/${page.service.slug}`} className="text-link hover:text-link-hover">
            {page.service.title.toLowerCase()} service page
          </Link>{" "}
          for pricing tiers and process, or see everything we do in{" "}
          <Link
            href={`/locations/${page.location.slug}`}
            className="text-link hover:text-link-hover"
          >
            {page.location.city}
          </Link>
          .
        </p>
      </section>

      {page.faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={page.faqs} />
        </div>
      )}

      <CtaSection serviceSlug={page.service.slug} />
    </>
  );
}
