"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
    {
        type: "experience",
        icon: <Briefcase className="w-5 h-5" />,
        date: "2024 - Present",
        title: "YBS Specialist & Full-Stack Developer",
        organization: "Freelance",
        description: "Developing robust web applications using React & Next.js while architecting solid database structures and analyzing business needs.",
    },
    {
        type: "experience",
        icon: <Briefcase className="w-5 h-5" />,
        date: "2022 - 2024",
        title: "Data Analyst & DSS Consultant",
        organization: "Tech Solutions Inc.",
        description: "Implemented custom Decision Support Systems (KDS) and dashboards for enterprise clients to streamline business operations.",
    },
    {
        type: "education",
        icon: <GraduationCap className="w-5 h-5" />,
        date: "2020 - 2024",
        title: "Management Information Systems (YBS)",
        organization: "Boğaziçi University",
        description: "Specialized in software development, database architecture, and corporate strategy.",
    }
];

export function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience & Education</h2>
                    <p className="text-muted-foreground text-lg">My professional journey intersecting technology and business.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[39px] md:left-1/2 h-8 w-8 rounded-full border-4 border-background bg-primary text-primary-foreground transform -translate-x-1/2 flex items-center justify-center z-10 shadow-lg mt-0 md:mt-0">
                                        <div className="scale-75">{item.icon}</div>
                                    </div>

                                    {/* Content Box */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <div className="glass-card bg-white/50 p-6 rounded-2xl hover:border-primary/50 transition-colors">
                                            <span className="text-sm font-semibold text-primary mb-2 block">{item.date}</span>
                                            <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                                            <span className="text-md font-medium text-muted-foreground block mb-4">{item.organization}</span>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
