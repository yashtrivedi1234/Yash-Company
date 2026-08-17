import type { SeedFaq, SeedMoneyPage, SeedPost } from "./types";

export const author = {
  slug: "yash-trivedi",
  name: "Yash Trivedi",
  role: "Founder & Lead Engineer, Codivra Solutions",
  avatar: "/team/yash-trivedi.jpg",
  linkedin: "https://linkedin.com/in/yash-trivedi-contact",
  github: "https://github.com/yashtrivedi1234",
  bio: `Yash Trivedi is the founder and lead engineer of Codivra Solutions in Sitapur, Uttar Pradesh. He has built and shipped production systems across school administration, clinic management, billing and POS, HR and payroll, and CRM — the systems that became Codivra's product line. He works primarily in TypeScript, Next.js, Node.js and PostgreSQL, and writes here about what software actually costs in a tier-2 Indian market, and where the standard advice does not survive contact with a district business. He also runs Codivra Training, a developer training institute in Sitapur.`,
};

/**
 * Site-wide FAQs. Rendered on the homepage and available to the admin as the
 * `global` scope.
 */
export const globalFaqs: SeedFaq[] = [
  {
    question: "What does Codivra Solutions do?",
    answer:
      "Codivra Solutions is a software development company based in Sitapur, Uttar Pradesh. We build business websites, Android and iOS apps, custom business software such as ERP and CRM systems, ecommerce stores and AI features for clients across India. We also sell four ready-made products covering school management, clinic management, billing and POS, and HR and payroll. Projects start at ₹15,000 and run on fixed quotes.",
  },
  {
    question: "How much does a website cost with Codivra?",
    answer:
      "A five-page business website starts at ₹15,000 and takes two to three weeks. A fifteen-page site with a blog and a custom admin panel is ₹45,000 over four to six weeks. Custom web applications with user accounts and integrations start at ₹90,000. Every quote is fixed before work begins, so the figure you approve is the figure you pay — there is no hourly billing against an open scope.",
  },
  {
    question: "Do I own the code you write?",
    answer:
      "Yes, completely. We create the repository on your own GitHub account rather than ours and push to it from day one. The domain is registered in your name and hosting accounts belong to your business. If you decide to work with another developer, you hand them the repository and they continue — there is nothing to buy back. A client who stays because leaving is expensive is not a relationship worth having.",
  },
  {
    question: "Why is Codivra cheaper than a Lucknow or Noida agency?",
    answer:
      "Because we do not carry their overheads. A city agency pays city rent, city salaries and a sales team, and all of that appears in your quote. We are based in Sitapur, work as a small engineering team, and you talk to the engineer rather than an account manager. The stack, the weekly demos and the code ownership are the same; the difference is overhead, not quality.",
  },
  {
    question: "How does the fixed-quote process work?",
    answer:
      "We start with a discovery call, then write up the scope as three documents: what will be built, the data model, and an explicit list of what is not included. Once you approve that, the price is fixed. Changes after sign-off are quoted as separate add-ons with their own price and timeline, so you decide whether each is worth it. We do not bill hourly against an open scope, because that arrangement rewards us for being slow.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Two to three weeks for a small business website, four to six weeks for a larger site with an admin panel, six to twelve weeks for a mobile app, and six to sixteen weeks for custom business software. The biggest cause of delay is content and data: projects where text, photographs or existing records are still being gathered in week five finish late. We send a checklist in week one for exactly this reason.",
  },
  {
    question: "Do you work with clients outside Uttar Pradesh?",
    answer:
      "Yes. Our office is in Sitapur and we meet clients in person across Sitapur, Lakhimpur Kheri, Hardoi, Shahjahanpur, Barabanki and Lucknow, but most projects run remotely over calls and weekly demo links on a staging URL. Being based in a district town is precisely why our pricing works the way it does, and it makes no difference to how a remote project runs.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "Every project includes 90 days of post-launch support covering bugs and small content changes. After that you can handle changes yourself through the admin panel, call us for ad-hoc work billed hourly, or move onto a maintenance plan from ₹3,000 a month covering security updates, daily backups, uptime monitoring and a set allowance of changes. Nothing stops working if you choose none of these.",
  },
];

export const glossary = [
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    definition:
      "Core Web Vitals are three metrics Google uses to measure page experience: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness) and Cumulative Layout Shift (visual stability).",
    metaTitle: "What are Core Web Vitals? | Codivra Glossary",
    metaDesc:
      "Core Web Vitals explained: LCP, INP and CLS, what good scores look like, and why they matter for a business website in India.",
    bodyMdx: `Core Web Vitals are three measurements Google uses to judge how a page feels
to a real visitor. They are part of how pages are ranked, but more importantly
they correlate with whether people stay.

| Metric | What it measures | Good | Poor |
|---|---|---|---|
| LCP | Time until the largest visible element loads | under 2.5s | over 4.0s |
| INP | Delay between an interaction and the visual response | under 200ms | over 500ms |
| CLS | How much the layout jumps while loading | under 0.1 | over 0.25 |

The most common cause of a poor LCP on Indian business sites is an unoptimised
hero image — a 3 MB photograph straight from a phone camera. The most common
cause of poor CLS is an advertisement or image without reserved space, so text
shifts down as it loads.

We hold our own builds to stricter internal targets than Google's thresholds:
LCP under 2.0s and CLS under 0.05. See
[web development](/services/web-development) for how that is enforced.`,
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "RAG is a technique where an AI assistant first searches your own documents for relevant passages, then answers using only those passages and cites the source, rather than relying on its training data.",
    metaTitle: "What is RAG (Retrieval-Augmented Generation)? | Codivra",
    metaDesc:
      "RAG explained: how retrieval-augmented generation stops an AI chatbot inventing answers, and what it costs to build one in India.",
    bodyMdx: `Retrieval-Augmented Generation is the technique behind almost every business
chatbot worth deploying. Instead of answering from what a language model absorbed
during training, the system:

1. Searches **your** documents for passages relevant to the question
2. Passes those passages to the model as context
3. Instructs it to answer only from that context and cite the source

The commercial significance is that it removes invention. A model answering from
training data will confidently state a refund policy or fee structure it has
never seen, because producing plausible text is what it was built to do. A RAG
system answers from your actual fee document, names it, and says "I don't know"
when it cannot find grounding.

A confident wrong answer about your fees costs far more than an honest handoff to
a person. See [LangChain and RAG](/technologies/langchain-rag) and
[AI & ML solutions](/services/ai-ml-solutions).`,
  },
  {
    slug: "hsn-code",
    term: "HSN Code",
    definition:
      "An HSN code is a standardised numeric code identifying a product category for GST purposes, and it must appear on GST invoices above prescribed turnover thresholds.",
    metaTitle: "What is an HSN Code? | Codivra Glossary",
    metaDesc:
      "HSN codes explained for Indian businesses: what they are, when they must appear on a GST invoice, and how billing software should handle them.",
    bodyMdx: `HSN stands for Harmonised System of Nomenclature, an internationally
standardised system for classifying goods. Under GST, Indian businesses use HSN
codes to identify what they are selling on an invoice.

The practical points for a trader:

- The code must appear on the invoice against each product, at a digit length
  determined by your turnover.
- The code determines the GST rate, so an incorrect code means an incorrect rate
  and a correction at filing.
- Services use SAC codes, which work the same way.

In practice this is a data-entry problem more than a tax problem: the code should
be stored once against the product and applied automatically at billing, never
typed per invoice. That is how our
[billing and POS system](/products/billing-and-pos) handles it, and getting it
wrong at product-setup time is the error that propagates everywhere.`,
  },
];

