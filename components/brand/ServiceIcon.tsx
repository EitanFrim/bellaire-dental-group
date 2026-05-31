import type { IconKey } from "@/lib/services";
import { cn } from "@/lib/utils";

const TOOTH_D =
  "M12 3.4c-1.3 0-2 .6-3.3.6-1.3 0-2-.8-3.2.4C4 5.7 4 7.9 4.6 10c.5 1.9.8 4.3 1.4 5.9.3.9.6 1.8 1.4 1.8.8 0 1-1.1 1.2-2.2.2-1.1.4-2.4 1.1-2.4s.9 1.3 1.1 2.4c.2 1.1.4 2.2 1.2 2.2.8 0 1.1-.9 1.4-1.8.6-1.6.9-4 1.4-5.9.6-2.1.6-4.3-.9-5.6-1.2-1.2-1.9-.4-3.2-.4-1.3 0-2-.6-3.3-.6Z";

/** Per-service line glyphs (lucide has no dental icons, so these are custom). */
function glyph(key: IconKey) {
  switch (key) {
    case "whitening":
    case "veneers":
    case "smile":
      return (
        <>
          <path d={TOOTH_D} />
          <path
            d="M18.7 2.2l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z"
            fill="currentColor"
            stroke="none"
          />
        </>
      );
    case "tooth":
    case "filling":
      return <path d={TOOTH_D} />;
    case "child":
      return (
        <>
          <path d={TOOTH_D} />
          <circle cx="10.2" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="13.8" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
          <path d="M10.2 12.6c.7.7 2.9.7 3.6 0" />
        </>
      );
    case "aligner":
      return (
        <>
          <path d="M4 7.5c0 6 3.6 10.5 8 10.5s8-4.5 8-10.5" />
          <path d="M6.6 7.5c0 4.7 2.6 8 5.4 8s5.4-3.3 5.4-8" />
          <path d="M9 8.2v1.4M12 8.4v1.6M15 8.2v1.4" />
        </>
      );
    case "implant":
      return (
        <>
          <path d="M8.2 9.4c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .9-.3 1.7-.8 2.4H9c-.5-.7-.8-1.5-.8-2.4Z" />
          <path d="M12 12v8.4M10 14.4h4M10.4 16.7h3.2M10.8 19h2.4" />
        </>
      );
    case "crown":
      return (
        <>
          <path d="M4.5 16.5l-.8-8 4.6 3L12 6l3.7 5.5 4.6-3-.8 8z" />
          <path d="M5 19h14" />
        </>
      );
    case "dentures":
      return (
        <>
          <path d="M4 8.5c0 5.2 3.6 9 8 9s8-3.8 8-9" />
          <path d="M4 8.5c1.6-1.4 4.4-2.2 8-2.2s6.4.8 8 2.2" />
          <path d="M8 7.3v3M12 6.6v3.4M16 7.3v3" />
        </>
      );
    case "sleep":
      return (
        <>
          <path d="M20 14.6A8 8 0 0 1 9.4 4 7 7 0 1 0 20 14.6Z" />
          <path d="M14.5 4h3.5l-3.5 3.2H18" />
        </>
      );
    case "emergency":
      return (
        <>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2.2" />
          <path d="M12 8.4v7.2M8.4 12h7.2" />
        </>
      );
    case "botox":
      return (
        <path d="M12 3.6c3 3.9 5.4 6.4 5.4 9.4a5.4 5.4 0 0 1-10.8 0c0-3 2.4-5.5 5.4-9.4Z" />
      );
    case "gum":
      return (
        <>
          <path d="M12 3.4l6.5 2.3v5.1c0 4-2.8 7.4-6.5 8.7-3.7-1.3-6.5-4.7-6.5-8.7V5.7L12 3.4Z" />
          <path d="M9 11.6l2 2 4-4.2" />
        </>
      );
    case "screening":
      return (
        <>
          <circle cx="11" cy="10.5" r="6.2" />
          <path d="M15.6 15.2l4 4" />
          <path d="M8.6 10.5h4.8M11 8.1v4.8" />
        </>
      );
    default:
      return <path d={TOOTH_D} />;
  }
}

export function ServiceIcon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
      focusable="false"
    >
      {glyph(name)}
    </svg>
  );
}
