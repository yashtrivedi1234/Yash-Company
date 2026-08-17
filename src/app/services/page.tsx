import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/geo/answer-block";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getServices } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Software & Web Development Services in Sitapur",
    description:
      "Web development from ₹15,000, mobile apps from ₹40,000, custom software from ₹50,000. Fixed quotes, weekly demos and source code you own.",
    path: "/services",
  });
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      </div>

      <header className="container-site">
        <h1 className="max-w-4xl text-4xl">
          What we build, and what it costs
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Eight services, each with real prices and an explicit list of what is
          excluded. No quote is a single line and a number.
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label="What does Codivra Solutions offer?">
          Codivra Solutions offers web development from ₹15,000, mobile app
          development from ₹40,000, custom software from ₹50,000, ecommerce from
          ₹25,000, AI features from ₹60,000, UI/UX design from ₹10,000, SEO from
          ₹8,000 a month and maintenance from ₹3,000 a month.
        </AnswerBlock>
      </div>

      <section className="container-site mt-16" aria-label="All services">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} interactive className="flex flex-col p-6">
              <Link href={`/services/${service.slug}`} className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  {service.startingPrice ? (
                    <Badge variant="primary">
                      From {formatINR(service.startingPrice)}
                    </Badge>
                  ) : (
                    <span />
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-link">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure which of these you need?"
        description="Describe the problem rather than the solution. Half our discovery calls end with us recommending something smaller than the client came in asking for."
      />
    </>
  );
}
