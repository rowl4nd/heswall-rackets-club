import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  accentColor = "#f59e0b",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-court-950 via-court-900 to-court-800" />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: accentColor }} />

      <div className="relative z-10 section-padding pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="container-wide">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-body text-court-300 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-court-500" />
            <span style={{ color: accentColor }}>{breadcrumb || title}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-xl text-court-200 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
