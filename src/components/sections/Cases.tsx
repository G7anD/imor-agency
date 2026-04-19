"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { casesData } from "@/data/cases";
import Link from "next/link";

interface CasesProps {
    dict?: Record<string, any>;
    lang: 'uz' | 'ru' | 'en' | 'tj';
}

export default function CasesSection({ lang }: CasesProps) {
    return (
        <section id="cases" className="py-20 sm:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 text-white leading-tight">
                            {(lang || 'uz') === 'uz' ? (
                                <>Muvaffaqiyatli <br className="hidden sm:block" /> <span className="text-primary italic font-serif tracking-wide border-b border-primary/30">Keyslar</span></>
                            ) : (lang || 'uz') === 'ru' ? (
                                <>Успешные <br className="hidden sm:block" /> <span className="text-primary italic font-serif tracking-wide border-b border-primary/30">Кейсы</span></>
                            ) : (lang || 'uz') === 'tj' ? (
                                <>Муваффақона <br className="hidden sm:block" /> <span className="text-primary italic font-serif tracking-wide border-b border-primary/30">Кейсҳо</span></>
                            ) : (
                                <>Successful <br className="hidden sm:block" /> <span className="text-primary italic font-serif tracking-wide border-b border-primary/30">Cases</span></>
                            )}
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl">
                            {(lang || 'uz') === 'uz'
                                ? "Xizmatlarimiz qanday natija berayotganini quyidagi loyihalar misolida ko'rishingiz mumkin."
                                : (lang || 'uz') === 'ru'
                                    ? "Результаты нашей работы наглядно представлены в примерах следующих проектов."
                                    : (lang || 'uz') === 'tj'
                                        ? "Натиҷаҳои кори моро дар мисоли лоиҳаҳои зерин бубинед."
                                        : "See the real results of our services through the examples of the following projects."}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <Link href={`/${lang || 'uz'}/cases`} className="inline-flex w-fit items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-surface rounded-full text-white font-medium hover:bg-white hover:text-black transition-all group text-sm sm:text-base">
                            {(lang || 'uz') === 'uz' ? 'Barcha loyihalar' : (lang || 'uz') === 'ru' ? 'Все проекты' : (lang || 'uz') === 'tj' ? 'Ҳамаи лоиҳаҳо' : 'All Projects'}
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {casesData.filter(item => item.showOnHomepage).map((item, index) => (
                        <motion.div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] sm:cursor-none ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px", amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] }}
                        >
                            {/* Background Image */}
                            <Link href={`/${lang || 'uz'}/cases/${item.slug}`} className="absolute inset-0 z-20" />
                            <div
                                className="absolute inset-0 bg-cover bg-center transform scale-105 group-hover:scale-100 group-hover:rotate-1 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                style={{ backgroundImage: `url('${item.coverImage}')` }}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                                <div className="flex w-full justify-between items-start z-10 pointer-events-none">
                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full">
                                        {item.category[lang || 'uz']}
                                    </span>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100">
                                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                                    </div>
                                </div>

                                <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10 pointer-events-none">
                                    <div className="text-primary font-mono text-sm sm:text-base mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        {item.results && item.results[lang || 'uz'] && item.results[lang || 'uz'][0]}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                                        {item.title[lang || 'uz']}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
