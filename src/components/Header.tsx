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
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="relative overflow-hidden border-b border-border bg-accent-soft px-8 py-10 sm:px-12 sm:py-14"
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
    >
      <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-blob" />
      <span aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent/5 blur-3xl animate-blob [animation-delay:-4s]" />

      <div className="relative">
        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
        >
          {resume.name}
        </motion.h1>
        <motion.p variants={item} className="mt-2 text-lg text-accent sm:text-xl">
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

        <motion.div variants={item} className="mt-4 flex flex-wrap gap-2">
          {resume.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
}
