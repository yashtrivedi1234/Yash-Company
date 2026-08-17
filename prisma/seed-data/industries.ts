import type { SeedIndustry } from "./types";

/**
 * Eight industries chosen because they are the businesses that actually exist
 * around Sitapur — not a generic vertical list. Pain points are written from
 * what these operators tell us on discovery calls.
 *
 * CONTENT DEBT: bodies run ~350 words against a ~900 word target.
 */
export const industries: SeedIndustry[] = [
  {
    slug: "education",
    name: "Education",
    shortDesc: "Schools, colleges and coaching institutes.",
    iconName: "GraduationCap",
    order: 1,
    metaTitle: "Software for Schools & Coaching Institutes in UP",
    metaDesc:
      "School management software, websites and admission systems for schools and coaching institutes in Sitapur and Uttar Pradesh. From ₹15,000.",
    answerBlock:
      "Codivra builds software for schools, colleges and coaching institutes across Uttar Pradesh: admission enquiry systems, fee management, attendance, result publishing and parent communication. Our school management system starts at ₹35,000 and a school website at ₹15,000, both delivered within four weeks.",
    services: ["web-development", "custom-software-development", "mobile-app-development", "seo-and-digital-marketing"],
    painPoints: [
      {
        problem: "Admission enquiries arrive on WhatsApp and get lost",
        consequence:
          "A parent who enquired in March is never followed up, and enrols elsewhere in April.",
        solution:
          "An enquiry system that captures every lead with source, assigns follow-up owners and shows which are going cold.",
      },
      {
        problem: "Fee collection is tracked in a register or an Excel sheet",
        consequence:
          "Nobody can answer 'how much is outstanding this quarter' without a day of manual reconciliation.",
        solution:
          "Fee management with receipts, instalment plans, automatic reminders and a live outstanding report.",
      },
      {
        problem: "Parents call the office for results, timetables and notices",
        consequence:
          "Front-desk staff spend most of the day repeating the same information.",
        solution:
          "A parent portal or app where results, attendance, fees and notices are visible without a phone call.",
      },
      {
        problem: "The school has no website, or one last updated in 2019",
        consequence:
          "Parents comparing schools online find nothing credible and move on.",
        solution:
          "A website with current photos, faculty, results and an admission form that reaches the right person.",
      },
    ],
    bodyMdx: `## What education software actually needs to do here

Most school software is sold on feature lists. In practice, three things
determine whether it gets used after the first month.

**It has to work on the phone the clerk actually has.** Not a desktop in the
accounts room — a mid-range Android phone on a patchy connection. If fee entry
requires sitting at a computer, it will be done at the end of the week from a
paper register, which defeats the point.

**Parents must not need training.** A parent portal that requires a manual is a
parent portal nobody uses. The realistic bar is: a link over WhatsApp opens a
page showing this child's fees and attendance, with no login to remember.

**It has to survive the admission season.** February to April is when the system
is under real load and when staff have least patience for anything slow.

## What we build for schools and institutes

- **[School management system](/products/school-management-system)** — admissions,
  fees, attendance, results, parent communication. From ₹35,000.
- **School and institute websites** — see
  [web development](/services/web-development) from ₹15,000, with an admission
  enquiry form that routes to a named person rather than a shared inbox.
- **Parent and student mobile apps** under
  [mobile app development](/services/mobile-app-development) from ₹40,000.
- **Admission-season campaigns** — landing pages and Google Ads under
  [SEO and digital marketing](/services/seo-and-digital-marketing).

## Coaching institutes have a different problem

For a coaching institute, the pressure is not administration — it is proof.
Parents choose on results, and results need to be visible and credible. That
means a site that shows named students, their scores and the year, updated every
cycle. A results page last touched two years ago actively costs enrolments.

Batch scheduling, test scoring and attendance follow-up matter more than a full
school ERP, so we usually scope a smaller system.

## Related reading

- [What school management software should cost](/blog/school-management-software-cost)`,
    faqs: [
      {
        question: "How much does school management software cost in India?",
        answer:
          "Our school management system starts at ₹35,000 as a one-time cost covering admissions, fee management, attendance, results and parent communication, typically live within four weeks including data migration from your existing registers or Excel sheets. Per-student subscription products often work out more expensive over three years for a school of any size, which is worth calculating before committing to one.",
      },
      {
        question: "Can parents check fees and attendance without an app?",
        answer:
          "Yes, and for most schools that is the better choice. We build a parent portal that opens from a WhatsApp link and shows that child's fees, attendance and results without a login to remember or an app to install. Installing an app is a real barrier for many parents; a link that just works removes it. A dedicated app makes sense once the school also wants push notifications.",
      },
      {
        question: "Do you build websites for coaching institutes?",
        answer:
          "Yes, and the emphasis differs from a school site. Coaching enrolment turns on visible proof, so the site is built around a results section showing named students, scores and year, structured so your staff can update it each cycle without calling us. Batch schedules, faculty credentials and a clear enquiry path matter more than a full administrative system. These start at ₹15,000.",
      },
    ],
  },

  {
    slug: "healthcare",
    name: "Healthcare",
    shortDesc: "Clinics, diagnostic labs, pharmacies and hospitals.",
    iconName: "Stethoscope",
    order: 2,
    metaTitle: "Software for Clinics, Labs & Hospitals in Uttar Pradesh",
    metaDesc:
      "Clinic management software, appointment booking and lab report systems for healthcare providers in Sitapur and UP. From ₹30,000.",
    answerBlock:
      "Codivra builds clinic and diagnostic lab software across Uttar Pradesh: appointment booking, patient records, prescription printing and report delivery over WhatsApp. Our clinic management system starts at ₹30,000, and patient data stays on infrastructure hosted in India.",
    services: ["custom-software-development", "web-development", "mobile-app-development", "ai-ml-solutions"],
    painPoints: [
      {
        problem: "Appointments are managed in a diary at the front desk",
        consequence:
          "Double bookings, long waits, and no way to know who did not turn up.",
        solution:
          "Online booking with slot limits, automatic WhatsApp reminders and a no-show record.",
      },
      {
        problem: "Patient history is on paper cards that go missing",
        consequence:
          "The doctor re-takes history every visit and past investigations get repeated.",
        solution:
          "Digital patient records searchable by phone number, with previous visits and reports attached.",
      },
      {
        problem: "Lab reports are collected in person",
        consequence:
          "Patients travel back for a single sheet of paper, and staff field constant 'is it ready' calls.",
        solution:
          "Reports delivered as a secure WhatsApp or SMS link as soon as they are verified.",
      },
      {
        problem: "No online presence, so new patients cannot find or verify the clinic",
        consequence:
          "Patients searching for a specialist nearby find competitors with a Google listing and reviews.",
        solution:
          "A clinic website plus an optimised Google Business Profile with genuine reviews.",
      },
    ],
    bodyMdx: `## Patient data has to be handled seriously

This is the part of healthcare software people skip, and it is the part that
matters most.

Under India's Digital Personal Data Protection Act, patient records are personal
data with real obligations attached. Practically, that means:

- **Data hosted in India.** We deploy healthcare systems to Indian regions —
  [AWS](/technologies/aws) Mumbai or an equivalent — rather than wherever is
  cheapest.
- **Access control that is real.** A receptionist should see appointments, not
  clinical notes. Roles are enforced in the database, not hidden in the interface.
- **An audit trail.** Who opened which record, and when.
- **Encrypted backups** with restores actually tested, not merely configured.

A clinic system that stores patient histories in a spreadsheet on a shared laptop
is a liability, and it is what we most often find when we audit.

## What we build for healthcare providers

- **[Clinic management system](/products/clinic-management-system)** —
  appointments, patient records, prescriptions, billing. From ₹30,000.
- **Diagnostic lab systems** — sample tracking, report generation, WhatsApp
  delivery, under [custom software](/services/custom-software-development).
- **Clinic and hospital websites** from ₹15,000 with doctor profiles, timings and
  online booking.
- **[Document automation](/services/ai-ml-solutions)** for reading prescriptions
  and lab forms into structured records, always with human review before commit.

## WhatsApp is the channel that works

For clinics in Sitapur, Hardoi and Lakhimpur, WhatsApp beats email and beats an
app. Patients already have it, it needs no installation, and message open rates
are far higher than SMS.

We use it for appointment confirmations, reminders the evening before, report-ready
notifications and follow-up prompts. Report links are single-use and expire, so a
forwarded message does not expose someone's results indefinitely.

## Related reading

- [AI features a small business can actually afford in 2026](/blog/affordable-ai-small-business)`,
    faqs: [
      {
        question: "How much does clinic management software cost?",
        answer:
          "Our clinic management system starts at ₹30,000 as a one-time cost covering appointments, patient records, prescription printing and billing, usually live within three to four weeks. Larger multi-doctor or multi-branch setups with lab integration are quoted under custom software development from ₹50,000. Hosting on Indian infrastructure adds roughly ₹1,500 to ₹3,000 a month depending on volume.",
      },
      {
        question: "Is patient data safe and legally compliant?",
        answer:
          "It has to be handled deliberately. We host healthcare systems in Indian regions so data does not leave the country, enforce role-based access in the database rather than merely hiding buttons, keep an audit trail of who opened which record, and test backup restores rather than only configuring backups. Under the Digital Personal Data Protection Act these are obligations, not optional features.",
      },
      {
        question: "Can patients get lab reports on WhatsApp?",
        answer:
          "Yes, and for most labs in this region it is the single highest-value feature. As soon as a report is verified, the patient receives a secure link rather than travelling back for a printout. Links are single-use and expire, so a forwarded message does not leave someone's results exposed indefinitely. It also removes most of the 'is my report ready' calls that occupy front-desk staff.",
      },
    ],
  },

  {
    slug: "retail-and-wholesale",
    name: "Retail & Wholesale",
    shortDesc: "Shops, distributors and wholesale traders.",
    iconName: "Store",
    order: 3,
    metaTitle: "Billing, POS & Ecommerce Software for UP Retailers",
    metaDesc:
      "Billing software, POS and online stores for retailers and wholesalers in Sitapur and Uttar Pradesh. GST-compliant, from ₹20,000.",
    answerBlock:
      "Codivra builds billing, POS and ecommerce systems for retailers and wholesalers across Uttar Pradesh. Our GST-compliant billing and POS system starts at ₹20,000 and an online store at ₹25,000, both handling multi-rate GST, dealer pricing and stock tracking.",
    services: ["ecommerce-development", "custom-software-development", "web-development", "seo-and-digital-marketing"],
    painPoints: [
      {
        problem: "Billing is done on a paper book or a basic offline tool",
        consequence: "No stock visibility, and GST filing becomes a monthly scramble.",
        solution: "GST-compliant billing that updates stock on every sale and exports filing-ready data.",
      },
      {
        problem: "Wholesale customers each have different negotiated rates",
        consequence: "Rates live in the owner's head, so nobody else can bill correctly.",
        solution: "Customer-specific price lists applied automatically at billing.",
      },
      {
        problem: "Stock counts are only known after a physical count",
        consequence: "Fast movers run out and slow movers tie up capital.",
        solution: "Live stock with low-stock alerts and reorder suggestions from actual sales history.",
      },
      {
        problem: "Customers ask if you deliver, and there is nowhere to send them",
        consequence: "Business goes to competitors who are findable online.",
        solution: "An online catalogue or store with WhatsApp ordering and delivery area rules.",
      },
    ],
    bodyMdx: `## Wholesale is not retail with bigger numbers

Off-the-shelf billing software is built for retail: one price per product, cash
or card, walk-in customer. Wholesale in Uttar Pradesh does not work that way, and
this is where most packaged tools break down.

**Every customer has a different rate.** Negotiated per party, sometimes per
product, sometimes as a slab by quantity. A system that cannot express that gets
abandoned within a month.

**Credit is the norm.** Goods go out, payment comes later, part payments arrive
against several bills. Outstanding tracking by party is not a report — it is the
core of the system.

**Returns and rate differences are routine.** Credit notes need to be as easy as
invoices.

**Units vary.** Sold by piece, billed by carton, stocked by kilogram. Conversions
have to be built in rather than done mentally.

We build for these directly rather than asking you to work around them.

## GST is the part that has to be exactly right

Every system we build produces invoices carrying your GSTIN, per-product HSN
codes, and the correct CGST/SGST or IGST split based on the place of supply.
Multi-rate bills — items at 5%, 12% and 18% on one invoice — are handled
properly, and monthly data exports in a form your accountant can file from.

This is not a differentiator, it is the minimum. It is worth stating because we
regularly audit systems that get the interstate split wrong.

## What we build for traders

- **[Billing and POS system](/products/billing-and-pos)** — GST billing, stock,
  party ledgers, outstanding reports. From ₹20,000.
- **[Online stores](/services/ecommerce-development)** with Razorpay or PhonePe,
  COD, and delivery-area rules. From ₹25,000.
- **Distributor portals** where your dealers place orders themselves and see
  their own rates and outstanding balances.
- **[Local SEO](/services/seo-and-digital-marketing)** so people searching for
  what you sell nearby actually find you.

## Related reading

- [Why a small business in Sitapur needs a website](/blog/small-business-website-sitapur)`,
    faqs: [
      {
        question: "Can your billing software handle GST properly?",
        answer:
          "Yes. Invoices carry your GSTIN and per-product HSN codes, and apply the correct CGST/SGST or IGST split based on the place of supply. Multi-rate bills with items at 5%, 12% and 18% on a single invoice are handled correctly, as are credit notes for returns and rate differences. Monthly exports come out in a form your accountant can file from directly.",
      },
      {
        question: "Can I set different prices for different wholesale customers?",
        answer:
          "Yes, and it is built in rather than worked around. You can define customer-specific price lists, per-product negotiated rates, and quantity slabs, all applied automatically at billing. This is the single most common reason packaged retail billing software gets abandoned by wholesalers within a month — it assumes one price per product, which is not how wholesale trade in Uttar Pradesh works.",
      },
      {
        question: "Do I need an online store or is WhatsApp enough?",
        answer:
          "WhatsApp is genuinely enough for many traders, and we will say so. It becomes limiting when you are retyping the same catalogue repeatedly, when order details get lost in chat threads, or when customers ask for prices outside working hours. An online catalogue with WhatsApp ordering is a useful middle step from around ₹25,000 — customers browse and confirm on WhatsApp, so nothing about how you actually sell changes.",
      },
    ],
  },

  {
    slug: "real-estate",
    name: "Real Estate",
    shortDesc: "Builders, brokers and property developers.",
    iconName: "Building2",
    order: 4,
    metaTitle: "Websites & CRM for Real Estate Builders in UP",
    metaDesc:
      "Property listing websites and lead management CRM for builders and brokers in Sitapur, Lucknow and Uttar Pradesh. From ₹20,000.",
    answerBlock:
      "Codivra builds property listing websites and lead-management CRMs for builders and brokers across Uttar Pradesh. Listing sites start at ₹20,000 with photo galleries, floor plans and location maps, plus a CRM that tracks every enquiry from first call to booking.",
    services: ["web-development", "custom-software-development", "seo-and-digital-marketing", "ui-ux-design"],
    painPoints: [
      {
        problem: "Enquiries come from portals, boards, referrals and calls with no single record",
        consequence: "Nobody knows which source produced actual bookings, so marketing spend is guesswork.",
        solution: "A CRM capturing every enquiry with its source, tracked through to booking.",
      },
      {
        problem: "Property details are shared as photos over WhatsApp",
        consequence: "Buyers cannot compare properly and serious enquiries drop off.",
        solution: "A listing site with galleries, floor plans, specifications and location maps.",
      },
      {
        problem: "Follow-up depends on whichever salesperson remembers",
        consequence: "Buyers with a six-month decision cycle are forgotten by month two.",
        solution: "Scheduled follow-up reminders and a visible pipeline by stage.",
      },
      {
        problem: "No proof of completed projects",
        consequence: "Buyers cannot judge credibility and default to larger, known builders.",
        solution: "A completed-projects section with real photography and handover dates.",
      },
    ],
    bodyMdx: `## The decision cycle is long, so the follow-up system is the product

Property buying takes months. A buyer enquires in June and books in November,
and the difference between a builder who closes that and one who does not is
almost never the property — it is whether anyone followed up in September.

That is why we treat the CRM as the primary system and the website as the
capture surface for it, rather than the other way round.

A working pipeline for a builder or broker needs:

- **Every enquiry, with its source.** Portal, hoarding, referral, walk-in, site
  visit. Without this you cannot tell which spend is working.
- **Stages that match reality** — enquiry, site visit scheduled, visited,
  negotiation, booking, agreement, registry.
- **Scheduled follow-ups** that surface the buyer nobody has called in three
  weeks.
- **Ownership per lead**, so nothing sits in a shared inbox belonging to no one.

## What buyers look for on a listing page

From what actually gets clicked: photographs first, then location, then price,
then floor plan. Specifications and amenities are read last, if at all.

So listing pages get real photography treated as the priority, an embedded map
showing genuine surroundings rather than a pin in a field, a stated price or an
honest range, and a floor plan that opens properly on a phone. Under RERA,
registration numbers and approved plans must also be displayed, which we build
into the template rather than leaving to the person adding listings.

## What we build for builders and brokers

- **Listing websites** from ₹20,000 under
  [web development](/services/web-development), with an admin panel so your team
  adds properties without calling us.
- **Lead management CRM** under
  [custom software](/services/custom-software-development) from ₹50,000.
- **[Local SEO](/services/seo-and-digital-marketing)** for "flats in Sitapur"
  style searches, which convert far better than portal traffic.`,
    faqs: [
      {
        question: "Do I need a website if I already list on property portals?",
        answer:
          "Portals bring volume but you compete on the same page as everyone else, pay per lead, and own none of the relationship. Your own site is where you show completed projects, credibility and RERA details, and where a buyer who heard your name from a friend goes to check you are real. Most builders we work with use both: portals for reach, their own site for conversion and trust.",
      },
      {
        question: "How much does a real estate website cost?",
        answer:
          "A property listing website with galleries, floor plans, location maps and an admin panel for adding listings starts at ₹20,000 and takes two to three weeks. Adding a lead management CRM that tracks enquiries by source through to booking is quoted under custom software from ₹50,000. For most builders the CRM matters more than the website, because the long decision cycle means follow-up is what closes deals.",
      },
    ],
  },

  {
    slug: "automobile",
    name: "Automobile",
    shortDesc: "Dealers, service centres and spare parts businesses.",
    iconName: "Car",
    order: 5,
    metaTitle: "Software for Car & Bike Dealers in Uttar Pradesh",
    metaDesc:
      "Websites, service booking and inventory software for automobile dealers and service centres in Sitapur and UP. From ₹15,000.",
    answerBlock:
      "Codivra builds websites, service booking systems and parts inventory software for automobile dealers and service centres across Uttar Pradesh. Dealer websites start at ₹15,000 and service management systems at ₹50,000, including job cards and service reminders.",
    services: ["web-development", "custom-software-development", "seo-and-digital-marketing", "mobile-app-development"],
    painPoints: [
      {
        problem: "Service bookings are taken over the phone with no schedule visibility",
        consequence: "Bays are overbooked some days and idle others.",
        solution: "Online service booking with real bay capacity and automatic confirmations.",
      },
      {
        problem: "Customers are never reminded when a service is due",
        consequence: "They drift to a local garage and the workshop loses recurring revenue.",
        solution: "Automatic service reminders by WhatsApp based on date and kilometres.",
      },
      {
        problem: "Spare parts stock is not tracked against jobs",
        consequence: "Parts go missing and margins are impossible to calculate per job.",
        solution: "Parts inventory linked to job cards with per-job consumption and costing.",
      },
      {
        problem: "No online presence for a dealership people search for by name",
        consequence: "Customers cannot find timings, offers or which models are in stock.",
        solution: "A dealership site plus a Google Business Profile with current stock and offers.",
      },
    ],
    bodyMdx: `## Service reminders are the highest-return feature

For a workshop, the whole economics turn on repeat servicing. A customer who
services with you three times is worth several times one who comes once.

Almost nobody in this market does the reminder systematically. A WhatsApp message
saying "your Swift is due for service this month, reply to book a slot" costs
effectively nothing and reliably brings a share of lapsed customers back. It is
the cheapest feature we build and consistently the one with the clearest return.

Reminders need to work on **both date and kilometres**, because a commercial
vehicle covering 4,000 km a month and a family car covering 400 are not on the
same schedule.

## Job cards are where the money leaks

A workshop without proper job cards cannot tell you which jobs made money. Parts
get consumed without being billed, labour hours are estimated afterwards, and the
monthly figure is a single number with no explanation.

A job card system links each job to the vehicle, the customer, the parts
consumed, the labour recorded and the final bill. Once that exists you can see
per-job margin, which mechanics are efficient, and which parts move.

## What we build for the automobile trade

- **Dealership and workshop websites** from ₹15,000 under
  [web development](/services/web-development), with current stock, offers and a
  booking form.
- **Service management** under
  [custom software](/services/custom-software-development) from ₹50,000 — job
  cards, bay scheduling, parts inventory, reminders.
- **[Local SEO](/services/seo-and-digital-marketing)** — "car service near me"
  searches are overwhelmingly map-pack driven, which is where a properly
  maintained Google Business Profile wins.`,
    faqs: [
      {
        question: "What software does a car service centre need?",
        answer:
          "At minimum, job cards linking each job to the vehicle, customer, parts consumed and labour recorded, because without that you cannot tell which jobs made money. Beyond that, bay scheduling prevents overbooking, parts inventory stops leakage, and automatic service reminders by WhatsApp bring lapsed customers back. That last one is the cheapest feature to build and consistently gives the clearest return.",
      },
      {
        question: "How do service reminders work?",
        answer:
          "The system tracks each vehicle's last service by both date and kilometres, then sends a WhatsApp message when the next is due with a link to book a slot. Tracking both matters because a commercial vehicle covering 4,000 km a month and a family car covering 400 are not on the same schedule. Messages go out automatically, so it does not depend on anyone remembering to check a register.",
      },
    ],
  },

  {
    slug: "manufacturing",
    name: "Manufacturing & Agri-processing",
    shortDesc: "Small manufacturers, mills and agri-processing units.",
    iconName: "Factory",
    order: 6,
    metaTitle: "Software for Manufacturers & Mills in Uttar Pradesh",
    metaDesc:
      "Production tracking, inventory and dispatch software for manufacturers and agri-processing units in Sitapur and UP. From ₹50,000.",
    answerBlock:
      "Codivra builds production tracking, raw material inventory and dispatch software for small manufacturers and agri-processing units across Uttar Pradesh. Systems start at ₹50,000 and cover batch tracking, yield calculation, party ledgers and GST-compliant dispatch documentation.",
    services: ["custom-software-development", "web-development", "ai-ml-solutions"],
    painPoints: [
      {
        problem: "Raw material input and finished output are recorded in separate registers",
        consequence: "Yield per batch is unknown, so losses go unnoticed for months.",
        solution: "Batch tracking linking input quantity to output with automatic yield calculation.",
      },
      {
        problem: "Dispatch documentation is prepared manually for every consignment",
        consequence: "Errors on e-way bills and invoices cause delays and penalties.",
        solution: "Dispatch module generating invoice, packing list and e-way bill data from one entry.",
      },
      {
        problem: "Procurement decisions are made from memory",
        consequence: "Raw material is bought at the wrong time and working capital sits in a godown.",
        solution: "Consumption history with reorder points based on actual usage rates.",
      },
      {
        problem: "Buyers cannot verify the unit exists or what it produces",
        consequence: "Larger buyers requiring due diligence go elsewhere.",
        solution: "A company site with capacity, certifications, product specs and real facility photos.",
      },
    ],
    bodyMdx: `## Yield is the number that matters

For a mill or processing unit, yield per batch is the difference between profit
and loss, and it is the number most units cannot state accurately.

The reason is structural rather than careless: input is recorded in the purchase
register, output in the production register, and nobody joins them. By the time
the accountant reconciles at year end, the batch where yield dropped four percent
is eleven months gone and nobody remembers what was different about it.

A batch tracking system records input quantity and quality, links it to output,
and calculates yield immediately. When a batch comes in low you see it that day,
while the cause — a supplier lot, a machine setting, an operator — is still
identifiable.

## Seasonality is the other half

Agri-processing runs on a season. Procurement, storage and working capital all
have to be planned around it, and the planning is usually done from memory and
last year's rough sense.

With two or more years of history in a system, [demand
forecasting](/services/ai-ml-solutions) becomes viable — not as a novelty, but as
a procurement plan you can put a number against. We always benchmark it against
a naive "same as last year" baseline and tell you honestly if the model does not
beat it.

## What we build for manufacturers

- **Production and inventory systems** under
  [custom software](/services/custom-software-development) from ₹50,000 — batch
  tracking, raw material stock, yield reporting, dispatch documentation.
- **Party ledgers and outstanding tracking** for buyers on credit.
- **Company websites** from ₹15,000 with capacity, certifications and product
  specifications, which larger buyers genuinely check.
- **[Forecasting](/services/ai-ml-solutions)** once there is enough history to
  justify it.`,
    faqs: [
      {
        question: "What is batch tracking and why does it matter?",
        answer:
          "Batch tracking records the quantity and quality of raw material going into a production run, links it to the finished output, and calculates yield immediately. Most units record input and output in separate registers that are never joined, so a batch where yield dropped four percent is only noticed at year-end reconciliation, long after the cause — a supplier lot, a machine setting, an operator — could still be identified.",
      },
      {
        question: "Can software help plan seasonal procurement?",
        answer:
          "Once you have two or more years of consumption and sales history in a system, yes. Forecasting can turn that into a procurement plan with actual numbers rather than a rough sense of last year. We always build a naive 'same as last year' baseline first and compare honestly — if the model does not clearly beat it, we say so rather than shipping something that looks sophisticated and predicts nothing.",
      },
    ],
  },

  {
    slug: "hospitality",
    name: "Hospitality",
    shortDesc: "Hotels, restaurants, banquet halls and resorts.",
    iconName: "UtensilsCrossed",
    order: 7,
    metaTitle: "Websites & Booking Software for Hotels in UP",
    metaDesc:
      "Hotel websites, direct booking engines and restaurant ordering systems for Sitapur and Uttar Pradesh. From ₹15,000.",
    answerBlock:
      "Codivra builds hotel websites with direct booking, restaurant ordering systems and banquet enquiry management across Uttar Pradesh. Sites start at ₹15,000 with a booking engine that takes reservations without the 15–20% commission an aggregator charges.",
    services: ["web-development", "ecommerce-development", "seo-and-digital-marketing", "ui-ux-design"],
    painPoints: [
      {
        problem: "All bookings come through aggregators",
        consequence: "15–20% of every booking goes in commission and you never own the guest relationship.",
        solution: "A direct booking engine on your own site, promoted to past guests.",
      },
      {
        problem: "Banquet and event enquiries arrive by phone with no record",
        consequence: "Enquiries for dates months ahead are forgotten and the hall sits empty.",
        solution: "Enquiry capture with an availability calendar and follow-up reminders.",
      },
      {
        problem: "The menu is a photo of a printed card",
        consequence: "It is unreadable on a phone and cannot be updated when prices change.",
        solution: "A digital menu with a QR code, updatable from a phone in seconds.",
      },
      {
        problem: "Photographs do not reflect the property",
        consequence: "Guests arrive with wrong expectations and leave poor reviews.",
        solution: "A site built around honest photography, with reviews shown openly.",
      },
    ],
    bodyMdx: `## The commission maths

An aggregator taking 18% on a ₹3,000 room night costs ₹540. At twenty such
bookings a month that is ₹10,800 — ₹1,29,600 a year, more than the cost of a
website with a booking engine several times over.

This does not mean leaving aggregators. They bring genuine discovery and you
should stay on them. It means giving guests who already know your name somewhere
to book directly, and giving past guests a reason to come back through your own
channel.

The practical pattern that works:

1. Aggregators bring the first booking.
2. You capture the guest's phone number at check-in.
3. You message them directly before the next season with a rate better than the
   aggregator's, which still nets you more.

That third step needs a booking engine and a guest list. Both are inexpensive.

## Restaurants: the QR menu is the whole thing

For a restaurant, the highest-value digital asset is a menu that opens instantly
on a phone from a QR code on the table. Not a PDF that downloads, not a photo of
a printed card — a page that loads in under a second and can be edited when the
paneer price changes.

Add online ordering for takeaway under
[ecommerce development](/services/ecommerce-development) and you have most of
what a local restaurant actually needs.

## What we build for hospitality

- **Hotel and resort websites** from ₹15,000 with a direct booking engine, room
  types, rates and honest galleries.
- **Restaurant sites with QR menus** and takeaway ordering.
- **Banquet enquiry management** with an availability calendar so two enquiries
  for the same date cannot both be confirmed.
- **[Local SEO](/services/seo-and-digital-marketing)** — hotel and restaurant
  search is overwhelmingly map-driven, so the Google Business Profile matters
  more than the website for discovery.`,
    faqs: [
      {
        question: "How do I get direct bookings instead of paying aggregator commission?",
        answer:
          "Keep the aggregators for discovery but give guests who already know your name somewhere to book directly. That needs a booking engine on your own site and a guest list captured at check-in, so you can message past guests before the next season with a rate that still nets you more than an aggregator booking would. At 18% commission on twenty ₹3,000 room nights a month, that is around ₹1,29,600 a year.",
      },
      {
        question: "What does a hotel website with booking cost?",
        answer:
          "A hotel or resort website with room types, rates, galleries and a direct booking engine starts at ₹15,000 and takes two to three weeks. Payment gateway integration so guests can pay a deposit online is an ₹8,000 add-on. For most properties in this region the booking engine pays for itself within the first few months purely on avoided commission.",
      },
    ],
  },

  {
    slug: "professional-services",
    name: "Professional Services",
    shortDesc: "Chartered accountants, lawyers and consultants.",
    iconName: "Briefcase",
    order: 8,
    metaTitle: "Websites & Practice Software for CAs and Lawyers in UP",
    metaDesc:
      "Professional websites, client portals and practice management software for CAs, lawyers and consultants in Sitapur and UP. From ₹15,000.",
    answerBlock:
      "Codivra builds websites, secure client portals and practice management software for chartered accountants, lawyers and consultants across Uttar Pradesh. Professional sites start at ₹15,000 and client portals at ₹50,000, with document handling that keeps client files off WhatsApp.",
    services: ["web-development", "custom-software-development", "seo-and-digital-marketing", "ai-ml-solutions"],
    painPoints: [
      {
        problem: "Client documents arrive over WhatsApp and email",
        consequence: "Confidential records sit in personal chats with no access control or retention policy.",
        solution: "A secure client portal where documents are uploaded, versioned and access-logged.",
      },
      {
        problem: "Deadlines are tracked in a diary",
        consequence: "A missed filing or hearing date creates liability that dwarfs any software cost.",
        solution: "Deadline tracking with escalating reminders and per-client visibility.",
      },
      {
        problem: "Prospective clients cannot verify credentials online",
        consequence: "Referrals who search your name find nothing and confidence drops.",
        solution: "A professional site with qualifications, registration numbers, practice areas and published writing.",
      },
      {
        problem: "The same client questions are answered repeatedly",
        consequence: "Chargeable hours go on explaining routine procedure.",
        solution: "A knowledge base, and where volume justifies it, a document-grounded assistant.",
      },
    ],
    bodyMdx: `## Client documents do not belong on WhatsApp

This is the most common and most serious problem in professional practices we
audit.

Balance sheets, PAN cards, bank statements, case files — all sitting in personal
WhatsApp chats, backed up to somebody's personal Google Drive, accessible to
anyone who picks up that phone. There is no access log, no retention policy, and
no way to remove a departing employee's access to historical client files.

Under the Digital Personal Data Protection Act this is a genuine exposure, and it
is also a professional-conduct question independent of the statute.

A client portal solves it without making life harder:

- Clients upload documents to their own secure area
- Files are versioned, so "which balance sheet is final" has an answer
- Access is logged
- Staff access can be revoked in one action when someone leaves
- Retention rules can actually be applied

## Credibility is the website's only job

For a CA or advocate, the website is not a lead generator in the way it is for a
retailer. Most work arrives by referral. What the site does is confirm, for
someone who has already heard your name, that you are real and qualified.

That means: full name and qualifications, membership or enrolment number,
practice areas stated specifically, years in practice, office address and a
photograph of a real office. Anything vague reads as evasive in this profession.

Published writing helps considerably. A CA who writes clearly about a GST change
gets remembered when a business needs one.

## What we build for professional practices

- **Professional websites** from ₹15,000 under
  [web development](/services/web-development).
- **Secure client portals** under
  [custom software](/services/custom-software-development) from ₹50,000.
- **Practice management** — matters, deadlines, time recording, billing.
- **[Document-grounded assistants](/services/ai-ml-solutions)** answering routine
  procedural questions from your own material, with sources cited.`,
    faqs: [
      {
        question: "Why should a CA or lawyer not use WhatsApp for client documents?",
        answer:
          "Because there is no access control, no audit log, no versioning and no retention policy. Client financial records and case files end up in personal chats backed up to somebody's personal cloud account, accessible to anyone with that phone, with no way to revoke a departing employee's access to historical files. Under the Digital Personal Data Protection Act that is a real exposure, quite apart from the professional-conduct question.",
      },
      {
        question: "Do professional services firms actually need a website?",
        answer:
          "Yes, though its job is different. Most work arrives by referral, so the site is not primarily a lead generator — it confirms to someone who already has your name that you are real and qualified. That means visible qualifications, membership or enrolment number, specific practice areas, years in practice and a real office address. Published writing on your area helps considerably, because it is what gets you remembered.",
      },
    ],
  },
];
