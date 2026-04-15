"use client";

import { useState } from "react";
import { 
  UserPlus, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  UserCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { generateStudentId, generateTempPassword } from "@/lib/id-generator";

export default function StudentRegistration() {
  const [formData, setFormData] = useState({ name: "", email: "", division: "High School" });
  const [result, setResult] = useState<{ id: string; pass: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateStudentId();
    const pass = generateTempPassword(formData.name);
    setResult({ id, pass });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Student Admission</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Onboard new students and auto-assign unique portal credentials.</p>
        </div>

        {!result ? (
          <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-10 bg-slate-50 border-b border-slate-100 flex flex-row items-center gap-4">
               <div className="p-3 bg-primary rounded-2xl text-white">
                  <UserPlus className="h-6 w-6" />
               </div>
               <div>
                  <CardTitle className="text-xl font-black text-primary uppercase">Bio-Data Entry</CardTitle>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Official Enrollment Form</p>
               </div>
            </CardHeader>
            <CardContent className="p-10">
               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                     <input 
                        required
                        type="text" 
                        placeholder="John Doe Tamara"
                        className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent font-semibold transition-all"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Parent Email</label>
                     <input 
                        required
                        type="email" 
                        placeholder="parent@example.com"
                        className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent font-semibold transition-all"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">School Division</label>
                     <select className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 font-semibold">
                        <option>Nursery / Primary</option>
                        <option>High School</option>
                        <option>Discovery (After School)</option>
                     </select>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Start Term</label>
                     <select className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 font-semibold">
                        <option>Term 1 (Sept 2024)</option>
                        <option>Term 2 (Jan 2025)</option>
                        <option>Term 3 (Apr 2025)</option>
                     </select>
                  </div>
                  
                  <div className="md:col-span-2 pt-4">
                     <Button type="submit" className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/95 text-white font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                        Generate Credentials & Register
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </div>
               </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
             <Card className="border-none shadow-2xl shadow-emerald-200/50 rounded-[2.5rem] bg-emerald-600 text-white p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-6">
                   <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
                      <UserCheck className="h-10 w-10" />
                   </div>
                   <h2 className="text-4xl font-black uppercase">Admission Successful!</h2>
                   <p className="font-bold text-emerald-50 leading-relaxed max-w-md mx-auto">
                      Student profile has been created. Please share the following unique credentials with the parent/guardian.
                   </p>
                </div>
             </Card>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 text-center bg-white group hover:border-accent border border-transparent transition-all">
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Unique Admission No (Username)</div>
                   <div className="text-3xl font-black text-primary font-mono">{result.id}</div>
                </Card>
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 text-center bg-white group hover:border-accent border border-transparent transition-all">
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Temporary Password</div>
                   <div className="text-3xl font-black text-primary font-mono">{result.pass}</div>
                </Card>
             </div>

             <div className="flex justify-center gap-4">
                <Button variant="outline" className="rounded-xl h-12 px-8 font-bold text-slate-500 border-slate-200" onClick={() => setResult(null)}>Register Another</Button>
                <Button className="bg-primary text-white rounded-xl h-12 px-8 font-bold shadow-lg shadow-primary/20">Send via SMS/Email</Button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
