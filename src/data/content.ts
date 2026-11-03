// ==========================================
// CENTRAL CONTENT CONFIGURATION
// All website texts, prices, FAQs, and links
// can be customized directly in this file.
// ==========================================

import { resolvePath } from '../utils/paths';

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
  title: "Mallik Rushamidiwinata — Web & Frontend Developer",
  description: "Portofolio profesional dan CV teknis Mallik Rushamidiwinata. Web Developer berpengalaman dengan TypeScript, Tailwind CSS, WordPress, dan Sistem Informasi.",
  studioName: "Mallik Rushamidiwinata",
  studioTagline: "Web Developer · Frontend & WordPress Specialist",
  studioLocation: "Tasikmalaya, Indonesia",
  satisfactionGuarantee: "Terbuka untuk Peluang Karir Full-Time & Proyek Web",
  primaryCtaText: "LIHAT CV LENGKAP",
  primaryCtaLink: resolvePath("/cv/"),
  secondaryCtaText: "PENGALAMAN & KEAHLIAN",
  secondaryCtaLink: resolvePath("/#experience"),
};

export const navigationLinks = [
  { label: "PENGALAMAN", href: resolvePath("/#experience") },
  { label: "KEAHLIAN", href: resolvePath("/#skills") },
  { label: "CV", href: resolvePath("/cv/") },
  { label: "KONTAK", href: resolvePath("/#contact") },
];

export const heroData = {
  badge: "✦ Web Developer · Available for Opportunities",
  subheading: "PORTOFOLIO & CURRICULUM VITAE",
  headline: "Mallik\nRushamidiwinata",
  description: "Web Developer dengan fokus pada pembuatan website instansi yang responsif, cepat, dan terstruktur rapi. Menguasai WordPress serta teknologi modern seperti TypeScript dan Tailwind CSS, didukung latar belakang Sistem Informasi dan pengalaman Human Resources.",
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
  brandName: "Mallik Rushamidiwinata",
  readyTag: "",
  tagline: "Web Developer · Frontend, WordPress, TypeScript, & Tailwind CSS.",
  ctaText: "LIHAT CV LENGKAP",
  ctaLink: resolvePath("/cv/"),
  copyright: `© ${new Date().getFullYear()} Mallik Rushamidiwinata. All rights reserved.`,
  madeWith: "Dibuat dengan Astro & Presisi Tinggi.",
  navSections: [
    {
      title: "NAVIGASI",
      links: [
        { label: "Pengalaman Kerja", href: resolvePath("/#experience") },
        { label: "Keahlian Teknis", href: resolvePath("/#skills") },
        { label: "Curriculum Vitae (CV)", href: resolvePath("/cv/") },
        { label: "Kontak", href: resolvePath("/#contact") }
      ]
    },
    {
      title: "KONTAK & JARINGAN",
      links: [
        { label: "Email: kruza8@gmail.com", href: "mailto:kruza8@gmail.com?subject=Undangan%20Interview%20/%20Diskusi%20Peluang" },
        { label: "WhatsApp: +62 822-1573-9924", href: "https://wa.me/6282215739924", target: "_blank" },
        { label: "LinkedIn: /in/mallikwinata", href: "https://www.linkedin.com/in/mallikwinata", target: "_blank" },
        { label: "Website: mallik.web.id", href: "https://mallik.web.id", target: "_blank" }
      ]
    }
  ],
  legalLinks: [
    { label: "Curriculum Vitae", href: resolvePath("/cv/") },
    { label: "kruza8@gmail.com", href: "mailto:kruza8@gmail.com" },
    { label: "+62 822-1573-9924", href: "tel:+6282215739924" }
  ]
};
