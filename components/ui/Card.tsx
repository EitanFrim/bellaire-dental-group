import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-line bg-white/80 shadow-[0_2px_24px_-12px_rgba(10,31,64,0.18)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
