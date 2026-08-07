import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplyProvider } from "@/components/ApplyProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tamarasfairview.school"),
  title: "Tamara's Fairview Nursery, Grade and High School",
  description: "A Whole New World of Learning and Care — Jos South LGA, Plateau State, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
        <ApplyProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ApplyProvider>
      </body>
    </html>
  );
}
