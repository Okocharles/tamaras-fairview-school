"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { C } from "@/lib/colors";
import { SECTIONS, GOOGLE_SHEETS_ENDPOINT } from "@/lib/data";

interface FormState {
  studentName: string;
  dob: string;
  section: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  message: string;
}

export default function ApplicationModal({
  open,
  onClose,
  defaultSection,
}: {
  open: boolean;
  onClose: () => void;
  defaultSection?: string;
}) {
  const makeEmptyForm = (sectionName?: string): FormState => ({
    studentName: "",
    dob: "",
    section: sectionName || "Discovery",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    message: "",
  });

  const [form, setForm] = useState<FormState>(() => makeEmptyForm(defaultSection));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState<{ firstName: string; phone: string } | null>(null);

  if (!open) return null;

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.parentName || !form.parentPhone) {
      setStatus("error");
      setErrorMsg("Please fill in student name, parent name, and phone number before submitting.");
      return;
    }
    if (!GOOGLE_SHEETS_ENDPOINT || GOOGLE_SHEETS_ENDPOINT.startsWith("PASTE_YOUR")) {
      setStatus("error");
      setErrorMsg("Admissions form isn't connected to the Google Sheet yet — the endpoint URL still needs to be set.");
      return;
    }
    setStatus("submitting");
    const submittedSection = form.section;
    const submittedPhone = form.parentPhone;
    const submittedFirstName = form.studentName.split(" ")[0];
    try {
      const payload = { ...form, submittedAt: new Date().toISOString() };
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setForm(makeEmptyForm(submittedSection));
      setLastSubmitted({ firstName: submittedFirstName, phone: submittedPhone });
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong sending your application. Please try again, or contact us directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(10,22,40,0.7)" }} onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ background: C.white }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5" style={{ background: C.navy900 }}>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: C.gold300 }}>
              Admissions
            </div>
            <div className="text-lg" style={{ color: C.white, fontFamily: "Playfair Display, serif" }}>
              Start Your Application
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ color: C.white }}>
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
              Student Full Name *
            </label>
            <input
              required
              value={form.studentName}
              onChange={update("studentName")}
              className="w-full px-4 py-3 rounded-md text-sm"
              style={{ border: `1px solid ${C.line}` }}
              placeholder="e.g. Amara Johnson"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
                Date of Birth
              </label>
              <input type="date" value={form.dob} onChange={update("dob")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
                Applying To
              </label>
              <select value={form.section} onChange={update("section")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }}>
                {SECTIONS.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
              Parent / Guardian Name *
            </label>
            <input required value={form.parentName} onChange={update("parentName")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Full name" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
                Phone Number *
              </label>
              <input required value={form.parentPhone} onChange={update("parentPhone")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="080..." />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
                Email
              </label>
              <input type="email" value={form.parentEmail} onChange={update("parentEmail")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1 block" style={{ color: C.slate }}>
              Message (optional)
            </label>
            <textarea rows={3} value={form.message} onChange={update("message")} className="w-full px-4 py-3 rounded-md text-sm" style={{ border: `1px solid ${C.line}` }} placeholder="Anything you'd like us to know" />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <X size={18} style={{ color: "#B91C1C" }} className="mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-bold" style={{ color: "#991B1B" }}>Couldn&apos;t Submit</div>
                <div className="text-xs" style={{ color: "#B91C1C" }}>{errorMsg}</div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 rounded-md text-sm font-semibold"
            style={{ background: C.gold500, color: C.white, opacity: status === "submitting" ? 0.7 : 1 }}
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>

          {status === "success" && (
            <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}>
              <Check size={18} style={{ color: "#059669" }} className="mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-bold" style={{ color: "#065F46" }}>Application Submitted</div>
                <div className="text-xs" style={{ color: "#047857" }}>
                  Thank you{lastSubmitted?.firstName ? `, ${lastSubmitted.firstName}'s family` : ""}. Our admissions
                  team will reach out {lastSubmitted?.phone ? `on ${lastSubmitted.phone}` : "soon"}. Feel free to
                  submit another application if needed.
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
