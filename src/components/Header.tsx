"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      cancelAnimationFrame(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'w-[95%] max-w-4xl' : 'w-[90%] max-w-3xl'
        }`}
      >
        <div className={`glass rounded-2xl border border-border/50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}>
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
            >
              musa<span className="text-muted-foreground">.dev</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Language */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[120px]">
                  <DropdownMenuItem
                    onClick={() => setLocale('tr')}
                    className={locale === 'tr' ? 'bg-accent' : ''}
                  >
                    Türkçe
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLocale('en')}
                    className={locale === 'en' ? 'bg-accent' : ''}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme */}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-20 left-4 right-4 glass rounded-2xl border border-border/50 shadow-xl p-4 flex flex-col gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-sm font-medium hover:bg-accent rounded-xl transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
