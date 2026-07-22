import { cn } from "@/lib/utils";

/** Quiet Studio surface: hairline-ruled paper, no shadow, no blur. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-[3px] border border-line bg-paper", className)}>
      {children}
    </div>
  );
}
