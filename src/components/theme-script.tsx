import { DEFAULT_THEME, THEME_COOKIE } from "@/lib/theme";

/**
 * Applies the persisted theme before first paint.
 *
 * Why not read the cookie in the root layout? Calling `cookies()` there opts
 * the *entire site* out of static generation — every service, technology and
 * blog page would become an on-demand render with Postgres on the critical
 * path. That trade is not worth it for one class name.
 *
 * Instead the HTML ships with the default (dark) class and this script
 * corrects it synchronously in <head>, before the body is painted. The cookie
 * remains the source of truth and is still what the server action writes; the
 * user never sees a flash because no paint happens between parse and fix-up.
 *
 * Must stay inline and synchronous — `defer`/`async` would run after paint and
 * reintroduce exactly the flash this exists to prevent.
 */
export function ThemeScript() {
  const js = `(function(){try{
var m=document.cookie.match(/(?:^|; )${THEME_COOKIE}=([^;]*)/);
var t=m?decodeURIComponent(m[1]):'${DEFAULT_THEME}';
if(t!=='light'&&t!=='dark')t='${DEFAULT_THEME}';
var e=document.documentElement;
e.classList.remove('light','dark');
e.classList.add(t);
e.style.colorScheme=t;
}catch(_){}})();`;

  return (
    <script dangerouslySetInnerHTML={{ __html: js }} />
  );
}
