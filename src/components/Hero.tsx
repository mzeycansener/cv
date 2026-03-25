"use client";

import { motion } from "framer-motion";
import { AnimatedRoles } from "./AnimatedRoles";
import { Button } from "./ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { language } = useLanguage();

    const content = {
        tr: {
            title1: "Kod ile Stratejiyi,",
            titleHighlight: "Veri ile Kararı",
            title2: "Birleştiriyorum.",
            description: "Dokuz Eylül Üniversitesi Yönetim Bilişim Sistemleri öğrencisi olarak; karmaşık backend mimarileri kuruyor, yöneylem modelleriyle süreçleri optimize ediyor ve bilişim hukukundan finansa kadar kurumsal perspektifle projeler geliştiriyorum.",
            viewWork: "Projelerimi Gör",
            downloadCV: "Özgeçmişi İndir"
        },
        en: {
            title1: "Bridging Strategy with Code,",
            titleHighlight: "and Decisions with Data.",
            title2: "",
            description: "As a Management Information Systems student at Dokuz Eylül University; I build complex backend architectures, optimize processes with operational research models, and develop projects with a corporate perspective ranging from IT law to finance.",
            viewWork: "View My Work",
            downloadCV: "Download CV"
        }
    };

    const t = content[language];

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background Decorative Elements - using opacity-only for GPU compositing */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                        className="flex flex-col space-y-6"
                    >

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            {t.title1}{" "}<span className="text-primary">{t.titleHighlight}</span>{" "}{t.title2}
                        </h1>

                        <p className="text-base md:text-lg text-foreground/70 font-medium max-w-lg leading-relaxed border-l-4 border-primary/40 pl-4 italic">
                            Mehmet Zeycan Şener — Business Technology Architect
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mt-4">
                            {t.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <a href="#projects" className="contents">
                                <Button size="lg" className="group">
                                    {t.viewWork}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                            <Button variant="outline" size="lg" className="group">
                                {t.downloadCV}
                                <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Profile Picture / Image Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="relative lg:h-[650px] w-full hidden lg:flex items-center justify-center p-8"
                    >
                        {/* Decorative Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 w-full max-w-[450px] aspect-[3/4] group">
                            {/* Animated Border Frame */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-green-700 to-secondary opacity-15 group-hover:opacity-30 blur-sm transition-opacity duration-700" />
                            
                            {/* Main Image Container */}
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm bg-white/5">
                                {/* Ambient Background Gradient inside card */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 pointer-events-none" />
                                
                                <Image
                                    src="/profile.jpg"
                                    alt="Mehmet Zeycan Şener"
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                                />

                                {/* Light Sweep Effect */}
                                <div className="absolute inset-0 z-20 pointer-events-none">
                                    <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
