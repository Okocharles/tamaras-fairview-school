"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  UserSquare2,
  BookMarked,
  GraduationCap,
  Banknote,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Students", href: "/dashboard/students", icon: GraduationCap },
  { name: "Staff", href: "/dashboard/staff", icon: UserSquare2 },
  { name: "Academics", href: "/dashboard/academics", icon: BookMarked },
  { name: "Financials", href: "/dashboard/financials", icon: Banknote },
  { name: "Communications", href: "/dashboard/comms", icon: MessageSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-72 h-screen bg-slate-900 text-white border-r border-slate-800">
      <div className="flex h-24 items-center px-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0">
             <Image 
                src="/logo-high.png" 
                alt="TFHS" 
                fill 
                className="object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-heading font-black tracking-tight uppercase leading-none">Tamara's</span>
            <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mt-1">High School</span>
          </div>
        </Link>
      </div>

      <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-accent text-white shadow-lg shadow-accent/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-slate-500 group-hover:text-accent")} />
                <span className="font-semibold">{item.name}</span>
              </div>
              {isActive && <ChevronRight className="h-4 w-4" />}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800 space-y-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center font-bold text-white shadow-inner">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">Admin User</span>
            <span className="text-[10px] uppercase tracking-wider text-accent font-black">Principal</span>
          </div>
        </div>
        
        <Link
          href="/logout"
          className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-semibold">Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
