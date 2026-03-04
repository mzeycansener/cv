"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-primary/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s Work Together</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you need a full-stack developer, a UX/UI redesign, or strategic data solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col space-y-8 justify-center"
                    >
                        <GlassCard hoverEffect={false} className="border-none shadow-none bg-transparent p-0">
                            <div className="flex items-center space-x-6 mb-8 group">
                                <div className="bg-white/50 p-4 rounded-xl border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                                    <Mail className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                                    <a href="mailto:hello@zeynel.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors">hello@zeynel.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 mb-8 group">
                                <div className="bg-white/50 p-4 rounded-xl border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                                    <Phone className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                                    <a href="tel:+905555555555" className="text-xl font-bold text-foreground hover:text-primary transition-colors">+90 (555) 555 55 55</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 group">
                                <div className="bg-white/50 p-4 rounded-xl border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">Location</p>
                                    <p className="text-xl font-bold text-foreground">Istanbul, Turkey</p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <GlassCard className="bg-white/70">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/60 cursor-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/60 cursor-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground/60 cursor-none"
                                        placeholder="Tell me about your project requirements..."
                                    />
                                </div>

                                <Button className="w-full py-6 text-lg">
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
