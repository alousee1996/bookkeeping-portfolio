import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Section shell ---------------- */
export function Section({
  id,
  children,
  className,
  ...rest
}: { id?: string; children: ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)} {...rest}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-navy-200/70 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-navy-700 uppercase backdrop-blur",
        "dark:border-white/10 dark:bg-white/5 dark:text-navy-100",
        className,
      )}
    >
      <span className="relative inline-flex h-1.5 w-1.5 text-emerald-brand">
        <span className="pulse-ring" />
        <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {children}
    </span>
  );
}

/* ---------------- Heading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2 className="text-3xl font-bold tracking-tight text-balance text-navy-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.1] dark:text-white">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={140}>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Button ---------------- */
type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type,
  ...rest
}: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.97] disabled:opacity-60 whitespace-nowrap";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm sm:text-[0.95rem]",
    lg: "px-6 py-3.5 text-[0.95rem]",
  };
  const variants = {
    primary:
      "bg-navy-950 text-white shadow-lg shadow-navy-950/20 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-xl hover:shadow-navy-950/25 dark:bg-white dark:text-navy-950 dark:shadow-black/40 dark:hover:bg-navy-50",
    emerald:
      "bg-gradient-to-br from-emerald-500 to-emerald-brand text-white shadow-lg shadow-emerald-600/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-600/35",
    secondary:
      "border border-navy-200 bg-white/80 text-navy-900 backdrop-blur hover:-translate-y-0.5 hover:border-navy-300 hover:bg-white hover:shadow-lg hover:shadow-navy-900/10 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
    ghost: "text-navy-800 hover:bg-navy-50 dark:text-slate-200 dark:hover:bg-white/10",
  };
  const cls = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} {...rest}>
      {children}
    </button>
  );
}

/* ---------------- Focus trap + scroll lock for dialogs ---------------- */
export function useDialog(isOpen: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollY = window.scrollY;

    // Lock scroll without the layout jump caused by the disappearing scrollbar.
    const barWidth = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (barWidth > 0) document.body.style.paddingRight = `${barWidth}px`;

    const node = ref.current;
    const selector =
      'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';
    node?.querySelector<HTMLElement>(selector)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(node.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => el.offsetParent !== null,
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
      window.scrollTo({ top: scrollY });
    };
  }, [isOpen, onClose]);

  return ref;
}

/* ---------------- Card ---------------- */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-navy-100 bg-white/80 backdrop-blur-sm transition-all duration-500",
        "shadow-[0_1px_2px_rgba(18,35,61,0.04),0_12px_32px_-16px_rgba(18,35,61,0.18)]",
        "dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------- Animated counter ---------------- */
export function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
