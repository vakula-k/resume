"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { resume } from "@/data/resume";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      className="relative overflow-hidden border-b border-border px-8 py-12 sm:px-12 sm:py-14"
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
    >
      {/* Aurora backdrop — kept subtle so the name stays legible */}
      <span
        aria-hidden
        className="aurora animate-drift-a -right-24 -top-28 h-72 w-72 opacity-25"
        style={{ background: "var(--grad-1)" }}
      />
      <span
        aria-hidden
        className="aurora animate-drift-b -bottom-36 left-1/4 h-80 w-80 opacity-[0.18]"
        style={{ background: "var(--grad-3)" }}
      />
      <span
        aria-hidden
        className="aurora animate-drift-a -left-24 top-1/3 h-64 w-64 opacity-20 [animation-delay:-6s]"
        style={{ background: "var(--grad-2)" }}
      />

      {/* Theme toggle, pinned top-right */}
      <motion.div variants={item} className="absolute right-6 top-6 z-10 no-print">
        <ThemeToggle />
      </motion.div>

      <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:gap-8">
        {/* Text column */}
        <div className="min-w-0 lg:self-center">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {resume.relocation}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-gradient mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
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
                className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm font-medium text-foreground shadow-soft backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Portrait — background removed, centered in the space beside the text and flush to the header base */}
        <div className="flex justify-center lg:flex-1">
          <motion.div variants={item} className="relative shrink-0 lg:-mb-14">
            <span
              aria-hidden
              className="absolute left-1/2 top-[42%] -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--grad-2), var(--grad-3) 45%, transparent 72%)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.webp"
              alt={resume.name}
              width={644}
              height={1100}
              className="relative block h-[380px] w-auto object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.5)] sm:h-[440px] lg:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
