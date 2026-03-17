"use client";

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Globe, X } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

interface Highlight {
    label: string;
    value: string;
}

interface TimelineItem {
    id: number;
    type: "experience" | "education" | "personal";
    icon: React.ReactNode;
    date: string;
    title: string;
    organization: string;
    image: string;
    description: string;
    badges: string[];
    highlights: Highlight[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        type: "experience",
        icon: <Briefcase className="w-5 h-5" />,
        date: "2024 - Günümüz",
        title: "YBS Uzmanı & Full-Stack",
        organization: "Freelance",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
        description: "Node.js ve JavaScript ile ölçeklenebilir backend sistemleri kuruyorum.",
        badges: ["Node.js", "MySQL", "System Analysis"],
        highlights: []
    },
    {
        id: 2,
        type: "education",
        icon: <GraduationCap className="w-5 h-5" />,
        date: "2022 - Günümüz",
        title: "Yönetim Bilişim Sistemleri (YBS)",
        organization: "Dokuz Eylül Üniversitesi",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
        description: "T-Shaped bir profil inşa ediyorum: teknik derinlik ile kurumsal genişlik arasında köprü kurarak iş teknolojileri mimarisi yaklaşımını benimsiyorum.",
        badges: ["YBS", "DEÜ İşletme Fakültesi", "2022-Günümüz"],
        highlights: [
            { label: "Analitik Temel", value: "İstatistik I-II · Matematik I-II" },
            { label: "Teknik Odak", value: "Veritabanı · Nesneye Yönelik Programlama" },
            { label: "İşletme Vizyonu", value: "Ekonomi · Pazarlama · İnsan Kaynakları" }
        ]
    },
    {
        id: 3,
        type: "personal",
        icon: <Globe className="w-5 h-5" />,
        date: "Kişisel Profil",
        title: "Sosyal Profil & Kişisel Disiplin",
        organization: "Karakter Analizi",
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1000",
        description: "Teknik yetkinliğimin yanında kişisel disiplin ve yaratıcılıkla kendimi geliştiriyorum.",
        badges: ["İngilizce", "İspanyolca", "AFDOS"],
        highlights: [
            { label: "Dil & İletişim", value: "İleri Seviye İngilizce · Gelişmekte Olan İspanyolca" },
            { label: "Doğa & Macera", value: "AFDOS bünyesinde doğa sporları ve kampçılık" },
            { label: "Müzik", value: "Bas gitar ile ritim ve takım içi uyum becerisi" }
        ]
    }
];

export function ExperienceTimeline() {
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

    // Timeline bileşenine göndereceğimiz format
    const convertedData = timelineData.map((item) => ({
        title: item.date,
        content: (
            <div key={item.id} className="mb-8">
                <motion.div
                    layoutId={`timeline-card-${item.id}`}
                    onClick={() => setSelectedItem(item)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden"
                >
                    {/* Normal görünümde ince bir arka plan resmi efekti (opsiyonel) */}
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
                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm text-primary font-medium">{item.organization}</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                            {item.description}
                        </p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.badges.slice(0, 3).map((badge, idx) => (
                                <span key={idx} className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                                    {badge}
                                </span>
                            ))}
                            {item.badges.length > 3 && (
                                <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                                    +{item.badges.length - 3}
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

            {/* Genişletilmiş Görünüm (Modal) */}
            <AnimatePresence>
                {selectedItem && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                        />
                        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 pointer-events-none">
                            <motion.div
                                layoutId={`timeline-card-${selectedItem.id}`}
                                className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl pointer-events-auto flex flex-col relative"
                            >
                                {/* Kapat Butonu */}
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Hero Image */}
                                <div className="h-48 sm:h-64 relative w-full overflow-hidden shrink-0">
                                    <img 
                                        src={selectedItem.image} 
                                        alt={selectedItem.title}
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
                                                    {selectedItem.date}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                                                {selectedItem.title}
                                            </h2>
                                            <p className="text-primary font-medium">{selectedItem.organization}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex-1">
                                    <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-8">
                                        {selectedItem.description}
                                    </p>

                                    {selectedItem.highlights && selectedItem.highlights.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                                                Öne Çıkanlar
                                            </h4>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                {selectedItem.highlights.map((highlight, idx) => (
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
                                            Anahtar Kelimeler
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.badges.map((badge, idx) => (
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
