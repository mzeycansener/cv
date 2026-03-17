"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { FlowingMenu } from "./ui/FlowingMenu";
import {
    X, Plus, Database, Code2, PenTool, Lightbulb, PieChart, GraduationCap, Guitar,
    Server, GitBranch, Globe, BarChart3, Cpu, Brain, Scale, ShoppingCart, Map, Satellite
} from "lucide-react";

/* ─────────── Profile Cards Data ─────────── */
const cards = [
    {
        id: "education",
        title: "Eğitim",
        subtitle: "DEÜ · YBS",
        icon: GraduationCap,
        color: "#1a1a2e",
        accent: "#10b981",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
        description: "Dokuz Eylül Üniversitesi'nde Yönetim Bilişim Sistemleri (YBS) bölümünde öğrenciyim. Teknoloji ve işletmenin kesiştiği bu alanda hem teknik hem de stratejik düşünme yetisi kazanıyorum.",
        tags: ["Sistem Analizi", "Yöneylem Araştırması", "Veritabanı Yönetimi", "Bilişim Hukuku"],
    },
    {
        id: "coding",
        title: "Kodlama",
        subtitle: "Full-Stack Dev",
        icon: Code2,
        color: "#0f172a",
        accent: "#6366f1",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        description: "Node.js ve JavaScript ile ölçeklenebilir backend sistemleri geliştiriyorum. React ve Next.js ile modern, kullanıcı odaklı arayüzler tasarlıyor, RESTful API'lar ve veritabanı entegrasyonları kuruyorum.",
        tags: ["Node.js / JavaScript", "React / Next.js", "RESTful API", "Sistem Analizi & UML"],
    },
    {
        id: "database",
        title: "Veritabanı",
        subtitle: "MySQL · Spatial DB",
        icon: Database,
        color: "#172554",
        accent: "#3b82f6",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
        description: "MySQL ve Mekansal Veritabanları (Spatial DB) ile ileri seviye ilişkisel modelleme yapıyorum. Karmaşık şema tasarımı, sorgu optimizasyonu ve büyük ölçekli veri mimarisinde deneyim sahibiyim.",
        tags: ["MySQL", "Spatial DB", "Şema Tasarımı", "Sorgu Optimizasyonu"],
    },
    {
        id: "dss",
        title: "Karar Destek",
        subtitle: "KDS & Yöneylem",
        icon: Lightbulb,
        color: "#1a1200",
        accent: "#f97316",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        description: "Simplex, Hedef Programlama ve Dualite yöntemleriyle kaynak optimizasyonu yapıyorum. Veriden stratejik anlam çıkaran tahminleme ve raporlama modelleri geliştiriyorum.",
        tags: ["Simplex & Dualite", "Hedef Programlama", "KDS Modelleme", "Raporlama"],
    },
    {
        id: "business",
        title: "İş & Hukuk",
        subtitle: "KVKK & Finans",
        icon: PieChart,
        color: "#16001a",
        accent: "#a855f7",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        description: "Finansal ve Yönetim Muhasebesi ilkeleriyle proje bütçeleme ve ROI analizi yapıyorum. KVKK uyumluluğu, fikri mülkiyet hakları ve dijital etik çerçevesinde güvenli sistemler tasarlıyorum.",
        tags: ["KVKK Uyumluluğu", "ROI Analizi", "E-Ticaret B2B/B2C", "Bilişim Hukuku"],
    },
    {
        id: "gis",
        title: "Mekansal",
        subtitle: "CBS · Uzaktan Algılama",
        icon: Map,
        color: "#0c1a0a",
        accent: "#22d3ee",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1000&auto=format&fit=crop",
        description: "Coğrafi Bilgi Sistemleri (CBS) ile konumsal verinin analizi, haritalandırılması ve veritabanı entegrasyonunu gerçekleştiriyorum. Uydu görüntüleri ve mekansal veriler üzerinden analiz yetkinliğine sahibim.",
        tags: ["Coğrafi Bilgi Sistemleri", "Uzaktan Algılama", "Mekansal DB", "Konumsal Analiz"],
    },
    {
        id: "design",
        title: "Tasarım",
        subtitle: "UI/UX & Grafik",
        icon: PenTool,
        color: "#1f0533",
        accent: "#e879f9",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
        description: "Figma ve Adobe Creative Cloud ile kullanıcı deneyimi odaklı arayüzler ve kurumsal kimlik çalışmaları yapıyorum. Tipografi, renk teorisi ve görsel hiyerarşi konularına hakimim.",
        tags: ["Figma", "Adobe CC", "UI/UX Tasarım", "Marka Kimliği"],
    },
    {
        id: "bass",
        title: "Kişisel",
        subtitle: "Müzik · Doğa · Sinema",
        icon: Guitar,
        color: "#1a0a00",
        accent: "#f59e0b",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop",
        description: "AFDOS bünyesinde doğa sporları, trekking ve kampçılık ile zorlu şartlarda dayanıklılık ve ekip ruhu geliştiriyorum. Bas gitar ile müzikal ritim anlayışımı; sinema ve teknoloji trendleriyle vizyonumu besliyorum. İleri seviye İngilizce, gelişmekte olan İspanyolca.",
        tags: ["Bas Gitar", "AFDOS · Kampçılık", "İleri İngilizce", "İspanyolca"],
    },
];

