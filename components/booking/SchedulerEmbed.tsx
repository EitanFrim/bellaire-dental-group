"use client";

import { useState } from "react";
import { ExternalLink, Loader, Phone } from "@/components/ui/Icons";
import { schedulerUrl } from "@/lib/scheduler";
import { practice } from "@/lib/practice";
import { cn } from "@/lib/utils";

/**
 * Embeds the practice's real PMS-integrated scheduler (Dolfin "Web Sched")
 * in an iframe - the same secure booking flow the practice already uses.
 *
 * The scheduler is a multi-step, cross-origin app, so the browser won't let us
 * read its content height to auto-size. Instead:
 *  - "page" variant: a tall, viewport-responsive box (scales to the screen).
 *  - "modal" variant: fills the available height of the dialog.
 * The iframe scrolls its own content if a step is taller than the box, and we
 * always surface an "open in new tab" escape hatch + a call fallback.
 */
export function SchedulerEmbed({
  variant = "page",
}: {
  variant?: "page" | "modal";
}) {
  const [loaded, setLoaded] = useState(false);

  if (!schedulerUrl) return null;

  const isModal = variant === "modal";

  return (
    <div className={cn(isModal && "flex h-full min-h-0 flex-col")}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs text-ink-soft">
          Real-time scheduling, synced with our front desk.
        </p>
        <a
          href={schedulerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-ink transition-colors hover:text-bronze"
        >
          Open in new tab <ExternalLink size={13} />
        </a>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-[2px] border border-line bg-paper",
          isModal && "min-h-0 flex-1",
        )}
        // Page variant: tall and responsive to the viewport so the calendar /
        // patient-detail steps fit without clipping. dvh accounts for mobile
        // browser chrome.
        style={
          isModal
            ? undefined
            : { height: "clamp(560px, calc(100dvh - 13rem), 1024px)" }
        }
      >
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-soft">
            <Loader size={22} className="text-bronze" />
            <span className="text-sm">Loading the scheduler…</span>
          </div>
        )}
        <iframe
          src={schedulerUrl}
          title={`Book an appointment with ${practice.name}`}
          onLoad={() => setLoaded(true)}
          className="h-full w-full"
          // The scheduler needs forms + same-origin session handling.
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation-by-user-activation"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-3 shrink-0 text-center text-xs text-ink-soft">
        Trouble loading?{" "}
        <a
          href={`tel:${practice.phone.tel}`}
          className="tnum inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-bronze"
        >
          <Phone size={11} /> Call {practice.phone.display}
        </a>
      </p>
    </div>
  );
}

export { hasScheduler } from "@/lib/scheduler";
