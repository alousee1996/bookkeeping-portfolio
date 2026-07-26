import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Floating "back to top" control. Appears once the visitor is well past the
 * hero, and sits above the mobile safe-area inset.
 */
export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={cn(
        "group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 grid h-11 w-11 place-items-center rounded-full",
        "border border-navy-100 bg-white/85 text-navy-900 shadow-lg shadow-navy-950/10 backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-xl",
        "sm:right-6 sm:bottom-6 dark:border-white/15 dark:bg-navy-900/85 dark:text-white dark:hover:text-emerald-400",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
