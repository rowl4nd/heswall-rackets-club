"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { ChevronLeft, Clock, Users, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type Court = {
  id: string;
  name: string;
  sport_type: string;
};

type Booking = {
  id: string;
  court_id: string;
  start_time: string;
  end_time: string;
  status: string;
};

type TimeSlot = {
  start: string;
  end: string;
  label: string;
  duration: number;
  price: number;
  peak: boolean;
  available: Record<string, boolean>;
};

const PADEL_SLOTS = [
  { start: "08:00", end: "09:00", duration: 60, price: 16, peak: false },
  { start: "09:00", end: "10:00", duration: 60, price: 16, peak: false },
  { start: "10:00", end: "11:00", duration: 60, price: 16, peak: false },
  { start: "11:30", end: "13:00", duration: 90, price: 24, peak: false },
  { start: "13:00", end: "14:30", duration: 90, price: 24, peak: false },
  { start: "14:30", end: "16:00", duration: 90, price: 24, peak: false },
  { start: "16:00", end: "17:30", duration: 90, price: 30, peak: true },
  { start: "17:30", end: "19:00", duration: 90, price: 30, peak: true },
  { start: "19:00", end: "20:30", duration: 90, price: 30, peak: true },
  { start: "20:30", end: "22:00", duration: 90, price: 30, peak: true },
];

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function formatDisplayDate(date: Date): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  if (target.getTime() === today.getTime()) return "Today";
  if (target.getTime() === tomorrow.getTime()) return "Tomorrow";

  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function getNext7Days(): Date[] {
  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    d.setHours(0, 0, 0, 0);
    days.push(d);
  }
  return days;
}

