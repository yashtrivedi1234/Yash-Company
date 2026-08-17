import { cn } from "@/lib/utils";

/**
 * An original, attributable data point.
 *
 * `source` and `methodology` are required, not optional. A number without a
 * stated origin is the thing that gets a page dismissed as unreliable, and it
 * is exactly the kind of claim an answer engine will not repeat. If you cannot
 * fill both fields honestly, do not use this component.
 */
export function StatCallout({
  value,
  label,
  source,
  methodology,
  className,
}: {
  value: string;
  label: string;
  /** Where the number came from, e.g. "Codivra project records, 2026". */
  source: string;
  /** How it was measured, including sample size. */
  methodology: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "my-8 rounded-[var(--radius-card)] border border-border bg-surface p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-semibold tracking-tight text-gradient-brand">
          {value}
        </span>
        <span className="text-base font-medium text-foreground">{label}</span>
      </div>
      <figcaption className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Source:</span> {source}
        <br />
        <span className="font-medium text-foreground">Method:</span>{" "}
        {methodology}
      </figcaption>
    </figure>
  );
}

/** Row of headline numbers, used in the hero trust strip. */
export function StatStrip({
  stats,
  className,
}: {
  stats: ReadonlyArray<{ value: string; label: string }>;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border md:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="bg-surface px-5 py-4">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">
            {stat.label}
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-foreground">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
