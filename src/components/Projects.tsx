"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { useLanguage } from "@/context/LanguageContext";

type LocalizedString = { tr: string; en: string };
type LocalizedArray = { tr: string[]; en: string[] };

type Project = {
    title: string; // Titles are usually universal or keep their original brand name
    description: LocalizedString;
    longDescription?: LocalizedString;
    features?: LocalizedArray;
    image: string;
    images?: string[];
    tags: string[];
    link: string | null;
    github: string | null;
    colSpan: string;
};

const projects: Project[] = [
    {
        title: "AI-Integrated Spanish Learning",
        description: {
            tr: "Yapay zeka destekli dil eğitim platformu. Gemini API ile kişiselleştirilmiş, interaktif İspanyolca öğrenme deneyimi sunan ed-tech projesi.",
            en: "AI-powered language learning platform. An ed-tech project offering an interactive, personalized Spanish learning experience via Gemini API."
        },
        longDescription: {
            tr: "İş Mantığı: Yapay zekayı dil eğitimine entegre ederek interaktif ve kişiselleştirilmiş bir öğrenme deneyimi sunan ed-tech projesi. Gemini API ile gerçek zamanlı konuşma pratiği, telaffuz geri bildirimi ve uyarlanabilir müfredat sağlıyor. Kullanıcı ilerlemesini gamifikasyon ile motive ediyor.",
            en: "Business Logic: An ed-tech project that integrates AI into language education, offering an interactive and personalized learning experience. Provides real-time speaking practice, pronunciation feedback, and an adaptive curriculum using Gemini API, motivating users through gamification."
        },
        features: {
            tr: [
                "Gemini API ile gerçek zamanlı AI konuşma pratiği",
                "Telaffuz tanıma ve anlık geri bildirim sistemi",
                "Gamifikasyon: puan, rozet ve seviye ilerleme sistemi",
                "Uyarlanabilir müfredat — kullanıcı seviyesine göre kişiselleşiyor"
            ],
            en: [
                "Real-time AI speaking practice with Gemini API",
                "Pronunciation recognition and instant feedback system",
                "Gamification: points, badges, and level progression",
                "Adaptive curriculum — personalizes to user level"
            ]
        },
        image: "bg-gradient-to-br from-yellow-400/20 to-orange-500/20",
        images: ["/spanish-1.png", "/spanish-2.png", "/spanish-3.png", "/spanish-4.png"],
        tags: ["Gemini API", "Ed-Tech", "Web Technologies", "AI/ML"],
        link: "https://spainsh-hero.vercel.app/",
        github: "https://github.com/mzeycansener/spainsh-hero.git",
        colSpan: "col-span-1 lg:col-span-2",
    },
    {
        title: "Negotiation-Based E-Commerce",
        description: {
            tr: "Müşteri sadakati ve geçmiş verilere göre dinamik pazarlık yapan, kar marjını koruyan akıllı fiyatlandırma algoritması.",
            en: "Smart pricing algorithm that negotiates dynamically based on customer loyalty and historical data while protecting profit margins."
        },
        longDescription: {
            tr: "İş Mantığı: Müşteri sadakati ve geçmiş verilerine göre dinamik pazarlık yapan, kar marjını koruyan akıllı fiyatlandırma algoritması. B2C e-ticaret modelinde kullanıcı ile chatbot arasında gerçek hayat pazarlık deneyimi sunan, gerçek zamanlı fiyat motoru ile ürün yönetimi yapan platform.",
            en: "Business Logic: A smart pricing algorithm that conducts dynamic negotiations based on customer loyalty and historical data, preserving profit margins. It offers a real-life haggling experience between user and chatbot in a B2C e-commerce model, managing products with a real-time pricing engine."
        },
        features: {
            tr: [
                "Geçmiş satın alma verisine dayalı dinamik fiyat teklifleri",
                "Kar marjını koruyan pazarlık algoritması",
                "AI chatbot ile doğal dil pazarlık arayüzü",
                "Satıcı paneli: gerçek zamanlı müzakere analitiği"
            ],
            en: [
                "Dynamic price offers based on historical purchase data",
                "Profit margin-preserving negotiation algorithm",
                "Natural language negotiation interface with AI chatbot",
                "Seller dashboard: real-time negotiation analytics"
            ]
        },
        image: "bg-gradient-to-br from-emerald-400/20 to-cyan-500/20",
        images: ["/eticaret-1.png", "/eticaret-2.png", "/eticaret-3.png"],
        tags: ["JavaScript Backend", "AI/Chatbot", "E-Ticaret", "Pricing Alg."],
        link: null,
        github: "https://github.com/mzeycansener/E-ticaret-pazarlik-sistemi.git",
        colSpan: "col-span-1 lg:col-span-1",
    },
    {
        title: "Sales Decision Support System",
        description: {
            tr: "Beyaz eşya sektörü için satış verilerini analiz ederek stok ve üretim planlamasında yöneticilere veri odaklı içgörü sağlayan KDS.",
            en: "DSS that analyzes sales data for the home appliances sector, providing data-driven insights to managers for inventory and production planning."
        },
        longDescription: {
            tr: "İş Mantığı: Satış verilerini analiz ederek stok ve üretim planlamasında yöneticilere veri odaklı içgörü sağlayan sistem. Node.js ve MySQL altyapısıyla mevsimsel satış trendi tahmini, envanter optimizasyonu ve yöneticiler için otomatik raporlama sunan karar destek sistemi.",
            en: "Business Logic: A system providing data-driven insights to managers in inventory and production planning by analyzing sales data. A decision support system powered by Node.js and MySQL, offering seasonal sales trend forecasting, inventory optimization, and automated reporting."
        },
        features: {
            tr: [
                "Mevsimsel satış trendi için tahminleme modelleri",
                "Envanter optimizasyon algoritmaları",
                "C-level yöneticiler için otomatik raporlama",
                "İnteraktif veri görselleştirme paneli"
            ],
            en: [
                "Forecasting models for seasonal sales trends",
                "Inventory optimization algorithms",
                "Automated reporting for C-level executives",
                "Interactive data visualization dashboard"
            ]
        },
        image: "bg-gradient-to-br from-purple-400/20 to-pink-500/20",
        images: ["/kds-1.png", "/kds-2.png", "/kds-3.png", "/kds-4.png"],
        tags: ["Node.js", "MySQL", "DSS / KDS", "Data Analytics"],
        link: null,
        github: "https://github.com/mzeycansener/kds_beyazesya_proje.git",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
        title: "CL Analiz – Karşılaştırma Platformu",
        description: {
            tr: "Şampiyonlar Ligi karşılaşmalarını yüzeysel skorların ötesinde, Google AI Studio ile derinlemesine analiz eden platform.",
            en: "A platform analyzing Champions League matches in-depth beyond superficial scores using Google AI Studio."
        },
        longDescription: {
            tr: "İş Mantığı: Google AI Studio (Gemini) altyapısını kullanarak Şampiyonlar Ligi takımlarının form durumlarını ve oyuncu performanslarını anlamlı içgörülere dönüştüren analiz sistemi. Transfermarkt ve Opta verilerini harmanlayarak, teknik direktör tercihlerinden 'çıkış dakikası' analizlerine kadar niş ve taktiksel sorulara yanıt bulur.",
            en: "Business Logic: An analysis system transforming Champions League teams' form and player performances into meaningful insights using Google AI Studio (Gemini). By blending Transfermarkt and Opta data, it answers niche and tactical questions, from managerial choices to 'substitution minute' analytics."
        },
        features: {
            tr: [
                "Dinamik Fikstür ve Tarih Bazlı Eşleşme Ekranı",
                "Son 5 Maçlık Detaylı Form ve Performans Kartları",
                "Oyuncu Bazlı Derin İstatistikler (Şut, Süre, Çıkış Dakikası)",
                "Google AI Studio Entegrasyonu ile Otomatik Maç Raporu İşleme"
            ],
            en: [
                "Dynamic Fixture and Date-Based Matchup Screen",
                "Detailed Form and Performance Cards for Last 5 Matches",
                "Deep Player-Based Statistics (Shots, Minutes, Substitution Time)",
                "Automated Match Report Processing via Google AI Studio Integration"
            ]
        },
        image: "bg-gradient-to-br from-blue-600/20 to-indigo-900/20",
        images: ["/cl-analiz-1.png", "/cl-analiz-2.png"],
        tags: ["Google AI Studio", "Next.js", "Data Visualization", "Sports Analytics"],
        link: null,
        github: "https://github.com/mzeycansener",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-muted-foreground p-8 text-center">
                Visuals coming soon
            </div>
        );
    }

    return (
        <div className="relative w-full h-full group bg-[#f4eee0]" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain absolute inset-0"
                    alt={`Preview slide ${currentIndex + 1}`}
                />
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 sm:w-6 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'}`}
                                aria-label={`Go to image ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export function Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<"overview" | "features">("overview");
    const { language } = useLanguage();

    const t = {
        tr: {
            sectionTitle: "Öne Çıkan Çalışmalar",
            sectionDesc: "Karmaşık kod mimarilerini premium tasarım ve iş stratejileriyle birleştirme yeteneğimi gösteren projelerden bir seçki.",
            overview: "Genel Bakış",
            features: "Temel Özellikler",
            liveDemo: "Canlı Demo",
            sourceCode: "Kaynak Kod"
        },
        en: {
            sectionTitle: "Featured Work",
            sectionDesc: "A selection of projects that demonstrate my ability to merge complex coding architecture with premium design and business strategy.",
            overview: "Overview",
            features: "Key Features",
            liveDemo: "Live Demo",
            sourceCode: "Source Code"
        }
    }[language];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
            setActiveTab("overview"); // Reset tab on open
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [activeProject]);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.sectionTitle}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">{t.sectionDesc}</p>
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
                            <GlassCard 
                                className="h-full flex flex-col justify-between overflow-hidden p-0 border border-border/50 bg-white/40 hover:bg-white/60 transition-colors cursor-pointer group hover:shadow-xl"
                                onClick={() => setActiveProject(project)}
                            >
                                {/* Expanded Indicator */}
                                <div className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shadow-sm border border-white/30">
                                    <Maximize2 className="w-4 h-4 text-foreground/80" />
                                </div>

                                {/* Image Placeholder with Gradients */}
                                <div className={`w-full h-64 sm:h-72 relative overflow-hidden bg-[#f4eee0]`}>
                                    {project.images && project.images.length > 0 && (
                                        <img 
                                            src={project.images[0]} 
                                            alt={project.title} 
                                            className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:scale-105 transition-all duration-700" 
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                    <motion.div
                                        className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        style={{ backgroundImage: "linear-gradient(to top, rgba(244,238,224,0.9), transparent 50%)" }}
                                    />
                                </div>

                                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative z-10 bg-white/50 backdrop-blur-xl border-t border-white/20">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-muted-foreground mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">{project.description[language]}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <Badge key={tag} variant="outline" className="border-primary/20 bg-primary/5">{tag}</Badge>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <Badge variant="outline" className="border-border bg-muted/50">+{project.tags.length - 3}</Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal details */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-white/40 backdrop-blur-xl"
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 350 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-6xl bg-white/90 backdrop-blur-3xl border border-white/40 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] relative ring-1 ring-black/5"
                        >
                            {/* Glowing effect inside modal */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 opacity-50 pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-2.5 bg-primary/10 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 backdrop-blur-md group"
                            >
                                <X className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
                            </button>

                            {/* Left Side: Image Carousel */}
                            <div className="w-full h-80 sm:h-96 md:h-auto md:w-[55%] lg:w-[60%] relative bg-[#f4eee0] overflow-hidden shrink-0 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.05)]">
                                <ImageCarousel images={activeProject.images || []} />
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col h-full bg-white/40 backdrop-blur-xl relative z-20">
                                
                                <div className="p-6 sm:p-8 md:p-10 pb-6 flex-grow overflow-y-auto">
                                    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-foreground pr-10 tracking-tight leading-tight">{activeProject.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {activeProject.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default px-3 py-1">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                    {/* Tabs */}
                                    <div className="flex gap-6 border-b border-border mb-6">
                                        <button 
                                            onClick={() => setActiveTab("overview")}
                                            className={`pb-3 font-medium transition-colors relative ${activeTab === "overview" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                        >
                                            {t.overview}
                                            {activeTab === "overview" && (
                                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                                            )}
                                        </button>
                                        {activeProject.features && activeProject.features[language] && activeProject.features[language].length > 0 && (
                                            <button 
                                                onClick={() => setActiveTab("features")}
                                                className={`pb-3 font-medium transition-colors relative ${activeTab === "features" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                            >
                                                {t.features}
                                                {activeTab === "features" && (
                                                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    <div className="relative min-h-[140px]">
                                        <AnimatePresence mode="wait">
                                            {activeTab === "overview" ? (
                                                <motion.div 
                                                    key="overview"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="prose prose-sm sm:prose-base text-muted-foreground"
                                                >
                                                    <p className="leading-relaxed text-[1.05rem]">
                                                        {activeProject.longDescription ? activeProject.longDescription[language] : activeProject.description[language]}
                                                    </p>
                                                </motion.div>
                                            ) : (
                                                <motion.ul 
                                                    key="features"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="space-y-3"
                                                >
                                                    {activeProject.features?.[language]?.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-muted-foreground group">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 shrink-0" />
                                                            <span className="leading-relaxed group-hover:text-foreground transition-colors">{feature}</span>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Bottom Action Bar */}
                                <div className="p-6 sm:p-8 border-t border-border/50 bg-white/50 backdrop-blur-md shrink-0 flex flex-col sm:flex-row items-center gap-4">
                                    {activeProject.link && (
                                        <a href={activeProject.link} target={activeProject.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="w-full sm:flex-1 group">
                                            <Button className="w-full h-12 gap-2 text-base font-medium shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 cursor-none" variant="primary">
                                                <ExternalLink className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" /> 
                                                {t.liveDemo}
                                            </Button>
                                        </a>
                                    )}
                                    {activeProject.github && (
                                        <a href={activeProject.github} target={activeProject.github === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="w-full sm:flex-1 group">
                                            <Button className="w-full h-12 gap-2 text-base font-medium hover:bg-secondary transition-all duration-300 cursor-none" variant="outline">
                                                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" /> 
                                                {t.sourceCode}
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
