"use client";

import { 
  BookOpen, 
  Search, 
  Settings2, 
  Map, 
  Library,
  GraduationCap
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
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const subjects = [
  { id: "1", name: "Mathematics", code: "MAT 101", division: "High School", classes: ["JSS 1", "JSS 2", "JSS 3"], category: "Core" },
  { id: "2", name: "English Language", code: "ENG 101", division: "Nursery/Primary", classes: ["Primary 1-6"], category: "Core" },
  { id: "3", name: "Basic Science", code: "SCI 201", division: "High School", classes: ["JSS 1-3"], category: "Science" },
  { id: "4", name: "Coding & Robotics", code: "TECH 501", division: "Discovery", classes: ["All Levels"], category: "Discovery" },
  { id: "5", name: "Civic Education", code: "CIV 101", division: "High School", classes: ["JSS 1-3", "SSS 1-3"], category: "Social" },
];

export default function AcademicsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase tracking-tight">Academics & Curriculum</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Define subjects, curriculum paths, and student placement.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 font-bold gap-2">
            <Library className="h-4 w-4" />
            Subject Bank
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-accent/20">
            <BookOpen className="h-4 w-4" />
            New Subject
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Statistics / Quick Stats */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-brand-gradient text-white">
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-lg uppercase tracking-tight">
                <Map className="h-5 w-5 text-accent" />
                Curriculum Overview
             </CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
              <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl">
                 <span className="text-slate-300 font-bold">Total Subjects</span>
                 <span className="text-2xl font-black">42</span>
              </div>
              <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl">
                 <span className="text-slate-300 font-bold">Core Modules</span>
                 <span className="text-2xl font-black text-accent">18</span>
              </div>
              <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl">
                 <span className="text-slate-300 font-bold">Discovery Skills</span>
                 <span className="text-2xl font-black">12</span>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-slate-100 font-bold rounded-xl">
                 View Timetable
              </Button>
           </CardContent>
        </Card>

        {/* Subjects Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="relative w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search subjects..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm font-medium"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-slate-400">
                <Settings2 className="h-5 w-5" />
              </Button>
            </div>

            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="border-slate-100">
                  <TableHead className="font-bold text-primary py-4 pl-8 uppercase tracking-widest text-[10px]">Subject Name</TableHead>
                  <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Code</TableHead>
                  <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Division</TableHead>
                  <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Category</TableHead>
                  <TableHead className="font-bold text-primary py-4 text-right pr-8 uppercase tracking-widest text-[10px]">Level/Classes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjects.map((subject) => (
                  <TableRow key={subject.id} className="border-slate-100 hover:bg-slate-50 transition-all group">
                    <TableCell className="py-4 pl-8">
                       <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                           <BookOpen className="h-4 w-4" />
                         </div>
                         <span className="font-bold text-slate-700">{subject.name}</span>
                       </div>
                    </TableCell>
                    <TableCell className="py-4 text-slate-500 font-mono text-xs">{subject.code}</TableCell>
                    <TableCell className="py-4">
                       <span className="text-xs font-bold text-slate-500">{subject.division}</span>
                    </TableCell>
                    <TableCell className="py-4">
                       <Badge variant="outline" className="rounded-lg font-black uppercase text-[9px] text-accent border-accent/20">
                         {subject.category}
                       </Badge>
                    </TableCell>
                    <TableCell className="py-4 text-right pr-8">
                       <div className="flex flex-wrap justify-end gap-1">
                          {subject.classes.slice(0, 2).map(c => (
                            <span key={c} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-500">{c}</span>
                          ))}
                          {subject.classes.length > 2 && <span className="text-[10px] text-slate-400">+{subject.classes.length - 2} more</span>}
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
