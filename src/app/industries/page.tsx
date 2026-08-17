import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/geo/answer-block";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card } from "@/components/ui/card";
import { getIndustries } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Industries We Build Software For",
    description:
      "Software for schools, clinics, traders, builders, dealerships, mills, hotels and professional practices across Sitapur and Uttar Pradesh.",
    path: "/industries",
  });
}

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />
      </div>

      <header className="container-site">
        <h1 className="max-w-4xl text-4xl">Industries we build for</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Eight sectors chosen because they are the businesses that actually
          operate around Sitapur — not a generic vertical list.
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label="Who does Codivra build for?">
          Codivra Solutions builds software for schools and coaching institutes,
          clinics and diagnostic labs, retailers and wholesalers, builders and
          brokers, automobile dealers, manufacturers and agri-processing units,
          hotels and restaurants, and professional practices.
        </AnswerBlock>
      </div>

      <section className="container-site mt-16" aria-label="All industries">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.slug} interactive className="p-6">
              <Link href={`/industries/${industry.slug}`} className="block">
                <h2 className="text-lg font-semibold text-foreground">
                  {industry.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.shortDesc}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
