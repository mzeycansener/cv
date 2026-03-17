"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

/* ─────────── Scramble Text Hook ─────────── */
const useScrambleText = (targetText: string, duration: number = 400) => {
    const [displayText, setDisplayText] = useState("");
    const symbols = "@#*&X0%!?$";

    useEffect(() => {
        let isCancelled = false;
        let iteration = 0;
        const totalFrames = 30; // 60fps for ~500ms
        const frameInterval = duration / totalFrames;

        const interval = setInterval(() => {
            if (isCancelled) return;

            setDisplayText(
                targetText
                    .split("")
                    .map((char, index) => {
                        if (index < (iteration / totalFrames) * targetText.length) {
                            return targetText[index];
                        }
                        return symbols[Math.floor(Math.random() * symbols.length)];
                    })
                    .join("")
            );

            if (iteration >= totalFrames) {
                clearInterval(interval);
                setDisplayText(targetText);
            }
            iteration++;
        }, frameInterval);

        return () => {
            isCancelled = true;
            clearInterval(interval);
        };
    }, [targetText, duration]);

    return displayText;
};

/* ─────────── Scramble Component ─────────── */
function ScrambleText({ text, isVisible }: { text: string; isVisible: boolean }) {
    const scrambled = useScrambleText(isVisible ? text : "", 400);
    
    if (!isVisible) return null;

    return (
        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-2xl">
            <span className="font-mono text-2xl font-bold text-white tracking-[0.2em] uppercase">
                {scrambled}
            </span>
        </div>
    );
}

/* ─────────── Gallery Props ─────────── */
interface GalleryProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
}

export function StaggeredScrambleGallery({ isOpen, onClose, images, title }: GalleryProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Prevent scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden font-sans"
                >
                    {/* Header/Close */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-[110]">
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex flex-col"
                        >
                            <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Hobby Gallery</h2>
                            <p className="text-white text-3xl font-black tracking-tight">{title}</p>
                        </motion.div>
                        <button 
                            onClick={onClose}
                            className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    {/* Gallery Container */}
                    <div 
                        className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center p-12"
                        style={{ perspective: "1500px" }}
                    >
                        <div 
                            className="relative flex items-center justify-center"
                            style={{ transform: "rotateY(-15deg) rotateX(10deg)" }}
                        >
                            {images.map((img, i) => {
                                const isHovered = hoveredIndex === i;
                                const isAnyHovered = hoveredIndex !== null;
                                
                                return (
                                    <motion.div
                                        key={i}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="absolute cursor-pointer"
                                        style={{
                                            zIndex: isHovered ? 50 : 10 + i,
                                            transformStyle: "preserve-3d",
                                        }}
                                        animate={{
                                            translateX: isHovered ? 0 : (i * 60) - 90,
                                            translateY: isHovered ? 0 : (i * -30) + 45,
                                            translateZ: isHovered ? 200 : i * 40,
                                            rotateY: isHovered ? 15 : 0, // Compensate the container's rotateY
                                            rotateX: isHovered ? -10 : 0, // Compensate the container's rotateX
                                            opacity: isHovered || !isAnyHovered ? 1 : 0.3,
                                        }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: [0.22, 1, 0.36, 1] 
                                        }}
                                    >
                                        <div className="relative group/card">
                                            {/* Counter */}
                                            <div className="absolute top-4 left-4 z-20 font-mono text-white text-sm font-bold opacity-60">
                                                0{i + 1}
                                            </div>

                                            {/* Image Card */}
                                            <div 
                                                className="w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${title} image ${i}`}
                                                    className="w-full h-full object-cover saturate-[1.2] contrast-[1.1]"
                                                />
                                            </div>

                                            {/* Scramble Text Box - Bottom Right */}
                                            <div className="absolute -bottom-8 -right-8 z-30 pointer-events-none">
                                                <ScrambleText 
                                                    text={title.toUpperCase()} 
                                                    isVisible={isHovered} 
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Hint */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="absolute bottom-8 text-white/50 text-[10px] font-bold uppercase tracking-[0.5em]"
                    >
                        Click / Hover to explore moments
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
