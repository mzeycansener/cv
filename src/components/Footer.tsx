"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { language } = useLanguage();

    const t = {
        tr: "Dokuz Eylül Üniversitesi YBS Öğrencisi. Next.js & Framer Motion ile geliştirildi.",
        en: "Dokuz Eylül University MIS Student. Built with Next.js & Framer Motion."
    }[language];

    return (
        <footer className="py-8 text-center text-muted-foreground border-t border-border/50 bg-background/80 glass">
            <p className="font-medium">
                © {new Date().getFullYear()} Mehmet Zeycan Şener | {t}
            </p>
        </footer>
    );
}
