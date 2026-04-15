import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Tamara's Fairview | Raising Excellence, Shaping Futures",
  description: "A premier educational institution offering Nursery, Primary, High School, and Discovery programs in Nigeria. Guided by the NERDC curriculum framework.",
  keywords: ["School Management System", "Nigeria Education", "Tamara's Fairview", "Nursery", "Primary", "High School", "CBT Exams"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable, outfit.variable)}>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
