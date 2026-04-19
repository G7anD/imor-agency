"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

interface ContactProps {
    dict?: any;
    lang?: string;
}

export default function ContactSection({ lang = 'uz' }: ContactProps) {
    return (
        <section id="contact" className="py-20 sm:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">

                        {/* Left Side: Call to Action */}
                        <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                            >
                                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 text-white leading-tight">
                                    {lang === 'uz' ? 'Keling,' : lang === 'ru' ? 'Давайте' : lang === 'tj' ? 'Биёед,' : "Let's"} <br className="hidden sm:block" />
                                    <span className="text-primary italic font-serif tracking-wide">{lang === 'uz' ? 'gaplashamiz!' : lang === 'ru' ? 'поговорим!' : lang === 'tj' ? 'гуфтугӯ кунем!' : 'talk!'}</span>
                                </h2>
                                <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light leading-relaxed max-w-lg">
                                    {lang === 'uz' ? 'Yangi loyihani boshlashga tayyormisiz? Imor bilan biznesingizni keyingi bosqichga olib chiqing.' : lang === 'ru' ? 'Готовы начать новый проект? Выведите свой бизнес на новый уровень вместе с Imor.' : lang === 'tj' ? 'Омодаед лоиҳаи навро оғоз кунед? Бо Imor бизнеси худро ба сатҳи нав баред.' : 'Ready to start a new project? Take your business to the next level with Imor.'}
                                </p>

                                <a
                                    href="https://t.me/imoragency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-background bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,165,0.4)] self-start"
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                    <span className="relative flex items-center gap-3">
                                        {lang === 'uz' ? 'Telegram orqali yozish' : lang === 'ru' ? 'Написать в Telegram' : lang === 'tj' ? 'Тавассути Telegram нависед' : 'Write via Telegram'}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Side: Contact Info Cards */}
                        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                            <motion.div
                                className="space-y-4 sm:space-y-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                            >
                                {/* Phone Card */}
                                <div className="group bg-surface border border-surface-hover hover:border-primary/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background flex items-center justify-center shrink-0 border border-surface-hover text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2 uppercase tracking-wider">{lang === 'uz' ? "Qo'ng'iroq qiling" : lang === 'ru' ? 'Позвоните нам' : lang === 'tj' ? 'Занг занед' : 'Call us'}</p>
                                            <a href="tel:+998948886842" className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-primary transition-colors">+998 94 888 68 42</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Address Card */}
                                <div className="group bg-surface border border-surface-hover hover:border-primary/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background flex items-center justify-center shrink-0 border border-surface-hover text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2 uppercase tracking-wider">{lang === 'uz' ? "Keling, ko'rishamiz" : lang === 'ru' ? 'Приходите в гости' : lang === 'tj' ? 'Биёед, вохӯрем' : 'Come visit us'}</p>
                                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">Mirzo-Ulug'bek tumani, Shahriobod 13, Toshkent</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Telegram Card */}
                                <div className="group bg-surface border border-surface-hover hover:border-primary/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background flex items-center justify-center shrink-0 border border-surface-hover text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2 uppercase tracking-wider">{lang === 'uz' ? 'Yozing' : lang === 'ru' ? 'Напишите нам' : lang === 'tj' ? 'Нависед' : 'Write to us'}</p>
                                            <a href="https://t.me/imoragency" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-primary transition-colors">@imoragency</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
