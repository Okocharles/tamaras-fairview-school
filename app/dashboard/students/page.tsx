"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Download,
  GraduationCap,
  BadgeCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const students = [
  { id: "1", name: "Tamara Fairview", admissionNo: "TF/2024/0001", class: "SSS 3 - Premium", status: "Active", attendance: "100%" },
  { id: "2", name: "Oladimeji Ibrahim", admissionNo: "TF/2022/0422", class: "SSS 3 - Emerald", status: "Active", attendance: "98%" },
  { id: "3", name: "Chisom Okeke", admissionNo: "TF/2023/1102", class: "JSS 2 - Gold", status: "Active", attendance: "92%" },
  { id: "4", name: "Amina Yusuf", admissionNo: "TF/2021/0085", class: "SSS 1 - Ruby", status: "Suspended", attendance: "45%" },
  { id: "5", name: "Folake Adeyemi", admissionNo: "TF/2024/0012", class: "Primary 4 - Blue", status: "Active", attendance: "95%" },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Students</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Manage student enrollment and academic profiles.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 font-bold gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-accent/20">
            <Plus className="h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">1,240</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Enrolled</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">1,185</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Status</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">55</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">On Leave / Suspended</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or admission no..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-xl font-bold gap-2 text-slate-500">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-slate-100">
              <TableHead className="font-bold text-primary py-4 pl-8 uppercase tracking-widest text-[10px]">Student Name</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Admission No.</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Current Class</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Status</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Attendance</TableHead>
              <TableHead className="font-bold text-primary py-4 text-right pr-8 uppercase tracking-widest text-[10px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="py-4 pl-8 font-bold text-slate-700">{student.name}</TableCell>
                <TableCell className="py-4 text-slate-500 font-mono text-xs">{student.admissionNo}</TableCell>
                <TableCell className="py-4 text-slate-500 font-semibold">{student.class}</TableCell>
                <TableCell className="py-4">
                  <Badge variant={student.status === "Active" ? "default" : "destructive"} className="rounded-lg px-2 font-bold uppercase text-[9px]">
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-accent" style={{width: student.attendance}} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{student.attendance}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4 text-right pr-8">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                    <MoreVertical className="h-4 w-4 text-slate-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400">Showing 5 of 1,240 students</p>
           <div className="flex gap-2">
             <Button variant="ghost" disabled className="text-xs font-bold rounded-lg border border-slate-100">Previous</Button>
             <Button variant="ghost" className="text-xs font-bold rounded-lg border border-slate-100">Next</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
