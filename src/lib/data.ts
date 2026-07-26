/**
 * RESUME FILE
 * Drop your PDF at `public/files/` and update the name below.
 */
export const RESUME_FILE = "/files/andrea-casuncad-resume.pdf";

/**
 * CALENDLY
 * Paste your Calendly event link here — the bare URL, no extra parameters.
 *   e.g. "https://calendly.com/andrea-casuncad/30min"
 *
 * How to get it: Calendly → Event Types → click "⋯" on your event →
 * "Copy link". Both the embedded widget and the "open in new tab"
 * fallback update automatically.
 */
export const CALENDLY_URL = "https://calendly.com/vaalousee/30min";

export type Project = {
  id: string;
  title: string;
  category: "Case Study" | "QuickBooks Online" | "Excel" | "Manual";
  blurb: string;
  tools: string[];
  outcome: string;
  image: string;
  overview: string;
  objective: string;
  process: string[];
  results: { label: string; value: string }[];
  skills: string[];
  screenshots: { src: string; caption: string }[];
  featured?: boolean;
  /** Optional downloadable sample files, e.g. an Excel template or PDF report. */
  downloads?: { label: string; file: string }[];
};

/**
 * PORTFOLIO / SAMPLE WORK
 * ──────────────────────────────────────────────────────────────
 * To add a project: copy any block below, give it a unique `id`,
 * and edit the fields. It appears in the grid automatically.
 *   image       → cover photo, from `public/images/`
 *   category    → must match a filter tab in Portfolio.tsx
 *   screenshots → open in the lightbox; store in `public/images/`
 *   downloads   → optional files from `public/files/` (omit if none)
 */