export const jobPostings = [
  {
    slug: "full-stack-developer",
    title: "Full-Stack Developer",
    department: "Engineering",
    employmentType: "FULL_TIME",
    locationType: "ON_SITE",
    city: "Sitapur",
    salaryMin: 300000,
    salaryMax: 600000,
    salaryPeriod: "YEAR",
    metaTitle: "Full-Stack Developer Job in Sitapur | Codivra Solutions",
    metaDesc:
      "Full-stack developer role at Codivra Solutions in Sitapur, Uttar Pradesh. TypeScript, Next.js, Node.js and PostgreSQL. ₹3–6 LPA.",
    descriptionMdx: `We are looking for a full-stack developer to work on client projects and our
own products from our Sitapur office.

This is a role for someone who wants to own features end to end — database
through to interface — rather than being handed tickets. You will talk to
clients, you will see your work go live, and you will be responsible for it
afterwards.

We are a small team. That means more responsibility earlier than you would get at
a larger firm, and less structure. If you need a defined ladder and a manager
between you and the work, this is not the right place.`,
    responsibilities: [
      "Build features end to end across database, API and interface",
      "Join client calls and translate what they need into a technical scope",
      "Write TypeScript with no `any` types and review other people's code",
      "Own what you ship, including fixing it when it breaks",
      "Keep Core Web Vitals green on everything you touch",
    ],
    requirements: [
      "Working knowledge of JavaScript or TypeScript and React",
      "Understanding of relational databases and SQL",
      "Ability to read documentation and work out an unfamiliar library",
      "Willingness to work from our Sitapur office",
      "Clear written and spoken communication — you will talk to clients",
      "A portfolio, GitHub profile or anything you have actually built matters more to us than a degree",
    ],
  },
];

/**
 * Money pages. Eight high-intent [service]-in-[city] combinations, each with
 * copy specific to that pairing rather than a template with two nouns swapped.
 *
 * CONTENT DEBT: the brief targets 25–40 of these.
 */
