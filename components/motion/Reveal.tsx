"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fade + rise in when scrolled into view. Static under prefers-reduced-motion.
 * Elements pinned to the viewport edge (e.g. a hero's bottom bar) need
 * `viewportMargin="0px"`, since the default -80px margin would keep them
 * from ever counting as in view.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
  viewportMargin = "-80px",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  viewportMargin?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: (custom: { stagger: number; delayChildren: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delayChildren,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Wrap a group whose children should reveal in sequence. */
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      custom={{ stagger, delayChildren }}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered child (use inside <Stagger>). */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
