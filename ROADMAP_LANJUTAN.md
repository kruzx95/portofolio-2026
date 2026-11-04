# Roadmap & Panduan Langkah Selanjutnya — Portofolio 2026

Dokumen ini berisi rangkuman status terkini dan panduan aksi terstruktur untuk melanjutkan pengembangan portofolio website Mallik Rushamidiwinata (`mallik.web.id`).

---

## 1. Status Terkini (Current State)

- **Framework & Runtime:** Astro v7.2.4 (Static Site Generation), plain CSS, TypeScript.
- **Audit Anti-Slop #001 (Selesai 10/10):**
  - Pembersihan em dash pada metadata title/description.
  - Aksesibilitas keyboard pada menu navigasi mobile (Escape key handler, focus trap, dynamic aria-label).
  - Penghapusan sparkle AI (`✦`) dan emoji mentah, diganti icon SVG vektor presisi.
  - Hierarki visual Hero bersih (Avatar -> Eyebrow -> Headline -> Role -> Bio).
  - Pangkas ~37 KB CSS template lama dari `global.css` dan hapus `theme.css`.
- **Audit Copywriting #002 (Selesai 4/4):**
  - Bio Hero aktif dan faktual (fokus instansi pemerintah, lulusan Sistem Informasi UNIKOM, pengalaman HR).
  - Ringkasan profil CV bersih dari klaim klise tanpa bukti ("adaptasi tinggi"), menonjolkan kekuatan koordinasi lintas tim.
  - Tagline footer informatif dan mengkomunikasikan nilai nyata.
  - Poin pengalaman Diskominfo menggunakan kata kerja aksi teknis konkret.
- **Git State:** Bersih (*clean tree*), tersinkronisasi penuh dengan `origin/master`.

---

## 2. Rencana Kerja Selanjutnya (Action Items di Rumah)

### 📌 Prioritas 1: Membuat Dokumen `DESIGN.md` (Fondasi Desain Sistem)
Sesuai aturan `antislop-ui` (R-37), portofolio membutuhkan dokumen acuan desain agar tampilan tetap konsisten dan berkarakter kuat.

- **Palet Warna Utama:**
  - Ink (Teks & Border Utama): `#171714`
  - Paper (Latar Belakang / Surface): `#f6f6f2`
  - Accent / Acid: `#c8ff46` (Lime vibrant untuk highlight interaktif)
  - Muted Borders: `#dcdcd6` / `#e2e2dc`
- **Sistem Tipografi:**
  - Display / Nama: `Syne` (Bold, Modern)
  - Body / Konten: `Plus Jakarta Sans` (Tinggi keterbacaan)
  - Metadata / Tag / Angka: `JetBrains Mono` (Presisi teknis)
- **Komponen & Layout:**
  - Batasan lebar container maksimum `1200px`.
  - Spacing vertikal ritmis menggunakan clamp responsif.
  - Tidak ada bayangan glow/blur berlebihan, gunakan border tegas dan offset shadow kontras.

---

### 📌 Prioritas 2: Membangun Seksi Proyek / Portfolio Showcase (`#projects`)
Menampilkan bukti karya nyata sebelum recruiter membaca CV:

1. **Proyek Utama:**
   - **Portal Resmi Diskominfo Kota Tasikmalaya**
     - Peran: Frontend Developer (membangun ulang dari awal).
     - Tech Stack: WordPress / Modern Frontend, UI/UX responsif.
     - Tautan: `https://diskominfo.tasikmalayakota.go.id/`
   - **Sistem Informasi SPJ Berbasis Web (Diskominfo Kota Bandung)**
     - Peran: Analisis & Developer (sistem transparansi alur data keuangan).
     - Tech Stack: Web-based, Database MySQL.
2. **Struktur Komponen Card Proyek:**
   - Mockup visual / preview tangkapan layar beresolusi optimal (format WebP).
   - Problem & Solution (1-2 kalimat padat tanpa kata klise).
   - Badges teknologi (TypeScript, Tailwind, WordPress, MySQL).
   - Tombol Live Demo / Tautan Eksternal dengan SVG arrow icon.

---

### 📌 Prioritas 3: Instalasi Tooling `@astrojs/check`
Menuntaskan alur verifikasi otomatis tipe data (`verification-loop`):

```bash
# Jalankan di terminal saat terhubung internet:
npm i -D @astrojs/check typescript

# Uji jalankan pengecekan tipe:
npm run check
```

---

### 📌 Prioritas 4: Optimasi Open Graph (Social Sharing) & SEO
- Siapkan aset gambar Open Graph (`public/og-image.jpg` ukuran 1200x630px).
- Tambahkan meta tags `og:image`, `twitter:card`, `twitter:image` di `src/layouts/Layout.astro`.
- Pastikan skor Google Lighthouse: Performance >= 95, Accessibility = 100, Best Practices = 100, SEO = 100.

---

## 3. Perintah Cepat untuk Pengembangan (Cheat Sheet)

```bash
# Menjalankan dev server di background:
astro dev --background

# Memeriksa status dan log dev server:
astro dev status
astro dev logs

# Menghentikan dev server:
astro dev stop

# Menjalankan build verifikasi lokal:
npm run build

# Menjalankan typecheck (setelah dependensi diinstall):
npm run check
```

---

## 4. Skills yang Harus Diaktifkan Saat Melanjutkan

Bila menggunakan asisten AI di rumah, ingatkan untuk selalu mengacu ke:
1. **`antislop-ui` & `antislop-layoutmobile`:** Untuk styling dan responsivitas layar HP hingga desktop.
2. **`antislop-copywriting`:** Untuk penulisan deskripsi proyek dan heading (hindari em dash, jargon hampa, dan klaim tanpa bukti).
3. **`verification-loop`:** Wajib menjalankan `npm run build` sebelum commit/selesai.

