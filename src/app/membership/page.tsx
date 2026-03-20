import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, Users, Trophy, Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join Heswall Rackets Club. Membership packages for adults, juniors, families and social members. Unlimited squash & racketball, discounted padel.",
};

const tiers = [
  {
    name: "Full Adult",
    price: "TBC",
    period: "/year",
    monthly: "or monthly DD",
    highlight: true,
    features: [
      "Unlimited squash & racketball court booking",
      "Discounted padel rates",
      "Access to box leagues & competitions",
      "Bar & social events access",
      "Sunday mix-in sessions",
      "Guest booking (£3 guest fee)",
      "NW Counties League eligibility",
    ],
  },
  {
    name: "Under 30",
    price: "TBC",
    period: "/year",
    monthly: "Reduced rate",
    highlight: false,
    features: [
      "All Full Adult benefits",
      "Reduced annual subscription",
      "Monthly DD available",
      "Perfect for students & young professionals",
    ],
  },
  {
    name: "Junior (U18)",
    price: "TBC",
    period: "/year",
    monthly: null,
    highlight: false,
    features: [
      "Friday evening coaching sessions",
      "Supervised court access",
      "Junior competitions & tournaments",
      "Ages 5–18 welcome",
    ],
  },
  {
    name: "Family",
    price: "TBC",
    period: "/year",
    monthly: "or monthly DD",
    highlight: false,
    features: [
      "2 adults + children",
      "All court access included",
      "Junior coaching included",
      "Best value for families",
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        subtitle="Join the club and get unlimited access to squash & racketball courts, discounted padel, league eligibility, and a brilliant community."
        accentColor="#22c55e"
      />

      {/* Pricing tiers */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border ${
                  tier.highlight
                    ? "bg-court-900 border-court-800 text-white ring-2 ring-amber-400"
                    : "bg-white border-slate-100"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 bg-amber-500 text-court-950 font-heading font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-2xl mb-2 ${tier.highlight ? "text-white" : "text-court-950"}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-display text-3xl ${tier.highlight ? "text-amber-400" : "text-court-800"}`}>
                    {tier.price}
                  </span>
                  <span className={`font-body text-sm ${tier.highlight ? "text-court-200" : "text-slate-400"}`}>
                    {tier.period}
                  </span>
                </div>
                {tier.monthly && (
                  <p className={`font-body text-sm mb-6 ${tier.highlight ? "text-court-300" : "text-slate-400"}`}>
                    {tier.monthly}
                  </p>
                )}

                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={16} className={`shrink-0 mt-0.5 ${tier.highlight ? "text-amber-400" : "text-court-600"}`} />
                      <span className={`font-body text-sm ${tier.highlight ? "text-court-100" : "text-slate-600"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 font-heading font-bold rounded-xl transition-colors btn-shine ${
                    tier.highlight
                      ? "bg-amber-500 hover:bg-amber-600 text-court-950"
                      : "bg-court-800 hover:bg-court-700 text-white"
                  }`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-slate-400 text-sm mt-8">
            Exact pricing will be confirmed by the committee. Payments processed securely via Stripe. Annual or monthly options available.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Membership Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Online Booking", desc: "Book courts 7 days in advance from your phone or computer. Instant confirmation." },
              { icon: Users, title: "Community", desc: "Join a club run by passionate volunteers. Social events, quiz nights, live music & more." },
              { icon: Trophy, title: "Compete", desc: "Box leagues, club tournaments, and eligibility for NW Counties League teams." },
              { icon: Star, title: "Coaching", desc: "Access to England Squash qualified coaches for group and 1-to-1 sessions." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 border border-slate-100">
                <b.icon size={22} className="text-court-700 mb-4" />
                <h3 className="font-heading font-bold text-court-950 mb-2">{b.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try before you join */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Try Before You Join</h2>
          <p className="font-body text-slate-600 text-lg leading-relaxed mb-8">
            Not sure yet? Prospective members can attend up to 3 Sunday evening mix-in sessions completely free. Come along from 7pm, meet the regulars, and see what the club is all about. We recommend contacting us beforehand so we can arrange someone to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine flex items-center justify-center gap-2">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
