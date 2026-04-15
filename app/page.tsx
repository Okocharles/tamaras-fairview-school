import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Divisions } from "@/components/sections/divisions";
import { Landmark, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Content */}
      <Hero />
      <Divisions />

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Students", value: "1,200+" },
              { label: "Expert Staff", value: "85+" },
              { label: "Years Experience", value: "20+" },
              { label: "Success Rate", value: "98%" }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-black text-accent">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[.2em] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Landmark className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-heading font-black tracking-tight uppercase">Tamara's Fairview</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering the next generation of Nigerian leaders through holistic education and character development.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="/admissions" className="hover:text-white transition-colors">Admissions Process</a></li>
                <li><a href="/academics" className="hover:text-white transition-colors">Academic Calendar</a></li>
                <li><a href="/portal" className="hover:text-white transition-colors">Parent Portal</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> +234 123 456 7890</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> info@tamarasfairview.ng</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Lagos, Nigeria</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">Newsletter</h4>
              <p className="text-sm text-slate-400 mb-4">Subscribe for school updates and news.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-accent"
                />
                <Button className="bg-accent hover:bg-accent/90">Join</Button>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            © 2024 Tamara's Fairview. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
