import type { SeedProduct } from "./types";

/**
 * The four ready-made products. These are real systems we have built and
 * generalised, which is why they can carry specific feature lists and prices.
 */
export const products: SeedProduct[] = [
  {
    slug: "school-management-system",
    name: "Codivra School Manager",
    tagline: "Admissions, fees, attendance and results in one place",
    order: 1,
    metaTitle: "School Management Software in India | From ₹35,000",
    metaDesc:
      "School management software with admissions, fee collection, attendance, results and a parent portal. One-time ₹35,000, live in 4 weeks.",
    demoUrl: undefined,
    answerBlock:
      "Codivra School Manager is school management software covering admission enquiries, fee collection, attendance, results and parent communication. It costs ₹35,000 as a one-time licence rather than per student per year, and is typically live within four weeks including migration from your existing registers.",
    screenshots: [],
    features: [
      {
        title: "Admission enquiry tracking",
        description:
          "Every enquiry captured with its source and an assigned owner, with follow-up reminders so a parent who called in March is not forgotten in April.",
        iconName: "UserPlus",
      },
      {
        title: "Fee management",
        description:
          "Instalment plans, receipts, part payments, concessions and a live outstanding report by class or by student. Automatic reminders over WhatsApp.",
        iconName: "IndianRupee",
      },
      {
        title: "Attendance",
        description:
          "Marked from a phone by the class teacher in under a minute, with absence notifications to parents the same morning.",
        iconName: "CalendarCheck",
      },
      {
        title: "Results and report cards",
        description:
          "Marks entry per subject, automatic grade calculation, and printable report cards in your school's existing format.",
        iconName: "FileText",
      },
      {
        title: "Parent portal without an app",
        description:
          "Parents open a WhatsApp link to see their child's fees, attendance and results. No installation, no password to remember.",
        iconName: "Users",
      },
      {
        title: "Works on the phone staff already have",
        description:
          "Built and tested for mid-range Android on a patchy connection, because fee entry that requires a desktop gets done from a paper register on Friday.",
        iconName: "Smartphone",
      },
    ],
    bodyMdx: `## Why a one-time licence instead of per student

Most school software in India is sold per student per year. At ₹100 per student
for a school of 600, that is ₹60,000 every year, indefinitely.

We sell School Manager as a one-time ₹35,000 licence. Hosting runs roughly
₹1,500 a month, and an optional support plan is available. Over three years the
difference for a 600-student school is substantial, and it is worth doing that
arithmetic before signing a subscription.

The trade-off is honest: subscription products fund continuous development, and
ours evolves more slowly. If you need constant new features, a subscription
product may genuinely suit you better.

## What actually determines whether it gets used

Three things, learned the hard way:

**It has to work on the clerk's phone.** Not the desktop in the accounts room. If
fee entry needs a computer, it will be batched to Friday from a paper register,
and the live outstanding report — the entire point — is never live.

**Parents must not need training.** A portal requiring a login and an app install
is a portal nobody uses. A WhatsApp link that opens straight to their child's
record is used immediately.

**It has to survive February to April.** Admission season is when the system is
under real load and when staff have least patience. We load-test against that,
not against a quiet Tuesday.

## What is included

Migration from your existing registers or Excel sheets, a full day of on-site
staff training, and 90 days of post-launch support. Report card formats are
matched to what your school already issues rather than forcing a new layout.

## Related reading

- [What school management software should cost](/blog/school-management-software-cost)`,
    pricingMdx: `| | One-time | Notes |
|---|---|---|
| Software licence | ₹35,000 | Unlimited students, no per-seat fee |
| Data migration | Included | From registers or Excel |
| On-site training | Included | One full day |
| Hosting | ~₹1,500/month | Billed at actuals, your own account |
| Support after 90 days | From ₹3,000/month | Optional |

Compare against a typical per-student subscription: a 600-student school at ₹100
per student per year pays ₹1,80,000 over three years.`,
    faqs: [
      {
        question: "How much does school management software cost?",
        answer:
          "Codivra School Manager is ₹35,000 as a one-time licence with no per-student fee, plus roughly ₹1,500 a month for hosting. Data migration from your existing registers and a full day of on-site staff training are included, as is 90 days of support. For comparison, a per-student subscription at ₹100 per student per year costs a 600-student school ₹1,80,000 over three years.",
      },
      {
        question: "Do parents need to install an app?",
        answer:
          "No, and that is deliberate. Parents open a WhatsApp link that shows their child's fees, attendance and results directly — no installation and no password to remember. App installation is a real barrier for a large share of parents, and portals that require it go unused. A dedicated app becomes worth building only once a school also wants push notifications as a primary channel.",
      },
      {
        question: "Can we keep our existing report card format?",
        answer:
          "Yes. Report cards are matched to the format your school already issues rather than forcing a new layout on you, because a changed report card is the kind of thing parents and boards notice. Marks entry, grade calculation and printing are handled by the system; what comes out looks like what came out before, with the arithmetic done automatically.",
      },
    ],
  },

  {
    slug: "clinic-management-system",
    name: "Codivra Clinic Manager",
    tagline: "Appointments, patient records and reports over WhatsApp",
    order: 2,
    metaTitle: "Clinic Management Software in India | From ₹30,000",
    metaDesc:
      "Clinic management software with appointments, patient records, prescriptions and WhatsApp report delivery. One-time ₹30,000, live in 3–4 weeks.",
    answerBlock:
      "Codivra Clinic Manager is clinic and diagnostic lab software covering appointments, patient records, prescription printing, billing and report delivery over WhatsApp. It costs ₹30,000 as a one-time licence, is live in three to four weeks, and hosts patient data on infrastructure inside India.",
    screenshots: [],
    features: [
      {
        title: "Appointment booking",
        description:
          "Online booking with real slot limits, plus automatic WhatsApp confirmations and evening-before reminders that measurably cut no-shows.",
        iconName: "CalendarClock",
      },
      {
        title: "Patient records",
        description:
          "Searchable by phone number, with previous visits, prescriptions and reports attached. No more missing paper cards.",
        iconName: "FolderOpen",
      },
      {
        title: "Prescription printing",
        description:
          "Prescriptions on your letterhead with saved drug templates, so common prescriptions take seconds rather than being rewritten.",
        iconName: "Pill",
      },
      {
        title: "Report delivery over WhatsApp",
        description:
          "Lab reports sent as a single-use expiring link the moment they are verified, removing both the return trip and the 'is it ready' calls.",
        iconName: "Send",
      },
      {
        title: "Role-based access",
        description:
          "Reception sees appointments, not clinical notes. Roles are enforced in the database, not hidden in the interface.",
        iconName: "ShieldCheck",
      },
      {
        title: "Data hosted in India",
        description:
          "Deployed to Indian regions with encrypted backups and tested restores, in line with Digital Personal Data Protection Act obligations.",
        iconName: "Lock",
      },
    ],
    bodyMdx: `## Patient data is the part we take most seriously

A clinic system holds personal health data, and under the Digital Personal Data
Protection Act that carries real obligations. Practically:

- **Hosted in India**, not wherever is cheapest
- **Roles enforced at the database level** — a receptionist cannot read clinical
  notes even if they find the URL
- **An audit trail** of who opened which record and when
- **Encrypted backups with restores actually tested**, quarterly, not merely
  configured once

The systems we most often replace store patient histories in a spreadsheet on a
shared laptop. That is a liability regardless of how well the clinic runs
otherwise.

## WhatsApp is the channel that works here

For clinics in Sitapur, Hardoi and Lakhimpur, WhatsApp beats email and beats an
app. Patients already have it, there is nothing to install, and open rates are far
above SMS.

We use it for appointment confirmation, a reminder the evening before, a
report-ready notification and follow-up prompts. Report links are single-use and
expire, so a forwarded message does not leave someone's results exposed
indefinitely.

## Diagnostic labs

The same system covers labs, with sample tracking from collection through
processing to verified report. The report-delivery feature is usually the one that
pays for the system on its own — it removes both the patient's return trip and
most of the front desk's phone traffic.

## What is included

Migration of existing patient records where they are in a usable form, a full day
of on-site training, and 90 days of support.`,
    pricingMdx: `| | One-time | Notes |
|---|---|---|
| Software licence | ₹30,000 | Single clinic, unlimited patients |
| Additional doctor | ₹5,000 each | Separate schedules and prescriptions |
| Multi-branch | Quoted | Under custom software |
| Data migration | Included | Where records are in usable form |
| Hosting (India region) | ₹1,500 – ₹3,000/month | Billed at actuals |
| Support after 90 days | From ₹3,000/month | Optional |`,
    faqs: [
      {
        question: "How much does clinic management software cost?",
        answer:
          "Codivra Clinic Manager is ₹30,000 as a one-time licence for a single clinic with unlimited patients, plus ₹5,000 for each additional doctor needing separate schedules. Hosting on Indian infrastructure runs ₹1,500 to ₹3,000 a month depending on volume. Record migration where your existing data is in usable form, a full day of on-site training and 90 days of support are included.",
      },
      {
        question: "Is patient data stored securely and legally?",
        answer:
          "It is hosted in Indian regions so data does not leave the country, with role-based access enforced at the database level rather than merely hidden in the interface, an audit trail of who opened which record, and encrypted backups whose restores are tested quarterly. Under the Digital Personal Data Protection Act these are obligations for anyone holding health data, not optional features.",
      },
      {
        question: "Can we send lab reports to patients on WhatsApp?",
        answer:
          "Yes, and for most labs it is the feature that justifies the system on its own. As soon as a report is verified the patient receives a single-use link that expires, rather than travelling back for a printout. It removes the return trip for the patient and most of the 'is my report ready' phone traffic for your front desk, which is usually several hours of staff time a week.",
      },
    ],
  },

  {
    slug: "billing-and-pos",
    name: "Codivra Billing & POS",
    tagline: "GST billing, stock and party ledgers built for Indian trade",
    order: 3,
    metaTitle: "GST Billing & POS Software in India | From ₹20,000",
    metaDesc:
      "GST billing and POS software with party-wise rates, credit tracking, stock and outstanding reports. One-time ₹20,000, live in 3–4 weeks.",
    answerBlock:
      "Codivra Billing & POS is GST-compliant billing software built for Indian retail and wholesale trade, handling party-specific rates, credit sales, multi-rate GST invoices and live stock. It costs ₹20,000 as a one-time licence and is typically live within three to four weeks.",
    screenshots: [],
    features: [
      {
        title: "GST done correctly",
        description:
          "Per-product HSN codes, correct CGST/SGST or IGST split by place of supply, multi-rate invoices, and credit notes for returns and rate differences.",
        iconName: "ReceiptIndianRupee",
      },
      {
        title: "Party-specific rates",
        description:
          "Negotiated rates per customer, per product, or as quantity slabs — applied automatically, so anyone can bill correctly rather than only the owner.",
        iconName: "Tags",
      },
      {
        title: "Credit and outstanding",
        description:
          "Party ledgers with part payments against multiple bills, ageing analysis, and a live outstanding figure by party.",
        iconName: "Wallet",
      },
      {
        title: "Live stock",
        description:
          "Stock updates on every sale, with low-stock alerts and reorder suggestions based on actual sales history rather than a fixed threshold.",
        iconName: "Package",
      },
      {
        title: "Unit conversions",
        description:
          "Sold by piece, billed by carton, stocked by kilogram — conversions built in rather than done mentally at the counter.",
        iconName: "Scale",
      },
      {
        title: "Filing-ready exports",
        description:
          "Monthly data exported in a form your accountant can file from directly, instead of a month-end reconciliation scramble.",
        iconName: "FileSpreadsheet",
      },
    ],
    bodyMdx: `## Built for wholesale, not just retail

Packaged billing software assumes retail: one price per product, cash or card,
walk-in customer. Wholesale trade in Uttar Pradesh does not work that way, and
that mismatch is why most packaged tools get abandoned within a month.

**Every party has a different rate**, negotiated per customer and sometimes per
product or by quantity slab. If the system cannot express that, billing stays in
the owner's head and nobody else can do it.

**Credit is normal.** Goods go out, payment comes later, part payments arrive
against several bills at once. Outstanding by party is not a report you run
occasionally — it is the centre of the system.

**Returns and rate differences are routine**, so credit notes need to be as easy
as invoices.

We build for these directly.

## GST that is actually right

Invoices carry your GSTIN and per-product HSN codes, with the correct CGST/SGST
or IGST split determined by place of supply. Multi-rate bills — items at 5%, 12%
and 18% on one invoice — are handled properly.

This is the minimum rather than a feature, but it is worth stating: we regularly
audit systems that get the interstate split wrong, and that is the error that
becomes expensive at filing time.

## Usable by staff who have worked from a paper book

Design decisions throughout assume the person at the counter has not used billing
software before: fewer screens, large targets, keyboard shortcuts for the common
path, defaults that are right most of the time, and Hindi labels where they help.
A full day of on-site training is included rather than a PDF manual.`,
    pricingMdx: `| | One-time | Notes |
|---|---|---|
| Software licence | ₹20,000 | Single location, unlimited invoices |
| Additional counter | ₹4,000 each | Same stock, separate billing terminal |
| Additional location | ₹8,000 each | Consolidated reporting |
| Data migration | Included | Products, parties, opening balances |
| On-site training | Included | One full day |
| Hosting | ~₹1,200/month | Or run on-premise at no hosting cost |
| Support after 90 days | From ₹3,000/month | Optional |`,
    faqs: [
      {
        question: "Can it handle different rates for different customers?",
        answer:
          "Yes, and it is built in rather than worked around. You can set negotiated rates per party, per product, or as quantity slabs, applied automatically at billing. This is the single most common reason packaged retail billing software gets abandoned by wholesalers — it assumes one price per product, so billing stays in the owner's head and no other staff member can do it correctly.",
      },
      {
        question: "Does it handle GST filing?",
        answer:
          "It produces GST-compliant invoices with per-product HSN codes and the correct CGST/SGST or IGST split based on place of supply, including multi-rate bills and credit notes for returns. Monthly data exports come out in a form your accountant can file from directly. It does not file returns for you — that stays with your accountant — but it removes the month-end reconciliation scramble.",
      },
      {
        question: "Can it run without internet?",
        answer:
          "Yes, it can be deployed on-premise on a computer in your shop, which also removes the hosting cost entirely. That suits locations with unreliable connectivity. The trade-off is that you lose access from outside the shop and backups become your responsibility unless we configure automated ones. Most traders start on-premise and move to hosted once they have a second location.",
      },
    ],
  },

  {
    slug: "hr-management-system",
    name: "Codivra HR Manager",
    tagline: "Attendance, leave, payroll and compliance for small teams",
    order: 4,
    metaTitle: "HR & Payroll Management Software in India | ₹40,000",
    metaDesc:
      "HR management software with attendance, leave, payroll, PF and ESI calculation and payslips. One-time ₹40,000, live in 4–6 weeks.",
    answerBlock:
      "Codivra HR Manager is HR and payroll software for small and mid-sized Indian businesses, covering attendance, leave, salary calculation with PF and ESI, payslips and statutory reports. It costs ₹40,000 as a one-time licence and is typically live within four to six weeks.",
    screenshots: [],
    features: [
      {
        title: "Attendance",
        description:
          "Biometric device integration, or phone-based check-in with location for field staff. Late marks and half-days handled by your actual rules.",
        iconName: "Fingerprint",
      },
      {
        title: "Leave management",
        description:
          "Leave types, balances, carry-forward and an approval chain, with the balance visible to the employee so HR stops being asked.",
        iconName: "CalendarDays",
      },
      {
        title: "Payroll with PF and ESI",
        description:
          "Salary structures, allowances, deductions, PF and ESI calculated to current rates, plus professional tax by state.",
        iconName: "Calculator",
      },
      {
        title: "Payslips",
        description:
          "Generated monthly and delivered over WhatsApp or email, removing the printing and distribution round entirely.",
        iconName: "FileText",
      },
      {
        title: "Statutory reports",
        description:
          "PF and ESI return data, Form 16 inputs and salary registers exported in the formats your accountant needs.",
        iconName: "FileCheck",
      },
      {
        title: "Employee self-service",
        description:
          "Staff check their own attendance, leave balance and payslips, which removes most of the routine questions HR fields.",
        iconName: "UserCircle",
      },
    ],
    bodyMdx: `## Built for the size of business that actually exists here

Enterprise HR platforms are priced and shaped for organisations with a dedicated
HR department. A business with 15 to 150 employees usually has one person doing HR
alongside accounts, and the software has to fit that reality.

That means: fewer screens, statutory calculations done automatically rather than
configured, and payslips that go out over WhatsApp instead of being printed and
handed round.

## The compliance part is where mistakes cost money

PF and ESI calculations change, thresholds move, and professional tax differs by
state. Getting these wrong is not a cosmetic error — it creates liability that
surfaces at assessment.

The system calculates to current rates and produces return data in the formats
your accountant needs. When rates change, we update the calculation as part of a
support plan rather than leaving you to notice.

## Field staff

For businesses with staff who are not in an office — field sales, service
technicians, site supervisors — attendance is phone-based with location capture at
check-in. That is usually the feature that decides the purchase, because a
biometric device on a wall does not help when half the team is never at the wall.

## What is included

Migration of employee records and opening leave balances, salary structure setup,
a full day of on-site training, and 90 days of support covering the first two
payroll runs — which is when questions actually arise.`,
    pricingMdx: `| | One-time | Notes |
|---|---|---|
| Software licence | ₹40,000 | Up to 150 employees |
| Above 150 employees | Quoted | Under custom software |
| Biometric integration | ₹8,000 | Per device model |
| Data migration | Included | Employees, structures, leave balances |
| On-site training | Included | One full day |
| Hosting | ~₹1,500/month | Billed at actuals |
| Support after 90 days | From ₹3,000/month | Includes statutory rate updates |`,
    faqs: [
      {
        question: "Does it calculate PF and ESI correctly?",
        answer:
          "Yes, to current rates, along with professional tax which differs by state. It produces PF and ESI return data and Form 16 inputs in the formats your accountant needs. When statutory rates change we update the calculation as part of a support plan rather than leaving you to notice at assessment — which is the point at which getting it wrong stops being a cosmetic problem.",
      },
      {
        question: "Can it track attendance for field staff?",
        answer:
          "Yes, through phone-based check-in with location capture, which is usually the deciding feature for businesses with sales staff, service technicians or site supervisors. A biometric device on an office wall does not help when half the team is never at that wall. Biometric integration is also available at ₹8,000 per device model for staff who are office-based.",
      },
      {
        question: "How many employees does it support?",
        answer:
          "The ₹40,000 licence covers up to 150 employees, which fits the great majority of businesses in this region. Above that we quote under custom software development, mainly because larger organisations tend to need approval hierarchies, departmental budgets and reporting structures that go beyond what the standard product does. Below 150 the product handles it without modification.",
      },
    ],
  },
];
