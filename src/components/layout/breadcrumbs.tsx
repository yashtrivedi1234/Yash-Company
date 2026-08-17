import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/schema/json-ld";
import { absoluteUrl } from "@/lib/site";

export type Crumb = { label: string; href: string };

/**
 * Visible breadcrumbs plus the matching BreadcrumbList node.
 *
 * Both are required: the schema without visible breadcrumbs is a structured
 * data violation, and visible breadcrumbs without the schema waste the
 * eligibility. The final crumb is the current page and is not a link.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {trail.map((crumb, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-subtle-foreground"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: absoluteUrl(crumb.href),
          })),
        }}
      />
    </>
  );
}