export const PROJECTS: Project[] = [
  {
    id: "full-cycle",
    title: "Full Accounting Cycle Case Study",
    category: "Case Study",
    blurb:
      "A complete 12-month bookkeeping engagement for a sample service company — from opening balances to audit-ready financial statements.",
    tools: ["QuickBooks Online", "Microsoft Excel", "Manual Ledgers"],
    outcome: "12 months reconciled, trial balance tied to $0 variance, full statement package produced.",
    image: "/images/financials.jpg",
    featured: true,
    overview:
      "A twelve-month simulated engagement for “Northline Services LLC,” a small US service business with two bank accounts, one credit card, payroll accruals, and roughly 780 transactions. The project was completed three ways — manual ledgers, an Excel workbook, and QuickBooks Online — to prove the same accounting logic across every tool a small business might already use.",
    objective:
      "Demonstrate command of the complete accounting cycle: from Chart of Accounts design through adjusting entries, closing entries, and a presentation-ready financial statement package.",
    process: [
      "Designed a Chart of Accounts mapped to the client's revenue streams and IRS Schedule C categories.",
      "Recorded 780+ transactions with consistent naming, class tracking, and source-document references.",
      "Posted journal entries to the general ledger and maintained subsidiary AR/AP ledgers.",
      "Prepared an unadjusted trial balance and investigated every variance line by line.",
      "Booked adjusting entries for depreciation, prepaid insurance, accrued wages, and unearned revenue.",
      "Reconciled all bank and credit card accounts for each of the 12 periods.",
      "Produced Profit & Loss, Balance Sheet, and Statement of Cash Flows, plus a month-over-month variance memo.",
    ],
    results: [
      { label: "Months reconciled", value: "12/12" },
      { label: "Transactions recorded", value: "780+" },
      { label: "Unreconciled variance", value: "$0.00" },
      { label: "Statements delivered", value: "3 + memo" },
    ],
    skills: [
      "Accounting cycle mastery",
      "Adjusting & closing entries",
      "Bank reconciliation",
      "Financial statement preparation",
      "Documentation & audit trail",
    ],
    screenshots: [
      { src: "/images/financials.jpg", caption: "Year-end financial statement package" },
      { src: "/images/qbo-dashboard.jpg", caption: "QuickBooks Online reporting dashboard" },
      { src: "/images/reconciliation.jpg", caption: "December reconciliation worksheet" },
    ],
    downloads: [{ label: "Case study summary (PDF)", file: "/files/full-accounting-cycle-case-study.pdf" }],
  },
  {
    id: "bank-rec",
    title: "Bank Reconciliation Sample Work",
    category: "QuickBooks Online",
    blurb:
      "Three months of messy bank and credit card activity reconciled, with a documented variance log for every exception found.",
    tools: ["QuickBooks Online", "Excel", "Bank Statements (PDF/CSV)"],
    outcome: "47 unmatched items cleared; ending balances tied to the statement to the cent.",
    image: "/images/reconciliation.jpg",
    overview:
      "A reconciliation exercise built from deliberately imperfect data: duplicated deposits, transposed figures, stale uncleared checks, and bank fees never recorded in the books.",
    objective:
      "Identify, document, and correct every difference between the general ledger and the bank statement without forcing an adjustment.",
    process: [
      "Imported CSV bank feeds and matched against recorded transactions.",
      "Flagged duplicates, transpositions, and timing differences into a variance log.",
      "Traced each exception back to its source document before correcting.",
      "Recorded missing bank fees, interest, and NSF activity.",
      "Voided stale-dated checks with written justification.",
      "Produced a signed-off reconciliation report per account, per month.",
    ],
    results: [
      { label: "Exceptions resolved", value: "47" },
      { label: "Accounts reconciled", value: "3" },
      { label: "Final difference", value: "$0.00" },
      { label: "Turnaround", value: "4 days" },
    ],
    skills: ["Exception research", "Variance documentation", "Attention to detail", "Bank feed management"],
    screenshots: [
      { src: "/images/reconciliation.jpg", caption: "Reconciliation worksheet with matched items" },
      { src: "/images/qbo-dashboard.jpg", caption: "QBO reconciliation report summary" },
    ],
  },
  {
    id: "coa",
    title: "Chart of Accounts Setup",
    category: "QuickBooks Online",
    blurb:
      "A clean, tax-ready account structure built for a service business — no duplicate accounts, no vague 'Miscellaneous' buckets.",
    tools: ["QuickBooks Online", "Excel mapping sheet"],
    outcome: "Account list reduced from 96 to 54 with clear parent/sub-account hierarchy.",
    image: "/images/chart-of-accounts.jpg",
    overview:
      "A rebuild of a bloated default Chart of Accounts into a lean structure that maps directly to the business's tax return and to the owner's real decision-making questions.",
    objective: "Make reports readable at a glance and make tax preparation a copy-and-paste exercise.",
    process: [
      "Interviewed the business on revenue streams and cost drivers (simulated intake).",
      "Mapped every existing account to a tax line and flagged redundancies.",
      "Merged duplicates and archived unused accounts without losing history.",
      "Built parent/sub-account hierarchy for income, COGS, and operating expenses.",
      "Documented an account-usage guide so future entries stay consistent.",
    ],
    results: [
      { label: "Accounts before", value: "96" },
      { label: "Accounts after", value: "54" },
      { label: "Tax lines mapped", value: "100%" },
      { label: "Usage guide", value: "1 page" },
    ],
    skills: ["Chart of Accounts design", "Tax-line mapping", "QBO setup", "Process documentation"],
    screenshots: [{ src: "/images/qbo-dashboard.jpg", caption: "Restructured account list in QBO" }],
  },
  {
    id: "qbo-reports",
    title: "QuickBooks Online Reports Pack",
    category: "QuickBooks Online",
    blurb:
      "A monthly reporting pack an owner can actually read: P&L with comparatives, AR aging, AP aging, and a one-page cash summary.",
    tools: ["QuickBooks Online", "Custom report templates"],
    outcome: "Automated month-end pack delivered in under 30 minutes.",
    image: "/images/qbo-dashboard.jpg",
    overview:
      "Custom-built and saved report templates that turn raw QuickBooks data into a repeatable monthly management pack.",
    objective: "Give a small business owner the four numbers they need each month without hunting through menus.",
    process: [
      "Built a Profit & Loss with prior-period and prior-year comparison columns.",
      "Configured AR and AP aging with collection-priority grouping.",
      "Created a one-page cash position summary.",
      "Saved templates into a custom report group with scheduled email delivery.",
      "Wrote a plain-English 'how to read this' cover note.",
    ],
    results: [
      { label: "Reports in pack", value: "5" },
      { label: "Prep time", value: "< 30 min" },
      { label: "Delivery", value: "Automated" },
      { label: "Comparatives", value: "MoM + YoY" },
    ],
    skills: ["Report customization", "Management reporting", "Client communication", "Automation"],
    screenshots: [
      { src: "/images/qbo-dashboard.jpg", caption: "Custom report group dashboard" },
      { src: "/images/financials.jpg", caption: "Printed monthly pack" },
    ],
  },
  {
    id: "excel-template",
    title: "Excel Bookkeeping Template",
    category: "Excel",
    blurb:
      "A self-checking workbook for pre-QuickBooks businesses: journal, ledger, trial balance, and statements linked end to end.",
    tools: ["Microsoft Excel", "Google Sheets", "Data validation & XLOOKUP"],
    outcome: "Built-in balance checks catch out-of-balance entries the moment they're typed.",
    image: "/images/reconciliation.jpg",
    overview:
      "A five-tab workbook for very small businesses not yet ready for accounting software, designed so a non-accountant can keep clean records.",
    objective: "Reduce data-entry errors to near zero using validation, formulas, and visible balance checks.",
    process: [
      "Structured a single-entry-point journal tab with dropdown account validation.",
      "Auto-posted journal lines to the general ledger with XLOOKUP formulas.",
      "Built a live trial balance with a conditional 'IN BALANCE / OUT OF BALANCE' flag.",
      "Linked Profit & Loss and Balance Sheet directly to ledger totals.",
      "Locked formula cells and added an instructions tab.",
    ],
    results: [
      { label: "Tabs", value: "5 linked" },
      { label: "Manual re-entry", value: "0" },
      { label: "Live checks", value: "3" },
      { label: "Setup time", value: "10 min" },
    ],
    skills: ["Excel modeling", "Data validation", "Error prevention", "Template design"],
    screenshots: [{ src: "/images/reconciliation.jpg", caption: "Trial balance tab with live balance check" }],
    downloads: [{ label: "Excel bookkeeping template (XLSX)", file: "/files/excel-bookkeeping-template.xlsx" }],
  },
  {
    id: "manual",
    title: "Manual Bookkeeping Exercises",
    category: "Manual",
    blurb:
      "Handwritten journals, T-accounts, and worksheets proving the fundamentals behind every button click in accounting software.",
    tools: ["Columnar paper", "T-accounts", "10-column worksheet"],
    outcome: "Full cycle completed by hand, including closing entries and post-closing trial balance.",
    image: "/images/financials.jpg",
    overview:
      "A deliberate return to fundamentals: recording, posting, and closing an accounting period entirely by hand to keep the underlying logic sharp.",
    objective: "Prove conceptual understanding independent of software automation.",
    process: [
      "Journalized transactions in a two-column general journal.",
      "Posted to T-accounts and footed each balance.",
      "Completed a 10-column worksheet including adjustments.",
      "Prepared statements directly from the worksheet.",
      "Journalized closing entries and produced a post-closing trial balance.",
    ],
    results: [
      { label: "Periods completed", value: "3" },
      { label: "Worksheet columns", value: "10" },
      { label: "Balance errors", value: "0" },
      { label: "Closing entries", value: "Complete" },
    ],
    skills: ["Double-entry fundamentals", "T-account analysis", "Worksheet preparation", "Closing process"],
    screenshots: [{ src: "/images/financials.jpg", caption: "Completed 10-column worksheet" }],
  },
];

