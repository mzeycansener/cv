"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const roles = {
    tr: [
        "Grafik Tasarımcı",
        "Full-Stack Geliştirici",
        "Veritabanı Uzmanı",
        "Karar Destek Uzmanı",
        "İşletme Analisti",
        "YBS Uzmanı"
    ],
    en: [
        "Graphic Designer",
        "Full-Stack Developer",
        "Database Engineer",
        "Decision Systems Specialist",
        "Business Analyst",
        "MIS Specialist"
    ]
};

export function AnimatedRoles() {
    const [index, setIndex] = useState(0);
    const { language } = useLanguage();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles[language].length);
        }, 2800);

        return () => clearInterval(intervalId);
    }, [language]);

    // Reset index when language changes
    useEffect(() => {
        setIndex(0);
    }, [language]);

    return (
        <div className="h-[48px] md:h-[72px] relative flex items-center overflow-visible">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${language}-${index}`}
                    initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ willChange: "transform, opacity, filter" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                >
                    {roles[language][index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
