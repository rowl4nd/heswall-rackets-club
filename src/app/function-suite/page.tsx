import { Metadata } from "next";
import { Star, Phone, Mail, Users, UtensilsCrossed, Music, Clock, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/lib/constants";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Function Suite",
  description: "Hire our function suite for birthdays, anniversaries, corporate events & children's parties. Licensed bar, refurbished kitchen, and fantastic reviews.",
};

export default function FunctionSuitePage() {
  return (
    <>
      <PageHero
        title="Function Suite"
        subtitle="Comfortable, friendly surroundings for your next celebration. Licensed bar, recently refurbished kitchen, and a team that makes every event special."
        accentColor="#f59e0b"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#enquiry" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center justify-center gap-2">
            Enquire Now <ArrowRight size={18} />
          </a>
          <a href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-lg rounded-xl transition-colors flex items-center justify-center gap-2">
            <Phone size={18} /> Call Leah
          </a>
        </div>
      </PageHero>

      {/* Event types */}
      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">Your Event, Your Way</p>
            <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Perfect For</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🎂", label: "Birthdays" },
              { emoji: "💍", label: "Anniversaries" },
              { emoji: "🎈", label: "Children's Parties" },
              { emoji: "💼", label: "Corporate Events" },
              { emoji: "🎶", label: "Live Music Nights" },
              { emoji: "🔍", label: "Murder Mysteries" },
            ].map((e) => (
              <div key={e.label} className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{e.emoji}</div>
                <p className="font-heading font-bold text-court-950 text-sm">{e.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding py-20 bg-slate-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-8">Venue Facilities</h2>

              <div className="space-y-4">
                {[
                  { icon: Users, title: "Spacious Function Rooms", desc: "Flexible space that can be configured for intimate gatherings or larger celebrations." },
                  { icon: UtensilsCrossed, title: "Refurbished Kitchen", desc: "Full kitchen available for you or your choice of caterer. We just ask it's left clean and tidy." },
                  { icon: Music, title: "Entertainment Ready", desc: "Space for DJs, live music, and entertainment. We can recommend trusted local suppliers." },
                  { icon: Clock, title: "Licensed Bar", desc: "Well-stocked, licensed bar with friendly staff. Open for your event from early evening." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl">
                    <div className="w-11 h-11 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
                      <f.icon size={20} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-court-950 text-[15px]">{f.title}</p>
                      <p className="font-body text-slate-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-court-50 border border-court-100 rounded-xl">
                <p className="font-heading font-bold text-court-950 mb-2">Also included:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Free parking", "Changing rooms", "Accessible entrance", "Court viewing area", "Wi-Fi", "Defibrillator on site"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-court-600 shrink-0" />
                      <span className="font-body text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">What People Say</p>
              <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-8">Rave Reviews</h2>

              <div className="space-y-5">
                {[
                  { text: "Just wanted to say a huge thank you to you & your team for an amazing night! The room looked fab, the food was amazing & the staff were fantastic! We have had so many lovely comments from our friends.", author: "Sam & Simon", date: "Nov 2022" },
                  { text: "The party was fantastic and everyone really enjoyed it. Thanks very much for all of the arrangements and the food was excellent. Also big thanks to the bar staff who were very helpful and pleasant.", author: "Paul", date: "Apr 2024" },
                  { text: "Thanks again for Saturday! Everyone loved it and complimented the venue so much! Thanks for taking the stress away from me!", author: "Elysia", date: "Aug 2022" },
                  { text: "Just want to thank you for all you did to ensure yesterday was a success. We had the best day and all our guests raved about the venue and service.", author: "Event Guest", date: "Jun 2023" },
                  { text: "I think it went off very well and everybody seemed to enjoy themselves and especially the buffet. I think, listening to our friends, we will be seeing you again at future events.", author: "Jenny", date: "Aug 2022" },
                ].map((t, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="font-body text-slate-600 text-[15px] leading-relaxed italic mb-3">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-court-950 text-sm">{t.author}</span>
                      <span className="font-body text-slate-400 text-xs">{t.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="section-padding py-20 bg-white scroll-mt-24">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-heading font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-court-950 mb-4">Enquire About Your Event</h2>
            <p className="font-body text-slate-500 text-lg">
              Fill in the form below and Leah will get back to you to discuss your event. Alternatively, call directly on{" "}
              <a href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`} className="text-amber-600 font-semibold hover:underline">
                {SITE_CONFIG.functionSuite.phone}
              </a>.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Contact bar */}
      <section className="section-padding py-10 bg-amber-50 border-t border-amber-100">
        <div className="container-wide flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-amber-600" />
            <a href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`} className="font-heading font-bold text-court-950 hover:text-amber-700 transition-colors">
              {SITE_CONFIG.functionSuite.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-amber-600" />
            <a href={`mailto:${SITE_CONFIG.functionSuite.email}`} className="font-heading font-bold text-court-950 hover:text-amber-700 transition-colors">
              {SITE_CONFIG.functionSuite.email}
            </a>
          </div>
          <p className="font-body text-slate-500 text-sm">Ask for Leah</p>
        </div>
      </section>
    </>
  );
}
