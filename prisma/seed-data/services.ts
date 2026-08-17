import type { SeedService } from "./types";

/**
 * The eight service pages. Every price, timeline and exclusion here is the
 * number that goes on a real quote — the pricing table is the single most-read
 * block on these pages and a figure that does not survive first contact with a
 * client costs more trust than a vague range ever would.
 */
export const services: SeedService[] = [
  // -------------------------------------------------------------------------
  {
    slug: "web-development",
    title: "Web Development Services",
    shortDesc:
      "Business websites and web applications built with Next.js and React, from ₹15,000.",
    heroHeadline: "Web development that loads fast and ranks",
    answerBlock:
      "Codivra Solutions builds business websites and web applications from Sitapur, Uttar Pradesh. A five-page business website starts at ₹15,000 and ships in two to three weeks. Every build uses Next.js or React, includes an admin panel, and hands over full source code ownership on your own GitHub account.",
    iconName: "Globe",
    startingPrice: 15000,
    deliveryWeeks: "2–6 weeks",
    featured: true,
    order: 1,
    metaTitle: "Web Development Company in Sitapur, Uttar Pradesh",
    metaDesc:
      "Web development company in Sitapur building business websites and web apps with Next.js and React. From ₹15,000, delivered in 2–6 weeks. Code you own.",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind-css",
      "nodejs",
      "postgresql",
      "vercel",
    ],
    industries: [
      "education",
      "healthcare",
      "retail-and-wholesale",
      "real-estate",
      "professional-services",
    ],
    tiers: [
      {
        name: "Starter",
        price: "₹15,000",
        priceNote: "one-time",
        timeline: "2–3 weeks",
        includes: [
          "Up to 5 pages (Home, About, Services, Gallery, Contact)",
          "Responsive design tested on real Android devices, not just a simulator",
          "Contact form with email notifications",
          "Google Maps embed and click-to-call",
          "Basic on-page SEO: titles, descriptions, sitemap, robots.txt",
          "Google Search Console and Analytics setup",
          "1 year free hosting on Vercel's free tier",
          "90 days of post-launch support",
        ],
        excludes: [
          "Content writing beyond light editing of what you supply",
          "Logo design (available as part of UI/UX Design)",
          "Payment gateway or user login",
          "Ongoing SEO work",
        ],
      },
      {
        name: "Growth",
        price: "₹45,000",
        priceNote: "one-time",
        timeline: "4–6 weeks",
        popular: true,
        includes: [
          "Up to 15 pages plus a blog",
          "Custom admin panel — edit pages, posts and images without calling us",
          "Enquiry management with a lead inbox and CSV export",
          "WhatsApp integration with prefilled messages",
          "Advanced SEO: schema markup, Open Graph images, canonical tags",
          "Image optimisation via Cloudinary (AVIF/WebP)",
          "Multi-language support (English + Hindi) if needed",
          "90 days of post-launch support",
        ],
        excludes: [
          "Payment gateway integration (₹8,000 add-on)",
          "Mobile app (see Mobile App Development)",
          "Stock photography licences",
        ],
      },
      {
        name: "Custom",
        price: "From ₹90,000",
        priceNote: "quoted per scope",
        timeline: "8+ weeks",
        includes: [
          "Full web application with user accounts and roles",
          "Custom database design and API",
          "Third-party integrations (Tally, payment gateways, SMS, ERP)",
          "Staging environment and weekly demo builds",
          "Load testing and a documented deployment runbook",
          "Handover session with your in-house team",
          "90 days of post-launch support",
        ],
        excludes: [
          "Native mobile apps",
          "Ongoing infrastructure costs (billed at actuals)",
        ],
      },
    ],
    bodyMdx: `## What you actually get

Most website quotes in Uttar Pradesh are a single line and a number. Ours is a
list, because the difference between a ₹15,000 website and a ₹60,000 website is
not "quality" — it is scope, and scope is the thing that should be written down
before anyone starts.

Every Codivra website, at every price, includes:

- **A responsive build tested on real devices.** We test on a mid-range Android
  phone on a 4G connection, because that is what most of your visitors in
  Sitapur, Hardoi and Lakhimpur are using. A site that only looks good on a
  MacBook is not finished.
- **An admin panel from the Growth tier upward.** You should not have to pay a
  developer to change a phone number or add a photo.
- **Real SEO groundwork**, not a plugin. Titles and descriptions written per
  page, a generated sitemap, schema markup, and Search Console verified before
  launch.
- **Source code on your GitHub account.** Not ours. If you stop working with us
  tomorrow, you keep everything and any other developer can pick it up.
- **90 days of support after launch**, covering bugs and small content changes.

## Which technology we use, and why

We do not have one stack we apply to everything. The choice follows the job:

- **[Next.js](/technologies/nextjs)** for anything that needs to rank. Server
  rendering means Google gets full HTML on first request, and the built-in image
  and font handling is what keeps Core Web Vitals green without extra work.
- **[React](/technologies/react)** for dashboards and internal tools where SEO
  is irrelevant and interactivity is the whole point.
- **[Node.js](/technologies/nodejs)** with **[PostgreSQL](/technologies/postgresql)**
  for the backend on most projects — one language across the stack keeps small
  teams fast.
- **[WordPress](/technologies/wordpress)** when a client genuinely needs to
  publish daily and already has staff trained on it. We will tell you when this
  is the better answer even though it is a smaller invoice for us.

If you already know what you want built on, say so on the call. If you do not,
that is what the discovery conversation is for.

## How the build runs, week by week

| Week | What happens | What you do |
|---|---|---|
| 0 | Discovery call, scope written up, fixed quote issued | Approve the scope |
| 1 | Sitemap, wireframes, content checklist sent to you | Supply text, logo, photos |
| 2 | Design of home page + one inner page for sign-off | Give one round of feedback |
| 3–4 | Full build, page by page, on a staging URL you can visit | Review the weekly demo |
| 5 | Content loading, SEO setup, cross-browser and device testing | Final content sign-off |
| 6 | Launch, DNS cutover, Search Console submission, handover call | Take ownership of the repo |

Smaller projects compress this — a Starter site is usually weeks 0, 1, 3 and 6.
Nothing here is a placeholder: you get a staging URL from week two and can watch
the thing being built.

## What makes a website expensive

Three things, and none of them are the number of pages:

1. **Integrations.** Talking to Tally, a payment gateway, an SMS provider or an
   existing ERP is where the hours go. Each integration is quoted separately so
   you can decide what is worth it.
2. **User accounts.** The moment a site has logins, roles and permissions, it is
   a web application, not a website, and the testing surface multiplies.
3. **Undecided content.** A project where the text is still being written six
   weeks in is the single most common cause of delay we see. We send a content
   checklist in week one for exactly this reason.

## Hosting and running costs

We are direct about this because it surprises people after launch:

| Item | Typical annual cost | Who pays |
|---|---|---|
| Domain (.com / .in) | ₹800 – ₹1,200 | You, in your own account |
| Hosting (Vercel free tier) | ₹0 for most business sites | — |
| Hosting (Vercel Pro, high traffic) | ~₹1,700/month | You, only if needed |
| Database (Neon / Supabase free tier) | ₹0 up to ~0.5 GB | — |
| Email (Resend, 3,000/month) | ₹0 | — |
| Cloudinary images (free tier) | ₹0 up to 25 GB bandwidth | — |

A typical five-page business site from us costs about **₹1,000 a year to run**.
We register domains in your name, on your account, so you are never locked in.

## Related reading

- [Website development cost in Uttar Pradesh in 2026](/blog/website-development-cost-uttar-pradesh)
- [Next.js vs WordPress for a business website in India](/blog/nextjs-vs-wordpress-india)
- [The real cost of a cheap website](/blog/real-cost-of-a-cheap-website)`,
    faqs: [
      {
        question: "How much does a website cost in Sitapur?",
        answer:
          "A five-page business website from Codivra starts at ₹15,000 and takes two to three weeks. A 15-page site with a blog and admin panel is ₹45,000 over four to six weeks. Custom web applications with logins and integrations start at ₹90,000. The quote is fixed before work begins, so the number you approve is the number you pay. Running costs after launch are usually around ₹1,000 a year for a domain, because hosting for a typical business site fits inside free tiers.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Two to three weeks for a five-page business website, four to six weeks for a larger site with a blog and admin panel, and eight weeks or more for a custom web application. The single biggest cause of delay is content: projects where text and photos are still being gathered in week five finish late. We send a content checklist in week one so you know exactly what is needed and when.",
      },
      {
        question: "Do I own the source code?",
        answer:
          "Yes, completely. We create the repository on your own GitHub account, not ours, and push to it from day one. The domain is registered in your name and the hosting account is yours. If you decide to work with a different developer, you hand them the repository and they can continue — there is nothing to buy back and no lock-in of any kind. This is deliberate: a client who stays because leaving is expensive is not a client relationship worth having.",
      },
      {
        question: "Will my website show up on Google?",
        answer:
          "Every site ships with the technical groundwork done: per-page titles and descriptions, a generated sitemap, schema markup, fast load times and Search Console verified before launch. That gets you indexed and eligible to rank. Actually ranking for competitive terms also needs content and time, which is what our SEO service covers separately. Any developer promising a number-one ranking as part of a website build is selling something they cannot control.",
      },
      {
        question: "Can I update the website myself after launch?",
        answer:
          "On the Growth tier and above, yes. You get a custom admin panel where you can edit page content, publish blog posts, upload images and read enquiries without writing code or calling us. Starter-tier sites are built as fixed pages; content changes in the first 90 days are covered by included support, and after that small edits are billed at an hourly rate or covered by a maintenance plan.",
      },
      {
        question: "What happens after the 90 days of support end?",
        answer:
          "Nothing breaks — the site keeps running and you keep owning it. Support covers bug fixes and small content changes during those 90 days. After that you can either handle changes yourself through the admin panel, call us for ad-hoc work billed hourly, or move onto a maintenance plan from ₹3,000 a month that covers updates, backups, uptime monitoring and a set number of content changes.",
      },
      {
        question: "Do you work with clients outside Sitapur?",
        answer:
          "Yes. Our office is in Sitapur and we meet clients in person across Sitapur, Lakhimpur Kheri, Hardoi and Lucknow, but most projects run remotely over calls and weekly demo links. We have built for clients elsewhere in Uttar Pradesh and outside the state. Being based in a district town is why our pricing works the way it does — the same build from a Lucknow or Noida agency carries their overheads.",
      },
      {
        question: "What if I already have a website that needs fixing?",
        answer:
          "We audit it first and tell you honestly whether it is worth repairing or rebuilding. Sites on very old WordPress versions with a decade of abandoned plugins are usually cheaper to rebuild than to untangle. If the foundation is sound, we quote the specific fixes — speed, mobile layout, SEO basics — as a smaller piece of work. The audit itself is free and you get the findings whether or not you hire us.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "mobile-app-development",
    title: "Mobile App Development (Android & iOS)",
    shortDesc:
      "Android and iOS apps built with React Native and Flutter, from ₹40,000.",
    heroHeadline: "One codebase, both app stores",
    answerBlock:
      "Codivra Solutions builds Android and iOS mobile apps from Sitapur using React Native and Flutter. A single codebase ships to both stores, which is why an app starts at ₹40,000 rather than double that. Typical delivery is six to twelve weeks, including Play Store and App Store submission.",
    iconName: "Smartphone",
    startingPrice: 40000,
    deliveryWeeks: "6–12 weeks",
    featured: true,
    order: 2,
    metaTitle: "Mobile App Development Company in Sitapur, UP",
    metaDesc:
      "Android and iOS app development in Sitapur with React Native and Flutter. From ₹40,000, delivered in 6–12 weeks including Play Store submission.",
    technologies: [
      "react-native",
      "flutter",
      "typescript",
      "nodejs",
      "firebase",
      "postgresql",
    ],
    industries: [
      "education",
      "healthcare",
      "retail-and-wholesale",
      "hospitality",
      "automobile",
    ],
    tiers: [
      {
        name: "Starter",
        price: "₹40,000",
        priceNote: "one-time",
        timeline: "6–8 weeks",
        includes: [
          "Up to 8 screens, Android and iOS from one codebase",
          "Login via phone number and OTP",
          "Push notifications",
          "Backend API and database",
          "Play Store submission handled by us",
          "90 days of post-launch support",
        ],
        excludes: [
          "Apple Developer account fee (US$99/year, paid by you)",
          "In-app payments",
          "Offline-first sync",
        ],
      },
      {
        name: "Growth",
        price: "₹1,20,000",
        priceNote: "one-time",
        timeline: "10–12 weeks",
        popular: true,
        includes: [
          "Up to 20 screens with a web admin dashboard",
          "Payment gateway (Razorpay or PhonePe)",
          "Role-based access — for example customer, staff and owner",
          "Analytics and crash reporting",
          "Both Play Store and App Store submission",
          "90 days of post-launch support",
        ],
        excludes: [
          "Apple Developer account fee (US$99/year)",
          "Ongoing server costs beyond free tiers",
          "Video streaming infrastructure",
        ],
      },
      {
        name: "Custom",
        price: "From ₹2,50,000",
        priceNote: "quoted per scope",
        timeline: "16+ weeks",
        includes: [
          "Complex apps: marketplaces, logistics, multi-tenant platforms",
          "Offline-first architecture with conflict resolution",
          "Third-party integrations and hardware (scanners, printers, GPS)",
          "Load testing and staged rollout",
          "Documented handover to your team",
        ],
        excludes: ["App store fees", "Infrastructure billed at actuals"],
      },
    ],
    bodyMdx: `## Why one codebase instead of two

Building an Android app in Kotlin and an iOS app in Swift means two teams, two
codebases and roughly twice the bill. For the overwhelming majority of business
apps — booking, ordering, catalogues, attendance, field reporting — there is no
user-visible benefit that justifies it.

We build with [React Native](/technologies/react-native) or
[Flutter](/technologies/flutter), which compile to genuinely native UI on both
platforms from one source. That is the entire reason an app can start at ₹40,000
here instead of ₹80,000.

We would recommend fully native only if your app needs heavy real-time graphics,
deep integration with platform hardware, or sub-frame performance. We will say so
on the call rather than after you have paid.

## React Native or Flutter?

| Consideration | React Native | Flutter |
|---|---|---|
| Language | JavaScript / TypeScript | Dart |
| Best when | You also have a React web app and want shared logic | You want pixel-identical UI across both platforms |
| UI feel | Uses each platform's native components | Draws its own, consistent everywhere |
| Hiring later in India | Larger pool, overlaps with web developers | Smaller but growing pool |
| Our default for | Apps with an existing web product | Standalone apps with a strong design system |

Either is a defensible choice. If you have no preference, we pick based on
whether you already have a React web application to share code with.

## What the ₹40,000 tier actually covers

Eight screens is more than it sounds. A typical Starter app is: splash, phone
login, OTP verification, home, listing, detail, profile, and one action screen
such as booking or ordering. That is a complete, shippable product for a single
clear job.

It includes the backend. An app is not just the thing on the phone — there is an
API, a database and an admin view behind it, and those are in the price.

## The parts people forget to budget for

- **Apple charges US$99 per year** for a developer account, roughly ₹8,500. This
  is paid by you, directly to Apple, in your own name. Google Play is a one-time
  US$25.
- **App review takes time.** Google is usually one to three days. Apple is one to
  seven, and first submissions get rejected more often than not for small policy
  reasons. We handle resubmission; just do not plan a launch event around an
  unconfirmed date.
- **Accounts must be in your name.** We will set them up and manage submission,
  but the developer accounts belong to your business, exactly like the domain and
  the repository.

## Week by week

| Week | What happens |
|---|---|
| 0 | Discovery, screen list agreed, fixed quote |
| 1–2 | Wireframes and UI design for every screen, signed off before code |
| 3–6 | Build in weekly sprints; you get an installable test build each Friday |
| 7 | Backend hardening, push notifications, analytics |
| 8 | Device testing, store assets, submission |
| 9+ | Review feedback, launch, handover |

The Friday build matters more than anything else on this list. You have the app
on your own phone from week three, which is how scope problems get caught while
they are still cheap to fix.

## Related reading

- [How much does a mobile app cost in India in 2026](/blog/mobile-app-cost-india)
- [React Native vs Flutter for an Indian product team](/blog/react-native-vs-flutter)`,
    faqs: [
      {
        question: "How much does it cost to make an app in India?",
        answer:
          "A focused app with up to eight screens starts at ₹40,000 from Codivra and takes six to eight weeks. A larger app with payments, roles and an admin dashboard is around ₹1,20,000 over ten to twelve weeks. Complex platforms such as marketplaces or logistics systems start at ₹2,50,000. These are cross-platform builds covering both Android and iOS from one codebase, which is what keeps the figure at roughly half of a separate-native quote.",
      },
      {
        question: "Will my app work on both Android and iPhone?",
        answer:
          "Yes. We build with React Native or Flutter, which produce native apps for both platforms from a single codebase. You get one app that behaves correctly on Android and iOS rather than two separate products. This is included in every tier — there is no extra charge for the second platform, though Apple's US$99 annual developer account fee applies if you want to be on the App Store.",
      },
      {
        question: "Do you handle Play Store and App Store submission?",
        answer:
          "Yes, submission is included. We prepare the store listing, screenshots, descriptions, privacy policy and content rating, then submit and handle any review feedback. The developer accounts are registered in your business name and you retain full control of them. Google Play review is usually one to three days; Apple takes one to seven and commonly rejects a first submission over a minor policy point, which we then fix and resubmit at no extra cost.",
      },
      {
        question: "Can the app work without an internet connection?",
        answer:
          "Basic caching so previously loaded screens still open is included in every build. True offline-first behaviour — where users create and edit data offline and it syncs later with conflicts resolved — is a genuinely harder problem and is quoted as part of the Custom tier. If your users are field staff in areas with patchy coverage, tell us at the discovery stage, because it changes the architecture rather than being a feature bolted on afterwards.",
      },
      {
        question: "What ongoing costs does an app have?",
        answer:
          "Apple charges US$99 per year to keep an iOS app listed; Google Play is a one-time US$25. Backend hosting and database usually fit in free tiers for early-stage apps and cost from around ₹1,500 a month once you have meaningful traffic. Push notifications through Firebase are free at normal volumes. Beyond that, both platforms require periodic updates to stay compatible with new OS versions, which a maintenance plan from ₹3,000 a month covers.",
      },
      {
        question: "How do I test the app while it is being built?",
        answer:
          "You get an installable build on your own phone every Friday from week three. On Android this is an APK you can sideload; on iOS it is a TestFlight invitation. This is deliberate — reading a specification document is a poor way to notice that a flow feels wrong, and catching that in week four costs a fraction of catching it in week nine.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDesc:
      "ERP, CRM and internal tools built around how your business actually works. From ₹50,000.",
    heroHeadline: "Software shaped to your process, not the other way round",
    answerBlock:
      "Codivra Solutions builds custom business software from Sitapur — ERP modules, CRMs, billing systems and internal tools. Projects start at ₹50,000 and run eight to sixteen weeks. We build custom only when off-the-shelf genuinely does not fit, and we will tell you when it does.",
    iconName: "Boxes",
    startingPrice: 50000,
    deliveryWeeks: "8–16 weeks",
    featured: true,
    order: 3,
    metaTitle: "Custom Software Development Company in Sitapur",
    metaDesc:
      "Custom software development in Sitapur, Uttar Pradesh. ERP, CRM, billing and internal tools from ₹50,000, delivered in 8–16 weeks. Code you own.",
    technologies: [
      "nextjs",
      "react",
      "nodejs",
      "postgresql",
      "typescript",
      "python",
      "django",
      "docker",
    ],
    industries: [
      "manufacturing",
      "healthcare",
      "education",
      "retail-and-wholesale",
      "professional-services",
    ],
    tiers: [
      {
        name: "Single module",
        price: "₹50,000",
        priceNote: "one-time",
        timeline: "6–8 weeks",
        includes: [
          "One focused module — billing, inventory, attendance or enquiry tracking",
          "User accounts with two roles",
          "Reports exportable to Excel and PDF",
          "Data migration from your existing Excel sheets",
          "Staff training session and a written user guide",
          "90 days of post-launch support",
        ],
        excludes: [
          "Tally or third-party ERP integration (quoted separately)",
          "Mobile app",
          "Multi-branch support",
        ],
      },
      {
        name: "Business suite",
        price: "₹1,50,000",
        priceNote: "one-time",
        timeline: "10–16 weeks",
        popular: true,
        includes: [
          "Three to five connected modules with a shared database",
          "Role-based permissions across departments",
          "Dashboards and scheduled email reports",
          "Tally or payment gateway integration",
          "Audit log of who changed what",
          "Multi-branch or multi-location support",
          "90 days of post-launch support",
        ],
        excludes: [
          "Hardware (scanners, printers, biometric devices)",
          "Ongoing server costs, billed at actuals",
        ],
      },
      {
        name: "Platform",
        price: "From ₹3,00,000",
        priceNote: "quoted per scope",
        timeline: "20+ weeks",
        includes: [
          "Multi-tenant platform you can sell to your own customers",
          "Public API and webhook support",
          "Automated test suite and CI pipeline",
          "Load testing and documented deployment runbook",
          "Handover and training for your in-house team",
        ],
        excludes: ["Infrastructure billed at actuals", "Ongoing feature work"],
      },
    ],
    bodyMdx: `## When custom software is the wrong answer

We will start with the case against, because it saves everyone money.

If your requirement is standard accounting, use Tally or Zoho Books. If it is
plain CRM, use Zoho or HubSpot. If it is a website with a shop, that is
[ecommerce development](/services/ecommerce-development), not custom software.
Off-the-shelf products have thousands of users finding bugs for you and cost a
fraction of a bespoke build.

Custom is worth it when one of these is true:

- Your process is genuinely unusual and the off-the-shelf tool forces you to
  work in a way that costs you real time every day.
- You are paying per-user licence fees that now exceed the cost of building.
- You need two systems to talk to each other and neither vendor will help.
- The software *is* the product — you intend to sell access to it.

If none of those apply, we will say so on the discovery call.

## What we have actually built

Our product line came out of exactly this work: a
[school management system](/products/school-management-system), a
[clinic management system](/products/clinic-management-system), a
[billing and POS system](/products/billing-and-pos) and an
[HR management system](/products/hr-management-system). Each started as a custom
build for one client before being generalised.

That matters for your quote. If your requirement is 70% one of those products,
you are better off starting from it and paying for the 30% difference than
funding a build from zero.

## How we scope without scope creep

The fixed quote depends on a scope that is written down before anyone writes
code. Our discovery produces three documents:

1. **A module list** — what exists, what each one does, who can see it.
2. **A data model** — the entities and how they relate. This is where most
   misunderstandings surface, and it is much cheaper to argue about a diagram
   than about a built screen.
3. **An explicit out-of-scope list.** Things you asked about that are *not*
   included, written down, so nobody is surprised later.

Change requests after sign-off are quoted as small add-ons. We do not bill
hourly against an open-ended scope, because that arrangement rewards us for
being slow.

## Technology choices

| Requirement | What we use | Why |
|---|---|---|
| Web-based business app | [Next.js](/technologies/nextjs) + [PostgreSQL](/technologies/postgresql) | One language across the stack, strong relational integrity |
| Heavy data processing or ML | [Python](/technologies/python) + [Django](/technologies/django) | The library ecosystem is unmatched for analysis |
| Existing PHP team in-house | [Laravel](/technologies/laravel) | Handing over to staff who can maintain it beats elegance |
| Deployment consistency | [Docker](/technologies/docker) | Same environment on your server as on ours |

We pick for maintainability by *your* future team, not for what is interesting
to build.

## Data migration is part of the job

Almost every client arrives with years of history in Excel, Tally exports or a
previous system. Migration is included in the quote, not a surprise line item.
We map old data to the new model, run a trial import you can inspect, and keep
the original files untouched so there is always a way back.

## Related reading

- [How we build software: our fixed-quote process explained](/blog/fixed-quote-process)
- [What school management software should cost](/blog/school-management-software-cost)`,
    faqs: [
      {
        question: "How much does custom software cost in India?",
        answer:
          "A single focused module such as billing or attendance starts at ₹50,000 and takes six to eight weeks. A connected suite of three to five modules with role-based permissions and reporting is around ₹1,50,000 over ten to sixteen weeks. A multi-tenant platform you intend to sell to your own customers starts at ₹3,00,000. Data migration from your existing Excel sheets and staff training are included rather than billed separately.",
      },
      {
        question: "Should I buy off-the-shelf software or build custom?",
        answer:
          "Buy off-the-shelf unless you have a specific reason not to. Standard accounting, plain CRM and basic inventory are solved problems, and a product with thousands of users has had its bugs found for you. Custom is worth it when your process is genuinely unusual, when per-user licence fees have grown past the cost of building, when two systems need to talk and neither vendor will help, or when the software itself is what you intend to sell.",
      },
      {
        question: "Can you integrate with Tally?",
        answer:
          "Yes. Tally integration is quoted separately because the effort varies a lot with what you need. Reading data out of Tally for reporting is straightforward. Pushing entries back in is more involved and depends on your Tally version and whether you are on Tally Prime with the HTTP interface enabled. We confirm exactly what is possible against your specific setup during discovery, before the quote is fixed.",
      },
      {
        question: "What happens to our existing data in Excel?",
        answer:
          "Migration is included. We map your existing columns to the new data model, run a trial import into a staging environment that you inspect and sign off, then run the final import at cutover. Your original files are never modified, so there is always a way back. Messy data is normal and expected — inconsistent date formats and duplicate records are part of what the mapping step exists to handle.",
      },
      {
        question: "Who owns the software once it is built?",
        answer:
          "You do, completely. The repository is created on your GitHub account, the database and hosting accounts are in your business name, and there are no licence fees payable to us. If you later hire an in-house developer or move to another agency, they take over the codebase directly. We include a handover session and written documentation specifically so that is a realistic option rather than a theoretical one.",
      },
      {
        question: "How do you handle changes once the build has started?",
        answer:
          "Small changes that do not affect the data model are usually absorbed. Anything larger is quoted as an add-on with its own price and timeline before we start it, so you decide whether it is worth the money. This is why discovery produces an explicit out-of-scope list — the point is that neither side is guessing about what was included when a request comes up in week nine.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "ecommerce-development",
    title: "Ecommerce Website Development",
    shortDesc:
      "Online stores with payment gateway, inventory and order management. From ₹25,000.",
    heroHeadline: "An online store that actually takes payments",
    answerBlock:
      "Codivra Solutions builds ecommerce websites from Sitapur with Razorpay or PhonePe payments, inventory tracking and order management. Stores start at ₹25,000 and ship in three to six weeks, including GST-compliant invoicing and a seller dashboard you can run yourself.",
    iconName: "ShoppingCart",
    startingPrice: 25000,
    deliveryWeeks: "3–8 weeks",
    featured: true,
    order: 4,
    metaTitle: "Ecommerce Website Development Company in Sitapur",
    metaDesc:
      "Ecommerce website development in Sitapur with Razorpay payments, inventory and GST invoicing. From ₹25,000, delivered in 3–8 weeks.",
    technologies: [
      "nextjs",
      "react",
      "nodejs",
      "postgresql",
      "typescript",
      "tailwind-css",
      "wordpress",
    ],
    industries: ["retail-and-wholesale", "manufacturing", "hospitality"],
    tiers: [
      {
        name: "Starter store",
        price: "₹25,000",
        priceNote: "one-time",
        timeline: "3–4 weeks",
        includes: [
          "Up to 50 products with categories and search",
          "Razorpay or PhonePe payment gateway",
          "Cash on delivery option",
          "Order management dashboard",
          "GST-compliant invoice generation",
          "WhatsApp order notifications",
          "90 days of post-launch support",
        ],
        excludes: [
          "Payment gateway account setup fees and transaction charges",
          "Product photography",
          "Courier or logistics integration",
        ],
      },
      {
        name: "Growth store",
        price: "₹75,000",
        priceNote: "one-time",
        timeline: "6–8 weeks",
        popular: true,
        includes: [
          "Unlimited products with variants (size, colour, weight)",
          "Customer accounts, order history and wishlists",
          "Coupon and discount engine",
          "Inventory tracking with low-stock alerts",
          "Shiprocket or Delhivery integration",
          "Abandoned-cart recovery emails",
          "Sales reports and best-seller analytics",
          "90 days of post-launch support",
        ],
        excludes: [
          "Transaction charges (2% typical, paid to the gateway)",
          "Courier charges",
          "Ongoing marketing spend",
        ],
      },
      {
        name: "Marketplace",
        price: "From ₹1,80,000",
        priceNote: "quoted per scope",
        timeline: "12+ weeks",
        includes: [
          "Multi-vendor marketplace with seller onboarding",
          "Commission handling and vendor payouts",
          "Per-vendor dashboards and reporting",
          "Customer mobile app (optional add-on)",
          "Load testing for sale-day traffic",
        ],
        excludes: ["Payment aggregator licensing", "Vendor acquisition"],
      },
    ],
    bodyMdx: `## Should you use Shopify instead?

Often, yes — and we would rather say that now than after you have paid us.

**Use Shopify** if you want to be selling next week, have fewer than a few
hundred products, and are comfortable with roughly ₹2,000–₹7,000 a month plus
transaction fees forever. It is a genuinely good product.

**Build custom** when the monthly fee has become significant, when you need
business logic Shopify does not do — dealer pricing tiers, made-to-order
configuration, wholesale minimums, or integration with a system you already run
— or when you need the store to be part of a larger application.

| | Shopify | Custom build from Codivra |
|---|---|---|
| Upfront cost | ₹0 – ₹25,000 setup | ₹25,000 – ₹75,000 |
| Monthly cost | ₹2,000 – ₹7,000 + apps | ~₹0 – ₹1,700 hosting |
| Break-even vs custom | — | Roughly 18–24 months |
| Custom business rules | Limited without paid apps | Anything you can define |
| You own the code | No | Yes |

The honest summary: below about ₹40,000 of annual Shopify spend, Shopify wins.
Above it, custom starts paying for itself.

## Payments in India, specifically

We integrate **Razorpay** or **PhonePe** as standard. Both support UPI, cards,
net banking and wallets, and both settle to your current account in two to three
working days.

Things worth knowing before you budget:

- **Transaction fees are about 2%** and are paid by you to the gateway, not to
  us. On ₹10 lakh of annual sales that is ₹20,000.
- **You need a business current account and GST registration** to get a live
  gateway account. Sole proprietors can do this; individuals generally cannot.
- **Activation takes three to seven working days** and requires document
  verification. Start it in week one, not the week before launch.
- **Cash on delivery is still the majority** of orders for many UP-based stores,
  so it is included by default and the dashboard treats COD orders as a
  first-class case rather than an afterthought.

## GST invoicing is built in, not bolted on

Every order generates a GST-compliant invoice with your GSTIN, HSN codes per
product, and the correct CGST/SGST or IGST split based on the delivery state.
You can download invoices individually or export a month at a time for your
accountant. This is included at every tier because a store that cannot produce a
compliant invoice is not actually usable in India.

## What we need from you

The build stalls without these, so they are worth starting early:

- Product list with names, descriptions, prices, HSN codes and stock counts
- Product photographs — good ones; this affects conversion more than the design
- GSTIN, business PAN and current account details for the gateway
- Shipping rules: which pincodes, what charges, what free-delivery threshold
- Return and refund policy text

## Related reading

- [Why a small business in Sitapur needs a website](/blog/small-business-website-sitapur)
- [Local SEO checklist for a UP business](/blog/local-seo-checklist-up)`,
    faqs: [
      {
        question: "How much does an ecommerce website cost in India?",
        answer:
          "A store with up to 50 products, a payment gateway and order management starts at ₹25,000 from Codivra and ships in three to four weeks. A larger store with product variants, customer accounts, coupons, inventory tracking and courier integration is around ₹75,000 over six to eight weeks. Multi-vendor marketplaces start at ₹1,80,000. Payment gateway transaction fees of roughly 2% are paid by you to the gateway and are separate from the build cost.",
      },
      {
        question: "Should I use Shopify or build a custom store?",
        answer:
          "Use Shopify if you want to launch quickly, have a few hundred products and are comfortable paying ₹2,000 to ₹7,000 a month indefinitely. Build custom when that monthly fee has grown significant, when you need business rules Shopify cannot express such as dealer pricing tiers or wholesale minimums, or when the store must integrate with a system you already run. Break-even is roughly 18 to 24 months, so below about ₹40,000 of annual Shopify spend, Shopify is the better economic choice.",
      },
      {
        question: "Which payment gateway do you integrate?",
        answer:
          "Razorpay or PhonePe as standard, both of which support UPI, cards, net banking and wallets with settlement to your current account in two to three working days. You will need a business current account and GST registration to get a live account, and activation takes three to seven working days after document verification. Start that process in week one of the project rather than the week before launch, because it is the most common cause of a delayed go-live.",
      },
      {
        question: "Does the store handle GST invoices?",
        answer:
          "Yes, at every tier. Each order produces a GST-compliant invoice carrying your GSTIN, per-product HSN codes and the correct CGST/SGST or IGST split based on the delivery state. Invoices can be downloaded individually or exported a month at a time for your accountant. This is included rather than being an add-on, because a store that cannot issue a compliant invoice is not usable in India in practice.",
      },
      {
        question: "Can customers pay cash on delivery?",
        answer:
          "Yes, and it is enabled by default. Cash on delivery is still the majority of orders for many stores serving Uttar Pradesh, so the order dashboard treats COD as a first-class case with its own status flow and reconciliation view rather than an afterthought. You can restrict COD by pincode or above a certain order value if you want to limit exposure to returns.",
      },
      {
        question: "Do you handle shipping and courier integration?",
        answer:
          "Shiprocket and Delhivery integration is included from the Growth tier, which lets you generate labels, push orders and show tracking to customers automatically. On the Starter tier orders are managed manually through the dashboard, which is usually fine below roughly twenty orders a day. Courier charges themselves are paid by you directly to the logistics provider and are separate from the build cost.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    shortDesc:
      "Chatbots, document automation, RAG systems and predictive models. From ₹60,000.",
    heroHeadline: "AI features that solve a specific, boring problem",
    answerBlock:
      "Codivra Solutions builds practical AI features from Sitapur: support chatbots grounded in your own documents, invoice and form data extraction, and demand forecasting. Projects start at ₹60,000 over six to fourteen weeks. We scope against a measurable outcome, not a demo.",
    iconName: "Sparkles",
    startingPrice: 60000,
    deliveryWeeks: "6–14 weeks",
    featured: true,
    order: 5,
    metaTitle: "AI & Machine Learning Company in Sitapur, UP",
    metaDesc:
      "AI and machine learning development in Sitapur. Chatbots, RAG search, document automation and forecasting from ₹60,000 in 6–14 weeks.",
    technologies: [
      "ai-ml",
      "langchain-rag",
      "python",
      "tensorflow",
      "nextjs",
      "postgresql",
      "docker",
    ],
    industries: [
      "healthcare",
      "education",
      "retail-and-wholesale",
      "professional-services",
      "manufacturing",
    ],
    tiers: [
      {
        name: "Assistant",
        price: "₹60,000",
        priceNote: "one-time + running costs",
        timeline: "6–8 weeks",
        includes: [
          "Support chatbot grounded in your own documents (RAG)",
          "Answers cite the source document, so staff can verify",
          "Website widget plus optional WhatsApp channel",
          "Admin view of every question asked, including unanswered ones",
          "Escalation to a human when confidence is low",
          "90 days of post-launch support",
        ],
        excludes: [
          "LLM API usage costs, billed to your own account at actuals",
          "Content writing for the source documents",
          "Voice or telephony",
        ],
      },
      {
        name: "Automation",
        price: "₹1,40,000",
        priceNote: "one-time + running costs",
        timeline: "10–14 weeks",
        popular: true,
        includes: [
          "Document data extraction — invoices, forms, prescriptions, bills",
          "Human-in-the-loop review screen before anything is committed",
          "Accuracy measured on a held-out sample and reported honestly",
          "Integration into your existing system or database",
          "Retraining and correction workflow",
          "90 days of post-launch support",
        ],
        excludes: [
          "API usage costs at actuals",
          "Data labelling beyond the first 200 samples",
        ],
      },
      {
        name: "Custom model",
        price: "From ₹2,50,000",
        priceNote: "quoted per scope",
        timeline: "16+ weeks",
        includes: [
          "Demand forecasting, churn or risk scoring on your own data",
          "Baseline comparison so you know the model beats a simple rule",
          "Monitoring for drift after deployment",
          "Documented methodology and retraining schedule",
        ],
        excludes: ["GPU infrastructure at actuals", "Data acquisition"],
      },
    ],
    bodyMdx: `## We scope AI against an outcome, not a demo

It is very easy to build an AI demo that impresses in a meeting and is useless in
production. So the first thing we ask is: what number should move, and how will
we know?

"Reduce the time our front desk spends answering the same five admission
questions" is a scope. "Add AI" is not. Every AI project we take on has a
measurable target agreed before the quote, and we report the real number at
handover even when it is less flattering than the demo suggested.

## What actually works well right now

**Answering questions from your own documents (RAG).** This is the most reliable
category. We index your fee structure, prospectus, policy documents or product
catalogue, and the assistant answers only from those, citing which document it
used. It says "I don't know" rather than inventing an answer, and unanswered
questions land in an admin queue so you can see the gaps.

**Extracting data from documents.** Invoices, delivery challans, admission forms,
prescriptions. This replaces manual typing, which is slow and error-prone. We
always build a review screen — a human confirms before anything is committed to
your database, because accuracy at 96% still means one wrong record in
twenty-five.

**Forecasting from your own history.** Stock demand, admission volumes, seasonal
patterns. This needs at least two years of reasonably clean data. We always build
a naive baseline first, and if the model does not clearly beat "same as last
year", we tell you and refund the modelling phase rather than shipping something
that dresses up noise.

## What we will talk you out of

- **A chatbot as your only support channel.** It should deflect repetitive
  questions and hand off cleanly, not trap people in a loop.
- **Prediction on thin data.** Under about two years of history, or fewer than a
  few thousand records, statistical honesty says no.
- **"AI" that is really a rule.** If three if-statements solve it, we will write
  the three if-statements and charge you a fraction of the price.

## Running costs, stated plainly

AI features have ongoing costs that traditional software does not, and they are
billed to your own provider account, not marked up by us:

| Workload | Typical monthly cost |
|---|---|
| Document chatbot, ~1,000 questions/month | ₹800 – ₹2,500 |
| Document extraction, ~2,000 pages/month | ₹1,500 – ₹4,000 |
| Self-hosted open model on a rented GPU | ₹8,000 – ₹25,000 |
| Forecasting model (batch, nightly) | Under ₹500 |

We set the account up in your name and show you the usage dashboard, so cost is
something you can watch rather than something that arrives as a surprise.

## Related reading

- [AI features a small business can actually afford in 2026](/blog/affordable-ai-small-business)`,
    faqs: [
      {
        question: "How much does an AI chatbot cost for a business in India?",
        answer:
          "A support chatbot grounded in your own documents starts at ₹60,000 from Codivra and takes six to eight weeks, including a website widget, an admin view of every question asked, and escalation to a human when confidence is low. Running costs are separate and typically ₹800 to ₹2,500 a month for around a thousand questions, billed to your own provider account rather than marked up by us.",
      },
      {
        question: "Will the chatbot make things up?",
        answer:
          "We build retrieval-augmented systems, which means the assistant answers only from documents you supply and cites which one it used, so staff can verify. When it cannot find a grounded answer it says so and escalates rather than guessing. That is a deliberate design constraint: a confident wrong answer about your fee structure or refund policy costs far more than an honest 'I don't know' plus a handoff to a person.",
      },
      {
        question: "How much data do I need for a prediction model?",
        answer:
          "Realistically at least two years of history and a few thousand records. Below that, any model is fitting noise and will not survive contact with next season. We always build a naive baseline first — usually 'same as last year' or a simple moving average — and compare against it honestly. If the model does not clearly beat the baseline we tell you and refund the modelling phase rather than shipping something that looks sophisticated and predicts nothing.",
      },
      {
        question: "What are the ongoing costs of an AI feature?",
        answer:
          "Unlike traditional software, AI features carry per-use costs. A document chatbot handling around a thousand questions a month typically costs ₹800 to ₹2,500; document extraction at two thousand pages a month is ₹1,500 to ₹4,000; a nightly batch forecasting model is usually under ₹500. Self-hosting an open model on a rented GPU runs ₹8,000 to ₹25,000 a month. These are billed to your own provider account at actuals, and we show you the usage dashboard.",
      },
      {
        question: "Can you automate reading our invoices and bills?",
        answer:
          "Yes, this is one of the most reliable AI applications available today. We extract structured fields from invoices, challans, forms or prescriptions and push them into your database. We always include a human review screen before anything is committed, because even 96% accuracy means one wrong record in twenty-five, and a wrong amount in your books costs more than the typing it saved. Accuracy is measured on a held-out sample and reported as the real figure.",
      },
      {
        question: "Do I need AI at all?",
        answer:
          "Often not, and we will say so. If a problem is solved by three if-statements, we will write the three if-statements and charge you a fraction of the price. AI earns its cost when the input is genuinely unstructured — free text, scanned documents, varied phrasing — or when the pattern is too complex to write down as rules. Anything else is an expensive way to do something simple, and it is harder to debug when it goes wrong.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    shortDesc:
      "Product and website design that gets tested with real users. From ₹10,000.",
    heroHeadline: "Design that is judged on whether people can use it",
    answerBlock:
      "Codivra Solutions designs websites, apps and dashboards from Sitapur. Design starts at ₹10,000 for a landing page and ₹45,000 for a full product, delivered in one to six weeks as Figma files you own, with a component library your developers can build from directly.",
    iconName: "PenTool",
    startingPrice: 10000,
    deliveryWeeks: "1–6 weeks",
    featured: false,
    order: 6,
    metaTitle: "UI/UX Design Company in Sitapur, Uttar Pradesh",
    metaDesc:
      "UI/UX design services in Sitapur. Website, app and dashboard design from ₹10,000, delivered as Figma files with a component library you own.",
    technologies: ["tailwind-css", "react", "nextjs"],
    industries: [
      "education",
      "healthcare",
      "retail-and-wholesale",
      "hospitality",
      "professional-services",
    ],
    tiers: [
      {
        name: "Landing page",
        price: "₹10,000",
        priceNote: "one-time",
        timeline: "1 week",
        includes: [
          "One page designed for desktop and mobile",
          "Two concept directions, then one round of revisions",
          "Figma file handed to you with edit access",
          "Exported assets and a colour and type specification",
        ],
        excludes: ["Copywriting", "Illustration or custom photography", "Development"],
      },
      {
        name: "Website design",
        price: "₹28,000",
        priceNote: "one-time",
        timeline: "2–3 weeks",
        popular: true,
        includes: [
          "Up to 8 unique page templates, desktop and mobile",
          "A component library so new pages stay consistent",
          "Interactive prototype you can click through",
          "Accessibility check: contrast, focus states, tap target sizes",
          "Three rounds of revisions",
          "Developer handoff notes with spacing and behaviour specs",
        ],
        excludes: ["Copywriting", "Development", "Stock photo licences"],
      },
      {
        name: "Product design",
        price: "From ₹45,000",
        priceNote: "quoted per scope",
        timeline: "4–6 weeks",
        includes: [
          "Full app or dashboard design, all states covered",
          "Empty, loading, error and permission-denied states designed",
          "Design system with tokens, ready to map onto Tailwind",
          "Usability testing with five real users and a written findings report",
          "Dark and light mode",
        ],
        excludes: ["Development", "Ongoing design retainer"],
      },
    ],
    bodyMdx: `## We design the unglamorous states too

Most design deliverables show the happy path: a full table, a completed form, a
dashboard with tidy data. Then development starts and nobody knows what the
screen looks like when the list is empty, the upload failed, the user lacks
permission, or the name is 60 characters long.

Those states are where users actually get stuck. From the Website tier upward we
design them explicitly:

- **Empty state** — what a new user sees before there is any data, and what
  action it points them to
- **Loading state** — skeletons rather than spinners, so layout does not shift
- **Error state** — what specifically went wrong and what to do about it
- **Permission state** — what a user who cannot access something sees
- **Overflow** — long names, long lists, small screens

## Accessibility is part of design, not a later fix

Every design we hand over meets WCAG 2.1 AA on the things design controls:

- Body text at 4.5:1 contrast minimum, checked with a tool rather than by eye
- Visible focus states designed, not left to the browser default
- Tap targets at least 44×44px
- Information never carried by colour alone
- A sensible heading order for screen readers

Retrofitting this after development costs several times more than designing it
correctly, and in dark-mode interfaces the low-contrast accent colour is by far
the most common failure — which is precisely why it gets checked at design time.

## Handover your developers can actually build from

The deliverable is a Figma file you own outright, with edit access, containing:

- A component library rather than loose rectangles, so new pages inherit
- Design tokens for colour, spacing and type, named to map onto
  [Tailwind](/technologies/tailwind-css) directly
- Spacing and behaviour notes on interactive components
- Exported assets in the formats and sizes needed

If we are also building the site, this becomes the implementation spec. If
another team is building it, they get a file that answers questions instead of
raising them.

## Testing with five users

On the Product tier we run usability testing with five real people from your
actual audience — shopkeepers, parents, front-desk staff, whoever will use it.
Five is not arbitrary: it is the point at which additional testers stop surfacing
new problems in proportion to their cost.

You get a written findings report listing what people could not do, ranked by how
many hit it. Some of it will be uncomfortable. That is the value.

## Related reading

- [How we build software: our fixed-quote process explained](/blog/fixed-quote-process)`,
    faqs: [
      {
        question: "How much does website design cost in India?",
        answer:
          "A single landing page designed for desktop and mobile starts at ₹10,000 from Codivra and takes about a week. A full website of up to eight unique page templates with a component library and clickable prototype is ₹28,000 over two to three weeks. Full product or dashboard design including usability testing starts at ₹45,000. All tiers hand over a Figma file you own with edit access.",
      },
      {
        question: "Do I get the Figma file?",
        answer:
          "Yes, with full edit access, at every tier. The file is transferred to your account rather than shared from ours, so you keep it whether or not you continue working with us. It contains a component library rather than loose shapes, design tokens named to map directly onto Tailwind, and handoff notes on spacing and interactive behaviour, so a different development team can build from it without needing to ask us questions.",
      },
      {
        question: "Can you design without building the website?",
        answer:
          "Yes, design is offered as a standalone service and a good share of our design work is handed to the client's own developers or another agency. The handoff is built for that case: a component library, named tokens, explicit specs for spacing and behaviour, and every state documented. If we are also building it, the same file becomes our implementation spec, so nothing is duplicated.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "One round on the landing page tier, three rounds on website design, and an agreed number scoped per project on product design. A round means you collect all your feedback and send it once, rather than sending changes one at a time over a fortnight. This is stated up front because open-ended revision cycles are the main reason design projects overrun, and a fixed quote only works when the process has a defined shape.",
      },
      {
        question: "Do you test designs with real users?",
        answer:
          "On the Product tier, yes — we run usability testing with five people drawn from your actual audience and give you a written findings report ranking what people could not do by how many hit it. Five is the point at which extra testers stop surfacing new problems in proportion to cost. On smaller tiers we apply heuristic review and accessibility checks rather than live testing, which catches a narrower but still useful set of problems.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "seo-and-digital-marketing",
    title: "SEO & Digital Marketing",
    shortDesc:
      "Technical SEO, local SEO and content that brings enquiries. From ₹8,000 per month.",
    heroHeadline: "SEO measured in enquiries, not rankings screenshots",
    answerBlock:
      "Codivra Solutions runs technical SEO, local SEO and content programmes from Sitapur, starting at ₹8,000 per month. We report on enquiries and calls rather than ranking screenshots, work on three-month minimum terms, and will tell you when SEO is the wrong spend for your business.",
    iconName: "TrendingUp",
    startingPrice: 8000,
    deliveryWeeks: "Monthly retainer",
    featured: false,
    order: 7,
    metaTitle: "SEO Company in Sitapur, Uttar Pradesh | Local SEO",
    metaDesc:
      "SEO and digital marketing in Sitapur from ₹8,000/month. Technical SEO, Google Business Profile and content, reported in enquiries not rankings.",
    technologies: ["nextjs", "wordpress"],
    industries: [
      "healthcare",
      "education",
      "retail-and-wholesale",
      "real-estate",
      "automobile",
      "hospitality",
      "professional-services",
    ],
    tiers: [
      {
        name: "Local",
        price: "₹8,000",
        priceNote: "per month, 3-month minimum",
        timeline: "Results from month 3",
        includes: [
          "Google Business Profile optimisation and weekly posts",
          "Local citation building across Indian directories",
          "Review generation system with SMS and WhatsApp requests",
          "Technical SEO fixes on your existing site",
          "2 location or service pages written per month",
          "Monthly report: calls, direction requests, enquiries",
        ],
        excludes: [
          "Paid ad spend",
          "Website rebuild if the current site is fundamentally broken",
        ],
      },
      {
        name: "Growth",
        price: "₹22,000",
        priceNote: "per month, 6-month minimum",
        timeline: "Results from month 3–4",
        popular: true,
        includes: [
          "Everything in Local",
          "4 long-form articles per month, researched and written by us",
          "Keyword strategy mapped to buying intent, not just volume",
          "Schema markup and Core Web Vitals work",
          "Competitor gap analysis each quarter",
          "Backlink outreach to genuinely relevant Indian sites",
          "Monthly call to walk through the numbers",
        ],
        excludes: ["Paid ad spend", "Paid link placements — we do not buy links"],
      },
      {
        name: "Ads add-on",
        price: "₹12,000",
        priceNote: "per month + your ad spend",
        timeline: "Live in week 1",
        includes: [
          "Google Ads search campaigns built and managed",
          "Meta ads for awareness where it makes sense",
          "Landing pages built for the campaign",
          "Conversion tracking wired properly, including calls",
          "Weekly optimisation and a monthly spend review",
        ],
        excludes: ["The ad spend itself, paid directly to Google or Meta"],
      },
    ],
    bodyMdx: `## What we report, and what we refuse to report

Most SEO reports in this market are a screenshot of rankings for terms nobody
searches. Ranking first for "best web development company in Sitapur district
area" means nothing if it has four searches a month.

Our monthly report has four numbers:

1. **Enquiries** — forms submitted and WhatsApp messages started
2. **Calls** — click-to-call taps and calls from Google Business Profile
3. **Direction requests** — people navigating to your physical location
4. **Organic sessions**, segmented by whether the intent was commercial

Rankings appear as supporting detail, never as the headline. If enquiries have
not moved by month four, we say that plainly and we change the plan.

## Local SEO is where the money is for a district business

For a clinic in Sitapur, a dealership in Hardoi or a coaching institute in
Lakhimpur, Google Business Profile is worth more than the website. It is what
appears in the map pack, and the map pack takes the majority of local clicks.

The work that actually moves it:

- **Complete the profile properly** — categories, services, hours, attributes,
  photos. Most profiles we audit are less than half filled in.
- **Post weekly.** Profiles that post consistently outperform dormant ones.
- **Generate reviews systematically.** We set up an SMS and WhatsApp flow that
  asks satisfied customers at the right moment, with a direct link. We never
  write fake reviews, and we will not work with a client who wants them.
- **Consistent NAP.** Your name, address and phone must match exactly across
  every directory. Inconsistency here quietly suppresses ranking.
- **Build local pages that are genuinely local** — see how we handle
  [our own location pages](/locations), each written about the actual city
  rather than a template with the noun swapped.

## When we will tell you not to buy SEO

- **You need customers this month.** SEO takes three to six months to move. Run
  Google Ads instead; we will set it up under the ads add-on.
- **Your product has no search demand.** Nobody is searching for a category that
  does not exist yet. That is a content and outreach problem, not an SEO one.
- **Your website is fundamentally broken.** Doing SEO on a site that takes eight
  seconds to load and does not work on mobile is pouring money into a hole. Fix
  the site first; we will quote that separately and honestly.

## Timeline: what actually happens when

| Month | What happens | What you should expect to see |
|---|---|---|
| 1 | Audit, technical fixes, GBP overhaul, tracking set up properly | Little visible change |
| 2 | Content begins, citations built, reviews start coming in | Impressions rising |
| 3 | Pages start ranking for long-tail terms | First attributable enquiries |
| 4–6 | Compounding; competitive terms begin to move | Steady enquiry growth |
| 6+ | Consolidation and expansion into new terms | Predictable pipeline |

Anyone promising first-page results in thirty days is either targeting terms with
no demand or doing something that will earn you a penalty.

## Related reading

- [Local SEO checklist for a UP business](/blog/local-seo-checklist-up)
- [Why a small business in Sitapur needs a website](/blog/small-business-website-sitapur)`,
    faqs: [
      {
        question: "How much does SEO cost per month in India?",
        answer:
          "Local SEO focused on Google Business Profile, citations, reviews and a couple of new pages a month starts at ₹8,000 with Codivra on a three-month minimum. A fuller programme adding four researched articles a month, keyword strategy, schema markup and backlink outreach is ₹22,000 on a six-month minimum. Google Ads management is a ₹12,000 monthly add-on, with the ad spend itself paid directly by you to Google.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "Expect little visible change in month one, rising impressions in month two, the first attributable enquiries around month three, and steady growth from months four to six as content compounds. Competitive commercial terms take longer than long-tail ones. Anyone promising first-page results in thirty days is either targeting phrases nobody searches or using techniques that will eventually earn a penalty, and both cost you more than waiting would have.",
      },
      {
        question: "Do you guarantee first page rankings?",
        answer:
          "No, and neither can anyone else honestly — Google's ranking is not something a vendor controls. What we commit to is the work: technical fixes, Google Business Profile optimisation, content published on schedule, citations and reviews. We report on enquiries, calls and direction requests rather than ranking screenshots, and if those numbers have not moved by month four we say so plainly and change the approach rather than sending a prettier report.",
      },
      {
        question: "What is local SEO and do I need it?",
        answer:
          "Local SEO is the work that gets your business into Google's map pack when someone nearby searches for what you sell. For a clinic, dealership, coaching institute or shop serving one district, it is usually worth more than the website itself, because the map pack takes the majority of local clicks. If your customers are physically near you and search on a phone, you need it. If you sell nationally online, ordinary organic SEO matters more.",
      },
      {
        question: "Will you buy backlinks for my site?",
        answer:
          "No. Paid link placements violate Google's guidelines and the downside — a manual action that removes you from results entirely — is far worse than slow progress. We do outreach to genuinely relevant Indian sites, industry directories, local news and partners, which is slower and produces fewer links but does not put your domain at risk. If a competing agency quotes cheaply on the strength of link volume, that is usually what you are buying.",
      },
      {
        question: "Can you run Google Ads as well?",
        answer:
          "Yes, as a ₹12,000 monthly add-on covering campaign build, landing pages, conversion tracking including call tracking, weekly optimisation and a monthly spend review. The ad budget itself is paid directly by you to Google, in your own account, so you can see exactly what is being spent. Ads are the right answer when you need enquiries this month rather than in month four, and they pair well with SEO rather than replacing it.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "maintenance-and-support",
    title: "Website Maintenance & Support",
    shortDesc:
      "Updates, backups, monitoring and a person who answers. From ₹3,000 per month.",
    heroHeadline: "Someone who answers when the site goes down",
    answerBlock:
      "Codivra Solutions maintains websites and applications from Sitapur, starting at ₹3,000 per month. Plans cover security updates, daily backups, uptime monitoring and a set allowance of content changes, with a four-working-hour response promise during office hours.",
    iconName: "Wrench",
    startingPrice: 3000,
    deliveryWeeks: "Monthly retainer",
    featured: false,
    order: 8,
    metaTitle: "Website Maintenance & Support Services in Sitapur",
    metaDesc:
      "Website maintenance in Sitapur from ₹3,000/month. Security updates, daily backups, uptime monitoring and content changes with a 4-hour response.",
    technologies: ["nextjs", "wordpress", "nodejs", "postgresql", "vercel", "docker"],
    industries: [
      "education",
      "healthcare",
      "retail-and-wholesale",
      "real-estate",
      "hospitality",
      "professional-services",
    ],
    tiers: [
      {
        name: "Essential",
        price: "₹3,000",
        priceNote: "per month",
        timeline: "Rolling monthly",
        includes: [
          "Security and dependency updates",
          "Daily automated backups, retained 30 days, restore tested quarterly",
          "Uptime monitoring with alerts to us, not just to you",
          "SSL certificate renewal",
          "Up to 2 hours of content changes per month",
          "Response within 4 working hours",
        ],
        excludes: ["New features", "Design changes", "Hosting costs"],
      },
      {
        name: "Business",
        price: "₹9,000",
        priceNote: "per month",
        timeline: "Rolling monthly",
        popular: true,
        includes: [
          "Everything in Essential",
          "Up to 8 hours of changes per month, including small features",
          "Monthly performance report with Core Web Vitals",
          "Quarterly security review and dependency audit",
          "Staging environment for testing changes before they go live",
          "Priority response within 2 working hours",
        ],
        excludes: ["Major redesigns", "New applications", "Hosting costs"],
      },
      {
        name: "Critical",
        price: "From ₹25,000",
        priceNote: "per month",
        timeline: "Rolling, 3-month minimum",
        includes: [
          "Everything in Business",
          "Emergency response outside office hours",
          "Database performance tuning and query optimisation",
          "Documented incident response with post-incident review",
          "Named engineer who knows your system",
          "Up to 20 hours of changes per month",
        ],
        excludes: ["Ground-up rebuilds", "Hosting at actuals"],
      },
    ],
    bodyMdx: `## What maintenance actually prevents

Websites do not fail dramatically. They rot:

- **Dependencies go stale** and a known vulnerability sits unpatched for a year.
  This is how most small-business sites get compromised — not a targeted attack,
  an automated scanner finding an old plugin.
- **SSL certificates expire** and every visitor gets a browser warning. We have
  audited businesses who lost a fortnight of enquiries to this without noticing.
- **Backups are configured once and never tested.** An untested backup is not a
  backup. We restore one every quarter to confirm it actually works.
- **Nobody notices the site is down.** Uptime alerts go to us, not only to you,
  because the point is that someone acts without you having to find out first.

## What "2 hours of content changes" means

Concretely, in a typical month that covers things like:

- Adding or editing a handful of pages or blog posts
- Swapping images, updating prices, changing opening hours
- Adding a new team member or product to a listing
- Fixing a broken link or a form that stopped delivering

Unused hours do not roll over — this is a retainer for availability, not a
prepaid block. If you consistently need more, we will tell you to move up a tier
rather than quietly billing overages.

## We maintain sites we did not build

About half the sites we maintain were built by someone else, often by a developer
who has since become unreachable. That is a normal situation and we are set up
for it.

We start with a free audit covering security posture, backup status,
performance, dependency age and whether the hosting is sane. You get the findings
in writing whether or not you sign up. Occasionally the honest conclusion is that
the site should be rebuilt rather than maintained — a WordPress install several
major versions behind with a decade of abandoned plugins costs more to keep alive
than to replace — and we will say so even though the rebuild is a bigger and less
predictable job for us.

## Response times, defined

"We reply within 4 working hours" means office hours: Monday to Saturday, 10:00
to 19:00 IST. A message at 18:00 on Saturday gets a reply by 12:00 Monday, not
overnight, unless you are on the Critical plan which includes out-of-hours
emergency response.

Reply means an actual human acknowledging and telling you what happens next, not
an automated ticket number.

## Related reading

- [The real cost of a cheap website](/blog/real-cost-of-a-cheap-website)`,
    faqs: [
      {
        question: "What does website maintenance include?",
        answer:
          "Security and dependency updates, daily automated backups retained for thirty days with restores tested quarterly, uptime monitoring with alerts going to us rather than only to you, SSL certificate renewal, and an allowance of content changes — two hours a month on the ₹3,000 Essential plan, eight hours on the ₹9,000 Business plan. Response is within four working hours on Essential and two on Business.",
      },
      {
        question: "Do I really need a maintenance plan?",
        answer:
          "If your site is a simple static brochure that rarely changes, possibly not — though you still want backups and SSL renewal handled. If it takes enquiries, processes payments, holds customer data or runs on WordPress, then yes. Most small-business compromises are not targeted attacks but automated scanners finding an unpatched dependency, and an expired SSL certificate can quietly cost you weeks of enquiries before anyone notices.",
      },
      {
        question: "Will you maintain a website you did not build?",
        answer:
          "Yes — roughly half the sites we maintain were built by someone else, often a developer who has since become unreachable. We start with a free audit covering security, backups, performance, dependency age and hosting setup, and you get the findings in writing whether or not you sign up. Occasionally the honest answer is that a rebuild costs less than keeping the current site alive, and we will tell you that.",
      },
      {
        question: "What does a four-hour response time actually mean?",
        answer:
          "It means office hours: Monday to Saturday, 10:00 to 19:00 IST. A message sent at 18:00 on Saturday gets a reply by 12:00 on Monday, not overnight. A reply means a person acknowledging the issue and telling you what happens next, not an automated ticket number. Out-of-hours emergency response is available on the Critical plan, which is intended for systems where downtime has a direct financial cost.",
      },
      {
        question: "Do unused change hours roll over to the next month?",
        answer:
          "No. The retainer buys availability and a guaranteed response, not a prepaid block of hours, so unused time does not accumulate. If you find yourself consistently needing more than your allowance we will tell you to move up a tier rather than quietly billing overages, and if you consistently use far less we will say that too — paying ₹9,000 for something a ₹3,000 plan covers is not a relationship we want.",
      },
    ],
  },
];
