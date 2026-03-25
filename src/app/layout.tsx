import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Component as LiquidGradient } from "@/components/ui/flow-gradient-hero-section";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Providers } from "@/providers/Providers";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehmetzeycan.com"),
  title: "Mehmet Zeycan Şener - Portfolio | Business Technology Architect",
  description: "Professional portfolio of Mehmet Zeycan Şener, an MIS (YBS) student at Dokuz Eylül University specializing in Full-Stack Development, Decision Support Systems, and Business Strategy.",
  keywords: ["Mehmet Zeycan Şener", "YBS", "MIS", "Full-Stack Developer", "Business Technology Architect", "Dokuz Eylül Üniversitesi", "Data Analyst", "UI/UX Designer"],
  authors: [{ name: "Mehmet Zeycan Şener" }],
  creator: "Mehmet Zeycan Şener",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mehmetzeycan.com",
    title: "Mehmet Zeycan Şener - Portfolio | Business Technology Architect",
    description: "Kod ile Stratejiyi, Veri ile Kararı Birleştiriyorum.",
    siteName: "Mehmet Zeycan Şener Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mehmet Zeycan Şener",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehmet Zeycan Şener - Portfolio",
    description: "Business Technology Architect & Full-Stack Developer",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen selection:bg-primary/20 selection:text-primary relative md:cursor-none`}>
        <Providers>
          <CustomCursor />
          <LiquidGradient showPauseButton={false} />
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
