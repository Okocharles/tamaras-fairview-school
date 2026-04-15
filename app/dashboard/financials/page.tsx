"use client";

import { 
  Wallet, 
  TrendingUp, 
  CreditCard, 
  FileText, 
  ArrowUpRight, 
  ArrowDownRight,
  Download,
  AlertCircle,
  Landmark,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { formatNaira } from "@/lib/paystack";

const revenueData = [
  { month: "Jan", amount: 1200000 },
  { month: "Feb", amount: 2100000 },
  { month: "Mar", amount: 4800000 },
  { month: "Apr", amount: 3200000 },
  { month: "May", amount: 6500000 },
  { month: "Jun", amount: 5900000 },
];

const stats = [
  { title: "Total Collections", value: 18450000, change: "+12.5%", trend: "up", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-50" },
  { title: "Outstanding Debt", value: 4200000, change: "+3.2%", trend: "down", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-50" },
  { title: "Pending Approvals", value: 8, change: "-2", trend: "up", icon: ShieldCheck, color: "text-amber-500", bg: "bg-amber-50" },
  { title: "Avg. Per Student", value: 148000, change: "+8%", trend: "up", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
];

export default function FinancialDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Financial Overview</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Real-time tracking of school fees and miscellaneous payments.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl font-bold gap-2">
            <Download className="h-4 w-4" />
            Financial Report
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 shadow-lg">
            <Landmark className="h-4 w-4" />
            Fee Schedules
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden group hover:-translate-y-1 transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-black uppercase ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {stat.change}
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.title}</h3>
                <p className="text-2xl font-black text-primary">
                  {stat.title.includes("Pending") ? stat.value : formatNaira(stat.value)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8">
          <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
            <div>
               <CardTitle className="text-xl font-black text-primary">Revenue Collections</CardTitle>
               <CardDescription className="font-semibold text-slate-400">Monthly breakdown for 2024</CardDescription>
            </div>
            <Badge className="bg-slate-100 text-slate-500 border-none font-bold uppercase tracking-widest text-[10px]">6 Months</Badge>
          </CardHeader>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600, fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontWeight: 600, fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                  formatter={(value: number) => [formatNaira(value), "Amount"]}
                />
                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#C9981F' : '#1B2B5E'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Quick Actions / Recent Payments */}
        <div className="space-y-8">
           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 bg-slate-900 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-1 uppercase tracking-tight">Recent Payments</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Last 24 hours</p>
                
                <div className="space-y-4">
                   {[
                     { name: "Ibrahim O.", method: "Card", amount: 45000, time: "2m ago" },
                     { name: "Chisom O.", method: "Transfer", amount: 120000, time: "1h ago" },
                     { name: "Amina Y.", method: "Card", amount: 85000, time: "3h ago" },
                   ].map((p, i) => (
                     <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                           <div className="h-8 w-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                              <CreditCard className="h-4 w-4" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-sm font-bold">{p.name}</span>
                              <span className="text-[10px] uppercase text-slate-500 font-bold">{p.method}</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <div className="text-sm font-black text-accent">{formatNaira(p.amount)}</div>
                           <div className="text-[10px] uppercase text-slate-500 font-bold">{p.time}</div>
                        </div>
                     </div>
                   ))}
                </div>

                <Button className="w-full mt-6 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl h-12">
                   View All Transactions
                </Button>
              </div>
           </Card>

           <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 border border-slate-100 group">
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-rose-50 text-rose-500 rounded-xl">
                    <FileText className="h-5 w-5" />
                 </div>
                 <h3 className="text-lg font-black text-primary uppercase tracking-tight">Outstanding Debts</h3>
              </div>
              <div className="space-y-4">
                 <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                   Currently <span className="text-rose-500 font-black">42 students</span> have unpaid term balances.
                 </p>
                 <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 font-bold text-slate-700 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all">
                    Generate Debtor List
                 </Button>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
