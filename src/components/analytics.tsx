import Script from "next/script";
import { site } from "@/lib/site";

/**
 * GA4 + Microsoft Clarity.
 *
 * Both load with `afterInteractive` so nothing third-party competes with the
 * LCP — the performance budget does not survive a blocking analytics tag.
 * Rendered only when the corresponding ID is set, so local and preview builds
 * stay clean.
 */
export function Analytics() {
  const { gaId, clarityId } = site.analytics;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: true });
            `}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetOrName: string | Date,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Typed GA4 event helper. Form starts and completions are tracked as separate
 * events so drop-off between them is measurable.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
