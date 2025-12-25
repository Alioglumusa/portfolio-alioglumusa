"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, ArrowUp } from 'lucide-react';

// Social media icons
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const CodepenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.03a.644.644 0 01-.017-.047l-.01-.031c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.031a.64.64 0 01.017-.047l.014-.03.021-.043.019-.03a.57.57 0 01.08-.1l.026-.025.036-.03.029-.022.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.029.022.036.03.026.025.032.034.021.028c.025.035.046.072.067.11l.014.03.017.047.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm0 10.492L9.745 12 12 13.51 14.255 12zm.638-4.668v2.149l3.617 2.41L18.144 9.4zM5.856 9.4l1.889.983 3.617-2.41V5.824zm0 5.2l2.049.983L12 13.51V10.49L7.905 12.9zm6.144 3.576v-2.149l-3.617-2.41-1.889.984zm.638-2.149v2.149l4.756-3.167-1.889-.984zm0-5.535l4.094 2.41 1.889-.983-4.756-3.167v2.149z"/>
  </svg>
);

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alioglumusa/', icon: LinkedinIcon },
  { name: 'GitHub', href: 'https://github.com/Alioglumusa', icon: GithubIcon },
  { name: 'Medium', href: 'https://medium.com/@alioglumusa34', icon: MediumIcon },
  { name: 'CodePen', href: 'https://codepen.io/Alioglumusa', icon: CodepenIcon },
];

export function Footer() {
  const { t, locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-12 grid sm:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div>
            <a href="#" className="text-lg font-bold tracking-tight mb-2 block">
              musa<span className="text-muted-foreground">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Frontend Developer
            </p>
          </div>

          {/* Center - Download CV */}
          <div className="flex justify-start md:justify-center">
            <Button asChild className="rounded-full px-6">
              <a href="/Musa_Alioglu_CV.pdf" download="Musa_Alioglu_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </div>

          {/* Right - Social & Back to Top */}
          <div className="flex items-center justify-start sm:justify-end gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent hover:border-foreground/20 transition-all"
                  title={social.name}
                >
                  <Icon />
                </a>
              );
            })}
            <div className="w-px h-6 bg-border mx-2" />
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-accent hover:border-foreground/20 transition-all"
              title={locale === 'tr' ? 'Yukarı' : 'Back to top'}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Musa Alioğlu. {t.footer.rights}</p>
          <p>
            {locale === 'tr' ? 'Next.js ve React ile yapıldı' : 'Built with Next.js and React'}
          </p>
        </div>
      </div>
    </footer>
  );
}
