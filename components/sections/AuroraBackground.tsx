"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * The signature "breathing" aurora — soft brand-colored light that drifts and
 * gently expands/contracts, and (on capable devices) leans toward the cursor.
 * Purely decorative; disabled for reduced-motion users.
 */
export function AuroraBackground({
  className,
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce || !interactive) return;
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", `${x * 34}px`);
        el.style.setProperty("--my", `${y * 34}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce, interactive]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Generated aurora plate (very soft) under the animated blooms */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: "url(/images/generated/aurora.webp)" }}
      />
      <div
        className="absolute -left-[8%] -top-[12%] h-[58vh] w-[58vh] rounded-full bg-cyan-300/45 blur-3xl animate-breathe"
        style={{ translate: "var(--mx, 0px) var(--my, 0px)" }}
      />
      <div className="absolute -right-[6%] top-[6%] h-[52vh] w-[52vh] rounded-full bg-aqua/70 blur-3xl animate-float" />
      <div className="absolute -bottom-[18%] left-[24%] h-[48vh] w-[64vh] rounded-full bg-mint/70 blur-3xl animate-breathe" />
      <div
        className="absolute right-[18%] top-[38%] h-[30vh] w-[30vh] rounded-full bg-gold-200/40 blur-3xl animate-float"
        style={{ translate: "calc(var(--mx, 0px) * -0.6) calc(var(--my, 0px) * -0.6)" }}
      />
    </div>
  );
}
