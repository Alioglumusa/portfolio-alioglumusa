"use client";

import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alioglumusa/' },
  { name: 'GitHub', href: 'https://github.com/Alioglumusa' },
  { name: 'Medium', href: 'https://medium.com/@alioglumusa34' },
  { name: 'CodePen', href: 'https://codepen.io/Alioglumusa' },
  { name: 'CodeSandbox', href: 'https://codesandbox.io/u/alioglumusa' },
];

export function Contact() {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('alioglumusa34@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">05</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.contact.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Content */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {locale === 'tr' 
              ? 'Birlikte çalışalım mı?' 
              : "Let's work together?"
            }
          </h3>
          <p className="text-muted-foreground text-lg mb-10">
            {t.contact.description}
          </p>

          {/* Email */}
          <div className="inline-flex items-center gap-3 mb-10">
            <a
              href="mailto:alioglumusa34@gmail.com"
              className="text-xl sm:text-2xl font-medium hover:text-muted-foreground transition-colors"
            >
              alioglumusa34@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title={locale === 'tr' ? 'Kopyala' : 'Copy'}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="mb-10">
            <a
              href="tel:+905344026075"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +90 534 402 60 75
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                asChild
                className="group rounded-full"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
