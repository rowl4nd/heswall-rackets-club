"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top bar */}
      <div className="bg-court-950 text-court-100 text-sm py-2 section-padding hidden md:block">
        <div className="container-wide flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={13} />
              {SITE_CONFIG.phone}
              <span className="text-court-400 ml-1">({SITE_CONFIG.phoneNote})</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/membership"
              className="hover:text-amber-400 transition-colors"
            >
              Join the Club
            </Link>
            <span className="text-court-700">|</span>
            <Link
              href="/book"
              className="hover:text-amber-400 transition-colors"
            >
              Book a Court
            </Link>
            <span className="text-court-700">|</span>
            <button className="hover:text-amber-400 transition-colors">
              Member Login
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="section-padding">
          <div className="container-wide flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-court-900 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="font-display text-white text-lg lg:text-xl font-bold">
                  H
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-court-900 text-base lg:text-lg leading-tight tracking-tight">
                  Heswall Rackets
                </div>
                <div className="text-xs text-slate-400 font-body tracking-widest uppercase">
                  Est. 1974
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isHighlight =
                  link.href === "/book" || link.href === "/function-suite";

                if (link.href === "/book") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="ml-2 px-5 py-2.5 bg-court-800 text-white rounded-lg font-heading font-semibold text-sm hover:bg-court-700 transition-colors btn-shine"
                    >
                      Book a Court
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-heading font-medium transition-colors ${
                      isActive
                        ? "bg-court-50 text-court-800"
                        : isHighlight
                        ? "text-court-800 font-semibold hover:bg-court-50"
                        : "text-slate-600 hover:text-court-800 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={24} className="text-slate-700" />
              ) : (
                <Menu size={24} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="section-padding pb-6 border-t border-slate-100 bg-white">
            <div className="flex flex-col gap-1 mt-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-heading font-medium transition-colors ${
                      isActive
                        ? "bg-court-50 text-court-800"
                        : "text-slate-600 hover:bg-slate-50 hover:text-court-800"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-slate-300" />
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 bg-court-800 text-white rounded-lg font-heading font-semibold text-center hover:bg-court-700 transition-colors"
              >
                Book a Court
              </Link>
              <button className="px-4 py-3 border border-court-200 text-court-800 rounded-lg font-heading font-semibold text-center hover:bg-court-50 transition-colors">
                Member Login
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
