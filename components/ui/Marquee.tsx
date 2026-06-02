import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee.
 *
 * The track is two identical sets, animated by exactly -50%. For a seamless
 * loop, each *half* of the track must be an identical unit — including the
 * trailing space. So the PARENT has no gap, and each set provides its own
 * inter-card gap (`gap-4`) PLUS a matching trailing gap (`pr-4`). That makes
 * each half = (cards + every gap including a trailing one), so -50% lands the
 * second set exactly where the first began. (A gap on the parent instead would
 * leave a half-gap drift and cause a visible stutter on each loop.)
 *
 * Pauses on hover; honors reduced-motion.
 */
export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group mask-fade-x flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {/* Set A */}
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        {/* Set B — exact duplicate, hidden from assistive tech */}
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
