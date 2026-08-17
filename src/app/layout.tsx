import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { RootGraph } from "@/components/schema/graph";
import { ThemeScript } from "@/components/theme-script";
import { buildMetadata } from "@/lib/seo";
import { DEFAULT_THEME } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  // Mono is only used for code fragments below the fold — preloading it would
  // spend LCP budget on a font the first screen barely uses.
  preload: false,
});

/**
 * No `verification` block here by design.
 *
 * Search Console and Bing are verified by DNS TXT record instead of a meta
 * tag. DNS verification is strictly better: it covers every subdomain, it
 * cannot be lost by a layout edit or a redeploy, and it keeps a build-time
 * secret out of the HTML of every page on the site.
 */
export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Software & Web Development Company in Sitapur",
    description:
      "Codivra Solutions builds websites, mobile apps and custom software from Sitapur, Uttar Pradesh. Fixed quotes, weekly demos, code you own. Talk to an engineer, not a salesperson.",
    path: "/",
  });
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  // Never lock zoom — pinch-to-zoom is a WCAG 1.4.4 requirement.
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      // Ships with the default theme; ThemeScript corrects it from the cookie
      // synchronously in <head>, before paint. Keeping cookies() out of this
      // layout is what lets every page below stay statically generated.
      className={`${DEFAULT_THEME} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />
        <WhatsAppButton />

        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast:
                "!bg-surface !border-border !text-foreground !rounded-[var(--radius-lg)]",
            },
          }}
        />

        <RootGraph />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
