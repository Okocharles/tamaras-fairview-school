"use client";

import { 
  Plus, 
  Settings2, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  MoreVertical,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatNaira } from "@/lib/paystack";

const schedules = [
  { id: "1", name: "Standard Tuition - JSS", division: "High School", total: 125000, items: 4, status: "Active" },
  { id: "2", name: "Standard Tuition - Primary", division: "Primary", total: 85000, items: 3, status: "Active" },
  { id: "3", name: "Standard Tuition - Nursery", division: "Nursery", total: 65000, items: 3, status: "Active" },
  { id: "4", name: "Discovery Track Fee", division: "Discovery", total: 45000, items: 2, status: "Active" },
];

export default function FeeSchedulesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Fee Schedules</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Manage standard fee templates for each academic level.</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-accent/20">
          <Plus className="h-4 w-4" />
          Create New Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schedules.map((s) => (
          <Card key={s.id} className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-all">
            <CardHeader className="bg-slate-50/50 p-8 border-b border-slate-100 relative">
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                     <Layers className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="rounded-lg text-[9px] font-black uppercase tracking-widest text-accent border-accent/20">
                    {s.division}
                  </Badge>
               </div>
               <CardTitle className="text-xl font-black text-primary uppercase tracking-tight">{s.name}</CardTitle>
               <Button variant="ghost" size="icon" className="absolute top-8 right-8 text-slate-400">
                  <MoreVertical className="h-4 w-4" />
               </Button>
            </CardHeader>
            <CardContent className="p-8">
               <div className="mb-6">
                  <div className="text-3xl font-black text-primary">{formatNaira(s.total)}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Per Term Total</div>
               </div>

               <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-bold">Line Items</span>
                    <span className="text-primary font-black">{s.items}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-bold">Mandatory</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
               </div>

               <div className="flex gap-2">
                 <Button variant="outline" className="flex-1 rounded-xl h-11 font-bold text-slate-600 border-slate-200">View Items</Button>
                 <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-11">Assign to Class</Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
               Automated Invoicing Active
            </div>
            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
               <div className="h-1.5 w-1.5 rounded-full bg-accent" />
               Paystack Link Enabled
            </div>
         </div>
         <Button variant="ghost" className="rounded-xl font-bold text-accent uppercase tracking-widest text-xs gap-2">
            <Settings2 className="h-4 w-4" />
            Global Settings
         </Button>
      </div>
    </div>
  );
}
