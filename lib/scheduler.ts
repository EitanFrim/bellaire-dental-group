/**
 * Online scheduler config, framework-neutral so it can be read from both
 * server and client components.
 *
 * Default is the practice's real, PMS-integrated Dolfin "Web Sched" scheduler
 * (the same one the previous bellairedentalgroup.com used). An env override
 * (NEXT_PUBLIC_SCHEDULER_URL) lets the practice swap to a different scheduler
 * later without a code change.
 */

/** Bellaire Dental Group's live Dolfin patient web scheduler (PMS-integrated). */
export const DEFAULT_SCHEDULER_URL =
  "https://www.patientviewer.com/?RSID=3337313239&CID=30&C=1353";

export const schedulerUrl =
  process.env.NEXT_PUBLIC_SCHEDULER_URL || DEFAULT_SCHEDULER_URL;

export function hasScheduler() {
  return Boolean(schedulerUrl);
}
