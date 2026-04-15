"use client";

import { 
  Users, 
  GraduationCap, 
  Wallet, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const data = [
  { name: "Mon", attendance: 92, fees: 4000 },
  { name: "Tue", attendance: 95, fees: 3000 },
  { name: "Wed", attendance: 89, fees: 2000 },
  { name: "Thu", attendance: 96, fees: 2780 },
  { name: "Fri", attendance: 94, fees: 1890 },
];

const kpis = [
  {
    title: "Total Students",
    value: "1,240",
    change: "+12%",
    trend: "up",
    icon: GraduationCap,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Total Staff",
    value: "87",
    change: "+2",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Revenue (MTD)",
    value: "₦8.4M",
    change: "+18%",
    trend: "up",
    icon: Wallet,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Avg. Attendance",
    value: "94.2%",
    change: "-1.4%",
    trend: "down",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-primary uppercase">Overview</h1>
        <p className="text-slate-500 font-semibold tracking-tight">Main Dashboard summary for the 2024/2025 Third Term.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden group hover:-translate-y-1 transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${kpi.bg} ${kpi.color}`}>
                  <kpi.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-black uppercase ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {kpi.change}
                  {kpi.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{kpi.title}</h3>
                <p className="text-3xl font-black text-primary">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-black text-primary">Student Attendance Trend</CardTitle>
            <CardDescription className="font-semibold">Weekly average percentage</CardDescription>
          </CardHeader>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAttend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C9981F" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#C9981F" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="attendance" stroke="#C9981F" strokeWidth={4} fillOpacity={1} fill="url(#colorAttend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Side Info */}
        <div className="space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 bg-primary text-white">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-accent" />
                <CardTitle className="text-lg font-black uppercase tracking-tight">Active Exam Session</CardTitle>
              </div>
              <CardDescription className="text-slate-300 font-medium">Ongoing CBT assessments</CardDescription>
            </CardHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <div className="text-sm font-bold">Mathematics JSS2</div>
                  <div className="text-[10px] uppercase text-slate-400">Ends in 45 mins</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <div className="text-sm font-bold">Biology SSS1</div>
                  <div className="text-[10px] uppercase text-slate-400">Ends in 2h 10m</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </Card>

          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8">
             <CardTitle className="text-lg font-black text-primary mb-6 uppercase tracking-tight">Recent Activity</CardTitle>
             <div className="space-y-6">
               {[
                 "Term result for class JSS 1A published",
                 "New staff account created for Dr. Adebayo",
                 "Fee reminder sent to 45 parents"
               ].map((text, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="h-2 w-2 mt-2 rounded-full bg-accent shrink-0" />
                   <p className="text-sm font-bold text-slate-600 leading-tight">{text}</p>
                 </div>
               ))}
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
