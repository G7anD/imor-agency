"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool, ClipboardList, Megaphone, Target, Settings, Blocks } from "lucide-react";
import { useRef } from "react";

interface ServicesProps {
    dict?: any;
    lang?: string;
}

export default function ServicesSection({ lang = 'uz' }: ServicesProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Only on desktop (sm+), this yTitle shifts the sticky sidebar — safe transform
    const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    const services = [
        {
            icon: <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Performance Marketing" : lang === 'ru' ? "Перфоманс-маркетинг" : lang === 'tj' ? "Performance Маркетинг" : "Performance Marketing",
            desc: lang === 'uz' ? "Ma'lumotlarga tayangan kampaniyalar, aniq KPIlar va loyihangiz uchun maksimal ROI." : lang === 'ru' ? "Кампании, основанные на данных, с точными KPI для достижения максимального ROI вашего проекта." : lang === 'tj' ? "Кампанияҳо дар асоси маълумот, KPI-ҳои дақиқ ва ROI-и максималӣ барои лоиҳаи шумо." : "Data-driven campaigns, precise KPIs, and maximum ROI for your project.",
        },
        {
            icon: <PenTool className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Brending" : lang === 'ru' ? "Брендинг" : lang === 'tj' ? "Брендинг" : "Branding",
            desc: lang === 'uz' ? "Maqsadli auditoriya bilan rezonans qiladigan, bozorda ajralib turadigan brend identifikatori." : lang === 'ru' ? "Бренд-идентификатор, который находит отклик у целевой аудитории и выделяет проект на рынке." : lang === 'tj' ? "Идентификатсияи бренд, ки бо аудиторияи мақсаднок ҳамоҳанг аст ва дар бозор фарқ мекунад." : "A brand identity that resonates with your target audience and stands out in the market.",
        },
        {
            icon: <Blocks className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Kontent ishlab chiqarish" : lang === 'ru' ? "Создание контента" : lang === 'tj' ? "Тавлиди контент" : "Content Creation",
            desc: lang === 'uz' ? "Sotuvni tezlashtiruvchi foto, video va kreativ kontent paketlari." : lang === 'ru' ? "Фото, видео и пакеты креативного контента, ускоряющие продажи." : lang === 'tj' ? "Бастаҳои фото, видео ва контенти эҷодӣ, ки фурӯшро тезонанд." : "Photo, video, and creative content packages designed to accelerate sales.",
        },
        {
            icon: <ClipboardList className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Strategiya va audit" : lang === 'ru' ? "Стратегия и аудит" : lang === 'tj' ? "Стратегия ва аудит" : "Strategy and Audit",
            desc: lang === 'uz' ? "Bozor tahlili, individual marketing strategiyasi va samarali kanallarni aniqlash uchun sotuv voronkasi auditi." : lang === 'ru' ? "Анализ рынка, индивидуальная маркетинговая стратегия и аудит воронки продаж для поиска эффективных каналов." : lang === 'tj' ? "Таҳлили бозор, стратегияи инфиродии маркетинг ва аудити қифи фурӯш барои муайян кардани каналҳои самаранок." : "Market analysis, custom marketing strategies, and sales funnel audits to identify the most effective channels.",
        },
        {
            icon: <Megaphone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Ijtimoiy tarmoqlar" : lang === 'ru' ? "Социальные сети" : lang === 'tj' ? "Шабакаҳои иҷтимоӣ" : "Social Media",
            desc: lang === 'uz' ? "Sotuvga yo'naltirilgan kontent-plan asosida ijtimoiy tarmoqlarni professional yuritish." : lang === 'ru' ? "Профессиональное ведение социальных сетей на основе контент-плана, ориентированного на продажи." : lang === 'tj' ? "Идоракунии касбии шабакаҳои иҷтимоӣ дар асоси контент-план, ки ба фурӯш нигаронида шудааст." : "Professional social media management based on a sales-oriented content plan.",
        },
        {
            icon: <Settings className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
            title: lang === 'uz' ? "Tizimlashtirish va CRM" : lang === 'ru' ? "Систематизация и CRM" : lang === 'tj' ? "Системасозӣ ва CRM" : "Systematization and CRM",
            desc: lang === 'uz' ? "Sotuv bo'limi uchun CRM tizimini sozlash, xodimlarni o'qitish va muntazam shaffof hisobotlar." : lang === 'ru' ? "Настройка CRM-системы, обучение отдела продаж и регулярная прозрачная отчетность." : lang === 'tj' ? "Танзими системаи CRM барои шуъбаи фурӯш, омӯзиши кормандон ва ҳисоботҳои мунтазами шаффоф." : "CRM setup for your sales team, staff training, and regular, transparent reporting.",
        }
    ];

    return (
        <section id="services" ref={containerRef} className="py-20 sm:py-32 relative bg-background">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start">

                    <div className="lg:w-1/3 lg:sticky lg:top-40 z-10 w-full flex flex-col justify-center">
                        <motion.div style={{ y: yTitle }} className="hidden lg:block relative z-10">
                            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-[1.1]">
                                {lang === 'uz' ? 'Xizmatlar' : lang === 'ru' ? 'Услуги' : lang === 'tj' ? 'Хизматҳо' : 'Services'}
                            </h2>
                            <p className="text-xl text-gray-400">
                                {lang === 'uz' ? 'Developerlar uchun kompleks marketing yechimlari.' : lang === 'ru' ? 'Комплексные маркетинговые решения для девелоперов.' : lang === 'tj' ? 'Ҳалли комплексии маркетинг барои девелоперон.' : 'Comprehensive marketing solutions for developers.'}
                            </p>
                        </motion.div>

                        {/* Mobile Title */}
                        <div className="lg:hidden text-left sm:text-center mb-8 sm:mb-12">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                {lang === 'uz' ? 'Xizmatlar' : lang === 'ru' ? 'Услуги' : lang === 'tj' ? 'Хизматҳо' : 'Services'}
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                {lang === 'uz' ? 'Developerlar uchun kompleks marketing yechimlari.' : lang === 'ru' ? 'Комплексные маркетинговые решения для девелоперов.' : lang === 'tj' ? 'Ҳалли комплексии маркетинг барои девелоперон.' : 'Comprehensive marketing solutions for developers.'}
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-10 lg:pt-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
                                className="group relative bg-[#0a0a0a] border border-surface p-8 sm:p-10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-surface/50 border border-surface flex items-center justify-center mb-8 relative z-10">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 transition-colors group-hover:text-primary">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">
                                    {service.desc}
                                </p>

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
