import { cookies } from "next/headers";

export const THEME_COOKIE = "codivra-theme";
export type Theme = "dark" | "light";

/** Dark-first: an unset cookie resolves to dark, matching the brand spec. */
export const DEFAULT_THEME: Theme = "dark";

export function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}

/**
 * Resolves the theme during SSR so <html> is stamped with the right class on
 * the very first byte. This is what prevents the flash — there is no
 * client-side correction step.
 */
export async function getServerTheme(): Promise<Theme> {
  const store = await cookies();
  const value = store.get(THEME_COOKIE)?.value;
  return isTheme(value) ? value : DEFAULT_THEME;
}
