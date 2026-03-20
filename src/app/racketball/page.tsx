import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Heart, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Racketball",
  description: "Racketball at Heswall — a faster, more accessible racket sport played on squash courts. Perfect for all ages and fitness levels.",
};

export default function RacketballPage() {
  return (
    <>
      <PageHero
        title="Racketball"
        subtitle="A bigger racket, a bouncier ball, and a game that's accessible to everyone. Played on our squash courts — it's the perfect complement to squash, or a brilliant sport in its own right."
        accentColor="#dc2626"
      />

      {/* What is Racketball */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-racketball font-heading font-semibold text-sm uppercase tracking-widest mb-3">The Sport</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-6">What is Racketball?</h2>
              <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
                Racketball is played on a standard squash court but uses a bigger racket head and a larger, more bouncy ball. This gives players a wider response range and makes rallies longer, more aerobic, and incredibly enjoyable.
              </p>
              <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
                The beauty is that in squash, someone much better can dominate completely — but in racketball, you can always make a go of it and both players get a great workout. It&apos;s not instead of squash, it&apos;s as well as squash!
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-racketball text-white font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity btn-shine">
                <Calendar size={18} />
                Book a Court
              </Link>
            </div>

            <div className="space-y-4">
              <p className="font-heading font-bold text-court-950 text-lg mb-2">Racketball is great for people who:</p>
              {[
                "Fancy a different challenge from squash",
                "Want a more aerobic but less high-impact sport",
                "Are recovering from injury",
                "Find squash a little too demanding",
                "Are completely new to racket sports",
                "Want longer, more social rallies",
                "Looking for a full-body workout",
                "Enjoy playing with friends of different abilities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                  <CheckCircle size={18} className="text-racketball shrink-0 mt-0.5" />
                  <span className="font-body text-slate-700 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-racketball font-heading font-semibold text-sm uppercase tracking-widest mb-3">Why Racketball?</p>
            <h2 className="font-display text-3xl md:text-4xl text-court-950">Benefits of the Game</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Lower Impact", desc: "Easier on joints than squash. The bouncier ball means less lunging and diving, making it ideal for players of all ages and those returning from injury." },
              { icon: Zap, title: "Great Cardio", desc: "Longer rallies mean a sustained aerobic workout. You'll burn calories and build endurance while having a fantastic time on court." },
              { icon: Users, title: "More Social", desc: "The nature of the game means players of different abilities can have competitive, enjoyable matches together. It's incredibly social." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 border border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-racketball mb-5">
                  <b.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-court-950 text-lg mb-2">{b.title}</h3>
                <p className="font-body text-slate-500 text-[15px] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ladies team & CTA */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-3xl p-10 lg:p-16 text-center max-w-3xl mx-auto">
            <Users size={32} className="text-racketball mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl text-court-950 mb-4">Ladies Racketball</h3>
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
              Our ladies team competes in local racketball leagues and runs regular Monday evening sessions. Whether you&apos;re experienced or curious, you&apos;re very welcome to come along. Contact us to find out session times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="px-8 py-4 bg-racketball text-white font-heading font-bold rounded-xl hover:opacity-90 transition-opacity btn-shine flex items-center justify-center gap-2">
                Join the Club <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-red-200 text-racketball font-heading font-semibold rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
