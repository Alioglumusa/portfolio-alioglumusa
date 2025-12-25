"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Building2, Calendar } from 'lucide-react';

const technologies: Record<string, string[]> = {
  parolapara: ['React', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Redux', 'Thunk'],
  argedor: ['Next.js', 'React', 'TypeScript', 'Redux', 'Bootstrap', 'REST API'],
  llcsoft: ['React', 'JavaScript', 'HTML', 'CSS', 'Git'],
  shmarine: ['Circuit Design', 'Prototyping', 'Documentation'],
};

export function Experience() {
  const { t, locale } = useLanguage();

  const experiences = [
    { key: 'parolapara', data: t.experience.parolapara },
    { key: 'argedor', data: t.experience.argedor },
    { key: 'llcsoft', data: t.experience.llcsoft },
    { key: 'shmarine', data: t.experience.shmarine },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">02</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.experience.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.key}
              className="p-6 sm:p-8 border-border/50 bg-card hover-lift"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left - Company Info */}
                <div className="lg:w-64 shrink-0">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-mono">{exp.data.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{exp.data.company}</span>
                  </div>
                </div>

                {/* Right - Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">
                    {exp.data.role}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.data.description}
                  </p>

                  {/* Tasks */}
                  <ul className="space-y-2 mb-5">
                    {exp.data.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {technologies[exp.key]?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
