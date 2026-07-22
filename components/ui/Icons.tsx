import { cn } from "@/lib/utils";

/**
 * Bespoke icon set for the Quiet Studio design language: a small vocabulary
 * of thin 1.5px-stroke glyphs drawn on a 24px grid. Decorative icon grids
 * are gone from the design; these exist only where a glyph is functional
 * (navigation, actions, ratings).
 */

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function Base({
  size = 16,
  className,
  strokeWidth = 1.5,
  children,
  fill = "none",
}: IconProps & { children: React.ReactNode; fill?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke={fill === "none" ? "currentColor" : "none"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 12h18M15 5.5 21.5 12 15 18.5" />
    </Base>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 18 18 6M8.5 6H18v9.5" />
    </Base>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 12H3M9 5.5 2.5 12 9 18.5" />
    </Base>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5.5 9 6.5 6.5L18.5 9" />
    </Base>
  );
}

export function Phone(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5.2 3.5h3.1l1.9 4.6-2.3 1.6a12.8 12.8 0 0 0 6.4 6.4l1.6-2.3 4.6 1.9v3.1a1.7 1.7 0 0 1-1.9 1.7A16.8 16.8 0 0 1 3.5 5.4a1.7 1.7 0 0 1 1.7-1.9Z" />
    </Base>
  );
}

export function Menu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 9h18M3 15h18" />
    </Base>
  );
}

export function Close(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5.5 5.5 13 13m0-13-13 13" />
    </Base>
  );
}

export function Plus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4.5v15M4.5 12h15" />
    </Base>
  );
}

export function Check(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m4.5 12.5 5.5 5.5L19.5 6" />
    </Base>
  );
}

export function Star(props: IconProps) {
  return (
    <Base {...props} fill="currentColor">
      <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.4 1.1 6.3L12 17.2l-5.7 3 1.1-6.3-4.6-4.4 6.4-.9L12 2.8Z" />
    </Base>
  );
}

export function Loader(props: IconProps) {
  return (
    <Base {...props} className={cn("animate-spin", props.className)}>
      <path d="M12 3a9 9 0 1 0 9 9" />
    </Base>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M13.5 5H19v5.5M19 5l-8 8M16 13.5V19H5V8h5.5" />
    </Base>
  );
}

export function MapPin(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21.5s-7-6.1-7-11.4a7 7 0 0 1 14 0c0 5.3-7 11.4-7 11.4Z" />
      <circle cx="12" cy="10" r="2.4" />
    </Base>
  );
}

export function Clock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Base>
  );
}

export function MessageSquare(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 5.5h15v10h-9l-4 3.2V15.5h-2Z" />
    </Base>
  );
}

export function Navigation(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 4 4 11l7 2 2 7Z" />
    </Base>
  );
}

export function Home(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 11 12 4l8 7M6 9.5V20h12V9.5" />
    </Base>
  );
}

export function Globe(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
    </Base>
  );
}
