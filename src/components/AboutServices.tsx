import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpFromLine,
  BadgeCheck,
  BookOpenCheck,
  Briefcase,
  FileBarChart,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  ListTree,
  Lock,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Table2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Button, Card, Reveal, Section, SectionHeading } from "./ui";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  ListTree,
  ReceiptText,
  Landmark,
  ArrowDownToLine,
  ArrowUpFromLine,
  FileBarChart,
  Wrench,
  Table2,
};

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: "Full-time HR, part-time books",
    desc: "My weekdays are payroll detail, employee records, and compliance documentation. Bookkeeping is part-time by design — 10 to 20 hours a week, capped on purpose.",
  },
  {
    icon: GraduationCap,
    title: "Certified & trained",
    desc: "Intuit Certified Bookkeeping Professional plus QuickBooks Online ProAdvisor Level 1 and Level 2.",
  },
  {
    icon: BookOpenCheck,
    title: "12-month case study",
    desc: "A complete accounting cycle delivered three ways: manual ledgers, Excel, and QuickBooks Online.",
  },
  {
    icon: Lock,
    title: "Confidentiality first",
    desc: "Permission-based access, encrypted document handling, and a signed NDA before any engagement starts.",
  },
];

export function About() {
  return (
    <Section id="about" className="scroll-mt-24">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          {/* Portrait now lives here, where the bio gives it context. */}
          <Reveal>
            <figure className="mb-9 flex items-center gap-5">
              <div className="relative shrink-0">
                <div
                  aria-hidden
                  className="absolute -inset-2 -z-10 rounded-[1.6rem] bg-gradient-to-br from-emerald-200/50 to-navy-200/50 blur-xl dark:from-emerald-800/25 dark:to-navy-800/30"
                />
                <img
                  src="/images/andrea-lou-casuncad.jpg"
                  alt="Andrea Lou Casuncad"
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-24 rounded-2xl border-2 border-white object-cover shadow-lg shadow-navy-900/15 sm:h-28 sm:w-28 dark:border-white/15"
                />
                <span className="absolute -right-1.5 -bottom-1.5 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-md dark:border-navy-950">
                  <BadgeCheck className="h-3.5 w-3.5" />
                </span>
              </div>
              <figcaption>
                <p className="text-[1.15rem] font-bold text-navy-950 dark:text-white">Andrea Lou Casuncad</p>
                <p className="mt-0.5 text-[0.85rem] text-slate-600 dark:text-slate-400">
                  Bookkeeper · HR Assistant
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Available part-time
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <SectionHeading
            align="left"
            eyebrow="About"
            title={
              <>
                A career built on accuracy —
                <br className="hidden sm:block" /> now applied to your books.
              </>
            }
          />
          <Reveal delay={160}>
            <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I currently work as a <strong className="font-semibold text-navy-900 dark:text-slate-200">Human
                Resource Assistant</strong>, where precision, discretion, and clean documentation aren&apos;t
                preferences — they&apos;re requirements. Payroll records, employee files, and compliance
                paperwork have taught me that details either hold up under review, or they don&apos;t.
              </p>
              <p>
                I&apos;m now bringing that same discipline into{" "}
                <strong className="font-semibold text-navy-900 dark:text-slate-200">US bookkeeping</strong>. I hold
                the Intuit Certified Bookkeeping Professional credential and both QuickBooks Online ProAdvisor
                certifications, and I&apos;ve completed a full twelve-month accounting cycle case study covering
                Chart of Accounts setup, transaction recording, journal entries, ledger posting, trial balance,
                adjusting entries, bank reconciliation, and financial statement preparation.
              </p>
              <p>
                My strengths are straightforward: accuracy, organization, thorough documentation,
                confidentiality, and compliance. I ask questions before I assume, I show my work, and I
                deliver books you can hand to a CPA without apologizing for them.
              </p>
              <p>
                One thing I&apos;m upfront about:{" "}
                <strong className="font-semibold text-navy-900 dark:text-slate-200">
                  I take part-time work only
                </strong>{" "}
                — around 10 to 20 hours per week alongside my full-time HR role. That&apos;s a deliberate
                limit, not a shortcoming. A small client list is exactly what lets every reconciliation get
                reviewed properly, and if your volume needs more hours than I can give it, I&apos;ll say so
                before we start.
              </p>
            </div>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#portfolio">
                See the proof
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#resume" variant="secondary">
                <FileSpreadsheet className="h-4 w-4" />
                View Resume
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <Card className="group h-full p-6 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_20px_50px_-24px_rgba(15,157,118,0.5)] dark:hover:border-emerald-800">
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-emerald-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-950 text-white shadow-md shadow-navy-900/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 dark:bg-emerald-600">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[0.98rem] font-bold text-navy-950 dark:text-white">{h.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-600 dark:text-slate-400">{h.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-navy-50/70 to-transparent dark:from-white/[0.03]"
      />
      <SectionHeading
        eyebrow="Services"
        title="Bookkeeping support, end to end"
        sub="Whether you need a clean start, a monthly rhythm, or a rescue mission, every engagement is documented, reconciled, and delivered on schedule."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon] ?? Rocket;
          return (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <Card className="group h-full p-6 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-28px_rgba(18,35,61,0.5)]">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy-100 bg-navy-50 text-navy-900 transition-all duration-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400 dark:group-hover:bg-emerald-950/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[0.98rem] font-bold text-navy-950 dark:text-white">{s.title}</h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-600 dark:text-slate-400">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-950 to-navy-800 px-7 py-8 text-center sm:flex-row sm:justify-between sm:text-left dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300 sm:grid">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[1.05rem] font-bold text-white">Not sure which service you need?</p>
              <p className="mt-1 text-[0.88rem] text-navy-100/80">
                Send me your last complete month — I&apos;ll review it and tell you honestly what it needs.
              </p>
            </div>
          </div>
          <Button href="#contact" variant="emerald" size="lg" className="shrink-0">
            Request a free review
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}


