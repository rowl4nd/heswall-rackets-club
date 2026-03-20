import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Heart } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Heswall Rackets Club — community-owned since 1974. Learn about our history, facilities, volunteer committee, and the clubs that call us home.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Club"
        subtitle="Conceived and built by a handful of keen squash players in the 1970s, Heswall Rackets Club continues their legacy as a vibrant, much-loved members' club."
      />

      {/* History */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-4xl">
          <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-8">Since 1974</h2>

          <div className="prose-like space-y-6 font-body text-slate-600 text-lg leading-relaxed">
            <p>
              Based on the Wirral peninsula, centrally placed between Liverpool and Chester, Heswall Rackets Club is recognised as one of the best equipped members&apos; squash and racketball clubs in the North West of England.
            </p>
            <p>
              Nestling in the superb Gayton Park Playing Fields — a truly beautiful civic amenity on the outskirts of Heswall — we have four courts including a glass-back show court, two brand new padel courts, six mens and two ladies squash teams competing in the North West Counties Squash League, active box leagues, and a well-stocked bar and function rooms.
            </p>
            <p>
              The club is run entirely by volunteers who are passionate about racket sports and committed to keeping this community asset thriving. New members are always most welcome, regardless of age, experience, or ability.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">What We Have</p>
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-10">Facilities</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "4 Squash Courts",
              "1 Glass-Back Show Court",
              "2 Padel Courts",
              "Court Viewing Gallery",
              "Licensed Bar",
              "Function Suite",
              "Refurbished Kitchen",
              "Changing Rooms & Showers",
              "Free Parking",
              "Defibrillator",
              "Wi-Fi",
              "Accessible Entrance",
            ].map((f) => (
              <div key={f} className="bg-white rounded-xl p-5 border border-slate-100 text-center">
                <p className="font-heading font-semibold text-court-950 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer-run */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-4xl">
          <div className="bg-court-50 border border-court-100 rounded-3xl p-10 lg:p-14 text-center">
            <Heart size={32} className="text-court-700 mx-auto mb-4" />
            <h2 className="font-display text-3xl text-court-950 mb-4">Run by Volunteers</h2>
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
              Every aspect of the club — from court maintenance to league organisation, bar management to event planning — is handled by our dedicated committee of volunteers. This keeps costs low and community spirit high.
            </p>
            <p className="font-body text-slate-600 text-lg leading-relaxed">
              If you&apos;d like to get involved, we&apos;re always looking for helping hands. Whether it&apos;s committee work, coaching, event organising, or simply helping to keep the place looking great — every contribution matters.
            </p>
          </div>
        </div>
      </section>

      {/* Resident clubs */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide max-w-4xl">
          <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Community</p>
          <h2 className="font-display text-3xl text-court-950 mb-8">Also at the Club</h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
            Heswall Rackets Club is also home to a number of other clubs and regular activities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Pensby Runners Club", desc: "Regular running group based at the club" },
              { name: "Heswall Anglers Club", desc: "Informal meetings for local fishing enthusiasts" },
              { name: "Heswall Folk Club", desc: "Live folk music sessions" },
              { name: "Yoga & Aerial Yoga", desc: "Classes with Lee Brogan & team from Wirral PT" },
              { name: "Bridge Club", desc: "Various daytime & evening sessions" },
              { name: "Social Events", desc: "Quiz nights, live music, murder mysteries & more" },
            ].map((c) => (
              <div key={c.name} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl">
                <Users size={18} className="text-court-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-court-950 text-sm">{c.name}</p>
                  <p className="font-body text-slate-500 text-xs">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl text-court-950 mb-4">Come and See for Yourself</h2>
          <p className="font-body text-slate-600 text-lg mb-8">
            The best way to find out about the club is to visit. Come along to a Sunday evening mix-in, or get in touch and we&apos;ll arrange for someone to show you around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine flex items-center justify-center gap-2">
              Join the Club <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-court-200 text-court-800 font-heading font-semibold rounded-xl hover:bg-court-50 transition-colors flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
