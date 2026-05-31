"use client";

import { useState } from "react";
import { ExternalLink, Loader2, Phone } from "lucide-react";
import { schedulerUrl } from "@/lib/scheduler";
import { practice } from "@/lib/practice";

/**
 * Embeds the practice's real PMS-integrated scheduler (Dolfin "Web Sched")
 * in an iframe — the same secure booking flow the practice already uses.
 *
 * The scheduler is a session-tokenized app, so we always surface an
 * "open in a new tab" escape hatch (some browsers block third-party cookies
 * inside iframes) plus a call fallback. This keeps booking robust everywhere.
 */
export function SchedulerEmbed({ height = 620 }: { height?: number }) {
  const [loaded, setLoaded] = useState(false);

  if (!schedulerUrl) return null;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs text-ink-soft">
          Real-time scheduling, synced with our front desk.
        </p>
        <a
          href={schedulerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-cyan-700 hover:text-cyan-600"
        >
          Open in new tab <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-line bg-white"
        style={{ height }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-soft">
            <Loader2 className="h-6 w-6 animate-spin text-cyan-500" />
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

      <p className="mt-3 text-center text-xs text-ink-soft">
        Trouble loading?{" "}
        <a
          href={`tel:${practice.phone.tel}`}
          className="inline-flex items-center gap-1 font-medium text-cyan-700 hover:text-cyan-600"
        >
          <Phone className="h-3 w-3" /> Call {practice.phone.display}
        </a>
      </p>
    </div>
  );
}

export { hasScheduler } from "@/lib/scheduler";
