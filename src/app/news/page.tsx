import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news, events, and announcements from Heswall Rackets Club.",
};

const samplePosts = [
  {
    title: "Padel Courts Now Open!",
    excerpt: "Our 2 brand new padel courts are now open for booking. No membership required — book online and pay per session.",
    date: "March 2026",
    category: "Padel",
    slug: "#",
  },
  {
    title: "Junior Squash — Friday Evenings",
    excerpt: "Coaching sessions for ages 5–18 run every Friday from 6:30pm. New players welcome — contact us to register.",
    date: "February 2026",
    category: "Juniors",
    slug: "#",
  },
  {
    title: "NW Counties League Season Update",
    excerpt: "Our mens and ladies teams are competing strongly this season. Come down and support at home matches.",
    date: "January 2026",
    category: "Squash",
    slug: "#",
  },
  {
    title: "Function Suite Available for 2026 Events",
    excerpt: "Planning a birthday, anniversary, or corporate event? Our function suite is booking up fast for 2026. Contact Leah to discuss.",
    date: "January 2026",
    category: "Events",
    slug: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Club announcements, match results, social events, and everything happening at Heswall Rackets Club."
      />

      <section className="section-padding py-20 bg-white">
        <div className="container-wide max-w-4xl">
          <div className="space-y-6">
            {samplePosts.map((post, i) => (
              <article key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 bg-court-50 text-court-700 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 font-body text-sm">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                </div>
                <h2 className="font-display text-xl text-court-950 mb-2">{post.title}</h2>
                <p className="font-body text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={post.slug} className="inline-flex items-center gap-1.5 text-court-700 font-heading font-semibold text-sm hover:gap-2.5 transition-all">
                  Read more <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center font-body text-slate-400 text-sm mt-10">
            More posts will appear here as the club publishes news via the admin panel.
          </p>
        </div>
      </section>
    </>
  );
}
