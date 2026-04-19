"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";

import { MouseEvent, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  dict: any;
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsMobileMenuOpen(false);

    // If on a subpage (cases, etc.), navigate to homepage with optional hash
    if (pathname !== `/${lang}` && pathname !== `/${lang}/`) {
      e.preventDefault();
      router.push(`/${lang}${target === 'top' ? '' : target}`);
      return;
    }

    // On homepage — smooth scroll if lenis available
    if (lenis) {
      e.preventDefault();
      if (target === 'top') {
        lenis.scrollTo(0);
      } else {
        lenis.scrollTo(target);
      }
    }
    // If lenis is not ready, let the default <a href="#section"> behavior work
  };

  const switchLanguage = (newLang: string) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath || `/${newLang}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="flex items-center gap-2 sm:gap-3 decoration-transparent" onClick={(e) => handleScroll(e, "top")}>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-primary/20">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Imor.agency Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-wider text-white">imor<span className="text-primary">.agency</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href={`/${lang}#about`} onClick={(e) => handleScroll(e, "#about")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-none">{dict.about}</a></li>
              <li><a href={`/${lang}#services`} onClick={(e) => handleScroll(e, "#services")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-none">{dict.services}</a></li>
              <li><a href={`/${lang}#cases`} onClick={(e) => handleScroll(e, "#cases")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-none">{dict.cases}</a></li>
              <li><a href={`/${lang}#contact`} onClick={(e) => handleScroll(e, "#contact")} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-none">{dict.contact}</a></li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
              <Globe size={16} className="text-gray-400" />
              <button onClick={() => switchLanguage('uz')} className={`text-xs font-semibold uppercase tracking-wider transition-colors ${lang === 'uz' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>UZ</button>
              <span className="text-gray-700 text-xs">|</span>
              <button onClick={() => switchLanguage('ru')} className={`text-xs font-semibold uppercase tracking-wider transition-colors ${lang === 'ru' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>RU</button>
              <span className="text-gray-700 text-xs">|</span>
              <button onClick={() => switchLanguage('en')} className={`text-xs font-semibold uppercase tracking-wider transition-colors ${lang === 'en' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>EN</button>
              <span className="text-gray-700 text-xs">|</span>
              <button onClick={() => switchLanguage('tj')} className={`text-xs font-semibold uppercase tracking-wider transition-colors ${lang === 'tj' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}>TJ</button>
            </div>
            <a href="https://t.me/imoragency" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-medium text-background bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,191,165,0.3)] hover:shadow-[0_0_25px_rgba(0,191,165,0.5)]">
              {dict.cta}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-6">
            <div className="flex items-center gap-2 border border-white/10 rounded-full px-2 py-1 bg-white/5 backdrop-blur-sm">
              <button onClick={() => switchLanguage('uz')} className={`text-[10px] font-bold ${lang === 'uz' ? 'text-primary' : 'text-gray-500'}`}>UZ</button>
              <span className="text-gray-700 text-[10px]">|</span>
              <button onClick={() => switchLanguage('ru')} className={`text-[10px] font-bold ${lang === 'ru' ? 'text-primary' : 'text-gray-500'}`}>RU</button>
              <span className="text-gray-700 text-[10px]">|</span>
              <button onClick={() => switchLanguage('en')} className={`text-[10px] font-bold ${lang === 'en' ? 'text-primary' : 'text-gray-500'}`}>EN</button>
              <span className="text-gray-700 text-[10px]">|</span>
              <button onClick={() => switchLanguage('tj')} className={`text-[10px] font-bold ${lang === 'tj' ? 'text-primary' : 'text-gray-500'}`}>TJ</button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary focus:outline-none transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-surface/50 shadow-2xl">
          <nav className="flex flex-col py-4 px-4">
            <a href={`/${lang}#about`} onClick={(e) => handleScroll(e, "#about")} className="py-3 text-base font-medium text-gray-300 hover:text-primary transition-colors border-b border-surface/30">{dict.about}</a>
            <a href={`/${lang}#services`} onClick={(e) => handleScroll(e, "#services")} className="py-3 text-base font-medium text-gray-300 hover:text-primary transition-colors border-b border-surface/30">{dict.services}</a>
            <a href={`/${lang}#cases`} onClick={(e) => handleScroll(e, "#cases")} className="py-3 text-base font-medium text-gray-300 hover:text-primary transition-colors border-b border-surface/30">{dict.cases}</a>
            <a href={`/${lang}#contact`} onClick={(e) => handleScroll(e, "#contact")} className="py-3 text-base font-medium text-gray-300 hover:text-primary transition-colors border-b border-surface/30">{dict.contact}</a>

            <div className="pt-6 pb-2">
              <a href="https://t.me/imoragency" target="_blank" rel="noopener noreferrer" className="block text-center w-full px-5 py-3 text-sm font-medium text-background bg-primary rounded-full hover:bg-primary-dark transition-all duration-300">
                {dict.cta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
