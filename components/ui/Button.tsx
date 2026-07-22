import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Quiet Studio buttons: rectangular (2px radius), no glow shadows, quiet
 * color shifts. `outline` fills to ink on hover; `lightOutline` is the
 * equivalent for dark grounds.
 *
 * Legacy variant names (primary/navy/secondary/gold/white) are kept as
 * aliases so pages awaiting the Phase E sweep stay coherent.
 */
export type ButtonVariant =
  | "ink"
  | "outline"
  | "ghost"
  | "light"
  | "lightOutline"
  | "primary"
  | "navy"
  | "secondary"
  | "gold"
  | "white";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[2px] font-medium tracking-[0.015em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap";

type Canonical = "ink" | "outline" | "ghost" | "light" | "lightOutline";

const ALIAS: Record<ButtonVariant, Canonical> = {
  ink: "ink",
  outline: "outline",
  ghost: "ghost",
  light: "light",
  lightOutline: "lightOutline",
  primary: "ink",
  navy: "ink",
  secondary: "outline",
  gold: "ink",
  white: "light",
};

const variants: Record<Canonical, string> = {
  ink: "bg-ink text-bone hover:bg-night-soft",
  outline:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-bone",
  ghost: "text-ink hover:bg-ink/5",
  light: "bg-bone text-ink hover:bg-white",
  lightOutline:
    "border border-white/35 text-bone hover:border-bone hover:bg-bone hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[13px]",
  md: "h-12 px-7 text-sm",
  lg: "h-[3.375rem] px-9 text-sm",
};

export function buttonVariants({
  variant = "ink",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[ALIAS[variant]], sizes[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  ),
);
Button.displayName = "Button";
