# Man to Man — by Ourdays

> Platform pertumbuhan untuk pria yang serius. Buku terbaik, tes potensi diri, dan komunitas yang dorong lo jadi 1% lebih baik setiap harinya.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animasi)

---

## Cara Install & Jalankan

### 1. Pastikan Node.js sudah terinstall

Cek dengan:
```bash
node -v
```
Butuh minimal **Node.js v18**. Kalau belum ada, download di [nodejs.org](https://nodejs.org).

---

### 2. Masuk ke folder proyek

```bash
cd man-to-man
```

---

### 3. Install semua dependencies

```bash
npm install
```

Tunggu sampai selesai (~1-2 menit tergantung koneksi).

---

### 4. Jalankan di mode development

```bash
npm run dev
```

Buka browser dan akses: **http://localhost:3000**

---

## Build untuk Production

```bash
npm run build
npm start
```

---

## Struktur Folder

```
man-to-man/
├── src/
│   ├── app/
│   │   ├── globals.css       ← Semua CSS global & custom styles
│   │   ├── layout.tsx        ← Root layout (metadata, font)
│   │   └── page.tsx          ← Halaman utama (gabungan semua section)
│   ├── components/
│   │   ├── Navbar.tsx        ← Navbar sticky dengan scroll effect
│   │   ├── TestModal.tsx     ← Modal quiz interaktif (Passion & Skill)
│   │   ├── Footer.tsx        ← Footer
│   │   └── sections/
│   │       ├── Hero.tsx      ← Hero section dengan animasi
│   │       ├── Library.tsx   ← 30 katalog buku
│   │       ├── SelfTest.tsx  ← Halaman Self Test
│   │       └── Community.tsx ← Halaman Komunitas
│   └── lib/
│       ├── data.ts           ← Semua data: buku, pertanyaan, hasil test
│       └── useReveal.ts      ← Hook untuk scroll reveal animation
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Kustomisasi

### Ganti Link WhatsApp & Discord
Buka `src/components/sections/Community.tsx`, cari dan ganti:
```
href="https://wa.me/yourlink"
href="https://discord.gg/yourlink"
```

### Tambah/Ubah Buku
Buka `src/lib/data.ts`, edit array `books`. Setiap buku punya:
```ts
{ id: number, title: string, author: string, category: string }
```

### Ubah Pertanyaan Test
Buka `src/lib/data.ts`, edit array `passionQuestions` atau `skillQuestions`.

### Ubah Hasil Test
Buka `src/lib/data.ts`, edit objek `resultMap`.

---

## Deploy ke Vercel (Gratis)

1. Push folder ini ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repo → klik Deploy
4. Selesai — website lo live!

---

**Man to Man by Ourdays** · *"Untuk pria yang tidak berhenti tumbuh."*
