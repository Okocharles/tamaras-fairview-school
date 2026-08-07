"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { C } from "@/lib/colors";
import { PageHero, SectionHeading, GoldButton } from "@/components/UI";
import { EXPECTATIONS } from "@/lib/data";
import { useApply } from "@/components/ApplyProvider";

export default function AdmissionsPage() {
  const { openApply } = useApply();
  const [openSection, setOpenSection] = useState(0);

  const steps = [
    { t: "Student Details", d: "Name, date of birth, and background information" },
    { t: "Section & Grade", d: "Choose the section and grade — age-checked automatically" },
    { t: "Parent / Guardian", d: "Contact details for at least one parent or guardian" },
    { t: "Document Upload", d: "Birth certificate, passport photo, and prior school report" },
    { t: "Review & Submit", d: "Confirm everything, then submit for review" },
  ];

  return (
    <div>
      <PageHero eyebrow="Join Our Family" title="Admissions" sub="A simple, guided path from application to enrollment." />

      <section className="max-w-4xl mx-auto px-5 md:px-8 py-16">
        <SectionHeading eyebrow="How It Works" title="Five Steps to Enrollment" />
        <div className="space-y-4 mb-16">
          {steps.map((st, i) => (
            <div key={st.t} className="flex gap-4 items-start p-5 rounded-lg" style={{ background: C.fog }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: C.navy900, color: C.gold300 }}>
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: C.navy900 }}>{st.t}</div>
                <div className="text-sm" style={{ color: C.mute }}>{st.d}</div>
              </div>
            </div>
          ))}
        </div>

        <SectionHeading
          eyebrow="What We Expect"
          title="Academic, Behavioral & Psychomotor Expectations"
          sub="Required benchmarks for pupils and students of each class / section."
        />
        <div className="space-y-3 mb-16">
          {EXPECTATIONS.map((ex, i) => (
            <div key={ex.section} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <button
                onClick={() => setOpenSection(openSection === i ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                style={{ background: openSection === i ? C.navy900 : C.white }}
              >
                <span className="font-bold text-sm" style={{ color: openSection === i ? C.white : C.navy900 }}>{ex.section}</span>
                <ChevronDown size={18} style={{ color: openSection === i ? C.white : C.mute, transform: openSection === i ? "rotate(180deg)" : "none" }} />
              </button>
              {openSection === i && (
                <div className="grid md:grid-cols-3 gap-5 px-5 py-5" style={{ background: C.fog }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold600 }}>Academic</div>
                    <ul className="space-y-1.5">
                      {ex.academic.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs" style={{ color: C.ink }}>
                          <Check size={12} style={{ color: C.navy500 }} className="mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold600 }}>Behavioral</div>
                    <ul className="space-y-1.5">
                      {ex.behavioral.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs" style={{ color: C.ink }}>
                          <Check size={12} style={{ color: C.navy500 }} className="mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: C.gold600 }}>Psychomotor</div>
                    <ul className="space-y-1.5">
                      {ex.psychomotor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs" style={{ color: C.ink }}>
                          <Check size={12} style={{ color: C.navy500 }} className="mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-8 rounded-xl text-center" style={{ background: C.navy900 }}>
          <div className="text-lg font-bold mb-4" style={{ color: C.white, fontFamily: "Playfair Display, serif" }}>
            Applications for 2026/2027 are open
          </div>
          <GoldButton onClick={() => openApply()}>Begin Application</GoldButton>
        </div>
      </section>
    </div>
  );
}
