import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SECTIONS } from "@/lib/data";
import SectionTemplate from "@/components/SectionTemplate";

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SECTIONS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} — Tamara's Fairview`,
    description: s.tagline,
    openGraph: s.heroPhoto ? { images: [s.heroPhoto] } : undefined,
  };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SECTIONS.find((x) => x.slug === slug);
  if (!s) notFound();
  return <SectionTemplate s={s} />;
}
