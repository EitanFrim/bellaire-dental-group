import { Star } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function StarRating({
  value = 5,
  size = 16,
  className,
}: {
  value?: number;
  size?: number;
  className?: string;
}) {
  const full = Math.round(value);
  return (
    <span
      className={cn("inline-flex items-center gap-1 text-bronze", className)}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className={i < full ? "" : "opacity-25"} />
      ))}
    </span>
  );
}
