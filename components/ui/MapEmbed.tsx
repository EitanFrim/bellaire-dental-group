import { practice } from "@/lib/practice";
import { cn } from "@/lib/utils";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <iframe
      title={`Map to ${practice.name}`}
      src={practice.googleMapsEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={cn("h-full w-full border-0", className)}
    />
  );
}
