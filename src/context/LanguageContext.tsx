"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Locale, translations } from '@/i18n';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.tr;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'tr' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = translations[locale];

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

