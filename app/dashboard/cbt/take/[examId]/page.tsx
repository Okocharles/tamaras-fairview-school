"use client";

import { useEffect, useState } from "react";
import { 
  useCBTStore 
} from "@/store/cbt-store";
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Clock, 
  AlertTriangle,
  Grid,
  Landmark,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Mock Exam Data
const mockQuestions = [
  {
    id: "q1",
    text: "Which of the following is common to both plant and animal cells?",
    options: [
      { id: "a", text: "Cell membrane" },
      { id: "b", text: "Cell wall" },
      { id: "c", text: "Chloroplast" },
      { id: "d", text: "Centriole" }
    ]
  },
  {
    id: "q2",
    text: "The process by which green plants make their food is called?",
    options: [
      { id: "a", text: "Respiration" },
      { id: "b", text: "Transpiration" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Nutrition" }
    ]
  },
  {
    id: "q3",
    text: "How many states are in Nigeria?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "35" },
      { id: "c", text: "36" },
      { id: "d", text: "37" }
    ]
  }
];

export default function TakeExamPage({ params }: { params: { examId: string } }) {
  const cbt = useCBTStore();
  const [showGrid, setShowGrid] = useState(false);

  // Initialize Exam
  useEffect(() => {
    cbt.startExam(params.examId, mockQuestions, 1200); // 20 mins
  }, []);

  // Timer Effect
  useEffect(() => {
    if (cbt.isSubmitted) return;
    const timer = setInterval(() => cbt.tick(), 1000);
    return () => clearInterval(timer);
  }, [cbt.isSubmitted]);

  // Anti-cheat (Mock)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !cbt.isSubmitted) {
        alert("Warning: Leaving the exam tab is recorded as suspicious activity!");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [cbt.isSubmitted]);

  const currentQuestion = cbt.questions[cbt.currentQuestionIndex];
  const progress = ((Object.keys(cbt.answers).length) / (cbt.questions.length || 1)) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (cbt.isSubmitted) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center p-8 z-[100] animate-in zoom-in duration-500">
        <div className="text-center space-y-8 max-w-md">
           <div className="bg-emerald-50 h-24 w-24 rounded-full flex items-center justify-center mx-auto text-emerald-500 border-4 border-emerald-100 shadow-xl animate-bounce">
              <CheckCircle2 className="h-12 w-12" />
           </div>
           <div className="space-y-2">
             <h1 className="text-4xl font-black text-primary uppercase">Exam Submitted!</h1>
             <p className="text-slate-500 font-bold">Your responses have been successfully recorded and synced with the school portal.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 grid grid-cols-2 gap-4">
              <div className="text-center">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Time Spent</div>
                 <div className="text-xl font-black text-primary">05:22</div>
              </div>
              <div className="text-center">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Answered</div>
                 <div className="text-xl font-black text-primary">{Object.keys(cbt.answers).length} / {cbt.questions.length}</div>
              </div>
           </div>
           <Button variant="default" className="w-full bg-primary h-14 rounded-2xl font-black text-lg shadow-xl" onClick={() => window.location.href = '/dashboard'}>
             Back to Dashboard
           </Button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col z-50">
      {/* High Contrast Header */}
      <header className="h-24 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                 <Landmark className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-black text-lg text-primary uppercase tracking-tight">CBT Engine</span>
           </div>
           <div className="h-6 w-px bg-slate-200 hidden md:block" />
           <div className="hidden md:block">
              <h1 className="font-bold text-primary">Third Term Assessment: Biology</h1>
              <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Student ID: TF/2024/4912</p>
           </div>
        </div>

        <div className={cn(
          "flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all font-mono text-2xl font-black",
          cbt.timeRemaining < 60 ? "bg-rose-50 border-rose-200 text-rose-500 animate-pulse" : "bg-primary text-white border-primary"
        )}>
           <Clock className="h-6 w-6" />
           {formatTime(cbt.timeRemaining)}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 flex flex-col p-12 overflow-y-auto relative pb-32">
           <div className="max-w-4xl mx-auto w-full space-y-12">
             {/* Question Info */}
             <div className="flex items-center justify-between">
                <span className="text-xs font-black text-accent uppercase tracking-[0.3em]">
                   Question {cbt.currentQuestionIndex + 1} of {cbt.questions.length}
                </span>
                <Progress value={progress} className="w-48 h-2 bg-slate-200" />
             </div>

             {/* Question Text */}
             <div className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[200px] flex items-center">
                <p className="text-3xl font-black text-primary leading-tight">
                  {currentQuestion.text}
                </p>
             </div>

             {/* Options */}
             <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((opt) => {
                  const isSelected = cbt.answers[currentQuestion.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => cbt.setAnswer(currentQuestion.id, opt.id)}
                      className={cn(
                        "flex items-center gap-6 p-6 rounded-3xl border-2 transition-all text-left group",
                        isSelected 
                          ? "bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-[1.02]" 
                          : "bg-white border-slate-100 text-slate-700 hover:border-accent hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "h-10 w-10 flex items-center justify-center rounded-xl font-black transition-all",
                        isSelected ? "bg-white text-primary" : "bg-slate-100 text-slate-400 group-hover:bg-accent group-hover:text-white"
                      )}>
                        {opt.id.toUpperCase()}
                      </div>
                      <span className="text-xl font-bold">{opt.text}</span>
                    </button>
                  );
                })}
             </div>
           </div>
        </main>

        {/* Sidebar Mini-Map */}
        <aside className="w-72 bg-white border-l border-slate-200 p-8 hidden lg:block overflow-y-auto">
           <div className="flex items-center gap-2 font-black text-primary uppercase text-sm mb-6">
              <Grid className="h-4 w-4 text-accent" />
              Question Map
           </div>
           <div className="grid grid-cols-4 gap-3">
              {cbt.questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => cbt.goToQuestion(i)}
                  className={cn(
                   "h-12 w-12 rounded-xl text-xs font-black border-2 transition-all",
                   cbt.currentQuestionIndex === i ? "border-primary bg-primary text-white" : 
                   cbt.answers[q.id] ? "border-emerald-200 bg-emerald-50 text-emerald-600" : "border-slate-100 text-slate-400 hover:bg-slate-50"
                  )}
                >
                  {i + 1}
                </button>
              ))}
           </div>
           
           <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3">
                 <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                 <div>
                    <h4 className="text-xs font-black text-amber-600 uppercase">Warning</h4>
                    <p className="text-[10px] text-amber-500 font-bold leading-relaxed mt-1">
                      Do not refresh this page. Your session is active.
                    </p>
                 </div>
              </div>
           </div>
        </aside>
      </div>

      {/* Control Bar */}
      <footer className="h-24 bg-white border-t border-slate-200 px-12 flex items-center justify-between shadow-lg relative z-10">
         <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="h-14 px-8 rounded-2xl font-black text-primary border-2" 
              onClick={() => cbt.prevQuestion()}
              disabled={cbt.currentQuestionIndex === 0}
            >
               <ChevronLeft className="mr-2 h-5 w-5" />
               Previous
            </Button>
            <Button 
              variant="outline" 
              className="h-14 px-8 rounded-2xl font-black text-primary border-2" 
              onClick={() => cbt.nextQuestion()}
              disabled={cbt.currentQuestionIndex === cbt.questions.length - 1}
            >
               Next
               <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
         </div>

         <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Status</div>
               <div className="text-sm font-black text-emerald-500 uppercase tracking-tight">Connected & Secure</div>
            </div>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 h-14 px-10 rounded-2xl font-black text-lg text-white shadow-xl shadow-emerald-200"
              onClick={() => {
                if (confirm("Are you sure you want to submit your exam now?")) {
                  cbt.submitExam();
                }
              }}
            >
               <Send className="mr-2 h-5 w-5" />
               Finish Exam
            </Button>
         </div>
      </footer>
    </div>
  );
}
