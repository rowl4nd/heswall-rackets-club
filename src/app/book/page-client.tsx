"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import Link from "next/link";
import PadelBooking from "@/components/booking/PadelBooking";

type SportTab = "padel" | "squash";

export default function BookPage() {
  const [activeTab, setActiveTab] = useState<SportTab>("padel");

  return (
    <>
      {/* Sport tabs */}
      <section className="section-padding py-4 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-40 backdrop-blur-md bg-white/95">
        <div className="container-wide flex items-center gap-3">
          <button
            onClick={() => setActiveTab("padel")}
            className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all ${
              activeTab === "padel"
                ? "bg-padel text-white shadow-lg shadow-purple-200"
                : "bg-purple-50 text-padel border border-purple-100 hover:bg-purple-100"
            }`}
          >
            Padel
          </button>
          <button
            onClick={() => setActiveTab("squash")}
            className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all flex items-center gap-2 ${
              activeTab === "squash"
                ? "bg-squash text-white shadow-lg shadow-blue-200"
                : "bg-blue-50 text-squash border border-blue-100 hover:bg-blue-100"
            }`}
          >
            <Lock size={14} />
            Squash / Racketball
          </button>
        </div>
      </section>

      {/* Content */}
      {activeTab === "padel" ? (
        <PadelBooking />
      ) : (
        <section className="section-padding py-20 bg-white">
          <div className="container-wide max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={28} className="text-squash" />
            </div>
            <h2 className="font-display text-3xl text-court-950 mb-3">
              Members Only
            </h2>
            <p className="font-body text-slate-500 text-lg mb-3">
              Squash and racketball court booking is available to club members.
              Membership includes unlimited court access at no extra cost.
            </p>
            <p className="font-body text-slate-400 text-sm mb-8">
              Member login and online booking coming soon. In the meantime,
              existing members can book via the club directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/membership"
                className="px-8 py-4 bg-squash text-white font-heading font-bold rounded-xl hover:opacity-90 transition-opacity btn-shine flex items-center justify-center gap-2"
              >
                View Membership
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-blue-200 text-squash font-heading font-semibold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
