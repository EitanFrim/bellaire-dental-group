import { Star } from "lucide-react";
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
      className={cn("inline-flex items-center gap-0.5 text-gold-400", className)}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          strokeWidth={0}
          className={i < full ? "fill-current" : "fill-current opacity-25"}
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}
