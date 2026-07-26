import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { RESUME_FILE } from "@/lib/data";
import { Button, Counter, Reveal } from "./ui";

const BADGES = [
  { label: "Intuit Certified Bookkeeping Professional" },
  { label: "QuickBooks Online ProAdvisor — Level 1" },
  { label: "QuickBooks Online ProAdvisor — Level 2" },
];

const STATS = [
  { value: 780, suffix: "+", label: "Transactions recorded" },
  { value: 12, suffix: "/12", label: "Months reconciled" },
  { value: 3, suffix: "", label: "Certifications earned" },
  { value: 100, suffix: "%", label: "Accounts tied out" },
];

/** Rows for the mock month-end summary panel that replaces the headshot. */
const LEDGER = [
  { account: "Business Checking", status: "Reconciled", value: "$48,210.65" },
  { account: "Business Savings", status: "Reconciled", value: "$12,004.00" },
  { account: "Credit Card — 4471", status: "Reconciled", value: "-$3,882.19" },
  { account: "Accounts Receivable", status: "Aged & reviewed", value: "$9,450.00" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/80 via-white to-white dark:from-navy-950 dark:via-navy-950 dark:to-[#070f1c]" />
        <div className="grid-lines absolute inset-0" />
        <div className="animate-drift absolute -top-32 left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-emerald-300/30 to-teal-200/10 blur-[110px] dark:from-emerald-600/20 dark:to-teal-800/10" />
        <div className="animate-drift-slow absolute -top-24 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-navy-300/35 to-indigo-200/10 blur-[120px] dark:from-navy-600/25 dark:to-indigo-900/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* ---------- Centered headline block ---------- */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-navy-200/70 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-navy-800 uppercase backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-navy-100">
              <Sparkles className="h-3.5 w-3.5 text-emerald-brand" />
              Intuit Certified Bookkeeper
              <span className="hidden h-3 w-px bg-navy-200 sm:inline-block dark:bg-white/20" />
              QuickBooks Online ProAdvisor (Level 1 &amp; 2)
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-[2.1rem] leading-[1.07] font-bold tracking-tight text-balance text-navy-950 sm:text-5xl lg:text-[3.65rem] dark:text-white">
              Helping small businesses keep their books{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  accurate and organized
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-emerald-400/60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8c60-5 120-6 180-3s80 4 116 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">
              Reconciled accounts, clean records, and month-end reports you can actually read — delivered with
              the documentation to back every number. Certified, detail-obsessed, and available for{" "}
              <strong className="font-semibold text-navy-900 dark:text-slate-200">part-time engagements</strong>.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="#portfolio" size="lg" variant="primary">
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#schedule" size="lg" variant="emerald">
                <CalendarCheck className="h-4 w-4" />
                Schedule a Meeting
              </Button>
              <Button href={RESUME_FILE} download size="lg" variant="secondary">
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[0.82rem] text-slate-600 dark:text-slate-400">
              {[
                { icon: CalendarClock, text: "Part-time · 10–20 hrs/week" },
                { icon: MapPin, text: "Philippines · US hours overlap" },
                { icon: ShieldCheck, text: "NDA & secure access" },
                { icon: CheckCircle2, text: "Free 30-min consultation" },
              ].map((i) => (
                <li key={i.text} className="inline-flex items-center gap-2">
                  <i.icon className="h-4 w-4 shrink-0 text-emerald-brand" />
                  {i.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------- Credential bar ---------- */}
        <Reveal delay={120}>
          <ul className="mx-auto mt-14 flex max-w-4xl flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap">
            {BADGES.map((b) => (
              <li
                key={b.label}
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-100 bg-white/70 px-4 py-2.5 text-center text-[0.78rem] font-semibold text-navy-800 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-700"
              >
                <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-brand transition-transform duration-300 group-hover:scale-110" />
                {b.label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Proof panel (replaces the headshot) ---------- */}
        <Reveal delay={180}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/40 via-transparent to-navy-200/50 blur-2xl dark:from-emerald-800/20 dark:to-navy-800/30"
            />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-2 shadow-[0_30px_80px_-30px_rgba(18,35,61,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="rounded-[1.35rem] border border-navy-100 bg-white dark:border-white/10 dark:bg-navy-950">
                {/* window chrome */}
                <div className="flex items-center gap-3 border-b border-navy-100 px-5 py-3.5 dark:border-white/10">
                  <span aria-hidden className="flex gap-1.5">
                    {["bg-red-400/70", "bg-amber-400/70", "bg-emerald-400/70"].map((c) => (
                      <span key={c} className={`h-2.5 w-2.5 rounded-full ${c}`} />
                    ))}
                  </span>
                  <p className="flex items-center gap-2 text-[0.78rem] font-semibold text-navy-900 dark:text-slate-300">
                    <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-brand" />
                    Month-End Close — December
                  </p>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-wide text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Complete
                  </span>
                </div>

                <div className="grid gap-0 md:grid-cols-[1.35fr_1fr]">
                  {/* ledger rows */}
                  <div className="divide-y divide-navy-100 border-b border-navy-100 md:border-r md:border-b-0 dark:divide-white/10 dark:border-white/10">
                    {LEDGER.map((r, i) => (
                      <div
                        key={r.account}
                        style={{ animationDelay: `${350 + i * 90}ms` }}
                        className="animate-fade-up flex items-center gap-3 px-5 py-3.5 transition-colors duration-300 hover:bg-navy-50/60 dark:hover:bg-white/[0.04]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-brand" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[0.84rem] font-semibold text-navy-950 dark:text-white">
                            {r.account}
                          </span>
                          <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                            {r.status}
                          </span>
                        </span>
                        <span className="text-[0.84rem] font-bold tabular-nums text-navy-950 dark:text-slate-200">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* variance summary */}
                  <div className="flex flex-col justify-center gap-5 px-6 py-7">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                        Unreconciled variance
                      </p>
                      <p className="mt-1.5 flex items-baseline gap-2 text-4xl font-bold tracking-tight text-navy-950 dark:text-white">
                        $0.00
                        <CheckCircle2 className="h-5 w-5 text-emerald-brand" />
                      </p>
                      <p className="mt-1.5 text-[0.8rem] text-slate-500 dark:text-slate-400">
                        Across all 12 periods reviewed.
                      </p>
                    </div>
                    <div className="h-px bg-navy-100 dark:bg-white/10" />
                    <div className="flex items-start gap-2.5">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-brand" />
                      <p className="text-[0.8rem] leading-relaxed text-slate-600 dark:text-slate-400">
                        Every exception documented in a written variance log — no forced adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-500 dark:text-slate-500">
              Illustrative summary from the 12-month accounting cycle case study.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ---------- Stats strip ---------- */}
      <div className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-100 bg-navy-100/70 md:grid-cols-4 dark:border-white/10 dark:bg-white/10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="group bg-white/85 px-5 py-7 text-center backdrop-blur transition-colors duration-300 hover:bg-white dark:bg-navy-950/85 dark:hover:bg-navy-900/80"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold tracking-tight text-navy-950 sm:text-[2.1rem] dark:text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-1.5 block text-[0.78rem] font-medium text-slate-500 dark:text-slate-400">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