export const moneyPages: SeedMoneyPage[] = [
  {
    slug: "web-development-company-in-sitapur",
    h1: "Web Development Company in Sitapur",
    serviceSlug: "web-development",
    citySlug: "sitapur",
    metaTitle: "Web Development Company in Sitapur | From ₹15,000",
    metaDesc:
      "Codivra Solutions is a web development company with an office in Sitapur. Business websites from ₹15,000 in 2–3 weeks. Visit us or call today.",
    answerBlock:
      "Codivra Solutions is a web development company with its office in Sitapur, Uttar Pradesh. We build business websites from ₹15,000, delivered in two to three weeks with an admin panel, SEO groundwork and source code handed over on your own GitHub account.",
    bodyMdx: `## An office you can walk into

Search "web development company in Sitapur" and most results are agencies in
Lucknow, Indore or Noida running a location page. Our office is at Vikas Nagar
Colony, Khoobpur, and you are welcome to come to it during working hours.

For a Sitapur business that matters practically. You can hand over a folder of
photographs, sit across a table while the scope is written, and call someone who
picks up.

## What ₹15,000 gets you

A five-page website — home, about, services, gallery and contact — that is
responsive and tested on a real mid-range Android phone, not just a laptop. It
includes a contact form with email notifications, a Google Maps embed,
click-to-call, on-page SEO with titles and descriptions written per page, a
generated sitemap, and Search Console set up before launch.

Hosting for a site this size fits inside free tiers, so your running cost is
usually just the domain at around ₹1,000 a year.

## Typical Sitapur clients

Clinics and diagnostic labs around the Sitapur Eye Hospital catchment, schools
and coaching institutes competing through the admission season, traders in the
Lal Bagh market area, and processing units across the district. Each needs
something different — see [industries](/industries) for how those differ.

## What it costs

| What you need | Price | Time |
|---|---|---|
| 5-page business website | ₹15,000 | 2–3 weeks |
| 15-page site with blog and admin panel | ₹45,000 | 4–6 weeks |
| Web application with logins | From ₹90,000 | 8+ weeks |

Full details on [web development](/services/web-development), or see everything
we do in [Sitapur](/locations/sitapur).`,
    faqs: [
      {
        question: "Which is the best web development company in Sitapur?",
        answer:
          "We would obviously say us, so judge on checkable things instead. Ask any company whether the code goes on your GitHub account, whether the quote is fixed before work starts, whether you will speak to the engineer or a salesperson, and whether you can see a staging URL each week during the build. Codivra answers yes to all four, and our office is at Vikas Nagar Colony, Khoobpur, which you can verify by visiting.",
      },
      {
        question: "How much does a website cost in Sitapur?",
        answer:
          "A five-page business website is ₹15,000 and takes two to three weeks. A fifteen-page site with a blog and admin panel is ₹45,000 over four to six weeks. Running costs afterwards are usually around ₹1,000 a year for the domain, because hosting for a site this size fits inside free tiers. Every quote is fixed before work begins.",
      },
    ],
  },

  {
    slug: "website-designing-company-in-sitapur",
    h1: "Website Designing Company in Sitapur",
    serviceSlug: "ui-ux-design",
    citySlug: "sitapur",
    metaTitle: "Website Designing Company in Sitapur | From ₹10,000",
    metaDesc:
      "Website designing company in Sitapur. Landing pages from ₹10,000, full website design from ₹28,000, delivered as Figma files you own.",
    answerBlock:
      "Codivra Solutions is a website designing company in Sitapur, Uttar Pradesh. Landing page design starts at ₹10,000 and a full website design at ₹28,000, delivered as Figma files you own outright with a component library your developers can build from.",
    bodyMdx: `## Design and development are separate things

Plenty of businesses in Sitapur ask for "website designing" and mean the whole
thing — design and build together. That is fine, and it is
[web development](/services/web-development) from ₹15,000.

But they are genuinely separate services, and sometimes you only want the first.
If you already have a developer, or an in-house team, or a site that works but
looks dated, design on its own is the cheaper and more sensible purchase.

## What you get

The deliverable is a Figma file transferred to your account with edit access —
not shared from ours, so you keep it whether or not you continue with us. It
contains a component library rather than loose shapes, design tokens for colour
and spacing, and handoff notes precise enough that a developer who has never
spoken to us can build from it.

From the ₹28,000 tier we also design the states everyone forgets: empty lists,
loading, errors, and what a very long product name does to the layout. Those are
where users actually get stuck.

## Accessibility is checked, not assumed

Body text at 4.5:1 contrast minimum measured with a tool rather than judged by
eye, visible focus states designed rather than left to the browser, and tap
targets at 44px minimum. Retrofitting this after development costs several times
more than designing it in.

## What it costs

| What you need | Price | Time |
|---|---|---|
| Single landing page | ₹10,000 | 1 week |
| Full website, up to 8 templates | ₹28,000 | 2–3 weeks |
| App or dashboard, with user testing | From ₹45,000 | 4–6 weeks |

See [UI/UX design](/services/ui-ux-design), or
[web development](/services/web-development) if you want design and build
together.`,
    faqs: [
      {
        question: "What is the difference between website designing and web development?",
        answer:
          "Designing is deciding what it looks like and how it behaves, delivered as a Figma file. Development is building the working site from that design. Many companies sell both together and most Sitapur businesses want both, which is our web development service from ₹15,000. Design alone from ₹10,000 makes sense when you already have a developer, an in-house team, or a working site that simply looks dated.",
      },
      {
        question: "Do I get the design files?",
        answer:
          "Yes, with full edit access, transferred to your own Figma account rather than shared from ours. You keep it regardless of whether you continue working with us. It contains a component library, named design tokens for colour and spacing, and handoff notes detailed enough for a developer who has never spoken to us to build from without asking questions.",
      },
    ],
  },

  {
    slug: "software-company-in-sitapur",
    h1: "Software Company in Sitapur",
    serviceSlug: "custom-software-development",
    citySlug: "sitapur",
    metaTitle: "Software Company in Sitapur, Uttar Pradesh | Codivra",
    metaDesc:
      "Codivra Solutions is a software company in Sitapur building ERP, billing, school and clinic systems from ₹20,000. Visit our office.",
    answerBlock:
      "Codivra Solutions is a software company based in Sitapur, Uttar Pradesh. We build custom business software — billing, inventory, school and clinic management, HR and payroll — starting at ₹20,000 for a ready-made product and ₹50,000 for a custom module.",
    bodyMdx: `## Ready-made first, custom only if needed

The cheapest good answer is usually a product that already exists. We have four,
built for exactly the businesses that operate in this district:

- **[Billing & POS](/products/billing-and-pos)** — ₹20,000. GST billing with
  party-wise rates, credit and outstanding tracking.
- **[Clinic Manager](/products/clinic-management-system)** — ₹30,000.
  Appointments, patient records, WhatsApp report delivery.
- **[School Manager](/products/school-management-system)** — ₹35,000. Admissions,
  fees, attendance, results, parent portal.
- **[HR Manager](/products/hr-management-system)** — ₹40,000. Attendance, leave,
  payroll with PF and ESI.

If your requirement is roughly 70% one of these, starting from it and paying for
the difference costs far less than a build from zero. We will tell you when that
applies.

## When custom is genuinely worth it

When your process is unusual enough that packaged software forces daily
workarounds, when per-user licence fees have grown past the cost of building,
when two systems need to talk and neither vendor will help, or when the software
itself is what you intend to sell.

If none of those is true, we will point you at Tally or Zoho and charge you
nothing. That conversation costs us a sale and saves you a few lakh.

## Built for how businesses here actually operate

Software for a Sitapur trader has to be usable by staff whose main tool has been
a paper book. Fewer screens, larger targets, Hindi labels where they help, and a
full day of in-person training included rather than a PDF manual.

See [custom software development](/services/custom-software-development) or
everything we do in [Sitapur](/locations/sitapur).`,
    faqs: [
      {
        question: "Is there a software company in Sitapur?",
        answer:
          "Yes — Codivra Solutions, with an office at Vikas Nagar Colony, Khoobpur, Sitapur. We build custom business software and sell four ready-made products covering billing and POS, clinic management, school management, and HR and payroll. Products start at ₹20,000 and custom modules at ₹50,000. Office hours are Monday to Saturday, 10:00 to 19:00, and you can visit without an appointment.",
      },
      {
        question: "Should I buy ready-made software or get something custom built?",
        answer:
          "Start with ready-made. If your requirement is roughly 70% covered by an existing product, starting there and paying for the difference costs far less than building from zero. Custom is worth it when your process is genuinely unusual, when licence fees have grown past the cost of building, or when the software is what you intend to sell. If plain accounting is the need, we will point you at Tally and charge nothing.",
      },
    ],
  },

  {
    slug: "app-development-company-in-sitapur",
    h1: "App Development Company in Sitapur",
    serviceSlug: "mobile-app-development",
    citySlug: "sitapur",
    metaTitle: "App Development Company in Sitapur | From ₹40,000",
    metaDesc:
      "Mobile app development company in Sitapur. Android and iOS apps from ₹40,000 in 6–8 weeks, including Play Store submission.",
    answerBlock:
      "Codivra Solutions is a mobile app development company in Sitapur, Uttar Pradesh. We build Android and iOS apps from one codebase starting at ₹40,000, delivered in six to eight weeks including Play Store submission and a backend API.",
    bodyMdx: `## One codebase, both stores

Building separately in Kotlin for Android and Swift for iOS means two codebases
and roughly twice the bill. For the apps businesses here actually need — booking,
ordering, catalogues, attendance, field reporting — there is no user-visible
benefit that justifies it.

We build with [React Native](/technologies/react-native) or
[Flutter](/technologies/flutter), which compile to genuinely native interfaces on
both platforms from one source. That is why an app starts at ₹40,000 here rather
than ₹80,000.

## What ₹40,000 covers

Up to eight screens on both platforms — typically splash, phone login, OTP,
home, listing, detail, profile and one action screen such as booking or ordering.
That is a complete product for one clear job.

It includes the backend. An app is not just the thing on the phone; there is an
API, a database and an admin view behind it, and those are in the price. Play
Store submission is handled by us.

## The costs people forget

Apple charges US$99 a year for a developer account, roughly ₹8,500, paid by you
directly in your own business name. Google Play is a one-time US$25. Store review
takes one to three days on Google and one to seven on Apple, and first
submissions are frequently rejected over minor policy points, which we fix and
resubmit at no extra cost.

## You test it from week three

You get an installable build on your own phone every Friday from week three — an
APK on Android, TestFlight on iOS. Reading a specification is a poor way to
notice that a flow feels wrong, and catching it in week four costs a fraction of
catching it in week nine.

See [mobile app development](/services/mobile-app-development).`,
    faqs: [
      {
        question: "How much does it cost to make an app in Sitapur?",
        answer:
          "An app with up to eight screens covering both Android and iOS starts at ₹40,000 and takes six to eight weeks, including the backend API, database, admin view and Play Store submission. A larger app with payments, roles and an admin dashboard is around ₹1,20,000. Apple's US$99 annual developer account fee is paid separately by you if you want to be on the App Store.",
      },
      {
        question: "Will my app be on both Play Store and App Store?",
        answer:
          "Yes. We build from a single codebase that produces genuinely native apps for both platforms, so there is no extra charge for the second one. We prepare the store listing, screenshots, descriptions and privacy policy and handle submission and any review feedback. The developer accounts are registered in your business name so you retain full control of them.",
      },
    ],
  },

  {
    slug: "web-development-company-in-lakhimpur-kheri",
    h1: "Web Development Company in Lakhimpur Kheri",
    serviceSlug: "web-development",
    citySlug: "lakhimpur-kheri",
    metaTitle: "Web Development Company in Lakhimpur Kheri | ₹15,000",
    metaDesc:
      "Web development for Lakhimpur Kheri businesses from ₹15,000. Same-day site visits from our Sitapur office, 50 km away. Code you own.",
    answerBlock:
      "Codivra Solutions builds websites for Lakhimpur Kheri businesses from our Sitapur office, about 50 km away. Business websites start at ₹15,000 and ship in two to three weeks, with free same-day site visits anywhere in the district.",
    bodyMdx: `## An hour and a quarter away

Lakhimpur Kheri is roughly 50 km from our office — a comfortable same-day round
trip. Of every district we serve outside our own, this is where in-person work is
easiest, and it means site visits for scoping, content collection and training
are routine rather than an event.

## What Lakhimpur businesses usually need

The district economy is dominated by sugarcane, agri-processing, dairy and trade,
with tourism around Dudhwa at the northern edge. That shapes what is actually
useful.

**For processing units and mills**, a website is rarely the priority. The
returns are in [production tracking and yield
reporting](/industries/manufacturing) — see
[custom software](/services/custom-software-development).

**For traders and distributors** in Kheri, Gola Gokarannath, Palia Kalan and
Mohammadi, [billing with party-wise rates and outstanding
tracking](/products/billing-and-pos) at ₹20,000 usually beats a website as a
first purchase.

**For resorts and guesthouses serving Dudhwa**, a website with direct booking is
straightforwardly worth it — aggregators take 15–20% of every booking, so a
₹15,000 site pays for itself quickly.

**For schools, clinics and dealerships**, a website at ₹15,000 is the right
starting point.

We will tell you which of these you are, including when the answer is that you do
not need a website yet.

## What it costs

| What you need | Price | Time |
|---|---|---|
| 5-page business website | ₹15,000 | 2–3 weeks |
| Site with blog and admin panel | ₹45,000 | 4–6 weeks |
| Billing and POS software | ₹20,000 | 3–4 weeks |

See [web development](/services/web-development) or everything we do in
[Lakhimpur Kheri](/locations/lakhimpur-kheri).`,
    faqs: [
      {
        question: "Do you build websites for businesses in Lakhimpur Kheri?",
        answer:
          "Yes. Lakhimpur Kheri is about 50 km from our Sitapur office, just over an hour each way, so site visits are free and same-day. Business websites start at ₹15,000 and take two to three weeks. For processing units and traders we will often recommend billing or production software ahead of a website, because that is where the return actually is for those businesses.",
      },
      {
        question: "How much does a website cost in Lakhimpur Kheri?",
        answer:
          "A five-page business website is ₹15,000 and takes two to three weeks; a larger site with a blog and admin panel is ₹45,000. Running costs afterwards are typically around ₹1,000 a year for the domain, since hosting fits inside free tiers at this size. There is no travel charge for site visits anywhere in the district.",
      },
    ],
  },

  {
    slug: "website-development-company-in-hardoi",
    h1: "Website Development Company in Hardoi",
    serviceSlug: "web-development",
    citySlug: "hardoi",
    metaTitle: "Website Development Company in Hardoi | From ₹15,000",
    metaDesc:
      "Website development for Hardoi businesses from ₹15,000 in 2–3 weeks. Free site visits from our Sitapur office to Shahabad, Sandila and Bilgram.",
    answerBlock:
      "Codivra Solutions builds websites for Hardoi businesses from our Sitapur office, about 70 km away. Business websites start at ₹15,000 and take two to three weeks, with free site visits anywhere in Hardoi district including Shahabad, Sandila and Bilgram.",
    bodyMdx: `## Under two hours from our office

Hardoi is around 70 km west of Sitapur, which makes site visits practical and
free. We cover the whole district — Shahabad, Sandila and Bilgram included — with
no travel charge on any project.

## Who we build for in Hardoi

**Coaching institutes and schools.** Hardoi has a dense coaching market and the
February-to-April admission competition is intense. The pattern we see repeatedly
is enquiries arriving on WhatsApp, nobody logging them, and a parent who called in
March never being called back. A website with a proper
[enquiry system](/industries/education) costs less than a single lost admission.

**Traders and wholesalers.** Credit sales, party-specific rates, paper billing.
For most of these the first purchase should be
[billing software](/products/billing-and-pos) at ₹20,000 rather than a website,
and we will say so.

**Clinics and diagnostic labs.** Growing, and mostly running on paper cards and a
phone diary. [Clinic management](/products/clinic-management-system) is ₹30,000.

**Agricultural traders and cold stores**, needing stock and party accounts.

## Built for staff who have not used software before

This is a real design constraint, not a courtesy. A system for a Hardoi trader
has to work for someone whose main tool has been a paper book: fewer screens,
larger targets, defaults that are right most of the time, Hindi labels where they
help, and a full day of on-site training included rather than an emailed manual.

## What it costs

| What you need | Price | Time |
|---|---|---|
| 5-page business website | ₹15,000 | 2–3 weeks |
| Site with blog and admin panel | ₹45,000 | 4–6 weeks |
| Billing and POS software | ₹20,000 | 3–4 weeks |
| Clinic management | ₹30,000 | 3–4 weeks |

See [web development](/services/web-development) or everything we do in
[Hardoi](/locations/hardoi).`,
    faqs: [
      {
        question: "How much does a website cost in Hardoi?",
        answer:
          "A five-page business website is ₹15,000 and takes two to three weeks; a larger site with a blog and admin panel is ₹45,000. Site visits anywhere in Hardoi district, including Shahabad, Sandila and Bilgram, are free and we do not charge travel on any project. Running costs afterwards are usually around ₹1,000 a year for the domain.",
      },
      {
        question: "Will my staff in Hardoi be able to use the software?",
        answer:
          "That is designed for rather than assumed. Systems for district businesses are built expecting the user has worked from a paper book until now — fewer screens, larger tap targets, sensible defaults, and Hindi labels where they help. A full day of on-site training is included in the price rather than an emailed PDF manual, and 90 days of support covers the period when questions actually arise.",
      },
    ],
  },

  {
    slug: "web-development-company-in-lucknow",
    h1: "Web Development Company Serving Lucknow",
    serviceSlug: "web-development",
    citySlug: "lucknow",
    metaTitle: "Web Development Company for Lucknow | From ₹15,000",
    metaDesc:
      "Web development for Lucknow businesses at district rates. Websites from ₹15,000 versus ₹35,000–₹60,000 typical city quotes. On-site meetings.",
    answerBlock:
      "Codivra Solutions builds websites for Lucknow businesses from our Sitapur office, about 90 km away on NH-30. Websites start at ₹15,000 — against ₹35,000 to ₹60,000 typical for city agencies — with on-site Lucknow meetings on projects above ₹50,000.",
    bodyMdx: `## The same build, without the city overhead

A five-page business website from an established Hazratganj or Gomti Nagar agency
typically runs ₹35,000 to ₹60,000. The same [Next.js](/technologies/nextjs) build
from us is ₹15,000.

The difference is not quality or corner-cutting. A city office, a sales team and
an account-manager layer all have to be paid for out of your quote, and we carry
none of them. You get the same stack, the same weekly demos on a staging URL,
source code on your own GitHub, and an engineer rather than an account manager on
the call.

## How Lucknow projects run

For projects above ₹50,000 we come to you in Lucknow for discovery and handover.
Ninety kilometres on NH-30 is about two hours, so this is routine rather than an
imposition. Everything in between runs on weekly demo links and calls.

For a ₹15,000 website, the whole thing runs remotely and the distance makes no
practical difference.

## Who this fits, and who it does not

**Good fit:** established SMEs — clinics, institutes, dealerships, traders,
professional practices — that need a genuinely good website without an ongoing
agency retainer. Startups needing an MVP built properly for a sum that does not
consume the seed round. Anyone quoted ₹80,000 for something that should cost
₹25,000.

**Poor fit:** organisations whose procurement requires a vendor with a registered
Lucknow office. Companies wanting design, PR and media buying under one roof.
Anyone needing someone physically present several days a week.

We would rather say that at the enquiry stage than three weeks in.

## What it costs

| What you need | Codivra | Typical Lucknow quote |
|---|---|---|
| 5-page business website | ₹15,000 | ₹35,000 – ₹60,000 |
| Ecommerce store | ₹25,000 | ₹60,000 – ₹1,20,000 |
| Mobile app | ₹40,000 | ₹1,50,000+ |

The right-hand column comes from quotes clients have shown us during enquiries;
treat it as indicative rather than a survey.

See [web development](/services/web-development) or how we work with
[Lucknow](/locations/lucknow) clients.`,
    faqs: [
      {
        question: "Why would a Lucknow business hire a company from Sitapur?",
        answer:
          "Price for the same work. A five-page Next.js site is ₹15,000 with us against ₹35,000 to ₹60,000 typical for a Gomti Nagar or Hazratganj agency, because we do not carry city rent, a sales team or an account-manager layer. You get the same stack, weekly demos on a staging URL and code on your own GitHub. What you give up is an office to walk into unannounced.",
      },
      {
        question: "Will you come to Lucknow for meetings?",
        answer:
          "Yes, for discovery and handover on projects above ₹50,000. Lucknow is about 90 km from our office on NH-30, roughly two hours, so it is routine rather than an imposition. Everything between those meetings runs on weekly demo links and calls. For a ₹15,000 website the project runs entirely remotely and the distance makes no practical difference to the outcome.",
      },
    ],
  },

  {
    slug: "seo-company-in-sitapur",
    h1: "SEO Company in Sitapur",
    serviceSlug: "seo-and-digital-marketing",
    citySlug: "sitapur",
    metaTitle: "SEO Company in Sitapur | Local SEO from ₹8,000/month",
    metaDesc:
      "SEO company in Sitapur. Local SEO, Google Business Profile and content from ₹8,000/month, reported in enquiries and calls, not rankings.",
    answerBlock:
      "Codivra Solutions is an SEO company in Sitapur, Uttar Pradesh, offering local SEO from ₹8,000 per month on a three-month minimum. We report on enquiries, calls and direction requests rather than ranking screenshots, and we will tell you when SEO is the wrong spend.",
    bodyMdx: `## For a Sitapur business, the map pack is the prize

If you run a clinic, coaching institute, dealership or shop in Sitapur, your
customers are searching on a phone and tapping the map results. That block of
three listings takes the majority of local clicks, and getting into it is a
different job from ranking a web page.

The work that actually moves it:

- **Complete the Google Business Profile properly.** Categories, services, hours,
  attributes, photos. Most Sitapur profiles we audit are under half filled in,
  which is free ranking left on the table.
- **Post weekly.** Profiles that post consistently outperform dormant ones.
- **Generate reviews systematically.** We set up an SMS and WhatsApp flow asking
  satisfied customers at the right moment with a direct link. We do not write
  fake reviews and will not work with anyone who wants them.
- **Keep NAP consistent.** Your name, address and phone must match exactly across
  every directory; inconsistency quietly suppresses ranking.

## What we report

Four numbers: enquiries, calls, direction requests, and organic sessions
segmented by intent. Rankings appear as supporting detail, never as the headline.
If enquiries have not moved by month four, we say so plainly and change the plan.

## When we will tell you not to buy SEO

If you need customers this month, SEO is the wrong instrument — it takes three to
six months. Run Google Ads instead, which we manage as a ₹12,000 monthly add-on.
If your website loads in eight seconds and breaks on mobile, fix the site first;
SEO on a broken site is money into a hole.

## What it costs

| Plan | Price | Minimum term |
|---|---|---|
| Local SEO | ₹8,000/month | 3 months |
| Growth (adds 4 articles/month) | ₹22,000/month | 6 months |
| Google Ads management | ₹12,000/month + ad spend | Rolling |

See [SEO and digital marketing](/services/seo-and-digital-marketing).`,
    faqs: [
      {
        question: "How much does SEO cost in Sitapur?",
        answer:
          "Local SEO covering Google Business Profile optimisation, citations, review generation and two new pages a month starts at ₹8,000 with a three-month minimum. A fuller programme adding four researched articles a month, keyword strategy and schema markup is ₹22,000 on a six-month minimum. Google Ads management is a ₹12,000 monthly add-on with ad spend paid directly by you to Google.",
      },
      {
        question: "Do you guarantee first page rankings?",
        answer:
          "No, and nobody honestly can — Google's ranking is not something a vendor controls. What we commit to is the work: technical fixes, Google Business Profile optimisation, content published on schedule, citations and reviews. We report enquiries, calls and direction requests rather than ranking screenshots, and if those have not moved by month four we say so and change the approach.",
      },
    ],
  },
];

