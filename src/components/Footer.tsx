import Link from "next/link";
import { C } from "@/lib/colors";
import { SECTIONS } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: C.navy900, color: C.navy100 }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logos/grade-school-logo.png" alt="Tamara's Fairview crest" style={{ height: 40, width: "auto" }} />
            <span className="font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
              Tamara&apos;s Fairview
            </span>
          </div>
          <p className="text-sm" style={{ color: C.navy100 }}>
            A Whole New World of Learning and Care.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.gold300 }}>
            Sections
          </div>
          <div className="flex flex-col gap-2">
            {SECTIONS.map((s) => (
              <Link key={s.slug} href={`/sections/${s.slug}`} className="text-sm text-left hover:text-white">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.gold300 }}>
            Quick Links
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-left hover:text-white">About Us</Link>
            <Link href="/staff" className="text-sm text-left hover:text-white">Our Staff</Link>
            <Link href="/admissions" className="text-sm text-left hover:text-white">Admissions</Link>
            <Link href="/blog" className="text-sm text-left hover:text-white">Blog</Link>
            <Link href="/contact" className="text-sm text-left hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: C.gold300 }}>
            Reach Us
          </div>
          <div className="flex items-start gap-2 text-sm mb-2">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            13 Liberty Boulevard Road, Jos South LGA, Plateau State
          </div>
          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone size={15} className="shrink-0" /> 07038532976
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={15} className="shrink-0" /> tamarasfaviewschooljos@gmail.com
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-5" style={{ borderTop: `1px solid ${C.navy700}`, color: C.navy300 }}>
        © {new Date().getFullYear()} Tamara&apos;s Fairview Nursery, Grade and High School. All rights reserved.
      </div>
    </footer>
  );
}
