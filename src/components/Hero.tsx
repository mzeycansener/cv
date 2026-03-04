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

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            Hello, I&apos;m <span className="text-primary">Zeynel</span> 👋
                        </h1>

                        <div className="flex items-center space-x-2 text-3xl md:text-5xl font-semibold text-foreground/80 h-16">
                            <span>I am a</span>
                            <AnimatedRoles />
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mt-4">
                            I bridge the gap between design, code, data, and business strategy to build impactful, scalable solutions.
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

                    {/* Abstract Hero Graphic / Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="relative lg:h-[600px] w-full hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl border border-white/50 shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            {/* Complex Abstract Shape to represent code & design */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,var(--color-primary)_0%,var(--color-secondary)_50%,transparent_100%)] opacity-20"
                            />
                            <div className="relative z-10 w-full h-full glass m-6 rounded-2xl p-8 flex flex-col justify-end">
                                <div className="w-1/2 h-4 bg-primary/20 rounded-full mb-3" />
                                <div className="w-3/4 h-4 bg-primary/20 rounded-full mb-3" />
                                <div className="w-2/3 h-4 bg-primary/20 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
