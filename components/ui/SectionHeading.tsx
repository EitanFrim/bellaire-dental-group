import { cn } from "@/lib/utils";

/**
 * Small-caps editorial micro-label. Replaces the old cyan Eyebrow; keeps the
 * same component API so existing call sites survive the redesign.
 */
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
        "label inline-flex items-center gap-3",
        light ? "text-bone/70" : "text-bronze",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-8", light ? "bg-bone/30" : "bg-bronze/50")}
      />
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
  numeral,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
  as?: React.ElementType;
  /** Optional editorial section numeral, e.g. "02" */
  numeral?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {(eyebrow || numeral) && (
        <div className="flex items-baseline gap-4">
          {numeral && (
            <span
              aria-hidden="true"
              className={cn(
                "font-display text-sm tnum",
                light ? "text-bone/50" : "text-bronze",
              )}
            >
              {numeral}
            </span>
          )}
          {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        </div>
      )}
      <Tag
        className={cn(
          "max-w-3xl text-balance font-display text-[2.1rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.05]",
          light ? "text-bone" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-[17px]",
            align === "center" ? "mx-auto" : "",
            light ? "text-bone/70" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