export default function PadelBookingPage() {
  const [courts, setCourts] = useState<Court[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<"select" | "details" | "confirm" | "success">("select");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const days = getNext7Days();

  const fetchData = useCallback(async () => {
    setLoading(true);

    const { data: courtsData } = await supabase
      .from("courts")
      .select("*")
      .eq("sport_type", "padel")
      .eq("active", true)
      .order("sort_order");

    if (courtsData) setCourts(courtsData);

    const dateStr = formatDate(selectedDate);
    const startOfDay = `${dateStr}T00:00:00`;
    const endOfDay = `${dateStr}T23:59:59`;

    const { data: bookingsData } = await supabase
      .from("bookings")
      .select("id, court_id, start_time, end_time, status")
      .eq("sport_type", "padel")
      .eq("status", "confirmed")
      .gte("start_time", startOfDay)
      .lte("start_time", endOfDay);

    if (bookingsData) setBookings(bookingsData);
    setLoading(false);
  }, [selectedDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Subscribe to realtime booking changes
  useEffect(() => {
    const channel = supabase
      .channel("bookings-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookings" },
        () => {
          fetchData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchData]);

  function isSlotBooked(courtId: string, slotStart: string): boolean {
    const dateStr = formatDate(selectedDate);
    const slotStartTime = new Date(`${dateStr}T${slotStart}:00`);

    return bookings.some((b) => {
      const bStart = new Date(b.start_time);
      const bEnd = new Date(b.end_time);
      return b.court_id === courtId && slotStartTime >= bStart && slotStartTime < bEnd;
    });
  }

  function isSlotInPast(slotStart: string): boolean {
    const now = new Date();
    const dateStr = formatDate(selectedDate);
    const slotTime = new Date(`${dateStr}T${slotStart}:00`);
    return slotTime <= now;
  }

  function getSlots(): TimeSlot[] {
    return PADEL_SLOTS.map((s) => ({
      ...s,
      label: `${s.start} – ${s.end}`,
      available: courts.reduce(
        (acc, court) => ({
          ...acc,
          [court.id]: !isSlotBooked(court.id, s.start) && !isSlotInPast(s.start),
        }),
        {} as Record<string, boolean>
      ),
    }));
  }

  function handleSlotSelect(slot: TimeSlot, courtId: string) {
    if (!slot.available[courtId]) return;
    setSelectedSlot(slot);
    setSelectedCourt(courtId);
    setStep("details");
    setError("");
  }

  async function handleBooking() {
    if (!selectedSlot || !selectedCourt || !guestName || !guestEmail) return;

    setSubmitting(true);
    setError("");

    const dateStr = formatDate(selectedDate);
    const startTime = `${dateStr}T${selectedSlot.start}:00`;
    const endTime = `${dateStr}T${selectedSlot.end}:00`;

    const { error: insertError } = await supabase.from("bookings").insert({
      court_id: selectedCourt,
      sport_type: "padel",
      start_time: startTime,
      end_time: endTime,
      guest_name: guestName,
      guest_email: guestEmail,
      guest_phone: guestPhone || null,
      is_guest_booking: true,
      amount_paid: selectedSlot.price,
      status: "confirmed",
    });

    if (insertError) {
      console.error("Booking error:", insertError);
      setError("Something went wrong. Please try again or call us directly.");
      setSubmitting(false);
    } else {
      setSubmitting(false);
      setStep("success");
    }
  }

  function resetBooking() {
    setSelectedSlot(null);
    setSelectedCourt(null);
    setStep("select");
    setGuestName("");
    setGuestEmail("");
    setGuestPhone("");
    setError("");
    fetchData();
  }

  const slots = getSlots();
  const courtForId = (id: string) => courts.find((c) => c.id === id);

  // ===== SUCCESS STATE =====
  if (step === "success") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center section-padding py-20">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-court-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-court-700" />
          </div>
          <h2 className="font-display text-3xl text-court-950 mb-3">Court Booked!</h2>
          <p className="font-body text-slate-500 text-lg mb-2">
            Your padel court is confirmed.
          </p>
          <div className="bg-slate-50 rounded-2xl p-6 text-left my-8 space-y-3">
            <div className="flex justify-between">
              <span className="font-body text-slate-500 text-sm">Court</span>
              <span className="font-heading font-semibold text-court-950 text-sm">
                {courtForId(selectedCourt!)?.name}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-slate-500 text-sm">Date</span>
              <span className="font-heading font-semibold text-court-950 text-sm">
                {formatDisplayDate(selectedDate)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-slate-500 text-sm">Time</span>
              <span className="font-heading font-semibold text-court-950 text-sm">
                {selectedSlot?.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-slate-500 text-sm">Duration</span>
              <span className="font-heading font-semibold text-court-950 text-sm">
                {selectedSlot?.duration} mins
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3">
              <span className="font-body text-slate-500 text-sm">Total</span>
              <span className="font-display text-xl text-court-950">
                £{selectedSlot?.price}
              </span>
            </div>
          </div>
          <p className="font-body text-slate-400 text-sm mb-6">
            Payment will be collected via Stripe once integrated. For now, pay at the club on arrival.
          </p>
          <button
            onClick={resetBooking}
            className="px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine"
          >
            Book Another Court
          </button>
        </div>
      </div>
    );
  }

  // ===== DETAILS / CHECKOUT STEP =====
  if (step === "details" && selectedSlot && selectedCourt) {
    return (
      <div className="section-padding py-12">
        <div className="container-wide max-w-2xl mx-auto">
          <button
            onClick={() => setStep("select")}
            className="flex items-center gap-2 text-slate-500 font-heading font-semibold text-sm mb-8 hover:text-court-700 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to court selection
          </button>

          <h2 className="font-display text-3xl text-court-950 mb-2">Complete Your Booking</h2>
          <p className="font-body text-slate-500 mb-8">Fill in your details to confirm the court.</p>

          {/* Booking summary */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="font-body text-slate-500 text-xs mb-1">Court</p>
                <p className="font-heading font-bold text-court-950 text-sm">
                  {courtForId(selectedCourt)?.name}
                </p>
              </div>
              <div>
                <p className="font-body text-slate-500 text-xs mb-1">Date</p>
                <p className="font-heading font-bold text-court-950 text-sm">
                  {formatDisplayDate(selectedDate)}
                </p>
              </div>
              <div>
                <p className="font-body text-slate-500 text-xs mb-1">Time</p>
                <p className="font-heading font-bold text-court-950 text-sm">
                  {selectedSlot.label}
                </p>
              </div>
              <div>
                <p className="font-body text-slate-500 text-xs mb-1">Price</p>
                <p className="font-display text-2xl text-padel">£{selectedSlot.price}</p>
              </div>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 mb-6">
              <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
              <p className="font-body text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Guest details form */}
          <div className="space-y-5">
            <div>
              <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
                placeholder="Full name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all"
                  placeholder="07xxx xxxxxx"
                />
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={submitting || !guestName || !guestEmail}
              className="w-full px-8 py-4 bg-padel hover:opacity-90 disabled:opacity-50 text-white font-heading font-bold text-lg rounded-xl transition-all btn-shine flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Booking...
                </>
              ) : (
                <>Confirm Booking — £{selectedSlot.price}</>
              )}
            </button>
            <p className="text-center font-body text-slate-400 text-sm">
              Payment will be integrated via Stripe. Currently pay on arrival.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ===== MAIN SLOT SELECTION =====
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-court-950 via-court-900 to-court-800" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 bg-padel" />
        <div className="relative z-10 section-padding pt-12 pb-16">
          <div className="container-wide">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-3">
              Book a Padel Court
            </h1>
            <p className="font-body text-xl text-court-200 max-w-xl">
              No membership required. Pick a date, choose your slot, and you&apos;re in.
            </p>
          </div>
        </div>
      </section>

      {/* Date picker */}
      <section className="section-padding py-6 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container-wide">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {days.map((day) => {
              const isSelected = formatDate(day) === formatDate(selectedDate);
              const dayName = day.toLocaleDateString("en-GB", { weekday: "short" });
              const dayNum = day.getDate();
              const monthName = day.toLocaleDateString("en-GB", { month: "short" });

              return (
                <button
                  key={formatDate(day)}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedSlot(null);
                    setSelectedCourt(null);
                  }}
                  className={`flex flex-col items-center min-w-[72px] px-4 py-3 rounded-xl transition-all shrink-0 ${
                    isSelected
                      ? "bg-padel text-white shadow-lg shadow-purple-200"
                      : "bg-slate-50 text-slate-600 hover:bg-purple-50 border border-slate-100"
                  }`}
                >
                  <span className={`text-xs font-heading font-medium ${isSelected ? "text-purple-100" : "text-slate-400"}`}>
                    {dayName}
                  </span>
                  <span className="text-lg font-heading font-bold">{dayNum}</span>
                  <span className={`text-xs font-body ${isSelected ? "text-purple-100" : "text-slate-400"}`}>
                    {monthName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slots grid */}
      <section className="section-padding py-10 bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-court-950 text-lg">
              {formatDisplayDate(selectedDate)}
            </h2>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-100 border border-purple-200 rounded" />
                <span className="font-body text-slate-500">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-100 rounded" />
                <span className="font-body text-slate-500">Booked</span>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={32} className="animate-spin text-padel" />
            </div>
          ) : courts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-slate-500">No padel courts found. Please run the database setup.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Court headers */}
              <div className="grid gap-3" style={{ gridTemplateColumns: `140px repeat(${courts.length}, 1fr)` }}>
                <div />
                {courts.map((court) => (
                  <div
                    key={court.id}
                    className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center"
                  >
                    <p className="font-heading font-bold text-padel text-sm">{court.name}</p>
                    <p className="font-body text-purple-400 text-xs">Padel</p>
                  </div>
                ))}
              </div>

              {/* Time slots */}
              {slots.map((slot) => (
                <div
                  key={slot.start}
                  className="grid gap-3"
                  style={{ gridTemplateColumns: `140px repeat(${courts.length}, 1fr)` }}
                >
                  {/* Time label */}
                  <div className="flex flex-col justify-center py-2">
                    <span className="font-heading font-semibold text-court-950 text-sm">
                      {slot.start}
                    </span>
                    <span className="font-body text-slate-400 text-xs">
                      {slot.duration}min · £{slot.price}
                      {slot.peak && (
                        <span className="ml-1 text-amber-600 font-semibold">Peak</span>
                      )}
                    </span>
                  </div>

                  {/* Court slots */}
                  {courts.map((court) => {
                    const available = slot.available[court.id];
                    const isSelected =
                      selectedSlot?.start === slot.start && selectedCourt === court.id;

                    return (
                      <button
                        key={`${court.id}-${slot.start}`}
                        onClick={() => handleSlotSelect(slot, court.id)}
                        disabled={!available}
                        className={`py-4 rounded-xl text-sm font-heading font-semibold transition-all ${
                          isSelected
                            ? "bg-padel text-white ring-2 ring-purple-300 shadow-lg"
                            : available
                            ? "bg-purple-50 text-padel border border-purple-100 hover:bg-purple-100 hover:shadow-sm cursor-pointer"
                            : "bg-slate-50 text-slate-300 cursor-not-allowed"
                        }`}
                      >
                        {isSelected ? "Selected ✓" : available ? `£${slot.price}` : "Booked"}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Info */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Users size={18} className="text-padel shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-bold text-court-950 text-sm">Up to 4 Players</p>
                <p className="font-body text-slate-500 text-xs">Price is per court, not per person</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Clock size={18} className="text-padel shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-bold text-court-950 text-sm">No Membership Needed</p>
                <p className="font-body text-slate-500 text-xs">Anyone can book and play padel</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <MapPin size={18} className="text-padel shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-bold text-court-950 text-sm">Equipment Available</p>
                <p className="font-body text-slate-500 text-xs">Rackets available to hire at the club</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
