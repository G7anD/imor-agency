"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface HeroProps {
    dict: any;
    lang: string;
}

export default function HeroSection({ dict, lang }: HeroProps) {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax and fade on desktop — transform-based, GPU-friendly
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const words = [
        dict.title_word1,
        dict.title_word2,
        dict.title_word3,
        dict.title_word4,
        dict.title_word5,
        dict.title_word6,
    ];

    const isAccentWord = (word: string) =>
        (lang === "uz" && (word === "marketing" || word === "real natija")) ||
        (lang === "ru" && (word === "реальный результат" || word === "Маркетинг,")) ||
        (lang === "en" && (word === "Marketing" || word === "real results")) ||
        (lang === "tj" && (word === "Маркетинг" || word === "воқеӣ"));

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[80px] opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] opacity-30" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
                <motion.div
                    style={{ opacity: opacityContent }}
                    className="max-w-5xl text-center -mt-20 sm:-mt-32"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-sm font-medium text-primary tracking-wide">
                            {dict.badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
                        className="flex flex-wrap justify-center mb-8 gap-x-4 gap-y-2"
                    >
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={`inline-block text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.1] ${isAccentWord(word)
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"
                                        : "text-white"
                                    }`}
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        {dict.description}
                        <br className="hidden md:block mt-2" />
                        <span className="text-white/80 font-medium">{dict.stats}</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href={`/${lang}#contact`}
                            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-background bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,191,165,0.4)]"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center gap-3">
                                {dict.btn_start}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href={`/${lang}/cases`}
                            className="group px-10 py-5 text-white font-medium text-lg rounded-full border border-white/20 hover:bg-white/5 transition-all relative overflow-hidden"
                        >
                            <span className="relative z-10">{dict.btn_cases}</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator — desktop only via CSS */}
            <motion.div
                className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-3 pointer-events-none hidden sm:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-primary absolute top-0"
                        animate={{ y: [0, 64, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
