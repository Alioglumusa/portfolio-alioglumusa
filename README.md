# Musa Alioğlu - Portfolio

Modern, responsive ve SEO uyumlu kişisel portfolyo web sitesi.

## 🚀 Teknolojiler

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript
- **Styling:** TailwindCSS v4
- **UI Kütüphanesi:** shadcn/ui
- **Tema:** Dark/Light Mode (next-themes)
- **i18n:** Türkçe/İngilizce dil desteği

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global stiller
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Ana sayfa
├── components/             # React bileşenleri
│   ├── ui/                 # shadcn/ui bileşenleri
│   ├── Header.tsx          # Navigasyon
│   ├── Hero.tsx            # Hero bölümü
│   ├── About.tsx           # Hakkımda
│   ├── Experience.tsx      # Deneyim
│   ├── Projects.tsx        # Projeler
│   ├── Skills.tsx          # Yetenekler
│   ├── Contact.tsx         # İletişim
│   ├── Footer.tsx          # Footer
│   ├── ScrollToTop.tsx     # Yukarı çık butonu
│   └── TechIcons.tsx       # Teknoloji ikonları
├── context/                # React Context
│   ├── LanguageContext.tsx # Dil yönetimi
│   └── ThemeProvider.tsx   # Tema yönetimi
├── i18n/                   # Çoklu dil desteği
│   ├── index.ts
│   └── locales/
│       ├── tr.json         # Türkçe çeviriler
│       └── en.json         # İngilizce çeviriler
└── lib/
    └── utils.ts            # Yardımcı fonksiyonlar
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusu
npm start
```

## 📝 Özelleştirme

### Profil Resmi
`public/profile.jpg` dosyasını kendi fotoğrafınızla değiştirin.

### CV
`public/Musa_Alioglu_CV.pdf` dosyasını kendi CV'nizle değiştirin.

### İçerik
`src/i18n/locales/` klasöründeki JSON dosyalarını düzenleyerek içeriği değiştirebilirsiniz.

### Sosyal Medya Linkleri
`src/components/Hero.tsx` ve `src/components/Footer.tsx` dosyalarındaki `socialLinks` dizisini güncelleyin.

## 🌐 Deploy

Vercel ile deploy etmek için:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 Lisans

MIT License

---

**Musa Alioğlu** - Frontend Developer
