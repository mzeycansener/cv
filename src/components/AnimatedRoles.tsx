"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
    "Grafik Tasarımcı",
    "Kodlamacı",
    "Veritabanı Uzmanı",
    "KDS Uzmanı",
    "İşletme Uzmanı",
    "YBS Uzmanı"
];

export function AnimatedRoles() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-[40px] md:h-[60px] overflow-hidden relative flex items-center">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -40, opacity: 0, scale: 1.1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 1,
                    }}
                    className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent absolute"
                >
                    {roles[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
