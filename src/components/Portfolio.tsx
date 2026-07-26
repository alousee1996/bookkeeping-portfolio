import { useCallback, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Download, Target, Workflow, X, ZoomIn } from "lucide-react";
import { PROJECTS, WORKFLOW, type Project } from "@/lib/data";
import { cn } from "@/utils/cn";
import { Button, Card, Reveal, Section, SectionHeading, useDialog } from "./ui";

const FILTERS = ["All", "Case Study", "QuickBooks Online", "Excel", "Manual"] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  const closeModal = useCallback(() => setOpen(null), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  // The lightbox sits above the modal, so only one trap is active at a time.
  const modalRef = useDialog(!!open && !lightbox, closeModal);
  const lightboxRef = useDialog(!!lightbox, closeLightbox);

  return (
    <Section id="portfolio" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Proof of work, not promises"
        sub="Every project below includes the objective, the process, the tools, and the measurable result. Open any card to see the full breakdown."
      />

      {/* Filters */}
      <Reveal delay={120}>
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-full border border-navy-100 bg-white/70 p-1.5 backdrop-blur dark:border-white/10 dark:bg-white/5"
        >
          {FILTERS.map((f) => {
            const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-all duration-300",
                  filter === f
                    ? "bg-navy-950 text-white shadow-md shadow-navy-900/20 dark:bg-white dark:text-navy-950"
                    : "text-slate-600 hover:bg-navy-50 hover:text-navy-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white",
                )}
              >
                {f}
                <span
                  className={cn(
                    "text-[10px] font-bold tabular-nums transition-colors",
                    filter === f ? "text-white/60 dark:text-navy-950/50" : "text-slate-400 dark:text-slate-600",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <p aria-live="polite" className="sr-only">
        Showing {list.length} {list.length === 1 ? "project" : "projects"}
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>

      {/* Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90}>
            <Card className="group flex h-full flex-col hover:-translate-y-2 hover:shadow-[0_30px_70px_-32px_rgba(18,35,61,0.55)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/5 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-white uppercase backdrop-blur-md">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-white uppercase">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.05rem] leading-snug font-bold text-navy-950 dark:text-white">{p.title}</h3>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-navy-100 bg-navy-50/70 px-2 py-1 text-[10.5px] font-semibold text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50/70 px-3 py-2.5 text-[0.8rem] leading-relaxed font-medium text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {p.outcome}
                </p>

                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  aria-label={`View details for ${p.title}`}
                  className="group/btn mt-5 inline-flex items-center gap-1.5 self-start text-[0.85rem] font-bold text-navy-950 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400"
                >
                  View details
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <FeaturedCaseStudy project={featured} onOpen={() => setOpen(featured)} />

      {/* Detail modal */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-navy-950/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-up my-6 w-full max-w-4xl overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-2xl dark:border-white/10 dark:bg-navy-950"
          >
            <div className="relative h-44 sm:h-56">
              <img
                src={open.image}
                alt=""
                width={800}
                height={500}
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close project details"
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute inset-x-5 bottom-4 sm:inset-x-8">
                <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-white uppercase backdrop-blur">
                  {open.category}
                </span>
                <h3
                  id="project-modal-title"
                  className="mt-2.5 text-xl font-bold text-balance text-white sm:text-2xl"
                >
                  {open.title}
                </h3>
              </div>
            </div>

            <div className="max-h-[62vh] overflow-y-auto px-5 py-7 sm:px-8">
              <div className="grid gap-7 md:grid-cols-[1.4fr_1fr]">
                <div className="space-y-7">
                  <Block title="Overview">
                    <p>{open.overview}</p>
                  </Block>
                  <Block title="Objective">
                    <p>{open.objective}</p>
                  </Block>
                  <Block title="Process">
                    <ol className="space-y-2.5">
                      {open.process.map((s, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy-950 text-[10px] font-bold text-white dark:bg-emerald-600">
                            {i + 1}
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </Block>
                  <Block title="Screenshots">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {open.screenshots.map((s) => (
                        <button
                          key={s.src + s.caption}
                          type="button"
                          onClick={() => setLightbox(s)}
                          aria-label={`Enlarge screenshot: ${s.caption}`}
                          className="group relative overflow-hidden rounded-xl border border-navy-100 dark:border-white/10"
                        >
                          <img
                            src={s.src}
                            alt={s.caption}
                            width={800}
                            height={500}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 grid place-items-center bg-navy-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ZoomIn className="h-6 w-6 text-white" />
                          </span>
                          <span className="block bg-white px-3 py-2 text-left text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-400">
                            {s.caption}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Block>
                </div>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">Results</p>
                    <dl className="mt-3 space-y-3">
                      {open.results.map((r) => (
                        <div key={r.label} className="flex items-baseline justify-between gap-3">
                          <dt className="text-[0.82rem] text-slate-600 dark:text-slate-400">{r.label}</dt>
                          <dd className="text-[0.95rem] font-bold text-navy-950 dark:text-white">{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">Tools used</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {open.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-navy-100 bg-white px-2 py-1 text-[11px] font-semibold text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                      Skills demonstrated
                    </p>
                    <ul className="mt-3 space-y-2">
                      {open.skills.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-[0.84rem] text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-brand" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {open.downloads && open.downloads.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">
                        Sample files
                      </p>
                      <ul className="mt-3 space-y-2">
                        {open.downloads.map((d) => (
                          <li key={d.file}>
                            <a
                              href={d.file}
                              download
                              className="group flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white px-3 py-2.5 text-[0.82rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-400"
                            >
                              <Download className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                              {d.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button href="#schedule" variant="emerald" className="w-full" onClick={() => setOpen(null)}>
                    Discuss a similar project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={closeLightbox}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-4 bg-navy-950/90 p-5 backdrop-blur"
        >
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-up max-h-[78vh] w-auto max-w-full rounded-2xl shadow-2xl"
          />
          <p className="text-sm text-white/80">{lightbox.caption}</p>
          <button
            type="button"
            aria-label="Close image"
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/25"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase">{title}</h4>
      <div className="mt-3 text-[0.9rem] leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

function FeaturedCaseStudy({ project, onOpen }: { project: Project; onOpen: () => void }) {
  // Pull the headline metrics straight from the project so they can never
  // drift out of sync with the case study detail view.
  const stats = project.results.slice(0, 3);
  return (
    <div id="case-study" className="mt-20 scroll-mt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-navy-800/40 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d2a3f] p-7 shadow-[0_40px_100px_-40px_rgba(10,21,38,0.8)] sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="animate-drift absolute -top-28 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]"
          />
          <div
            aria-hidden
            className="animate-drift-slow absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-navy-400/20 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-emerald-300 uppercase backdrop-blur">
                <Target className="h-3.5 w-3.5" />
                Featured Case Study
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-balance text-white sm:text-[2.1rem] sm:leading-tight">
                Full Accounting Cycle — 12 months, three tools, zero variance
              </h3>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-navy-100/80">
                A complete twelve-month bookkeeping project for a sample US service company, executed with
                manual ledgers, Excel, and QuickBooks Online. It covers Chart of Accounts setup, transaction
                recording, journal entries, ledger posting, trial balance, adjusting entries, bank
                reconciliation, and full financial statement preparation.
              </p>

              <dl className="mt-7 grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur transition-colors duration-300 hover:bg-white/10"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-lg font-bold text-white sm:text-xl">{s.value}</span>
                      <span className="mt-1 block text-[11px] text-navy-100/70">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={onOpen} variant="emerald" size="lg">
                  Read the full case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  href="#schedule"
                  size="lg"
                  className="border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  variant="ghost"
                >
                  Discuss your books
                </Button>
              </div>
            </div>

            {/* Workflow diagram */}
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
              <p className="mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-navy-100/70 uppercase">
                <Workflow className="h-3.5 w-3.5" />
                The accounting cycle, step by step
              </p>
              <ol className="grid gap-2.5 sm:grid-cols-2">
                {WORKFLOW.map((w, i) => (
                  <li
                    key={w.step}
                    style={{ transitionDelay: `${i * 40}ms` }}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-500/20 text-[11px] font-bold text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      {w.step}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.82rem] font-semibold text-white">{w.label}</span>
                      <span className="block truncate text-[10.5px] text-navy-100/60">{w.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
