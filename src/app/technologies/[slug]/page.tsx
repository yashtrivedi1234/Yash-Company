import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Mdx } from "@/components/mdx";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getTechnologies, getTechnologyBySlug } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

export async function generateStaticParams() {
  const technologies = await getTechnologies();
  return technologies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/technologies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tech = await getTechnologyBySlug(slug);
  if (!tech) return {};

  return buildMetadata({
    title: tech.metaTitle,
    description: tech.metaDesc,
    path: `/technologies/${tech.slug}`,
    imageSubtitle: tech.summary,
  });
}

export default async function TechnologyPage({
  params,
}: PageProps<"/technologies/[slug]">) {
  const { slug } = await params;
  const tech = await getTechnologyBySlug(slug);
  if (!tech) notFound();

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs
          items={[
            { label: "Technologies", href: "/technologies" },
            { label: tech.name, href: `/technologies/${tech.slug}` },
          ]}
        />
      </div>

      <header className="container-site">
        <Badge>{tech.category.replace("_", " & ")}</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl">
          {tech.name} development in Sitapur, India
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {tech.summary}
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label={`Should you use ${tech.name}?`}>
          {tech.metaDesc}
        </AnswerBlock>
      </div>

      <div className="container-site mt-16">
        <Mdx source={tech.bodyMdx} />
      </div>

      {tech.services.length > 0 && (
        <section className="container-site mt-20" aria-labelledby="svc-heading">
          <h2 id="svc-heading" className="text-3xl">
            Services using {tech.name}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tech.services.map((service) => (
              <Card key={service.slug} interactive className="p-5">
                <Link href={`/services/${service.slug}`} className="block">
                  <h3 className="font-medium text-foreground">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {service.shortDesc}
                  </p>
                  {service.startingPrice && (
                    <p className="mt-3 text-sm font-medium text-link">
                      From {formatINR(service.startingPrice)}
                    </p>
                  )}
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {tech.faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={tech.faqs} heading={`${tech.name} questions`} />
        </div>
      )}

      <CtaSection
        title={`Need a ${tech.name} developer?`}
        description="Tell us what you are building. If another technology fits better we will say so on the first call, before anyone has spent money."
      />
    </>
  );
}
