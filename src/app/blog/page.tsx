import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { C } from "@/lib/colors";
import { PageHero } from "@/components/UI";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Tamara's Fairview",
  description: "News, achievements, and updates from Tamara's Fairview Nursery, Grade and High School.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <div>
      <PageHero eyebrow="News & Updates" title="Blog" sub="Achievements, announcements, and stories from across Tamara's Fairview." />
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-16">
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row gap-5 rounded-xl overflow-hidden hover:-translate-y-0.5 transition-transform"
              style={{ border: `1px solid ${C.line}` }}
            >
              <div className="sm:w-64 shrink-0 aspect-[3/2] sm:aspect-auto" style={{ background: C.fog }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: C.gold600 }}>
                  {formatDate(post.date)}
                </div>
                <h2 className="text-lg font-bold mb-2" style={{ color: C.navy900, fontFamily: "Playfair Display, serif" }}>
                  {post.title}
                </h2>
                <p className="text-sm mb-3" style={{ color: C.mute }}>{post.excerpt}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: C.navy700 }}>
                  Read more <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
