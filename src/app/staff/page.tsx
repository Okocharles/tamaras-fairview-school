import type { Metadata } from "next";
import { C } from "@/lib/colors";
import { PageHero } from "@/components/UI";
import { STAFF } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Staff — Tamara's Fairview",
  description: "Meet the team behind every classroom at Tamara's Fairview.",
};

export default function StaffPage() {
  return (
    <div>
      <PageHero
        eyebrow="Meet Our Team"
        title="Our Staff"
        sub="The people behind every classroom, every lesson, and every child's day at Tamara's Fairview."
      />
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAFF.map((person) => (
            <div key={person.name} className="rounded-xl overflow-hidden flex flex-col" style={{ border: `1px solid ${C.line}` }}>
              <div className="aspect-[4/5] w-full" style={{ background: C.fog }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-sm mb-0.5" style={{ color: C.navy900, fontFamily: "Playfair Display, serif" }}>{person.name}</div>
                <div className="text-xs font-semibold mb-3" style={{ color: C.gold600 }}>{person.role}</div>
                <p className="text-xs leading-relaxed italic" style={{ color: C.mute }}>{person.narration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
