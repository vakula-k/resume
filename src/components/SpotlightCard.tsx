"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

/**
 * A card that renders a soft radial glow tracking the pointer.
 * The glow itself lives in the `.spotlight::before` pseudo-element (globals.css);
 * here we just feed it the cursor position via CSS custom properties.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight ${className ?? ""}`}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
