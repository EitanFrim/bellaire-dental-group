import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand lockup — uses the practice's real logo files (the horizontal
 * tooth + "BELLAIRE DENTAL GROUP" lockup).
 *
 *  - theme="dark"  → navy lockup, for LIGHT backgrounds (header).
 *  - theme="light" → white lockup, for DARK backgrounds (footer).
 *
 * Intrinsic art is 402×75 (≈5.36:1); we render at a fixed height and let width
 * scale to keep it crisp on any display.
 */
export function Logo({
  theme = "dark",
  className,
  href = "/",
  height = 38,
}: {
  theme?: "dark" | "light";
  className?: string;
  href?: string;
  height?: number;
}) {
  const isLight = theme === "light";
  const src = isLight
    ? "/images/brand/logo-horizontal-light.webp"
    : "/images/brand/logo-horizontal.webp";
  const width = Math.round((402 / 75) * height);

  return (
    <Link
      href={href}
      aria-label="Bellaire Dental Group — home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="Bellaire Dental Group"
        width={width}
        height={height}
        priority
        className="h-[var(--logo-h)] w-auto transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ ["--logo-h" as string]: `${height}px` }}
      />
    </Link>
  );
}
