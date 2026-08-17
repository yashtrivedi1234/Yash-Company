import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/geo/answer-block";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Card } from "@/components/ui/card";
import { getTechnologies } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 86400;

const CATEGORY_LABELS: Record<string, string> = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  MOBILE: "Mobile",
  DATABASE: "Databases",
  AI_ML: "AI & Machine Learning",
  DEVOPS: "DevOps & Hosting",
  CMS: "Content Management",
  DESIGN: "Design",
};

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Technologies We Build With",
    description:
      "The 25 technologies Codivra Solutions builds with, and honestly when each one is the wrong choice. React, Next.js, Node, Python, Flutter and more.",
    path: "/technologies",
  });
}

export default async function TechnologiesPage() {
  const technologies = await getTechnologies();

  const grouped = technologies.reduce<Record<string, typeof technologies>>(
    (acc, tech) => {
      (acc[tech.category] ??= []).push(tech);
      return acc;
    },
    {},
  );

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs items={[{ label: "Technologies", href: "/technologies" }]} />
      </div>

      <header className="container-site">
        <h1 className="max-w-4xl text-4xl">Technologies we build with</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Every page below says when the technology is the right choice and,
          more usefully, when it is not.
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label="What does Codivra build with?">
          Codivra Solutions builds primarily with Next.js, React, TypeScript,
          Node.js and PostgreSQL for web, React Native and Flutter for mobile,
          and Python for AI and data work. We also maintain WordPress, PHP and
          Laravel systems built by other developers.
        </AnswerBlock>
      </div>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="container-site mt-16" aria-labelledby={`cat-${category}`}>
          <h2 id={`cat-${category}`} className="text-2xl">
            {CATEGORY_LABELS[category] ?? category}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((tech) => (
              <Card key={tech.slug} interactive className="p-5">
                <Link href={`/technologies/${tech.slug}`} className="block">
                  <h3 className="font-medium text-foreground">{tech.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {tech.summary}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <CtaSection
        title="Not sure which stack you need?"
        description="That is the right position to be in. Describe what the software has to do and we will recommend a stack — including the case for one we would not have picked ourselves."
      />
    </>
  );
}
