"use client";
import {
    useScroll,
    useTransform,
    motion,
    useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

/* ── Single animated row ── */
function TimelineItem({ item, index }: { item: TimelineEntry; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-15% 0px -15% 0px", once: false });

    return (
        <motion.div
            ref={ref}
            className="flex justify-start pt-10 md:pt-36 md:gap-10"
            animate={{
                opacity: isInView ? 1 : 0.22,
                scale: isInView ? 1 : 0.94,
                y: isInView ? 0 : 24,
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0 }}
        >
            {/* Left: sticky date label */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Timeline dot */}
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                    <motion.div
                        className="h-3.5 w-3.5 rounded-full border-2 border-primary"
                        animate={{ scale: isInView ? 1.3 : 1, backgroundColor: isInView ? "var(--color-primary)" : "transparent" }}
                        transition={{ duration: 0.4 }}
                    />
                </div>

                {/* Year label */}
                <motion.h3
                    className="hidden md:block md:pl-20 font-extrabold tracking-tight text-foreground/30 leading-none"
                    animate={{
                        fontSize: isInView ? "clamp(2.8rem,5vw,4rem)" : "clamp(2rem,3.5vw,2.8rem)",
                        opacity: isInView ? 1 : 0.3,
                        color: isInView ? "var(--color-foreground)" : undefined,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}
                >
                    {item.title}
                </motion.h3>
            </div>

            {/* Right: card content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                {/* Mobile year */}
                <motion.h3
                    className="md:hidden block text-3xl mb-4 text-left font-extrabold tracking-tight"
                    animate={{ opacity: isInView ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                >
                    {item.title}
                </motion.h3>

                <motion.div
                    animate={{
                        opacity: isInView ? 1 : 0.18,
                        scale: isInView ? 1 : 0.93,
                        y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    {item.content}
                </motion.div>
            </div>
        </motion.div>
    );
}

/* ── Timeline ── */
export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(() => {
            if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
        });
        ro.observe(ref.current);
        setHeight(ref.current.getBoundingClientRect().height);
        return () => ro.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-3xl md:text-5xl mb-4 font-bold tracking-tight text-foreground max-w-4xl">
                    Experience &amp; Education
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg max-w-sm">
                    My professional journey intersecting technology and business.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}

                {/* Animated fill line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border/50 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
