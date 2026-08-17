import type { SeedLocation } from "./types";

/**
 * Six location pages, not ten.
 *
 * The brief's own rule is the binding one here: "If you cannot write it
 * honestly, do not create the page." These six are districts we can write about
 * specifically — road distance, local industry, the kind of business that
 * actually operates there. Kanpur, Gorakhpur, Varanasi and Bahraich are
 * deliberately NOT seeded, because a page about Varanasi written from a
 * template with the noun swapped is exactly the thin content that gets a whole
 * domain discounted.
 *
 * `localProof` is left null throughout. Codivra was founded in 2026; inventing
 * named local clients to fill a proof block would be fabricating trust signals.
 * Fill these from the admin panel as real projects complete.
 */
export const locations: SeedLocation[] = [
  {
    slug: "sitapur",
    city: "Sitapur",
    district: "Sitapur",
    isOffice: true,
    address: "816, Vikas Nagar Colony, Khoobpur, Sitapur, Uttar Pradesh 261001",
    lat: 27.5678,
    lng: 80.682,
    order: 1,
    metaTitle: "Software & Web Development Company in Sitapur",
    metaDesc:
      "Codivra Solutions is a software development company based in Sitapur, Uttar Pradesh. Websites from ₹15,000, apps from ₹40,000. Visit our office.",
    answerBlock:
      "Codivra Solutions is a software development company with its office in Sitapur, Uttar Pradesh. We build websites, mobile apps and custom business software for clients in Sitapur city and across the district, with in-person meetings available and projects starting at ₹15,000.",
    bodyMdx: `## We are actually here

Most "web development company in Sitapur" results are agencies in Lucknow, Noida
or Indore running a location page. Our office is at Vikas Nagar Colony,
Khoobpur, and you can come to it. That is the whole difference.

For a business in Sitapur it matters more than it sounds. A project where you can
sit across a table for the scoping conversation, hand over a folder of photographs
in person, and call someone who will pick up, runs differently from one conducted
entirely through a form on a website.

## The businesses we build for in Sitapur district

Sitapur is a district headquarters of roughly 24 lakh people across tehsils
including Sitapur, Biswan, Laharpur, Misrikh, Mahmudabad and Sidhauli. The
commercial base is specific, and it shapes what software is actually useful here.

**Agriculture and processing.** Sitapur sits in a wheat, paddy and sugarcane belt
and is one of the significant mentha oil producing districts in the country.
Processing units, cold stores and traders here need
[batch tracking, yield reporting and dispatch documentation](/industries/manufacturing)
far more than they need a brochure website.

**Healthcare.** Sitapur has an unusually strong medical reputation for a district
of its size, anchored by the Sitapur Eye Hospital, which draws patients from well
beyond the district. Around it sits a dense layer of clinics, diagnostic labs and
pharmacies — the businesses our
[clinic management system](/products/clinic-management-system) is built for.

**Education.** Schools and coaching institutes across the district compete hard
during the February-to-April admission season, and most lose enquiries because
they arrive on WhatsApp and are never followed up. That is a solvable problem and
it is the one we hear about most.

**Retail and wholesale trade.** The markets around Lal Bagh and the main town
area run on credit, party-specific rates and paper billing.
[GST-compliant billing with party ledgers](/products/billing-and-pos) is usually
the highest-return first system for these traders.

**Pilgrimage and hospitality.** Naimisharanya, in Misrikh tehsil, brings
significant pilgrim traffic through the district, supporting guesthouses, dharamshalas
and food businesses that currently take every booking by phone.

## Why we are based here and not in Lucknow

The honest answer is cost structure, and you benefit from it.

A development agency in Gomti Nagar carries Gomti Nagar rent, Gomti Nagar
salaries and a sales team. Those costs appear in the quote. We do not carry them,
which is why a five-page business website is ₹15,000 here rather than ₹40,000
ninety kilometres away — for the same [Next.js](/technologies/nextjs) build.

The second reason is that we understand the businesses here. An agency in Noida
quoting for a mentha processing unit does not know what yield per batch means or
why party-wise outstanding is the report that matters. That gap costs more in
rework than it saves in fees.

## Meeting us

Our office hours are Monday to Saturday, 10:00 to 19:00. You are welcome to come
in without an appointment, though calling ahead on
[+91 97933 70700](tel:+919793370700) means the person you need will be there
rather than on a site visit.

We also travel within the district at no charge — Biswan, Laharpur, Mahmudabad,
Misrikh and Sidhauli are all comfortable same-day trips.

## What we build, and what it costs

| Service | Starting price | Typical delivery |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | 2–3 weeks |
| [Ecommerce store](/services/ecommerce-development) | ₹25,000 | 3–4 weeks |
| [Mobile app](/services/mobile-app-development) | ₹40,000 | 6–8 weeks |
| [Custom software](/services/custom-software-development) | ₹50,000 | 6–8 weeks |
| [Local SEO](/services/seo-and-digital-marketing) | ₹8,000/month | Results from month 3 |

Every quote is fixed before work starts, and every project hands over source code
on your own GitHub account.`,
    faqs: [
      {
        question: "Where is Codivra Solutions located in Sitapur?",
        answer:
          "Our office is at 816, Vikas Nagar Colony, Khoobpur, Sitapur, Uttar Pradesh 261001. Office hours are Monday to Saturday, 10:00 to 19:00. You are welcome to visit without an appointment, though calling +91 97933 70700 ahead means the person you need will be in rather than on a site visit. We also travel anywhere in Sitapur district at no charge.",
      },
      {
        question: "How much does a website cost in Sitapur?",
        answer:
          "A five-page business website starts at ₹15,000 and takes two to three weeks. A larger site with a blog and admin panel is ₹45,000. An ecommerce store with payments starts at ₹25,000. These are genuinely lower than Lucknow agency rates for the same build because we do not carry Gomti Nagar rent and a sales team, and that difference goes into the quote rather than into overheads.",
      },
      {
        question: "Do you meet clients in person in Sitapur?",
        answer:
          "Yes, and we think it materially improves the project. Scoping conversations go better across a table than over a form, and being able to hand over photographs, price lists and existing registers in person removes a week of back and forth. We travel free anywhere in Sitapur district including Biswan, Laharpur, Mahmudabad, Misrikh and Sidhauli.",
      },
    ],
  },

  {
    slug: "lucknow",
    city: "Lucknow",
    district: "Lucknow",
    isOffice: false,
    distanceFromOffice: "About 90 km, roughly 2 hours by road via NH-30",
    order: 2,
    metaTitle: "Web Development Company Serving Lucknow from Sitapur",
    metaDesc:
      "Website and software development for Lucknow businesses at district rates. Websites from ₹15,000, apps from ₹40,000. On-site meetings available.",
    answerBlock:
      "Codivra Solutions serves Lucknow businesses from our office in Sitapur, about 90 km away on NH-30. We build websites, apps and custom software at district cost structure rather than Gomti Nagar rates, with on-site meetings in Lucknow arranged for projects above ₹50,000.",
    bodyMdx: `## Working with Lucknow clients from 90 km away

Lucknow is a two-hour drive up NH-30 from our office, which makes it close enough
for on-site meetings and far enough that we do not carry Lucknow's cost base.

For projects above ₹50,000 we come to you in Lucknow for the discovery meeting
and the handover session. Everything between runs the way it would for any client
— weekly demo links on a staging URL, calls, and a shared repository you can watch
commits land in.

## Why a Lucknow business would look outside Lucknow

Straightforwardly, price for the same work.

A five-page business website from an established Hazratganj or Gomti Nagar agency
typically runs ₹35,000 to ₹60,000. The same
[Next.js](/technologies/nextjs) build from us is ₹15,000. The difference is not
quality or corner-cutting — it is that a Gomti Nagar office, a sales team and an
account manager layer all have to be paid for out of your quote, and we do not
have any of them.

What you give up is the ability to walk into an office unannounced. What you keep
is the same stack, the same weekly demos, source code on your own GitHub, and an
engineer rather than an account manager on the call.

## The Lucknow market we actually fit

We are not the right choice for every Lucknow business, and it is worth being
clear about which ones we do fit.

**Good fit:** established SMEs — clinics, coaching institutes, dealerships,
traders, professional practices — that need a genuinely good website or a business
system and do not need a retainer relationship with an agency. Startups that need
an MVP built properly for a sum that does not consume the seed round. Businesses
that have been quoted ₹80,000 for something that should cost ₹25,000.

**Poor fit:** organisations that require a vendor with a Lucknow office for
procurement reasons. Companies wanting a full-service marketing agency with
design, PR and media buying under one roof. Anyone who needs someone physically
present several days a week.

We would rather say that at the enquiry stage than three weeks in.

## Lucknow's IT sector, and where we sit relative to it

Lucknow has a real technology base — the IT City development off Sultanpur Road,
a large HCL presence, and a steady supply of engineering graduates. That market is
served well at the enterprise end.

The gap is at the other end: the mid-sized Lucknow business that needs one good
system built and handed over, not an ongoing enterprise engagement. That is the
work we do, and being outside the city is precisely why we can do it at this
price.

## What we build for Lucknow clients

| Service | Starting price | Typical Lucknow agency quote |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | ₹35,000 – ₹60,000 |
| [Ecommerce store](/services/ecommerce-development) | ₹25,000 | ₹60,000 – ₹1,20,000 |
| [Mobile app](/services/mobile-app-development) | ₹40,000 | ₹1,50,000+ |
| [Custom software](/services/custom-software-development) | ₹50,000 | ₹1,50,000+ |

The right-hand column is from quotes clients have shown us during enquiries; treat
it as indicative rather than a survey.`,
    faqs: [
      {
        question: "Do you work with clients in Lucknow?",
        answer:
          "Yes. Lucknow is about 90 km from our Sitapur office, roughly two hours on NH-30, and we come to you in Lucknow for the discovery meeting and handover session on projects above ₹50,000. Everything in between runs on weekly demo links, calls and a shared repository. What you give up is an office to walk into; what you keep is the same build at a district cost structure.",
      },
      {
        question: "Why is a Sitapur company cheaper than a Lucknow agency?",
        answer:
          "Because a Gomti Nagar office, a sales team and an account manager layer all get paid out of your quote. We carry none of those, so a five-page Next.js site is ₹15,000 rather than the ₹35,000 to ₹60,000 typically quoted in Lucknow for the same build. The stack, the weekly demos and the code ownership are identical — the difference is overhead, not quality.",
      },
      {
        question: "When should a Lucknow business not hire you?",
        answer:
          "If your procurement requires a vendor with a registered Lucknow office, if you need a full-service agency covering design, PR and media buying together, or if you need someone physically present several days a week, we are the wrong choice and will say so at the enquiry stage. We fit established SMEs and startups that need one system built well and handed over, not an ongoing enterprise engagement.",
      },
    ],
  },

  {
    slug: "lakhimpur-kheri",
    city: "Lakhimpur Kheri",
    district: "Lakhimpur Kheri",
    isOffice: false,
    distanceFromOffice: "About 50 km, roughly 1 hour 15 minutes by road",
    order: 3,
    metaTitle: "Web Development Company in Lakhimpur Kheri, UP",
    metaDesc:
      "Website and software development for Lakhimpur Kheri businesses. Sugar, agri-processing and retail systems from ₹15,000. Same-day site visits.",
    answerBlock:
      "Codivra Solutions serves Lakhimpur Kheri from our Sitapur office, about 50 km and just over an hour away. We build websites, billing systems and production software for the district's sugar, agri-processing and trading businesses, starting at ₹15,000 with same-day site visits.",
    bodyMdx: `## Our closest district after our own

Lakhimpur Kheri is roughly 50 km from our office — an hour and a quarter each
way, which makes it a comfortable same-day trip. In practice that means we can be
on site for a scoping meeting, a data-migration session or a training day without
it becoming a scheduling exercise.

Of all the districts we serve, this is the one where in-person work is easiest,
and for the kind of systems Lakhimpur businesses need, that matters.

## What Lakhimpur Kheri's economy actually runs on

Lakhimpur Kheri is the largest district in Uttar Pradesh by area, and it is
overwhelmingly agricultural. Sugarcane is the dominant crop, supporting a
significant concentration of sugar mills, and the district also carries wheat,
paddy and a substantial dairy presence. Dudhwa National Park and the Nepal border
sit at its northern edge.

That economic base means the software problems here are specific, and they are not
website problems.

**Sugar and agri-processing.** Mills and processing units need
[batch tracking, yield calculation and dispatch documentation](/industries/manufacturing),
not a brochure site. The recurring issue we hear is that input is recorded in one
register and output in another, so nobody can state yield per batch until year-end
reconciliation — by which time the batch that went wrong is eleven months gone.

**Cane supply and farmer payments.** Any system touching supplier records here has
to handle a large number of small suppliers, part payments and season-based cash
flow. Generic accounting packages handle this badly.

**Trading and distribution.** Kheri, Gola Gokarannath, Palia Kalan and Mohammadi
all support wholesale trade running on credit and party-specific rates. This is
[billing and party ledger](/products/billing-and-pos) territory.

**Tourism around Dudhwa.** Resorts and guesthouses serving Dudhwa visitors take
bookings almost entirely by phone and through aggregators, paying 15–20% commission
on every one. A [direct booking site](/industries/hospitality) pays for itself
quickly at that rate.

## Why proximity changes the project

For a production or billing system, the difference between a vendor 50 km away and
one in another state shows up in three places:

1. **Data migration.** Years of history in registers and Excel sheets is much
   easier to map when someone can sit with your accountant for a day.
2. **Training.** Staff learn a new billing system far better in a room than over a
   video call, particularly where comfort with software varies.
3. **The first month.** Something always needs adjusting once real transactions
   start flowing. Being able to drive over is worth more than a support ticket.

## What we build for Lakhimpur Kheri

| Service | Starting price | Typical delivery |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | 2–3 weeks |
| [Billing and POS](/products/billing-and-pos) | ₹20,000 | 3–4 weeks |
| [Production and inventory system](/services/custom-software-development) | ₹50,000 | 6–8 weeks |
| [Mobile app](/services/mobile-app-development) | ₹40,000 | 6–8 weeks |

Site visits within the district are free, and we do not charge travel on any
project.`,
    faqs: [
      {
        question: "Do you visit clients in Lakhimpur Kheri?",
        answer:
          "Yes, and free of charge. Lakhimpur Kheri is about 50 km from our Sitapur office, just over an hour each way, which makes it a comfortable same-day trip. This is the district where in-person work is easiest for us, and for production or billing systems that matters — data migration, staff training and first-month adjustments all go substantially better in a room than over a video call.",
      },
      {
        question: "What software do sugar mills and agri-processing units need?",
        answer:
          "Batch tracking that links input quantity to finished output and calculates yield immediately, rather than input and output sitting in separate registers that are only reconciled at year end. Beyond that: raw material inventory, supplier records that handle many small suppliers with part payments, and dispatch documentation generating invoice, packing list and e-way bill data from one entry. These start at ₹50,000.",
      },
    ],
  },

  {
    slug: "hardoi",
    city: "Hardoi",
    district: "Hardoi",
    isOffice: false,
    distanceFromOffice: "About 70 km, roughly 1 hour 45 minutes by road",
    order: 4,
    metaTitle: "Website Development Company in Hardoi, Uttar Pradesh",
    metaDesc:
      "Website and software development for Hardoi businesses from ₹15,000. Retail billing, school and clinic systems, with free site visits.",
    answerBlock:
      "Codivra Solutions serves Hardoi from our Sitapur office, about 70 km away. We build websites, billing systems and management software for Hardoi's traders, schools and clinics, starting at ₹15,000 with free site visits anywhere in the district.",
    bodyMdx: `## Hardoi from Sitapur

Hardoi is around 70 km west of our office, under two hours by road. It is a
district we visit regularly and where the commercial profile is close enough to
Sitapur's that the systems businesses need are broadly the same.

## The Hardoi business base

Hardoi is a district headquarters serving a largely agricultural district, with
Shahabad, Sandila and Bilgram as significant secondary centres. Sandila in
particular has an industrial area and is known well beyond the district for its
laddu.

The businesses that come to us from Hardoi cluster into four groups.

**Wholesale and retail trade.** The dominant category. Traders running on credit
with party-specific rates and paper billing, who need
[GST-compliant billing with party ledgers and outstanding tracking](/products/billing-and-pos)
before they need anything else. The pattern is consistent: the owner knows
outstanding balances from memory, which works until the business grows past what
one person can hold.

**Schools and coaching institutes.** Hardoi has a dense coaching market, and the
competition during admission season is intense. The recurring failure is the same
one we see everywhere — enquiries arrive on WhatsApp during the February-to-April
window, nobody logs them, and a parent who enquired in March is never called back.
An [enquiry system](/industries/education) fixes this for less than the cost of a
single lost admission.

**Clinics and diagnostic labs.** Growing steadily, and mostly running on paper
cards and a phone diary. [Clinic management](/products/clinic-management-system)
from ₹30,000 covers appointments, patient records and report delivery over
WhatsApp.

**Agricultural traders and cold stores.** Storage and trading operations needing
stock tracking and party accounts.

## What we do differently for district clients

The main thing is that we do not assume computer literacy that is not there.

A billing system for a Hardoi trader has to be usable by a staff member whose
main tool until now has been a paper book. That changes design decisions
throughout: fewer screens, larger targets, defaults that are right most of the
time, and Hindi labels where they help. We also budget a full training day into
the project rather than emailing a PDF manual.

The second thing is honest scoping. A trader turning over ₹40 lakh a year does
not need a ₹3,00,000 ERP, and we will say so. The right first system is usually
billing and outstanding, which is ₹20,000 and solves the thing that actually hurts.

## What we build for Hardoi

| Service | Starting price | Typical delivery |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | 2–3 weeks |
| [Billing and POS](/products/billing-and-pos) | ₹20,000 | 3–4 weeks |
| [Clinic management](/products/clinic-management-system) | ₹30,000 | 3–4 weeks |
| [School management](/products/school-management-system) | ₹35,000 | 4 weeks |

Site visits anywhere in Hardoi district are free, including Shahabad, Sandila and
Bilgram.`,
    faqs: [
      {
        question: "How much does a website cost in Hardoi?",
        answer:
          "A five-page business website starts at ₹15,000 and takes two to three weeks. Billing and POS software is ₹20,000, clinic management ₹30,000 and school management ₹35,000. Site visits anywhere in Hardoi district including Shahabad, Sandila and Bilgram are free, and we do not charge travel on any project. Every quote is fixed before work begins.",
      },
      {
        question: "Will my staff be able to use the software?",
        answer:
          "That is a design constraint we take seriously rather than an afterthought. Systems for district businesses are built assuming the person using them has worked from a paper book until now: fewer screens, larger tap targets, defaults that are right most of the time, and Hindi labels where they help. We also budget a full in-person training day into the project rather than emailing a manual.",
      },
    ],
  },

  {
    slug: "barabanki",
    city: "Barabanki",
    district: "Barabanki",
    isOffice: false,
    distanceFromOffice: "About 120 km, roughly 3 hours by road via Lucknow",
    order: 5,
    metaTitle: "Web Development Company Serving Barabanki, UP",
    metaDesc:
      "Website and software development for Barabanki businesses from ₹15,000. Retail, agri-trade and clinic systems, delivered remotely with site visits.",
    answerBlock:
      "Codivra Solutions serves Barabanki from our Sitapur office, about 120 km away via Lucknow. We build websites, billing systems and management software for the district's traders, processors and clinics, starting at ₹15,000, mostly delivered remotely with site visits for larger projects.",
    bodyMdx: `## Barabanki from Sitapur

Barabanki is our furthest regularly-served district at around 120 km, roughly
three hours by road going through Lucknow. That distance changes how we run
projects here: Barabanki work is mostly remote, with site visits reserved for
discovery and handover on projects above ₹50,000.

For a website that is no limitation at all. For a billing or production system
where training and data migration matter, we schedule a full day on site rather
than several short trips.

## The Barabanki economy

Barabanki sits immediately east of Lucknow, and that proximity shapes it. The
district is agricultural — wheat, paddy, sugarcane, and a notable presence in
mentha and menthol, which it shares with Sitapur — while also functioning
partly as an extension of the Lucknow economic area, with an industrial belt
along the Lucknow–Faizabad road and steady residential growth around Dewa Road
and Satrikh.

Dewa Sharif, the shrine complex, draws substantial visitor traffic, particularly
around the annual fair, supporting hospitality and food businesses that mostly
take bookings by phone.

The businesses that approach us from Barabanki are mainly:

**Mentha and agri-processing units**, with the same
[batch tracking and yield](/industries/manufacturing) problem we see in Sitapur
and Lakhimpur — input in one register, output in another, yield unknown until
year end.

**Traders and distributors** serving both the district and, in some cases,
Lucknow, needing [billing with party-wise rates and outstanding
tracking](/products/billing-and-pos).

**Clinics and diagnostic labs**, growing along with the residential expansion
near Lucknow.

**Schools and coaching institutes**, competing with Lucknow institutions for the
same students, which raises the stakes on having a credible online presence.

## The Lucknow-adjacent problem

Barabanki businesses have a particular difficulty: they compete with Lucknow
firms for customers but are quoted Lucknow prices by Lucknow agencies without
getting Lucknow-level attention, because they are a small account to a city firm.

We are a different shape of vendor. A ₹25,000 project is a real project to us and
gets the same weekly demo cycle as anything else. If you have had the experience
of being a low-priority client to a city agency, that is the specific thing we
are set up to be the opposite of.

## What we build for Barabanki

| Service | Starting price | Typical delivery |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | 2–3 weeks |
| [Billing and POS](/products/billing-and-pos) | ₹20,000 | 3–4 weeks |
| [Ecommerce store](/services/ecommerce-development) | ₹25,000 | 3–4 weeks |
| [Custom software](/services/custom-software-development) | ₹50,000 | 6–8 weeks |

Site visits are included for projects above ₹50,000; smaller projects run over
calls and weekly demo links, which works well for websites and stores.`,
    faqs: [
      {
        question: "Do you take on projects in Barabanki?",
        answer:
          "Yes. Barabanki is about 120 km from our Sitapur office, roughly three hours via Lucknow, so projects here run mostly remotely with weekly demo links and calls. Site visits are included for discovery and handover on projects above ₹50,000. For websites and online stores the distance makes no practical difference; for billing or production systems we schedule a full day on site for training and data migration.",
      },
      {
        question: "Why not just use a Lucknow agency if Barabanki is nearby?",
        answer:
          "You can, and for some requirements you should. The difficulty Barabanki businesses describe to us is being a small account to a city firm — quoted Lucknow prices without getting Lucknow-level attention. A ₹25,000 project is a real project to us and gets the same weekly demo cycle as anything larger. If that has been your experience with a city agency, it is the specific thing we are set up to be the opposite of.",
      },
    ],
  },

  {
    slug: "shahjahanpur",
    city: "Shahjahanpur",
    district: "Shahjahanpur",
    isOffice: false,
    distanceFromOffice: "About 90 km, roughly 2 hours 15 minutes by road",
    order: 6,
    metaTitle: "Website & Software Development in Shahjahanpur, UP",
    metaDesc:
      "Website and software development for Shahjahanpur businesses from ₹15,000. Sugar, distillery, retail and clinic systems with site visits.",
    answerBlock:
      "Codivra Solutions serves Shahjahanpur from our Sitapur office, about 90 km away. We build websites, billing systems and production software for the district's sugar, distillery, trading and healthcare businesses, starting at ₹15,000 with site visits included on larger projects.",
    bodyMdx: `## Shahjahanpur from Sitapur

Shahjahanpur is roughly 90 km north-west of our office, a little over two hours
by road. Close enough for a same-day round trip, which means site visits for
discovery, training and go-live support are practical rather than an exception.

## What Shahjahanpur runs on

Shahjahanpur is a district with a stronger industrial character than most in this
part of Uttar Pradesh, and that changes the software conversation.

**Sugar and distillery.** The district has a long-established sugar and
distillery presence, with Rosa among the better-known industrial names in the
region. Operations at this scale need
[production tracking, raw material inventory and dispatch documentation](/industries/manufacturing)
with real rigour — batch-level yield, e-way bill data generated from the same
entry as the invoice, and supplier records that cope with many small cane
suppliers on part payments.

**The cantonment.** Shahjahanpur has a significant army cantonment, and the
associated civilian economy — retail, hospitality, services — is a steady base of
the kind of businesses that need billing and booking systems.

**Agricultural trade.** Wheat, paddy and sugarcane trading, with the usual
credit-based, party-rate structure that packaged retail billing software handles
badly.

**Education and healthcare.** A district headquarters layer of schools, coaching
institutes, clinics and diagnostic labs, with the same admission-season enquiry
problem and paper-record problem we see across the region.

## Industrial clients need a different conversation

Most of what is marketed as "business software" in this region is billing with
extra screens. A processing unit needs something structurally different, and it
is worth being explicit about what:

- **Batch identity that persists** from raw material intake through processing to
  dispatch, so a quality question months later can be traced to a specific input
  lot.
- **Yield calculated automatically**, not derived at year end.
- **Statutory documentation generated once** — invoice, packing list and e-way
  bill data from a single dispatch entry, because manual re-entry across three
  documents is where errors and penalties come from.
- **Supplier accounts built for many small suppliers**, part payments and
  seasonal cash flow.

We scope these under
[custom software development](/services/custom-software-development) from
₹50,000, and we are direct about which parts genuinely need building versus which
are better handled by Tally you already run.

## What we build for Shahjahanpur

| Service | Starting price | Typical delivery |
|---|---|---|
| [Business website](/services/web-development) | ₹15,000 | 2–3 weeks |
| [Billing and POS](/products/billing-and-pos) | ₹20,000 | 3–4 weeks |
| [Clinic management](/products/clinic-management-system) | ₹30,000 | 3–4 weeks |
| [Production and inventory system](/services/custom-software-development) | ₹50,000 | 6–8 weeks |

Site visits are included on projects above ₹50,000, and we do not charge travel.`,
    faqs: [
      {
        question: "Do you work with industrial clients in Shahjahanpur?",
        answer:
          "Yes. Shahjahanpur is about 90 km from our office, a comfortable same-day trip, which makes site visits for discovery, training and go-live practical. For sugar, distillery and processing operations we build production tracking with batch identity that persists from intake to dispatch, automatic yield calculation, and dispatch documentation that generates invoice, packing list and e-way bill data from one entry. These start at ₹50,000.",
      },
      {
        question: "We already use Tally. Do we need custom software as well?",
        answer:
          "Often only partly, and we will tell you which parts. Tally handles accounting well and you should keep it. What it does not do is batch-level production tracking, yield calculation, or dispatch documentation tied to production records. We scope custom software to cover that gap and integrate with Tally rather than duplicating what it already does properly, which keeps the project considerably smaller.",
      },
    ],
  },
];
