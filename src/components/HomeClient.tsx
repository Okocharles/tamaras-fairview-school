"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Award, Check, Users, Heart, Sparkles, ChevronRight } from "lucide-react";
import { C } from "@/lib/colors";
import { SECTIONS, logoForSection, HOME_HERO_PHOTO } from "@/lib/data";
import { Eyebrow, SectionHeading, GoldButton, GhostButton } from "./UI";

export default function HomeClient() {
  const stats = [
    { n: "12+", l: "Years of Excellence" },
    { n: "900+", l: "Students Enrolled" },
    { n: "60+", l: "Qualified Staff" },
    { n: "96%", l: "Graduate Success Rate" },
  ];
  const values = [
    { icon: Shield, t: "Integrity", d: "Transparent grading, honest communication." },
    { icon: Award, t: "Excellence", d: "High standards in every classroom." },
    { icon: Check, t: "Discipline", d: "Structured routines that build character." },
    { icon: Heart, t: "Respect", d: "An inclusive space for every learner." },
    { icon: Users, t: "Responsibility", d: "Ownership, from staff to students." },
    { icon: Sparkles, t: "Compassion", d: "Care that meets every family with warmth." },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <Image src={HOME_HERO_PHOTO} alt="" fill priority sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(10,22,40,0.88) 0%, rgba(16,40,80,0.75) 100%)" }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32 relative z-10">
          <Eyebrow>Jos South LGA, Plateau State</Eyebrow>
          <h1 className="text-4xl md:text-6xl max-w-3xl leading-tight mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: C.white }}>
            A Whole New World of Learning and Care
          </h1>
          <p className="max-w-xl text-base md:text-lg mb-10" style={{ color: C.navy100 }}>
            From Discovery through Senior Secondary, Tamara&apos;s Fairview builds confident, disciplined, faith-rooted learners — one stage at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions"><GoldButton>Apply Now</GoldButton></Link>
            <Link href="/about"><GhostButton>Explore the School</GhostButton></Link>
          </div>
        </div>
      </section>

      <section style={{ background: C.gold500 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-extrabold" style={{ color: C.white, fontFamily: "Playfair Display, serif" }}>{s.n}</div>
              <div className="text-xs font-medium uppercase tracking-wide" style={{ color: C.gold100 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <SectionHeading
          eyebrow="Who We Are"
          title="Rooted in Faith, Driven by Excellence"
          sub="Tamara's Fairview blends a structured NERDC academic core with faith-based character formation — from a toddler's first day to a graduate's final exam."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl" style={{ background: C.navy50 }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.navy500 }}>Vision</div>
            <p className="text-sm" style={{ color: C.slate }}>
              To raise a generation of disciplined, faith-rooted learners equipped to lead with integrity in every field they enter.
            </p>
          </div>
          <div className="p-8 rounded-xl" style={{ background: C.gold100 }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold600 }}>Mission</div>
            <p className="text-sm" style={{ color: C.slate }}>
              To deliver a NERDC-aligned education across every stage — Discovery through Senior Secondary — in a safe, caring, and high-performing environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: C.fog }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHeading eyebrow="What Guides Us" title="Six Core Values" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.t} className="p-6 rounded-xl bg-white" style={{ border: `1px solid ${C.line}` }}>
                <v.icon size={22} style={{ color: C.gold500 }} className="mb-3" />
                <div className="font-bold text-sm mb-1" style={{ color: C.navy900 }}>{v.t}</div>
                <div className="text-xs" style={{ color: C.mute }}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20">
        <SectionHeading eyebrow="Every Stage, One School" title="Explore Our Sections" sub="Each stage of a child's journey has its own home page, hero, and identity." />
        <div className="grid md:grid-cols-5 gap-4">
          {SECTIONS.map((s) => {
            const logo = logoForSection(s.slug);
            return (
              <Link
                key={s.slug}
                href={`/sections/${s.slug}`}
                className="text-left p-5 rounded-xl transition-transform hover:-translate-y-1 block"
                style={{ background: C.white, border: `1px solid ${C.line}` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={`${s.name} crest`} style={{ height: 40, width: "auto" }} />
                <div className="font-bold text-sm mt-3 mb-1" style={{ color: C.navy900, fontFamily: "Playfair Display, serif" }}>{s.name}</div>
                <div className="text-xs mb-3" style={{ color: C.mute }}>{s.ageGroup}</div>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: C.gold600 }}>
                  Explore <ChevronRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ background: C.navy900 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold300 }}>Admissions Open</div>
            <h3 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif", color: C.white }}>
              Applications for 2026/2027 are now open
            </h3>
          </div>
          <Link href="/admissions"><GoldButton>Start Your Application</GoldButton></Link>
        </div>
      </section>
    </>
  );
}
