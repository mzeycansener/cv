import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Component as LiquidGradient } from "@/components/ui/flow-gradient-hero-section";
import { CustomCursor } from "@/components/ui/CustomCursor";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmet Zeycan Şener - Portfolio | Developer, Designer & Data Analyst",
  description: "Professional portfolio of Mehmet Zeycan Şener, an MIS (YBS) student at Dokuz Eylül University specializing in Graphic Design, Coding, Database Management, DSS, and Business Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen selection:bg-primary/20 selection:text-primary relative md:cursor-none`}>
        <CustomCursor />
        <LiquidGradient showPauseButton={false} />
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
