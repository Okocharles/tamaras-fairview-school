"use client";

import { useState } from "react";
import { 
  UserPlus, 
  ShieldCheck, 
  ChevronRight,
  UserCheck,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { generateStaffId, generateTempPassword } from "@/lib/id-generator";

export default function StaffRegistration() {
  const [formData, setFormData] = useState({ name: "", role: "Teacher", dept: "STA" });
  const [result, setResult] = useState<{ id: string; pass: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateStaffId(formData.dept);
    const pass = generateTempPassword(formData.name);
    setResult({ id, pass });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Staff Onboarding</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Add new academic and non-academic staff members to the SMS.</p>
        </div>

        {!result ? (
          <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-10 bg-slate-50 border-b border-slate-100 flex flex-row items-center gap-4">
               <div className="p-3 bg-accent rounded-2xl text-white">
                  <Briefcase className="h-6 w-6" />
               </div>
               <div>
                  <CardTitle className="text-xl font-black text-primary uppercase">Staff Profile Entry</CardTitle>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Personnel Information</p>
               </div>
            </CardHeader>
            <CardContent className="p-10">
               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                     <input 
                        required
                        type="text" 
                        placeholder="Dr. Tamara Moses"
                        className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent font-semibold transition-all"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Job Role</label>
                     <select className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 font-semibold">
                        <option>Class Teacher</option>
                        <option>Bursar</option>
                        <option>Administrator</option>
                        <option>Registry</option>
                     </select>
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Dept Code</label>
                     <input 
                        type="text" 
                        placeholder="e.g. MAT"
                        maxLength={3}
                        className="w-full h-14 pl-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent font-semibold transition-all uppercase"
                        onChange={(e) => setFormData({...formData, dept: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Permissions</label>
                     <div className="flex bg-slate-50 rounded-2xl p-4 gap-2 border border-slate-100">
                        <Badge variant="outline" className="bg-white">Academics</Badge>
                        <Badge variant="outline" className="bg-white">Attendance</Badge>
                     </div>
                  </div>
                  
                  <div className="md:col-span-2 pt-4">
                     <Button type="submit" className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/95 text-white font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                        Assign Staff ID & Finalize
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </div>
               </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-in fly-in duration-500">
             <Card className="border-none shadow-2xl shadow-blue-200/50 rounded-[2.5rem] bg-primary text-white p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-6">
                   <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/20">
                      <UserCheck className="h-10 w-10 text-accent" />
                   </div>
                   <h2 className="text-4xl font-black uppercase">Staff Member Onboarded</h2>
                   <p className="font-bold text-slate-300 leading-relaxed max-w-md mx-auto">
                      Staff account is now active. The unique **Personnel ID** acts as their username for portal access.
                   </p>
                </div>
             </Card>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-10 text-center bg-white border-2 border-slate-50">
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Staff Portal Username</div>
                   <div className="text-4xl font-black text-primary font-mono">{result.id}</div>
                </Card>
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-10 text-center bg-white border-2 border-slate-50">
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Security Passcode</div>
                   <div className="text-4xl font-black text-accent font-mono">{result.pass}</div>
                </Card>
             </div>

             <Button variant="ghost" className="w-full text-slate-400 font-black uppercase tracking-widest text-xs" onClick={() => setResult(null)}>
                ← Back to Registry
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Internal Mini-Badge component for this page
function Badge({ children, className, variant }: any) {
  return (
    <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase border ${className}`}>
      {children}
    </span>
  );
}
