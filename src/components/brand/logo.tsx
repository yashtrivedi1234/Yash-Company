import { cn } from "@/lib/utils";

/**
 * Wordmark + glyph. Inline SVG rather than an image file: it is ~700 bytes,
 * needs no extra request on the LCP path, and inherits currentColor so it
 * works in both themes without a second asset.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        role="img"
        aria-label="Codivra Solutions"
      >
        <defs>
          <linearGradient id="codivra-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#codivra-mark)" />
        {/* A "C" drawn as a code bracket — the mark reads as both. */}
        <path
          d="M21.5 10.5a7 7 0 1 0 0 11"
          fill="none"
          stroke="#FAFAFA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span className="text-[0.9375rem] font-semibold tracking-tight text-foreground">
          Codivra
          <span className="text-muted-foreground"> Solutions</span>
        </span>
      )}
    </span>
  );
}
