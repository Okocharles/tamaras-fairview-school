"use client";

import { 
  FileText, 
  Upload, 
  Download, 
  Search, 
  Filter, 
  FileCode, 
  FileSpreadsheet,
  Trash2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const resources = [
  { id: "1", title: "Algebra Week 4 Notes", type: "PDF", subject: "Mathematics", size: "2.4 MB", date: "2 days ago", author: "Mr. Thompson" },
  { id: "2", title: "Photosynthesis Presentation", type: "PPTX", subject: "Basic Science", size: "12.1 MB", date: "Yesterday", author: "Mrs. Sarah" },
  { id: "3", title: "Python Basics - Chapter 1", type: "PDF", subject: "Discovery / Tech", size: "1.2 MB", date: "3 hours ago", author: "Dr. Adebayo" },
  { id: "4", title: "SSCE Past Questions 2023", type: "DOCX", subject: "Literature", size: "5.6 MB", date: "1 week ago", author: "Mr. Okafor" },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Lesson Notes & Resources</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Academic material repository for students and teachers.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 shadow-lg">
          <Upload className="h-4 w-4" />
          Upload Lesson Note
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
           <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search by title, subject or teacher..." 
               className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-[1.5rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
             />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((res) => (
                <Card key={res.id} className="border-none shadow-lg shadow-slate-200/50 rounded-3xl group hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                       <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                             {res.type === 'PDF' && <FileText className="h-6 w-6" />}
                             {res.type === 'PPTX' && <FileCode className="h-6 w-6" />}
                             {(res.type !== 'PDF' && res.type !== 'PPTX') && <FileSpreadsheet className="h-6 w-6" />}
                          </div>
                          <div>
                            <h4 className="font-black text-primary group-hover:text-accent transition-colors">{res.title}</h4>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                               <span>{res.subject}</span>
                               <span className="h-1 w-1 rounded-full bg-slate-300" />
                               <span>{res.type}</span>
                            </div>
                          </div>
                       </div>
                       <Button variant="ghost" size="icon" className="rounded-full text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Trash2 className="h-4 w-4" />
                       </Button>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                       <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                             <Clock className="h-3.5 w-3.5" />
                             {res.date}
                          </div>
                          <span className="text-[10px] font-black bg-slate-100 px-2 py-0.5 rounded-md text-slate-400 uppercase">{res.size}</span>
                       </div>
                       <Button size="sm" variant="outline" className="rounded-lg font-bold gap-2 text-primary border-primary/20 hover:bg-primary/5">
                          <Download className="h-3.5 w-3.5" />
                          Download
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>

        {/* Filters Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-6">
              <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Filter className="h-4 w-4 text-accent" />
                 Filter Content
              </h3>
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Division</label>
                    <div className="flex flex-wrap gap-2">
                       {['All', 'Primary', 'High School', 'Discovery'].map(d => (
                         <Badge key={d} variant={d === 'All' ? 'default' : 'outline'} className="rounded-lg px-3 py-1 font-bold cursor-pointer">
                           {d}
                         </Badge>
                       ))}
                    </div>
                 </div>
                 <div className="h-px bg-slate-100" />
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Format</label>
                    <div className="flex flex-wrap gap-2">
                       {['PDF', 'Docx', 'Image', 'Slides'].map(f => (
                         <Badge key={f} variant="outline" className="rounded-lg px-3 py-1 font-bold cursor-pointer">
                           {f}
                         </Badge>
                       ))}
                    </div>
                 </div>
              </div>
           </Card>

           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 bg-accent text-white group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-2">Resource Space</h3>
                <p className="text-xs font-bold text-white/80 leading-relaxed mb-6">
                   You have used 1.2 GB of your 5 GB teacher storage quota.
                </p>
                <Button className="w-full bg-white text-accent hover:bg-slate-100 font-bold rounded-xl">
                   Upgrade Quota
                </Button>
              </div>
              <div className="absolute -bottom-4 -right-4 text-white/10 group-hover:scale-125 transition-transform">
                 <FileText className="h-32 w-32" />
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
