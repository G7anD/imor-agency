"use client";

import { motion } from "framer-motion";

export default function AboutSection({ lang = 'uz' }: { lang?: string }) {
    const stats = [
        {
            number: lang === 'uz' ? "5 yil" : lang === 'ru' ? "5 лет" : lang === 'tj' ? "5 сол" : "5 years",
            label: lang === 'uz' ? "Sohadagi tajriba" : lang === 'ru' ? "Опыта в нише" : lang === 'tj' ? "Таҷрибаи соҳавӣ" : "Niche experience",
            desc: lang === 'uz' ? "Faqat ko'chmas mulk va qurilish marketingidagi amaliy tajriba." : lang === 'ru' ? "Практический опыт исключительно в сфере маркетинга недвижимости и строительства." : lang === 'tj' ? "Таҷрибаи амалӣ танҳо дар соҳаи маркетинги амволи ғайриманқул ва сохтмон." : "Practical experience exclusively in real estate and construction marketing."
        },
        {
            number: "15+",
            label: lang === 'uz' ? "Muvaffaqiyatli loyihalar" : lang === 'ru' ? "Успешных проектов" : lang === 'tj' ? "Лоиҳаҳои муваффақ" : "Successful projects",
            desc: lang === 'uz' ? "Aniq sotuv natijalariga erishilgan turli xil developerlik loyihalari." : lang === 'ru' ? "Девелоперские проекты, в которых мы добились конкретных результатов продаж." : lang === 'tj' ? "Лоиҳаҳои гуногуни девелоперӣ, ки дар онҳо мо ба натиҷаҳои аниқи фурӯш расидем." : "Various development projects where we achieved concrete sales results."
        },
        {
            number: "15+",
            label: lang === 'uz' ? "Soha mutaxassislari" : lang === 'ru' ? "Профильных специалистов" : lang === 'tj' ? "Мутахассисони соҳа" : "Industry experts",
            desc: lang === 'uz' ? "Loyihangiz ustida ishlaydigan tajribali jamoa va soha professionallari." : lang === 'ru' ? "Опытная команда и профессионалы своего дела, работающие над вашим проектом." : lang === 'tj' ? "Дастаи ботаҷриба ва мутахассисони касбӣ, ки болои лоиҳаи шумо кор мекунанд." : "An experienced team of professionals working on your project."
        },
        {
            number: "X%+",
            label: lang === 'uz' ? "Sifatli lidlar" : lang === 'ru' ? "Качественных лидов" : lang === 'tj' ? "Лидҳои сифатнок" : "Qualified leads",
            desc: lang === 'uz' ? "Real xarid qobiliyatiga ega bo'lgan maqsadli mijozlar oqimi kafolati." : lang === 'ru' ? "Гарантия потока целевых клиентов с реальной покупательской способностью." : lang === 'tj' ? "Кафолати ҷараёни муштариёни мақсаднок бо қобилияти воқеии харид." : "Guaranteed flow of targeted clients with real purchasing power."
        },
    ];

    return (
        <section id="about" className="py-20 sm:py-32 bg-surface relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[70px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-12 sm:gap-16 xl:gap-24">

                    <div className="w-full xl:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-[1.1] text-white">
                                {lang === 'uz' ? 'Nega aynan' : lang === 'ru' ? 'Почему именно' : lang === 'tj' ? 'Чаро маҳз' : 'Why'} <br className="hidden sm:block" />
                                <span className="text-primary italic font-serif">Imor Agency?</span>
                            </h2>
                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8">
                                {lang === 'uz'
                                    ? "Biz developerlar biznesini chuqur audit qilib, aniq raqamlarga asoslangan marketing strategiyasini tuzamiz. Maqsadimiz — haqiqiy xaridorlarni jalb qiladigan va savdoni oshiradigan tizim qurish."
                                    : lang === 'ru'
                                        ? "Мы проводим глубокий аудит бизнеса девелоперов и создаем стратегию на основе цифр. Наша цель — построить систему, привлекающую реальных покупателей и увеличивающую продажи."
                                        : lang === 'tj'
                                            ? "Мо аудити амиқи бизнеси девелоперонро мегузаронем ва стратегияро дар асоси рақамҳо месозем. Мақсади мо — сохтани системае, ки харидорони воқеиро ҷалб кунад ва фурӯшро зиёд кунад."
                                            : "We conduct a deep audit of developers' businesses and build data-driven marketing strategies. Our goal is to create a system that attracts real buyers and boosts sales."}
                            </p>

                            <div className="inline-flex items-center gap-4 text-white font-medium text-sm sm:text-base">
                                <span className="w-8 sm:w-12 h-[2px] bg-primary" />
                                {lang === 'uz' ? "Biznesingiz o'sishiga yordam beramiz" : lang === 'ru' ? "Помогаем вашему бизнесу расти" : lang === 'tj' ? "Ба рушди бизнеси шумо мусоидат мекунем" : "Helping your business grow"}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="w-full xl:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group p-6 sm:p-10 bg-background rounded-2xl sm:rounded-3xl border border-surface-hover hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 tracking-tight drop-shadow-lg group-hover:text-primary transition-colors duration-500">
                                        {stat.number}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{stat.label}</h3>
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
