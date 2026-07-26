import {
  Award,
  CalendarClock,
  Clock,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  Lock,
  MessagesSquare,
  Quote,
  ShieldCheck,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS, CERTIFICATIONS, PROCESS, RESUME_FILE, TESTIMONIALS } from "@/lib/data";
import { cn } from "@/utils/cn";
import { Button, Card, Reveal, Section, SectionHeading } from "./ui";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  FileCheck2,
  TrendingUp,
  Lock,
  MessagesSquare,
};

export function Process() {
  return (
    <Section id="process" className="scroll-mt-24">
      <SectionHeading
        eyebrow="How it works"
        title="Starting is simpler than you think"
        sub="Four steps from first conversation to a monthly rhythm you never have to chase. You'll know the scope and the cost before anything begins."
      />

      <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Connector line, desktop only */}
        <span
          aria-hidden
          className="absolute top-[2.35rem] right-8 left-8 hidden h-px bg-gradient-to-r from-emerald-300 via-navy-200 to-transparent lg:block dark:from-emerald-700 dark:via-white/15"
        />
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 100} as="li" className="relative">
            <Card className="group h-full p-6 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_24px_60px_-28px_rgba(15,157,118,0.4)] dark:hover:border-emerald-800">
              <div className="flex items-center justify-between gap-3">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-[0.95rem] font-bold text-white shadow-lg shadow-navy-900/25 transition-transform duration-500 group-hover:scale-110 dark:from-emerald-600 dark:to-emerald-800">
                  {p.step}
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
                  {p.meta}
                </span>
              </div>
              <h3 className="mt-4 text-[0.98rem] font-bold text-navy-950 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-600 dark:text-slate-400">{p.desc}</p>
            </Card>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={140}>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#schedule" size="lg" variant="emerald">
            <CalendarClock className="h-4 w-4" />
            Book step one
          </Button>
          <p className="text-[0.83rem] text-slate-500 dark:text-slate-400">
            Free, 30 minutes, no obligation.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Benefits() {
  return (
    <Section id="benefits" className="scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-50/60 to-transparent dark:via-white/[0.02]"
      />
      <SectionHeading
        eyebrow="Why it matters"
        title="What clean books actually buy you"
        sub="Bookkeeping isn't paperwork. It's the difference between guessing and knowing — at tax time, at the bank, and every time you make a decision."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => {
          const Icon = ICONS[b.icon] ?? ShieldCheck;
          return (
            <Reveal key={b.title} delay={(i % 3) * 90}>
              <Card className="group h-full p-6 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-[0_24px_60px_-28px_rgba(18,35,61,0.45)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-brand text-white shadow-md shadow-emerald-600/25 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <h3 className="text-[0.98rem] font-bold text-navy-950 dark:text-white">{b.title}</h3>
                </div>
                <p className="mt-3.5 text-[0.88rem] leading-relaxed text-slate-600 dark:text-slate-400">
                  {b.desc}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

const ACCENTS: Record<string, string> = {
  emerald: "from-emerald-500 to-emerald-brand shadow-emerald-600/25",
  navy: "from-navy-700 to-navy-950 shadow-navy-900/25",
  slate: "from-slate-500 to-slate-700 shadow-slate-700/25",
};

export function Certifications() {
  return (
    <Section id="certifications" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials you can verify"
        sub="Formal certification plus continuing education — the foundation behind every reconciliation and report I deliver."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 90}>
            <Card className="group h-full p-6 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-30px_rgba(18,35,61,0.5)]">
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3",
                  ACCENTS[c.accent] ?? ACCENTS.navy,
                )}
              >
                <Award className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[0.98rem] leading-snug font-bold text-navy-950 dark:text-white">
                {c.title}
              </h3>
              <p className="mt-1 text-[11.5px] font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
                {c.issuer}
              </p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-slate-600 dark:text-slate-400">{c.desc}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                {c.file && (
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-navy-950 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View certificate
                    <ExternalLink
                      aria-hidden
                      className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover/link:opacity-70"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {c.verifyUrl && (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verify
                    <span className="sr-only">credential (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const RESUME = [
  {
    period: "2021 — Present",
    role: "Human Resource Assistant (Full-Time)",
    org: "Government Sector",
    points: [
      "Maintain confidential employee records and handle performance evaluation and management of employees.",
      "Coordinate compliance filings and audit-ready documentation across departments.",
      "Assist in developming HR plans, policies, and programs in compliance with the Civil Service Commission.",
    ],
  },
  {
    period: "June - July 2026",
    role: "Bookkeeping Training & Certification",
    org: "Intuit · Professional Programs",
    points: [
      "Earned Intuit Certified Bookkeeping Professional credential.",
      "Completed QuickBooks Online ProAdvisor Level 1 and Level 2 certifications.",
      "Completed a 12-month accounting cycle case study across manual, Excel, and QBO workflows.",
    ],
];

export function Resume() {
  return (
    <Section id="resume" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Resume"
            title="Experience, training, and what comes next"
            sub="A short, honest record of where I've been and where I'm heading. Full PDF available for recruiters and hiring managers."
          />
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={RESUME_FILE} download size="lg">
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume (PDF)
              </Button>
              <Button href={RESUME_FILE} target="_blank" rel="noreferrer" size="lg" variant="secondary">
                <ExternalLink className="h-4 w-4" />
                View Online
              </Button>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/25">
                <CalendarClock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-[0.83rem] leading-relaxed text-emerald-900 dark:text-emerald-200">
                  <strong className="font-bold">Part-time availability only.</strong> Roughly 10–20 hours per
                  week, alongside my full-time HR role.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                <FileText className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-brand" />
                <p className="text-[0.83rem] leading-relaxed text-slate-600 dark:text-slate-400">
                  Open to part-time remote bookkeeping roles, accounting-support positions, and ongoing monthly
                  engagements with US small businesses and accounting firms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-emerald-400/60 via-navy-200 to-transparent dark:via-white/15"
          />
          <div className="space-y-5">
            {RESUME.map((r, i) => (
              <Reveal key={r.role} delay={i * 110}>
                <div className="relative pl-11">
                  <span className="absolute top-6 left-0 grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-navy-950 text-[10px] font-bold text-white dark:border-navy-950 dark:bg-emerald-600">
                    {i + 1}
                  </span>
                  <Card className="p-6 transition-transform duration-500 hover:-translate-y-1">
                    <p className="text-[10.5px] font-bold tracking-[0.14em] text-emerald-700 uppercase dark:text-emerald-400">
                      {r.period}
                    </p>
                    <h3 className="mt-2 text-[1.05rem] font-bold text-navy-950 dark:text-white">{r.role}</h3>
                    <p className="text-[0.85rem] text-slate-500 dark:text-slate-400">{r.org}</p>
                    <ul className="mt-4 space-y-2">
                      {r.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2.5 text-[0.86rem] leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-emerald-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Client feedback"
        title="What business owners say"
        sub="Feedback from small business owners and operations leads I've supported with cleanup, reconciliation, and monthly reporting."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 100}>
            <Card className="group h-full p-7 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-30px_rgba(18,35,61,0.45)]">
              {/* figure/figcaption must be paired for valid, accessible markup */}
              <figure className="flex h-full flex-col">
                <Quote
                  aria-hidden
                  className="absolute -top-2 right-4 h-16 w-16 text-navy-950/[0.04] transition-transform duration-500 group-hover:scale-110 dark:text-white/[0.04]"
                />
                <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} aria-hidden className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="relative mt-4 flex-1 text-[0.95rem] leading-relaxed text-pretty text-slate-700 dark:text-slate-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5 dark:border-white/10">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 text-[0.8rem] font-bold text-white dark:from-emerald-600 dark:to-emerald-800"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[0.88rem] font-bold text-navy-950 dark:text-white">
                      {t.name}
                    </span>
                    <span className="block text-[0.78rem] text-slate-500 dark:text-slate-400">
                      {t.role} · {t.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