/* ─────────── T-Shaped Skills Data ─────────── */
const skillCategories = [
    {
        id: "software",
        label: "A. Yazılım & Sistem",
        accent: "#6366f1",
        icon: Server,
        skills: [
            { icon: Server, name: "Sunucu Tabanlı Programlama", desc: "Node.js & JavaScript ile ölçeklenebilir backend sistemleri" },
            { icon: GitBranch, name: "Sistem Analizi & Tasarım", desc: "Gereksinim analizi, SDLC yönetimi ve UML tabanlı sistem tasarımı" },
            { icon: Globe, name: "Web Teknolojileri", desc: "Dinamik, kullanıcı odaklı web arayüzleri ve API entegrasyonları" },
        ],
    },
    {
        id: "data",
        label: "B. Veri & Analitik",
        accent: "#3b82f6",
        icon: BarChart3,
        skills: [
            { icon: Database, name: "Veritabanı Yönetimi", desc: "MySQL ve Spatial DB ile ileri seviye ilişkisel modelleme" },
            { icon: Cpu, name: "Yöneylem Araştırması", desc: "Simplex, Hedef Programlama ve Dualite ile kaynak optimizasyonu" },
            { icon: Brain, name: "Karar Destek Sistemleri", desc: "Veriden stratejik anlam çıkaran tahminleme ve raporlama modelleri" },
        ],
    },
    {
        id: "business",
        label: "C. Kurumsal & Hukuk",
        accent: "#a855f7",
        icon: PieChart,
        skills: [
            { icon: PieChart, name: "Mali Yönetim", desc: "Muhasebe ilkeleriyle proje bütçeleme ve ROI analizi" },
            { icon: Scale, name: "Bilişim Hukuku", desc: "KVKK uyumluluğu, fikri mülkiyet ve dijital etik çerçevesi" },
            { icon: ShoppingCart, name: "E-Ticaret Stratejileri", desc: "B2B/B2C iş modelleri ve dinamik fiyatlandırma algoritmaları" },
        ],
    },
    {
        id: "spatial",
        label: "D. Mekansal (Niş)",
        accent: "#22d3ee",
        icon: Map,
        skills: [
            { icon: Map, name: "Coğrafi Bilgi Sistemleri", desc: "Konumsal verinin analizi, haritalandırılması ve DB entegrasyonu" },
            { icon: Satellite, name: "Uzaktan Algılama", desc: "Uydu görüntüleri ve mekansal veriler üzerinden analiz yetkinliği" },
        ],
    },
];

/* ─────────── Grid Item ─────────── */
/* ─────────── Grid Item ─────────── */
const mergeVariants = {
    hidden: (i: number) => {
        const isLeft = i % 2 === 0;
        const isTop = i < 2;
        return {
            x: isLeft ? "40%" : "-40%",
            y: isTop ? "40%" : "-40%",
            opacity: 0,
            scale: 0.5,
        };
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 350, damping: 35 }
    },
    exit: (i: number) => {
        const isLeft = i % 2 === 0;
        const isTop = i < 2;
        return {
            x: isLeft ? "40%" : "-40%",
            y: isTop ? "40%" : "-40%",
            opacity: 0,
            scale: 0.5,
            transition: { type: "spring" as const, stiffness: 350, damping: 35 }
        };
    }
};

