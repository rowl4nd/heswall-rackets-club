import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Book a Court",
  description: "Book squash, racketball, or padel courts online at Heswall Rackets Club. Members book free, padel is pay & play for everyone.",
};

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
];

const courts = [
  { name: "Court 1", sport: "Squash", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Court 2", sport: "Squash", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Court 3", sport: "Squash", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Court 4", sport: "Squash (Glass)", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Padel 1", sport: "Padel", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { name: "Padel 2", sport: "Padel", color: "bg-purple-100 text-purple-700 border-purple-200" },
];

export default function BookPage() {
  // Generate some fake "booked" slots for demo
  const bookedSlots = new Set([
    "Court 1-18:00", "Court 1-19:00", "Court 2-19:00", "Court 2-20:00",
    "Court 3-18:00", "Court 4-17:00", "Court 4-18:00",
    "Padel 1-16:00", "Padel 1-17:00", "Padel 2-18:00", "Padel 2-19:00",
  ]);

  return (
    <>
      <PageHero
        title="Book a Court"
        subtitle="Choose your sport, pick a time, and book instantly. Members play squash & racketball for free. Padel is open to everyone."
        accentColor="#22c55e"
      />

      {/* Sport filter + date picker placeholder */}
      <section className="section-padding py-8 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-court-800 text-white font-heading font-semibold text-sm rounded-lg">All Courts</button>
            <button className="px-4 py-2 bg-blue-50 text-squash font-heading font-semibold text-sm rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">Squash</button>
            <button className="px-4 py-2 bg-purple-50 text-padel font-heading font-semibold text-sm rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">Padel</button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-slate-200 rounded-lg font-heading text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Calendar size={16} />
              Today — {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
            </button>
          </div>
        </div>
      </section>

      {/* Booking grid */}
      <section className="section-padding py-10 bg-white">
        <div className="container-wide overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header row */}
            <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "80px repeat(6, 1fr)" }}>
              <div className="p-3" />
              {courts.map((court) => (
                <div key={court.name} className={`p-3 rounded-lg border text-center ${court.color}`}>
                  <p className="font-heading font-bold text-xs">{court.name}</p>
                  <p className="text-[10px] opacity-70">{court.sport}</p>
                </div>
              ))}
            </div>

            {/* Time slots */}
            {timeSlots.map((time) => (
              <div key={time} className="grid gap-1 mb-1" style={{ gridTemplateColumns: "80px repeat(6, 1fr)" }}>
                <div className="p-2 flex items-center">
                  <span className="font-body text-slate-400 text-sm">{time}</span>
                </div>
                {courts.map((court) => {
                  const key = `${court.name}-${time}`;
                  const isBooked = bookedSlots.has(key);
                  return (
                    <button
                      key={key}
                      disabled={isBooked}
                      className={`p-2 rounded-lg text-xs font-heading font-medium transition-all ${
                        isBooked
                          ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                          : "bg-court-50 text-court-700 hover:bg-court-100 hover:shadow-sm border border-court-100 cursor-pointer"
                      }`}
                    >
                      {isBooked ? "Booked" : "Available"}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Info box */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
          <Info size={20} className="text-squash shrink-0 mt-0.5" />
          <div>
            <p className="font-heading font-bold text-court-950 text-sm mb-1">Booking Information</p>
            <p className="font-body text-slate-600 text-sm leading-relaxed">
              This is a preview of the booking system. In the live version, members will log in to book squash and racketball courts (included in membership). Non-members can book and pay for padel courts directly online via Stripe. Real-time availability, instant confirmation, and automated reminders.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-court-50 border border-court-100 rounded" />
            <span className="font-body text-slate-500 text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-100 rounded" />
            <span className="font-body text-slate-500 text-sm">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded" />
            <span className="font-body text-slate-500 text-sm">Squash</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded" />
            <span className="font-body text-slate-500 text-sm">Padel</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section-padding py-12 bg-slate-50 border-t border-slate-100">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/membership" className="text-court-700 font-heading font-semibold text-sm hover:text-court-600 transition-colors flex items-center gap-1.5">
            Not a member? View membership options →
          </Link>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <Link href="/padel" className="text-padel font-heading font-semibold text-sm hover:opacity-80 transition-opacity flex items-center gap-1.5">
            Padel — no membership required →
          </Link>
        </div>
      </section>
    </>
  );
}
