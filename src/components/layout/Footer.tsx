import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      {/* Function Suite CTA Banner */}
      <section className="relative bg-court-950 noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-court-950 via-court-900 to-court-950" />
        <div className="relative z-10 section-padding py-16 md:py-20">
          <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-amber-400 font-heading font-semibold text-sm uppercase tracking-widest mb-2">
                Planning an Event?
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                Our Function Suite is Available for Hire
              </h2>
              <p className="text-court-200 font-body text-lg max-w-xl">
                Birthdays, anniversaries, corporate events, children&apos;s
                parties and more. Fully equipped kitchen, licensed bar, and
                fantastic feedback from every event.
              </p>
            </div>
            <Link
              href="/function-suite"
              className="shrink-0 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-court-950 font-heading font-bold text-lg rounded-xl transition-colors btn-shine flex items-center gap-2"
            >
              Enquire Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-court-950 text-court-200 border-t border-court-900">
        <div className="section-padding py-16">
          <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-court-800 flex items-center justify-center">
                  <span className="font-display text-white text-lg font-bold">
                    H
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-base leading-tight">
                    Heswall Rackets Club
                  </div>
                  <div className="text-xs text-court-400 tracking-widest uppercase">
                    Est. 1974
                  </div>
                </div>
              </div>
              <p className="text-court-300 font-body text-sm leading-relaxed mb-5">
                Community-owned sports club on the Wirral peninsula. Squash,
                Racketball &amp; Padel for all ages and abilities. Run entirely
                by volunteers.
              </p>
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-court-800 hover:bg-court-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-court-800 hover:bg-court-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-court-300 hover:text-amber-400 transition-colors text-sm font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-body">
                    {SITE_CONFIG.address.line1}
                    <br />
                    {SITE_CONFIG.address.line2}
                    <br />
                    {SITE_CONFIG.address.town}
                    <br />
                    {SITE_CONFIG.address.postcode}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <div className="text-sm font-body">
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <br />
                    <span className="text-court-500 text-xs">
                      {SITE_CONFIG.phoneNote}
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm font-body hover:text-amber-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-body">
                    Courts: 8am – 10pm daily
                    <br />
                    Bar: Evenings from 6:30pm
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Function Suite */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                Function Suite
              </h3>
              <p className="text-court-300 text-sm font-body mb-4">
                Available for birthdays, anniversaries, corporate events &amp;
                more. Contact Leah to discuss your event.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Phone size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <a
                    href={`tel:${SITE_CONFIG.functionSuite.phone.replace(/\s/g, "")}`}
                    className="text-sm font-body hover:text-amber-400 transition-colors"
                  >
                    {SITE_CONFIG.functionSuite.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-court-400 shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${SITE_CONFIG.functionSuite.email}`}
                    className="text-sm font-body hover:text-amber-400 transition-colors"
                  >
                    {SITE_CONFIG.functionSuite.email}
                  </a>
                </li>
              </ul>
              <Link
                href="/function-suite"
                className="mt-5 inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-heading font-semibold text-sm transition-colors"
              >
                View Function Suite
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-court-900 section-padding py-5">
          <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-court-500 font-body">
            <p>
              &copy; {new Date().getFullYear()} Heswall Rackets Club. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-court-300 transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy" className="hover:text-court-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
