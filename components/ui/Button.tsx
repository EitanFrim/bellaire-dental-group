import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "navy"
  | "secondary"
  | "gold"
  | "ghost"
  | "white";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  // Primary CTA — consistent cyan treatment everywhere, dark text for AA contrast
  primary:
    "bg-cyan-400 text-navy-950 hover:bg-cyan-300 shadow-[0_10px_30px_-10px_rgba(43,182,232,0.75)] hover:shadow-[0_16px_44px_-12px_rgba(43,182,232,0.85)] hover:-translate-y-0.5",
  navy: "bg-navy-800 text-white hover:bg-navy-700 shadow-[0_10px_30px_-12px_rgba(14,42,86,0.6)] hover:-translate-y-0.5",
  secondary:
    "border border-navy-200 bg-white/70 text-navy-800 hover:bg-white hover:border-navy-300 backdrop-blur",
  gold: "bg-gold-400 text-navy-950 hover:bg-gold-300 hover:-translate-y-0.5",
  ghost: "text-navy-800 hover:bg-navy-50",
  white:
    "bg-white text-navy-900 hover:bg-cream hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-[3.25rem] px-8 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
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
