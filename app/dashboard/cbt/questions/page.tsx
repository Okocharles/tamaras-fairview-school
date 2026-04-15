"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  FileQuestion, 
  MoreVertical, 
  Tags,
  CheckCircle2,
  AlertCircle
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

const questions = [
  { id: "1", text: "What is the capital of Nigeria?", subject: "Social Studies", level: "Primary 5", type: "Multiple Choice", options: 4 },
  { id: "2", text: "Solve for x: 2x + 5 = 15", subject: "Mathematics", level: "JSS 2", type: "Multiple Choice", options: 4 },
  { id: "3", text: "Identify the digestive organ in the diagram.", subject: "Biology", level: "SSS 1", type: "Multiple Choice (Image)", options: 4 },
  { id: "4", text: "Which protocol is used for secure web browsing?", subject: "Tech / Discovery", level: "All Levels", type: "Multiple Choice", options: 4 },
];

export default function QuestionBankPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Question Bank</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Create and manage your central repository of exam questions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 font-bold gap-2">
            Import Excel
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-primary/20">
            <Plus className="h-4 w-4" />
            Add New Question
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono">
            450+
          </div>
          <div>
            <div className="text-xl font-black text-primary">Total Questions</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Across all subjects</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black text-primary">Verified</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quality approved</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-black text-primary">Drafts</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pending review</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
           <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter by keyword or subject..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-slate-100">
              <TableHead className="py-4 pl-8 font-black text-primary uppercase text-[10px] tracking-widest">Question Preview</TableHead>
              <TableHead className="py-4 font-black text-primary uppercase text-[10px] tracking-widest">Subject</TableHead>
              <TableHead className="py-4 font-black text-primary uppercase text-[10px] tracking-widest">Level</TableHead>
              <TableHead className="py-4 font-black text-primary uppercase text-[10px] tracking-widest">Type</TableHead>
              <TableHead className="py-4 text-right pr-8 font-black text-primary uppercase text-[10px] tracking-widest">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((q) => (
              <TableRow key={q.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="py-6 pl-8">
                   <div className="flex items-start gap-4 max-w-md">
                      <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 mt-1">
                         <FileQuestion className="h-4 w-4" />
                      </div>
                      <p className="font-bold text-slate-700 leading-tight">{q.text}</p>
                   </div>
                </TableCell>
                <TableCell className="py-6">
                   <Badge variant="outline" className="rounded-lg text-accent border-accent/20 font-black uppercase text-[9px]">
                      {q.subject}
                   </Badge>
                </TableCell>
                <TableCell className="py-6 text-slate-500 font-semibold text-sm">{q.level}</TableCell>
                <TableCell className="py-6 text-slate-500 text-xs font-bold uppercase tracking-tight">{q.type}</TableCell>
                <TableCell className="py-6 text-right pr-8">
                  <Button variant="ghost" size="icon" className="rounded-lg text-slate-400">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
