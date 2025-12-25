"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { locale } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-foreground text-background shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label={locale === 'tr' ? 'Yukarı çık' : 'Scroll to top'}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

