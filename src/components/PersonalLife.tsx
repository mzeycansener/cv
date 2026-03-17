"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Camera, Coffee, BookOpen, Music, Heart, Code2, Plane, Mountain,
    ArrowRight
} from "lucide-react";
import { useRef, MouseEvent, useState } from "react";
import { StaggeredScrambleGallery } from "./ui/StaggeredScrambleGallery";

/* ─────────── Hobby Data ─────────── */
const hobbies = [
    {
        id: "photography",
        title: "Photography",
        description: "Capturing fleeting moments that tell a thousand-word story.",
        icon: Camera,
        gradient: "from-rose-400 to-pink-600",
        glow: "rgba(244,63,94,0.35)",
        accent: "#f43f5e",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1000",
            "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1000",
            "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=1000",
            "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1000"
        ],
        tag: "Creative",
    },
    {
        id: "travel",
        title: "Exploring",
        description: "Discovering new cultures, foods, and horizons.",
        icon: Plane,
        gradient: "from-sky-400 to-blue-600",
        glow: "rgba(56,189,248,0.35)",
        accent: "#38bdf8",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000",
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000",
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1000"
        ],
        tag: "Adventure",
    },
    {
        id: "coffee",
        title: "Coffee",
        description: "The ritual that fuels late-night coding sessions.",
        icon: Coffee,
        gradient: "from-amber-400 to-orange-500",
        glow: "rgba(251,191,36,0.35)",
        accent: "#fbbf24",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000",
            "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1000"
        ],
        tag: "Daily Ritual",
    },
    {
        id: "coding-life",
        title: "Workspace",
        description: "Where ideas and clean code converge.",
        icon: Code2,
        gradient: "from-violet-400 to-purple-600",
        glow: "rgba(139,92,246,0.35)",
        accent: "#8b5cf6",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000"
        ],
        tag: "Passion",
    },
    {
        id: "music",
        title: "Music",
        description: "Rhythm and melody — the creative backdrop.",
        icon: Music,
        gradient: "from-fuchsia-400 to-rose-500",
        glow: "rgba(232,121,249,0.35)",
        accent: "#e879f9",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1514525253361-bee8718a300c?q=80&w=1000",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000",
            "https://images.unsplash.com/photo-1459749411177-042180ce6742?q=80&w=1000"
        ],
        tag: "Inspiration",
    },
    {
        id: "reading",
        title: "Learning",
        description: "Books that reshape how I see the world.",
        icon: BookOpen,
        gradient: "from-teal-700 to-emerald-800",
        glow: "rgba(20,128,90,0.25)",
        accent: "#0d9968",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000",
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000",
            "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1000"
        ],
        tag: "Growth",
    },
    {
        id: "nature",
        title: "Nature Walks",
        description: "Clearing the mind, one step at a time.",
        icon: Mountain,
        gradient: "from-green-700 to-green-900",
        glow: "rgba(34,100,34,0.25)",
        accent: "#166534",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        galleryImages: [
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1000"
        ],
        tag: "Wellness",
    },
];

/* ─────────── Tilt Card ─────────── */
function TiltCard({
    item,
    index,
    onClick
}: {
    item: (typeof hobbies)[0];
    index: number;
    onClick: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 25 });
    const springY = useSpring(y, { stiffness: 200, damping: 25 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

    function handleMouse(e: MouseEvent) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(nx);
        y.set(ny);
    }

    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    const Icon = item.icon;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            onClick={onClick}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className={`relative group cursor-pointer select-none ${item.colSpan} ${item.rowSpan}`}
        >
            {/* Outer glow layer */}
            <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{ background: `radial-gradient(ellipse at center, ${item.glow} 0%, transparent 70%)` }}
            />

            {/* Card */}
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500">

                {/* Background image with zoom + reveal */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-[1.08] group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{ backgroundImage: `url(${item.image})` }}
                    />
                    {/* Gradient overlay always present, deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30 group-hover:opacity-0 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 z-10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-out pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />

                {/* Top badge — tag */}
                <div className="absolute top-4 left-4 z-20">
                    <span
                        className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full text-white transition-all duration-300"
                        style={{ background: `linear-gradient(135deg, ${item.accent}cc, ${item.accent}88)`, boxShadow: `0 0 12px ${item.glow}` }}
                    >
                        {item.tag}
                    </span>
                </div>

                {/* Icon badge — top right */}
                <div
                    className="absolute top-4 right-4 z-20 p-3 rounded-2xl border border-white/40 backdrop-blur-md shadow-md group-hover:border-white/20 transition-all duration-500"
                    style={{ background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}11)` }}
                >
                    <Icon
                        className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                        style={{ color: item.accent }}
                    />
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    {/* Animated underline bar */}
                    <div
                        className="h-0.5 w-0 group-hover:w-full mb-3 rounded-full transition-all duration-500 ease-out"
                        style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                    />

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-400">
                        {item.title}
                    </h3>

                    {/* Description slides up */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <div className="overflow-hidden">
                            <p className="text-sm mt-1.5 pb-0.5 text-muted-foreground group-hover:text-white/80 transition-colors duration-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>

                    {/* Explore arrow */}
                    <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        <span className="text-xs font-semibold text-white/90">Click to View Gallery</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────── Section Header ─────────── */
const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 6 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.6,
    duration: 3 + Math.random() * 3,
}));

/* ─────────── Main Component ─────────── */
export function PersonalLife() {
    const [selectedHobby, setSelectedHobby] = useState<typeof hobbies[0] | null>(null);

    return (
        <section id="personallife" className="py-28 relative overflow-hidden">
            {/* ── Background Decorations ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-green-900/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-slate-300/8 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-200/5 rounded-full blur-[120px]" />

                {/* Floating particles */}
                {floatingParticles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            background: "radial-gradient(circle, rgba(22,101,52,0.2) 0%, transparent 70%)",
                        }}
                        animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    {/* Pill badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-sm font-semibold backdrop-blur-sm"
                    >
                        <Heart className="w-3.5 h-3.5 fill-primary/60" />
                        Beyond the Code
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-5 leading-[1.08]">
                        Personal Life{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent">
                                &amp; Hobbies
                            </span>
                            {/* Underline swoosh */}
                            <svg
                                className="absolute -bottom-1 left-0 w-full"
                                viewBox="0 0 220 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M2 6 Q55 2 110 5 Q165 8 218 3"
                                    stroke="url(#hg)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                                />
                                <defs>
                                    <linearGradient id="hg" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#166534" />
                                        <stop offset="0.5" stopColor="#15803d" />
                                        <stop offset="1" stopColor="#14532d" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        When I'm not writing code or designing systems, I love to explore the world around me. Click on a category to explore my gallery.
                    </p>
                </motion.div>

                {/* ── Bento Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[190px]">
                    {hobbies.map((item, i) => (
                        <TiltCard 
                            key={item.id} 
                            item={item} 
                            index={i} 
                            onClick={() => setSelectedHobby(item)}
                        />
                    ))}
                </div>
            </div>

            {/* ── 3D Staggered Scramble Gallery Modal ── */}
            <StaggeredScrambleGallery 
                isOpen={!!selectedHobby}
                onClose={() => setSelectedHobby(null)}
                images={selectedHobby?.galleryImages || []}
                title={selectedHobby?.title || ""}
            />
        </section>
    );
}
