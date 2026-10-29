# Portfolio — Jalaludin Yusuf Al Af Ghani

Portofolio pribadi bertema **cybersecurity & QA** — dibangun dengan:

**Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion + Lucide**

![react](https://img.shields.io/badge/React-18-61dafb) ![ts](https://img.shields.io/badge/TypeScript-5-3178c6) ![vite](https://img.shields.io/badge/Vite-5-a855f7) ![tailwind](https://img.shields.io/badge/Tailwind-3-06b6d4)

## 🚀 Menjalankan

> Prasyarat: **Node.js 18+** ([nodejs.org](https://nodejs.org)) + VS Code
> (ekstensi rekomendasi muncul otomatis: Tailwind IntelliSense, ESLint, Prettier)

```bash
npm install     # sekali saja
npm run dev     # buka http://localhost:5173
```

Build & preview produksi:

```bash
npm run build     # hasil di dist/
npm run preview
```

## 📁 Struktur

```
portfolio-app/
├── index.html
├── package.json · vite.config.ts · tsconfig.json
├── tailwind.config.js · postcss.config.js
├── .vscode/                    # rekomendasi ekstensi
└── src/
    ├── main.tsx                # entry point
    ├── App.tsx                 # komposisi section + scrollspy
    ├── index.css               # tailwind + style custom (grid, caret, dll)
    ├── data.ts                 # ★ SEMUA KONTEN DI SINI (nama, proyek, sertifikat…)
    ├── hooks/
    │   └── useTypewriter.ts
    └── components/
        ├── Background.tsx      # partikel jaringan (canvas)
        ├── Nav.tsx             # navbar pill glassmorphism
        ├── Hero.tsx            # nama + typewriter + terminal
        ├── Metrics.tsx         # 4 kartu statistik (count-up)
        ├── About.tsx
        ├── Portfolio.tsx       # tab: Projects & Arsenal
        ├── TabCerts.tsx        # tab sertifikat + galeri foto
        ├── CertGallery.tsx     # galeri + lightbox (portal)
        ├── Contact.tsx         # form (mailto) + sosial
        └── Footer.tsx
```

## ✏️ Cara mengedit konten

-   **Semua data** (nama, peran, proyek, teknologi, sertifikat, foto galeri) ada di **`src/data.ts`** — tinggal ubah di situ, tampilan otomatis menyesuaikan.
-   Foto sertifikat: isi `src` di `CERT_PHOTOS` dengan URL gambar (atau kirim fotoku, kutempel jadi base64).
-   Foto profil: ganti monogram "JY" di `About.tsx` dengan `<img src="..." />`.

## 🔑 TODO yang tersisa

-   [ ] Ganti ejaan email bila perlu (`"afgni"` vs `"afgani"`) — cek di `src/data.ts`
-   [ ] Isi foto sertifikat di galeri
-   [ ] Sesuaikan angka metrik & status sertifikat dengan pencapaian asli
-   [ ] Ganti foto profil

## ☁️ Deploy cepat

**Otomatis (workflow CI/CD sudah tersedia):** upload SEMUA isi folder ini ke repo (KECUALI folder `node_modules`)
→ `.github/workflows/deploy.yml` akan **build + deploy ke GitHub Pages otomatis** setiap kali push.
Sekali setup saja: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

**Netlify Drop (alternatif)**: `npm run build` → drag folder `dist/` ke [app.netlify.com/drop](https://app.netlify.com/drop)

**GitHub Pages manual**: `npm run build` → push isi `dist/` ke repo (branch `gh-pages`) —
atau pakai repo `<username>.github.io`. Konfigurasi `base: "./"` sudah diset,
jadi aman di subfolder mana pun.

---
© 2026 Jalaludin Yusuf Al Af Ghani 💙
