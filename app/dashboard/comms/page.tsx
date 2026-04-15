"use client";

import { useState } from "react";
import { 
  Send, 
  Users, 
  Smartphone, 
  Mail, 
  Filter, 
  History, 
  ChevronRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const templates = [
  { id: "1", name: "Fee Reminder", type: "SMS", text: "Dear Parent, this is a reminder regarding the outstanding balance for..." },
  { id: "2", name: "School Closure", type: "BOTH", text: "Please be informed that Tamara's Fairview will be closed on..." },
  { id: "3", name: "Mid-Term Results", type: "EMAIL", text: "Hello, the mid-term results for the current sessions are now..." },
  { id: "4", name: "Discovery Club Invite", type: "SMS", text: "Join our new Robotics competition this Saturday at..." },
];

export default function BroadcastPortal() {
  const [selectedType, setSelectedType] = useState<"SMS" | "EMAIL" | "BOTH">("SMS");
  const [isSending, setIsSending] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Broadcast Center</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Mass communication for parents, staff, and students.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-xl font-bold gap-2">
             <History className="h-4 w-4" />
             Past Logs
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Composer Section */}
        <div className="lg:col-span-2 space-y-6">
           <Card className="border-none shadow-2xl shadow-slate-200/60 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-8 bg-slate-50/50 border-b border-slate-100 flex flex-row items-center justify-between">
                 <div>
                    <CardTitle className="text-xl font-black text-primary uppercase">New Broadcast</CardTitle>
                    <CardDescription className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Compose and send mass messages</CardDescription>
                 </div>
                 <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
                    {["SMS", "EMAIL", "BOTH"].map(t => (
                      <button 
                         key={t}
                         onClick={() => setSelectedType(t as any)}
                         className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${selectedType === t ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-primary'}`}
                      >
                         {t}
                      </button>
                    ))}
                 </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                 {/* Recipient Selection */}
                 <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Users className="h-4 w-4 text-accent" />
                       Recipient Groups
                    </label>
                    <div className="flex flex-wrap gap-2">
                       {["All Parents", "All Staff", "High School Staff", "Nursery Parents", "JSS 2A Parents"].map(g => (
                         <Badge key={g} variant="outline" className="rounded-xl px-4 py-2 font-bold cursor-pointer hover:border-accent hover:bg-accent/5 transition-all text-slate-600">
                            {g}
                         </Badge>
                       ))}
                       <Button variant="ghost" size="sm" className="rounded-xl text-primary font-bold">+ Custom Filter</Button>
                    </div>
                 </div>

                 {/* Message Body */}
                 <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Smartphone className="h-4 w-4 text-accent" />
                       Content
                    </label>
                    <textarea 
                       placeholder="Type your message here..."
                       rows={6}
                       className="w-full rounded-[1.5rem] bg-slate-50 border border-slate-200 p-6 text-slate-700 font-medium focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all resize-none shadow-inner"
                    />
                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-400 tracking-widest px-2">
                       <span>Character Count: 120 / 160 (1 Page)</span>
                       <span className="text-accent underline cursor-pointer flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          AI Smart Check
                       </span>
                    </div>
                 </div>

                 <Button 
                   className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                   disabled={isSending}
                   onClick={() => {
                     setIsSending(true);
                     setTimeout(() => setIsSending(false), 2000);
                   }}
                 >
                    {isSending ? <span className="animate-spin border-4 border-white/20 border-t-white rounded-full h-6 w-6" /> : <Send className="h-6 w-6" />}
                    {isSending ? "Processing Broadcast..." : "Launch Comm Campaign"}
                 </Button>
              </CardContent>
           </Card>
        </div>

        {/* Sidebar Templates / Health */}
        <div className="space-y-8">
           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 overflow-hidden h-fit">
              <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                 <BookOpen className="h-4 w-4 text-accent" />
                 Smart Templates
              </h3>
              <div className="space-y-4">
                 {templates.map(t => (
                   <div key={t.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group cursor-pointer hover:bg-primary hover:border-primary transition-all">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-black text-primary uppercase group-hover:text-white">{t.name}</span>
                         <Badge className="rounded-lg text-[8px] font-black uppercase group-hover:bg-accent group-hover:text-white border-primary/20">{t.type}</Badge>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold group-hover:text-white/60 line-clamp-2 leading-relaxed">
                         {t.text}
                      </p>
                   </div>
                 ))}
                 <Button variant="ghost" className="w-full text-xs font-black text-accent uppercase tracking-widest">Manage Templates <ChevronRight className="h-3 w-3" /></Button>
              </div>
           </Card>

           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 bg-brand-gradient text-white">
              <h3 className="text-lg font-black uppercase tracking-tight mb-4">Comms Credits</h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/70 uppercase">SMS Balance</span>
                    <span className="text-2xl font-black">4,821</span>
                 </div>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{width: '60%'}} />
                 </div>
                 <p className="text-[10px] font-bold text-white/50 leading-relaxed">
                   Estimated delivery success rate for Nigeria: <span className="text-accent font-black">98.2% (Termii Gateway)</span>
                 </p>
                 <Button className="w-full bg-white text-primary hover:bg-slate-100 font-black rounded-xl h-11">
                    Recharge Units
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
