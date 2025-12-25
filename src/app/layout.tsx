import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musaalioglu.dev"),
  title: {
    default: "Musa Alioğlu | Frontend Developer",
    template: "%s | Musa Alioğlu",
  },
  description:
    "3 yıllık profesyonel deneyime sahip Frontend Developer. JavaScript, TypeScript, React, Next.js ile modern, responsive ve kullanıcı dostu web uygulamaları geliştiriyorum.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Musa Alioğlu",
    "TailwindCSS",
    "shadcn/ui",
  ],
  authors: [{ name: "Musa Alioğlu" }],
  creator: "Musa Alioğlu",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://musaalioglu.dev",
    title: "Musa Alioğlu | Frontend Developer",
    description:
      "3 yıllık profesyonel deneyime sahip Frontend Developer. JavaScript, TypeScript, React, Next.js ile modern web uygulamaları geliştiriyorum.",
    siteName: "Musa Alioğlu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Alioğlu | Frontend Developer",
    description:
      "3 yıllık profesyonel deneyime sahip Frontend Developer. React, Next.js, TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
