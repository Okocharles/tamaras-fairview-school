"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, Microscope, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    title: "Nursery & Primary",
    description: "Laying a solid foundation with the NERDC Lower Basic curriculum. We focus on social, emotional, and cognitive growth.",
    image: "/divisions/nursery.png",
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-blue-500",
    levels: "Creche, Nursery 1-2, Primary 1-6"
  },
  {
    title: "High School",
    description: "Academic excellence meeting character development. Preparing students for SSCE and global university admissions.",
    image: "/divisions/high-school.png",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "bg-primary",
    levels: "JSS 1-3, SSS 1-3"
  },
  {
    title: "Discovery Section",
    description: "Specialized enrichment programs in Robotics, Coding, Public Speaking, and Sports Science to discover hidden talents.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", // Quality placeholder
    icon: <Rocket className="h-6 w-6" />,
    color: "bg-accent",
    levels: "Co-curricular / Skills Prep"
  }
];

export function Divisions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Our Divisions</h2>
          <p className="text-4xl md:text-5xl font-heading font-black text-primary mb-6">
            Educational Paths Tailored for <span className="text-brand-gradient">Success</span>
          </p>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground">
            From the first steps of learning to specialized high school preparation, Tamara's Fairview provides a seamless journey of discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div 
              key={division.title}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                <div className="absolute top-6 left-6 p-4 rounded-xl glass-dark group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {division.icon}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    {division.levels}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">
                  {division.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {division.description}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-bold text-primary group-hover:translate-x-2 transition-transform uppercase tracking-wider text-xs flex items-center gap-2">
                  Explore curriculum
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
