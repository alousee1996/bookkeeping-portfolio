import { useEffect, useState } from "react";
import { CalendarCheck, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/utils/cn";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-navy-100/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/75"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 md:h-[4.5rem]">
          <a href="#home" className="group flex shrink-0 items-center gap-2.5" aria-label="Home">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-sm font-bold text-white shadow-md shadow-navy-900/25 transition-transform duration-500 group-hover:scale-105 dark:from-emerald-600 dark:to-emerald-800">
              AC
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-emerald-brand" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[0.95rem] font-bold tracking-tight text-navy-950 dark:text-white">
                Andrea Lou Casuncad
              </span>
              <span className="block text-[10.5px] font-medium tracking-[0.1em] text-slate-500 uppercase dark:text-slate-400">
                Bookkeeping &amp; QBO
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors duration-300",
                  active === l.id
                    ? "text-navy-950 dark:text-white"
                    : "text-slate-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-emerald-brand transition-transform duration-300",
                    active === l.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-9 w-9 place-items-center rounded-full border border-navy-200/70 bg-white/70 text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-md dark:border-white/15 dark:bg-white/5 dark:text-amber-300 dark:hover:bg-white/10"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#schedule"
              className="hidden items-center gap-1.5 rounded-full bg-navy-950 px-4 py-2.5 text-[0.82rem] font-semibold text-white shadow-lg shadow-navy-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-xl sm:inline-flex dark:bg-white dark:text-navy-950 dark:hover:bg-navy-50"
            >
              <CalendarCheck className="h-4 w-4" />
              Schedule a Meeting
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-navy-200/70 bg-white/70 text-navy-900 lg:hidden dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-brand transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute top-0 right-0 flex h-full w-[82%] max-w-sm flex-col gap-1 border-l border-navy-100 bg-white p-6 shadow-2xl transition-transform duration-400 ease-out dark:border-white/10 dark:bg-navy-950",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">Navigate</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-navy-200 text-navy-900 dark:border-white/15 dark:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {[...LINKS, { id: "schedule", label: "Schedule a Meeting" }].map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 35}ms` }}
              className={cn(
                "rounded-xl px-4 py-3 text-[0.95rem] font-medium text-navy-900 transition-colors hover:bg-navy-50 dark:text-slate-200 dark:hover:bg-white/5",
                open && "animate-fade-up",
              )}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-auto rounded-2xl bg-navy-50 p-4 text-sm text-navy-800 dark:bg-white/5 dark:text-slate-300">
            <p className="font-semibold">Part-time availability</p>
            <p className="mt-1 text-[0.8rem] text-slate-600 dark:text-slate-400">
              10–20 hours per week. Free 30-minute consultation, no obligation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
