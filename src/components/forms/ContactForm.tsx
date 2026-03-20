"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
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
      subject: (formData.get("subject") as string) || null,
      message: formData.get("message") as string,
    };

    const { error } = await supabase.from("contact_enquiries").insert(data);

    if (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    } else {
      setStatus("success");
      form.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 bg-court-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={28} className="text-court-700" />
        </div>
        <h3 className="font-display text-xl text-court-950 mb-2">Message Sent!</h3>
        <p className="font-body text-slate-500 mb-6">Thanks for getting in touch. We&apos;ll respond as soon as we can.</p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 border border-slate-200 text-slate-600 font-heading font-semibold rounded-xl hover:bg-slate-50 transition-colors"
        >
          Send Another Message
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
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Name *</label>
          <input type="text" name="name" required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all" />
        </div>
        <div>
          <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Email *</label>
          <input type="email" name="email" required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all" />
        </div>
      </div>
      <div>
        <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Subject</label>
        <select name="subject" className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all bg-white">
          <option value="">Select a topic</option>
          <option>Membership enquiry</option>
          <option>Court booking help</option>
          <option>Coaching enquiry</option>
          <option>Junior squash</option>
          <option>Function suite hire</option>
          <option>General enquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Message *</label>
        <textarea name="message" rows={6} required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all resize-none" />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-8 py-4 bg-court-800 hover:bg-court-700 disabled:bg-court-400 text-white font-heading font-bold rounded-xl transition-colors btn-shine flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