export const SERVICES = [
  {
    icon: "Rocket",
    title: "QuickBooks Online Setup",
    desc: "New file setup, bank feed connections, products & services, and user permissions configured correctly the first time.",
  },
  {
    icon: "ListTree",
    title: "Chart of Accounts Setup",
    desc: "A lean, tax-mapped account structure so your reports read clearly and year-end takes hours, not weeks.",
  },
  {
    icon: "ReceiptText",
    title: "Transaction Recording",
    desc: "Consistent, categorized daily and weekly entries with source documents attached to every transaction.",
  },
  {
    icon: "Landmark",
    title: "Bank Reconciliation",
    desc: "Every account tied to the statement each month, with a written log of any exception found and how it was cleared.",
  },
  {
    icon: "ArrowDownToLine",
    title: "Accounts Receivable",
    desc: "Invoicing, payment application, and aging reviews so you know exactly who owes you and for how long.",
  },
  {
    icon: "ArrowUpFromLine",
    title: "Accounts Payable",
    desc: "Bill entry, vendor tracking, and payment scheduling that protects your cash position and your vendor relationships.",
  },
  {
    icon: "FileBarChart",
    title: "Financial Statements",
    desc: "Monthly P&L, Balance Sheet, and Cash Flow with comparatives and a plain-English summary of what changed.",
  },
  {
    icon: "Wrench",
    title: "Cleanup & Catch-Up",
    desc: "Months (or years) behind? Reconstructed, reconciled, and documented books brought current and tax-ready.",
  },
  {
    icon: "Table2",
    title: "Excel Bookkeeping Support",
    desc: "Custom workbooks, templates, and clean data imports for businesses not yet on accounting software.",
  },
];

