"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function Accordion({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-baseline gap-5 py-6 text-left"
            >
              <span
                aria-hidden="true"
                className="font-display text-sm tnum text-bronze"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-lg leading-snug text-ink sm:text-xl">
                {item.q}
              </span>
              <Plus
                size={18}
                className={cn(
                  "relative top-0.5 text-ink-soft transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-9 text-pretty leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
