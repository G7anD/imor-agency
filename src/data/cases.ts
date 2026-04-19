import { ReactNode } from "react";

export interface CaseStudy {
    id: string;
    slug: string;
    title: Record<'uz' | 'ru' | 'en' | 'tj', string>;
    category: Record<'uz' | 'ru' | 'en' | 'tj', string>;
    shortDescription: Record<'uz' | 'ru' | 'en' | 'tj', string>;
    fullDescription: Record<'uz' | 'ru' | 'en' | 'tj', ReactNode | string>;
    client: string;
    role: Record<'uz' | 'ru' | 'en' | 'tj', string>;
    coverImage: string;
    galleryImages: string[];
    results: Record<'uz' | 'ru' | 'en' | 'tj', string[]>;
    showOnHomepage: boolean;
    showOnListing: boolean;
}

export const casesData: CaseStudy[] = [
    {
        id: "1",
        slug: "oq-mahalla",
        title: {
            uz: "Oq Mahalla (Nurafshon)",
            ru: "Oq Mahalla (Нурафшан)",
            en: "Oq Mahalla (Nurafshon)",
            tj: "Oq Mahalla (Нурафшон)"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Mijozlarni jalb qilish narxini arzonlashtirish va tashriflar sonini oshirish.",
            ru: "Снижение стоимости привлечения клиентов и увеличение числа визитов.",
            en: "Reducing customer acquisition costs and increasing the number of site visits.",
            tj: "Кам кардани арзиши ҷалби муштариён ва зиёд кардани шумораи ташрифот."
        },
        fullDescription: {
            uz: "Nurafshon shahridagi turar-joy majmuasi uchun mijozlar oqimini arzonlashtirish va tashriflar sonini oshirishga qaratilgan kompleks marketing strategiyasi.",
            ru: "Комплексная маркетинговая стратегия для жилого комплекса в Нурафшане, направленная на снижение стоимости привлечения клиентов и увеличение числа визитов.",
            en: "A comprehensive marketing strategy for a residential complex in Nurafshon, aimed at reducing lead costs and increasing site visits.",
            tj: "Стратегияи комплексии маркетинг барои маҷмааи истиқоматӣ дар Нурафшон, ки ба кам кардани арзиши ҷалби муштариён ва зиёд кардани ташрифот нигаронида шудааст."
        },
        client: "Oq Mahalla",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "/portfolio/oq-mahalla/cover.webp",
        galleryImages: [
            "/portfolio/oq-mahalla/gallery-1.webp",
            "/portfolio/oq-mahalla/gallery-2.webp",
            "/portfolio/oq-mahalla/gallery-3.webp"
        ],
        results: {
            uz: ["12,8% liddan tashrifga konversiya", "$0,7 – lid narxi (CPL)", "17 ta aniq sotuv"],
            ru: ["12,8% конверсия из лида в визит", "$0,7 – стоимость лида (CPL)", "17 продаж"],
            en: ["12.8% lead-to-visit conversion rate", "$0.7 – Cost Per Lead (CPL)", "17 actual sales"],
            tj: ["12,8% конверсия аз лид ба ташриф", "$0,7 – арзиши лид (CPL)", "17 фурӯши аниқ"]
        },
        showOnHomepage: true,
        showOnListing: true
    },
    {
        id: "2",
        slug: "navbahor",
        title: {
            uz: "Navbahor",
            ru: "Navbahor",
            en: "Navbahor",
            tj: "Навбаҳор"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Tez kunda batafsil ma'lumot e'lon qilinadi.",
            ru: "Подробная информация будет опубликована в ближайшее время.",
            en: "Detailed information coming soon.",
            tj: "Маълумоти муфассал ба наздикӣ нашр мешавад."
        },
        fullDescription: {
            uz: "Tez kunda batafsil ma'lumot e'lon qilinadi.",
            ru: "Подробная информация будет опубликована в ближайшее время.",
            en: "Detailed information coming soon.",
            tj: "Маълумоти муфассал ба наздикӣ нашр мешавад."
        },
        client: "Navbahor",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "/portfolio/navbahor/cover.webp",
        galleryImages: [
            "/portfolio/navbahor/gallery-1.webp",
            "/portfolio/navbahor/gallery-2.webp",
            "/portfolio/navbahor/gallery-3.webp"
        ],
        results: {
            uz: ["Natijalar tez kunda e'lon qilinadi"],
            ru: ["Результаты будут объявлены в ближайшее время"],
            en: ["Results coming soon"],
            tj: ["Натиҷаҳо ба наздикӣ эълон мешаванд"]
        },
        showOnHomepage: true,
        showOnListing: false
    },
    {
        id: "3",
        slug: "bochka-resort",
        title: {
            uz: "Bochka Resort",
            ru: "Bochka Resort",
            en: "Bochka Resort",
            tj: "Bochka Resort"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Potensial xaridorlarning sifatini yaxshilash va ularni tizimlashtirish.",
            ru: "Повышение качества входящих заявок и их систематизация.",
            en: "Improving lead quality and systematizing potential buyers.",
            tj: "Баланд бардоштани сифати харидорони эҳтимолӣ ва системасозии онҳо."
        },
        fullDescription: {
            uz: "Dam olish maskani loyihasi uchun potensial xaridorlar bazasini sifatli yig'ish va ularni CRM tizimi orqali avtomatik tizimlashtirish.",
            ru: "Сбор качественной базы потенциальных покупателей для проекта курортного типа и их систематизация через CRM-систему.",
            en: "Building a high-quality database of potential buyers for a resort project and systematizing them via CRM.",
            tj: "Ҷамъ кардани базаи сифатноки харидорони эҳтимолӣ барои лоиҳаи курортӣ ва системасозии онҳо тавассути CRM."
        },
        client: "Bochka Resort",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1620626011744-18c7fd29fc34?w=800&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
        ],
        results: {
            uz: ["50,2% sifatli lid konversiyasi", "28 ta sotuv", "34% tashrifdan sotuvga konversiya"],
            ru: ["50,2% конверсия качественных лидов", "28 продаж", "34% конверсия из визита в продажу"],
            en: ["50.2% qualified lead conversion rate", "28 sales", "34% visit-to-sale conversion rate"],
            tj: ["50,2% конверсияи лидҳои сифатнок", "28 фурӯш", "34% конверсия аз ташриф ба фурӯш"]
        },
        showOnHomepage: false,
        showOnListing: true
    },
    {
        id: "4",
        slug: "manzara",
        title: {
            uz: "Manzara (Urgut)",
            ru: "Manzara (Ургут)",
            en: "Manzara (Urgut)",
            tj: "Manzara (Ургут)"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Reklama xarajatlarini optimallashtirish va xaridorlar qiziqishini oshirish.",
            ru: "Оптимизация расходов на рекламу и рост интереса целевой аудитории.",
            en: "Optimizing ad spend and boosting target audience interest.",
            tj: "Оптималсозии хароҷоти реклама ва афзоиши таваҷҷуҳи аудиторияи мақсаднок."
        },
        fullDescription: {
            uz: "Urgutdagi qurilish loyihasi uchun reklama byudjetini optimallashtirish va xaridorlarning loyihaga bo'lgan qiziqishini sezilarli darajada oshirish.",
            ru: "Оптимизация рекламного бюджета и значительное повышение интереса целевой аудитории к объекту в Ургуте.",
            en: "Optimizing the advertising budget and significantly increasing buyer interest for a construction project in Urgut.",
            tj: "Оптималсозии буҷети рекламавӣ ва ба таври назаррас зиёд кардани таваҷҷуҳи харидорон ба лоиҳаи сохтмонӣ дар Ургут."
        },
        client: "Manzara",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "/portfolio/manzara/cover.webp",
        galleryImages: [
            "/portfolio/manzara/gallery-1.webp",
            "/portfolio/manzara/gallery-2.webp"
        ],
        results: {
            uz: ["53,7% sifatli lid konversiyasi", "14 ta sotuv", "153$ – bitta mijoz narxi (CAC)"],
            ru: ["53,7% конверсия качественных лидов", "14 продаж", "$153 – стоимость привлечения клиента (CAC)"],
            en: ["53.7% qualified lead conversion rate", "14 sales", "$153 – Customer Acquisition Cost (CAC)"],
            tj: ["53,7% конверсияи лидҳои сифатнок", "14 фурӯш", "$153 – арзиши ҷалби муштарӣ (CAC)"]
        },
        showOnHomepage: true,
        showOnListing: true
    },
    {
        id: "5",
        slug: "saxovat-uylari",
        title: {
            uz: "Saxovat Uylari (Termiz)",
            ru: "Saxovat Uylari (Термез)",
            en: "Saxovat Uylari (Termez)",
            tj: "Saxovat Uylari (Тирмиз)"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Yangi qurilish loyihasi uchun bozorda o'z o'rnini topish va tanilish.",
            ru: "Успешный вывод и узнаваемость нового строительного объекта на рынке.",
            en: "Successfully launching a new construction project and building brand awareness.",
            tj: "Бо муваффақият баровардани лоиҳаи нави сохтмонӣ ва шинохтани бренд дар бозор."
        },
        fullDescription: {
            uz: "Termiz shahridagi biznes klass turar-joy majmuasini bozorda to'g'ri pozitsiyalash va mijozlar ishonchini qozonish orqali brend tanilishini ta'minlash.",
            ru: "Позиционирование жилого комплекса бизнес-класса в Термезе и укрепление доверия клиентов для повышения узнаваемости бренда.",
            en: "Positioning a business-class residential complex in Termez, building customer trust, and ensuring brand awareness.",
            tj: "Мавқеъгузории маҷмааи истиқоматии бизнес-класс дар Тирмиз ва мустаҳкам кардани эътимоди муштариён барои шинохти бренд."
        },
        client: "Saxovat Uylari",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "/portfolio/saxovat-uylari/cover.webp",
        galleryImages: [
            "/portfolio/saxovat-uylari/gallery-1.webp",
            "/portfolio/saxovat-uylari/gallery-2.webp",
            "/portfolio/saxovat-uylari/gallery-3.webp"
        ],
        results: {
            uz: ["Natijalar tez kunda e'lon qilinadi"],
            ru: ["Результаты будут объявлены в ближайшее время"],
            en: ["Results coming soon"],
            tj: ["Натиҷаҳо ба наздикӣ эълон мешаванд"]
        },
        showOnHomepage: true,
        showOnListing: true
    },
    {
        id: "6",
        slug: "arkand-group",
        title: {
            uz: "Arkand Group (Panjakent)",
            ru: "Arkand Group (Пенджикент)",
            en: "Arkand Group (Panjakent)",
            tj: "Arkand Group (Панҷакент)"
        },
        category: {
            uz: "Performance Marketing",
            ru: "Перфоманс-маркетинг",
            en: "Performance Marketing",
            tj: "Performance Маркетинг"
        },
        shortDescription: {
            uz: "Sotuvlar oqimini barqarorlashtirish va mijozlarni jalb qilish tizimini yo'lga qo'yish.",
            ru: "Стабилизация потока продаж и внедрение системы привлечения клиентов.",
            en: "Stabilizing the sales flow and implementing a customer acquisition system.",
            tj: "Барқароргардонии ҷараёни фурӯш ва ҷорӣ кардани системаи ҷалби муштариён."
        },
        fullDescription: {
            uz: "Panjakentdagi biznes klass loyihalari (Simurg' City va Sohil) uchun sotuv bo'limi bilan integratsiyani kuchaytirish va barqaror mijozlar oqimini yo'lga qo'yish.",
            ru: "Усиление интеграции с отделом продаж и обеспечение стабильного потока клиентов для проектов бизнес-класса (Simurg' City и Sohil).",
            en: "Strengthening integration with the sales department and ensuring a stable flow of clients for business-class projects (Simurg City and Sohil).",
            tj: "Мустаҳкам кардани интегратсия бо шуъбаи фурӯш ва таъмини ҷараёни барқарори муштариён барои лоиҳаҳои бизнес-класс (Simurg' City ва Sohil)."
        },
        client: "Arkand Group",
        role: {
            uz: "Marketing hamkori",
            ru: "Маркетинг партнер",
            en: "Marketing Partner",
            tj: "Ҳамкори маркетинг"
        },
        coverImage: "/portfolio/arkand-group/cover.webp",
        galleryImages: [
            "/portfolio/arkand-group/gallery-1.webp",
            "/portfolio/arkand-group/gallery-2.webp",
            "/portfolio/arkand-group/gallery-3.webp"
        ],
        results: {
            uz: ["Natijalar tez kunda e'lon qilinadi"],
            ru: ["Результаты будут объявлены в ближайшее время"],
            en: ["Results coming soon"],
            tj: ["Натиҷаҳо ба наздикӣ эълон мешаванд"]
        },
        showOnHomepage: true,
        showOnListing: true
    }
];

export const getCaseBySlug = (slug: string): CaseStudy | undefined => {
    return casesData.find(c => c.slug === slug);
};
