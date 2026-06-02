"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { X, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { practice, groupedHours, fullAddress } from "@/lib/practice";
import { BrandMark } from "@/components/brand/BrandMark";
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
            className="absolute inset-0 bg-navy-950/55 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            data-lenis-prevent
            className={cn(
              "relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl",
              // The online scheduler needs more room than the call panel.
              showScheduler ? "h-[92vh] sm:max-w-3xl" : "sm:max-w-lg",
            )}
            initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-line bg-white/60 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <BrandMark className="h-8 w-8" />
                <div className="leading-tight">
                  <p className="font-display text-lg text-navy-900">Book your visit</p>
                  <p className="text-xs text-ink-soft">
                    {practice.ratings.google.value}★ · {practice.ratings.google.count}{" "}
                    Google reviews
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 pt-4">
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
                "px-6 pb-6 pt-4",
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
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-navy-800 text-white"
          : "text-ink-soft hover:bg-navy-50 hover:text-navy-900",
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
        className="flex items-center gap-4 rounded-2xl bg-navy-800 px-5 py-4 text-white transition-colors hover:bg-navy-700"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-navy-950">
          <Phone className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wider text-cyan-200">
            Call us
          </span>
          <span className="block text-lg font-semibold">{practice.phone.display}</span>
        </span>
      </a>

      <a
        href={`sms:${practice.sms}`}
        onClick={onClose}
        className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 text-navy-900 transition-colors hover:border-navy-300"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-navy-800">
          <MessageSquare className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wider text-ink-soft">
            Text us
          </span>
          <span className="block text-lg font-semibold">{practice.phone.display}</span>
        </span>
      </a>

      <div className="rounded-2xl border border-line bg-white/60 p-5 text-sm">
        <div className="mb-3 flex items-start gap-2.5">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
          <ul className="space-y-0.5 text-ink-soft">
            {groupedHours().map((g) => (
              <li key={g.label} className="flex justify-between gap-6">
                <span className="font-medium text-navy-800">{g.label}</span>
                <span>{g.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start gap-2.5 border-t border-line pt-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
          <span className="text-ink-soft">{fullAddress()}</span>
        </div>
      </div>
    </div>
  );
}
