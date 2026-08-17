import { History } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate, isoDate } from "@/lib/utils";

/**
 * Visible freshness signal. Reads `updatedAt` straight from the database so it
 * cannot drift from reality — never hardcode a date here.
 */
export function LastUpdated({
  date,
  published,
  className,
}: {
  date: Date | string;
  published?: Date | string | null;
  className?: string;
}) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground", className)}>
      {published && (
        <>
          <span>
            Published{" "}
            <time dateTime={isoDate(published)}>{formatDate(published)}</time>
          </span>
          <span aria-hidden="true">·</span>
        </>
      )}
      <span className="inline-flex items-center gap-1.5">
        <History className="h-3.5 w-3.5" aria-hidden="true" />
        Last updated <time dateTime={isoDate(date)}>{formatDate(date)}</time>
      </span>
    </p>
  );
}

export type ChangelogEntry = { date: string; note: string };

/**
 * The "what changed" block on evergreen posts. Answer engines weight recency,
 * and a specific record of what was revised is far stronger evidence of
 * maintenance than a bumped date alone.
 */
export function Changelog({
  entries,
  className,
}: {
  entries: ChangelogEntry[];
  className?: string;
}) {
  if (entries.length === 0) return null;

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      className={cn(
        "my-10 rounded-[var(--radius-card)] border border-border bg-surface p-6",
        className,
      )}
      aria-labelledby="changelog-heading"
    >
      <h2 id="changelog-heading" className="text-base font-semibold text-foreground">
        What changed in this article
      </h2>
      <ol className="mt-4 space-y-3">
        {sorted.map((entry) => (
          <li key={`${entry.date}-${entry.note}`} className="flex gap-4 text-sm">
            <time
              dateTime={entry.date}
              className="w-28 shrink-0 font-mono text-xs text-subtle-foreground"
            >
              {formatDate(entry.date)}
            </time>
            <span className="text-muted-foreground">{entry.note}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
