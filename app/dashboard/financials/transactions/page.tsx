"use client";

import { 
  Search, 
  Filter, 
  Download, 
  CreditCard, 
  Landmark, 
  MoreVertical,
  CheckCircle2,
  Clock,
  ExternalLink
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
import { formatNaira } from "@/lib/paystack";

const transactions = [
  { id: "TX-90122", student: "Oladimeji Ibrahim", class: "SSS 3A", type: "Tuition", amount: 125000, method: "Paystack / Card", status: "Success", date: "Apr 12, 2024" },
  { id: "TX-90123", student: "Chisom Okeke", class: "JSS 2B", type: "Development Fee", amount: 15000, method: "Bank Transfer", status: "Pending", date: "Apr 14, 2024" },
  { id: "TX-90124", student: "Samuel Chukwuma", class: "SSS 1C", type: "Tuition", amount: 125000, method: "Paystack / Card", status: "Success", date: "Apr 10, 2024" },
  { id: "TX-90125", student: "Folake Adeyemi", class: "Primary 4", type: "Uniform & Books", amount: 35000, method: "Cash", status: "Success", date: "Apr 08, 2024" },
  { id: "TX-90126", student: "Amina Yusuf", class: "SSS 2A", type: "Tuition", amount: 65000, method: "Paystack / Card", status: "Success", date: "Mar 28, 2024" },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Transaction Ledger</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Complete audit log of all payments and financial entries.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl font-bold gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by student or TX ID..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none transition-all font-medium text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
             <Button variant="ghost" className="rounded-xl font-bold gap-2 text-slate-500">
                <Filter className="h-4 w-4" />
                Filter
             </Button>
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-slate-100">
              <TableHead className="py-6 pl-8 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Transaction ID</TableHead>
              <TableHead className="py-6 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Student / Class</TableHead>
              <TableHead className="py-6 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Payment For</TableHead>
              <TableHead className="py-6 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Amount</TableHead>
              <TableHead className="py-6 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Channel</TableHead>
              <TableHead className="py-6 font-black text-primary uppercase text-[10px] tracking-[0.2em]">Status</TableHead>
              <TableHead className="py-6 pr-8 text-right font-black text-primary uppercase text-[10px] tracking-[0.2em]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="border-slate-100 hover:bg-slate-50 transition-colors">
                <TableCell className="py-6 pl-8 font-mono text-xs font-bold text-slate-400">{tx.id}</TableCell>
                <TableCell className="py-6">
                   <div className="flex flex-col">
                      <span className="font-black text-slate-700 leading-tight">{tx.student}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{tx.class}</span>
                   </div>
                </TableCell>
                <TableCell className="py-6">
                   <span className="text-sm font-bold text-slate-500">{tx.type}</span>
                </TableCell>
                <TableCell className="py-6">
                   <span className="text-lg font-black text-primary">{formatNaira(tx.amount)}</span>
                </TableCell>
                <TableCell className="py-6">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      {tx.method.includes("Card") ? <CreditCard className="h-3.5 w-3.5" /> : <Landmark className="h-3.5 w-3.5" />}
                      {tx.method}
                   </div>
                </TableCell>
                <TableCell className="py-6">
                   <Badge 
                     variant={tx.status === "Success" ? "default" : "secondary"}
                     className={`rounded-lg px-2 font-black uppercase text-[9px] gap-1 ${tx.status === 'Success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}
                   >
                     {tx.status === 'Success' ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                     {tx.status}
                   </Badge>
                </TableCell>
                <TableCell className="py-6 pr-8 text-right">
                   <div className="flex items-center justify-end gap-2 text-slate-400">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:text-primary">
                         <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                         <MoreVertical className="h-4 w-4" />
                      </Button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
