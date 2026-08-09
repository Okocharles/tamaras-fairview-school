import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { C } from "@/lib/colors";
import { PageHero } from "@/components/UI";
import { BLOG_POSTS } from "@/lib/data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Tamara's Fairview`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div>
      <PageHero eyebrow={formatDate(post.date)} title={post.title} />
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16">
        <div className="rounded-xl overflow-hidden mb-10" style={{ background: C.fog }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>
        <div className="space-y-5">
          {post.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed" style={{ color: C.slate }}>{para}</p>
          ))}
        </div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mt-10" style={{ color: C.navy700 }}>
          <ArrowLeft size={15} /> Back to Blog
        </Link>
      </section>
    </div>
  );
}
