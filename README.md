# 🚀 Portfolio 2026

Website portofolio interaktif dan modern yang dibangun menggunakan **Astro**. Dirancang dengan estetika visual terkini, performa optimal, dan arsitektur komponen yang modular.

---

## 📋 Prasyarat Sistem

Sebelum memulai, pastikan perangkat Anda telah terinstal:

- **Node.js**: Versi `22.12.0` atau yang lebih baru ([Unduh Node.js](https://nodejs.org/))
- **Git**: Untuk melakukan clone repository ([Unduh Git](https://git-scm.com/))
- **Package Manager**: `npm` (bawaan Node.js), `pnpm`, atau `yarn`

---

## 🛠️ Cara Clone dan Menjalankan Proyek

Ikuti langkah-langkah berikut untuk meng-clone dan menjalankan aplikasi di komputer lokal:

### 1. Clone Repository

Buka terminal / command prompt dan jalankan perintah berikut:

```bash
# Menggunakan HTTPS
git clone https://github.com/kruzx95/portofolio-2026.git

# ATAU menggunakan SSH (jika sudah dikonfigurasi)
git clone git@github.com:kruzx95/portofolio-2026.git
```

### 2. Masuk ke Direktori Proyek

```bash
cd portofolio-2026
```

### 3. Install Dependensi

Jalankan instalasi paket dependensi:

```bash
npm install
```

### 4. Jalankan Development Server

Mulai server lokal untuk pengembangan:

```bash
npm run dev
```

Buka browser dan akses alamat berikut:
👉 `http://localhost:4321`

> 💡 **Tips**: Anda juga dapat menjalankan dev server di latar belakang (background mode) menggunakan Astro CLI:
> ```bash
> npx astro dev --background
> ```
> Kelola server background dengan: `npx astro dev status`, `npx astro dev logs`, atau `npx astro dev stop`.

---

## 📦 Perintah yang Tersedia (Scripts)

Semua perintah dijalankan dari root direktori proyek:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Mengunduh dan memasang semua dependensi proyek |
| `npm run dev` | Menjalankan local development server dengan hot reload |
| `npm run build` | Melakukan build aplikasi untuk produksi ke folder `./dist/` |
| `npm run preview` | Menjalankan preview lokal dari hasil build produksi |
| `npm run astro ...` | Menjalankan perintah Astro CLI (contoh: `astro check`, `astro add`) |

---

## 📁 Struktur Direktori

```text
portofolio-2026/
├── public/                # File statis publik (gambar, favicon, aset hero-cards)
├── src/
│   ├── assets/            # Aset grafis internal (SVG, gambar)
│   ├── components/        # Komponen UI modular (Navbar, Hero, Showcase, dll.)
│   ├── data/              # Data statis & konfigurasi konten
│   ├── layouts/           # Layout template halaman (Layout.astro)
│   ├── pages/             # Routing halaman (index.astro, dll.)
│   └── styles/            # Gaya CSS global & tema
├── astro.config.mjs       # Konfigurasi Astro
├── package.json           # Konfigurasi dependensi dan scripts
└── tsconfig.json          # Konfigurasi TypeScript
```

---

## ⚡ Teknologi yang Digunakan

- [Astro](https://astro.build/) - Web framework berkinerja tinggi
- [TypeScript](https://www.typescriptlang.org/) - Type safety untuk logika komponen
- Modern Vanilla CSS & Dynamic Design - Desain responsif, modern, dan transisi halus

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan portofolio pribadi. Silakan gunakan sebagai referensi dan inspirasi.
