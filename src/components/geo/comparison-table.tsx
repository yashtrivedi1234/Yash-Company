import { Check, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ComparisonValue = string | boolean | null;

/**
 * "Us vs alternatives" and "option A vs option B" blocks.
 *
 * Always scrolls inside its own container — a wide table must never make the
 * page body scroll horizontally on mobile.
 */
export function ComparisonTable({
  caption,
  columns,
  rows,
  className,
}: {
  /** Visible <caption>. Describes what is being compared. */
  caption: string;
  columns: readonly string[];
  rows: ReadonlyArray<{ label: string; values: readonly ComparisonValue[] }>;
  className?: string;
}) {
  return (
    <div className={cn("my-8", className)}>
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-border">
        <table className="w-full border-collapse text-sm">
          <caption className="border-b border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground">
            {caption}
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="border-b border-border bg-surface px-4 py-3 text-left font-semibold text-foreground"
              >
                {/* Empty corner cell; the row headers below label this column. */}
                <span className="sr-only">Criterion</span>
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="whitespace-nowrap border-b border-l border-border bg-surface px-4 py-3 text-left font-semibold text-foreground"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="even:bg-surface/50">
                <th
                  scope="row"
                  className="border-b border-border px-4 py-3 text-left font-medium text-foreground"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={`${row.label}-${columns[i] ?? i}`}
                    className="border-b border-l border-border px-4 py-3 align-top text-muted-foreground"
                  >
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CellValue({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <>
        <Check className="h-4 w-4 text-success" aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <X className="h-4 w-4 text-danger" aria-hidden="true" />
        <span className="sr-only">No</span>
      </>
    );
  }
  if (value === null) {
    return (
      <>
        <Minus className="h-4 w-4 text-subtle-foreground" aria-hidden="true" />
        <span className="sr-only">Not applicable</span>
      </>
    );
  }
  return <span>{value}</span>;
}
