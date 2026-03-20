import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Users, Trophy, GraduationCap, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Squash",
  description: "4 squash courts including a glass-back show court. League teams, box leagues, junior coaching, and a welcoming community for all levels.",
};

export default function SquashPage() {
  return (
    <>
      <PageHero
        title="Squash"
        subtitle="4 courts including a glass-back show court. 8 league teams, active box leagues, coaching for all ages, and a community that's been playing since 1974."
        accentColor="#2563eb"
      />

      {/* Courts section */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-squash font-heading font-semibold text-sm uppercase tracking-widest mb-3">Our Courts</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-6">Four Courts, One Club</h2>
              <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
                We have four well-maintained squash courts, including a glass-back show court perfect for league matches, coaching sessions, and spectating. Courts are available 7 days a week from 8am to 10pm with automated lighting.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: "Courts 1–3", desc: "Standard singles courts with viewing gallery" },
                  { label: "Court 4", desc: "Glass-back show court — ideal for matches & coaching" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-squash shrink-0">
                      <div className="w-3 h-3 bg-squash rounded-sm" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-court-950">{c.label}</p>
                      <p className="font-body text-slate-500 text-sm">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-squash text-white font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity btn-shine">
                <Calendar size={18} />
                Book a Squash Court
              </Link>
            </div>

            <div className="space-y-6">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, value: "8", label: "League Teams", sub: "6 mens, 2 ladies" },
                  { icon: Users, value: "50+", label: "Active Members", sub: "All levels welcome" },
                  { icon: GraduationCap, value: "3+", label: "Qualified Coaches", sub: "England Squash certified" },
                  { icon: Clock, value: "14hrs", label: "Daily Access", sub: "8am – 10pm" },
                ].map((s) => (
                  <div key={s.label} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <s.icon size={20} className="text-squash mb-3" />
                    <div className="font-display text-2xl text-court-950">{s.value}</div>
                    <div className="font-heading font-semibold text-court-800 text-sm">{s.label}</div>
                    <div className="font-body text-slate-400 text-xs">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams & Leagues */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <p className="text-squash font-heading font-semibold text-sm uppercase tracking-widest mb-3">Competitive Play</p>
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-10">Teams &amp; Leagues</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "NW Counties League", desc: "6 mens and 2 ladies teams competing in the North West Counties Squash League. A proud history of competitive success at all levels." },
              { title: "Box Leagues", desc: "Monthly internal box leagues for all abilities. A great way to find regular games, track your progress, and meet other players at the club." },
              { title: "Club Tournaments", desc: "Annual club championships, handicap tournaments, and social competitions throughout the season. Finals Night is always a highlight." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-100">
                <Trophy size={22} className="text-squash mb-4" />
                <h3 className="font-heading font-bold text-court-950 text-lg mb-2">{item.title}</h3>
                <p className="font-body text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching & Juniors */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 lg:p-10">
              <GraduationCap size={28} className="text-squash mb-4" />
              <h3 className="font-display text-2xl text-court-950 mb-4">Coaching</h3>
              <p className="font-body text-slate-600 leading-relaxed mb-6">
                We have a number of England Squash qualified and registered coaches available for group and one-to-one coaching. Whether you&apos;re just starting out or looking to sharpen your competitive game, our coaches can help.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-squash font-heading font-semibold text-sm hover:gap-3 transition-all">
                Enquire about coaching <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 lg:p-10">
              <Users size={28} className="text-amber-600 mb-4" />
              <h3 className="font-display text-2xl text-court-950 mb-4">Junior Squash</h3>
              <p className="font-body text-slate-600 leading-relaxed mb-4">
                Dedicated sessions for junior players aged 5–18 every Friday evening from 6:30pm. Coached by our qualified team in a fun, supportive environment.
              </p>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-amber-600" />
                  <div>
                    <p className="font-heading font-bold text-court-950 text-sm">Every Friday — 6:30pm</p>
                    <p className="font-body text-slate-400 text-xs">Ages 5–18, all abilities welcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mix-in sessions */}
      <section className="section-padding py-20 bg-court-50">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">New to the Club?</p>
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Come Along to a Mix-In</h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
            Sunday evening mix-ins from 7pm are perfect for new or prospective members. Come and have a gentle knockabout, meet the regulars, and see what the club is all about. Your first three sessions are completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine flex items-center justify-center gap-2">
              Join the Club
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-court-200 text-court-800 font-heading font-semibold rounded-xl hover:bg-court-100 transition-colors flex items-center justify-center gap-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
