"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

const projects = [
    {
        title: "AI-Powered BI Dashboard",
        description: "Built a real-time analytics dashboard using Next.js and PostgreSQL, providing predictive insights via a Python DSS backend.",
        image: "bg-gradient-to-br from-emerald-400/20 to-cyan-500/20",
        tags: ["React", "PostgreSQL", "Python", "Business Intel"],
        link: "#",
        github: "#",
        colSpan: "col-span-1 lg:col-span-2",
    },
    {
        title: "E-Commerce Rebrand",
        description: "Complete UI/UX overhaul and brand identity redesign for a major local retailer, leading to a 40% conversion increase.",
        image: "bg-gradient-to-br from-purple-400/20 to-pink-500/20",
        tags: ["Figma", "Branding", "UI/UX"],
        link: "#",
        github: null,
        colSpan: "col-span-1 lg:col-span-1",
    },
    {
        title: "Scalable Data Pipeline",
        description: "Architected a high-throughput data pipeline using Apache Kafka and Redis for real-time order processing.",
        image: "bg-gradient-to-br from-amber-400/20 to-orange-500/20",
        tags: ["Architecture", "Database", "Redis"],
        link: null,
        github: "#",
        colSpan: "col-span-1 lg:col-span-1",
    },
    {
        title: "Corporate Strategy App",
        description: "A specialized internal tool developed for C-level executives to track KPIs and simulate business growth scenarios.",
        image: "bg-gradient-to-br from-blue-400/20 to-indigo-500/20",
        tags: ["Next.js", "DSS", "Strategy"],
        link: "#",
        github: "#",
        colSpan: "col-span-1 lg:col-span-2",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">A selection of projects that demonstrate my ability to merge complex coding architecture with premium design and business strategy.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`group relative ${project.colSpan}`}
                        >
                            <GlassCard className="h-full flex flex-col justify-between overflow-hidden p-0 border border-border/50 bg-white/40 hover:bg-white/60 transition-colors">
                                {/* Image Placeholder with Gradients */}
                                <div className={`w-full h-48 relative overflow-hidden ${project.image}`}>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                    <motion.div
                                        className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        style={{ backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)" }}
                                    />
                                </div>

                                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative z-10 bg-white/50 backdrop-blur-xl border-t border-white/20">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="border-primary/20 bg-primary/5">{tag}</Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                            {project.link && (
                                                <Button size="sm" variant="primary" className="gap-2 cursor-none">
                                                    <ExternalLink className="h-4 w-4" /> Live Demo
                                                </Button>
                                            )}
                                            {project.github && (
                                                <Button size="sm" variant="ghost" className="gap-2 cursor-none">
                                                    <Github className="h-4 w-4" /> Code
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
