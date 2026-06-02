"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function ThemeToggle({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/70 text-foreground shadow-soft backdrop-blur transition-colors hover:border-accent hover:text-accent"
    >
      {/* Until mounted, render an empty box to avoid a hydration/icon flash */}
      <span className="relative h-5 w-5">
        {mounted && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={dark ? "moon" : "sun"}
              initial={reduce ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid place-items-center"
            >
              {dark ? <MoonIcon /> : <SunIcon />}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
