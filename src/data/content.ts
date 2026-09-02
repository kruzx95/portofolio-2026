// ==========================================
// CENTRAL CONTENT CONFIGURATION
// All website texts, prices, FAQs, and links
// can be customized directly in this file.
// ==========================================

export interface SiteMeta {
  title: string;
  description: string;
  studioName: string;
  studioTagline: string;
  studioLocation: string;
  satisfactionGuarantee: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const siteMeta: SiteMeta = {
  title: "Mallik — Full-Stack Developer & Jasa Pembuatan Aplikasi Web",
  description: "Portofolio profesional, CV teknis, dan layanan jasa pembuatan aplikasi web modern, dashboard kustom, sistem informasi bisnis, serta arsitektur web berkinerja tinggi.",
  studioName: "Mallik Studio",
  studioTagline: "Solusi Rekayasa Perangkat Lunak & Jasa Pembuatan Aplikasi Profesional",
  studioLocation: "Full-Stack Engineer · Indonesia & Worldwide",
  satisfactionGuarantee: "Garansi Kualitas Kode, Keamanan & Support Penuh Pasca Rilis",
  primaryCtaText: "KONSULTASI APLIKASI",
  primaryCtaLink: "/contact/",
  secondaryCtaText: "SKEMA BIAYA & SCOPE",
  secondaryCtaLink: "/#pricing",
};

export const navigationLinks = [
  { label: "ALUR KERJA", href: "/#process" },
  { label: "SKEMA BIAYA", href: "/#pricing" },
  { label: "PORTOFOLIO", href: "/#work" },
  { label: "KEUNGGULAN", href: "/#why-us" },
];

export const heroData = {
  badge: "✦ Modern Web Application Developer",
  subheading: "PORTOFOLIO, CV & JASA PEMBUATAN APLIKASI WEB",
  headline: "Bikin Aplikasi\nCepat & Skalabel.",
  description: "Membantu bisnis, founder, dan UMKM membangun aplikasi web modern, dashboard kustom, sistem informasi bisnis, serta web portal berkinerja tinggi yang cepat dan siap pakai.",
  annotationQuote: "Dari analisis sistem, desain UI/UX, hingga rilis siap pakai.",
  floatingCards: [
    {
      id: "card-1",
      title: "Mulya Lestari",
      tag: "Sistem Informasi Bengkel Mobil",
      image: "/hero-cards/card-1.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=720&h=560&q=86",
      cardClass: "card--one",
      position: "Kiri Atas"
    },
    {
      id: "card-2",
      title: "Dashboard Analytics",
      tag: "Monitoring & Business Intelligence",
      image: "/hero-cards/card-2.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=720&h=560&q=86",
      cardClass: "card--two",
      position: "Kanan Atas"
    },
    {
      id: "card-3",
      title: "E-Commerce System",
      tag: "Katalog & Transaksi",
      image: "/hero-cards/card-3.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=720&h=560&q=86",
      cardClass: "card--three",
      position: "Kiri Bawah"
    },
    {
      id: "card-4",
      title: "Business Web App",
      tag: "Sistem Informasi Kustom",
      image: "/hero-cards/card-4.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=720&h=560&q=86",
      cardClass: "card--four",
      position: "Kanan Bawah"
    },
    {
      id: "card-5",
      title: "Custom Portal",
      tag: "Portal Klien & Manajemen",
      image: "/hero-cards/card-5.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=720&h=560&q=86",
      cardClass: "card--five",
      position: "Tengah Atas"
    }
  ]
};

export const painPointsData = {
  subheading: "PERNAH MENGALAMI INI?",
  headline: "Aplikasi Anda.\nTanpa Kerumitan.",
  description: "Hindari drama developer lepas yang menghilang di tengah jalan, estimasi waktu yang molor berbulan-bulan, atau kode yang tidak scalable.",
  checklist: [
    { text: "Rancang Arsitektur Database & Backend", tag: "Tak perlu pusing urusan teknis", tagVariant: "lime" },
    { text: "Integrasi API & Payment Gateway", tag: null },
    { text: "Desain UI/UX Responsif & Cepat", tag: "Apakah user mudah memakainya?", tagVariant: "lime" },
    { text: "Setup Cloud Server & Domain", tag: null },
    { text: "Optimasi Keamanan & Performa", tag: "Developer sebelumnya menghilang", tagVariant: "dark-green" },
    { text: "Testing Cross-Browser & Mobile", tag: null },
    { text: "Dokumentasi & Serah Terima Aplikasi", tag: "Garansi Pasca Rilis", tagVariant: "lime" }
  ]
};

export const valuePropsData = {
  badge: "STANDAR TINGGI & PENGERJAAN TERUJI",
  headline: "Aplikasi Modern,\nTerstruktur & Handal.",
  ctaText: "KONSULTASIKAN PROYEK ANDA",
  ctaLink: "/contact/",
  cards: [
    { number: "01", title: "Full-Stack Engineer Senior", description: "Akses langsung ke developer tanpa perantara admin atau account manager.", isHighlighted: true },
    { number: "02", title: "Arsitektur Modern & Scalable", description: "Dibangun dengan Astro, React, Node.js, Flutter, dan PostgreSQL.", isHighlighted: true },
    { number: "03", title: "Desain UI/UX Eksklusif", description: "Tampilan intuitif, modern, dan dioptimalkan untuk konversi pengguna.", isHighlighted: true },
    { number: "04", title: "Komunikasi Transparan & Rutin", description: "Update progres berkala dan demo langsung setiap milestone selesai.", isHighlighted: false },
    { number: "05", title: "Estimasi Biaya Pasti", description: "Investasi transparan di awal tanpa biaya tersembunyi di kemudian hari.", isHighlighted: true },
    { number: "06", title: "Garansi & Pendampingan", description: "Garansi perbaikan bug dan pendampingan teknis setelah aplikasi siap online.", isHighlighted: false }
  ]
};

export const processData = {
  badge: "ALUR PENGERJAAN DARI AWAL HINGGA RILIS",
  headline: "Alur Pembuatan Aplikasi",
  description: "Metodologi terstruktur, transparan, dan lincah dari analisis kebutuhan, perancangan sistem, coding, testing, hingga deployment ke cloud / app store.",
  badges: [
    "✦ Konsultasi & Arsitektur Kustom",
    "✦ Rilis Cepat (2–4 Minggu)",
    "✦ Clean & Scalable Code",
    "✦ Full QA & Testing Termasuk"
  ],
  steps: [
    {
      phase: "ANALISIS & SPESIFIKASI",
      title: "Pahami Kebutuhan",
      tag: "DISCOVERY",
      desc: "Diskusi mendalam untuk memetakan tujuan bisnis, alur fitur pengguna, rancangan database, dan spesifikasi teknologi yang tepat.",
      variant: "lime"
    },
    {
      phase: "ARSITEKTUR & UI/UX",
      title: "Rancang Desain & Alur",
      tag: "WIREFRAME",
      desc: "Menyusun sketsa alur sistem, arsitektur database, dan desain antarmuka (UI/UX) yang interaktif dan mudah digunakan.",
      variant: "lime"
    },
    {
      phase: "PROTOTIPE & VALIDASI",
      title: "Review Bersama",
      tag: "FIRST LOOK",
      desc: "Melihat prototipe dan rancangan menyeluruh sehingga Anda dapat memberikan masukan langsung sebelum tahap coding intensif.",
      variant: "light"
    },
    {
      phase: "FULL-STACK DEVELOPMENT",
      title: "Eksekusi Coding",
      tag: "BUILD",
      desc: "Pengembangan frontend responsif, backend API berkecepatan tinggi, database relasional, dan integrasi modul pihak ketiga.",
      variant: "lime"
    },
    {
      phase: "QA, SECURITY & TESTING",
      title: "Uji Kualitas Menyeluruh",
      tag: "TESTING",
      desc: "Pemeriksaan bug, uji keamanan data, pengujian performa beban, serta validasi lintas perangkat browser dan mobile.",
      variant: "lime"
    },
    {
      phase: "DEPLOYMENT & HANDOVER",
      title: "Rilis Siap Pakai",
      tag: "GO LIVE",
      desc: "Setup server cloud, domain, sertifikat SSL, panduan pengoperasian sistem, dan serah terima akses penuh siap pakai.",
      variant: "lime"
    }
  ]
};

export const marqueeItems = [
  "JASA PEMBUATAN WEB APP",
  "DASHBOARD & SISTEM INFORMASI",
  "SISTEM INFORMASI KUSTOM",
  "MVP STARTUP WEB",
  "FULL-STACK WEB DEVELOPMENT",
  "API & DATABASE DESIGN",
  "DEDICATED SUPPORT",
  "CLOUD & DEVOPS DEPLOYMENT"
];

export const pricingData = {
  badge: "SKEMA INVESTASI & PENGERJAAN",
  headline: "Estimasi Jelas.\nSesuai Kebutuhan.",
  description: "Biaya dan durasi pengerjaan ditentukan transparan berdasarkan cakupan fitur (scope) setelah sesi diskusi teknis.",
  mainPlan: {
    tag: "PROYEK APLIKASI WEB",
    title: "Pembuatan Web App & Sistem",
    description: "Pengembangan menyeluruh dari desain UI/UX, arsitektur database, hingga siap online.",
    price: "Kustom Sesuai Kebutuhan",
    deliveryTime: "Rata-rata 2–4 pekan pengerjaan",
    ctaText: "KONSULTASI & ESTIMASI BIAYA",
    ctaLink: "/contact/",
    includedTitle: "STANDAR PENGERJAAN INTI:",
    features: [
      "Desain UI/UX Kustom, Modern & Responsif",
      "Full-Stack Development (Frontend & Backend)",
      "Database Terstruktur & Keamanan Teruji",
      "Admin Dashboard & Autentikasi Pengguna",
      "Integrasi API (Payment, WhatsApp, dll.)",
      "Setup Cloud Server + Garansi Bug 30 Hari"
    ]
  },
  addonPlan: {
    tag: "OPSIONAL",
    title: "Maintenance & Support",
    subtitle: "Dukungan berkala untuk server, performa, dan update fitur baru pasca peluncuran.",
    price: "Skema Fleksibel",
    period: "(Bulanan / On-Demand)",
    features: [
      "Monitoring Server & Keamanan Berkala",
      "Optimasi Kecepatan & Backup Rutin",
      "Prioritas Pembaruan Fitur Baru",
      "Troubleshooting & Konsultasi Teknis"
    ]
  },
  customScope: {
    title: "Punya Kebutuhan Spesifik?",
    description: "Diskusikan ide atau alur bisnis Anda untuk mendapatkan estimasi waktu dan rincian biaya yang paling efisien."
  },
  portfolioDirectory: {
    title: "Proyek Unggulan",
    subtitle: "Aplikasi yang telah rilis dan aktif digunakan.",
    items: [
      "Mulya Lestari ↗",
      "KALA Studio ↗"
    ]
  }
};

export const showcaseData = {
  badge: "PORTOFOLIO & STUDI KASUS",
  headline: "Aplikasi yang Telah Rilis & Aktif.",
  description: "Aplikasi web fungsional yang dibangun dengan standar performa modern dan langsung digunakan dalam operasional bisnis nyata.",
  projects: [
    {
      id: "01",
      name: "Mulya Lestari",
      category: "Sistem Informasi Manajemen Bengkel Mobil Multi-Cabang",
      year: "2026",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: "02",
      name: "KALA Studio",
      category: "Sistem E-Commerce & Toko Online Mandiri",
      year: "2026",
      image: "/showcase/astro-commerce/hero.jpg"
    }
  ]
};

export const comparisonData = {
  badge: "PRINSIP & KEUNGGULAN KERJA",
  headline: "Membangun Aplikasi\nTanpa Drama & Ribet.",
  description: "Fokus menghadirkan solusi aplikasi web yang fungsional, transparan, dan sesuai dengan kebutuhan nyata bisnis Anda.",
  ctaText: "KONSULTASIKAN KEBUTUHAN ANDA",
  ctaLink: "/contact/",
  pillars: [
    {
      num: "01",
      title: "Komunikasi Langsung & Terbuka",
      description: "Anda berdiskusi langsung dengan saya sebagai developer teknis. Tanpa perantara admin atau birokrasi, progres pengerjaan selalu terbuka dan cepat tanggap."
    },
    {
      num: "02",
      title: "Solusi Fungsional & Tepat Sasaran",
      description: "Fitur dirancang sesuai alur bisnis yang Anda butuhkan tanpa kerumitan berlebih. Aplikasi dibuat ringan, mudah digunakan, dan siap pakai."
    },
    {
      num: "03",
      title: "Proses Kerja Jelas & Terstruktur",
      description: "Pengerjaan dilakukan secara bertahap mulai dari perencanaan alur, desain antarmuka, pembuatan fitur, hingga pengujian sebelum serah terima."
    },
    {
      num: "04",
      title: "Pendampingan & Garansi Pasca Rilis",
      description: "Setiap proyek dilengkapi garansi perbaikan bug dan bantuan konfigurasi domain/server agar aplikasi berjalan lancar dan aman digunakan."
    }
  ]
};

export const statsTrustData = {
  badge: "PENGALAMAN & REKAM JEJAK",
  headline: "Mengapa Mempercayakan\nAplikasi Anda pada Kami?",
  description: "Berpengalaman membantu startup, UMKM, dan institusi membangun solusi digital yang stabil, aman, dan siap scale-up.",
  stats: [
    { value: "6+", label: "tahun pengalaman software engineering", sub: "Arsitektur kuat dan kode terstruktur rapi", variant: "lime" },
    { value: "40+", label: "aplikasi & sistem sukses dirilis", sub: "Mulai dari MVP startup hingga sistem internal", variant: "lime" },
    { value: "30 Hari", label: "garansi perbaikan bug gratis", sub: "Dukungan teknis penuh pasca peluncuran", variant: "lime" },
    { value: "4.9/5", label: "rata-rata kepuasan klien", sub: "Komunikasi responsif dan penyelesaian tepat waktu", variant: "lime" }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80"
  ]
};

export const teamData = {
  badge: "PROFIL PENGEMBANG & SPESIALISASI",
  headline: "Keahlian Mendalam.\nEksekusi Tepat Waktu.",
  description: "Dipimpin oleh Lead Full-Stack Engineer dengan keahlian pengembangan aplikasi web modern, dashboard, dan sistem informasi kustom berkinerja tinggi.",
  ctaText: "DISKUSIKAN PROYEK DENGAN DEVELOPER",
  ctaLink: "/contact/",
  members: [
    {
      name: "Mallik",
      role: "Lead Full-Stack Engineer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Jon",
      role: "UI/UX & Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Mina",
      role: "Backend & Database Architect",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Theo",
      role: "Cloud & DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    }
  ]
};

export const missionQuote = {
  badge: "KOMITMEN KUALITAS",
  headline: "Setiap Bisnis Berhak Memiliki\nAplikasi yang Andal.",
  description: "Banyak ide hebat gagal tereksekusi hanya karena kendala teknis atau aplikasi yang lambat dan penuh bug.\n\nSaya hadir untuk memastikan aplikasi Anda dibangun dengan fondasi teknologi terbaik, antarmuka yang memikat pengguna, dan kode yang mudah dikembangkan di masa depan.",
  ctaText: "MULAI KONSULTASI SEKARANG",
  ctaLink: "/contact/"
};

export const testimonialsData = [
  {
    quote: "Aplikasi kami selesai tepat waktu dalam 3 minggu dengan performa luar biasa cepat. Komunikasi sangat jelas dan profesional.",
    author: "Theo Martin",
    role: "Founder, North House",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Sistem dashboard kustom yang dibuat sangat membantu operasional harian kami. User experience-nya sangat rapi dan mudah digunakan staf.",
    author: "Amelia Hart",
    role: "Principal, Field Office",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Kualitas kodenya sangat bersih dan terstruktur. Kami tidak kesulitan saat tim internal kami menambahkan integrasi API baru.",
    author: "Noah Bennett",
    role: "CEO, Common Ground",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Sangat direkomendasikan bagi siapa saja yang butuh aplikasi berkualitas tanpa ribet. Solusi teknis yang diberikan selalu tepat sasaran.",
    author: "Katrina Miller",
    role: "Director, Eureka Hill",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Hasil pengerjaan melampaui ekspektasi. Aplikasi e-commerce kami mampu menangani lonjakan pesanan dengan stabil.",
    author: "Syd Martin",
    role: "Partner, Fern & Fellow",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
  }
];

export const faqsData = [
  {
    question: "Aplikasi jenis apa saja yang bisa dibuat?",
    answer: "Kami melayani pembuatan Web Application (SaaS, Portal, Dashboard Admin, E-Commerce), Mobile Apps (iOS & Android berbasis Flutter/React Native), Sistem Informasi Manajemen Internal Perusahaan, hingga MVP (Minimum Viable Product) untuk peluncuran startup."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk membuat aplikasi?",
    answer: "Untuk aplikasi standar atau MVP, proses pengerjaan rata-rata memakan waktu 2 hingga 4 minggu. Untuk sistem kustom yang lebih kompleks atau sistem enterprise, estimasi waktu akan disesuaikan setelah tahap analisis kebutuhan awal."
  },
  {
    question: "Bagaimana dengan akses dan kepemilikan sistem setelah selesai?",
    answer: "Anda mendapatkan akses penuh ke akun hosting/server, dashboard admin, database aplikasi, dan panduan pengoperasian lengkap tanpa adanya biaya lisensi berkala dari pihak kami."
  },
  {
    question: "Bagaimana jika saya belum memiliki desain UI/UX?",
    answer: "Tidak masalah! Layanan kami sudah mencakup perancangan antarmuka (UI) dan pengalaman pengguna (UX) yang modern, profesional, dan responsif untuk semua ukuran layar (mobile, tablet, desktop)."
  },
  {
    question: "Teknologi (Tech Stack) apa yang digunakan?",
    answer: "Kami menggunakan teknologi modern berstandar industri: Frontend dengan Astro, React, Next.js, TypeScript, dan TailwindCSS; Backend dengan Node.js, Express, Go, atau Python; Database dengan PostgreSQL, MySQL, atau Redis; serta Cloud deployment di Vercel, AWS, atau VPS Linux."
  },
  {
    question: "Apakah dibantu untuk urusan domain, server, dan hosting?",
    answer: "Tentu saja. Kami membantu konfigurasi domain, SSL gratis, pengaturan server cloud / VPS, hingga optimasi performa sehingga aplikasi Anda siap digunakan dan diakses publik secara aman."
  },
  {
    question: "Apakah ada garansi setelah aplikasi selesai dibuat?",
    answer: "Ya, setiap proyek mendapatkan garansi perbaikan bug dan error gratis selama 30 hari pasca peluncuran. Kami juga menyediakan opsi retainer bulanan jika Anda membutuhkan maintenance berkelanjutan."
  },
  {
    question: "Bagaimana sistem pembayaran dan termin proyek?",
    answer: "Pembayaran dilakukan secara bertahap berbasis milestone yang jelas (misal: Down Payment 50% di awal kickoff dan pelunasan 50% setelah aplikasi diuji dan siap diserahterimakan)."
  },
  {
    question: "Bisakah aplikasi dikembangkan atau ditambah fitur lagi di masa depan?",
    answer: "Sangat bisa. Arsitektur kode kami dibangun dengan prinsip modular dan scalable, memudahkan penambahan fitur baru, integrasi API baru, maupun migrasi sistem di masa mendatang."
  },
  {
    question: "Bagaimana cara memulai konsultasi proyek?",
    answer: "Anda dapat mengisi formulir kontak di situs ini atau langsung menghubungi kami via email/WhatsApp untuk menjadwalkan sesi diskusi singkat mengenai kebutuhan aplikasi Anda."
  }
];

export const impactData = {
  badge: "DISKUSI TEKNIS 1-ON-1",
  headline: "Punya Ide atau Kebutuhan Aplikasi Web?",
  description: "Ceritakan alur bisnis atau fitur yang ingin Anda bangun. Saya bantu petakan solusi teknologi, estimasi waktu, dan perkiraan biaya yang paling efisien — tanpa komitmen awal.",
  ctaText: "MULAI KONSULTASI SEKARANG",
  ctaLink: "/contact/"
};

export const contactData = {
  badge: "KONSULTASI GRATIS",
  headline: "Wujudkan Aplikasi Impian\nBisnis Anda Sekarang.",
  description: "Ceritakan ide aplikasi Anda, target peluncuran, atau fitur yang ingin dibangun. Kami akan berikan estimasi teknis dan solusi terbaik.",
  form: {
    namePlaceholder: "Nama Lengkap*",
    emailPlaceholder: "Alamat Email*",
    companyPlaceholder: "Nama Bisnis / Perusahaan*",
    timelinePlaceholder: "Target peluncuran (misal: 1 bulan)",
    messagePlaceholder: "Jelaskan kebutuhan aplikasi Anda: jenis (Web App/Dashboard/Sistem), fitur utama, dan estimasi budget.",
    submitText: "KIRIM PESAN & KONSULTASI"
  }
};

export const footerData = {
  brandName: "Mallik Studio",
  readyTag: "[ Siap Memulai? ]",
  tagline: "Solusi Rekayasa Perangkat Lunak & Jasa Pembuatan Aplikasi Profesional.",
  ctaText: "KONSULTASI SEKARANG",
  ctaLink: "/contact/",
  copyright: `© ${new Date().getFullYear()} Mallik Dev Studio. All rights reserved.`,
  madeWith: "Dibuat dengan Astro & Presisi Tinggi.",
  navSections: [
    {
      title: "NAVIGASI",
      links: [
        { label: "Alur Kerja", href: "/#process" },
        { label: "Skema Biaya", href: "/#pricing" },
        { label: "Portofolio Proyek", href: "/#work" },
        { label: "Keunggulan", href: "/#why-us" },
        { label: "Kontak & Konsultasi", href: "/contact/" }
      ]
    },
    {
      title: "HUBUNGI KAMI",
      links: [
        { label: "Email: kruza8@gmail.com", href: "mailto:kruza8@gmail.com?subject=Konsultasi%20Pembuatan%20Aplikasi" },
        { label: "Buka Langsung di Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=kruza8@gmail.com&su=Konsultasi%20Pembuatan%20Aplikasi", target: "_blank" },
        { label: "GitHub Profil", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" }
      ]
    }
  ],
  legalLinks: [
    { label: "Kebijakan Privasi", href: "/privacy/" },
    { label: "Syarat & Ketentuan", href: "/terms/" },
    { label: "kruza8@gmail.com", href: "mailto:kruza8@gmail.com" }
  ]
};
