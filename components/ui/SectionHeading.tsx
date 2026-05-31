import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-cyan-300" : "text-cyan-700",
        className,
      )}
    >
      <span className={cn("h-px w-7", light ? "bg-cyan-300/60" : "bg-cyan-600/50")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "max-w-3xl text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[2.85rem]",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            align === "center" ? "mx-auto" : "",
            light ? "text-navy-200" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
