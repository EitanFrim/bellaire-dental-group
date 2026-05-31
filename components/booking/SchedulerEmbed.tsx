import { schedulerUrl } from "@/lib/scheduler";

/**
 * Renders the practice's online scheduler in an iframe when
 * NEXT_PUBLIC_SCHEDULER_URL is configured (NexHealth / LocalMed / Adit / etc.).
 * Returns null otherwise so the request form is used instead.
 */
export function SchedulerEmbed() {
  if (!schedulerUrl) return null;
  return (
    <iframe
      src={schedulerUrl}
      title="Book an appointment"
      className="h-[560px] w-full rounded-2xl border border-line bg-white"
      loading="lazy"
    />
  );
}

export { hasScheduler } from "@/lib/scheduler";
