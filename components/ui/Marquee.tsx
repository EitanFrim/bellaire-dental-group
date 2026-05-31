import { cn } from "@/lib/utils";

/** Seamless infinite marquee. Pauses on hover; honors reduced-motion via CSS. */
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
          "flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
