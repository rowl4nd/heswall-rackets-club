import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, CreditCard, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Padel",
  description: "2 brand new padel courts in Heswall, Wirral. No membership required — book online and pay per session from £16. Open to everyone.",
};

export default function PadelPage() {
  return (
    <>
      <PageHero
        title="Padel"
        subtitle="The world's fastest-growing racket sport — and you can play it right here in Heswall. 2 brand new courts, open to everyone. No membership required."
        accentColor="#7c3aed"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/book" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2">
            <Calendar size={20} />
            Book a Padel Court
          </Link>
        </div>
      </PageHero>

      {/* Pay & Play callout */}
      <section className="section-padding -mt-6 relative z-20">
        <div className="container-wide">
          <div className="bg-purple-600 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-lg">Pay &amp; Play — No Membership Needed</p>
                <p className="text-purple-100 font-body text-sm">Book a court online, turn up and play. Open to everyone, any time.</p>
              </div>
            </div>
            <Link href="/book" className="shrink-0 px-6 py-3 bg-white text-purple-700 font-heading font-bold rounded-lg hover:bg-purple-50 transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-padel font-heading font-semibold text-sm uppercase tracking-widest mb-3">Court Hire</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-6">Simple Pricing</h2>
              <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
                Book online and pay per session. No joining fees, no membership required. Members of the club receive discounted rates on all padel bookings.
              </p>

              <div className="space-y-3">
                {[
                  { time: "8:00 – 10:00", duration: "60 min", price: "£16", peak: false },
                  { time: "11:30 – 14:30", duration: "90 min", price: "£24", peak: false },
                  { time: "16:00 – 20:30", duration: "90 min", price: "£30", peak: true },
                ].map((slot) => (
                  <div key={slot.time} className="flex items-center justify-between p-4 bg-purple-50 border border-purple-100 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Clock size={16} className="text-padel" />
                      <div>
                        <p className="font-heading font-bold text-court-950 text-sm">{slot.time}</p>
                        <p className="font-body text-slate-400 text-xs">{slot.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {slot.peak && (
                        <span className="text-xs font-heading font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Peak</span>
                      )}
                      <span className="font-display text-xl text-court-950">{slot.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-body text-slate-400 text-sm mt-4">
                Prices are per court (up to 4 players). Members receive discounted rates. Equipment hire available at the club.
              </p>
            </div>

            <div>
              <p className="text-padel font-heading font-semibold text-sm uppercase tracking-widest mb-3">The Sport</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-6">What is Padel?</h2>
              <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
                Padel combines elements of tennis and squash. Played in doubles on an enclosed court about a third the size of a tennis court, the ball can be played off the glass walls — making for fast, exciting rallies.
              </p>
              <div className="space-y-3">
                {[
                  "Played in doubles — always social",
                  "Easy to pick up, hard to put down",
                  "Enclosed court means fewer lost balls",
                  "Great exercise for all fitness levels",
                  "No experience needed to have fun",
                  "Equipment available to hire",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-padel shrink-0" />
                    <span className="font-body text-slate-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-padel font-heading font-semibold text-sm uppercase tracking-widest mb-3">Getting Started</p>
            <h2 className="font-display text-3xl md:text-4xl text-court-950">How to Book</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", icon: Calendar, title: "Choose a Slot", desc: "Browse available times on our booking page and pick a slot that works for you." },
              { step: "2", icon: CreditCard, title: "Pay Online", desc: "Secure payment via Stripe. No membership or account required for padel." },
              { step: "3", icon: Users, title: "Turn Up & Play", desc: "Arrive at the club, grab your rackets (or hire ours), and enjoy your game!" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 border border-slate-100 text-center">
                <div className="w-10 h-10 bg-padel text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-5">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-court-950 text-lg mb-2">{s.title}</h3>
                <p className="font-body text-slate-500 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-padel text-white font-heading font-bold text-lg rounded-xl hover:opacity-90 transition-opacity btn-shine">
              <Calendar size={20} />
              Book a Padel Court
            </Link>
          </div>
        </div>
      </section>

      {/* Membership upsell */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">Play More, Pay Less</p>
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Become a Member</h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
            Love padel? Club members get discounted court rates on every booking, plus access to squash and racketball courts, the bar, social events, and our wonderful community.
          </p>
          <Link href="/membership" className="inline-flex items-center gap-2 px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine">
            View Membership Options <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
