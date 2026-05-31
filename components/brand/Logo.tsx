import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { cn } from "@/lib/utils";

/**
 * Brand lockup. `theme="dark"` = navy text for light backgrounds (header on
 * scroll). `theme="light"` = white text for dark backgrounds (footer, hero).
 */
export function Logo({
  theme = "dark",
  className,
  href = "/",
}: {
  theme?: "dark" | "light";
  className?: string;
  href?: string;
}) {
  const isLight = theme === "light";
  return (
    <Link
      href={href}
      aria-label="Bellaire Dental Group — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <BrandMark
        className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]"
        toothClassName={isLight ? "text-white" : "text-navy-800"}
        sparkleClassName={isLight ? "text-cyan-300" : "text-cyan-400"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-[0.07em]",
            isLight ? "text-white" : "text-navy-900",
          )}
        >
          BELLAIRE DENTAL
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-semibold tracking-[0.42em]",
            isLight ? "text-cyan-300" : "text-cyan-600",
          )}
        >
          GROUP
        </span>
      </span>
    </Link>
  );
}
