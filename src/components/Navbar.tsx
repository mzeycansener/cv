"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = {
    tr: [
        { name: "Hakkımda", href: "#about" },
        { name: "Deneyim", href: "#experience" },
        { name: "Projeler", href: "#projects" },
        { name: "Yetkinlikler", href: "#skills" },
        { name: "İletişim", href: "#contact" },
    ],
    en: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]
};

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    const sections = ["about", "experience", "projects", "skills", "contact"];
                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            if (rect.top <= 100 && rect.bottom >= 100) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = navLinks[language];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`container mx-auto max-w-3xl pointer-events-auto rounded-full transition-all duration-500 border relative ${
                    scrolled 
                        ? "bg-background/40 backdrop-blur-xl border-border/50 py-3 shadow-2xl" 
                        : "bg-transparent border-transparent py-5"
                }`}
            >
                <div className="flex items-center gap-4 px-6 md:px-8">
                    {/* Navigation Links */}
                    <div className="flex items-center gap-1 mx-auto overflow-x-auto no-scrollbar py-1">
                        {links.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative whitespace-nowrap px-3 py-1.5 text-sm font-semibold transition-colors duration-300"
                                >
                                    <span className={isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center gap-1.5 shrink-0 px-3 h-9 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/15 active:scale-95 transition-all duration-200"
                        title={language === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
                    >
                        <Languages className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-black text-primary tracking-wide">
                            {language === "tr" ? "EN" : "TR"}
                        </span>
                    </button>
                </div>
            </motion.nav>
        </header>
    );
}
