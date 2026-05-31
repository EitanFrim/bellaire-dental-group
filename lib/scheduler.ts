/**
 * Online scheduler config — framework-neutral so it can be read from both
 * server and client components. NEXT_PUBLIC_SCHEDULER_URL is inlined at build.
 */
export const schedulerUrl = process.env.NEXT_PUBLIC_SCHEDULER_URL || "";

export function hasScheduler() {
  return Boolean(schedulerUrl);
}
