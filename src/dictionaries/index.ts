import { uz } from './uz';
import { ru } from './ru';
import { en } from './en';
import { tj } from './tj';

const dictionaries = {
    uz,
    ru,
    en,
    tj,
};

export const getDictionary = (lang: 'uz' | 'ru' | 'en' | 'tj') => {
    return dictionaries[lang] || dictionaries['uz'];
};
