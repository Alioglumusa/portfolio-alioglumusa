import tr from './locales/tr.json';
import en from './locales/en.json';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  tr,
  en,
} as const;

export type TranslationKey = keyof typeof tr;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

