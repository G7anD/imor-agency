import { casesData } from "@/data/cases";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default async function CaseDetail({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;
    const safeLang = (['uz', 'ru', 'en', 'tj'].includes(lang) ? lang : 'uz') as 'uz' | 'ru' | 'en' | 'tj';
    const caseData = casesData.find(c => c.slug === slug);

    if (!caseData) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <h1 className="text-3xl text-white">Case study not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link
                    href={`/${safeLang}/cases`}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6 sm:mb-8 group text-sm sm:text-base"
                >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>
                        {safeLang === 'uz' ? 'Barcha loyihalar' : safeLang === 'ru' ? 'Все проекты' : safeLang === 'tj' ? 'Ҳамаи лоиҳаҳо' : 'All Projects'}
                    </span>
                </Link>

                {/* Header */}
                <div className="mb-10 sm:mb-16 md:mb-20">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        {caseData.category[safeLang]}
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
                        {caseData.title[safeLang]}
                    </h1>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 text-gray-400 border-t border-surface/50 pt-6 sm:pt-8 mt-6 sm:mt-8">
                        <div className="w-full sm:w-auto">
                            <span className="block text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2 text-gray-500">
                                {safeLang === 'uz' ? 'Xizmat' : safeLang === 'ru' ? 'Услуга' : safeLang === 'tj' ? 'Хизмат' : 'Service'}
                            </span>
                            <strong className="text-white text-base sm:text-lg font-medium">{caseData.category[safeLang]}</strong>
                        </div>
                        <div className="w-full sm:w-auto">
                            <span className="block text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2 text-gray-500">
                                {safeLang === 'uz' ? 'Rol' : safeLang === 'ru' ? 'Роль' : safeLang === 'tj' ? 'Нақш' : 'Role'}
                            </span>
                            <strong className="text-white text-base sm:text-lg font-medium">{caseData.role[safeLang]}</strong>
                        </div>
                    </div>
                </div>

                {/* Cover Image */}
                <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-12 sm:mb-16 md:mb-24">
                    <Image
                        src={caseData.coverImage}
                        alt={caseData.title[safeLang]}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 max-w-7xl mx-auto">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            {safeLang === 'uz' ? 'Loyiha haqida' : safeLang === 'ru' ? 'О проекте' : safeLang === 'tj' ? 'Дар бораи лоиҳа' : 'About the project'}
                        </h2>
                        <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-gray-300">
                            <p>{caseData.fullDescription[safeLang]}</p>
                        </div>

                        {caseData.galleryImages && caseData.galleryImages.length > 0 && (
                            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {caseData.galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group">
                                        <Image
                                            src={img}
                                            alt={`${caseData.title[safeLang]} gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar Data */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 sm:top-32 p-6 sm:p-8 rounded-2xl bg-surface/30 border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                                {safeLang === 'uz' ? 'Natijalar' : safeLang === 'ru' ? 'Результаты' : safeLang === 'tj' ? 'Натиҷаҳо' : 'Results'}
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {caseData.results[safeLang].map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-3 sm:gap-4">
                                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-0.5 sm:mt-1" />
                                        <span className="text-base sm:text-lg text-gray-300 font-medium">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
