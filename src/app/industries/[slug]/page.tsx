import { AlertCircle, ArrowRight, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Mdx } from "@/components/mdx";
import { CtaSection } from "@/components/sections/cta-section";
import { Card } from "@/components/ui/card";
import { getIndustries, getIndustryBySlug } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

type PainPoint = { problem: string; consequence: string; solution: string };

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDesc,
    path: `/industries/${industry.slug}`,
    imageSubtitle: industry.shortDesc,
  });
}

export default async function IndustryPage({
  params,
}: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) notFound();

  const painPoints = (industry.painPoints ?? []) as unknown as PainPoint[];

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: industry.name, href: `/industries/${industry.slug}` },
          ]}
        />
      </div>

      <header className="container-site">
        <h1 className="max-w-4xl text-4xl">
          Software for {industry.name.toLowerCase()} businesses in Uttar Pradesh
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {industry.shortDesc}
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label={`Software for ${industry.name}`}>
          {industry.answerBlock}
        </AnswerBlock>
      </div>

      {painPoints.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="problems-heading">
          <h2 id="problems-heading" className="text-3xl">
            What usually goes wrong
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {painPoints.map((point) => (
              <Card key={point.problem} className="p-6">
                <p className="flex gap-2.5 font-medium text-foreground">
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-warning"
                    aria-hidden="true"
                  />
                  {point.problem}
                </p>
                <p className="mt-3 pl-[1.9rem] text-sm text-muted-foreground">
                  {point.consequence}
                </p>
                <p className="mt-4 flex gap-2.5 border-t border-border pt-4 text-sm">
                  <Lightbulb
                    className="mt-0.5 h-5 w-5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{point.solution}</span>
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="container-site mt-20">
        <Mdx source={industry.bodyMdx} />
      </div>

      {industry.services.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="svc-heading">
          <h2 id="svc-heading" className="text-3xl">
            Services for {industry.name.toLowerCase()}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.services.map((service) => (
              <Card key={service.slug} interactive className="p-5">
                <Link href={`/services/${service.slug}`} className="block">
                  <h3 className="font-medium text-foreground">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {service.shortDesc}
                  </p>
                  {service.startingPrice && (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-link">
                      From {formatINR(service.startingPrice)}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </p>
                  )}
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {industry.faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={industry.faqs} />
        </div>
      )}

      <CtaSection
        title={`Talk to us about ${industry.name.toLowerCase()}`}
        description="We will tell you which system is worth building first, and which one you do not need yet. That conversation is free and often ends with a smaller project than you expected."
      />
    </>
  );
}
