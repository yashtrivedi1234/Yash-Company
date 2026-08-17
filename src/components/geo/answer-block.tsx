import { cn } from "@/lib/utils";

/**
 * The answer-first paragraph. This is the block an answer engine lifts, so it
 * has hard constraints:
 *
 *  - it must sit inside the first ~200 words of the DOM
 *  - it must answer the page's core question in 40–60 words
 *  - it must read as a standalone fact, not as a lead-in to the next section
 *
 * In development a word count outside 40–60 logs a warning rather than
 * throwing, so a slightly-off draft never blocks a build.
 */
export function AnswerBlock({
  children,
  id = "answer",
  label,
  className,
}: {
  children: string;
  id?: string;
  /** Optional eyebrow, e.g. "What is Codivra Solutions?" */
  label?: string;
  className?: string;
}) {
  if (process.env.NODE_ENV !== "production") {
    const words = children.trim().split(/\s+/).length;
    if (words < 40 || words > 60) {
      console.warn(
        `[AnswerBlock#${id}] ${words} words — the target is 40–60. ` +
          `Long answers get truncated by answer engines; short ones get passed over.`,
      );
    }
  }

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-6 md:p-8",
        className,
      )}
    >
      {/* Accent rule reads as an editorial pull-quote without competing with
          the surrounding headings. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 [background-image:var(--gradient-brand)]"
      />
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      )}
      <p className="max-w-[62ch] text-lg leading-relaxed text-foreground">
        {children}
      </p>
    </section>
  );
}
