import Link from "next/link";
import { Instagram, MapPin, Phone, Send } from "lucide-react";

interface FooterProps {
    dict?: any;
    lang?: string;
}

export default function Footer({ lang = 'uz' }: FooterProps) {
    return (
        <footer className="bg-surface border-t border-surface-hover py-12 sm:pt-16 sm:pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <Link href={`/${lang}`} className="inline-block decoration-transparent">
                            <span className="text-2xl font-bold tracking-wider text-white">imor<span className="text-primary">.agency</span></span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mt-4 text-sm sm:text-base leading-relaxed">
                            {lang === 'uz' ? "Biz faqatgina SMM emas, balki biznesingiz uchun to'liq marketing tizimini quramiz. Performance marketing va brending orqali savdoni oshiring." : lang === 'ru' ? 'Мы не просто занимаемся SMM, мы строим комплексную систему маркетинга для вашего бизнеса. Увеличивайте продажи через performance-маркетинг и брендинг.' : lang === 'tj' ? 'Мо на танҳо SMM мекунем, балки барои бизнеси шумо системаи пурраи маркетингро месозем. Тавассути performance-маркетинг ва брендинг фурӯшро зиёд кунед.' : "We don't just do SMM, we build a complete marketing system for your business. Increase sales through performance marketing and branding."}
                        </p>
                        <div className="flex items-center space-x-4 pt-2 justify-center sm:justify-start">
                            <a href="https://www.instagram.com/imor.agency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border border-surface-hover flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://t.me/imoragency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border border-surface-hover flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 sm:mb-6">{lang === 'uz' ? 'Kompaniya' : lang === 'ru' ? 'Компания' : lang === 'tj' ? 'Ширкат' : 'Company'}</h4>
                        <ul className="space-y-3">
                            <li><Link href={`/${lang}#about`} className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors decoration-transparent">{lang === 'uz' ? 'Biz haqimizda' : lang === 'ru' ? 'О нас' : lang === 'tj' ? 'Дар бораи мо' : 'About us'}</Link></li>
                            <li><Link href={`/${lang}#services`} className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors decoration-transparent">{lang === 'uz' ? 'Xizmatlar' : lang === 'ru' ? 'Услуги' : lang === 'tj' ? 'Хизматҳо' : 'Services'}</Link></li>
                            <li><Link href={`/${lang}#cases`} className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors decoration-transparent">{lang === 'uz' ? 'Keyslar' : lang === 'ru' ? 'Кейсы' : lang === 'tj' ? 'Кейсҳо' : 'Cases'}</Link></li>
                            <li><Link href={`/${lang}#contact`} className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors decoration-transparent">{lang === 'uz' ? 'Kontaktlar' : lang === 'ru' ? 'Контакты' : lang === 'tj' ? 'Тамос' : 'Contacts'}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h4 className="text-white font-semibold mb-4 sm:mb-6">{lang === 'uz' ? 'Aloqa' : lang === 'ru' ? 'Связь' : lang === 'tj' ? 'Алоқа' : 'Contact'}</h4>
                        <ul className="space-y-4 flex flex-col items-center sm:items-start">
                            <li className="flex items-start text-left max-w-xs sm:max-w-none">
                                <Phone className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" />
                                <a href="tel:+998948886842" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">+998 94 888 68 42</a>
                            </li>
                            <li className="flex items-start text-left max-w-xs sm:max-w-none">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" />
                                <span className="text-sm sm:text-base text-gray-400">Mirzo-Ulug'bek tumani, Shahriobod ko'chasi, 13, Toshkent, O'zbekiston</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-surface-hover flex flex-col items-center sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Imor Agency. {lang === 'uz' ? 'Barcha huquqlar himoyalangan.' : lang === 'ru' ? 'Все права защищены.' : lang === 'tj' ? 'Ҳамаи ҳуқуқҳо ҳифз шудаанд.' : 'All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
