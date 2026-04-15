"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Landmark, 
  Mail, 
  Lock, 
  ChevronRight, 
  Star,
  ShieldCheck,
  UserCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (persona?: string) => {
    setIsLoading(true);
    // Simulate auth transition
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  };

  return (
    <div className="min-h-screen flex bg-slate-50 overflow-hidden">
      {/* Left Column: Visuals & Branding */}
      <div className="hidden lg:flex lg:w-3/5 bg-slate-900 relative p-20 flex-col justify-between items-start text-white overflow-hidden">
         {/* Background Glow */}
         <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/20 rounded-full blur-[120px]" />
         <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/10 rounded-full blur-[120px]" />

         <Link href="/" className="flex items-center gap-4 relative z-10 group">
            <div className="relative h-16 w-16 group-hover:scale-110 transition-transform">
               <Image 
                  src="/logo-grade.png" 
                  alt="Tamara's Fairview" 
                  fill 
                  className="object-contain"
                  priority
               />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-heading font-black tracking-tight uppercase">Tamara's Fairview</span>
               <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mt-1">A Whole New World of Learning</span>
            </div>
         </Link>

         <div className="relative z-10 space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 font-bold text-xs uppercase tracking-widest">
               <ShieldCheck className="h-4 w-4 text-accent" />
               Enterprise Portal v1.0
            </div>
            <h1 className="text-6xl font-black font-heading leading-tight uppercase tracking-tight">
               Empowering <span className="text-accent underline decoration-white/20 underline-offset-8">Leaders</span> of Tomorrow.
            </h1>
            <p className="text-slate-400 font-semibold text-lg leading-relaxed">
               Welcome back to the secure SMS gateway. Manage academics, finances, and communications from a centralized, high-performance portal.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-12">
               {[
                 { label: "Uptime", value: "99.9%" },
                 { label: "Security", value: "SSL Encrypted" }
               ].map(stat => (
                 <div key={stat.label} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-2xl font-black">{stat.value}</div>
                 </div>
               ))}
            </div>
         </div>

         <div className="relative z-10 text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">
            © 2024 Tamara’s Fairview School. Developed by AI Architect.
         </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative overflow-hidden bg-white">
         <div className="absolute top-0 right-0 p-8 lg:p-12">
           <Link href="/help" className="text-xs font-black uppercase text-accent tracking-widest hover:underline">Support Hub</Link>
         </div>

         <div className="w-full max-w-lg space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="space-y-4">
               <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Account Login</h2>
               <p className="text-slate-500 font-semibold">Enter your credentials to access your dashboard.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
               <div className="space-y-6">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                     <div className="relative group">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-accent transition-colors" />
                        <input 
                           type="email" 
                           placeholder="admin@tamaras.sms"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-full h-16 pl-14 pr-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all font-semibold"
                        />
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex justify-between items-center ml-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                        <Link href="/forgot" className="text-[10px] font-black text-accent uppercase tracking-widest">Forgot?</Link>
                     </div>
                     <div className="relative group">
                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-accent transition-colors" />
                        <input 
                           type="password" 
                           placeholder="••••••••"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full h-16 pl-14 pr-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all font-semibold"
                        />
                     </div>
                  </div>
               </div>

               <Button 
                  className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
                  disabled={isLoading}
               >
                  {isLoading ? <span className="animate-spin border-4 border-white/20 border-t-white rounded-full h-6 w-6" /> : "Authorize Access"}
                  {!isLoading && <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
               </Button>
            </form>

            <div className="space-y-6">
               <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-100" />
                  </div>
                  <div className="relative flex justify-center text-xs font-black uppercase tracking-widest">
                    <span className="bg-white px-4 text-slate-400 italic">Quick Demo Personas</span>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-4">
                  {[
                    { persona: "Admin", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
                    { persona: "Teacher", icon: UserCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { persona: "Parent", icon: Star, color: "text-amber-600", bg: "bg-amber-50" }
                  ].map(p => (
                    <button 
                       key={p.persona}
                       onClick={() => handleLogin(p.persona)}
                       className="p-4 rounded-2xl border border-slate-100 hover:border-accent hover:bg-slate-50 transition-all text-center group"
                    >
                       <p.icon className={cn("h-6 w-6 mx-auto mb-2", p.color, "group-hover:scale-110 transition-transform")} />
                       <span className="text-[10px] font-black uppercase text-slate-600 group-hover:text-accent tracking-widest">{p.persona}</span>
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
