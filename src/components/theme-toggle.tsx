"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useTransition } from "react";
import { setThemeCookie } from "@/app/actions/theme";
import type { Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/**
 * Theme switch.
 *
 * Deliberately holds no React state. The DOM already carries the current theme
 * as a class on <html> (set before paint by ThemeScript), so mirroring it into
 * state would mean either a setState-in-effect cascade or a hydration mismatch
 * on the label. Instead both the icon and the accessible name are chosen by
 * CSS, and the click handler reads the class directly.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [, startTransition] = useTransition();

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("light") ? "dark" : "light";

    // Apply immediately — awaiting the server action first would make the
    // switch feel laggy.
    root.classList.remove("dark", "light");
    root.classList.add(next);
    root.style.colorScheme = next;

    startTransition(() => {
      void setThemeCookie(next);
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md",
        "border border-border bg-surface text-muted-foreground",
        "transition-colors hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      {/* Accessible name, resolved by CSS so it always matches what is rendered. */}
      <span className="sr-only hidden dark:inline">Switch to light mode</span>
      <span className="sr-only inline dark:hidden">Switch to dark mode</span>

      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
