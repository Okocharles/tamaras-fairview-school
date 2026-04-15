"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  UserSquare2,
  ShieldCheck,
  Mail,
  Phone,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const staffList = [
  { id: "1", name: "Dr. Adebayo Moses", employeeNo: "EMP/2020/001", role: "ADMIN", department: "Academic", email: "a.moses@tamarasfairview.ng", status: "Active" },
  { id: "2", name: "Mrs. Sarah Jenkins", employeeNo: "EMP/2021/045", role: "CLASS_TEACHER", department: "Science", email: "s.jenkins@tamarasfairview.ng", status: "Active" },
  { id: "3", name: "Mr. Thompson Okafor", employeeNo: "EMP/2019/022", role: "SUBJECT_TEACHER", department: "Mathematics", email: "t.okafor@tamarasfairview.ng", status: "Active" },
  { id: "4", name: "Ms. Victoria Eze", employeeNo: "EMP/2022/089", role: "BURSAR", department: "Finance", email: "v.eze@tamarasfairview.ng", status: "Active" },
  { id: "5", name: "Chef Kolawole", employeeNo: "EMP/2023/012", role: "STAFF", department: "Catering", email: "k.chef@tamarasfairview.ng", status: "Active" },
];

export default function StaffPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary uppercase">Staff Directory</h1>
          <p className="text-slate-500 font-semibold tracking-tight">Manage employees, roles, and administrative permissions.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-primary/20">
          <Plus className="h-4 w-4" />
          Add Staff Member
        </Button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <UserSquare2 className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">87</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Staff</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">12</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Admins / BURSARS</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center font-bold">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-primary">75</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Teaching Staff</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, role or email..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-slate-100">
              <TableHead className="font-bold text-primary py-4 pl-8 uppercase tracking-widest text-[10px]">Staff Member</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Employee ID</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Role</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Department</TableHead>
              <TableHead className="font-bold text-primary py-4 uppercase tracking-widest text-[10px]">Contact</TableHead>
              <TableHead className="font-bold text-primary py-4 text-right pr-8 uppercase tracking-widest text-[10px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffList.map((member) => (
              <TableRow key={member.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="py-4 pl-8">
                   <div className="flex items-center gap-3">
                     <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs shadow-inner">
                       {member.name.split(' ').map(n => n[0]).join('')}
                     </div>
                     <span className="font-bold text-slate-700">{member.name}</span>
                   </div>
                </TableCell>
                <TableCell className="py-4 text-slate-500 font-mono text-xs">{member.employeeNo}</TableCell>
                <TableCell className="py-4">
                   <Badge variant="outline" className="rounded-lg px-2 font-black uppercase text-[9px] text-accent border-accent/30 bg-accent/5">
                     {member.role}
                   </Badge>
                </TableCell>
                <TableCell className="py-4 text-slate-500 font-semibold">{member.department}</TableCell>
                <TableCell className="py-4">
                   <div className="flex flex-col">
                     <span className="text-xs font-bold text-slate-600 flex items-center gap-1"><Mail className="h-3 w-3" /> {member.email}</span>
                   </div>
                </TableCell>
                <TableCell className="py-4 text-right pr-8">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                    <MoreVertical className="h-4 w-4 text-slate-400" />
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
