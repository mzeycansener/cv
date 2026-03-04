import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YBS Expert Portfolio | Developer, Designer & Data Analyst",
  description: "Professional portfolio of an MIS (YBS) expert specializing in Graphic Design, Coding, Database Management, DSS, and Business Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
