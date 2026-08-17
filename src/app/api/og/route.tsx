import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

// Next 16 deprecated the edge runtime; nodejs also lets this route be
// statically cached rather than forcing on-demand rendering.
export const runtime = "nodejs";

/**
 * Branded 1200×630 OG card.
 *
 * Every page gets a unique image from its own title rather than sharing one
 * static card, which is what makes link previews in WhatsApp and LinkedIn look
 * like a real company rather than a template.
 *
 * Note: this is satori, not a browser. Only a flexbox subset of CSS is
 * supported, every element needs an explicit `display`, and CSS variables do
 * not resolve — colours are literals on purpose.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = (searchParams.get("title") ?? "Codivra Solutions").slice(0, 110);
  const subtitle = (searchParams.get("subtitle") ?? "").slice(0, 160);
  const eyebrow = (searchParams.get("eyebrow") ?? "Sitapur, Uttar Pradesh").slice(0, 60);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand gradient wash in the top-right corner. */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-160px",
            width: "640px",
            height: "640px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(79,70,229,0.22) 45%, rgba(10,10,11,0) 70%)",
            display: "flex",
          }}
        />

        {/* Header row: mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
              color: "#FAFAFA",
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "26px", fontWeight: 600, color: "#FAFAFA" }}>
              Codivra Solutions
            </span>
            <span style={{ fontSize: "18px", color: "#A1A1AA" }}>{eyebrow}</span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
          <span
            style={{
              fontSize: title.length > 60 ? "56px" : "68px",
              fontWeight: 700,
              color: "#FAFAFA",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                marginTop: "24px",
                fontSize: "26px",
                color: "#A1A1AA",
                lineHeight: 1.45,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: "22px", color: "#A1A1AA" }}>
            www.codivra.com
          </span>
          <span style={{ fontSize: "22px", color: "#A5B4FC" }}>
            Fixed quotes · Weekly demos · Code you own
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        // Deterministic output for a given query, so cache hard.
        "Cache-Control": "public, immutable, no-transform, max-age=31536000",
      },
    },
  );
}
