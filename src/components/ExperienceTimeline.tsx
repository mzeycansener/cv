"use client";

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Globe, X } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Highlight {
    label: string;
    value: string;
}

interface LocalizedString {
    tr: string;
    en: string;
}

interface LocalizedHighlights {
    tr: Highlight[];
    en: Highlight[];
}

interface LocalizedTags {
    tr: string[];
    en: string[];
}

interface TimelineItem {
    id: number;
    type: "experience" | "education" | "personal";
    icon: React.ReactNode;
    date: LocalizedString;
    title: LocalizedString;
    organization: LocalizedString;
    image: string;
    description: LocalizedString;
    badges: LocalizedTags;
    highlights: LocalizedHighlights;
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        type: "experience",
        icon: <Briefcase className="w-5 h-5" />,
        date: { tr: "2024 - Günümüz", en: "2024 - Present" },
        title: { tr: "YBS Uzmanı & Full-Stack", en: "MIS Specialist & Full-Stack" },
        organization: { tr: "Freelance", en: "Freelance" },
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
        description: { 
            tr: "Node.js ve JavaScript ile ölçeklenebilir backend sistemleri kuruyorum.",
            en: "Building scalable backend systems with Node.js and JavaScript."
        },
        badges: { 
            tr: ["Node.js", "MySQL", "System Analysis"],
            en: ["Node.js", "MySQL", "System Analysis"]
        },
        highlights: { tr: [], en: [] }
    },
    {
        id: 2,
        type: "education",
        icon: <GraduationCap className="w-5 h-5" />,
        date: { tr: "2022 - Günümüz", en: "2022 - Present" },
        title: { tr: "Yönetim Bilişim Sistemleri (YBS)", en: "Management Information Systems (MIS)" },
        organization: { tr: "Dokuz Eylül Üniversitesi", en: "Dokuz Eylul University" },
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
        description: {
            tr: "T-Shaped bir profil inşa ediyorum: teknik derinlik ile kurumsal genişlik arasında köprü kurarak iş teknolojileri mimarisi yaklaşımını benimsiyorum.",
            en: "Building a T-Shaped profile: bridging technical depth with corporate breadth, adopting a business technology architecture approach."
        },
        badges: {
            tr: ["YBS", "DEÜ İşletme Fakültesi", "2022-Günümüz"],
            en: ["MIS", "DEU Faculty of Business", "2022-Present"]
        },
        highlights: {
            tr: [
                { label: "Analitik Temel", value: "İstatistik I-II · Matematik I-II" },
                { label: "Teknik Odak", value: "Veritabanı · Nesneye Yönelik Programlama" },
                { label: "İşletme Vizyonu", value: "Ekonomi · Pazarlama · İnsan Kaynakları" }
            ],
            en: [
                { label: "Analytical Core", value: "Statistics I-II · Mathematics I-II" },
                { label: "Technical Focus", value: "Database · Object-Oriented Programming" },
                { label: "Business Vision", value: "Economics · Marketing · Human Resources" }
            ]
        }
    },
    {
        id: 3,
        type: "personal",
        icon: <Globe className="w-5 h-5" />,
        date: { tr: "Kişisel Profil", en: "Personal Profile" },
        title: { tr: "Sosyal Profil & Kişisel Disiplin", en: "Social Profile & Personal Discipline" },
        organization: { tr: "Karakter Analizi", en: "Character Analysis" },
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1000",
        description: {
            tr: "Teknik yetkinliğimin yanında kişisel disiplin ve yaratıcılıkla kendimi geliştiriyorum.",
            en: "Alongside my technical competence, I develop myself with personal discipline and creativity."
        },
        badges: {
            tr: ["İngilizce", "İspanyolca", "AFDOS"],
            en: ["English", "Spanish", "AFDOS"]
        },
        highlights: {
            tr: [
                { label: "Dil & İletişim", value: "İleri Seviye İngilizce · Gelişmekte Olan İspanyolca" },
                { label: "Doğa & Macera", value: "AFDOS bünyesinde doğa sporları ve kampçılık" },
                { label: "Müzik", value: "Bas gitar ile ritim ve takım içi uyum becerisi" }
            ],
            en: [
                { label: "Language & Comms", value: "Advanced English · Developing Spanish" },
                { label: "Nature & Adventure", value: "Outdoor sports and camping at AFDOS" },
                { label: "Music", value: "Rhythm and teamwork skills via bass guitar" }
            ]
        }
    }
];

export function ExperienceTimeline() {
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
    const { language } = useLanguage();

    const t = {
        tr: { highlightsTitle: "Öne Çıkanlar", keywordsTitle: "Anahtar Kelimeler" },
        en: { highlightsTitle: "Highlights", keywordsTitle: "Keywords" }
    }[language];

    const convertedData = timelineData.map((item) => ({
        title: item.date[language],
        content: (
            <div key={item.id} className="mb-8">
                <motion.div
                    layoutId={`timeline-card-${item.id}`}
                    onClick={() => setSelectedItem(item)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden"
                >
                    <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                    />
                    
                    <GlassCard className="p-6 relative z-10 border border-primary/10 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">{item.title[language]}</h3>
                                <p className="text-sm text-primary font-medium">{item.organization[language]}</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                            {item.description[language]}
                        </p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.badges[language].slice(0, 3).map((badge, idx) => (
                                <span key={idx} className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                                    {badge}
                                </span>
                            ))}
                            {item.badges[language].length > 3 && (
                                <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                                    +{item.badges[language].length - 3}
                                </span>
                            )}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        )
    }));

    return (
        <section id="experience" className="py-24 bg-muted/30 relative">
            <Timeline data={convertedData} />

            <AnimatePresence>
                {selectedItem && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-white/80 backdrop-blur-md z-50"
                        />
                        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 pointer-events-none">
                            <motion.div
                                layoutId={`timeline-card-${selectedItem.id}`}
                                className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#f4eee0] rounded-3xl shadow-2xl pointer-events-auto flex flex-col relative"
                            >
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-red-500 hover:text-white backdrop-blur-md transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="h-48 sm:h-64 relative w-full overflow-hidden shrink-0">
                                    <img 
                                        src={selectedItem.image} 
                                        alt={selectedItem.title[language]}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                                    
                                    <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
                                        <div className="p-3 rounded-xl bg-primary/20 text-primary backdrop-blur-md border border-primary/30 hidden sm:block">
                                            {selectedItem.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold backdrop-blur-md">
                                                    {selectedItem.date[language]}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                                                {selectedItem.title[language]}
                                            </h2>
                                            <p className="text-primary font-medium">{selectedItem.organization[language]}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 flex-1">
                                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-8">
                                        {selectedItem.description[language]}
                                    </p>

                                    {selectedItem.highlights[language] && selectedItem.highlights[language].length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                                                {t.highlightsTitle}
                                            </h4>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                {selectedItem.highlights[language].map((highlight, idx) => (
                                                    <div key={idx} className="bg-muted/50 p-4 rounded-xl">
                                                        <span className="block text-primary text-xs font-bold mb-1">
                                                            {highlight.label}
                                                        </span>
                                                        <span className="text-sm font-medium text-foreground/80">
                                                            {highlight.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                                            {t.keywordsTitle}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.badges[language].map((badge, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
