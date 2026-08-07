import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { C } from "@/lib/colors";
import { PageHero } from "@/components/UI";
import { CONTACTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Tamara's Fairview",
  description: "Get in touch with Tamara's Fairview Nursery, Grade and High School.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Get in Touch" title="Contact Us" sub="We'd love to hear from you — visit, call, or send a message." />
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Speak With Us</div>
          <div className="space-y-3 mb-8">
            {CONTACTS.map((c) => (
              <div key={c.phone} className="flex items-center justify-between p-4 rounded-lg" style={{ background: C.fog }}>
                <div>
                  <div className="text-sm font-bold" style={{ color: C.navy900 }}>{c.name}</div>
                  <div className="text-xs" style={{ color: C.mute }}>{c.role}</div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.navy700 }}>
                  <Phone size={14} /> {c.phone}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm mb-2" style={{ color: C.ink }}>
            <MapPin size={16} style={{ color: C.navy500 }} /> 13 Liberty Boulevard Road, Jos South LGA, Plateau State
          </div>
          <div className="flex items-center gap-2 text-sm mb-2" style={{ color: C.ink }}>
            <Mail size={16} style={{ color: C.navy500 }} /> tamarasfaviewschooljos@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
            <Clock size={16} style={{ color: C.navy500 }} /> Mon–Fri, 7:30am – 4:00pm
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: C.gold600 }}>Send a Message</div>
          <div className="space-y-3">
            <input className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Full name" />
            <input className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Email address" />
            <input className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Subject" />
            <textarea rows={4} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Your message" />
            <button className="px-6 py-3 rounded-md text-sm font-semibold" style={{ background: C.gold500, color: C.white }}>
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
