"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { C } from "@/lib/colors";
import { SECTIONS } from "@/lib/data";

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: C.white }}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const pathname = usePathname();

  const logoFor = (slug: string) =>
    slug === "nursery" || slug === "grade-school"
      ? "/images/logos/grade-school-logo.png"
      : "/images/logos/high-school-logo.png";

  return (
    <header className="sticky top-0 z-40" style={{ background: C.navy900, borderBottom: `1px solid ${C.navy700}` }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logos/grade-school-logo.png" alt="Tamara's Fairview crest" style={{ height: 36, width: "auto" }} />
          <div className="text-left leading-tight">
            <div className="text-sm font-bold" style={{ color: C.white, fontFamily: "Playfair Display, serif" }}>
              Tamara&apos;s Fairview
            </div>
            <div className="text-[10px] tracking-wide" style={{ color: C.gold300 }}>
              Nursery, Grade &amp; High School
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <NavLink label="Home" href="/" />
          <NavLink label="About" href="/about" />
          <NavLink label="Our Staff" href="/staff" />
          <div className="relative" onMouseEnter={() => setSectionsOpen(true)} onMouseLeave={() => setSectionsOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium" style={{ color: C.white }}>
              Sections <ChevronDown size={14} />
            </button>
            {sectionsOpen && (
              <div
                className="absolute top-7 left-1/2 -translate-x-1/2 w-56 rounded-lg overflow-hidden shadow-xl"
                style={{ background: C.white, border: `1px solid ${C.line}` }}
              >
                {SECTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/sections/${s.slug}`}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:opacity-80"
                    style={{ color: C.ink, background: pathname === `/sections/${s.slug}` ? C.navy50 : C.white }}
                  >
                    {s.slug === "discovery" ? null : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logoFor(s.slug)} alt="" style={{ height: 16, width: "auto" }} />
                    )}
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink label="Admissions" href="/admissions" />
          <NavLink label="Contact" href="/contact" />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/admissions" className="px-5 py-2.5 rounded-md text-sm font-semibold" style={{ background: C.gold500, color: C.white }}>
            Apply Now
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: C.white }} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ background: C.navy900 }}>
          <NavLink label="Home" href="/" onClick={() => setOpen(false)} />
          <NavLink label="About" href="/about" onClick={() => setOpen(false)} />
          <NavLink label="Our Staff" href="/staff" onClick={() => setOpen(false)} />
          <div className="text-xs font-bold uppercase tracking-wider pt-2" style={{ color: C.gold300 }}>
            Sections
          </div>
          {SECTIONS.map((s) => (
            <Link key={s.slug} href={`/sections/${s.slug}`} onClick={() => setOpen(false)} className="text-sm text-left pl-2" style={{ color: C.white }}>
              {s.name}
            </Link>
          ))}
          <NavLink label="Admissions" href="/admissions" onClick={() => setOpen(false)} />
          <NavLink label="Contact" href="/contact" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
