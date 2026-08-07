"use client";

import { C } from "@/lib/colors";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import CrestBadge from "./CrestBadge";

export function GoldButton({
  children,
  onClick,
  icon: Icon = ArrowRight,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ElementType;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-transform hover:-translate-y-0.5"
      style={{ background: C.gold500, color: C.white, boxShadow: "0 8px 20px rgba(217,119,6,0.28)" }}
    >
      {children}
      <Icon size={16} />
    </button>
  );
}

export function GhostButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border transition-colors"
      style={{ borderColor: "rgba(255,255,255,0.6)", color: C.white }}
    >
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: C.gold600 }}>
      <span style={{ width: 20, height: 2, background: C.gold500, display: "inline-block" }} />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: C.navy900 }}>
        {title}
      </h2>
      {sub && (
        <p className="text-base" style={{ color: C.mute }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  crestTier,
  logoImage,
  bgPhoto,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  crestTier?: "junior" | "senior";
  logoImage?: string;
  bgPhoto?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={!bgPhoto ? { background: `linear-gradient(160deg, ${C.navy900} 0%, ${C.navy700} 100%)` } : undefined}>
      {bgPhoto && (
        <>
          <Image src={bgPhoto} alt="" fill priority sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(10,22,40,0.88) 0%, rgba(16,40,80,0.75) 100%)" }}
          />
        </>
      )}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 relative z-10">
        {logoImage && (
          <div className="mb-5 p-2 rounded-xl inline-block" style={{ background: C.white }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoImage} alt="School crest" style={{ height: 56, width: "auto" }} />
          </div>
        )}
        {!logoImage && crestTier && (
          <div className="mb-5">
            <CrestBadge tier={crestTier} size={52} />
          </div>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: C.white }}>
          {title}
        </h1>
        {sub && (
          <p className="text-base md:text-lg max-w-xl" style={{ color: C.navy100 }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionsPreviewIcon() {
  return <ChevronRight size={13} />;
}
