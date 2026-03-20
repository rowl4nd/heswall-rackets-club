import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Trophy,
  Star,
  MapPin,
  ChevronRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { SPORTS, SITE_CONFIG } from "@/lib/constants";

function SportIcon({ sport }: { sport: string }) {
  // Simple SVG icons for each sport
  if (sport === "squash") {
    return (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M14 26 L26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (sport === "racketball") {
    return (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
      <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden noise-overlay">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-court-950 via-court-900 to-court-800" />
        {/* Decorative court lines */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
          <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-white rounded-sm" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-court-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 section-padding w-full py-20 lg:py-32">
          <div className="container-wide">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8 animate-fade-in">
                <Sparkles size={14} className="text-amber-400" />
                <span className="text-court-100 font-heading text-sm font-medium">
                  Community-owned since 1974
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Your Game.
                <br />
                <span className="text-amber-400">Your Club.</span>
              </h1>

              {/* Sub */}
              <p
                className="font-body text-xl md:text-2xl text-court-200 leading-relaxed mb-10 max-w-2xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                Squash, Racketball &amp; Padel on the Wirral. 6 courts, expert
                coaching, and a welcoming community for players of every level.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Link
                  href="/book"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book a Court
                </Link>
                <Link
                  href="/membership"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-heading font-semibold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Join the Club
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Quick stats */}
              <div
                className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div>
                  <div className="font-display text-3xl text-white">6</div>
                  <div className="text-court-300 font-body text-sm">Courts</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white">3</div>
                  <div className="text-court-300 font-body text-sm">Sports</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white">8</div>
                  <div className="text-court-300 font-body text-sm">
                    League Teams
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-white">50+</div>
                  <div className="text-court-300 font-body text-sm">
                    Years of Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPORTS CARDS ===== */}
      <section className="section-padding py-20 lg:py-28 bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Three Sports, One Club
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-court-950 mb-4">
              Find Your Game
            </h2>
            <p className="font-body text-lg text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re a seasoned competitor or picking up a racket
              for the first time, we have a sport and a community waiting for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SPORTS.map((sport, i) => (
              <Link
                key={sport.slug}
                href={`/${sport.slug}`}
                className="sport-card group relative bg-white rounded-2xl border border-slate-100 overflow-hidden"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Colour top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: sport.color }}
                />

                <div className="p-8">
                  {/* Icon + sport name */}
                  <div className="flex items-start justify-between mb-6">
                    <div style={{ color: sport.color }}>
                      <SportIcon sport={sport.slug} />
                    </div>
                    <span
                      className={`text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full ${sport.bgColor} ${sport.textColor}`}
                    >
                      {sport.courts} courts
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-court-950 mb-3">
                    {sport.name}
                  </h3>
                  <p className="font-body text-slate-500 leading-relaxed mb-6 text-[15px]">
                    {sport.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {sport.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-600 font-body"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: sport.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-heading font-semibold text-sm group-hover:gap-3 transition-all"
                    style={{ color: sport.color }}
                  >
                    Learn more
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Padel callout */}
          <div className="mt-10 p-6 bg-purple-50 border border-purple-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-padel">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="font-heading font-bold text-court-950">
                  Padel — No Membership Required
                </p>
                <p className="font-body text-slate-500 text-sm">
                  Book a padel court instantly. Pay &amp; play from £16 per
                  session. Open to everyone.
                </p>
              </div>
            </div>
            <Link
              href="/book"
              className="shrink-0 px-6 py-3 bg-padel text-white font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity btn-shine"
            >
              Book Padel
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FUNCTION SUITE ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-court-950" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, rgba(251,191,36,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(21,128,61,0.2) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 section-padding py-20 lg:py-28">
          <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-amber-400 font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Function Suite &amp; Event Hire
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                The Perfect Venue
                <br />
                for Your Event
              </h2>
              <p className="font-body text-lg text-slate-300 leading-relaxed mb-8">
                Our bar and function rooms provide comfortable, friendly
                surroundings for all sorts of events. With a recently refurbished
                kitchen, licensed bar, and a team that goes above and beyond.
              </p>

              {/* Event types */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  "Birthdays",
                  "Anniversaries",
                  "Corporate Events",
                  "Children's Parties",
                  "Celebrations",
                  "Meetings",
                ].map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-2 text-slate-300 font-body text-sm"
                  >
                    <Star size={12} className="text-amber-400 shrink-0" />
                    {type}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/function-suite"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2"
                >
                  Enquire Now
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`}
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 font-heading font-semibold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Leah
                </a>
              </div>
            </div>

            {/* Right - Testimonials */}
            <div className="space-y-6">
              {[
                {
                  text: "Just wanted to say a huge thank you to you & your team for an amazing night! The room looked fab, the food was amazing & the staff were fantastic! We have had so many lovely comments from our friends.",
                  author: "Sam & Simon",
                  event: "November 2022",
                },
                {
                  text: "The party was fantastic yesterday and everyone really enjoyed it. Thanks very much for all of the arrangements and the food was excellent. Also big thanks to the bar staff who were very helpful and pleasant.",
                  author: "Paul",
                  event: "April 2024",
                },
                {
                  text: "Thanks again for Saturday! Everyone loved it and complimented the venue so much! Thanks for taking the stress away from me!",
                  author: "Elysia",
                  event: "August 2022",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="font-body text-slate-200 text-[15px] leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-white text-sm">
                      {t.author}
                    </span>
                    <span className="text-slate-400 font-body text-xs">
                      {t.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="section-padding py-20 lg:py-28 bg-court-50">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              More Than a Club
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-court-950 mb-4">
              Why Players Choose Heswall
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Welcoming Community",
                desc: "Run entirely by volunteers who are passionate about racket sports. New members of all abilities are always welcome.",
              },
              {
                icon: Trophy,
                title: "Competitive Edge",
                desc: "8 teams in the NW Counties League, active box leagues, club tournaments, and regular competitions.",
              },
              {
                icon: Calendar,
                title: "Flexible Play",
                desc: "Book courts online 7 days a week. Sunday mix-ins, junior Fridays, and pay-and-play padel for everyone.",
              },
              {
                icon: MapPin,
                title: "Beautiful Setting",
                desc: "Nestled in Gayton Park Playing Fields with free parking, changing rooms, and a licensed bar.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-court-100"
              >
                <div className="w-12 h-12 bg-court-100 rounded-xl flex items-center justify-center text-court-700 mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-court-950 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-slate-500 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK BOOK CTA ===== */}
      <section className="section-padding py-20 lg:py-24 bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-court-900 via-court-800 to-court-900 rounded-3xl overflow-hidden relative noise-overlay">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                  Ready to Play?
                </h2>
                <p className="font-body text-court-200 text-lg max-w-lg">
                  Book a court in seconds. Members play for free, and padel is
                  open to everyone — no membership required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/book"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Now
                </Link>
                <Link
                  href="/membership"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  View Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
