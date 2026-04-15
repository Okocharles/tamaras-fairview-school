"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "News", href: "/news" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass border-b border-border/40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative h-14 w-14 group-hover:scale-110 transition-transform">
                <Image 
                  src="/logo-high.png" 
                  alt="Tamara's Fairview High" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black tracking-tight text-primary leading-none uppercase">
                  Tamara's Fairview
                </span>
                <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mt-1">
                  High School
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex ml-10 space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link href="/login">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-6 rounded-full font-semibold">
                Portal Login
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-primary focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-dark rounded-2xl m-4 p-6 absolute top-20 left-0 right-0 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-4 flex flex-col items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-white/90 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 w-full">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 rounded-xl">
                    Parent Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