/**
 * CERTIFICATIONS
 * ──────────────────────────────────────────────────────────────
 * To add one: copy a block below and edit the text.
 *   file      → put your PDF/JPG in `public/files/` and reference it here.
 *               Opens in a new tab for viewing (not downloaded).
 *               Leave as "" to hide the "View certificate" link on that card.
 *   verifyUrl → public credential link (Credly, Certiport, Intuit). "" hides it.
 *   accent    → "emerald" | "navy" | "slate" (badge colour)
 */
export type Certification = {
  title: string;
  issuer: string;
  desc: string;
  accent: "emerald" | "navy" | "slate";
  file: string;
  verifyUrl: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Intuit Certified Bookkeeping Professional",
    issuer: "Intuit / Certiport",
    desc: "Validates end-to-end competency in the accounting cycle, from transaction analysis to financial statements.",
    accent: "emerald",
    file: "/files/intuit-certified-bookkeeping-professional.pdf",
    verifyUrl: "",
  },
  {
    title: "QuickBooks Online ProAdvisor — Level 1",
    issuer: "Intuit",
    desc: "Core certification covering QBO setup, navigation, transactions, banking, and standard reporting.",
    accent: "navy",
    file: "/files/qbo-proadvisor-level-1.pdf",
    verifyUrl: "",
  },
  {
    title: "QuickBooks Online ProAdvisor — Level 2",
    issuer: "Intuit",
    desc: "Advanced certification covering complex client scenarios, cleanup work, and troubleshooting.",
    accent: "navy",
    file: "/files/qbo-proadvisor-level-2.pdf",
    verifyUrl: "",
  },
  {
    title: "US Bookkeeping Certificate",
    issuer: "Professional Training Program",
    desc: "US-specific bookkeeping standards, terminology, sales tax basics, and 1099 workflows.",
    accent: "emerald",
    file: "/files/us-bookkeeping-certificate.pdf",
    verifyUrl: "",
  },
  {
    title: "Financial Accounting Fundamentals",
    issuer: "Continuing Education",
    desc: "Double-entry theory, accruals, adjusting entries, and statement interrelationships.",
    accent: "slate",
    file: "",
    verifyUrl: "",
  },
  {
    title: "Excel for Accounting & Reporting",
    issuer: "Continuing Education",
    desc: "Lookup functions, pivot analysis, data validation, and reconciliation modeling.",
    accent: "slate",
    file: "",
    verifyUrl: "",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "She rebuilt eleven months of neglected books and handed them back with a reconciliation log for every single account. My CPA said it was the cleanest handoff she'd seen all season.",
    name: "Danielle Reyes",
    role: "Owner, Bright Path Cleaning Co.",
    location: "Austin, TX",
    initials: "DR",
  },
  {
    quote:
      "What stood out was the documentation. Every question I had was already answered in a note attached to the transaction. That's rare, and it saved me hours.",
    name: "Marcus Ellery",
    role: "Founder, Ellery Design Studio",
    location: "Portland, OR",
    initials: "ME",
  },
  {
    quote:
      "As an HR professional she already understood payroll detail and confidentiality. Applying that discipline to our bookkeeping made the transition genuinely easy.",
    name: "Karen Whitfield",
    role: "Operations Manager, Northline Services",
    location: "Charlotte, NC",
    initials: "KW",
  },
  {
    quote:
      "Responsive, precise, and never guesses. If something doesn't tie out, she tells me before I have to ask. That's the whole job, honestly.",
    name: "Anthony Grasso",
    role: "Owner, Grasso HVAC & Repair",
    location: "Cleveland, OH",
    initials: "AG",
  },
];

