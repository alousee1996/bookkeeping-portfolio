import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Minus,
  Plus,
  Send,
  Sparkles,
  Video,
} from "lucide-react";
import { CALENDLY_URL, FAQS } from "@/lib/data";
import { LinkedInIcon } from "./icons";
import { cn } from "@/utils/cn";
import { Button, Card, Reveal, Section, SectionHeading } from "./ui";

// Branding params Calendly supports on embedded widgets. The base URL comes
// from CALENDLY_URL in src/lib/data.ts — change it there, not here.
const CALENDLY_EMBED = `${CALENDLY_URL}${CALENDLY_URL.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=ffffff&primary_color=0f9d76&text_color=12233d`;

export function Schedule() {
  return (
    <Section id="schedule" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-white/70 p-6 backdrop-blur sm:p-10 dark:border-white/10 dark:bg-white/[0.03]">
        <div
          aria-hidden
          className="animate-drift-slow pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-300/25 blur-[90px] dark:bg-emerald-700/20"
        />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Schedule a Meeting"
              title="Let's connect"
              sub="Whether you're looking for a part-time bookkeeper, want to review my portfolio, or would like to discuss an opportunity, I'd be glad to connect."
            />
            <Reveal delay={180}>
              <ul className="mt-7 space-y-3">
                {[
                  { icon: Clock3, t: "30 minutes", d: "Enough time to review your books and next steps." },
                  { icon: Video, t: "Google Meet or Zoom", d: "Link sent automatically after you book." },
                  { icon: CalendarClock, t: "Part-time scope", d: "We'll confirm the hours fit before anything starts." },
                  { icon: CheckCircle2, t: "No obligation", d: "You'll leave with clear recommendations either way." },
                ].map((i) => (
                  <li key={i.t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy-950 text-white dark:bg-emerald-600">
                      <i.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.9rem] font-bold text-navy-950 dark:text-white">{i.t}</span>
                      <span className="block text-[0.82rem] text-slate-600 dark:text-slate-400">{i.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-xl shadow-navy-900/10 dark:border-white/10 dark:bg-navy-950">
              <div className="flex items-center justify-between gap-3 border-b border-navy-100 px-5 py-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck className="h-4.5 w-4.5 text-emerald-brand" />
                  <span className="text-[0.88rem] font-bold text-navy-950 dark:text-white">
                    Book a 30-minute consult
                  </span>
                </div>
                <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold tracking-wide text-emerald-700 uppercase sm:inline dark:bg-emerald-950/50 dark:text-emerald-400">
                  Calendly
                </span>
              </div>
              <iframe
                title="Schedule a meeting with Andrea Lou Casuncad on Calendly"
                src={CALENDLY_EMBED}
                loading="lazy"
                className="h-[560px] w-full border-0 bg-white"
              />
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-navy-100 px-5 py-4 text-center dark:border-white/10">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open scheduling page in a new tab
                </a>
                <span aria-hidden className="hidden h-3 w-px bg-navy-200 sm:inline-block dark:bg-white/15" />
                <p className="text-[0.8rem] text-slate-500 dark:text-slate-400">
                  Not loading?{" "}
                  <a
                    href="#contact"
                    className="font-semibold text-emerald-700 underline underline-offset-2 dark:text-emerald-400"
                  >
                    Send a message instead
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered honestly"
            sub="If something isn't covered here, ask directly — I'd rather give you a straight answer than a sales pitch."
          />
          <Reveal delay={200}>
            <Button href="#contact" className="mt-7">
              Ask a question
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <Card className={cn("overflow-hidden transition-colors", isOpen && "border-emerald-200 dark:border-emerald-800/60")}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-[0.95rem] font-bold text-navy-950 dark:text-white">{f.q}</span>
                      <span
                        className={cn(
                          "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "rotate-180 border-emerald-500 bg-emerald-500 text-white"
                            : "border-navy-200 text-navy-700 dark:border-white/15 dark:text-slate-300",
                        )}
                      >
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      // `invisible` keeps the collapse animation while removing the
                      // panel from the tab order and the accessibility tree.
                      isOpen ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.89rem] leading-relaxed text-slate-600 dark:text-slate-400">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[0.8rem] font-semibold text-navy-900 dark:text-slate-300"
      >
        {label}{" "}
        {required ? (
          <span className="text-emerald-600" aria-hidden>
            *
          </span>
        ) : (
          <span className="font-normal text-slate-400">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.75rem] font-medium text-red-600 dark:text-red-400">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

type ContactForm = { name: string; email: string; company: string; hours: string; message: string };
type FormErrors = Partial<Record<keyof ContactForm, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: ContactForm): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  else if (f.name.trim().length < 2) e.name = "That name looks too short.";
  if (!f.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.message.trim()) e.message = "Please tell me a little about your books.";
  else if (f.message.trim().length < 15) e.message = "A sentence or two helps me give a useful reply.";
  return e;
}

const EMPTY: ContactForm = { name: "", email: "", company: "", hours: "", message: "" };

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactForm, boolean>>>({});

  const update =
    (k: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...form, [k]: e.target.value };
      setForm(next);
      if (touched[k]) setErrors(validate(next));
    };

  const blur = (k: keyof ContactForm) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(form));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) {
      // Move focus to the first invalid field so keyboard users aren't stranded.
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }
    setSent(true);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setTouched({});
    setSent(false);
  };

  const field =
    "w-full rounded-xl border bg-white/80 px-4 py-3 text-[0.9rem] text-navy-950 placeholder:text-slate-400 transition-all duration-300 focus:bg-white focus:ring-4 focus:outline-none dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";
  const ok = "border-navy-100 focus:border-emerald-400 focus:ring-emerald-500/10 dark:border-white/10";
  const bad = "border-red-300 focus:border-red-400 focus:ring-red-500/10 dark:border-red-500/50";
  const fieldCls = (k: keyof ContactForm) => cn(field, errors[k] ? bad : ok);

  return (
    <Section id="contact" className="scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Tell me about your books"
            sub="Share where things stand — behind, disorganized, or just growing faster than your spreadsheet. Let me know roughly how many hours a week you'd need, and I'll reply within one business day."
          />

          <Reveal delay={180}>
            <ul className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "Email", value: "andrea.casuncad.books@gmail.com", href: "mailto:andrea.casuncad.books@gmail.com" },
                { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/andrea-casuncad", href: "https://www.linkedin.com/" },
                { icon: MapPin, label: "Location", value: "Philippines · serving US clients", href: undefined },
              ].map((c) => {
                const Inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-navy-100 bg-white text-navy-900 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-400">
                      <c.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                        {c.label}
                      </span>
                      <span className="block truncate text-[0.88rem] font-semibold text-navy-950 dark:text-white">
                        {c.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2 transition-colors hover:border-navy-100 hover:bg-white/60 dark:hover:border-white/10 dark:hover:bg-white/5"
                      >
                        {Inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-3.5 p-2">{Inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/25">
              <Sparkles className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <p className="text-[0.85rem] leading-relaxed text-emerald-900 dark:text-emerald-200">
                <strong className="font-bold">Accepting a limited number of part-time clients.</strong> I work
                10–20 hours per week alongside my full-time HR role, so I only take on what I can do properly.
                First consultation and book review are free — no card, no commitment.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Card className="p-7 sm:p-9">
            {sent ? (
              <div
                role="status"
                className="animate-fade-up flex min-h-[26rem] flex-col items-center justify-center gap-4 text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-bold text-navy-950 dark:text-white">Message received</h3>
                <p className="max-w-sm text-[0.9rem] leading-relaxed text-slate-600 dark:text-slate-400">
                  Thank you, {form.name.trim().split(" ")[0] || "there"} — I&apos;ll reply within one business
                  day. If it&apos;s urgent, book a slot in the scheduling section above.
                </p>
                <Button variant="secondary" onClick={reset}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                {/* Honeypot: hidden from people, tempting to bots. */}
                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      onBlur={blur("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldCls("name")}
                      placeholder="Jane Miller"
                    />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      onBlur={blur("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={fieldCls("email")}
                      placeholder="jane@company.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="company" label="Company">
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={update("company")}
                      className={fieldCls("company")}
                      placeholder="Miller Landscaping LLC"
                    />
                  </Field>
                  <Field id="hours" label="Hours needed / week">
                    <select
                      id="hours"
                      name="hours"
                      value={form.hours}
                      onChange={update("hours")}
                      className={cn(fieldCls("hours"), "cursor-pointer")}
                    >
                      <option value="">Not sure yet</option>
                      <option value="under-5">Under 5 hours</option>
                      <option value="5-10">5–10 hours</option>
                      <option value="10-20">10–20 hours</option>
                      <option value="one-off">One-off project</option>
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Message" required error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    onBlur={blur("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={cn(fieldCls("message"), "resize-y")}
                    placeholder="We're four months behind in QuickBooks and need to be ready for our CPA in June…"
                  />
                </Field>

                <Button size="lg" variant="emerald" className="w-full" type="submit">
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  Send message
                </Button>
                <p className="text-center text-[0.75rem] text-slate-500 dark:text-slate-500">
                  Your details stay confidential and are never shared.
                </p>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section className="pb-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-[#0c2b3d] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="animate-drift absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-emerald-500/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="animate-drift-slow absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-navy-300/20 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-emerald-300 uppercase backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Part-time availability · Limited slots
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance text-white sm:text-[2.6rem] sm:leading-[1.1]">
              Bookkeeping support built on accuracy, organization, and trust.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-pretty text-navy-100/80">
              Let&apos;s get your books current, reconciled, and genuinely useful — so you can spend your time
              running the business instead of reconstructing it. Part-time engagements only, which means the
              accounts I do take on get my full attention.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="#schedule" size="lg" variant="emerald">
                <CalendarCheck className="h-4 w-4" />
                Schedule a free consult
              </Button>
              <Button
                href="#portfolio"
                size="lg"
                variant="ghost"
                className="border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                Review the portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
