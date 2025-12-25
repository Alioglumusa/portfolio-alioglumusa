"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Building2 } from 'lucide-react';

const projectTechnologies: Record<string, string[]> = {
  warehouse: ['React', 'JavaScript', 'Bootstrap'],
  hippist: ['Next.js', 'React', 'TypeScript', 'Redux', 'Bootstrap', 'REST API'],
  landing: ['React', 'TypeScript', 'TailwindCSS'],
  wallet: ['React', 'TypeScript', 'Redux', 'TailwindCSS'],
  admin: ['React', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
  fraud: ['React', 'TypeScript', 'Redux', 'Thunk', 'TailwindCSS', 'shadcn/ui'],
};

export function Projects() {
  const { t, locale } = useLanguage();

  const projects = [
    { 
      key: 'hippist', 
      data: t.projects.hippist, 
      featured: true,
      fullDescription: locale === 'tr' 
        ? 'Kişiselleştirilmiş seyahat ve yaşam tarzı önerileri sunan yapay zeka destekli platform. Ölçeklenebilir bir yapay zeka entegre sistem için frontend arayüzleri ve bileşen yapısı geliştirdim. Proje, Türkiye İş Bankası Cohort\'una kabul edildi ve inovasyon ödülü aldı.'
        : 'An AI-powered platform that provides personalized travel and lifestyle suggestions. Developed frontend interfaces and component structure for a scalable AI-integrated system. Project was accepted into the Türkiye İş Bankası Cohort and received recognition for innovation.'
    },
    { 
      key: 'fraud', 
      data: t.projects.fraud, 
      featured: true,
      fullDescription: locale === 'tr'
        ? 'Dolandırıcılık faaliyetlerini tespit etmek, araştırmak ve yönetmek için özel arayüz. Şüpheli işlemleri ve kullanıcı davranışlarını işaretlemek için interaktif dashboard\'lar ve araştırma araçları geliştirdim. Filtreler, uyarılar, vaka yönetimi akışları ve operatörler için toplu işlem yetenekleri implementasyonu. Hızlı yanıt için backend fraud API\'leri ve gerçek zamanlı veri akışlarıyla frontend entegrasyonu.'
        : 'A dedicated interface for detecting, investigating, and managing fraudulent activities. Developed interactive dashboards and investigation tools to flag suspicious transactions and user behavior. Implemented filters, alerts, case management flows, and bulk action capabilities for operators. Integrated frontend with backend fraud APIs and real-time data streams for fast response.'
    },
    { 
      key: 'wallet', 
      data: t.projects.wallet, 
      featured: false,
      fullDescription: locale === 'tr'
        ? 'Kullanıcı fonları ve işlemlerini yönetmek için güvenli web cüzdanı. Responsive cüzdan UI, işlem akışları ve gerçek zamanlı bakiye güncellemeleri implementasyonu. Kullanıcı girdilerinin güvenli işlenmesi ve backend API\'leriyle entegrasyon.'
        : 'A secure web wallet for managing user funds and transactions. Implemented responsive wallet UI, transaction flows, and real-time balance updates. Ensured secure handling of user inputs and integrated with backend APIs.'
    },
    { 
      key: 'admin', 
      data: t.projects.admin, 
      featured: false,
      fullDescription: locale === 'tr'
        ? 'Platform yönetimi ve kullanıcı yönetimi için dahili dashboard. Kullanıcı/işlem yönetimi, rol tabanlı erişim ve analitik görünümler için admin arayüzleri. Admin iş akışları için kullanılabilirlik ve performansa odaklanma.'
        : 'Internal dashboard for platform administration and user management. Built admin interfaces for user/transaction management, role-based access, and analytics views. Focused on usability and performance for admin workflows.'
    },
    { 
      key: 'landing', 
      data: t.projects.landing, 
      featured: false,
      fullDescription: locale === 'tr'
        ? 'Şirketin halka açık platformları için modern ve dönüşüm odaklı landing page\'ler. Mobil uyumluluk, hızlı yükleme süreleri ve SEO dostu tasarım.'
        : 'Created modern and conversion-focused landing pages for the company\'s public-facing platforms. Ensured mobile responsiveness, fast load times, and SEO-friendly design.'
    },
    { 
      key: 'warehouse', 
      data: t.projects.warehouse, 
      featured: false,
      fullDescription: locale === 'tr'
        ? 'Envanter ve depo takibi için tasarlanmış dahili kurumsal araç. Lojistik görünürlüğünü artırmak için dashboard görünümleri, formlar ve dinamik tablolar implementasyonu.'
        : 'Internal enterprise tool designed for inventory and warehouse tracking. Implemented dashboard views, forms, and dynamic tables to improve logistics visibility.'
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">03</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.projects.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-8">
          {projects.filter(p => p.featured).map((project) => (
            <Card
              key={project.key}
              className="group overflow-hidden border-border/50 bg-card hover-lift"
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.data.company}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {project.data.title}
                    </h3>
                  </div>
                  {project.key === 'hippist' && (
                    <Badge className="gap-1 bg-foreground text-background">
                      <Award className="h-3 w-3" />
                      {locale === 'tr' ? 'Ödüllü' : 'Award Winner'}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {projectTechnologies[project.key]?.map((tech) => (
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
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.filter(p => !p.featured).map((project) => (
            <Card
              key={project.key}
              className="group p-6 border-border/50 bg-card/50 hover-lift"
            >
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">{project.data.company}</span>
              </div>
              <h3 className="font-semibold mb-3">{project.data.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {projectTechnologies[project.key]?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
