"use client";

import { useLanguage } from '@/context/LanguageContext';
import { TechIcons } from '@/components/TechIcons';

const skillCategories = [
  {
    title: { tr: 'Programlama Dilleri', en: 'Languages' },
    skills: ['JavaScript', 'TypeScript'],
    extras: ['HTML5', 'CSS3'],
  },
  {
    title: { tr: 'Framework & Kütüphaneler', en: 'Frameworks & Libraries' },
    skills: ['React', 'Next.js', 'Redux'],
    extras: ['Redux Toolkit', 'React Router', 'Context API', 'Inertia.js'],
  },
  {
    title: { tr: 'Styling & UI', en: 'Styling & UI' },
    skills: ['TailwindCSS', 'Bootstrap', 'SASS', 'Material UI', 'shadcn/ui'],
    extras: [],
  },
  {
    title: { tr: 'Araçlar & Platformlar', en: 'Tools & Platforms' },
    skills: ['Git', 'Figma'],
    extras: ['GitHub', 'Firebase', 'REST APIs', 'Photoshop'],
  },
];

const practices = [
  { tr: 'Responsive Design', en: 'Responsive Design' },
  { tr: 'Component Architecture', en: 'Component Architecture' },
  { tr: 'State Management', en: 'State Management' },
  { tr: 'SEO Optimizasyonu', en: 'SEO Optimization' },
  { tr: 'UI/UX Prensipleri', en: 'UI/UX Principles' },
  { tr: 'Clean Code', en: 'Clean Code' },
  { tr: 'Agile/Scrum', en: 'Agile/Scrum' },
];

export function Skills() {
  const { t, locale } = useLanguage();

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">04</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.skills.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title.en}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                {locale === 'tr' ? category.title.tr : category.title.en}
              </h3>
              
              {/* Icons */}
              <div className="mb-4">
                <TechIcons technologies={category.skills} size="lg" />
              </div>
              
              {/* Extra skills as text */}
              {category.extras.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {category.extras.map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Practices */}
        <div className="border-t border-border pt-12">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6 text-center">
            {locale === 'tr' ? 'Yaklaşım & Metodoloji' : 'Approach & Methodology'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {practices.map((practice) => (
              <div
                key={practice.en}
                className="px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:bg-accent hover:border-foreground/20 transition-all cursor-default"
              >
                {locale === 'tr' ? practice.tr : practice.en}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
