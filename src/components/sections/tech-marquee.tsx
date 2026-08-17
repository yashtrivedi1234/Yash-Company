import { cn } from "@/lib/utils";

/**
 * Two infinite rows moving in opposite directions.
 *
 * Pure CSS animation on a duplicated list — no JS, no layout thrash, and
 * `prefers-reduced-motion` stops it via the `.marquee-track` guard in
 * globals.css. Rendered as text rather than 25 logo images, which would be 25
 * extra requests for decoration.
 */
export function TechMarquee({ names }: { names: string[] }) {
  const mid = Math.ceil(names.length / 2);
  const rows = [names.slice(0, mid), names.slice(mid)];

  return (
    <section
      className="mask-fade-x space-y-4 overflow-hidden py-4"
      aria-label="Technologies we work with"
    >
      {rows.map((row, i) => (
        <div key={i} className="flex overflow-hidden">
          <div
            className={cn(
              "marquee-track flex shrink-0 items-center gap-3 pr-3",
              i === 0
                ? "[animation:var(--animate-marquee)]"
                : "[animation:var(--animate-marquee-reverse)]",
            )}
          >
            {/* Duplicated so the -50% translate loops seamlessly. */}
            {[...row, ...row].map((name, j) => (
              <span
                key={`${name}-${j}`}
                aria-hidden={j >= row.length}
                className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
