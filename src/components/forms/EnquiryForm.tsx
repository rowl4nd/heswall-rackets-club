"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      event_type: formData.get("event_type") as string,
      preferred_dates: (formData.get("preferred_dates") as string) || null,
      guest_count: formData.get("guest_count") ? parseInt(formData.get("guest_count") as string) : null,
      message: (formData.get("message") as string) || null,
    };

    const { error } = await supabase.from("function_enquiries").insert(data);

    if (error) {
      console.error("Enquiry submission error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try calling Leah directly or try again later.");
    } else {
      setStatus("success");
      form.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-court-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-court-700" />
        </div>
        <h3 className="font-display text-2xl text-court-950 mb-3">
          Enquiry Sent!
        </h3>
        <p className="font-body text-slate-500 text-lg mb-2">
          Thanks for getting in touch. Leah will get back to you within 24 hours.
        </p>
        <p className="font-body text-slate-400 text-sm">
          If your event is urgent, call directly on{" "}
          <a
            href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`}
            className="text-amber-600 font-semibold hover:underline"
          >
            {SITE_CONFIG.functionSuite.phone}
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 px-6 py-3 border border-slate-200 text-slate-600 font-heading font-semibold rounded-xl hover:bg-slate-50 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="font-body text-red-700 text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            placeholder="07xxx xxxxxx"
          />
        </div>
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Event Type *
          </label>
          <select
            name="event_type"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all bg-white"
          >
            <option value="">Select event type</option>
            <option>Birthday Party</option>
            <option>Anniversary</option>
            <option>Children&apos;s Party</option>
            <option>Corporate Event / Meeting</option>
            <option>Celebration / Social</option>
            <option>Wake</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Preferred Date(s)
          </label>
          <input
            type="text"
            name="preferred_dates"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            placeholder="e.g. Saturday 15th March"
          />
        </div>
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
            Estimated Guests
          </label>
          <input
            type="number"
            name="guest_count"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
            placeholder="e.g. 50"
          />
        </div>
      </div>

      <div>
        <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
          Tell Us About Your Event
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none"
          placeholder="Any details about catering, entertainment, setup requirements, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
      <p className="text-center font-body text-slate-400 text-sm">
        We&apos;ll get back to you within 24 hours. Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}
