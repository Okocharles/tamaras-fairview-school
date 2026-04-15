"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm">
              <Star className="h-4 w-4 fill-current" />
              <span>Celebrating 20 Years of Academic Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-primary leading-[1.1]">
              Raising Excellence, <br />
              <span className="text-brand-gradient">Shaping Futures.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tamara's Fairview provides a nurturing and challenging environment where every child discovers their unique potential. From Nursery to High School, we prepare global leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-lg font-bold shadow-xl hover:translate-y-[-2px] transition-all group">
                Enroll Your Child Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-2 text-lg font-bold hover:bg-muted/50 transition-all">
                Virtual Tour
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8">
              {[
                "NERDC Curriculum",
                "CBT Testing Center",
                "Discovery Club",
                "Expert Faculty"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Image
                src="/school_hero_main.png"
                alt="Tamara's Fairview Campus"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce-slow">
              <div className="text-3xl font-black text-primary">1,200+</div>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider">Happy Students</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-border hidden md:block">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                   <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm font-bold text-primary italic">"Best school in the region"</div>
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground mt-1">— PTA Association</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
