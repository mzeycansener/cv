import {
    Database, Code2, PenTool, Lightbulb, PieChart, GraduationCap, Guitar,
    Server, GitBranch, Globe, BarChart3, Cpu, Brain, Scale, ShoppingCart, Map, Satellite,
    Layers, Zap, Search, Terminal, Layout, MousePointer2, Settings, Box,
    BarChart, Activity, Lock, Share2, Hexagon, Shield, LucideIcon
} from "lucide-react";

export interface SkillStat {
    label: string;
    value: string;
    subValue: string;
}

export interface TechItem {
    icon: LucideIcon;
    name: string;
}

export interface SkillItem {
    icon: LucideIcon;
    name: { tr: string; en: string };
    desc: { tr: string; en: string };
    longDesc: { tr: string; en: string };
    bgIcon: LucideIcon;
    techStack: TechItem[];
    stats: SkillStat[];
}

export interface SkillCategory {
    id: string;
    label: { tr: string; en: string };
    accent: string;
    icon: LucideIcon;
    description: { tr: string; en: string };
    skills: SkillItem[];
}

export const cards = [
    {
        id: "education",
        title: { tr: "Eğitim", en: "Education" },
        subtitle: { tr: "DEÜ · YBS", en: "DEU · MIS" },
        icon: GraduationCap,
        color: "#1a1a2e",
        accent: "#10b981",
        image: "/sunum.JPG",
        description: { 
            tr: "Dokuz Eylül Üniversitesi'nde Yönetim Bilişim Sistemleri (YBS) bölümünde öğrenciyim. Teknoloji ve işletmenin kesiştiği bu alanda hem teknik hem de stratejik düşünme yetisi kazanıyorum.", 
            en: "I am a student at Dokuz Eylül University majoring in Management Information Systems (MIS). I am gaining both technical and strategic thinking skills at the intersection of technology and business." 
        },
        tags: { 
            tr: ["Sistem Analizi", "Yöneylem Araştırması", "Veritabanı Yönetimi", "Bilişim Hukuku"], 
            en: ["Systems Analysis", "Operations Research", "Database Management", "IT Law"] 
        },
    },
    {
        id: "coding",
        title: { tr: "Kodlama", en: "Coding" },
        subtitle: { tr: "Full-Stack Dev", en: "Full-Stack Dev" },
        icon: Code2,
        color: "#0f172a",
        accent: "#6366f1",
        image: "/raspberry.jpeg",
        description: { 
            tr: "Node.js ve JavaScript ile ölçeklenebilir backend sistemleri geliştiriyorum. React ve Next.js ile modern, kullanıcı odaklı arayüzler tasarlıyor, RESTful API'lar ve veritabanı entegrasyonları kuruyorum.", 
            en: "Developing scalable backend systems with Node.js and JavaScript. Designing modern, user-centric interfaces with React and Next.js, building RESTful APIs and database integrations." 
        },
        tags: { 
            tr: ["Node.js / JavaScript", "React / Next.js", "RESTful API", "Sistem Analizi & UML"], 
            en: ["Node.js / JavaScript", "React / Next.js", "RESTful API", "Systems Analysis & UML"] 
        },
    },
    {
        id: "database",
        title: { tr: "Veritabanı", en: "Database" },
        subtitle: { tr: "MySQL · Spatial DB", en: "MySQL · Spatial DB" },
        icon: Database,
        color: "#172554",
        accent: "#3b82f6",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
        description: { 
            tr: "MySQL ve Mekansal Veritabanları (Spatial DB) ile ileri seviye ilişkisel modelleme yapıyorum. Karmaşık şema tasarımı, sorgu optimizasyonu ve büyük ölçekli veri mimarisinde deneyim sahibiyim.", 
            en: "Advanced relational modeling with MySQL and Spatial Databases. Experienced in complex schema design, query optimization, and large-scale data architecture." 
        },
        tags: { 
            tr: ["MySQL", "Spatial DB", "Şema Tasarımı", "Sorgu Optimizasyonu"], 
            en: ["MySQL", "Spatial DB", "Schema Design", "Query Optimization"] 
        },
    },
    {
        id: "dss",
        title: { tr: "Karar Destek", en: "Decision Support" },
        subtitle: { tr: "KDS & Yöneylem", en: "DSS & Ops Research" },
        icon: Lightbulb,
        color: "#1a1200",
        accent: "#f97316",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        description: { 
            tr: "Simplex, Hedef Programlama ve Dualite yöntemleriyle kaynak optimizasyonu yapıyorum. Veriden stratejik anlam çıkaran tahminleme ve raporlama modelleri geliştiriyorum.", 
            en: "Resource optimization using Simplex, Goal Programming, and Duality methods. Developing forecasting and reporting models that extract strategic meaning from data." 
        },
        tags: { 
            tr: ["Simplex & Dualite", "Hedef Programlama", "KDS Modelleme", "Raporlama"], 
            en: ["Simplex & Duality", "Goal Programming", "DSS Modeling", "Reporting"] 
        },
    },
    {
        id: "business",
        title: { tr: "İş & Hukuk", en: "Business & Law" },
        subtitle: { tr: "KVKK & Finans", en: "GDPR & Finance" },
        icon: PieChart,
        color: "#16001a",
        accent: "#a855f7",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        description: { 
            tr: "Finansal ve Yönetim Muhasebesi ilkeleriyle proje bütçeleme ve ROI analizi yapıyorum. KVKK uyumluluğu, fikri mülkiyet hakları ve dijital etik çerçevesinde güvenli sistemler tasarlıyorum.", 
            en: "Project budgeting and ROI analysis using Financial and Management Accounting principles. Designing secure systems within the framework of GDPR compliance, intellectual property rights, and digital ethics." 
        },
        tags: { 
            tr: ["KVKK Uyumluluğu", "ROI Analizi", "E-Ticaret B2B/B2C", "Bilişim Hukuku"], 
            en: ["GDPR Compliance", "ROI Analysis", "E-Commerce B2B/B2C", "IT Law"] 
        },
    },
    {
        id: "gis",
        title: { tr: "Mekansal", en: "Spatial" },
        subtitle: { tr: "CBS · Uzaktan Algılama", en: "GIS · Remote Sensing" },
        icon: Map,
        color: "#0c1a0a",
        accent: "#22d3ee",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1000&auto=format&fit=crop",
        description: { 
            tr: "Coğrafi Bilgi Sistemleri (CBS) ile konumsal verinin analizi, haritalandırılması ve veritabanı entegrasyonunu gerçekleştiriyorum. Uydu görüntüleri ve mekansal veriler üzerinden analiz yetkinliğine sahibim.", 
            en: "Analyzing, mapping, and integrating spatial data with Geographic Information Systems (GIS). Proficient in analysis via satellite imagery and spatial data." 
        },
        tags: { 
            tr: ["Coğrafi Bilgi Sistemleri", "Uzaktan Algılama", "Mekansal DB", "Konumsal Analiz"], 
            en: ["GIS", "Remote Sensing", "Spatial DB", "Spatial Analysis"] 
        },
    },
    {
        id: "design",
        title: { tr: "Tasarım", en: "Design" },
        subtitle: { tr: "UI/UX & Grafik", en: "UI/UX & Graphics" },
        icon: PenTool,
        color: "#1f0533",
        accent: "#e879f9",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
        description: { 
            tr: "Figma ve Adobe Creative Cloud ile kullanıcı deneyimi odaklı arayüzler ve kurumsal kimlik çalışmaları yapıyorum. Tipografi, renk teorisi ve görsel hiyerarşi konularına hakimim.", 
            en: "Creating UX-focused interfaces and corporate identity works with Figma and Adobe Creative Cloud. Proficient in typography, color theory, and visual hierarchy." 
        },
        tags: { 
            tr: ["Figma", "Adobe CC", "UI/UX Tasarım", "Marka Kimliği"], 
            en: ["Figma", "Adobe CC", "UI/UX Design", "Brand Identity"] 
        },
    },
    {
        id: "bass",
        title: { tr: "Kişisel", en: "Personal" },
        subtitle: { tr: "Müzik · Doğa · Sinema", en: "Music · Nature · Cinema" },
        icon: Guitar,
        color: "#1a0a00",
        accent: "#f59e0b",
        image: "/ben-sanat.jpeg",
        description: { 
            tr: "AFDOS bünyesinde doğa sporları, trekking ve kampçılık ile zorlu şartlarda dayanıklılık ve ekip ruhu geliştiriyorum. Bas gitar ile müzikal ritim anlayışımı; sinema ve teknoloji trendleriyle vizyonumu besliyorum. İleri seviye İngilizce, gelişmekte olan İspanyolca.", 
            en: "Developing endurance and team spirit in tough conditions through outdoor sports, trekking, and camping at AFDOS. Nurturing musical rhythm with bass guitar; and vision with cinema and tech trends. Advanced English, developing Spanish." 
        },
        tags: { 
            tr: ["Bas Gitar", "AFDOS · Kampçılık", "İleri İngilizce", "İspanyolca"], 
            en: ["Bass Guitar", "AFDOS · Camping", "Advanced English", "Spanish"] 
        },
    },
];

