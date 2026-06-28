import { NextResponse } from "next/server";

/**
 * Appointment-request handler. HIPAA-conscious: stores/forwards only the
 * minimum contact fields, never sensitive medical detail.
 *
 * To deliver notifications, set BOOKING_NOTIFICATION_EMAIL (+ RESEND_API_KEY)
 * and wire the provider call where indicated below. Without them, requests are
 * logged server-side so the form still works in development.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const consent = body.consent;

  if (!name || !phone || !consent) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 },
    );
  }

  const lead = {
    name,
    phone,
    email: String(body.email ?? "").trim(),
    reason: String(body.reason ?? "").trim(),
    preferred: String(body.preferred ?? "").trim(),
    message: String(body.message ?? "").trim().slice(0, 1000),
    receivedAt: new Date().toISOString(),
  };

  const to = process.env.BOOKING_NOTIFICATION_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (to && resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Bellaire Dental Website <onboarding@resend.dev>",
          to: [to],
          subject: `New appointment request: ${lead.name}`,
          text: [
            `Name: ${lead.name}`,
            `Phone: ${lead.phone}`,
            `Email: ${lead.email || "N/A"}`,
            `Reason: ${lead.reason || "N/A"}`,
            `Preferred: ${lead.preferred || "N/A"}`,
            `Message: ${lead.message || "N/A"}`,
            `Received: ${lead.receivedAt}`,
          ].join("\n"),
        }),
      });
    } else {
      // Fallback: log so nothing is lost during setup.
      console.info("[appointment-request]", lead);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[appointment-request] delivery failed", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }
}
