"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { resume } from "@/data/resume";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="relative overflow-hidden border-b border-border px-8 py-12 sm:px-12 sm:py-16"
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
    >
      {/* Aurora backdrop */}
      <span
        aria-hidden
        className="aurora animate-drift-a -right-20 -top-24 h-72 w-72"
        style={{ background: "var(--grad-1)" }}
      />
      <span
        aria-hidden
        className="aurora animate-drift-b -bottom-32 left-1/4 h-80 w-80"
        style={{ background: "var(--grad-3)" }}
      />
      <span
        aria-hidden
        className="aurora animate-drift-a -left-24 top-1/3 h-64 w-64 [animation-delay:-6s]"
        style={{ background: "var(--grad-2)" }}
      />

      <div className="relative">
        <motion.h1
          variants={item}
          className="text-gradient font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {resume.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 text-lg font-medium text-foreground/80 sm:text-xl"
        >
          {resume.title}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
        >
          <span>{resume.location}</span>
          <span className="text-border">·</span>
          <span>{resume.relocation}</span>
          <span className="text-border">·</span>
          <a href={`tel:${resume.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-accent">
            {resume.phone}
          </a>
          <span className="text-border">·</span>
          <a href={`mailto:${resume.email}`} className="transition-colors hover:text-accent">
            {resume.email}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-5 flex flex-wrap gap-2.5">
          {resume.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
}
