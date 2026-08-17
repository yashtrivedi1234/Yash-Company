import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/schema/json-ld";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  /** 50–150 words, answer-first. Plain text — no markup. */
  answer: string;
};

/**
 * Built on native <details>/<summary> rather than a JS accordion.
 *
 * The brief requires the answer text to be present and readable without
 * JavaScript: a Radix accordion unmounts collapsed panels, so an answer
 * engine that does not execute JS sees empty sections. `<details>` keeps every
 * answer in the served HTML, works with keyboard and screen readers for free,
 * and costs zero bytes of client JS.
 */
export function FaqAccordion({
  items,
  heading = "Frequently asked questions",
  headingLevel: Heading = "h2",
  id = "faq",
  emitSchema = true,
  className,
}: {
  items: FaqItem[];
  heading?: string | null;
  headingLevel?: "h2" | "h3";
  id?: string;
  /**
   * Set false when a page renders more than one FAQ block — Google expects a
   * single FAQPage node per URL covering all of them.
   */
  emitSchema?: boolean;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section id={id} className={cn("scroll-mt-24", className)} aria-labelledby={`${id}-heading`}>
      {heading ? (
        <Heading id={`${id}-heading`} className="text-3xl">
          {heading}
        </Heading>
      ) : (
        <span id={`${id}-heading`} className="sr-only">
          Frequently asked questions
        </span>
      )}

      <div className="mt-8 divide-y divide-border overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary
              className={cn(
                "flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6",
                "text-left font-medium text-foreground",
                "transition-colors hover:bg-surface-2",
                "[&::-webkit-details-marker]:hidden",
              )}
            >
              <span className="text-base">{item.question}</span>
              <ChevronDown
                className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <p className="max-w-[68ch] text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

      {emitSchema && <JsonLd data={faqPageSchema(items)} />}
    </section>
  );
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