export const skillCategories: SkillCategory[] = [
    {
        id: "software",
        label: { tr: "A. Yazılım & Sistem", en: "A. Software & Systems" },
        accent: "#2d6a4f",
        icon: Server,
        description: { 
            tr: "Modern web ekosisteminde ölçeklenebilir ve güvenli sistemler inşa ediyorum.", 
            en: "Building scalable and secure systems in the modern web ecosystem." 
        },
        skills: [
            { 
                icon: Server, 
                name: { tr: "Sunucu Programlama", en: "Server Programming" }, 
                desc: { tr: "Node.js & JavaScript backend sistemleri", en: "Node.js & JavaScript backend systems" },
                longDesc: { 
                    tr: "Node.js ekosisteminde yüksek performanslı ve ölçeklenebilir backend mimarileri kurguluyorum. Mikroservisler ve olay güdümlü yaklaşımlarla karmaşık iş mantıklarını yönetiyorum.", 
                    en: "Designing high-performance and scalable backend architectures in the Node.js ecosystem. Managing complex business logic with microservices and event-driven approaches." 
                },
                bgIcon: Terminal,
                techStack: [
                    { icon: Server, name: "Node.js" },
                    { icon: Hexagon, name: "NestJS" },
                    { icon: Zap, name: "Fastify" }
                ],
                stats: [
                    { label: "Performans", value: "%99.9", subValue: "Uptime" },
                    { label: "Mimari", value: "Micro", subValue: "Services" },
                    { label: "Güvenlik", value: "Audit", subValue: "Passed" }
                ]
            },
            { 
                icon: GitBranch, 
                name: { tr: "Sistem Analizi", en: "Systems Analysis" }, 
                desc: { tr: "SDLC yönetimi ve UML tasarımı", en: "SDLC management and UML design" },
                longDesc: { 
                    tr: "Yazılım geliştirme yaşam döngüsünü (SDLC) analiz ederek iş gereksinimlerini teknik spesifikasyonlara dönüştürüyorum. UML diyagramları ve akış şemalarıyla sistem karmaşıklığını minimize ediyorum.", 
                    en: "Analyzing the software development life cycle (SDLC) to transform business requirements into technical specifications. Minimizing system complexity with UML diagrams and flowcharts." 
                },
                bgIcon: Layers,
                techStack: [
                    { icon: Layout, name: "UML" },
                    { icon: GitBranch, name: "Git" },
                    { icon: Box, name: "Docker" }
                ],
                stats: [
                    { label: "Dokümantasyon", value: "Tam", subValue: "Eksiksiz" },
                    { label: "Planlama", value: "Agile", subValue: "Scrum" },
                    { label: "Analiz", value: "GAP", subValue: "Metodu" }
                ]
            },
            { 
                icon: Globe, 
                name: { tr: "Web Teknolojileri", en: "Web Technologies" }, 
                desc: { tr: "Dinamik arayüzler ve API entegrasyonu", en: "Dynamic interfaces and API integration" },
                longDesc: { 
                    tr: "React ve Next.js kullanarak modern, SEO dostu ve kullanıcı deneyimi (UX) odaklı web uygulamaları geliştiriyorum. RESTful ve GraphQL API entegrasyonlarıyla dinamik veri akışları sağlıyorum.", 
                    en: "Developing modern, SEO-friendly, UX-focused web applications using React and Next.js. Providing dynamic data flows through RESTful and GraphQL API integrations." 
                },
                bgIcon: Layout,
                techStack: [
                    { icon: Layout, name: "React" },
                    { icon: Box, name: "Next.js" },
                    { icon: MousePointer2, name: "Tailwind" }
                ],
                stats: [
                    { label: "Hız", value: "98/100", subValue: "Lighthouse" },
                    { label: "SEO", value: "A+", subValue: "Ranking" },
                    { label: "UX", value: "Yüksek", subValue: "Engagement" }
                ]
            },
        ],
    },
    {
        id: "data",
        label: { tr: "B. Veri & Analitik", en: "B. Data & Analytics" },
        accent: "#3d6b5e",
        icon: BarChart3,
        description: { 
            tr: "Veriyi stratejik bir varlığa dönüştürerek karar süreçlerini optimize ediyorum.", 
            en: "Transforming data into a strategic asset to optimize decision-making processes." 
        },
        skills: [
            { 
                icon: Database, 
                name: { tr: "Veritabanı Yönetimi", en: "Database Management" }, 
                desc: { tr: "MySQL ve Spatial DB modelleme", en: "MySQL and Spatial DB modeling" },
                longDesc: { 
                    tr: "İlişkisel veritabanı tasarımında normalizasyon ve performans optimizasyonu yapıyorum. Mekansal (Spatial) sorgularla konum tabanlı verilerin depolanması ve işlenmesinde uzmanım.", 
                    en: "Performing normalization and performance optimization in relational database design. Specializing in storing and processing location-based data with Spatial queries." 
                },
                bgIcon: Database,
                techStack: [
                    { icon: Database, name: "MySQL" },
                    { icon: Map, name: "PostGIS" },
                    { icon: Activity, name: "Redis" }
                ],
                stats: [
                    { label: "Opt", value: "x3", subValue: "Faster" },
                    { label: "Yapı", value: "Spatial", subValue: "Index" },
                    { label: "Norm", value: "3NF+", subValue: "Grade" }
                ]
            },
            { 
                icon: Cpu, 
                name: { tr: "Yöneylem Araştırması", en: "Operations Research" }, 
                desc: { tr: "Simplex ve Hedef Programlama", en: "Simplex and Goal Programming" },
                longDesc: { 
                    tr: "Kısıtlı kaynaklar altında en iyi sonucu elde etmek için matematiksel modeller (Simplex, Dualite) kuruyorum. Üretim, lojistik ve finans alanlarında maliyet minimizasyonu sağlıyorum.", 
                    en: "Building mathematical models (Simplex, Duality) to achieve optimal results under limited resources. Providing cost minimization in production, logistics, and finance." 
                },
                bgIcon: Activity,
                techStack: [
                    { icon: Settings, name: "Optimization" },
                    { icon: BarChart, name: "Statistics" },
                    { icon: PieChart, name: "Analysis" }
                ],
                stats: [
                    { label: "Maliyet", value: "-%25", subValue: "Reduction" },
                    { label: "Verim", value: "+%40", subValue: "Increase" },
                    { label: "Model", value: "Dual", subValue: "Simplex" }
                ]
            },
            { 
                icon: Brain, 
                name: { tr: "Karar Destek", en: "Decision Support" }, 
                desc: { tr: "Tahminleme ve raporlama modelleri", en: "Forecasting and reporting models" },
                longDesc: { 
                    tr: "Veri madenciliği ve istatistiksel yöntemlerle geleceğe yönelik tahminleme modelleri geliştiriyorum. Yönetim kademesine stratejik karar alma sürecinde destek olacak dashboardlar tasarlıyorum.", 
                    en: "Developing future-oriented forecasting models with data mining and statistical methods. Designing dashboards to support management levels in strategic decision-making." 
                },
                bgIcon: Brain,
                techStack: [
                    { icon: BarChart, name: "BI Tools" },
                    { icon: Search, name: "Data Mining" },
                    { icon: Activity, name: "Analytics" }
                ],
                stats: [
                    { label: "Doğruluk", value: "%92", subValue: "Accuracy" },
                    { label: "Hacim", value: "TB", subValue: "Scale" },
                    { label: "Rapor", value: "Canlı", subValue: "Dashboard" }
                ]
            },
        ],
    },
    {
        id: "business",
        label: { tr: "C. İş Zekası & Hukuk", en: "C. Business Intel & Law" },
        accent: "#6b5e2a",
        icon: PieChart,
        description: { 
            tr: "Teknolojinin yasal ve finansal boyutlarını iş hedefleriyle hizalıyorum.", 
            en: "Aligning the legal and financial dimensions of technology with business goals." 
        },
        skills: [
            { 
                icon: PieChart, 
                name: { tr: "Mali Yönetim", en: "Financial Management" }, 
                desc: { tr: "Proje bütçeleme ve ROI analizi", en: "Project budgeting and ROI analysis" },
                longDesc: { 
                    tr: "Yazılım projelerinin finansal fizibilitesini hazırlıyor, ROI analizlerini gerçekleştiriyorum. Maliyet-fayda dengesini teknik kararlara entegre ediyorum.", 
                    en: "Preparing financial feasibilities for software projects and conducting ROI analyses. Integrating cost-benefit balances into technical decisions." 
                },
                bgIcon: BarChart3,
                techStack: [
                    { icon: BarChart3, name: "Finance" },
                    { icon: Activity, name: "Budgeting" },
                    { icon: Shield, name: "Audit" }
                ],
                stats: [
                    { label: "ROI", value: "x2.5", subValue: "Target" },
                    { label: "Bütçe", value: "Düşük", subValue: "Variance" },
                    { label: "Analiz", value: "NPV/IRR", subValue: "Methods" }
                ]
            },
            { 
                icon: Scale, 
                name: { tr: "Bilişim Hukuku", en: "IT Law" }, 
                desc: { tr: "KVKK uyumluluğu ve dijital etik", en: "GDPR compliance and digital ethics" },
                longDesc: { 
                    tr: "Dijital sistemlerin KVKK ve GDPR gibi yasal düzenlemelere uyumluluğunu sağlıyorum. Veri gizliliği, siber güvenlik hukuku ve fikri mülkiyet hakları konularında teknik-hukuki köprü kuruyorum.", 
                    en: "Ensuring digital systems comply with legal regulations like KVKK and GDPR. Bridging technical and legal aspects regarding data privacy, cybersecurity law, and IP rights." 
                },
                bgIcon: Shield,
                techStack: [
                    { icon: Shield, name: "Privacy" },
                    { icon: Lock, name: "GDPR" },
                    { icon: Scale, name: "Legal" }
                ],
                stats: [
                    { label: "Uyum", value: "Tam", subValue: "100%" },
                    { label: "Risk", value: "Min.", subValue: "Level" },
                    { label: "Etik", value: "Global", subValue: "Standards" }
                ]
            },
            { 
                icon: ShoppingCart, 
                name: { tr: "E-Ticaret", en: "E-Commerce" }, 
                desc: { tr: "B2B/B2C iş modelleri ve algoritmalar", en: "B2B/B2C models and algorithms" },
                longDesc: { 
                    tr: "Elektronik ticaret platformlarında kullanıcı davranış analizi ve fiyatlandırma stratejileri geliştiriyorum. Satış kanallarının dijital dönüşüm süreçlerini ve pazar yeri entegrasyonlarını yönetiyorum.", 
                    en: "Developing user behavior analysis and pricing strategies in e-commerce platforms. Managing digital transformation processes across sales channels and marketplace integrations." 
                },
                bgIcon: ShoppingCart,
                techStack: [
                    { icon: ShoppingCart, name: "Commerce" },
                    { icon: Activity, name: "Growth" },
                    { icon: Share2, name: "Omnichannel" }
                ],
                stats: [
                    { label: "Ciro", value: "Yüksek", subValue: "Growth" },
                    { label: "Dönüşüm", value: "+%15", subValue: "CR Optimization" },
                    { label: "Model", value: "Hybrid", subValue: "B2B/C" }
                ]
            },
        ],
    },
    {
        id: "spatial",
        label: { tr: "D. Mekansal", en: "D. Spatial Data" },
        accent: "#2c6e7a",
        icon: Map,
        description: { 
            tr: "Konumsal verinin gücünü sektörel analizlere ve haritalara dönüştürüyorum.", 
            en: "Transforming the power of spatial data into sectoral analyses and maps." 
        },
        skills: [
            { 
                icon: Map, 
                name: { tr: "CBS Analizi", en: "GIS Analysis" }, 
                desc: { tr: "Konumsal veri analizi ve haritalama", en: "Spatial analysis and mapping" },
                longDesc: { 
                    tr: "QGIS ve ArcGIS gibi araçlarla konumsal verileri analiz ederek tematik haritalar üretiyorum. Ağ analizi, tampon (buffer) analizi ve konumsal istatistik yöntemlerini iş süreçlerine uyguluyorum.", 
                    en: "Analyzing spatial data with tools like QGIS and ArcGIS to produce thematic maps. Applying network analysis, buffer analysis, and spatial statistics to business processes." 
                },
                bgIcon: Map,
                techStack: [
                    { icon: Map, name: "QGIS" },
                    { icon: Satellite, name: "ArcGIS" },
                    { icon: Globe, name: "GeoJSON" }
                ],
                stats: [
                    { label: "Hassasiyet", value: "cm", subValue: "Level" },
                    { label: "Veri", value: "Vector", subValue: "Raster" },
                    { label: "Analiz", value: "Buffer", subValue: "Network" }
                ]
            },
            { 
                icon: Satellite, 
                name: { tr: "Uzaktan Algılama", en: "Remote Sensing" }, 
                desc: { tr: "Uydu görüntüleri üzerinden analiz", en: "Analysis over satellite imagery" },
                longDesc: { 
                    tr: "Uydu görüntülerinden spektral analizler yaparak arazi kullanımı ve değişim tespiti gibi çalışmalar yapıyorum. Görüntü işleme teknikleriyle nesne sınıflandırma ve indeks (NDVI vb.) hesaplamaları yürütüyorum.", 
                    en: "Conducting studies like land use and change detection via spectral analysis from satellite images. Running object classification and index (NDVI, etc.) calculations with image processing." 
                },
                bgIcon: Satellite,
                techStack: [
                    { icon: Satellite, name: "Spectral" },
                    { icon: Activity, name: "NDVI" },
                    { icon: Layers, name: "Tasseled Cap" }
                ],
                stats: [
                    { label: "Çözünürlük", value: "10m", subValue: "Sentinel" },
                    { label: "Bant", value: "13", subValue: "Multispectral" },
                    { label: "Sistem", value: "WGS84", subValue: "Datum" }
                ]
            },
        ],
    },
];
