"use client";

import { useState, useMemo } from "react";
import { 
  Calculator, 
  Save, 
  ChevronLeft, 
  History, 
  CheckCircle2,
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  calculateTotalScore, 
  getNERDCGrade, 
  getGradeColor 
} from "@/lib/grading";

// Mock student data for a specific class (e.g. JSS 2A - Mathematics)
const initialStudents = [
  { id: "1", name: "Oladimeji Ibrahim", ca1: 8, ca2: 7, ca3: 9, exam: 58 },
  { id: "2", name: "Chisom Okeke", ca1: 6, ca2: 8, ca3: 7, exam: 52 },
  { id: "3", name: "Samuel Chukwuma", ca1: 9, ca2: 9, ca3: 10, exam: 62 },
  { id: "4", name: "Folake Adeyemi", ca1: 5, ca2: 4, ca3: 6, exam: 31 },
  { id: "5", name: "Amina Yusuf", ca1: 7, ca2: 7, ca3: 8, exam: 48 },
];

export default function ResultsEntryPage() {
  const [data, setData] = useState(initialStudents);
  const [isSaving, setIsSaving] = useState(false);

  const handleScoreChange = (id: string, field: string, value: string) => {
    const numValue = value === "" ? 0 : parseFloat(value);
    
    // Validation caps
    let max = 10;
    if (field === "exam") max = 70;

    const validatedValue = Math.min(Math.max(0, numValue), max);

    setData(prev => prev.map(s => 
      s.id === id ? { ...s, [field]: validatedValue } : s
    ));
  };

  const totals = useMemo(() => {
    return data.map(s => {
      const total = calculateTotalScore({ ca1: s.ca1, ca2: s.ca2, ca3: s.ca3, exam: s.exam });
      const gradeInfo = getNERDCGrade(total);
      return { ...s, total, ...gradeInfo };
    });
  }, [data]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <Button variant="ghost" size="icon" className="rounded-xl border border-slate-100">
             <ChevronLeft className="h-5 w-5" />
           </Button>
           <div>
             <h1 className="text-3xl font-black text-primary uppercase">Results Entry</h1>
             <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
               <span>Mathematics</span>
               <span className="h-1 w-1 rounded-full bg-slate-300" />
               <span>JSS 2A</span>
               <span className="h-1 w-1 rounded-full bg-slate-300" />
               <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">Term 3</Badge>
             </div>
           </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl font-bold gap-2">
            <History className="h-4 w-4" />
            History
          </Button>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl gap-2 shadow-lg shadow-emerald-200"
            onClick={() => {
              setIsSaving(true);
              setTimeout(() => setIsSaving(false), 1500);
            }}
          >
            {isSaving ? <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-4 w-4" /> : <Save className="h-4 w-4" />}
            {isSaving ? "Saving..." : "Publish Results"}
          </Button>
        </div>
      </div>

      {/* Entry Table */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="p-8 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl">
                 <Calculator className="h-5 w-5 text-white" />
              </div>
              <div>
                 <h3 className="text-lg font-black text-primary uppercase leading-tight">Batch Score Input</h3>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Grading model: NERDC Standard (10, 10, 10, 70)</p>
              </div>
           </div>
           <div className="text-right">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Last Saved</div>
              <div className="text-sm font-black text-emerald-600">2 minutes ago</div>
           </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-slate-100">
              <TableHead className="py-6 pl-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]">Student Name</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">CA 1 (10)</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">CA 2 (10)</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">CA 3 (10)</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">Exam (70)</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">Total (100)</TableHead>
              <TableHead className="py-6 text-center font-black text-primary uppercase tracking-[0.2em] text-[10px]">Grade</TableHead>
              <TableHead className="py-6 pr-8 text-right font-black text-primary uppercase tracking-[0.2em] text-[10px]">Remark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {totals.map((student) => (
              <TableRow key={student.id} className="border-slate-100 hover:bg-slate-50/30 transition-colors">
                <TableCell className="py-6 pl-8">
                  <span className="font-black text-slate-700">{student.name}</span>
                </TableCell>
                
                {/* Score Inputs */}
                {["ca1", "ca2", "ca3", "exam"].map((field) => (
                  <TableCell key={field} className="py-6 text-center">
                    <input 
                      type="number"
                      value={student[field as keyof typeof student]}
                      onChange={(e) => handleScoreChange(student.id, field, e.target.value)}
                      className="w-16 h-10 text-center font-black bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all selection:bg-accent/20"
                    />
                  </TableCell>
                ))}

                <TableCell className="py-6 text-center">
                  <span className="text-xl font-black text-primary">{student.total}</span>
                </TableCell>

                <TableCell className="py-6 text-center">
                  <Badge className={`rounded-lg px-3 py-1 font-black text-sm uppercase shadow-sm border ${getGradeColor(student.grade)}`}>
                    {student.grade}
                  </Badge>
                </TableCell>

                <TableCell className="py-6 pr-8 text-right underline decoration-accent/30 decoration-2 underline-offset-4">
                  <span className="text-sm font-black text-slate-600">{student.remark}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Auto-calculation enabled
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  Grade validation active
               </div>
            </div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
               Tamara's Fairview Academic Engine v1.0
            </p>
        </div>
      </div>
    </div>
  );
}
