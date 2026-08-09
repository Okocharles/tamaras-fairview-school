"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { C } from "@/lib/colors";
import { SectionData, SECTIONS, CROSS_LINKS, GRADE_SCHOOL_GALLERY, HIGH_SCHOOL_GALLERY, NURSERY_GALLERY, logoForSection } from "@/lib/data";
import { PageHero, GoldButton } from "./UI";
import GalleryCarousel from "./GalleryCarousel";
import { useApply } from "./ApplyProvider";

export default function SectionTemplate({ s }: { s: SectionData }) {
  const [tab, setTab] = useState(0);
  const { openApply } = useApply();

  const logoImage = logoForSection(s.slug);

  return (
    <div>
      <PageHero eyebrow={s.ageGroup} title={s.name} sub={s.tagline} crestTier={s.logoTier} logoImage={logoImage} bgPhoto={s.heroPhoto} />

      <section className="max-w-4xl mx-auto px-5 md:px-8 py-14">
        <p className="text-base leading-relaxed mb-10" style={{ color: C.slate }}>{s.overview}</p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Curriculum &amp; Focus</div>
            <div className="space-y-2">
              {s.curriculum.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                  <Check size={15} style={{ color: C.navy500 }} className="shrink-0" /> {c}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Facilities</div>
            <div className="space-y-2">
              {s.facilities.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                  <Star size={15} style={{ color: C.gold500 }} className="shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {s.tabs && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>{s.uniqueTitle}</div>
            <p className="text-sm mb-4" style={{ color: C.mute }}>{s.uniqueBody}</p>
            <div className="flex gap-2 mb-4">
              {s.tabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTab(i)}
                  className="px-4 py-2 rounded-md text-sm font-semibold"
                  style={{ background: tab === i ? C.navy900 : C.fog, color: tab === i ? C.white : C.ink }}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="p-5 rounded-lg text-sm" style={{ background: C.navy50, color: C.slate }}>
              {s.tabs[tab].focus}
            </div>
          </div>
        )}

        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>A Day in the Life</div>
          <div className="space-y-0">
            {s.typicalDay.map((d, i) => (
              <div key={d.time} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full mt-1.5" style={{ background: C.gold500 }} />
                  {i < s.typicalDay.length - 1 && <div className="w-px flex-1" style={{ background: C.line }} />}
                </div>
                <div className="pb-6">
                  <div className="text-xs font-bold" style={{ color: C.navy500 }}>{d.time}</div>
                  <div className="text-sm" style={{ color: C.ink }}>{d.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {(s.slug === "junior-secondary" || s.slug === "senior-secondary") && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Life at the High School</div>
            <GalleryCarousel photos={HIGH_SCHOOL_GALLERY} />
          </div>
        )}

        {s.slug === "grade-school" && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Life at Grade School</div>
            <GalleryCarousel photos={GRADE_SCHOOL_GALLERY} />
          </div>
        )}

        {s.slug === "nursery" && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Life at Nursery &amp; Kindergarten</div>
            <GalleryCarousel photos={NURSERY_GALLERY} />
          </div>
        )}

        {!s.tabs && (
          <div className="p-6 rounded-xl mb-14" style={{ background: C.gold100 }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold600 }}>{s.uniqueTitle}</div>
            <p className="text-sm mb-3" style={{ color: C.slate }}>{s.uniqueBody}</p>
            {s.linkTo && (
              <Link
                href={s.linkTo === "alumni" ? "/" : `/sections/${s.linkTo}`}
                className="text-sm font-semibold inline-flex items-center gap-1"
                style={{ color: C.navy700 }}
              >
                {s.linkTo === "alumni" ? "Meet Our Alumni" : `Visit ${SECTIONS.find((x) => x.slug === s.linkTo)?.name}`}
              </Link>
            )}
          </div>
        )}
      </section>

      <section style={{ background: C.navy900 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl md:text-2xl text-center md:text-left" style={{ fontFamily: "Playfair Display, serif", color: C.white }}>
            Ready to enroll in {s.name}?
          </h3>
          <GoldButton onClick={() => openApply(s.name)}>Apply to This Section</GoldButton>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-4 text-center" style={{ color: C.mute }}>
          Explore Other Sections
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CROSS_LINKS.filter((c) => c.slug !== s.slug).map((c) => (
            <Link
              key={c.slug}
              href={`/sections/${c.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: C.fog, color: C.ink }}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
