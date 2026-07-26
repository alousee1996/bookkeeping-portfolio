# How to add your certifications & sample work

Everything on this site is edited in **two places**:

| What | Where |
|---|---|
| All text (titles, descriptions, results) | `src/lib/data.ts` |
| All files (PDFs, images, templates) | `public/files/` and `public/images/` |

You never need to touch the layout or design code.

---

## Part 1 — Add a certification

### Step 1. Save the certificate file

Put your PDF or JPG in **`public/files/`** using lowercase, hyphenated names:

```
public/files/qbo-proadvisor-level-1.pdf
```

A file at `public/files/x.pdf` is reachable on the site at `/files/x.pdf`.

### Step 2. Add the entry

Open **`src/lib/data.ts`**, find `export const CERTIFICATIONS`, and copy one block:

```ts
{
  title: "Payroll Fundamentals Certificate",
  issuer: "Intuit Academy",
  desc: "Payroll setup, pay runs, liabilities, and quarterly filing basics.",
  accent: "emerald",                              // "emerald" | "navy" | "slate"
  file: "/files/payroll-fundamentals.pdf",        // "" hides the View link
  verifyUrl: "https://credly.com/badges/xxxx",    // "" hides the Verify link
},
```

That's it — the card renders automatically with a badge, a **View certificate**
link, and an optional **Verify** link out to Credly/Certiport.

> **Note:** Certificates **open in a new tab for viewing** rather than
> downloading. Visitors can still save the file themselves from their browser's
> PDF viewer, but nothing lands in their downloads folder uninvited.

> **Tip:** If a certificate isn't issued yet, set `file: ""` and `verifyUrl: ""`.
> The card still displays; it just won't show broken links.

---

## Part 2 — Add sample work to the portfolio

### Step 1. Save your screenshots

Put images in **`public/images/`**:

```
public/images/ar-aging-report.jpg
public/images/ar-aging-detail.jpg
```

**Before uploading, scrub every screenshot.** Blur or replace real client names,
account numbers, addresses, and EINs. Use a sample company name instead — this
protects confidentiality *and* demonstrates it to anyone reviewing your work.

### Step 2. Save any downloadable file (optional)

Excel templates, PDF report packs, and similar go in **`public/files/`**.

### Step 3. Add the project

In `src/lib/data.ts`, find `export const PROJECTS` and copy a block:

```ts
{
  id: "ar-aging",                     // must be unique, lowercase, no spaces
  title: "Accounts Receivable Aging Cleanup",
  category: "QuickBooks Online",      // see allowed values below
  blurb: "Short teaser shown on the card in the grid.",
  tools: ["QuickBooks Online", "Excel"],
  outcome: "Reduced past-due AR from $18,400 to $2,100 in six weeks.",
  image: "/images/ar-aging-report.jpg",

  overview:  "One or two sentences setting the scene.",
  objective: "The single goal of the engagement.",
  process: [
    "First thing you did.",
    "Second thing you did.",
    "Third thing you did.",
  ],
  results: [
    { label: "Past-due AR", value: "-$16.3k" },
    { label: "Invoices cleared", value: "42" },
  ],
  skills: ["AR management", "Collections follow-up"],
  screenshots: [
    { src: "/images/ar-aging-detail.jpg", caption: "Aging summary before cleanup" },
  ],
  downloads: [
    { label: "Sample aging report (PDF)", file: "/files/ar-aging-sample.pdf" },
  ],
},
```

**`category`** must be one of these (they're the filter tabs):

```
"Case Study"  |  "QuickBooks Online"  |  "Excel"  |  "Manual"
```

To add a *new* filter tab, open `src/components/Portfolio.tsx` and add it to
the `FILTERS` array at the top.

**Optional fields:** `featured: true` adds a green "Featured" ribbon.
`downloads` can be left out entirely if there's no file to share.

---

## Part 3 — Add your resume

1. Save it as `public/files/andrea-casuncad-resume.pdf`
2. Or rename it and update this line near the top of `src/lib/data.ts`:

```ts
export const RESUME_FILE = "/files/your-file-name.pdf";
```

Both the **Download Resume** and **View Online** buttons use this one value.

To edit the timeline entries themselves, open `src/components/Trust.tsx` and
find the `RESUME` array.

---

## Part 4 — Replace the headshot

Overwrite **`public/images/headshot.jpg`** with your own photo, keeping the
same filename.

The photo appears in the **About** section as a square avatar (not in the hero),
so a **square crop around 480 × 480px**, head-and-shoulders, works best.

---

## Quick reference: what lives where

| Section | Edit this |
|---|---|
| Hero headline & intro | `src/components/Hero.tsx` |
| Services list | `SERVICES` in `src/lib/data.ts` |
| Portfolio projects | `PROJECTS` in `src/lib/data.ts` |
| Case study workflow steps | `WORKFLOW` in `src/lib/data.ts` |
| Certifications | `CERTIFICATIONS` in `src/lib/data.ts` |
| Testimonials | `TESTIMONIALS` in `src/lib/data.ts` |
| FAQ | `FAQS` in `src/lib/data.ts` |
| Resume timeline | `RESUME` in `src/components/Trust.tsx` |
| Email / LinkedIn / location | `src/components/Engage.tsx` + `Footer.tsx` |
| Calendly link | `src/components/Engage.tsx` (search `calendly.com`) |
| Page title & SEO tags | `index.html` |

---

## Two things to set before going live

**1. Your Calendly link.** In `src/lib/data.ts`, replace the demo URL in
`CALENDLY_URL`:

```ts
export const CALENDLY_URL = "https://calendly.com/acme-demo/30min";
```

with your own event link (Calendly → Event Types → "⋯" → Copy link). Paste the
bare URL — the branding parameters are added automatically. Both the embedded
widget and the "open in new tab" fallback update from this one line.

**2. The contact form.** It currently shows a success message without sending
anything. To receive real emails, sign up at [formspree.io](https://formspree.io)
(free tier) and point the form at your endpoint — or just rely on the email and
Calendly links, which work today.

---

## Checking your work

Run the site locally:

```bash
npm run dev
```

Then click every **Download** button. If a file 404s, the filename in
`data.ts` doesn't match the actual file in `public/files/` — check spelling,
hyphens, and the extension (`.pdf` vs `.PDF` matters).
