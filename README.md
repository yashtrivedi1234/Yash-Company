# Codivra Solutions — codivra.com

Marketing and services website for Codivra Solutions, a software development
company in Sitapur, Uttar Pradesh.

**Stack:** Next.js 16 (App Router) · TypeScript strict · Tailwind CSS v4 ·
Prisma 7 + PostgreSQL · Vercel

---

## Build status

`pnpm build` and `pnpm lint` both pass clean. 69 routes prerender as static
HTML with 24-hour ISR.

**This is a partial delivery.** The engineering is complete and working; a
meaningful share of the *content* is not yet written. See
[What is not built yet](#what-is-not-built-yet) — it is specific, not a hedge.

---

## Quick start

```bash
pnpm install
```

Copy the environment template and fill it in:

```bash
cp .env.example .env
```

You need a PostgreSQL database. For local development the quickest option is
Prisma's own server, which needs no Docker and no `sudo`:

```bash
pnpm exec prisma dev --name codivra
```

It prints a `DATABASE_URL` and `SHADOW_DATABASE_URL` — copy both into `.env`.
**The port changes each time you restart it**, so re-copy the URL if migrations
suddenly fail to connect.

Then:

```bash
pnpm db:migrate
pnpm db:seed
pnpm dev
```

The seed creates an admin user from `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`.

---

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Development server |
| `pnpm build` | `prisma generate` then `next build` |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm db:migrate` | Create and apply a migration |
| `pnpm db:deploy` | Apply migrations (production) |
| `pnpm db:seed` | Reseed all content — **destructive**, wipes content tables |
| `pnpm db:studio` | Prisma Studio |

---

## Environment variables

Every variable is validated at boot by [`src/lib/env.ts`](src/lib/env.ts); the
app refuses to start on a malformed value rather than failing mysteriously
later. See [`.env.example`](.env.example) for the annotated list.

The ones that matter most:

- `NEXT_PUBLIC_SITE_URL` — no trailing slash. Drives every canonical URL,
  sitemap entry, JSON-LD `@id` and `llms.txt` link. **Set this before the first
  production build**, or the deployed site will emit `localhost` canonicals.
- `DATABASE_URL` — pooled connection, used by the app.
- `DIRECT_URL` — unpooled, used by migrations. DDL cannot run through PgBouncer.

### Domain note

The brief listed both `codivrasolutions.com` and `codivra.com`. Everything is
built around **`https://www.codivra.com`** because that is what the `llms.txt`
and JSON-LD specs in the brief used throughout. It is a single environment
variable to change. `middleware.ts` folds any other host into the canonical one
with a 308, so pointing `codivrasolutions.com` at the same deployment gives you
the redirect for free.

---

## Architecture decisions worth knowing

**Theme is applied by a blocking inline script, not by reading the cookie in
the root layout.** Calling `cookies()` in the root layout opts the *entire site*
out of static generation — every service, technology and location page would
become an on-demand render with Postgres on the critical path. Instead the HTML
ships with the default (dark) class and [`ThemeScript`](src/components/theme-script.tsx)
corrects it from the cookie synchronously in `<head>`, before paint. Same
persistence, same absence of flash, and 69 pages stay static.

**Every database read goes through `unstable_cache` with a tag.** See
[`src/lib/queries.ts`](src/lib/queries.ts). Pages revalidate on a 24-hour
schedule; the admin invalidates by tag on save. Note that `unstable_cache`
round-trips values through JSON, so `Date` fields come back as ISO strings —
[`markdown-pages.ts`](src/lib/markdown-pages.ts) handles both.

**The Prisma pool is deliberately tiny.** `next build` runs one worker per core
and each instantiates its own pool; a default-sized pool times seven workers
exhausts the connection limit and the build dies mid-export with `P1017`. See
[`src/lib/db.ts`](src/lib/db.ts) — one connection per worker during the build,
three at runtime.

**Markdown twins are served through a rewrite, not a `.md` route folder.** A
route directory named `[...slug].md` is not parsed as a dynamic segment by
Next's typed routes. `middleware.ts` rewrites `/x/y.md` to
`/api/markdown/x/y`. The path travels in the *pathname* because a rewrite's
query string is not reliably readable from `request.nextUrl` inside a route
handler.

**FAQs use native `<details>`, not a JS accordion.** Radix unmounts collapsed
panels, so an answer engine that does not execute JavaScript sees empty
sections. `<details>` keeps every answer in the served HTML, is keyboard and
screen-reader accessible for free, and costs zero client JS.

---

## Content model

Content lives in Postgres and is seeded from `prisma/seed-data/`. The seed is
not just data loading — it enforces two rules before writing anything:

- **Location pages must carry 400+ words** of city-specific content. Below
  that, the seed throws. This is the brief's own rule and it is why there are
  six location pages rather than ten.
- **Referential integrity across slugs.** A service referencing a technology
  that does not exist fails the seed rather than producing a 404 in the nav.

### What is deliberately absent

**No testimonials and no case studies are seeded.** Codivra was founded in
2026. Seeding six client quotes and six case studies would be fabricating
exactly the trust signals the brief forbids. `/work` and the homepage render an
honest empty state pointing at the four real products instead. Add real ones
through the admin as projects complete.

**No `AggregateRating` is emitted anywhere**, per the brief, and the
`Organization.sameAs` array filters out any social URL left blank rather than
emitting a dead link.

---

## SEO surfaces

| URL | What it is |
|---|---|
| `/sitemap.xml` | Generated from the database, `lastModified` from each row's `updatedAt` |
| `/robots.txt` | AI search + training crawlers allowed; content scrapers blocked |
| `/llms.txt` | llmstxt.org format, generated from the database |
| `/llms-full.txt` | Full markdown body of every published page |
| `/<any-page>.md` | Markdown twin, linked from each page via `rel="alternate"` |
| `/api/og?title=…` | Branded 1200×630 OG card, unique per page |

Metadata is built by a single helper, [`src/lib/seo.ts`](src/lib/seo.ts). Every
route calls it; no route falls through to Next's defaults. In development it
warns when a title exceeds 60 characters or a description falls outside
140–158.

---

## What is not built yet

Listed precisely so it can be planned, not discovered.

### Routes not yet implemented

`/about`, `/contact`, `/work`, `/work/[slug]`, `/products`,
`/products/[slug]`, `/blog`, `/blog/[slug]`, `/authors/[slug]`,
`/glossary/[slug]`, `/careers`, `/careers/[slug]`, `/privacy-policy`,
`/terms`, `/refund-policy`, `/sitemap` (the human-readable one), `/search`.

The **data for products, blog posts and glossary terms is already seeded and
queryable** — `getProducts()`, `getPosts()`, `getGlossaryTerms()` all work.
These routes are rendering work, not content work. The service detail page at
[`src/app/services/[slug]/page.tsx`](src/app/services/[slug]/page.tsx) is the
template to follow.

Because these routes are missing, some links in the footer and in seeded body
copy currently 404. **Building them is the first task**, ahead of any new
content.

### Systems not yet implemented

- **Lead capture** — the `Lead` and `LeadNote` tables, schema and indexes exist;
  the contact form, `/api/leads` route, zod validation, honeypot, reCAPTCHA v3,
  rate limiting and Resend emails are not built.
- **Admin panel** — NextAuth v5 is installed and the `User` model with
  ADMIN/EDITOR roles is migrated, but no `(admin)` route group, CRUD, Tiptap
  editor, Cloudinary upload or SEO checklist gate exists yet.
- **Lighthouse CI** — `@lhci/cli` is installed, `lighthouserc.js` is not
  written, and no Lighthouse run has been performed. The performance targets in
  the brief are **unverified**.
- **Orphan-link CI check** — `pnpm check:orphans` is referenced in
  `package.json` but `scripts/check-orphans.ts` is not written.
- **Content word-count gate** — `pnpm check:content` is likewise referenced but
  not written.
- **Accessibility audit** — the design was built to WCAG 2.1 AA (contrast
  chosen deliberately, focus rings, skip link, `<details>` FAQs, no motion
  without a `prefers-reduced-motion` guard), but **no keyboard-only pass or axe
  scan has been run**. Treat AA as intended, not verified.

### Content below the brief's targets

| Content | Built | Brief target |
|---|---|---|
| Service pages | 8, at full depth | 8 |
| Technology pages | 25, ~300–400 words | 24, at 600–900 words |
| Industry pages | 8, ~350 words | 8, longer |
| Location pages | 6, 400+ words | 10–12 |
| Money pages | 8 | 25–40 |
| Blog posts | 3, at full depth | 12 |
| Products | 4, at full depth | 4 |
| Case studies | 0 (deliberate — see above) | 6 |

The eight service pages and three blog posts are written at the depth the brief
asked for and are the model for the rest.

---

## Deployment

1. Create a PostgreSQL database (Neon or Supabase).
2. Set every variable from `.env.example` in the Vercel project — in particular
   `NEXT_PUBLIC_SITE_URL` as the real domain.
3. `pnpm db:deploy` against production, then `pnpm db:seed` **once**.
4. Deploy. Vercel runs `pnpm build`, which runs `prisma generate` first.
5. Verify `/llms.txt`, `/sitemap.xml` and `/robots.txt` return the production
   domain and not `localhost`.
6. Submit the sitemap in Google Search Console.

See [SEO-CHECKLIST.md](SEO-CHECKLIST.md) for the post-launch sequence.
