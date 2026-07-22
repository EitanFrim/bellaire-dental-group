"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { Close, Phone } from "@/components/ui/Icons";
import { practice, groupedHours, fullAddress } from "@/lib/practice";
import { BrandIcon } from "@/components/brand/BrandIcon";
import { BookingForm } from "./BookingForm";
import { SchedulerEmbed } from "./SchedulerEmbed";
import { hasScheduler } from "@/lib/scheduler";
import { cn } from "@/lib/utils";

type Tab = "request" | "call";

export function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const lenis = useLenis();
  const [tab, setTab] = useState<Tab>("request");
  const scheduler = hasScheduler();
  // When the online scheduler is active, the dialog needs to grow to fit it.
  const showScheduler = scheduler && tab === "request";

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, lenis, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
        >
          <div
            className="absolute inset-0 bg-night/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            data-lenis-prevent
            className={cn(
              "relative flex max-h-[92vh] w-full flex-col overflow-hidden bg-bone shadow-[0_40px_120px_-40px_rgba(15,21,34,0.6)] sm:rounded-[3px]",
              // The online scheduler needs more room than the call panel.
              showScheduler ? "h-[92vh] sm:max-w-3xl" : "sm:max-w-lg",
            )}
            initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-line bg-paper px-6 py-4">
              <div className="flex items-center gap-3">
                <BrandIcon className="h-8 w-8" size={32} />
                <div className="leading-tight">
                  <p className="font-display text-lg text-ink">Book your visit</p>
                  <p className="label mt-0.5 text-ink-faint">
                    {practice.ratings.google.value} stars ·{" "}
                    {practice.ratings.google.count} reviews
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Close size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-line px-6">
              <TabButton active={tab === "request"} onClick={() => setTab("request")}>
                {scheduler ? "Schedule online" : "Request a time"}
              </TabButton>
              <TabButton active={tab === "call"} onClick={() => setTab("call")}>
                Call or text
              </TabButton>
            </div>

            {/* Body */}
            <div
              className={cn(
                "px-6 pb-6 pt-5",
                showScheduler
                  ? "flex min-h-0 flex-1 flex-col"
                  : "overflow-y-auto",
              )}
              data-lenis-prevent
            >
              {tab === "request" ? (
                scheduler ? (
                  <SchedulerEmbed variant="modal" />
                ) : (
                  <BookingForm />
                )
              ) : (
                <CallPanel onClose={onClose} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "label -mb-px border-b-2 px-1 py-3.5 transition-colors",
        active
          ? "border-ink text-ink"
          : "border-transparent text-ink-faint hover:text-ink-soft",
        "mr-7 last:mr-0",
      )}
    >
      {children}
    </button>
  );
}

function CallPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-4 py-2">
      <a
        href={`tel:${practice.phone.tel}`}
        onClick={onClose}
        className="flex items-center justify-between gap-4 bg-ink px-6 py-5 text-bone transition-colors hover:bg-night-soft"
      >
        <span>
          <span className="label block text-bone/55">Call us</span>
          <span className="tnum mt-1 block font-display text-2xl">
            {practice.phone.display}
          </span>
        </span>
        <Phone size={18} className="text-bone/70" />
      </a>

      <a
        href={`sms:${practice.sms}`}
        onClick={onClose}
        className="flex items-center justify-between gap-4 border border-line-strong px-6 py-5 text-ink transition-colors hover:border-ink"
      >
        <span>
          <span className="label block text-ink-faint">Text us</span>
          <span className="tnum mt-1 block font-display text-2xl">
            {practice.phone.display}
          </span>
        </span>
      </a>

      <dl className="border-t border-line pt-1 text-sm">
        <div className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-4">
          <dt className="label pt-0.5 text-ink-faint">Hours</dt>
          <dd>
            <ul className="space-y-1 text-ink-soft">
              {groupedHours().map((g) => (
                <li key={g.label} className="tnum flex justify-between gap-6">
                  <span className="text-ink">{g.label}</span>
                  <span>{g.value}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
          <dt className="label pt-0.5 text-ink-faint">Find us</dt>
          <dd className="leading-relaxed text-ink-soft">{fullAddress()}</dd>
        </div>
      </dl>
    </div>
  );
}
