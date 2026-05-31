"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const REASONS = [
  "New patient visit",
  "Cleaning & checkup",
  "Cosmetic consultation",
  "Emergency / tooth pain",
  "Other",
];

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[15px] text-ink shadow-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200";
const labelCls = "mb-1.5 block text-sm font-medium text-navy-800";

export function BookingForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-navy-800">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl text-navy-900">Request received</h3>
        <p className="max-w-xs text-sm text-ink-soft">
          Thank you — our team will reach out shortly to confirm your appointment.
          For anything urgent, please call us at{" "}
          <a href="tel:+17136688383" className="font-medium text-cyan-600 underline">
            (713) 668-8383
          </a>
          .
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor="reason" className={labelCls}>
            Reason for visit
          </label>
          <select id="reason" name="reason" className={cn(fieldCls, "appearance-none")}>
            {REASONS.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="preferred" className={labelCls}>
          Preferred days / times{" "}
          <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id="preferred"
          name="preferred"
          placeholder="e.g. weekday mornings, this Friday afternoon"
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Anything else?{" "}
          <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          placeholder="Please don't include sensitive medical details."
          className={cn(fieldCls, "resize-none")}
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-line text-cyan-500 focus:ring-cyan-300"
        />
        <span>
          I agree to be contacted about my request. This form is not for medical
          emergencies — for emergencies call 911 or (713) 668-8383.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please call us at (713) 668-8383 and we&apos;ll get
          you scheduled.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request appointment"
        )}
      </Button>
    </form>
  );
}
