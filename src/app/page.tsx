import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/geo/answer-block";
import { FaqAccordion } from "@/components/geo/faq-accordion";
import { StatStrip } from "@/components/geo/stat-callout";
import { CtaSection } from "@/components/sections/cta-section";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getFeaturedProjects,
  getGlobalFaqs,
  getIndustries,
  getProducts,
  getServices,
  getTechnologies,
} from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { formatINR } from "@/lib/utils";

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Software & Web Development Company in Sitapur",
    description:
      "Codivra Solutions builds websites, mobile apps and custom software from Sitapur, Uttar Pradesh. Fixed quotes, weekly demos, code you own.",
    path: "/",
  });
}

const PROCESS = [
  { step: "Discovery call", duration: "30 minutes", detail: "You describe the problem. We ask what number should move." },
  { step: "Scope and fixed quote", duration: "2–3 days", detail: "Module list, data model, and an explicit out-of-scope list." },
  { step: "Design", duration: "1–2 weeks", detail: "Wireframes then visuals, signed off before any code is written." },
  { step: "Build in weekly sprints", duration: "2–12 weeks", detail: "A staging URL you can open every Friday. No black box." },
  { step: "Testing and launch", duration: "1 week", detail: "Real devices, real connections, then DNS cutover and handover." },
  { step: "Support", duration: "90 days included", detail: "Bugs and small changes covered. Then optional from ₹3,000/month." },
];

const WHY = [
  { title: "Fixed quotes, no scope-creep billing", detail: "The price is agreed before work starts. We do not bill hourly against an open scope, because that arrangement pays us for being slow." },
  { title: "You talk to the engineer", detail: "Not an account manager relaying messages. The person on your call is the person writing the code." },
  { title: "Code on your own GitHub", detail: "Repository, domain and hosting all in your name from day one. If you leave, you take everything and nothing needs buying back." },
  { title: "90 days of support after launch", detail: "Included, not an upsell. Bugs and small content changes covered while you settle in." },
];

export default async function HomePage() {
  const [services, technologies, industries, products, projects, faqs] =
    await Promise.all([
      getServices(),
      getTechnologies(),
      getIndustries(),
      getProducts(),
      getFeaturedProjects(3),
      getGlobalFaqs(8),
    ]);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl [animation:var(--animate-gradient)] [background-image:var(--gradient-brand)]"
        />
        <div className="container-site relative grid gap-12 pb-8 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-24">
          <div>
            <Badge variant="primary">{site.positioning}</Badge>
            <h1 className="mt-5 text-5xl">
              Software development company in Sitapur, building for clients
              across India
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We build web apps, mobile apps, custom business software and AI
              features. Fixed quotes, weekly demos, and source code you own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Start a project
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/work">See our work</Link>
              </Button>
            </div>
          </div>

          {/* Real code, not a decorative screenshot. */}
          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-1 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              <span className="ml-2 font-mono text-xs text-subtle-foreground">
                app/services/[slug]/page.tsx
              </span>
            </div>
            <pre className="overflow-x-auto rounded-[var(--radius-lg)] bg-background p-5 font-mono text-[0.8125rem] leading-relaxed">
              <code className="text-muted-foreground">{`export const revalidate = 86400;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="container-site pb-4">
          <StatStrip
            stats={[
              { value: String(services.length), label: "Services" },
              { value: String(technologies.length), label: "Technologies" },
              { value: "₹15,000", label: "Websites from" },
              { value: "4 hrs", label: "Reply time" },
            ]}
          />
        </div>
      </section>

      {/* 2. Answer-first block — the paragraph answer engines lift */}
      <div className="container-site mt-16">
        <AnswerBlock id="about-answer" label="What is Codivra Solutions?">
          Codivra Solutions is a software development company in Sitapur, Uttar
          Pradesh. We build business websites, Android and iOS apps, custom
          software and AI features for clients across India. Projects start at
          ₹15,000, run on fixed quotes with weekly demos, and ship with full
          source code ownership.
        </AnswerBlock>
      </div>

      {/* 3. Services */}
      <section className="container-site mt-24" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl">What we build</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} interactive className="flex flex-col p-6">
              <Link href={`/services/${service.slug}`} className="flex flex-1 flex-col">
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDesc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-link">
                  {service.startingPrice
                    ? `From ${formatINR(service.startingPrice)}`
                    : "Learn more"}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Technology marquee */}
      <div className="mt-24">
        <TechMarquee names={technologies.map((t) => t.name)} />
      </div>

      {/* 5. Featured work — honest empty state until real case studies exist */}
      <section className="container-site mt-24" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-3xl">Recent work</h2>
        {projects.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.slug} interactive className="p-6">
                <Link href={`/work/${project.slug}`}>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-8 p-8">
            <p className="max-w-2xl text-muted-foreground">
              Codivra was founded in {site.foundedYear} and our first client case
              studies are being written up as projects complete. Rather than fill
              this space with invented logos, here is what we have actually
              shipped: four production systems now sold as{" "}
              <Link href="/products" className="text-link hover:text-link-hover">
                ready-made products
              </Link>{" "}
              — school management, clinic management, billing and POS, and HR and
              payroll.
            </p>
          </Card>
        )}
      </section>

      {/* 6. Process */}
      <section className="container-site mt-24" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-3xl">How a project runs</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((item, i) => (
            <li key={item.step}>
              <Card className="h-full p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-subtle-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-medium text-foreground">{item.step}</h3>
                </div>
                <p className="mt-1 pl-9 text-xs uppercase tracking-wider text-link">
                  {item.duration}
                </p>
                <p className="mt-3 pl-9 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {/* 7. Industries */}
      <section className="container-site mt-24" aria-labelledby="industries-heading">
        <h2 id="industries-heading" className="text-3xl">Industries we know</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                {industry.name}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Why Codivra */}
      <section className="container-site mt-24" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-3xl">Why work with us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {WHY.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="flex gap-2.5 font-medium text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                {item.title}
              </h3>
              <p className="mt-3 pl-[1.9rem] text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 9. Products */}
      <section className="container-site mt-24" aria-labelledby="products-heading">
        <h2 id="products-heading" className="text-3xl">Software you can buy today</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Four systems we already built and generalised. If your requirement is
          roughly 70% one of these, starting here costs far less than a build
          from zero.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.slug} interactive className="p-6">
              <Link href={`/products/${product.slug}`}>
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.tagline}</p>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* 11. Training cross-link */}
      <section className="container-site mt-24">
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl">We also train developers</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {site.trainingName} runs 30-day, 45-day and 6-month job-oriented
              programmes in Sitapur, covering MERN, Next.js, Python, Django, PHP,
              React Native and AI/ML.
            </p>
          </div>
          <Button asChild variant="ghost" size="lg" className="mt-6 shrink-0 md:mt-0">
            <a href={site.trainingUrl}>
              Developer training courses in Sitapur
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* 12. FAQ */}
      {faqs.length > 0 && (
        <div className="container-site mt-24">
          <FaqAccordion items={faqs} />
        </div>
      )}

      {/* 13. Final CTA */}
      <CtaSection />
    </>
  );
}
