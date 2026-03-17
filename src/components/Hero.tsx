"use client";

import { motion } from "framer-motion";
import { AnimatedRoles } from "./AnimatedRoles";
import { Button } from "./ui/Button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                            Open to Work
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Kod ile Stratejiyi,{" "}<span className="text-primary">Veri ile Kararı</span>{" "}Birleştiriyorum.
                        </h1>

                        <p className="text-base md:text-lg text-foreground/70 font-medium max-w-lg leading-relaxed border-l-4 border-primary/40 pl-4 italic">
                            Mehmet Zeycan Şener — Business Technology Architect
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mt-4">
                            Dokuz Eylül Üniversitesi Yönetim Bilişim Sistemleri öğrencisi olarak; karmaşık backend mimarileri kuruyor, yöneylem modelleriyle süreçleri optimize ediyor ve bilişim hukukundan finansa kadar kurumsal perspektifle projeler geliştiriyorum.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-6">
                            <Button size="lg" className="group">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" size="lg" className="group">
                                Download CV
                                <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Profile Picture / Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
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
                                
                                <img
                                    src="/profile.jpg"
                                    alt="Mehmet Zeycan Şener"
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                                />

                                {/* Light Sweep Effect */}
                                <div className="absolute inset-0 z-20 pointer-events-none">
                                    <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-white/20 animate-ping" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
