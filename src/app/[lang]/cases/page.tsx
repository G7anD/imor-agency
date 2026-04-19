import { casesData } from "@/data/cases";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function CasesIndex({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const safeLang = (['uz', 'ru', 'en', 'tj'].includes(lang) ? lang : 'uz') as 'uz' | 'ru' | 'en' | 'tj';

    return (
        <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-4xl mb-12 sm:mb-16 md:mb-24">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                        {safeLang === 'uz' ? 'Barcha loyihalar' : safeLang === 'ru' ? 'Все проекты' : safeLang === 'tj' ? 'Ҳамаи лоиҳаҳо' : 'All Projects'}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400">
                        {safeLang === 'uz'
                            ? "Marketing yechimlarimiz yordamida har bir loyihaning o'ziga xos muammolariga qanday yechim topganimiz bilan tanishing."
                            : safeLang === 'ru'
                                ? 'Ознакомьтесь с тем, как наши маркетинговые решения помогли справиться с задачами каждого конкретного проекта.'
                                : safeLang === 'tj'
                                    ? 'Бо мисоли лоиҳаҳои зерин бубинед, ки ҳалли маркетингии мо чӣ тавр ба мушкилоти ҳар як лоиҳа ҷавоб дод.'
                                    : 'Discover how our marketing solutions solved the unique challenges of each project.'}
                    </p>
                </div>

                {/* Grid List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {casesData.filter(p => p.showOnListing).map((project) => (
                        <Link
                            key={project.id}
                            href={`/${safeLang}/cases/${project.slug}`}
                            className="group flex flex-col gap-4 sm:gap-6"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface/50">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title[safeLang]}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                                        {project.category[safeLang]}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                    {project.title[safeLang]}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 line-clamp-2">
                                    {project.shortDescription[safeLang]}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
