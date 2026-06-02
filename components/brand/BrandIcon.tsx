import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The tooth + sparkle mark cropped from the practice's real logo — used in
 * small icon contexts (booking modal header, badges). `tone="light"` is the
 * cyan/white version for dark backgrounds.
 */
export function BrandIcon({
  className,
  tone = "dark",
  size = 32,
}: {
  className?: string;
  tone?: "dark" | "light";
  size?: number;
}) {
  return (
    <Image
      src={tone === "light" ? "/images/brand/mark-light.webp" : "/images/brand/mark.webp"}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  );
}
