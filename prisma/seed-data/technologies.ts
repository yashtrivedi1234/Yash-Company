import type { SeedTechnology } from "./types";

/**
 * The 24 technology pages — the "hire a Next.js developer in India" capture
 * surface.
 *
 * Each page follows the same five-part shape (what it is / when it is right /
 * when it is not / what we built with it / cost implication) because that is
 * the shape of the question people actually arrive with. The *content* of each
 * section is specific to the technology; only the skeleton repeats.
 *
 * CONTENT DEBT: bodies here run ~300–400 words against the 600–900 word target
 * in the brief. `scripts/check-content.ts` reports every page under target.
 */

type TechInput = Omit<SeedTechnology, "logoUrl" | "order"> & {
  logoUrl?: string;
};

const t = (input: TechInput, order: number): SeedTechnology => ({
  ...input,
  logoUrl: input.logoUrl ?? `/tech/${input.slug}.svg`,
  order,
});

export const technologies: SeedTechnology[] = [
  t(
    {
      slug: "nextjs",
      name: "Next.js",
      category: "FRONTEND",
      summary:
        "The React framework we default to for anything that has to rank on Google.",
      metaTitle: "Next.js Development Company in Sitapur, India",
      metaDesc:
        "Hire Next.js developers in Sitapur, Uttar Pradesh. We build fast, server-rendered React sites and apps with Next.js from ₹15,000.",
      services: ["web-development", "ecommerce-development", "custom-software-development"],
      bodyMdx: `## What Next.js is

Next.js is a framework built on top of [React](/technologies/react) that adds
server rendering, file-based routing, image optimisation and a build system. It
is maintained by Vercel and is the default choice for new React projects in
2026.

## When it is the right choice

Pick Next.js when **search traffic matters**. Plain React ships an empty HTML
shell and fills it with JavaScript; Next.js sends fully rendered HTML on the
first request, which means Google indexes your content without waiting on a
render budget. For a business site competing on local search, that difference is
decisive.

It is also right when you want one codebase to hold both the marketing site and
the logged-in application, and when Core Web Vitals are a priority — the built-in
image, font and script handling gets you most of the way to a green score without
hand-tuning.

## When it is not

- **A simple five-page brochure that will never change.** Plain HTML is cheaper
  to build and free to host.
- **Your team only knows PHP and will maintain it.** Handing over a Next.js app
  to a team that cannot maintain it is a disservice; [Laravel](/technologies/laravel)
  or [WordPress](/technologies/wordpress) is the better answer.
- **You need a blog your non-technical staff update ten times a day** and have no
  appetite for an admin panel build. WordPress wins on day-one editor comfort.

## What we have built with it

This website runs on Next.js 16 with the App Router, server components by
default, and content served from PostgreSQL through Prisma. Every page you are
reading is statically generated and revalidated on a schedule, which is why it
loads in well under a second on a 4G connection.

## Cost implication

Next.js work sits at our standard [web development](/services/web-development)
rates from ₹15,000. Hosting is genuinely free for most business sites on Vercel's
free tier, and around ₹1,700 per month on Pro once traffic justifies it.`,
      faqs: [
        {
          question: "Is Next.js better than React for a business website?",
          answer:
            "For a business website that needs to rank, yes. Plain React sends an empty HTML shell that Google must execute JavaScript to read, while Next.js sends fully rendered HTML on the first request. Next.js also handles image optimisation, fonts and routing that you would otherwise build yourself. Plain React remains the better fit for logged-in dashboards where SEO is irrelevant and the app never needs to be crawled.",
        },
        {
          question: "How much does a Next.js website cost in India?",
          answer:
            "A five-page Next.js business site starts at ₹15,000 with Codivra and takes two to three weeks. A larger site with a blog and custom admin panel is around ₹45,000. Full web applications with authentication and integrations start at ₹90,000. Hosting is free on Vercel's tier for typical business traffic, so annual running cost is often just the domain at roughly ₹1,000.",
        },
        {
          question: "Is Next.js good for SEO?",
          answer:
            "It is currently the strongest mainstream option. Server rendering means crawlers receive complete HTML immediately rather than waiting on JavaScript execution. The framework also provides first-class control over metadata, canonical URLs, sitemaps and structured data, plus image and font handling that keeps Core Web Vitals green. None of that guarantees rankings, but it removes the technical obstacles that hold most JavaScript sites back.",
        },
        {
          question: "Can you migrate my WordPress site to Next.js?",
          answer:
            "Yes, and it is a common request once a WordPress site has become slow or hard to maintain. We map every existing URL to its new equivalent and set up 301 redirects so accumulated search rankings carry over rather than being lost. Content is migrated into the new database. The main thing to weigh is that your team gives up the familiar WordPress editor unless we also build an admin panel, which we usually do.",
        },
      ],
    },
    1,
  ),

  t(
    {
      slug: "react",
      name: "React",
      category: "FRONTEND",
      summary:
        "The interface library underneath most modern web applications, including ours.",
      metaTitle: "React Development Company in Sitapur, India",
      metaDesc:
        "Hire React developers in Sitapur, Uttar Pradesh. We build dashboards, web apps and interactive interfaces with React from ₹15,000.",
      services: ["web-development", "custom-software-development", "ui-ux-design"],
      bodyMdx: `## What React is

React is a JavaScript library for building user interfaces out of reusable
components. It is maintained by Meta and is the most widely used front-end
technology in the world, which matters mainly because it means you can hire for
it.

## When it is the right choice

React is the right answer for **interfaces with a lot of state**: dashboards,
admin panels, booking flows, anything where the screen changes constantly in
response to what the user does. The component model keeps that complexity
manageable as the application grows.

It is also the pragmatic choice when you plan to build a mobile app later, since
[React Native](/technologies/react-native) shares the same mental model and
often a good deal of the actual logic.

## When it is not

- **Content sites that need to rank.** Use [Next.js](/technologies/nextjs)
  instead — it is React with server rendering added.
- **A brochure site.** Shipping a JavaScript framework to render five static
  pages is cost you pay on every visit for no benefit.

## What we have built with it

Every admin panel we ship is React — including the one behind this site, which
handles content editing, media uploads with enforced alt text, and the lead
inbox. Our [CRM and management products](/products) are React front-ends over a
Node API.

## Cost implication

React work is quoted under [custom software development](/services/custom-software-development)
from ₹50,000 for a single module, or [web development](/services/web-development)
from ₹15,000 when it is part of a website. Hiring React developers later is
easier and cheaper in India than for almost any alternative, which is a real
consideration if you intend to bring maintenance in-house.`,
      faqs: [
        {
          question: "Should I use React or plain HTML for my website?",
          answer:
            "Plain HTML if the site is a handful of pages that rarely change — it is cheaper to build, faster to load and free to host. React earns its cost when the interface has meaningful state: dashboards, booking flows, filtered catalogues, anything that changes in response to user actions. For a content site that needs search traffic, the answer is neither: use Next.js, which is React with server rendering.",
        },
        {
          question: "Is React still worth learning and using in 2026?",
          answer:
            "Yes. React remains the most widely used interface library, which matters commercially more than technical merit — it means you can hire people who know it, and any developer you bring on later can pick up the codebase. Its ecosystem is the largest of any front-end technology, and the framework built on it, Next.js, is the default for new web projects. Betting a business system on it is low risk.",
        },
        {
          question: "Can React work with my existing PHP backend?",
          answer:
            "Yes. React runs entirely in the browser and talks to whatever backend exposes an API, so a Laravel or plain PHP application can serve JSON to a React front-end without being rewritten. This is a common way to modernise an interface incrementally rather than replacing everything at once. We would confirm your existing endpoints during discovery and quote the API work separately if they need reshaping.",
        },
      ],
    },
    2,
  ),

  t(
    {
      slug: "nodejs",
      name: "Node.js",
      category: "BACKEND",
      summary:
        "JavaScript on the server — one language across the whole stack for small teams.",
      metaTitle: "Node.js Development Company in Sitapur, India",
      metaDesc:
        "Hire Node.js developers in Sitapur, Uttar Pradesh. APIs, backends and real-time systems built with Node.js from ₹50,000.",
      services: ["custom-software-development", "web-development", "mobile-app-development"],
      bodyMdx: `## What Node.js is

Node.js runs JavaScript outside the browser, on a server. It is what lets a team
write both the interface and the backend in one language, which is a bigger
practical advantage than it sounds for teams of the size most of our clients
have.

## When it is the right choice

Node is strong for **APIs and I/O-heavy work** — reading and writing databases,
calling other services, handling many simultaneous connections. That describes
almost every business application.

It is the obvious choice when your front-end is already
[React](/technologies/react) or [Next.js](/technologies/nextjs): shared types,
shared validation logic, and one set of tooling. On a project with two or three
developers, not context-switching between languages is worth real time.

Real-time features — live dashboards, chat, notifications — are also
straightforward on Node.

## When it is not

- **Heavy numerical work or machine learning.** Use [Python](/technologies/python);
  the libraries are not close.
- **CPU-bound processing** like video transcoding or large report generation.
  Node's single-threaded model is the wrong shape for it.

## What we have built with it

Our [billing and POS](/products/billing-and-pos) and
[HR management](/products/hr-management-system) products run Node APIs over
[PostgreSQL](/technologies/postgresql). Mobile app backends are Node by default
so the API and the admin dashboard share validation code.

## Cost implication

Node backends are included in the price of the application they serve rather
than quoted separately. Hosting is inexpensive — most business APIs run
comfortably on free or near-free tiers until real traffic arrives.`,
      faqs: [
        {
          question: "Is Node.js good for a business application backend?",
          answer:
            "For most business applications, yes. Node is strong at the I/O-heavy work that dominates typical systems: database reads and writes, calling third-party services, and handling many concurrent requests. Its main practical advantage for small teams is that the backend and front-end share one language, so validation logic and type definitions can be written once. It is a poor fit for CPU-heavy work such as video processing or machine learning.",
        },
        {
          question: "Node.js or Python for my backend?",
          answer:
            "Node if your front-end is React or Next.js and the work is mostly reading and writing data — sharing one language across the stack saves real time on a small team. Python if the application involves data analysis, machine learning, or scientific computation, where the library ecosystem is far ahead. Both are fast enough for typical business loads; the deciding factor is usually what the rest of your system is already written in.",
        },
      ],
    },
    3,
  ),

  t(
    {
      slug: "express",
      name: "Express",
      category: "BACKEND",
      summary:
        "The minimal, boring web framework for Node that we reach for on small APIs.",
      metaTitle: "Express.js Development Company in Sitapur, India",
      metaDesc:
        "Hire Express.js developers in Sitapur, Uttar Pradesh. Lightweight Node APIs and backends built with Express from ₹50,000.",
      services: ["custom-software-development", "mobile-app-development"],
      bodyMdx: `## What Express is

Express is the most widely used web framework for [Node.js](/technologies/nodejs).
It is deliberately minimal: routing, middleware, request and response handling,
and nothing else. Everything beyond that is a choice you make.

## When it is the right choice

Express suits **small, well-defined APIs** — a mobile app backend, a webhook
receiver, an internal service. Its minimalism means there is very little to
learn and almost nothing hidden, which makes it easy to hand over to another
developer later.

It is also the safest choice when you expect the project to be maintained by
someone we have never met. Express has been the default for over a decade; any
Node developer in India can read an Express codebase on day one.

## When it is not

- **Large applications with many teams.** The lack of imposed structure becomes
  a liability once several people are adding routes. NestJS imposes more.
- **When you already use [Next.js](/technologies/nextjs).** Its route handlers
  cover most API needs without a second server to deploy and monitor.

## What we have built with it

Mobile app backends, mostly — the API behind
[React Native](/technologies/react-native) and [Flutter](/technologies/flutter)
builds, where the surface is a couple of dozen endpoints and the priority is
that it be obvious rather than clever.

## Cost implication

Express carries no licence cost and hosts cheaply. Because it does so little by
default, more of the build is code we write, which makes it marginally more
expensive than a batteries-included framework on a large project and cheaper on
a small one.`,
      faqs: [
        {
          question: "Is Express still relevant in 2026?",
          answer:
            "Yes, for small and medium APIs. Newer frameworks are faster in benchmarks and impose more structure, but Express remains the most widely known Node framework by a wide margin, which matters when you need to hand a codebase to another developer. For a mobile app backend or an internal service of a few dozen endpoints, its simplicity is an asset rather than a limitation.",
        },
        {
          question: "Do I need Express if I am already using Next.js?",
          answer:
            "Usually not. Next.js route handlers cover most API needs within the same application, which means one deployment, one set of environment variables and one thing to monitor rather than two. A separate Express server earns its place when the API must be consumed by something outside the website — a mobile app, a partner integration — or when it needs to scale independently of the front-end.",
        },
      ],
    },
    4,
  ),

  t(
    {
      slug: "mongodb",
      name: "MongoDB",
      category: "DATABASE",
      summary:
        "A document database — useful when the shape of your data genuinely varies.",
      metaTitle: "MongoDB Development Company in Sitapur, India",
      metaDesc:
        "Hire MongoDB developers in Sitapur, Uttar Pradesh. Document database design and MERN stack applications from ₹50,000.",
      services: ["custom-software-development", "web-development", "mobile-app-development"],
      bodyMdx: `## What MongoDB is

MongoDB stores data as flexible JSON-like documents rather than as rows in fixed
tables. Different records in the same collection can have different fields, and
you can change that shape without a migration.

## When it is the right choice

Use MongoDB when **the shape of the data genuinely varies** — a product catalogue
where a mobile phone and a sofa share almost no attributes, event or log data,
or content where each type has different fields.

It is also reasonable when you are early and the model is still moving weekly.
Not having to write a migration for every change is a real speed advantage while
you are still figuring out what you are building.

## When it is not

This is worth being blunt about, because MongoDB is over-prescribed in the Indian
market as part of the MERN acronym.

If your data has **clear relationships** — customers have orders, orders have
line items, students have fees and attendance — you want
[PostgreSQL](/technologies/postgresql). Relational databases enforce those
relationships and stop your application writing an order with no customer.
MongoDB will happily let that happen and you find out months later during an
audit.

Choose MongoDB because your data is genuinely document-shaped, not because MERN
is a familiar acronym.

## What we have built with it

Catalogue-heavy applications and content systems where records legitimately
differ from one another. For anything with money, attendance or inventory in it,
we use PostgreSQL.

## Cost implication

MongoDB Atlas has a free tier adequate for small applications and starts around
₹800 per month beyond it. The bigger cost is the wrong choice: migrating a
relational workload off MongoDB later is expensive.`,
      faqs: [
        {
          question: "MongoDB or PostgreSQL — which should I use?",
          answer:
            "PostgreSQL for most business applications. If your data has clear relationships — customers have orders, students have fees, invoices have line items — a relational database enforces those connections and prevents invalid records. MongoDB is the better fit when records genuinely differ in shape, such as a catalogue spanning unrelated product types, or for event and log data. Choose it because your data is document-shaped, not because MERN is a familiar acronym.",
        },
        {
          question: "Is MongoDB free to use?",
          answer:
            "MongoDB is open source and free to self-host. MongoDB Atlas, the managed cloud service most projects use, has a free tier sufficient for small applications and starts at roughly ₹800 per month beyond it. Costs scale with storage and traffic. The larger financial consideration is usually not the hosting fee but the cost of migrating away later if the data turns out to be relational after all.",
        },
      ],
    },
    5,
  ),

  t(
    {
      slug: "postgresql",
      name: "PostgreSQL",
      category: "DATABASE",
      summary:
        "Our default database. Boring, correct, and it will not lose your data.",
      metaTitle: "PostgreSQL Development Company in Sitapur, India",
      metaDesc:
        "Hire PostgreSQL developers in Sitapur, Uttar Pradesh. Relational database design for business software from ₹50,000.",
      services: ["custom-software-development", "web-development", "ecommerce-development"],
      bodyMdx: `## What PostgreSQL is

PostgreSQL is an open-source relational database. It stores data in tables with
defined columns and enforced relationships between them, and it has a thirty-year
record of not losing data.

## When it is the right choice

Almost always, for business software. If your system involves **money,
inventory, attendance, invoices or anything auditable**, you want the guarantees
a relational database provides:

- **Transactions.** A payment that debits one account and credits another either
  fully happens or fully does not. There is no state where it half-happened.
- **Foreign keys.** You cannot create an order for a customer who does not exist.
  The database refuses.
- **Constraints.** A fee cannot be negative. A GSTIN column can be required to
  look like a GSTIN.

These sound abstract until you have audited a system without them and found
orphaned records nobody can explain.

## When it is not

- **Genuinely schema-less data** where every record differs —
  [MongoDB](/technologies/mongodb) fits better.
- **Simple caching or session storage**, where Redis is the right tool and a
  relational database is overkill.

## What we have built with it

Every product we ship. [School management](/products/school-management-system),
[clinic management](/products/clinic-management-system),
[billing and POS](/products/billing-and-pos) and
[HR management](/products/hr-management-system) all run on PostgreSQL, as does
this website.

## Cost implication

Free and open source. Neon and Supabase both offer free tiers that comfortably
hold a small business application, with paid plans from roughly ₹1,700 per month.
For most of our clients the database line on the hosting bill is zero for the
first year or more.`,
      faqs: [
        {
          question: "Why do you use PostgreSQL for most projects?",
          answer:
            "Because most business data is relational and the guarantees matter. Transactions ensure a payment either fully completes or fully does not; foreign keys prevent an order existing for a customer who does not; constraints stop a negative fee being saved at all. Systems handling money, inventory or attendance need those properties, and retrofitting them after data has already gone bad is far more expensive than starting with them.",
        },
        {
          question: "Is PostgreSQL free?",
          answer:
            "Yes, PostgreSQL itself is open source and free with no licence fees. What you pay for is hosting. Neon and Supabase both provide free tiers that comfortably hold a small business application — around half a gigabyte of data — with paid plans starting near ₹1,700 per month. For most of our clients the database costs nothing at all for the first year or more of operation.",
        },
      ],
    },
    6,
  ),

  t(
    {
      slug: "mern-stack",
      name: "MERN Stack",
      category: "BACKEND",
      summary:
        "MongoDB, Express, React and Node — popular, and often not the right default.",
      metaTitle: "MERN Stack Development Company in Sitapur, India",
      metaDesc:
        "Hire MERN stack developers in Sitapur, Uttar Pradesh. MongoDB, Express, React and Node applications from ₹50,000.",
      services: ["custom-software-development", "web-development"],
      bodyMdx: `## What MERN is

MERN is an acronym for four technologies used together:
[MongoDB](/technologies/mongodb), [Express](/technologies/express),
[React](/technologies/react) and [Node.js](/technologies/nodejs). Its appeal is
that all four are JavaScript, so one developer can work across the whole stack.

## When it is the right choice

MERN is a sound choice when your data really is document-shaped and your team is
JavaScript-only. The single-language advantage is real for small teams.

It is also, honestly, the right choice when **you already have MERN developers**
or intend to hire them cheaply. In Uttar Pradesh the supply of MERN-trained
graduates is large, and a stack your future maintainer knows beats a technically
superior stack they do not.

## When it is not

Here is the part usually left out.

The "M" is the weak link for most business software. Systems handling fees,
invoices, inventory or attendance have relational data, and
[PostgreSQL](/technologies/postgresql) is the correct tool. We build a great deal
of what people call MERN, but with Postgres in place of Mongo — sometimes called
PERN — and with [Next.js](/technologies/nextjs) instead of bare React so the
thing can actually rank.

Choose your database because of your data, not because of an acronym.

## What we have built with it

Client applications where the team specifically required MERN for in-house
maintenance, and catalogue systems where documents genuinely fit. Where we have
a free hand, we use Next.js, Node and PostgreSQL.

## Cost implication

MERN projects are quoted at our standard
[custom software rates](/services/custom-software-development) from ₹50,000. The
large local talent pool does make ongoing maintenance cheaper to hire for, which
is a legitimate reason to choose it.`,
      faqs: [
        {
          question: "Is the MERN stack a good choice in 2026?",
          answer:
            "It is a defensible choice, with one caveat. React, Node and Express are all solid. The weak link for most business software is MongoDB: if your data involves invoices, fees, inventory or attendance, it is relational and PostgreSQL is the right tool. We build a great deal of what clients call MERN but substitute Postgres for Mongo and Next.js for bare React, which keeps the advantages while fixing the mismatch.",
        },
        {
          question: "Why do so many developers in India recommend MERN?",
          answer:
            "Largely because it is what training institutes teach, which creates a large supply of MERN-trained graduates and therefore a large supply of people recommending it. That is not entirely a bad reason — a stack your future maintainer already knows genuinely beats a superior stack they do not. But it means the recommendation often reflects familiarity rather than a judgement about your specific data, so it is worth asking why.",
        },
      ],
    },
    7,
  ),

  t(
    {
      slug: "python",
      name: "Python",
      category: "BACKEND",
      summary:
        "Our language for anything involving data, automation or machine learning.",
      metaTitle: "Python Development Company in Sitapur, India",
      metaDesc:
        "Hire Python developers in Sitapur, Uttar Pradesh. Backends, automation, data processing and ML with Python from ₹50,000.",
      services: ["ai-ml-solutions", "custom-software-development"],
      bodyMdx: `## What Python is

Python is a general-purpose language whose defining feature, commercially, is its
library ecosystem. For anything touching data analysis, machine learning,
scientific computing or automation, the tools you need already exist and are
mature.

## When it is the right choice

- **Anything involving [AI or machine learning](/services/ai-ml-solutions).**
  There is no serious alternative; every model, every framework, every research
  implementation lands in Python first.
- **Data processing and reporting.** Reading messy Excel files, reconciling
  datasets, generating analytical reports — pandas makes short work of jobs that
  are tedious elsewhere.
- **Automation scripts.** Scraping, scheduled jobs, file processing.
- **Backends via [Django](/technologies/django) or Flask**, especially when the
  application also does analysis.

## When it is not

- **Interface-heavy web applications** where the front-end is React. Running
  JavaScript on the front and Python on the back means two languages, two sets of
  validation and two skill requirements for a small team.
- **Real-time systems** with many concurrent connections —
  [Node.js](/technologies/nodejs) handles that shape better.

## What we have built with it

Every AI feature we ship: document extraction pipelines, retrieval systems built
with [LangChain](/technologies/langchain-rag), and forecasting models. Also the
unglamorous data-migration scripts that move a client's decade of Excel history
into a new system.

## Cost implication

Python work is quoted under
[AI & ML solutions](/services/ai-ml-solutions) from ₹60,000 or
[custom software](/services/custom-software-development) from ₹50,000. Hosting is
comparable to Node. Where Python costs more is compute for model training, which
we quote at actuals rather than bundling.`,
      faqs: [
        {
          question: "Why is Python used for AI and machine learning?",
          answer:
            "Because the entire ecosystem lands there first. Every major framework, every published model and most research implementations are released in Python before anything else, and the supporting libraries for data handling are decades mature. Using another language for machine learning means reimplementing tools that already exist and are well tested. For AI work the choice is effectively made for you.",
        },
        {
          question: "Should my web backend be Python or Node.js?",
          answer:
            "Node if your front-end is React or Next.js and the work is mostly moving data between a database and a browser — one language across the stack saves genuine time for a small team. Python if the application also does analysis, reporting over large datasets, or machine learning, because the library advantage outweighs the cost of running two languages. Both perform well enough for typical business loads.",
        },
      ],
    },
    8,
  ),

  t(
    {
      slug: "django",
      name: "Django",
      category: "BACKEND",
      summary:
        "Batteries-included Python framework with an admin panel you get for free.",
      metaTitle: "Django Development Company in Sitapur, India",
      metaDesc:
        "Hire Django developers in Sitapur, Uttar Pradesh. Python web applications with built-in admin and auth from ₹50,000.",
      services: ["custom-software-development", "ai-ml-solutions"],
      bodyMdx: `## What Django is

Django is a Python web framework that ships with the parts most business
applications need already built: an ORM, user authentication, permissions, form
handling and — its standout feature — an automatically generated admin interface.

## When it is the right choice

Django's admin is the reason to pick it. For an internal business system where
staff need to view and edit records, you get a functional, permission-aware admin
panel from your data model alone, with no front-end work at all. On an internal
tool that can remove weeks from the timeline.

It is also right when the application does **both web serving and data work** —
a reporting system, an inventory tool with forecasting, anything where
[Python](/technologies/python) libraries are needed anyway.

Django's security defaults are strong out of the box, which matters when the
system holds personal data.

## When it is not

- **Public-facing sites where design is the point.** Django templates are fine,
  but a modern marketing site is better served by
  [Next.js](/technologies/nextjs).
- **Highly interactive interfaces.** You end up bolting React on anyway, at which
  point a JavaScript backend keeps things simpler.

## What we have built with it

Internal tools and data-heavy back-offices where the built-in admin covered the
staff-facing side entirely and we only built the public interface.

## Cost implication

Django often comes in **cheaper for internal tools** because the admin is free.
A staff-facing system that would cost ₹1,50,000 with a custom-built admin can
land closer to ₹80,000 in Django. We will point this out when it applies rather
than quoting the larger number.`,
      faqs: [
        {
          question: "What is Django's admin panel and why does it matter?",
          answer:
            "Django generates a working, permission-aware admin interface directly from your data model, with no front-end code written. For an internal business system where staff need to view, search and edit records, that removes what would otherwise be weeks of interface work. It is why a staff-facing tool can cost meaningfully less in Django than in a stack where every admin screen is built by hand.",
        },
        {
          question: "Django or Laravel for a business application?",
          answer:
            "Django if the application also needs data analysis or machine learning, since Python's libraries are unmatched there, or if the free admin panel covers most of your staff-facing needs. Laravel if your team already writes PHP and will maintain the system, since handing a codebase to people who cannot maintain it is worse than any technical trade-off. Both are mature, secure and well documented.",
        },
      ],
    },
    9,
  ),

  t(
    {
      slug: "flask",
      name: "Flask",
      category: "BACKEND",
      summary:
        "Minimal Python framework we use to put an API in front of a model.",
      metaTitle: "Flask Development Company in Sitapur, India",
      metaDesc:
        "Hire Flask developers in Sitapur, Uttar Pradesh. Lightweight Python APIs and ML model serving from ₹50,000.",
      services: ["ai-ml-solutions", "custom-software-development"],
      bodyMdx: `## What Flask is

Flask is a minimal Python web framework. Where [Django](/technologies/django)
gives you everything, Flask gives you routing and request handling and leaves the
rest to you.

## When it is the right choice

Flask's main job in our work is **putting an HTTP API in front of a Python
model**. When an [AI feature](/services/ai-ml-solutions) needs to be callable
from a [Next.js](/technologies/nextjs) application, Flask is a thin, obvious
layer that does exactly that and nothing more.

It also suits small internal services — a scheduled job with a status endpoint, a
webhook receiver, a single-purpose data tool.

## When it is not

- **Full business applications.** You will spend the project rebuilding what
  Django already includes. Use Django.
- **Anything needing an admin interface**, for the same reason.

## What we have built with it

Model-serving endpoints for document extraction and forecasting, sitting behind
the main application and called over an internal API.

## Cost implication

Flask components are usually a small line inside a larger
[AI & ML project](/services/ai-ml-solutions) rather than a standalone quote. The
cost that matters in these builds is inference compute, not the framework.`,
      faqs: [
        {
          question: "Flask or Django — which should I choose?",
          answer:
            "Django for a complete business application, because its built-in ORM, authentication and admin panel are things you would otherwise build yourself. Flask when you need a small, focused service — most commonly an API wrapper around a machine learning model, or a webhook receiver. Choosing Flask for a full application usually means slowly rebuilding Django by hand, which costs more and produces something less well tested.",
        },
      ],
    },
    10,
  ),

  t(
    {
      slug: "php",
      name: "PHP",
      category: "BACKEND",
      summary:
        "Still runs a large share of the web, and still the right answer sometimes.",
      metaTitle: "PHP Development Company in Sitapur, India",
      metaDesc:
        "Hire PHP developers in Sitapur, Uttar Pradesh. PHP web applications, maintenance and legacy system support from ₹15,000.",
      services: ["web-development", "custom-software-development", "maintenance-and-support"],
      bodyMdx: `## What PHP is

PHP is a server-side language built for the web. Modern PHP 8 is a genuinely good
language — typed, fast, and nothing like the PHP its reputation was formed on
fifteen years ago.

## When it is the right choice

- **Your existing system is PHP.** Rewriting a working application into a
  fashionable stack is usually a waste of money. We maintain and extend PHP
  systems under [maintenance and support](/services/maintenance-and-support).
- **Your in-house team writes PHP.** The stack your staff can maintain beats the
  stack that scores better on a benchmark.
- **Shared hosting is a constraint.** PHP runs on the cheap cPanel hosting many
  small businesses already pay for; Node and Python generally do not.
- **[WordPress](/technologies/wordpress) customisation**, which is PHP by
  definition.

## When it is not

- **Real-time features** — websockets, live dashboards. Possible, but awkward.
- **Machine learning.** Use [Python](/technologies/python).
- **A greenfield project with no PHP constraint**, where we would generally reach
  for [Next.js](/technologies/nextjs) and Node.

## What we have built with it

Maintenance and extension of client systems inherited from previous developers,
and WordPress customisation where a client's editorial workflow justified staying
on it.

## Cost implication

PHP is often the **cheapest option to run**, because it works on shared hosting
at ₹200–₹500 per month that many businesses already have. If your budget is tight
and you already pay for cPanel hosting, that is a legitimate reason to stay on
PHP and we will say so.`,
      faqs: [
        {
          question: "Is PHP outdated in 2026?",
          answer:
            "No. Modern PHP 8 is typed, fast and well tooled, and bears little resemblance to the language its reputation was formed on. It still runs a very large share of the web, including WordPress. The realistic reasons to choose it today are practical rather than technical: your existing system is PHP, your team maintains PHP, or you are on cheap shared hosting where Node and Python cannot run.",
        },
        {
          question: "Should I rewrite my PHP website in Next.js?",
          answer:
            "Only if the current system is causing measurable problems — it is slow, insecure, or cannot do something the business needs. Rewriting a working application because the stack is unfashionable is usually a poor use of budget, and a rewrite carries real risk of losing behaviour nobody documented. We will audit the existing system and tell you honestly whether it is worth repairing rather than replacing.",
        },
      ],
    },
    11,
  ),

  t(
    {
      slug: "laravel",
      name: "Laravel",
      category: "BACKEND",
      summary:
        "The PHP framework worth using, with strong tooling and a big Indian talent pool.",
      metaTitle: "Laravel Development Company in Sitapur, India",
      metaDesc:
        "Hire Laravel developers in Sitapur, Uttar Pradesh. PHP web applications and business systems with Laravel from ₹50,000.",
      services: ["custom-software-development", "web-development", "ecommerce-development"],
      bodyMdx: `## What Laravel is

Laravel is the dominant PHP framework. It provides an ORM, authentication,
queues, scheduled jobs, migrations and a template engine — the same
batteries-included philosophy as [Django](/technologies/django), applied to PHP.

## When it is the right choice

- **Your team writes PHP and will maintain the system.** This is the deciding
  factor most of the time, and it is a good reason.
- **You want a large hiring pool in India.** Laravel developers are abundant and
  affordable in Uttar Pradesh, which materially affects what maintenance costs
  you three years from now.
- **Standard business applications** — CRM, inventory, billing. Laravel has a
  mature package for nearly everything, so less gets written from scratch.
- **Shared or VPS hosting constraints**, where Node deployment is awkward.

## When it is not

- **Heavily interactive interfaces.** You will add React anyway; consider whether
  a JavaScript backend then makes more sense.
- **AI or data-heavy work** — [Python](/technologies/python) instead.

## What we have built with it

Business systems for clients with existing PHP teams, where the handover
requirement made Laravel clearly correct despite our own default being different.

## Cost implication

Laravel projects are quoted at standard
[custom software rates](/services/custom-software-development) from ₹50,000.
Hosting is cheap and the long-term hiring pool is deep, both of which lower total
cost of ownership even where the initial build is comparable.`,
      faqs: [
        {
          question: "Is Laravel good for business applications?",
          answer:
            "Yes. Laravel includes an ORM, authentication, queues, scheduled jobs and migrations, so standard business functionality is configured rather than written from scratch. Its package ecosystem covers most common requirements. The strongest practical argument for it in Uttar Pradesh is the hiring pool: Laravel developers are abundant and affordable, which meaningfully reduces what maintaining the system costs several years out.",
        },
        {
          question: "Laravel or Next.js for a new project?",
          answer:
            "Laravel if your team writes PHP and will maintain the system, or if you are constrained to shared hosting. Next.js if search visibility matters, if the interface is highly interactive, or if you want one language across the stack. Both are capable of the same applications; the decision usually comes down to who maintains it afterwards rather than to any technical ceiling.",
        },
      ],
    },
    12,
  ),

  t(
    {
      slug: "wordpress",
      name: "WordPress",
      category: "CMS",
      summary:
        "Sometimes genuinely the right answer, and we will tell you when it is.",
      metaTitle: "WordPress Development Company in Sitapur, India",
      metaDesc:
        "WordPress development and maintenance in Sitapur, Uttar Pradesh. Custom themes, plugin work and site rescue from ₹15,000.",
      services: ["web-development", "maintenance-and-support", "seo-and-digital-marketing"],
      bodyMdx: `## What WordPress is

WordPress is a content management system written in [PHP](/technologies/php) that
runs a very large share of the world's websites. Its strength is the editing
experience and the plugin ecosystem.

## When it is the right choice

We recommend WordPress — a smaller invoice for us than a custom build — when:

- **You publish frequently** and non-technical staff need to do it without
  training. The editor is genuinely better than most custom admin panels.
- **You need a specific plugin** that already exists and works. Rebuilding an
  established booking or membership plugin is rarely worth it.
- **Budget is very tight** and you already pay for shared hosting.
- **Your staff already know it.** Familiarity is worth real money.

## When it is not

- **Speed is critical.** A typical WordPress site with a page builder and fifteen
  plugins is slow, and getting Core Web Vitals green is a fight.
  [Next.js](/technologies/nextjs) starts fast.
- **You need custom business logic.** Bending WordPress into an application it
  was not designed to be costs more than building the application.
- **Security matters and nobody will maintain it.** Most compromised small
  business sites we audit are WordPress installs with unpatched plugins. It is
  not a WordPress flaw so much as a maintenance one, but it is real.

## What we have built with it

Custom themes for clients with heavy editorial needs, and a good deal of rescue
work — cleaning up compromised installs, removing page-builder bloat, and
recovering sites from developers who disappeared.

## Cost implication

A custom WordPress theme starts around ₹15,000 and is comparable to our
[Starter web development tier](/services/web-development). The difference is
ongoing: WordPress needs monthly maintenance, so budget ₹3,000 per month under
[maintenance and support](/services/maintenance-and-support).`,
      faqs: [
        {
          question: "Should I use WordPress or a custom-built website?",
          answer:
            "WordPress if you publish content frequently, need a plugin that already exists, or have staff who already know the editor. Custom if speed matters, if you need business logic WordPress was not designed for, or if nobody will keep plugins patched. The honest trade is upfront cost against running cost: WordPress is cheaper to start and needs about ₹3,000 a month of maintenance; a custom build costs more initially and less to run.",
        },
        {
          question: "Why do WordPress sites get hacked?",
          answer:
            "Almost always through an unpatched plugin rather than a targeted attack. Automated scanners look for known vulnerabilities in outdated plugins and themes, and a site left alone for a year will eventually match one. This is a maintenance problem more than a WordPress problem, but it is why a WordPress site genuinely needs a monthly plan covering updates, backups and monitoring rather than being left to run untouched.",
        },
        {
          question: "Can you fix or rescue my existing WordPress site?",
          answer:
            "Yes, and it is a regular part of our work — cleaning compromised installs, stripping page-builder bloat that is destroying load times, and taking over sites from developers who became unreachable. We start with a free audit covering security, backups, performance and plugin age, and give you the findings in writing. Occasionally the honest answer is that rebuilding costs less than untangling, and we will say so.",
        },
      ],
    },
    13,
  ),

  t(
    {
      slug: "react-native",
      name: "React Native",
      category: "MOBILE",
      summary:
        "One JavaScript codebase compiled to real native apps on Android and iOS.",
      metaTitle: "React Native App Development Company in Sitapur",
      metaDesc:
        "Hire React Native developers in Sitapur, Uttar Pradesh. Cross-platform Android and iOS apps from ₹40,000 in 6–12 weeks.",
      services: ["mobile-app-development"],
      bodyMdx: `## What React Native is

React Native builds genuinely native Android and iOS apps from one
[React](/technologies/react) codebase. The interface uses each platform's real
native components, so the result feels like an Android app on Android and an iOS
app on iOS.

## When it is the right choice

- **You already have a React or [Next.js](/technologies/nextjs) web app.**
  Validation, types and business logic can be shared, which is a substantial
  saving.
- **Your team writes JavaScript.** One skill set covers web and mobile.
- **You want the larger Indian hiring pool.** React Native developers are easier
  to find here than Flutter developers, since anyone who knows React is most of
  the way there.
- **Standard business apps** — booking, ordering, catalogues, field reporting,
  attendance.

## When it is not

- **Heavy graphics or games.** Use a native engine.
- **Deep platform hardware integration** — advanced camera control, Bluetooth
  peripherals, background location processing. Possible via native modules, but
  the cross-platform advantage erodes.
- **Pixel-identical UI across both platforms is a hard requirement.**
  [Flutter](/technologies/flutter) is the better fit.

## What we have built with it

Client apps under [mobile app development](/services/mobile-app-development),
paired with a [Node.js](/technologies/nodejs) backend so the API and the admin
dashboard share validation code.

## Cost implication

From ₹40,000 for up to eight screens on both platforms. The comparison that
matters: separate native Kotlin and Swift builds of the same app would be
roughly double, for no user-visible benefit on this class of application.`,
      faqs: [
        {
          question: "React Native or Flutter for my app?",
          answer:
            "React Native if you already have a React or Next.js web application to share logic with, or if your team writes JavaScript — the hiring pool in India is also larger, since any React developer is most of the way there. Flutter if you want pixel-identical interfaces on both platforms and a strong design system. Both produce genuinely native apps and both are mature; the decision usually follows what you already run.",
        },
        {
          question: "Are React Native apps as good as native apps?",
          answer:
            "For business applications — booking, ordering, catalogues, attendance, field reporting — users cannot tell the difference, because the interface uses each platform's real native components. The gap appears in heavy graphics, games, and deep hardware integration such as advanced camera control or Bluetooth peripherals. If your app is one of those, we will recommend native and say why rather than selling you the cheaper build.",
        },
      ],
    },
    14,
  ),

  t(
    {
      slug: "flutter",
      name: "Flutter",
      category: "MOBILE",
      summary:
        "Google's cross-platform toolkit — identical UI everywhere, drawn from scratch.",
      metaTitle: "Flutter App Development Company in Sitapur, India",
      metaDesc:
        "Hire Flutter developers in Sitapur, Uttar Pradesh. Cross-platform Android and iOS apps with Flutter from ₹40,000.",
      services: ["mobile-app-development"],
      bodyMdx: `## What Flutter is

Flutter is Google's toolkit for building Android and iOS apps from one Dart
codebase. Unlike [React Native](/technologies/react-native), it does not use the
platform's native widgets — it draws every pixel itself, which is why the result
looks identical on both platforms.

## When it is the right choice

- **Design consistency is a priority.** If your brand has a strong visual system
  and you want it reproduced exactly on both platforms, Flutter's own rendering
  guarantees that.
- **The app is animation-heavy.** Flutter's rendering pipeline handles complex
  animation more smoothly than React Native's bridge.
- **You have no existing React codebase**, so the shared-logic argument for
  React Native does not apply.
- **You want one codebase to also target the web and desktop** later, which
  Flutter supports more coherently.

## When it is not

- **You already have a React web app.** The shared-logic advantage of React
  Native is real and worth more than pixel consistency for most business apps.
- **You will hire locally in Uttar Pradesh.** The Dart talent pool is smaller
  than the JavaScript one, which affects maintenance cost later.
- **App size is critical.** Flutter apps carry their own rendering engine and
  start larger, which matters on entry-level Android devices.

## What we have built with it

Standalone client apps with strong design requirements, where there was no
existing web codebase to share with and a consistent look mattered more than the
hiring pool.

## Cost implication

The same as React Native under
[mobile app development](/services/mobile-app-development), from ₹40,000. The
cost difference is not in the build but downstream: Dart developers are scarcer
and therefore somewhat more expensive to hire in this region.`,
      faqs: [
        {
          question: "Is Flutter better than React Native?",
          answer:
            "Neither is universally better. Flutter draws its own interface, so the app looks identical on Android and iOS and handles complex animation more smoothly. React Native uses each platform's native components and shares code with React web applications. Choose Flutter for design consistency and animation; choose React Native if you already have a React codebase or want the larger JavaScript hiring pool in India.",
        },
        {
          question: "Do Flutter apps work well on cheap Android phones?",
          answer:
            "They run well, but the app package is larger than an equivalent React Native build because Flutter bundles its own rendering engine. On entry-level devices with limited storage, and for users on metered connections, that download size is a genuine consideration. If a large share of your audience is on low-end Android hardware, it is worth weighing against the design consistency Flutter buys you.",
        },
      ],
    },
    15,
  ),

  t(
    {
      slug: "typescript",
      name: "TypeScript",
      category: "FRONTEND",
      summary:
        "JavaScript with types. We use it on everything, and it is not negotiable.",
      metaTitle: "TypeScript Development Company in Sitapur, India",
      metaDesc:
        "Hire TypeScript developers in Sitapur, Uttar Pradesh. Type-safe React, Node and Next.js applications from ₹15,000.",
      services: ["web-development", "custom-software-development", "mobile-app-development"],
      bodyMdx: `## What TypeScript is

TypeScript is JavaScript with a type system layered on top. It checks at build
time that the data flowing through your code is the shape you expect, then
compiles to ordinary JavaScript.

## Why we use it on everything

This is one of the few choices we do not present as a trade-off.

A large class of production bugs is a value being the wrong shape — a field that
was undefined, a number that arrived as a string, a function called with the
wrong arguments after a refactor. TypeScript catches those at build time, before
they reach a user.

That matters most on **the handover**. When you take the repository to your own
developer in two years, types are documentation that cannot go stale. A function
signature tells them exactly what it expects, without a comment that may or may
not still be true.

It also makes changes safer. Renaming a database field in a typed codebase
surfaces every place that breaks immediately; in plain JavaScript you find out
from a customer.

## When it is not worth it

Genuinely: a throwaway script that runs once. That is about it. The old objection
was setup cost, and modern tooling has removed it —
[Next.js](/technologies/nextjs) projects are TypeScript by default.

## What we have built with it

Everything. This site runs TypeScript in strict mode with zero \`any\` types, and
the same standard applies to client work.

## Cost implication

None. TypeScript adds a small amount of time early and saves considerably more
across the life of the project, particularly during the first maintenance cycle
after handover.`,
      faqs: [
        {
          question: "Is TypeScript worth it for a small project?",
          answer:
            "Yes, for anything that will be maintained. The cost is a small amount of extra time while writing; the benefit is that a whole category of bugs is caught at build time instead of by a customer. It matters most at handover: types act as documentation that cannot become out of date, which is exactly what a developer inheriting the codebase in two years needs.",
        },
        {
          question: "Does TypeScript slow down development?",
          answer:
            "Slightly at the start, and it pays that back quickly. Where it clearly wins is during change: renaming a database field in a typed codebase immediately surfaces every place that breaks, whereas in plain JavaScript you find out from a user. Modern tooling has removed the old setup burden — Next.js projects are TypeScript by default and require no additional configuration.",
        },
      ],
    },
    16,
  ),

  t(
    {
      slug: "tailwind-css",
      name: "Tailwind CSS",
      category: "FRONTEND",
      summary:
        "Utility-first CSS that keeps stylesheets from rotting as a project grows.",
      metaTitle: "Tailwind CSS Development Company in Sitapur, India",
      metaDesc:
        "Hire Tailwind CSS developers in Sitapur, Uttar Pradesh. Fast, consistent, responsive interfaces built with Tailwind from ₹15,000.",
      services: ["web-development", "ui-ux-design", "custom-software-development"],
      bodyMdx: `## What Tailwind is

Tailwind is a CSS framework built from small single-purpose utility classes
applied directly in markup, rather than hand-written stylesheets with invented
class names.

## When it is the right choice

Tailwind's real advantage shows up in **month six, not week one**. Traditional
CSS on a growing project accumulates: nobody dares delete a rule in case
something depends on it, and the stylesheet only ever grows. Because Tailwind
styles live next to the markup that uses them, deleting a component deletes its
styles.

It also enforces a **design system by default**. Spacing, colours and type come
from a defined scale, so a project does not drift into fourteen slightly
different greys — which is exactly what happens on hand-written CSS with several
contributors.

The output is small. Unused classes are removed at build time, so a large site
ships a few kilobytes of CSS.

## When it is not

- **You are handing the site to a team that only knows traditional CSS.** The
  markup will look unfamiliar and they will fight it.
- **Heavily art-directed one-off pages** with unusual layouts, where plain CSS is
  more direct.

## What we have built with it

This site, every admin panel we ship, and the design tokens in our
[UI/UX work](/services/ui-ux-design) are named to map straight onto Tailwind, so
a design file translates to code without a reinterpretation step.

## Cost implication

Tailwind reduces cost slightly on projects of real size, mostly by removing the
CSS-debugging work that otherwise accumulates. There is no licence fee.`,
      faqs: [
        {
          question: "Why use Tailwind instead of normal CSS?",
          answer:
            "The benefit appears as a project grows. Traditional stylesheets accumulate rules nobody dares delete, so they only ever get larger. Tailwind styles live beside the markup that uses them, so removing a component removes its styles. It also enforces a spacing and colour scale by default, which prevents the drift into a dozen near-identical greys that hand-written CSS with several contributors reliably produces.",
        },
        {
          question: "Does Tailwind make the HTML messy?",
          answer:
            "The markup carries more class names, which looks unfamiliar at first. In practice the classes are extracted into reusable components, so you write them once per component rather than repeatedly. The trade is explicit: slightly noisier markup in exchange for a stylesheet that does not rot and a design system enforced by default. Most teams that use it for a full project stop noticing within a fortnight.",
        },
      ],
    },
    17,
  ),

  t(
    {
      slug: "ai-ml",
      name: "AI & Machine Learning",
      category: "AI_ML",
      summary:
        "The practical subset of AI that a district business can actually afford.",
      metaTitle: "AI & Machine Learning Company in Sitapur, India",
      metaDesc:
        "AI and machine learning development in Sitapur, Uttar Pradesh. Chatbots, document automation and forecasting from ₹60,000.",
      services: ["ai-ml-solutions"],
      bodyMdx: `## What this covers

"AI" spans a lot of unrelated things. The subset that is affordable and reliable
for a business in Uttar Pradesh today is narrower than the marketing suggests,
and it is worth being specific.

**Reliable and affordable now:**

- Answering questions from your own documents
  ([RAG](/technologies/langchain-rag))
- Extracting structured data from invoices, forms and prescriptions
- Classification — routing enquiries, tagging support tickets
- Forecasting from two or more years of your own history

**Expensive or unreliable today:**

- Anything requiring perfect accuracy without human review
- Training a model from scratch, as opposed to adapting an existing one
- Real-time video analysis at scale
- Predicting from thin or noisy data

## How we decide whether AI is the answer

We ask what number should move and how we will measure it. "Reduce the time our
front desk spends answering the same five admission questions" is a scope. "Add
AI" is not.

If three if-statements solve the problem, we write the three if-statements. AI
earns its cost when the input is genuinely unstructured — free text, scanned
documents, varied phrasing — or when the pattern is too complex to write down.

## What we have built with it

Document assistants grounded in client policy files, invoice extraction with
human review before commit, and demand forecasting benchmarked against a naive
baseline so the client can see whether the model actually beat "same as last
year".

## Cost implication

From ₹60,000 under [AI & ML solutions](/services/ai-ml-solutions), plus running
costs of roughly ₹800–₹4,000 per month depending on volume, billed to your own
provider account rather than marked up by us.`,
      faqs: [
        {
          question: "What AI can a small business in India actually afford?",
          answer:
            "Document-grounded chatbots, data extraction from invoices and forms, enquiry classification, and forecasting from your own history are all realistic today, starting around ₹60,000 to build with running costs of ₹800 to ₹4,000 a month. What is not affordable or reliable yet is anything demanding perfect accuracy without human review, training a model from scratch, or real-time video analysis at scale.",
        },
        {
          question: "How do I know if AI will actually help my business?",
          answer:
            "Start from the number you want to move rather than from the technology. If you can say 'our staff spend six hours a week retyping invoice data' or 'the front desk answers the same five questions forty times a day', there is something measurable to target. If the answer is vaguer than that, the honest recommendation is usually to fix a process or automate with simple rules first, which costs a fraction as much.",
        },
      ],
    },
    18,
  ),

  t(
    {
      slug: "tensorflow",
      name: "TensorFlow",
      category: "AI_ML",
      summary:
        "Google's ML framework — we use it for custom models on client data.",
      metaTitle: "TensorFlow Development Company in Sitapur, India",
      metaDesc:
        "Hire TensorFlow developers in Sitapur, Uttar Pradesh. Custom machine learning models and predictive systems from ₹2,50,000.",
      services: ["ai-ml-solutions"],
      bodyMdx: `## What TensorFlow is

TensorFlow is Google's machine learning framework, used to build and train
models. It is the tool for the cases where an existing model does not fit and
something has to be trained on your own data.

## When it is the right choice

TensorFlow enters the picture for **custom prediction on your own history**:
demand forecasting, churn scoring, quality classification from images, risk
models. These are problems where no off-the-shelf API knows your data.

It is also the right choice when a model must run **on your own hardware**,
either because data cannot leave your premises or because per-call API costs
would be prohibitive at your volume.

## When it is not

Most of the time, honestly. If the task is understanding language or reading
documents, a hosted model through [LangChain](/technologies/langchain-rag) will
be cheaper, faster to build and more accurate than anything we could train in a
reasonable budget.

Training custom models needs meaningful data — realistically two or more years of
history, or thousands of labelled examples. Below that threshold we will tell you
the project is not viable rather than taking it.

## What we have built with it

Forecasting models on client sales history, always benchmarked against a naive
baseline. Where the model has not clearly beaten "same as last year", we have
said so and refunded the modelling phase.

## Cost implication

Custom model work sits in the top tier of
[AI & ML solutions](/services/ai-ml-solutions), from ₹2,50,000, plus GPU compute
for training billed at actuals. This is the most expensive category of AI work
and the one we most often talk clients out of.`,
      faqs: [
        {
          question: "Do I need a custom machine learning model?",
          answer:
            "Usually not. If the task involves understanding language or reading documents, a hosted model will be cheaper, faster to deploy and more accurate than anything trainable on a normal budget. Custom models earn their cost when predicting from your own specific history — demand, churn, quality — where no external service knows your data, or when data cannot leave your premises for regulatory reasons.",
        },
        {
          question: "How much data do I need to train a model?",
          answer:
            "Realistically two or more years of history, or several thousand labelled examples. Below that, a model fits noise rather than signal and will not hold up against next season. We always build a naive baseline such as 'same as last year' first and compare honestly. If the trained model does not clearly beat it, we say so and refund the modelling phase rather than shipping something that looks sophisticated and predicts nothing.",
        },
      ],
    },
    19,
  ),

  t(
    {
      slug: "langchain-rag",
      name: "LangChain & RAG",
      category: "AI_ML",
      summary:
        "How we make an assistant answer from your documents instead of inventing.",
      metaTitle: "LangChain & RAG Development Company in Sitapur",
      metaDesc:
        "Build RAG chatbots and document assistants in Sitapur, Uttar Pradesh. Grounded AI answering from your own files, from ₹60,000.",
      services: ["ai-ml-solutions"],
      bodyMdx: `## What RAG is

Retrieval-Augmented Generation is the technique behind almost every useful
business chatbot. Rather than relying on what a language model absorbed during
training, the system:

1. Searches **your** documents for passages relevant to the question
2. Passes those passages to the model as context
3. Asks it to answer using only that context, and to cite the source

LangChain is one of the toolkits for wiring that together.

## Why it matters commercially

This is what separates a chatbot that is useful from one that is a liability.

A model answering from training data will confidently invent a refund policy or a
fee structure, because inventing plausible text is exactly what it was built to
do. A RAG system answers from your actual fee document and tells the user which
document it came from. When it cannot find a grounded answer it says so and
escalates.

A confident wrong answer about your admission fees costs far more than an honest
"I don't know" plus a handoff.

## When it is the right choice

- **Support and enquiry deflection** — the same questions asked repeatedly
- **Internal knowledge lookup** — staff searching policy documents and manuals
- **Product and catalogue questions**
- **Any case where answers must be traceable to a source**

## When it is not

- **Your documents do not exist or are out of date.** RAG grounded in a
  three-year-old fee structure is worse than no chatbot.
- **Questions need calculation rather than lookup.** That is ordinary software.

## Cost implication

From ₹60,000 under [AI & ML solutions](/services/ai-ml-solutions), with running
costs around ₹800–₹2,500 per month for roughly a thousand questions.`,
      faqs: [
        {
          question: "What is RAG and why does my chatbot need it?",
          answer:
            "Retrieval-Augmented Generation means the assistant searches your own documents for relevant passages, then answers using only those and cites the source. Without it, a language model answers from training data and will confidently invent a fee structure or refund policy, because generating plausible text is what it does. RAG is what makes a business chatbot trustworthy enough to put in front of customers.",
        },
        {
          question: "What documents do I need to provide for a RAG chatbot?",
          answer:
            "Whatever your staff currently answer questions from: fee structures, prospectuses, policy documents, product catalogues, service terms, FAQ sheets. They need to be current — a chatbot grounded in a three-year-old fee document is worse than no chatbot at all. Format matters less than accuracy; we can index PDFs, Word files and web pages. Keeping them updated afterwards is the main ongoing obligation.",
        },
      ],
    },
    20,
  ),

  t(
    {
      slug: "docker",
      name: "Docker",
      category: "DEVOPS",
      summary:
        "Packaging that makes the app behave the same on your server as on ours.",
      metaTitle: "Docker & DevOps Company in Sitapur, India",
      metaDesc:
        "Docker containerisation and deployment in Sitapur, Uttar Pradesh. Consistent, reproducible deployments for business software.",
      services: ["custom-software-development", "maintenance-and-support", "ai-ml-solutions"],
      bodyMdx: `## What Docker is

Docker packages an application together with everything it needs to run — the
runtime, libraries, system dependencies — into a container that behaves
identically wherever it is started.

## When it is the right choice

- **On-premise deployment.** When software must run on your own server rather
  than the cloud, Docker is what makes that predictable instead of a two-day
  installation exercise.
- **[Python](/technologies/python) or AI workloads**, where dependency versions
  are notoriously fragile and "it works on my machine" is a real cost.
- **Anything with several moving parts** — an app, a database, a background
  worker, a cache — that need to start together in the right order.
- **Handover.** A containerised application can be run by a developer who has
  never seen it, with one command.

## When it is not

- **Simple [Next.js](/technologies/nextjs) sites deployed to Vercel.** The
  platform handles it; adding Docker is complexity with no return.
- **Very small teams with no operations experience**, where a managed platform is
  a better use of everyone's time.

## What we have built with it

On-premise deployments for clients whose data cannot leave the building, and
AI model-serving containers where reproducing an exact dependency set matters.

## Cost implication

Docker adds a small amount of setup time and removes a category of deployment
problems. It matters most for the client who eventually brings maintenance
in-house — a containerised app is something a new developer can run on day one.`,
      faqs: [
        {
          question: "Do I need Docker for my project?",
          answer:
            "Not if the application is a Next.js site deployed to Vercel — the platform already handles packaging and adding Docker is complexity for no return. You do want it for on-premise deployment on your own servers, for Python and AI workloads where dependency versions are fragile, and for systems with several parts that must start together. It also makes handover to a future developer substantially easier.",
        },
      ],
    },
    21,
  ),

  t(
    {
      slug: "aws",
      name: "AWS",
      category: "DEVOPS",
      summary:
        "The cloud we use when a client needs data in India or full control.",
      metaTitle: "AWS Cloud Development Company in Sitapur, India",
      metaDesc:
        "AWS cloud setup and deployment in Sitapur, Uttar Pradesh. Hosting, storage and data-residency compliant infrastructure.",
      services: ["custom-software-development", "maintenance-and-support"],
      bodyMdx: `## What AWS is

Amazon Web Services is the largest cloud provider, offering servers, databases,
storage and a very large catalogue of managed services.

## When it is the right choice

- **Data residency requirements.** AWS has Mumbai and Hyderabad regions, so data
  stays in India — which matters for healthcare and financial clients under
  Indian data-protection rules.
- **You need control** over the operating system, networking or scaling
  behaviour.
- **Large file or media storage.** S3 is cheap and reliable at scale.
- **Your organisation already standardises on AWS.**

## When it is not

For most of our clients, honestly, it is overkill. A business website or a small
application runs better on [Vercel](/technologies/vercel) or a managed database
provider: less to configure, less to monitor, less to get wrong, and usually
cheaper at small scale.

AWS is powerful and correspondingly easy to misconfigure. An accidentally public
S3 bucket or an oversized instance left running is a common and expensive
mistake. We recommend it when there is a reason, not by default.

## What we have built with it

Deployments for clients with explicit data-residency requirements, and media
storage for applications handling large volumes of documents and images.

## Cost implication

Highly variable — from a few hundred rupees a month to lakhs. We size
conservatively, set billing alerts before anything goes live, and hand over the
account in your name so you can see exactly what is running and what it costs.`,
      faqs: [
        {
          question: "Should I host my website on AWS?",
          answer:
            "Probably not, unless you have a specific reason. For a business website or small application, Vercel or a managed database provider is simpler, cheaper at small scale and has far less that can be misconfigured. AWS earns its place when you need data to stay in India for compliance, need control over the operating system or networking, or are storing large volumes of media.",
        },
        {
          question: "Does AWS keep my data in India?",
          answer:
            "It can. AWS operates Mumbai and Hyderabad regions, and when resources are created there the data stays in India, which matters for healthcare and financial clients under Indian data-protection rules. This is not automatic — the region is a choice made when each resource is created, and it is easy to get wrong. We configure and document it explicitly when residency is a requirement.",
        },
      ],
    },
    22,
  ),

  t(
    {
      slug: "vercel",
      name: "Vercel",
      category: "DEVOPS",
      summary:
        "Where we deploy most sites. Free for typical business traffic.",
      metaTitle: "Vercel Deployment & Hosting Company in Sitapur",
      metaDesc:
        "Vercel deployment and hosting for Next.js sites from Sitapur, Uttar Pradesh. Free tier hosting for most business websites.",
      services: ["web-development", "maintenance-and-support"],
      bodyMdx: `## What Vercel is

Vercel is a hosting platform built by the makers of
[Next.js](/technologies/nextjs). You connect a Git repository and every push
deploys automatically, with preview URLs for each branch.

## When it is the right choice

For most business websites, this is the default and the reason is cost: **the
free tier genuinely covers a typical business site**. A five-page site for a
clinic or dealership in Sitapur will not exceed it.

Beyond price:

- **Global CDN by default**, so the site is fast for visitors anywhere
- **Preview deployments** — every change gets its own URL, which is how you
  review work each week during a build
- **Automatic HTTPS**, renewed without anyone remembering to
- **Rollback in one click** when a deploy goes wrong

## When it is not

- **Data residency requirements.** Vercel's edge network is global; if data must
  stay in India, use [AWS](/technologies/aws) Mumbai.
- **Long-running background jobs.** Serverless functions have execution limits;
  heavy batch work belongs elsewhere.
- **Very high traffic**, where the pricing model can become less favourable than
  a plain server.

## What we have built with it

This site, and most client websites. Preview deployments are what make the weekly
demo in our [build process](/services/web-development) practical — you get a real
URL, not a screenshot.

## Cost implication

**₹0 per month** for most business sites on the free tier. Pro is roughly ₹1,700
per month and is only needed with real traffic or team features. The account is
created in your name, so you control it.`,
      faqs: [
        {
          question: "Is Vercel really free for a business website?",
          answer:
            "For a typical business site, yes. The free tier covers the bandwidth and build minutes a five-page site for a clinic, dealership or coaching institute will realistically use. The Pro plan at roughly ₹1,700 per month becomes necessary with substantial traffic or when you need team features. We create the account in your name so you can see usage and are never dependent on us for access.",
        },
        {
          question: "What happens if my site outgrows the Vercel free tier?",
          answer:
            "You get usage warnings well before any hard limit, and upgrading to Pro at around ₹1,700 per month is a single change with no migration. If traffic grows to the point where Vercel's pricing is no longer favourable, a Next.js application can be moved to a plain server or AWS — the code is not locked to the platform. That portability is deliberate.",
        },
      ],
    },
    23,
  ),

  t(
    {
      slug: "supabase",
      name: "Supabase",
      category: "DATABASE",
      summary:
        "Managed PostgreSQL with auth and storage included — a fast start for small apps.",
      metaTitle: "Supabase Development Company in Sitapur, India",
      metaDesc:
        "Hire Supabase developers in Sitapur, Uttar Pradesh. Managed PostgreSQL, authentication and storage for web and mobile apps.",
      services: ["web-development", "mobile-app-development", "custom-software-development"],
      bodyMdx: `## What Supabase is

Supabase is a managed [PostgreSQL](/technologies/postgresql) database bundled
with authentication, file storage and auto-generated APIs. It is often described
as an open-source alternative to Firebase, with the important difference that
underneath it is a real relational database.

## When it is the right choice

- **Small applications that need auth immediately.** Email, phone-OTP and social
  login work out of the box, which removes a week of work.
- **You want [PostgreSQL](/technologies/postgresql) without administering it.**
  Backups, connection pooling and upgrades are handled.
- **Mobile app backends** where the app talks to the database through a
  generated API rather than a hand-built one.
- **Tight budgets.** The free tier holds a real small-business application.

## When it is not

- **Complex business logic.** Once rules become involved, you want a proper
  backend layer rather than clients talking to the database directly.
- **Data residency in India.** Region options are limited compared to
  [AWS](/technologies/aws).
- **Very large datasets**, where a dedicated database instance is more
  economical.

## What we have built with it

Mobile app backends and internal tools where authentication and storage were
most of the requirement and the timeline was short.

## Cost implication

Free tier covers roughly 500 MB of database and 1 GB of storage — enough for many
small applications. Paid plans start around ₹2,100 per month. Compared with
building authentication and file handling yourself, it typically saves a week of
development, which is worth more than the subscription.`,
      faqs: [
        {
          question: "Supabase or Firebase — which is better?",
          answer:
            "Supabase if your data is relational, which most business data is: underneath it is real PostgreSQL, so you get transactions, foreign keys and standard SQL, and you can migrate away later. Firebase if you want the most mature real-time syncing and are comfortable with a document model and Google's ecosystem. The portability argument usually favours Supabase for business software.",
        },
        {
          question: "Is Supabase suitable for a production application?",
          answer:
            "Yes for small and medium applications, particularly where authentication and file storage are much of the requirement. It is managed PostgreSQL, so backups, pooling and upgrades are handled for you. Where it becomes limiting is complex business logic — once rules get involved you want a proper backend layer rather than clients querying the database directly — and where Indian data residency is a hard requirement.",
        },
      ],
    },
    24,
  ),

  t(
    {
      slug: "firebase",
      name: "Firebase",
      category: "DATABASE",
      summary:
        "Google's app backend — push notifications and real-time sync without a server.",
      metaTitle: "Firebase Development Company in Sitapur, India",
      metaDesc:
        "Hire Firebase developers in Sitapur, Uttar Pradesh. Push notifications, real-time sync and authentication for mobile apps.",
      services: ["mobile-app-development", "web-development"],
      bodyMdx: `## What Firebase is

Firebase is Google's platform for app backends: a document database,
authentication, file storage, push notifications and analytics, all managed and
callable directly from a mobile or web client.

## When it is the right choice

- **Push notifications.** Firebase Cloud Messaging is the standard mechanism on
  Android and works on iOS too. We use it on essentially every
  [mobile app](/services/mobile-app-development) we build, even when the main
  database is [PostgreSQL](/technologies/postgresql) elsewhere.
- **Real-time sync.** Chat, live order status, collaborative screens — data
  updates on every connected device without you writing the plumbing.
- **Fast prototypes.** Auth and storage in an afternoon.
- **Crash reporting and analytics**, which are genuinely good and free.

## When it is not

- **Relational business data.** Firestore is a document store, so fees, invoices
  and inventory belong in [PostgreSQL](/technologies/postgresql). Mixing the two
  is normal: Firebase for notifications, Postgres for records.
- **Complex queries and reporting.** Firestore's query model is restrictive and
  you will hit its limits sooner than expected.
- **Cost at scale.** Pricing is per read and write, which is cheap early and can
  grow sharply with a chatty app.

## What we have built with it

Push notifications and crash reporting on client mobile apps, alongside a Node
API over PostgreSQL that holds the actual business records.

## Cost implication

The free tier is generous and covers most early-stage apps. Notifications are
free at normal volumes. The thing to watch is read-and-write billing as usage
grows, which is why we keep transactional records in Postgres rather than
querying Firestore on every screen.`,
      faqs: [
        {
          question: "Should I use Firebase as my app's main database?",
          answer:
            "For push notifications, real-time sync and analytics, Firebase is an excellent choice and we use it on most mobile apps. As the main store for business records — fees, invoices, inventory, attendance — it is the wrong shape, because that data is relational and Firestore's query model is restrictive. A common and sensible setup is Firebase for notifications and PostgreSQL for records.",
        },
        {
          question: "Is Firebase free?",
          answer:
            "The free tier is generous and covers most early-stage apps, and push notifications are free at normal volumes. Beyond that, billing is per database read and write, which is inexpensive at first but can grow sharply with a chatty app that queries on every screen. That billing model is one reason we keep transactional records in PostgreSQL and use Firebase for the things it is genuinely best at.",
        },
      ],
    },
    25,
  ),
];
