"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { FlowingMenu } from "./ui/FlowingMenu";
import {
    X, Plus, Database, Code2, PenTool, Lightbulb, PieChart, GraduationCap, Guitar,
    Server, GitBranch, Globe, BarChart3, Cpu, Brain, Scale, ShoppingCart, Map, Satellite,
    Layers, Zap, Shield, Search, Terminal, Layout, MousePointer2, Settings, Box, 
    BarChart, Activity, Lock, Share2, Hexagon, Component, LucideIcon
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { cards, skillCategories, SkillCategory, SkillItem, TechItem, SkillStat } from "@/data/aboutData";

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
    const { language } = useLanguage();

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
                alt={card.title[language]}
                className="absolute inset-0 w-full h-full object-cover saturate-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between">
                <div>
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{card.subtitle[language]}</p>
                    <h3 className="text-white text-sm font-bold leading-tight">{card.title[language]}</h3>
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
    const { language } = useLanguage();

    return (
        <div
            style={{ borderRadius: 20 }}
            className="relative overflow-hidden w-full h-full min-h-[520px]"
        >
            <img
                src={card.image}
                alt={card.title[language]}
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
                    {card.subtitle[language]}
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.27 }}
                    className="text-4xl font-black text-white mb-4 tracking-tight"
                >
                    {card.title[language]}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 }}
                    className="text-white/75 text-sm leading-relaxed max-w-md mb-6"
                >
                    {card.description[language]}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                >
                    {card.tags[language].map((tag: string) => (
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
    const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
    const { language } = useLanguage();

    const active = skillCategories.find(c => c.id === activeCategory)!;
    const selectedSkill = active.skills[selectedSkillIndex] || active.skills[0];

    const BGIcon = selectedSkill.bgIcon || selectedSkill.icon;

    const handleCategoryChange = (id: string) => {
        setActiveCategory(id);
        setSelectedSkillIndex(0);
    };

    const t = {
        tr: {
            expertise: "Uzmanlık",
            areas: "Yetkinlik Alanları",
            desc: "T-Shaped bir profil: teknik derinlik ile kurumsal genişlik arasında köprü kuruyorum.",
            skillsUnder: "altındaki beceriler",
            explore: "TIKLA · KEŞFEDİN"
        },
        en: {
            expertise: "Expertise",
            areas: "Competency Areas",
            desc: "A T-Shaped profile: bridging technical depth with corporate breadth.",
            skillsUnder: "skills under",
            explore: "CLICK · DISCOVER"
        }
    }[language];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
        >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">{t.expertise}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2 leading-tight">
                {t.areas}
            </h2>
            <p className="text-muted-foreground mb-10 text-base max-w-xl">
                {t.desc}
            </p>

            {/* Category tabs — Segmented pill design */}
            <div className="inline-flex bg-secondary/40 backdrop-blur-md border border-border/40 rounded-2xl p-1.5 flex-wrap gap-1 mb-10 shadow-inner">
                {skillCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const isActive = cat.id === activeCategory;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                isActive
                                    ? "text-white shadow-lg"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/40"
                            }`}
                            style={isActive ? { background: `linear-gradient(135deg, ${cat.accent}ee, ${cat.accent}99)`, boxShadow: `0 4px 14px -4px ${cat.accent}66` } : {}}
                        >
                            <CatIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                            {cat.label[language]}
                        </button>
                    );
                })}
            </div>

            {/* Layout Container */}
            <div className="grid md:grid-cols-12 gap-6 items-stretch">
                {/* Details Section */}
                <div className="md:col-span-6 flex">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory}-${selectedSkillIndex}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full flex flex-col rounded-[32px] overflow-hidden shadow-xl border border-border/30"
                            style={{ background: `linear-gradient(160deg, #f9f6f0 0%, #eef4f0 100%)` }}
                        >
                            {/* Header with accent color */}
                            <div
                                className="relative h-52 flex flex-col items-center justify-center overflow-hidden px-8"
                                style={{ background: `linear-gradient(135deg, ${active.accent}18 0%, ${active.accent}08 100%)` }}
                            >
                                {/* Background glow */}
                                <div
                                    className="absolute inset-0 blur-[80px] opacity-20"
                                    style={{ background: `radial-gradient(circle at 40% 50%, ${active.accent} 0%, transparent 70%)` }}
                                />
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border"
                                    style={{
                                        background: `${active.accent}18`,
                                        borderColor: `${active.accent}30`,
                                        boxShadow: `0 8px 24px -8px ${active.accent}44`
                                    }}
                                >
                                    <BGIcon className="w-7 h-7" style={{ color: active.accent }} />
                                </motion.div>
                                <motion.h3
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 }}
                                    className="text-2xl font-black text-foreground tracking-tight text-center mb-1"
                                >
                                    {selectedSkill.name[language]}
                                </motion.h3>
                                <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: active.accent }}>
                                    {active.label[language]}
                                </p>
                            </div>

                            {/* Body */}
                            <div className="flex-1 px-8 py-6">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.25 }}
                                    className="text-foreground/75 text-sm leading-relaxed text-center mb-7"
                                >
                                    {selectedSkill.longDesc[language]}
                                </motion.p>

                                {/* Tech Stack */}
                                <div className="flex justify-center flex-wrap gap-6">
                                    {selectedSkill.techStack.map((tech: TechItem, i: number) => (
                                        <div key={i} className="flex flex-col items-center gap-2 group/tech">
                                            <div
                                                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 bg-white border border-border/40 group-hover/tech:scale-110"
                                                style={{ boxShadow: `0 4px 12px -4px ${active.accent}22` }}
                                            >
                                                <tech.icon className="w-5 h-5" style={{ color: active.accent }} />
                                            </div>
                                            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.18em] group-hover/tech:text-primary transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats footer */}
                            <div
                                className="grid grid-cols-3 border-t"
                                style={{ borderColor: `${active.accent}20`, background: `${active.accent}07` }}
                            >
                                {selectedSkill.stats.map((stat: SkillStat, i: number) => (
                                    <div key={i} className={`py-5 px-4 text-center ${i < 2 ? 'border-r' : ''}`} style={{ borderColor: `${active.accent}20` }}>
                                        <p className="text-[9px] font-black uppercase tracking-[0.25em] mb-1" style={{ color: `${active.accent}99` }}>
                                            {stat.label}
                                        </p>
                                        <p className="text-xl font-black text-foreground" style={{ textShadow: `0 0 20px ${active.accent}33` }}>
                                            {stat.value}
                                        </p>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">
                                            {stat.subValue}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Skills FlowingMenu */}
                <div className="md:col-span-6">
                    <div className="mb-3 flex items-center justify-between px-2">
                        <p className="text-xs font-medium text-muted-foreground">
                            {language === 'tr' ? `${active.label[language]} ${t.skillsUnder}` : `${t.skillsUnder} ${active.label[language]}`}
                        </p>
                        <div className="flex items-center gap-1.5">
                            <MousePointer2 className="w-3 h-3 animate-bounce" style={{ color: active.accent }} />
                            <p className="text-[10px] font-bold tracking-widest" style={{ color: active.accent }}>
                                {t.explore}
                            </p>
                        </div>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                style={{ height: '450px', position: 'relative', borderRadius: 32, overflow: 'hidden',
                                    background: `linear-gradient(160deg, #f9f6f0 0%, ${active.accent}10 100%)`,
                                    border: `1px solid ${active.accent}25`,
                                    boxShadow: `0 8px 32px -8px ${active.accent}22`
                                }}
                            >
                                <FlowingMenu
                                    items={active.skills.map((skill, idx) => ({
                                        link: '#',
                                        text: skill.name[language],
                                        image: `https://images.unsplash.com/photo-${[
                                            "1555066931-4365d14bab8c",
                                            "1551033406-611cf9a28f67",
                                            "1517694712202-14dd9538aa97",
                                            "1519389950473-47ba0277781c",
                                        ][idx % 4]}?q=80&w=600&auto=format&fit=crop`
                                    }))}
                                    onItemClick={(index) => setSelectedSkillIndex(index)}
                                    // @ts-ignore
                                    speed={25}
                                    textColor={active.accent}
                                    bgColor="transparent"
                                    marqueeBgColor={active.accent}
                                    marqueeTextColor="#ffffff"
                                    borderColor={`${active.accent}20`}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────── Bridge Persona ─────────── */
function BridgePersona() {
    const { language } = useLanguage();

    const text = {
        tr: {
            title: "Hakkımda",
            p1_1: "Dokuz Eylül Üniversitesi Yönetim Bilişim Sistemleri 3. sınıf öğrencisi olarak, teknolojiyi işletme stratejileriyle harmanlayan ",
            p1_2: "multidisipliner bir yaklaşımı",
            p1_3: " benimsiyorum. Node.js, JavaScript ve MySQL tabanlı backend mimarilerini; Yöneylem Araştırması, Karar Destek Sistemleri ve Bilişim Hukuku gibi akademik disiplinlerle birleştirerek sadece kod üretmekle kalmıyor, aynı zamanda ",
            p1_4: "maliyet etkinliği",
            p1_5: " ve ",
            p1_6: "yasal uyumluluğu",
            p1_7: " gözetilen ",
            p1_8: "stratejik iş çözümleri",
            p1_9: " tasarlıyorum.",
            p2_1: "Özellikle Coğrafi Bilgi Sistemleri (CBS) ve Gemini API gibi yapay zeka entegrasyonları üzerine yoğunlaşarak ",
            p2_2: "veriyi anlamlı içgörülere",
            p2_3: " dönüştürürken; ileri seviye İngilizcem, gelişmekte olan İspanyolcam ve hobilerimden gelen kişisel disiplinimle teknik ekipler ile yönetim arasında ",
            p2_4: "güçlü bir iletişim köprüsü",
            p2_5: " kurmayı hedefliyorum."
        },
        en: {
            title: "About Me",
            p1_1: "As a 3rd-year Management Information Systems student at Dokuz Eylül University, I adopt a ",
            p1_2: "multidisciplinary approach",
            p1_3: " blending technology with business strategies. By integrating Node.js, JavaScript, and MySQL backend architectures with academic disciplines like Operations Research, Decision Support Systems, and IT Law, I don't just write code—I design ",
            p1_4: "cost-effective",
            p1_5: " and ",
            p1_6: "legally compliant",
            p1_7: " ",
            p1_8: "strategic business solutions.",
            p1_9: "",
            p2_1: "By focusing particularly on Geographic Information Systems (GIS) and AI integrations like the Gemini API, I transform ",
            p2_2: "data into meaningful insights",
            p2_3: ". Supported by my advanced English, developing Spanish, and the personal discipline gained from my hobbies, I aim to build a ",
            p2_4: "strong communication bridge",
            p2_5: " between technical teams and management."
        }
    }[language];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 relative"
        >
            <div className="rounded-3xl p-8 md:p-10 overflow-hidden relative"
                style={{ background: 'linear-gradient(135deg, #1e3f22 0%, #2d6a4f 100%)' }}
            >
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #52b788 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #40916c 0%, transparent 70%)' }} />

                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#95d5b2' }}>{text.title}</p>
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-6 max-w-4xl">
                        {text.p1_1}
                        <span className="font-bold" style={{ color: '#95d5b2' }}>{text.p1_2}</span>{text.p1_3}
                        <span className="font-medium" style={{ color: '#74c69d' }}>{text.p1_4}</span>{text.p1_5}<span className="font-medium" style={{ color: '#52b788' }}>{text.p1_6}</span>{text.p1_7}
                        <span className="font-bold" style={{ color: '#95d5b2' }}>{text.p1_8}</span>{text.p1_9}
                    </p>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-4xl font-light">
                        {text.p2_1}
                        <span className="text-white/90 font-medium">{text.p2_2}</span>{text.p2_3}
                        <span className="font-bold" style={{ color: '#95d5b2' }}>{text.p2_4}</span>{text.p2_5}
                    </p>
                    <div className="mt-6 pt-6 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#2d6a4f' }}>
                            <span className="text-white text-xs font-bold">MZ</span>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">Mehmet Zeycan Şener</p>
                            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Business Technology Architect · DEÜ YBS</p>
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
    const { language } = useLanguage();

    const leftCards = cards.slice(0, 4);
    const rightCards = cards.slice(4, 8);

    const hoveredCard = cards.find((c) => c.id === hoveredId) ?? null;
    const isLeftHovered = hoveredCard ? leftCards.some((c) => c.id === hoveredId) : false;
    const isRightHovered = hoveredCard ? rightCards.some((c) => c.id === hoveredId) : false;

    const t = {
        tr: {
            profile: "Profil",
            whoami: "Ben kimim?",
            detailed: "Detaylı görünümdesiniz.",
            explore: "Bir karta tıklayarak daha fazlasını keşfedin."
        },
        en: {
            profile: "Profile",
            whoami: "Who am I?",
            detailed: "Detailed view active.",
            explore: "Click a card to discover more."
        }
    }[language];

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
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">{t.profile}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                        {t.whoami}
                    </h2>
                    <p className="text-muted-foreground mt-3 text-base max-w-xl">
                        {hoveredId
                            ? t.detailed
                            : t.explore}
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