/**
 * Blog posts. Three written at full depth rather than twelve at a thousand
 * words each — the brief's twelve titles are listed in SEO-CHECKLIST.md as the
 * editorial backlog.
 */
export const posts: SeedPost[] = [
  {
    slug: "website-development-cost-uttar-pradesh",
    title: "Website development cost in Uttar Pradesh in 2026",
    category: "Web Development",
    tags: ["pricing", "web development", "uttar pradesh"],
    readMinutes: 9,
    coverImage: "/blog/website-cost-up.jpg",
    publishedAt: "2026-03-12",
    metaTitle: "Website Development Cost in Uttar Pradesh (2026 Prices)",
    metaDesc:
      "Real website development prices in Uttar Pradesh in 2026, from ₹8,000 freelancers to ₹2 lakh agencies, with what each tier actually includes.",
    excerpt:
      "What a website actually costs in UP in 2026, by tier, with the hidden costs nobody quotes for and how to tell an ₹8,000 site from a ₹40,000 one.",
    answerBlock:
      "A business website in Uttar Pradesh costs ₹8,000 to ₹25,000 from a freelancer, ₹15,000 to ₹60,000 from a small studio, and ₹60,000 to ₹2,00,000 from an established agency in 2026. The difference is scope and ownership, not quality of code — and running costs are usually under ₹2,000 a year.",
    changelog: [
      { date: "2026-03-12", note: "First published with 2026 price bands." },
      {
        date: "2026-06-20",
        note: "Added the hosting cost table after Vercel's pricing change, and clarified that domain registration should be in the client's own name.",
      },
    ],
    bodyMdx: `## What does a website actually cost in Uttar Pradesh?

Here are the bands we see in the market in 2026, from quotes clients bring us
during enquiries.

| Who builds it | Price | What you typically get |
|---|---|---|
| Freelancer | ₹8,000 – ₹25,000 | 3–8 pages, often a WordPress theme, variable support |
| Small studio | ₹15,000 – ₹60,000 | Custom build, admin panel, SEO groundwork, defined support |
| Established agency | ₹60,000 – ₹2,00,000 | Same, plus account management, design process, brand work |
| Enterprise firm | ₹2,00,000+ | Multi-stakeholder process, compliance, integrations |

The uncomfortable part: the code at ₹25,000 and at ₹1,50,000 is frequently
similar. What changes is scope, process, accountability and who carries the risk
when something breaks.

## Why is there such a large range?

Three things drive price, and page count is not really one of them.

**Integrations.** Connecting to Tally, a payment gateway, an SMS provider or an
existing ERP is where hours go. Each is effectively a small project.

**User accounts.** The moment a site has logins, roles and permissions, it stops
being a website and becomes a web application. The testing surface multiplies.

**Who carries the risk.** A fixed quote means the developer absorbs the cost of
their own estimation errors. Hourly billing means you do. Fixed quotes are priced
slightly higher for exactly that reason, and are usually still cheaper in
practice.

## What is the hidden cost nobody quotes for?

Running costs, which are genuinely small but almost never stated:

| Item | Annual cost | Notes |
|---|---|---|
| Domain (.com / .in) | ₹800 – ₹1,200 | Must be in your own name |
| Hosting (Vercel free tier) | ₹0 | Adequate for most business sites |
| Hosting (shared cPanel) | ₹2,400 – ₹6,000 | Typical for WordPress |
| Database (free tier) | ₹0 | Up to roughly 0.5 GB |
| Email (Resend free tier) | ₹0 | 3,000 emails/month |
| SSL certificate | ₹0 | Free via Let's Encrypt — never pay for this |

A typical five-page business site should cost **under ₹2,000 a year to run**. If
someone quotes ₹15,000 a year for "hosting and maintenance" on a five-page site
with no maintenance plan attached, ask what specifically it covers.

## How do I tell a good ₹15,000 site from a bad one?

Ask four questions. They are checkable, and the answers separate the market
faster than a portfolio does.

1. **Will the code be on my own GitHub account?** If the answer is no, or vague,
   you are renting.
2. **Is the domain registered in my name?** It must be. This is the single most
   common way small businesses get held hostage.
3. **Can I see a staging URL each week during the build?** If the first time you
   see it is at delivery, expect a painful revision cycle.
4. **What specifically is excluded?** A quote without an exclusions list is not a
   fixed quote.

## Should I go cheaper?

Sometimes yes. A ₹10,000 site that exists beats a ₹60,000 site you keep
postponing. If you are testing whether a website brings you enquiries at all,
start small.

The failure mode to avoid is not cheapness — it is a cheap site you do not own,
on a domain registered to someone else, with no way to move. That is what makes
the second attempt cost more than doing it properly first.

## Related reading

- [The real cost of a cheap website](/blog/real-cost-of-a-cheap-website)
- [Next.js vs WordPress for a business website in India](/blog/nextjs-vs-wordpress-india)
- [Web development services](/services/web-development)`,
    faqs: [
      {
        question: "How much does a website cost in Uttar Pradesh in 2026?",
        answer:
          "Freelancers quote ₹8,000 to ₹25,000, small studios ₹15,000 to ₹60,000, and established agencies ₹60,000 to ₹2,00,000. The code is often similar across the middle bands — what changes is scope, process and who carries the risk when estimates are wrong. Running costs after launch should be under ₹2,000 a year for a typical five-page business site.",
      },
      {
        question: "What are the ongoing costs of a website?",
        answer:
          "A domain at ₹800 to ₹1,200 a year, and usually nothing else for a small business site — hosting fits inside Vercel's free tier, databases inside free tiers, and SSL certificates are free through Let's Encrypt. WordPress on shared cPanel hosting adds ₹2,400 to ₹6,000 a year. If someone quotes ₹15,000 annually for a five-page site with no maintenance plan, ask exactly what it covers.",
      },
      {
        question: "How do I avoid being overcharged for a website?",
        answer:
          "Ask four checkable questions: will the code be on my own GitHub account, is the domain registered in my name, can I see a staging URL every week during the build, and what specifically is excluded from the quote. A quote with no exclusions list is not a fixed quote. The answers to those four separate the market faster than looking at portfolios does.",
      },
      {
        question: "Is a cheap website always a bad idea?",
        answer:
          "No. A ₹10,000 site that exists beats a ₹60,000 site you keep postponing, and starting small is sensible if you are still testing whether a website brings enquiries at all. The failure mode to avoid is not low price — it is a site you do not own, on a domain registered to someone else, with no way to move it. That is what makes the second attempt cost more than doing it properly would have.",
      },
      {
        question: "Should I pay for an SSL certificate?",
        answer:
          "No. SSL certificates are free through Let's Encrypt and are issued and renewed automatically by every modern hosting platform. Being charged separately for SSL in 2026 is a signal worth paying attention to, because it suggests either outdated practice or padding. It is one of the quickest ways to sanity-check a hosting or maintenance quote.",
      },
      {
        question: "Why do fixed quotes cost more than hourly billing?",
        answer:
          "Because the developer absorbs the cost of their own estimation errors rather than passing them to you. A fixed quote carries a margin for that risk, so the headline number looks higher than an hourly estimate. In practice fixed quotes usually cost less overall, because an hourly arrangement rewards slowness and gives you no certainty about the final figure until the work is finished.",
      },
    ],
  },

  {
    slug: "nextjs-vs-wordpress-india",
    title: "Next.js vs WordPress for a business website in India",
    category: "Web Development",
    tags: ["nextjs", "wordpress", "comparison"],
    readMinutes: 8,
    coverImage: "/blog/nextjs-vs-wordpress.jpg",
    publishedAt: "2026-04-08",
    metaTitle: "Next.js vs WordPress for an Indian Business Website (2026)",
    metaDesc:
      "Next.js or WordPress for a business website in India? Honest comparison of cost, speed, maintenance and who should choose which, with real numbers.",
    excerpt:
      "The honest comparison: which one costs less over three years, which is faster, and the specific cases where WordPress is genuinely the better answer.",
    answerBlock:
      "Choose WordPress if you publish content frequently, need an existing plugin, or have staff already trained on it. Choose Next.js if page speed matters, if you need custom business logic, or if nobody will reliably keep plugins patched. Next.js costs more upfront and less to run.",
    changelog: [
      { date: "2026-04-08", note: "First published." },
      {
        date: "2026-07-02",
        note: "Updated the three-year cost table with current shared hosting prices in India.",
      },
    ],
    bodyMdx: `## Which is cheaper over three years?

Upfront cost favours WordPress. Total cost of ownership usually favours Next.js,
and the crossover is earlier than most people expect.

| | WordPress | Next.js |
|---|---|---|
| Build (5-page business site) | ₹12,000 – ₹25,000 | ₹15,000 – ₹30,000 |
| Hosting (per year) | ₹2,400 – ₹6,000 | ₹0 on free tier |
| Maintenance (per year) | ₹36,000 at ₹3,000/mo | ₹0 – ₹36,000, optional |
| Plugin licences (per year) | ₹3,000 – ₹15,000 | ₹0 |
| **3-year total (maintained)** | **₹1,40,000 – ₹1,90,000** | **₹15,000 – ₹1,38,000** |

The wide Next.js range is because maintenance is genuinely optional on a static
site with no plugins, whereas on WordPress it is not optional — an unmaintained
WordPress install is a security incident waiting to happen.

## Which is faster?

Next.js, substantially, and it is not really a contest once a WordPress site has
a page builder and a dozen plugins on it.

A typical Elementor-based WordPress site loads 2–4 MB and takes 4–8 seconds on a
mid-range Android phone on 4G — which is what most visitors in Uttar Pradesh are
using. An equivalent Next.js site ships under 200 KB and renders in well under a
second.

This is not a fair fight because the two work differently. WordPress assembles
the page on every request and loads every plugin's CSS and JavaScript whether the
page uses it or not. Next.js pre-renders to static HTML and ships only what the
page needs. See [Core Web Vitals](/glossary/core-web-vitals) for why that gap
matters commercially.

## When is WordPress genuinely the better choice?

We recommend it in four situations, and it costs us the larger invoice each time.

1. **You publish several times a week** and non-technical staff must do it
   without training. The WordPress editor is better than most custom admin
   panels, and that is worth real money.
2. **A plugin already does exactly what you need** — an established booking,
   membership or LMS plugin. Rebuilding that is rarely justified.
3. **Your staff already know WordPress.** Familiarity has genuine value.
4. **Budget is very tight and you already pay for shared hosting.** Marginal cost
   is close to zero.

## When is Next.js clearly better?

1. **Page speed matters to your business** — ecommerce, lead generation,
   anything where a slow site loses money.
2. **You need custom business logic** that WordPress was not designed for.
3. **Nobody will keep plugins patched.** Most compromised small-business sites we
   audit are WordPress installs with a year of unapplied updates. That is a
   maintenance failure more than a WordPress flaw, but if you know maintenance
   will not happen, choose the thing that does not need it.
4. **You want the site to grow into an application** later.

## Can I move from WordPress to Next.js later?

Yes, and it is common once a WordPress site becomes slow or unmaintainable. The
important part is URL mapping: every existing URL needs a 301 redirect to its new
equivalent, or you lose the search rankings you have accumulated. Content
migrates into the new database.

What you give up is the familiar editor, unless an admin panel is built as part
of the migration — which we usually do, for exactly this reason.

## The honest summary

If your site is a brochure that changes a few times a year and you want it fast
and cheap to run, Next.js. If it is a content operation with staff publishing
weekly, WordPress. Most Indian small businesses are the first and are sold the
second.

## Related reading

- [Website development cost in Uttar Pradesh in 2026](/blog/website-development-cost-uttar-pradesh)
- [Next.js](/technologies/nextjs) · [WordPress](/technologies/wordpress)
- [Web development services](/services/web-development)`,
    faqs: [
      {
        question: "Is Next.js better than WordPress?",
        answer:
          "For most Indian small business websites, yes — it is dramatically faster, has no plugin security exposure and costs almost nothing to run. WordPress is genuinely better when you publish content several times a week, when an existing plugin already does what you need, or when staff are already trained on its editor. The decision is about how the site will be used, not about which technology is superior.",
      },
      {
        question: "Is WordPress slower than Next.js?",
        answer:
          "Substantially, in typical real-world configurations. A WordPress site with a page builder and a dozen plugins commonly loads 2–4 MB and takes 4–8 seconds on a mid-range Android phone on 4G. An equivalent Next.js site ships under 200 KB and renders in under a second. WordPress assembles pages per request and loads every plugin's assets; Next.js pre-renders and ships only what the page uses.",
      },
      {
        question: "Can I migrate my WordPress site to Next.js without losing rankings?",
        answer:
          "Yes, provided URL mapping is done properly. Every existing URL needs a 301 redirect to its new equivalent, which passes accumulated ranking signals across. Content is migrated into the new database. The main thing you give up is the familiar WordPress editor, unless an admin panel is built as part of the migration — which is usually worth doing for exactly that reason.",
      },
      {
        question: "How much does WordPress cost per year to maintain?",
        answer:
          "Realistically ₹36,000 a year at ₹3,000 a month for a maintenance plan, plus ₹2,400 to ₹6,000 for hosting and ₹3,000 to ₹15,000 for plugin licences. Maintenance is not optional on WordPress — an install left unpatched for a year will eventually match an automated scanner's vulnerability list. That ongoing cost is the main reason total cost of ownership tends to favour Next.js by year two.",
      },
      {
        question: "Why do developers recommend WordPress so often?",
        answer:
          "Partly because it is genuinely good for content-heavy sites, and partly because it is fast to deliver and familiar, which makes it the lower-risk recommendation for the developer. It is worth asking specifically why it is being recommended for your case. If the answer is about your publishing frequency or a plugin you need, that is a real reason; if it is not, ask what the alternative would cost.",
      },
      {
        question: "Do I need a developer to update a Next.js site?",
        answer:
          "Not if an admin panel is built as part of the project, which we do from the Growth tier upward — you edit pages, publish posts, upload images and read enquiries without touching code. A Next.js site built without any admin layer does require a developer for content changes, which is a real disadvantage and worth confirming before you commit to a quote.",
      },
    ],
  },

  {
    slug: "real-cost-of-a-cheap-website",
    title: "The real cost of a cheap website",
    category: "Business Software",
    tags: ["pricing", "business", "web development"],
    readMinutes: 7,
    coverImage: "/blog/cheap-website.jpg",
    publishedAt: "2026-05-19",
    metaTitle: "The Real Cost of a Cheap Website | Codivra Solutions",
    metaDesc:
      "Three anonymised cases from Uttar Pradesh where a cheap website cost more than a proper one, and the four questions that prevent it.",
    excerpt:
      "Three businesses that paid twice. What actually goes wrong with a ₹6,000 website — and it is not the design.",
    answerBlock:
      "A cheap website becomes expensive when you do not own the domain, the code, or the hosting account. In three cases we audited, businesses paid ₹6,000 to ₹12,000 initially and ₹30,000 to ₹85,000 to recover — almost entirely on rebuilding what could not be transferred.",
    changelog: [
      { date: "2026-05-19", note: "First published with three anonymised cases." },
    ],
    bodyMdx: `## What actually goes wrong

It is not the design, and it is usually not the code either. In every recovery
job we have taken on, the problem was **ownership**.

A cheap build is cheap partly because the developer keeps things under their own
account — domain, hosting, sometimes the code itself. That costs them nothing
while the relationship is good. It costs you everything when it ends.

## Case one: the domain that was not theirs

A coaching institute in a district town paid ₹6,000 for a site in 2023. It worked
adequately for two years. The developer stopped responding in early 2026.

The domain was registered in the developer's name. The institute could not update
the site, could not move it, and could not use the domain they had been printing
on hoardings and admission forms for two years.

**Recovery:** new domain, full rebuild, redirects impossible because they never
controlled the old domain. Two years of accumulated search ranking lost.
**Cost: ₹30,000** and a name change on all printed material.

## Case two: hosting that expired quietly

A trading business paid ₹12,000 for a site with "one year free hosting". Nobody
noted when the year ended. The hosting lapsed, the site went down, and because the
account was in the developer's name, nobody received the renewal notice.

They found out six weeks later when a customer mentioned it. No backup existed.

**Recovery:** rebuild from scratch using pages recovered from the Internet
Archive. **Cost: ₹45,000**, plus six weeks of enquiries that went nowhere.

## Case three: the plugin that let someone in

A clinic paid ₹9,000 for a WordPress site in 2022. No maintenance plan — nobody
suggested one. Plugins went unpatched for three years.

In 2026 an automated scanner found a known vulnerability in an abandoned contact
form plugin and injected spam pages. Google flagged the site as compromised, and
the clinic's name in search results carried a warning for several weeks.

**Recovery:** clean-up, rebuild, reconsideration request, three months to restore
search visibility. **Cost: ₹85,000** including lost enquiries.

## The pattern

| Case | Initial | Recovery | What caused it |
|---|---|---|---|
| Coaching institute | ₹6,000 | ₹30,000 | Domain in developer's name |
| Trading business | ₹12,000 | ₹45,000 | Hosting account not theirs, no backups |
| Clinic | ₹9,000 | ₹85,000 | No maintenance, unpatched plugin |

In all three the initial saving was ₹10,000 to ₹35,000 against a properly scoped
build. The recovery cost three to nine times that.

## The four questions

None of these required technical knowledge to prevent. Ask any developer, before
paying:

1. **Will the domain be registered in my business name, on my own account?**
   Anything other than a clear yes is a red flag.
2. **Will I have the hosting account login?** Not "we manage it" — the login.
3. **Where will the source code live?** It should be a repository on your
   account.
4. **What happens if you become unavailable?** A developer who has thought about
   this has an answer. One who has not will be uncomfortable, and that discomfort
   is the information.

A ₹10,000 site that answers all four well is a fine purchase. A ₹50,000 site that
answers them badly is not.

## This is not an argument for expensive

We sell websites from ₹15,000 and think that is a reasonable price for a small
business. The argument is not "pay more" — it is "own what you pay for".

Cheap and owned is a good outcome. Expensive and not owned is the worst one, and
it happens more than you would think.

## Related reading

- [Website development cost in Uttar Pradesh in 2026](/blog/website-development-cost-uttar-pradesh)
- [Maintenance and support](/services/maintenance-and-support)`,
    faqs: [
      {
        question: "What is wrong with a cheap website?",
        answer:
          "Usually nothing, if you own it. The problem in every recovery job we have handled was ownership rather than price — the domain registered in the developer's name, hosting under their account, or code nowhere the client could reach. In three anonymised cases, initial savings of ₹10,000 to ₹35,000 turned into recovery costs of ₹30,000 to ₹85,000, entirely because nothing could be transferred.",
      },
      {
        question: "How do I check if I own my website?",
        answer:
          "Ask four things: is the domain registered in my business name on an account I can log into, do I have the hosting account login rather than being told it is managed for me, where does the source code live, and what happens if the developer becomes unavailable. A developer who has thought about the last question has a ready answer; discomfort with it is itself the information you need.",
      },
      {
        question: "What happens if my web developer disappears?",
        answer:
          "If you own the domain, hosting and code, very little — another developer picks it up. If you do not, you may lose the domain you have been printing on hoardings, the site itself, and any accumulated search ranking, because redirects require controlling the old domain. That is what turned a ₹6,000 site into a ₹30,000 rebuild in one of the cases we audited.",
      },
      {
        question: "Do I really need a maintenance plan for a small website?",
        answer:
          "For a static site with no plugins, backups and SSL renewal are usually enough. For WordPress, yes — an install left unpatched will eventually match an automated scanner's vulnerability list. In one case we handled, an abandoned contact form plugin let spam pages be injected, Google flagged the site, and recovery cost ₹85,000 against a maintenance plan that would have been ₹3,000 a month.",
      },
    ],
  },
];
