"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Search, Bell, HelpCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={cn(
          "absolute inset-y-0 left-0 w-72 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <Sidebar />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-[-3rem] text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden rounded-xl text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
               <Menu className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center gap-4 w-40 md:w-96">
              <div className="relative w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Session:</span>
              <span className="text-sm font-black text-primary">2024/2025</span>
            </div>
            
            <div className="h-6 w-px bg-slate-200" />

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-accent hover:bg-accent/5 rounded-full ring-offset-2 transition-all">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:text-primary rounded-full">
                <HelpCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
