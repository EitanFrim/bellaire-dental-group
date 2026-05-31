import { cn } from "@/lib/utils";

const TOOTH =
  "M12 3.2c-1.4 0-2.2.7-3.6.7C7 3.9 6.2 3.1 4.9 4.4 3.4 5.8 3.4 8.2 4 10.5c.5 2 .9 4.6 1.5 6.3.3.9.7 1.9 1.5 1.9.9 0 1.1-1.2 1.3-2.4.2-1.2.4-2.6 1.2-2.6s1 1.4 1.2 2.6c.2 1.2.4 2.4 1.3 2.4.8 0 1.2-1 1.5-1.9.6-1.7 1-4.3 1.5-6.3.6-2.3.6-4.7-.9-6.1C17.8 3.1 17 3.9 15.6 3.9 14.2 3.9 13.4 3.2 12 3.2Z";
const SPARKLE = "M18.4 1.8l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z";

/**
 * The Bellaire tooth + sparkle mark, rebuilt as SVG so it stays crisp at any
 * size and adapts to light/dark surfaces via currentColor classes.
 */
export function BrandMark({
  className,
  toothClassName = "text-navy-800",
  sparkleClassName = "text-cyan-400",
}: {
  className?: string;
  toothClassName?: string;
  sparkleClassName?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d={TOOTH} className={cn("fill-current", toothClassName)} />
      <path d={SPARKLE} className={cn("fill-current", sparkleClassName)} />
    </svg>
  );
}
