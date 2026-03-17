"use client";

import { motion } from "framer-motion";
import { Database, Code2, Terminal, Layers, Layout, Server, Cpu, Coffee } from "lucide-react";

const techStack = [
    { name: "Java", icon: <Coffee className="w-8 h-8" />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
    { name: "C", icon: <Cpu className="w-8 h-8" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    { name: "SQL", icon: <Database className="w-8 h-8" />, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
    { name: "React", icon: <Code2 className="w-8 h-8" />, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/30" },
    { name: "Next.js", icon: <Layers className="w-8 h-8" />, color: "text-white", bg: "bg-white/10", border: "border-white/30" },
    { name: "Node.js", icon: <Server className="w-8 h-8" />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
    { name: "Tailwind", icon: <Layout className="w-8 h-8" />, color: "text-cyan-300", bg: "bg-cyan-300/10", border: "border-cyan-300/30" },
    { name: "TypeScript", icon: <Terminal className="w-8 h-8" />, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
];

const marqueeItems = [...techStack, ...techStack, ...techStack];

export function ProgrammerIllustration() {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-end overflow-hidden rounded-3xl bg-gradient-to-b from-primary/5 to-primary/20 border border-white/10 mt-12 mb-16 perspective-1000 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Desk */}
            <div className="absolute bottom-0 w-full h-12 bg-black/60 border-t border-white/10 z-10 backdrop-blur-md" />

            {/* Monitor Setup */}
            <div className="relative z-20 flex flex-col items-center mb-10 md:mb-12">
                {/* Screen */}
                <div className="w-[310px] md:w-[600px] h-[200px] md:h-[320px] bg-black rounded-xl border-4 md:border-8 border-gray-800 shadow-[0_0_60px_rgba(16,185,129,0.3)] flex overflow-hidden relative">
                    {/* Screen Glare */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-30" />

                    {/* Screen Content */}
                    <div className="w-full h-full bg-slate-950 flex flex-col justify-center relative overflow-hidden z-20">
                        {/* Matrix-like background lines */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none w-full h-full" />

                        {/* Slide Animation Container */}
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-33.33%" }}
                            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                            className="flex whitespace-nowrap items-center gap-4 md:gap-6 px-4 w-max"
                        >
                            {marqueeItems.map((tech, idx) => (
                                <div key={idx} className={`flex flex-col items-center justify-center gap-3 ${tech.bg} p-4 md:p-6 rounded-xl border ${tech.border} backdrop-blur-md w-[120px] md:w-[150px] shadow-lg shrink-0`}>
                                    <div className={`p-3 rounded-full bg-black/50 ${tech.color}`}>{tech.icon}</div>
                                    <span className="text-white font-mono text-sm md:text-base font-bold uppercase tracking-wider">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Monitor Stand */}
                <div className="w-8 md:w-16 h-12 md:h-16 bg-gradient-to-b from-gray-800 to-gray-900" />
                <div className="w-32 md:w-56 h-3 md:h-4 bg-gray-700 rounded-t-lg shadow-xl" />
            </div>

            {/* Person & Chair (Foreground) */}
            <motion.div
                animate={{ y: [0, 4, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 z-30 flex flex-col items-center origin-bottom"
            >
                {/* Head */}
                <div className="relative z-40">
                    <div className="w-24 md:w-32 h-28 md:h-36 bg-gray-900 rounded-t-[60px] md:rounded-t-[80px] rounded-b-3xl shadow-2xl relative overflow-hidden border border-gray-800/50">
                        {/* Screen reflection on back of head */}
                        <div className="absolute inset-x-0 -top-4 h-20 bg-primary/20 blur-xl mix-blend-screen" />
                    </div>
                    {/* Headphones Band */}
                    <div className="absolute -top-2 -left-2 -right-2 h-16 border-t-[10px] md:border-t-[12px] border-gray-800 rounded-t-full shadow-lg" />
                    {/* Earpieces */}
                    <div className="absolute top-10 -left-4 w-5 md:w-6 h-14 md:h-16 bg-gray-800 rounded-l-xl shadow-lg border border-gray-700/50" />
                    <div className="absolute top-10 -right-4 w-5 md:w-6 h-14 md:h-16 bg-gray-800 rounded-r-xl shadow-lg border border-gray-700/50" />
                </div>

                {/* Shoulders & Torso */}
                <div className="w-48 md:w-64 h-36 md:h-48 bg-zinc-800 rounded-t-[50px] md:rounded-t-[60px] -mt-8 z-30 relative overflow-hidden border border-zinc-700/50">
                    {/* Hoodie/Shirt detail */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-10 md:h-14 bg-zinc-900 rounded-b-[40px] opacity-80" />
                    {/* Shoulder Highlights */}
                    <div className="absolute -top-2 -left-4 w-20 h-20 bg-primary/10 blur-xl rounded-full pointer-events-none" />
                    <div className="absolute -top-2 -right-4 w-20 h-20 bg-primary/10 blur-xl rounded-full pointer-events-none" />
                </div>

                {/* Chair Backrest - Moved to foreground to cover lower torso */}
                <div className="absolute top-32 md:top-40 w-56 md:w-72 h-56 md:h-72 bg-neutral-900 rounded-t-[50px] md:rounded-t-[70px] border-t-4 md:border-t-8 border-neutral-800 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col items-center overflow-hidden">
                    {/* Chair detailing */}
                    <div className="w-1/3 h-full border-x border-white/5 mt-6" />
                </div>
            </motion.div>
        </div>
    );
}
