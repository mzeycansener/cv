"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { Database, Code2, PenTool, Lightbulb, PieChart } from "lucide-react";

const skills = [
    {
        title: "Grafik Tasarım",
        icon: <PenTool className="h-6 w-6 text-primary" />,
        description: "Creating visually stunning, user-centric designs and brand identities.",
        tags: ["Figma", "Adobe CC", "UI/UX", "Brand Strategy"],
        size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
        title: "Kodlama",
        icon: <Code2 className="h-6 w-6 text-primary" />,
        description: "Building scalable, high-performance web applications.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        size: "col-span-1 md:col-span-1 row-span-2",
    },
    {
        title: "Veritabanı Yönetimi",
        icon: <Database className="h-6 w-6 text-primary" />,
        description: "Designing efficient schemas and managing complex data architectures.",
        tags: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
        size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
        title: "KDS (DSS)",
        icon: <Lightbulb className="h-6 w-6 text-primary" />,
        description: "Creating Decision Support Systems for data-driven strategies.",
        tags: ["Data Mining", "BI Tools", "Predictive Models"],
        size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
        title: "İşletme Yetisi",
        icon: <PieChart className="h-6 w-6 text-primary" />,
        description: "Translating technical capabilities into measurable business value.",
        tags: ["Agile", "Strategy", "Leadership"],
        size: "col-span-1 md:col-span-2 row-span-1",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function AboutSkills() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white/50 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        The <span className="text-primary">YBS</span> Advantage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl"
                    >
                        Management Information Systems (YBS) uniquely positions me at the intersection of technology and business. Here&apos;s how I bring value across all domains.
                    </motion.p>
                </div>

                <motion.div
                    variants={container as any}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
                >
                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={item as any} className={skill.size}>
                            <GlassCard className="h-full w-full flex flex-col hover:border-primary/30 transition-colors">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{skill.title}</h3>
                                <p className="text-muted-foreground mb-auto text-sm">{skill.description}</p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {skill.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