export const FAQS = [
  {
    q: "You're currently an HR Assistant — why hire you for bookkeeping?",
    a: "Because the skills transfer directly and the credentials are real. My HR role is built on payroll detail, confidential records, and documentation that has to survive an audit. On top of that I hold the Intuit Certified Bookkeeping Professional credential and both QuickBooks Online ProAdvisor levels, and I've completed a full 12-month accounting cycle case study you can review in the portfolio above. You're not hiring a promise — you're hiring documented, verifiable work.",
  },
  {
    q: "Do you work with US businesses from the Philippines?",
    a: "Yes. I work a part-time schedule with reliable overlap into Eastern and Central time, and everything is handled through secure cloud tools — QuickBooks Online, encrypted document sharing, and scheduled video check-ins. The time zone difference often works in your favor: work submitted at the end of your day is frequently done by your next morning.",
  },
  {
    q: "How do you keep my financial data secure?",
    a: "Access is granted through QuickBooks Online's accountant-user permissions rather than shared passwords, documents move through encrypted storage only, devices are password- and disk-encrypted, and I sign a confidentiality agreement before any engagement begins. Handling sensitive employee records daily has made these habits non-negotiable.",
  },
  {
    q: "My books are months behind. Is that a problem?",
    a: "It's one of the most common situations I handle, and it's fixable. Cleanup starts with an assessment of what exists, followed by reconstruction, reconciliation, and a written exception log so you can see exactly what was corrected and why. Most three-month cleanups are delivered within one to two weeks.",
  },
  {
    q: "What does onboarding look like?",
    a: "A 30-minute discovery call, a short intake questionnaire, accountant access to your QuickBooks file, and a review of your last complete month. Within a week you receive a findings summary and a clear scope. Nothing is billed until you approve the scope.",
  },
  {
    q: "What kind of engagements are you available for?",
    a: "Part-time only. I hold a full-time Human Resource Assistant role, so I take on part-time bookkeeping work — typically 10 to 20 hours per week — through remote part-time positions, ongoing monthly retainers, and fixed-scope projects. I'm not available for full-time employment. Keeping my client list deliberately small is what lets every account get the same level of review, and I'll tell you honestly if your volume needs more hours than I can commit to.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Free 30-minute consult",
    desc: "We talk through your business, your current setup, and where things have slipped. No pitch, no card required.",
    meta: "Day 1",
  },
  {
    step: "02",
    title: "Books review & findings",
    desc: "I take accountant-level access to your last complete month and send back a written summary of what's clean, what's not, and what it will take.",
    meta: "Within 1 week",
  },
  {
    step: "03",
    title: "Agreed scope & NDA",
    desc: "You get a clear scope, timeline, and confidentiality agreement in writing. Nothing is billed until you approve it.",
    meta: "Before any work",
  },
  {
    step: "04",
    title: "Monthly rhythm",
    desc: "Reconciliations, reports, and a plain-English summary land on the same schedule every month, with replies inside one business day.",
    meta: "Ongoing",
  },
];

export const BENEFITS = [
  {
    icon: "ShieldCheck",
    title: "Accuracy you can verify",
    desc: "Every reconciliation ships with an exception log. You never have to take a number on faith.",
  },
  {
    icon: "Clock",
    title: "Time back in your week",
    desc: "Owners typically spend 5–8 hours a month on books. Hand that back to selling, hiring, and building.",
  },
  {
    icon: "FileCheck2",
    title: "Tax season without panic",
    desc: "Clean, mapped, reconciled books mean your CPA asks fewer questions and bills you for fewer hours.",
  },
  {
    icon: "TrendingUp",
    title: "Decisions backed by numbers",
    desc: "Monthly comparatives show what's actually moving, so pricing and hiring calls stop being guesswork.",
  },
  {
    icon: "Lock",
    title: "Confidentiality by default",
    desc: "HR-grade discretion applied to financial records, with signed NDAs and permission-based access.",
  },
  {
    icon: "MessagesSquare",
    title: "Communication you don't chase",
    desc: "Replies within one business day and a monthly summary written in plain English, not accountant-speak.",
  },
];

export const WORKFLOW = [
  { step: "01", label: "Chart of Accounts", note: "Tax-mapped structure" },
  { step: "02", label: "Transaction Recording", note: "780+ entries" },
  { step: "03", label: "Journal Entries", note: "Double-entry discipline" },
  { step: "04", label: "Ledger Posting", note: "GL + subsidiary ledgers" },
  { step: "05", label: "Trial Balance", note: "Variance investigation" },
  { step: "06", label: "Adjusting Entries", note: "Accruals & deferrals" },
  { step: "07", label: "Bank Reconciliation", note: "12/12 months tied" },
  { step: "08", label: "Financial Statements", note: "P&L, BS, Cash Flow" },
];
