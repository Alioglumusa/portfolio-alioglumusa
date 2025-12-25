"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { TechIcons } from '@/components/TechIcons';
import { GraduationCap, Briefcase, Code2, Zap } from 'lucide-react';

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 
  'TailwindCSS', 'Bootstrap', 'SASS', 'Material UI', 'shadcn/ui', 'Git', 'Figma'
];

export function About() {
  const { t, locale } = useLanguage();

  const highlights = [
    {
      icon: Briefcase,
      value: '3+',
      label: locale === 'tr' ? 'Yıl Deneyim' : 'Years Exp.',
    },
    {
      icon: Code2,
      value: '6+',
      label: locale === 'tr' ? 'Proje' : 'Projects',
    },
    {
      icon: Zap,
      value: '4',
      label: locale === 'tr' ? 'Şirket' : 'Companies',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">01</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.about.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.focus}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Education & Tech */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <Card className="p-6 hover-lift border-border/50 bg-card/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {t.about.education}
                  </p>
                  <p className="font-medium mb-1">{t.about.university}</p>
                  <p className="text-sm text-muted-foreground">{t.about.degree}</p>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{t.about.year}</p>
                </div>
              </div>
            </Card>

            {/* Technologies with Icons */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                {locale === 'tr' ? 'Teknolojiler' : 'Technologies'}
              </p>
              <TechIcons technologies={technologies} size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
