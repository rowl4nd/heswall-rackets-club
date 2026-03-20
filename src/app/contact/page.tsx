import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Heswall Rackets Club. Address, phone, email, and enquiry forms for general and function suite bookings.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Whether you're interested in membership, booking a court, or hiring the function suite — we'd love to hear from you."
      />

      <section className="section-padding py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact cards */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <MapPin size={20} className="text-court-700 mb-3" />
                <h3 className="font-heading font-bold text-court-950 mb-2">Address</h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed">
                  {SITE_CONFIG.address.line1}<br />
                  {SITE_CONFIG.address.line2}<br />
                  {SITE_CONFIG.address.town}<br />
                  {SITE_CONFIG.address.postcode}
                </p>
                <a
                  href={`https://www.google.com/maps?q=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-court-700 font-heading font-semibold text-sm mt-3 hover:text-court-600 transition-colors"
                >
                  Open in Maps <ExternalLink size={13} />
                </a>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Phone size={20} className="text-court-700 mb-3" />
                <h3 className="font-heading font-bold text-court-950 mb-2">Phone</h3>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="font-body text-slate-600 text-sm hover:text-court-700 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
                <p className="font-body text-slate-400 text-xs mt-1">{SITE_CONFIG.phoneNote}</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Mail size={20} className="text-court-700 mb-3" />
                <h3 className="font-heading font-bold text-court-950 mb-2">Email</h3>
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-body text-slate-600 text-sm hover:text-court-700 transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <Clock size={20} className="text-court-700 mb-3" />
                <h3 className="font-heading font-bold text-court-950 mb-2">Opening Hours</h3>
                <div className="font-body text-slate-600 text-sm space-y-1">
                  <p>Courts: 8:00am – 10:00pm daily</p>
                  <p>Bar: Evenings from 6:30pm</p>
                  <p>Phone: Evenings 6:30pm – 9:30pm</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-court-950 mb-2">Function Suite Enquiries</h3>
                <p className="font-body text-slate-600 text-sm mb-3">Contact Leah directly:</p>
                <div className="space-y-2">
                  <a href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 font-body text-sm text-amber-700 hover:text-amber-800 transition-colors">
                    <Phone size={14} /> {SITE_CONFIG.functionSuite.phone}
                  </a>
                  <a href={`mailto:${SITE_CONFIG.functionSuite.email}`} className="flex items-center gap-2 font-body text-sm text-amber-700 hover:text-amber-800 transition-colors break-all">
                    <Mail size={14} /> {SITE_CONFIG.functionSuite.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-court-950 mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all bg-white">
                    <option value="">Select a topic</option>
                    <option>Membership enquiry</option>
                    <option>Court booking help</option>
                    <option>Coaching enquiry</option>
                    <option>Junior squash</option>
                    <option>Function suite hire</option>
                    <option>General enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-heading font-semibold text-court-950 text-sm mb-1.5">Message *</label>
                  <textarea rows={6} required className="w-full px-4 py-3 border border-slate-200 rounded-xl font-body text-slate-800 focus:ring-2 focus:ring-court-400 focus:border-court-400 outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="px-8 py-4 bg-court-800 text-white font-heading font-bold rounded-xl hover:bg-court-700 transition-colors btn-shine">
                  Send Message
                </button>
              </form>

              {/* Map embed placeholder */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-court-950 text-lg mb-4">Find Us</h3>
                <div className="bg-slate-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center border border-slate-200">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.5!2d${SITE_CONFIG.coordinates.lng}!3d${SITE_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE5JzQwLjEiTiAzwrAwNSc1MS4wIlc!5e0!3m2!1sen!2suk!4v1`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Heswall Rackets Club location"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
