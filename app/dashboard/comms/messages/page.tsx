"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Send, 
  Circle,
  MoreVertical,
  ChevronLeft,
  Settings,
  Paperclip
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contacts = [
  { id: "1", name: "Dr. Adebayo Moses", role: "Principal", status: "online", lastMsg: "Please review the JSS3 scores." },
  { id: "2", name: "Mrs. Sarah Jenkins", role: "Science Dept", status: "offline", lastMsg: "The lab equipment arrives tomorrow." },
  { id: "3", name: "Mr. Thompson Okafor", role: "Math Teacher", status: "online", lastMsg: "Can we reschedule the PTA meet?" },
  { id: "4", name: "Ms. Victoria Eze", role: "Bursar", status: "online", lastMsg: "Fee collection report is ready." },
];

const messages = [
  { id: "m1", sender: "Dr. Adebayo Moses", text: "Hello Team, hope your week is going well.", time: "10:15 AM", self: false },
  { id: "m2", sender: "You", text: "Everything is on track for the mid-term reviews.", time: "10:22 AM", self: true },
  { id: "m3", sender: "Dr. Adebayo Moses", text: "Great, please ensure the results are locked by Friday.", time: "10:25 AM", self: false },
];

export default function MessagingPage() {
  const [activeChat, setActiveChat] = useState(contacts[0]);

  return (
    <div className="h-[calc(100vh-10rem)] bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Sidebar Contacts */}
      <aside className="w-96 border-r border-slate-100 flex flex-col hidden lg:flex">
         <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-xl font-black text-primary uppercase">Staff Chat</h2>
            <Button variant="ghost" size="icon" className="rounded-xl bg-slate-50 text-slate-400">
               <Plus className="h-5 w-5" />
            </Button>
         </div>
         <div className="p-6">
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Search contacts..." 
                 className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none transition-all font-medium text-sm"
               />
            </div>
         </div>
         <div className="flex-1 overflow-y-auto custom-scrollbar">
            {contacts.map((contact) => (
              <button 
                key={contact.id}
                onClick={() => setActiveChat(contact)}
                className={cn(
                  "w-full flex items-start gap-4 p-6 transition-all border-b border-slate-50 relative",
                  activeChat.id === contact.id ? "bg-slate-50/50 border-r-4 border-r-accent" : "hover:bg-slate-50 text-slate-500 hover:text-primary"
                )}
              >
                 <div className="relative shrink-0">
                    <div className="h-12 w-12 rounded-2xl bg-slate-200 flex items-center justify-center font-black text-primary border-2 border-white shadow-sm font-heading">
                       {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {contact.status === "online" && (
                       <Circle className="absolute -bottom-1 -right-1 h-3 w-3 fill-emerald-500 text-emerald-500 border-2 border-white" />
                    )}
                 </div>
                 <div className="flex-1 min-w-0 text-left">
                    <div className="flex justify-between items-center mb-1">
                       <span className="font-black text-sm text-primary truncate">{contact.name}</span>
                       <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">10m ago</span>
                    </div>
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{contact.role}</div>
                    <p className="text-xs font-medium text-slate-500 line-clamp-1 italic">{contact.lastMsg}</p>
                 </div>
              </button>
            ))}
         </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-slate-50/10">
         {/* Chat Header */}
         <header className="h-24 px-8 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center font-black text-white shadow-inner font-heading">
                  {activeChat.name.split(' ').map(n => n[0]).join('')}
               </div>
               <div>
                  <h3 className="font-black text-primary leading-tight uppercase tracking-tight">{activeChat.name}</h3>
                  <div className="flex items-center gap-2">
                     <Circle className={cn("h-2 w-2", activeChat.status === "online" ? "fill-emerald-500 text-emerald-500" : "fill-slate-300 text-slate-300")} />
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                       {activeChat.status === "online" ? "Active Now" : "Seen 2h ago"}
                     </span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="icon" className="rounded-xl text-slate-300"><Settings className="h-5 w-5" /></Button>
               <Button variant="ghost" size="icon" className="rounded-xl text-slate-300"><Search className="h-5 w-5" /></Button>
               <Button variant="ghost" size="icon" className="rounded-xl text-slate-300"><MoreVertical className="h-5 w-5" /></Button>
            </div>
         </header>

         {/* Messages Scroll Area */}
         <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-white/50">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex flex-col max-w-lg", msg.self ? "ml-auto items-end" : "mr-auto items-start")}>
                 <div className={cn(
                   "p-6 rounded-[2rem] shadow-xl text-sm font-semibold relative mb-2 leading-relaxed",
                   msg.self ? "bg-primary text-white" : "bg-white text-slate-700 border border-slate-100"
                 )}>
                    {msg.text}
                 </div>
                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{msg.time}</span>
              </div>
            ))}
         </div>

         {/* Message Input Container */}
         <footer className="h-28 px-8 border-t border-slate-100 bg-white flex items-center gap-4 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.01)]">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-slate-50 text-slate-400">
               <Paperclip className="h-5 w-5" />
            </Button>
            <div className="flex-1 relative">
               <input 
                 type="text" 
                 placeholder={`Type your message to ${activeChat.name.split(' ')[0]}...`} 
                 className="w-full h-14 pl-6 pr-6 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all font-medium text-slate-700 shadow-inner"
               />
            </div>
            <Button className="h-14 w-14 rounded-2xl bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20 flex items-center justify-center">
               <Send className="h-6 w-6" />
            </Button>
         </footer>
      </main>
    </div>
  );
}
