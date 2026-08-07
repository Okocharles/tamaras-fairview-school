"use client";

import { createContext, useContext, useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface ApplyContextValue {
  openApply: (section?: string) => void;
}

const ApplyContext = createContext<ApplyContextValue | null>(null);

export function ApplyProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | undefined>(undefined);
  const [instanceKey, setInstanceKey] = useState(0);

  const openApply = (sectionName?: string) => {
    setSection(sectionName);
    setInstanceKey((k) => k + 1);
    setOpen(true);
  };

  return (
    <ApplyContext.Provider value={{ openApply }}>
      {children}
      <ApplicationModal key={instanceKey} open={open} onClose={() => setOpen(false)} defaultSection={section} />
    </ApplyContext.Provider>
  );
}

export function useApply() {
  const ctx = useContext(ApplyContext);
  if (!ctx) throw new Error("useApply must be used within ApplyProvider");
  return ctx;
}
