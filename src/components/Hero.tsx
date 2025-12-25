"use client";

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Download, ArrowDown } from 'lucide-react';

// Social media icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const CodepenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.03a.644.644 0 01-.017-.047l-.01-.031c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.031a.64.64 0 01.017-.047l.014-.03.021-.043.019-.03a.57.57 0 01.08-.1l.026-.025.036-.03.029-.022.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.029.022.036.03.026.025.032.034.021.028c.025.035.046.072.067.11l.014.03.017.047.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm0 10.492L9.745 12 12 13.51 14.255 12zm.638-4.668v2.149l3.617 2.41L18.144 9.4zM5.856 9.4l1.889.983 3.617-2.41V5.824zm0 5.2l2.049.983L12 13.51V10.49L7.905 12.9zm6.144 3.576v-2.149l-3.617-2.41-1.889.984zm.638-2.149v2.149l4.756-3.167-1.889-.984zm0-5.535l4.094 2.41 1.889-.983-4.756-3.167v2.149z"/>
  </svg>
);

const CodesandboxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
  </svg>
);

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Alioglumusa', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alioglumusa/', icon: LinkedinIcon },
  { name: 'Medium', href: 'https://medium.com/@alioglumusa34', icon: MediumIcon },
  { name: 'CodePen', href: 'https://codepen.io/Alioglumusa', icon: CodepenIcon },
  { name: 'CodeSandbox', href: 'https://codesandbox.io/u/alioglumusa', icon: CodesandboxIcon },
];

export function Hero() {
  const { t, locale } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-8 animate-fade-up">
            <div className="md:w-60 md:h-60 w-44 h-44 rounded-full overflow-hidden border-4 border-border bg-muted">
              {!imageError ? (
                <img
                  src="/profile.jpg"
                  alt="Musa Alioğlu"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-muted-foreground bg-muted">
                  MA
                </div>
              )}
            </div>
            {/* Status */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <Badge 
                variant="secondary" 
                className="px-2.5 py-1 bg-background border border-border shadow-md text-[10px]"
              >
                <span className="relative flex h-1.5 w-1.5 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                {locale === 'tr' ? 'Müsait' : 'Available'}
              </Badge>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground animate-fade-up delay-100">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up delay-200">
              {t.hero.name}
            </h1>
            <div className="flex items-center justify-center gap-3 animate-fade-up delay-300">
              <div className="h-px w-12 bg-border" />
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {t.hero.role}
              </h2>
              <div className="h-px w-12 bg-border" />
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed mb-10 animate-fade-up delay-400">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-500">
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden px-8"
            >
              <a href="/Musa_Alioglu_CV.pdf" download="Musa_Alioglu_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
            
            {/* Social Links with Icons */}
            <div className="flex items-center gap-2">
              <TooltipProvider delayDuration={0}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-11 w-11 rounded-xl border border-border hover:bg-accent hover:border-foreground/20 transition-all flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Icon />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest">
          {locale === 'tr' ? 'Keşfet' : 'Scroll'}
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
