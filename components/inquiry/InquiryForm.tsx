"use client";

import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Bridal Shower",
  "Baby Shower",
  "Private Party / Birthday",
  "Corporate Event",
  "Wellness / Retreat",
  "Brand Activation",
  "Community Pop-Up",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: fd.get("full_name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      event_type: fd.get("event_type"),
      event_date: fd.get("event_date"),
      guest_count: fd.get("guest_count"),
      venue: fd.get("venue"),
      city: fd.get("city"),
      state: fd.get("state"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setState("success");
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-6">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-forest mb-2">
            We received your inquiry!
          </h3>
          <p className="text-warm-gray leading-relaxed max-w-sm">
            Thank you for reaching out. We&apos;ll review your details and get back to
            you personally within 24–48 hours.
          </p>
        </div>
        <a
          href="https://www.instagram.com/numa.acai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-forest hover:text-forest-light underline underline-offset-2 transition-colors"
        >
          Follow us on Instagram while you wait →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Full Name <span className="text-berry">*</span>
          </label>
          <input
            name="full_name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Email <span className="text-berry">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
      </div>

      {/* Row: Phone + Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Event Type <span className="text-berry">*</span>
          </label>
          <select
            name="event_type"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm appearance-none"
          >
            <option value="" disabled>Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row: Event Date + Guest Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Event Date
          </label>
          <input
            name="event_date"
            type="date"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            Estimated Guest Count
          </label>
          <input
            name="guest_count"
            type="text"
            placeholder="e.g. 50–80 guests"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
      </div>

      {/* Venue */}
      <div>
        <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
          Venue / Location Name
        </label>
        <input
          name="venue"
          type="text"
          placeholder="e.g. The Fig House, Private Residence"
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
        />
      </div>

      {/* Row: City + State */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            City
          </label>
          <input
            name="city"
            type="text"
            placeholder="Los Angeles"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
            State
          </label>
          <input
            name="state"
            type="text"
            placeholder="CA"
            className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-2">
          Anything Else We Should Know?
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your event vision, special requests, theme, or anything else helpful..."
          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors text-sm resize-none"
        />
      </div>

      {/* Error */}
      {state === "error" && (
        <div className="px-4 py-3 rounded-xl bg-berry/10 border border-berry/20 text-berry text-sm">
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-forest text-cream text-sm font-semibold rounded-full hover:bg-forest-light transition-all duration-300 tracking-wide shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed gap-2"
      >
        {state === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>

      <p className="text-center text-xs text-warm-gray-light">
        We respond to all inquiries personally within 24–48 hours.
      </p>
    </form>
  );
}
