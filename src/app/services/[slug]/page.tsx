import { ArrowRight, Check, X } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Mdx } from "@/components/mdx";
import { ServiceSchema } from "@/components/schema/service-schema";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServiceBySlug, getServices } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { cn, formatINR } from "@/lib/utils";
import type { SeedTier } from "../../../../prisma/seed-data/types";

export const revalidate = 86400;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDesc,
    path: `/services/${service.slug}`,
    imageSubtitle: service.shortDesc,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const tiers = (service.tiers ?? []) as unknown as SeedTier[];

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.metaDesc}
        path={`/services/${service.slug}`}
        startingPrice={service.startingPrice}
        tiers={tiers}
      />

      <div className="container-site pt-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="container-site">
        <div className="flex flex-wrap items-center gap-2">
          {service.startingPrice && (
            <Badge variant="primary">
              From {formatINR(service.startingPrice)}
            </Badge>
          )}
          {service.deliveryWeeks && (
            <Badge>{service.deliveryWeeks}</Badge>
          )}
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl">{service.heroHeadline}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {service.shortDesc}
        </p>
      </header>

      {/* Answer-first block, inside the first 200 words of the DOM */}
      <div className="container-site mt-10">
        <AnswerBlock id="answer" label={`What is ${service.title}?`}>
          {service.answerBlock}
        </AnswerBlock>
      </div>

      {/* Body */}
      <div className="container-site mt-16">
        <Mdx source={service.bodyMdx} />
      </div>

      {/* Pricing tiers */}
      {tiers.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl">
            Pricing
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every quote is fixed before work starts. What is excluded is listed
            as plainly as what is included — a quote without an exclusions list
            is not a fixed quote.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  "flex flex-col p-6",
                  tier.popular && "border-primary/40 shadow-[var(--shadow-glow)]",
                )}
              >
                {tier.popular && (
                  <Badge variant="primary" className="mb-4 self-start">
                    Most chosen
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-3 text-3xl font-semibold text-foreground">
                  {tier.price}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.priceNote} · {tier.timeline}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-subtle-foreground">
                    Not included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {tier.excludes.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <X
                          className="mt-0.5 h-4 w-4 shrink-0 text-subtle-foreground"
                          aria-hidden="true"
                        />
                        <span className="text-subtle-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant={tier.popular ? "gradient" : "ghost"}
                  className="mt-6 w-full"
                >
                  <Link href={`/contact?service=${service.slug}&tier=${encodeURIComponent(tier.name)}`}>
                    Get a quote
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Technologies — internal links required by the linking spec */}
      {service.technologies.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="text-3xl">
            What we build it with
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.technologies.map((tech) => (
              <Card key={tech.slug} interactive className="p-5">
                <Link href={`/technologies/${tech.slug}`} className="block">
                  <h3 className="font-medium text-foreground">{tech.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {tech.summary}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Industries */}
      {service.industries.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="industries-heading">
          <h2 id="industries-heading" className="text-3xl">
            Who this is for
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {service.industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  {industry.name}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Case studies, when we have them */}
      {service.projects.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="work-heading">
          <h2 id="work-heading" className="text-3xl">
            Related work
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {service.projects.map((project) => (
              <Card key={project.slug} interactive className="p-6">
                <Link href={`/work/${project.slug}`}>
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {service.faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={service.faqs} />
        </div>
      )}

      <CtaSection serviceSlug={service.slug} />
    </>
  );
}
