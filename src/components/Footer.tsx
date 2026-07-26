import { ArrowUp, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "./icons";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "Credentials",
    links: [
      { label: "Certifications", href: "#certifications" },
      { label: "Featured Case Study", href: "#case-study" },
      { label: "Resume", href: "#resume" },
      { label: "Client Feedback", href: "#testimonials" },
    ],
  },
  {
    title: "Work together",
    links: [
      { label: "Services", href: "#services" },
      { label: "Schedule a Meeting", href: "#schedule" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-100 bg-white/70 px-5 pt-16 pb-8 sm:px-8 dark:border-white/10 dark:bg-[#070f1c]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-sm font-bold text-white dark:from-emerald-600 dark:to-emerald-800">
                AC
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-emerald-brand" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.95rem] font-bold text-navy-950 dark:text-white">
                  Andrea Lou Casuncad
                </span>
                <span className="block text-[10.5px] font-medium tracking-[0.1em] text-slate-500 uppercase">
                  Bookkeeping &amp; QBO
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[1.02rem] leading-snug font-semibold text-balance text-navy-950 dark:text-white">
              Accurate Books. Organized Records. Continuous Growth.
            </p>
            <p className="mt-3 max-w-sm text-[0.85rem] leading-relaxed text-slate-600 dark:text-slate-400">
              Intuit Certified Bookkeeper and QuickBooks Online ProAdvisor (Level 1 &amp; 2) supporting US small
              businesses with clean, reconciled, decision-ready books. Available for part-time engagements only.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-xl border border-navy-100 bg-white text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:andrea.casuncad.books@gmail.com"
                aria-label="Send an email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-navy-100 bg-white text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-navy-100 bg-white px-3 py-2.5 text-[0.78rem] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-emerald-brand" />
                Philippines
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="text-[10.5px] font-bold tracking-[0.16em] text-slate-500 uppercase">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-[0.87rem] text-slate-600 transition-colors hover:text-navy-950 dark:text-slate-400 dark:hover:text-white"
                      >
                        <span className="h-px w-0 bg-emerald-brand transition-all duration-300 group-hover:w-3" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-100 pt-6 sm:flex-row dark:border-white/10">
          <p className="text-center text-[0.78rem] text-slate-500 sm:text-left dark:text-slate-500">
            © {new Date().getFullYear()} Andrea Lou Casuncad. All rights reserved. · Built for accuracy, designed
            for
            trust.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-2 text-[0.78rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