function MergeableGridItem({
    card,
    index,
    isDimmed,
    onHover,
}: {
    card: typeof cards[0];
    index: number;
    isDimmed: boolean;
    onHover: () => void;
}) {
    return (
        <motion.div
            custom={index}
            variants={mergeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={onHover}
            style={{ borderRadius: 14, cursor: "default" }}
            className={`relative overflow-hidden w-full h-full pointer-events-auto transition-opacity duration-300 ${isDimmed ? "opacity-30" : ""}`}
        >
            <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover saturate-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between">
                <div>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{card.subtitle}</p>
                    <h3 className="text-white text-sm font-bold leading-tight">{card.title}</h3>
                </div>
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white shrink-0"
                    style={{ boxShadow: `0 0 12px ${card.accent}44` }}
                >
                    <Plus className="w-4 h-4 opacity-60" />
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────── Detail Panel ─────────── */
function DetailPanel({
    card,
    onClose,
}: {
    card: typeof cards[0];
    onClose: () => void;
}) {
    const Icon = card.icon;

    return (
        <div
            style={{ borderRadius: 20 }}
            className="relative overflow-hidden w-full h-full min-h-[520px]"
        >
            <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover saturate-[1.15] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

            <button
                onClick={onClose}
                className="absolute top-5 right-5 z-30 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 transition-colors opacity-40 hover:opacity-100"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${card.accent}22`, border: `1px solid ${card.accent}44` }}
                >
                    <Icon className="w-6 h-6" style={{ color: card.accent }} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
                    style={{ color: card.accent }}
                >
                    {card.subtitle}
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.27 }}
                    className="text-4xl font-black text-white mb-4 tracking-tight"
                >
                    {card.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 }}
                    className="text-white/75 text-sm leading-relaxed max-w-md mb-6"
                >
                    {card.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                >
                    {card.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: `${card.accent}22`, color: card.accent, border: `1px solid ${card.accent}33` }}
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

/* ─────────── T-Shaped Skills Panel ─────────── */
function TShapedSkills() {
    const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
    const active = skillCategories.find(c => c.id === activeCategory)!;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
        >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Uzmanlık</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2 leading-tight">
                Yetkinlik Alanları
            </h2>
            <p className="text-muted-foreground mb-10 text-base max-w-xl">
                T-Shaped bir profil: teknik derinlik ile kurumsal genişlik arasında köprü kuruyorum.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const isActive = cat.id === activeCategory;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                                ? "text-white shadow-lg"
                                : "bg-background text-muted-foreground border-border hover:border-primary/50"
                                }`}
                            style={isActive ? { background: cat.accent, borderColor: cat.accent } : {}}
                        >
                            <CatIcon className="w-4 h-4" />
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {/* Skills FlowingMenu */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="w-full mt-8"
                >
                    <div style={{ height: '400px', position: 'relative' }}>
                        <FlowingMenu 
                            items={active.skills.map((skill, idx) => ({
                                link: '#',
                                text: skill.name,
                                image: `https://picsum.photos/600/400?random=${idx + activeCategory.length * 10}`
                            }))}
                            speed={25}
                            textColor={active.accent}
                            bgColor="transparent"
                            marqueeBgColor={active.accent}
                            marqueeTextColor="#ffffff"
                            borderColor={`${active.accent}40`}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

/* ─────────── Bridge Persona ─────────── */
function BridgePersona() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 relative"
        >
            <div className="bg-primary rounded-3xl p-8 md:p-10 overflow-hidden relative">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Neden Farklıyım?</p>
                    <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-6 max-w-3xl">
                        "Teknolojiyi sadece bir araç değil, işletme hedeflerine ulaşmak için{" "}
                        <span className="text-primary font-semibold">stratejik bir kaldıraç</span> olarak görüyorum.
                        DEU YBS disipliniyle aldığım Sistem Analizi, Bilişim Hukuku ve Finansal Muhasebe eğitimlerimi;
                        Node.js, MySQL ve Yapay Zeka entegrasyonu konusundaki teknik tutkumla harmanlıyorum."
                    </blockquote>
                    <p className="text-white/60 text-base leading-relaxed max-w-3xl">
                        Benim için bir yazılım projesi; sadece çalışan bir kod yığını değil —{" "}
                        <span className="text-green-700 font-medium">yasalara (KVKK) uygun</span>,{" "}
                        <span className="text-blue-400 font-medium">maliyet etkinliği (Muhasebe/Finans) hesaplanmış</span> ve{" "}
                        <span className="text-purple-400 font-medium">kullanıcı ihtiyaçlarına (Sistem Analizi) tam yanıt veren</span>{" "}
                        bir iş çözümüdür.
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-xs font-bold">MZ</span>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Mehmet Zeycan Şener</p>
                            <p className="text-white/40 text-xs">Business Technology Architect · DEÜ YBS</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────── Main Section ─────────── */
const detailVariants = {
    hidden: { opacity: 0, scale: 0.6, borderRadius: "50%" },
    visible: { 
        opacity: 1, 
        scale: 1, 
        borderRadius: "20px",
        transition: { type: "spring" as const, stiffness: 350, damping: 35, delay: 0.05 } 
    },
    exit: { 
        opacity: 0, 
        scale: 0.6,
        borderRadius: "50%",
        transition: { type: "spring" as const, stiffness: 350, damping: 35 }
    }
};

export function AboutSkills() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const leftCards = cards.slice(0, 4);
    const rightCards = cards.slice(4, 8);

    const hoveredCard = cards.find((c) => c.id === hoveredId) ?? null;
    const isLeftHovered = hoveredCard ? leftCards.some((c) => c.id === hoveredId) : false;
    const isRightHovered = hoveredCard ? rightCards.some((c) => c.id === hoveredId) : false;

    return (
        <section id="about" className="py-24 relative bg-background overflow-hidden">
            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Profil</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                        Ben kimim?
                    </h2>
                    <p className="text-muted-foreground mt-3 text-base max-w-xl">
                        {hoveredId
                            ? "Detaylı görünümdesiniz."
                            : "Bir karta tıklayarak daha fazlasını keşfedin."}
                    </p>
                </motion.div>

                {/* 2x2 Morphing Grid Layout */}
                <div
                    className="flex md:flex-row flex-col gap-6 items-stretch min-h-[560px] w-full"
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* LEFT SIDE */}
                    <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[560px]">
                        {/* 4 Cards Grid */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 pointer-events-none">
                            <AnimatePresence>
                                {!isRightHovered && leftCards.map((card, i) => (
                                    <MergeableGridItem
                                        key={card.id}
                                        card={card}
                                        index={i}
                                        isDimmed={!!hoveredId && hoveredId !== card.id}
                                        onHover={() => setHoveredId(card.id)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                        {/* Morphed Detail Panel */}
                        <AnimatePresence>
                            {isRightHovered && hoveredCard && (
                                <motion.div
                                    key="left-detail"
                                    variants={detailVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full pointer-events-auto z-10"
                                >
                                    <DetailPanel card={hoveredCard} onClose={() => setHoveredId(null)} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[560px]">
                        {/* 4 Cards Grid */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 pointer-events-none">
                            <AnimatePresence>
                                {!isLeftHovered && rightCards.map((card, i) => (
                                    <MergeableGridItem
                                        key={card.id}
                                        card={card}
                                        index={i}
                                        isDimmed={!!hoveredId && hoveredId !== card.id}
                                        onHover={() => setHoveredId(card.id)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                        {/* Morphed Detail Panel */}
                        <AnimatePresence>
                            {isLeftHovered && hoveredCard && (
                                <motion.div
                                    key="right-detail"
                                    variants={detailVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full pointer-events-auto z-10"
                                >
                                    <DetailPanel card={hoveredCard} onClose={() => setHoveredId(null)} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bridge Persona */}
                <BridgePersona />

                {/* T-Shaped Skills */}
                <TShapedSkills />
            </div>
        </section>
    );
}
