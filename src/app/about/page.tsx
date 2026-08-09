"use client";

import { useState } from "react";
import { C } from "@/lib/colors";
import { PageHero, SectionHeading } from "@/components/UI";
import GalleryCarousel from "@/components/GalleryCarousel";
import { ABOUT_GALLERY } from "@/lib/data";

export default function AboutPage() {
  const [openRule, setOpenRule] = useState(0);
  const rules = [
    "We respect ourselves and others at all times",
    "We take responsibility for our actions",
    "We come to school prepared and ready to learn",
    "We are honest and tell the truth",
    "We take care of school property and our environment",
    "We resolve conflicts peacefully",
    "We celebrate the success of others",
  ];
  const pillars = ["Academic", "Emotional", "Social", "Spiritual", "Practical Intelligence"];

  return (
    <div>
      <PageHero eyebrow="About Us" title="Our Story" sub="A whole new world of learning and care, since day one." />
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-16">
        <p className="text-base leading-relaxed mb-6" style={{ color: C.slate }}>
          Tamara&apos;s Fairview began with a simple conviction: that a child&apos;s education should form
          both the mind and the character, in equal measure. What started as a small nursery in
          Jos South LGA has grown into a full pathway — Discovery through Senior Secondary — without
          ever losing that founding intimacy.
        </p>

        <div className="p-8 rounded-xl mb-10 flex flex-col sm:flex-row gap-6 items-start" style={{ background: C.navy50 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/staff/proprietress-osinamofan-oko.jpg"
            alt="Mrs. Osinamofan Oko, Proprietress"
            className="rounded-xl object-cover shrink-0"
            style={{ width: 120, height: 160 }}
          />
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.navy500 }}>
              A Message from the Proprietress
            </div>
            <p className="text-sm italic mb-3" style={{ color: C.slate }}>
              &quot;Every child who walks through our gates is family from that moment on. We don&apos;t just
              teach a curriculum — we walk alongside each learner&apos;s whole journey.&quot;
            </p>
            <div className="text-sm font-bold" style={{ color: C.navy900 }}>— Mrs. Osinamofan Oko, Proprietress</div>
          </div>
        </div>

        <SectionHeading eyebrow="Holistic Education" title="Five Pillars of Growth" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {pillars.map((p) => (
            <div key={p} className="text-center p-4 rounded-lg" style={{ background: C.fog }}>
              <div className="text-sm font-bold" style={{ color: C.navy900 }}>{p}</div>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Our Promise" title="The 7 Golden Rules" />
        <div className="space-y-3">
          {rules.map((r, i) => (
            <button
              key={r}
              onClick={() => setOpenRule(openRule === i ? -1 : i)}
              className="w-full text-left p-4 rounded-lg flex items-center justify-between"
              style={{ background: openRule === i ? C.navy900 : C.white, border: `1px solid ${C.line}` }}
            >
              <span className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: C.gold500, color: C.white }}>
                  {i + 1}
                </span>
                <span className="text-sm font-medium" style={{ color: openRule === i ? C.white : C.ink }}>{r}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="A Look Around" title="School Gallery" sub="Moments from classrooms, labs, and campus life." />
          <GalleryCarousel photos={ABOUT_GALLERY} />
        </div>
      </section>
    </div>
  );
}
