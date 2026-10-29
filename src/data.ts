import cert01 from "./assets/cert-01.webp";
import cert02 from "./assets/cert-02.webp";
import type { LucideIcon } from "lucide-react";
import {
  Activity, Award, Box, Bug, ClipboardCheck, FileSearch, GitBranch, GraduationCap, Github,
  Linkedin, Lock, Mail, MapPin, Radar, Ruler, Send, Shield, ShieldAlert, ShieldCheck,
  Terminal, Zap,
} from "lucide-react";

export const PROFILE = {
  name1: "Jalaludin Yusuf",
  name2: "Al Af Ghani",
  roles: ["Cybersecurity Analyst", "Security-Driven QC / QA Engineer", "Vulnerability Researcher", "Bug Hunter"],
  tagline: "Menjembatani keandalan sistem dan keamanan siber — memastikan aplikasi bebas bug fungsi sekaligus tahan terhadap celah eksploitasi.",
  // TODO: ganti dengan email asli-mu (cek ejaan "afgni" vs "afgani")
  email: "jalaludinyusufalafgni@gmail.com",
  socials: [
    { label: "GitHub", icon: Github, href: "https://github.com/jalaludinyusufalafgani-code" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jalaludin-yusuf-al-af-gani-093411423" },
    { label: "Email", icon: Mail, href: "mailto:jalaludinyusufalafgni@gmail.com" },
  ] as { label: string; icon: LucideIcon; href: string }[],
};

export const METRICS: { value: string; label: string; icon: LucideIcon; count?: number }[] = [
  { value: "50+", label: "Security & QA Test Cases", icon: ClipboardCheck, count: 50 },
  { value: "Top 10", label: "OWASP Focused", icon: ShieldAlert },
  { value: "0", label: "Data Leak on Target", icon: Lock },
  { value: "CLI", label: "Linux & Network Hardening", icon: Terminal },
];

export const FACTS: { icon: LucideIcon; text: string }[] = [
  { icon: GraduationCap, text: "SMKN 1 Kejobong — Teknik Komputer & Jaringan" },
  { icon: Terminal, text: "Fokus: web security · API testing · Linux" },
  { icon: MapPin, text: "Purbalingga, Indonesia — remote-friendly" },
];

export const PRINCIPLES = [
  "preventif itu murah, insiden itu mahal.",
  "uji seperti penyerang, perbaiki seperti engineer.",
  "bukti mengalahkan asumsi — setiap klaim harus bisa direproduksi.",
];

export type ProjTag = "crit" | "high" | "cy" | "ok" | "dim";
export const PROJECTS: { id: string; title: string; desc: string; result: string; tags: { t: string; s: ProjTag }[]; stack: string[] }[] = [
  {
    id: "CASE-01",
    title: "Web E-Voting Security & Logic Audit",
    desc: "Audit black-box + white-box sistem e-voting OSIS (Next.js): rate-limit bypass, type-coercion 500, body-request DoS, hingga uji bypass tally.",
    result: "9 temuan → semua dipatch · re-test: pass",
    tags: [{ t: "Critical", s: "crit" }, { t: "OWASP A05", s: "cy" }, { t: "Logic Bug", s: "dim" }],
    stack: ["black-box", "source review", "curl"],
  },
  {
    id: "CASE-02",
    title: "API Rate-Limiting & Stress Testing",
    desc: "Uji ketahanan endpoint login & admin lewat burst paralel dan payload salah tipe; ukur latensi p95 serta distribusi kode respons.",
    result: "429 enforced at attempt #11 · p95 0,16s · 0 crash",
    tags: [{ t: "High", s: "high" }, { t: "Stress Test", s: "cy" }],
    stack: ["bash + curl", "parallel burst", "latency profile"],
  },
  {
    id: "CASE-03",
    title: "Authentication Bypass Prevention",
    desc: "Uji middleware-subrequest bypass, SSRF lewat image optimizer, perlindungan halaman admin/tally, dan penguatan header keamanan.",
    result: "semua jalur ditutup · CSP + HSTS diperkuat",
    tags: [{ t: "Critical", s: "crit" }, { t: "Auth", s: "high" }],
    stack: ["CVE research", "headers", "turnstile"],
  },
];

export type StackGroup = { group: string; items: { icon: LucideIcon; name: string; desc: string }[] };
export const STACK: StackGroup[] = [
  {
    group: "Quality Control",
    items: [
      { icon: FileSearch, name: "Black-box Testing", desc: "Uji tanpa kredensial — dari sudut pandang pengguna & penyerang" },
      { icon: Activity, name: "API Testing", desc: "Contract endpoint, status code, dan error handling" },
      { icon: Ruler, name: "Boundary Analysis", desc: "Input panjang/tipe aneh, edge case, dan limit sistem" },
    ],
  },
  {
    group: "Cybersecurity",
    items: [
      { icon: Bug, name: "Burp Suite", desc: "Intercept & manipulasi request untuk uji logika" },
      { icon: Radar, name: "Nmap", desc: "Pemetaan port & service pada target yang diizinkan" },
      { icon: Activity, name: "Wireshark", desc: "Analisis packet & trafik jaringan" },
      { icon: Zap, name: "OWASP ZAP", desc: "DAST scanner + spider untuk surface web" },
    ],
  },
  {
    group: "OS & Tools",
    items: [
      { icon: Terminal, name: "Linux CLI", desc: "Shell, systemd, hardening & scripting harian" },
      { icon: Box, name: "Docker", desc: "Isolasi lingkungan uji & lab reproduksi" },
      { icon: Send, name: "Postman", desc: "Koleksi request & uji regresi API" },
      { icon: GitBranch, name: "Git", desc: "Versioning, diff review & kolaborasi" },
    ],
  },
];

export type CertStatus = "amber" | "cy" | "dim" | "green";
export const CERTS: { icon: LucideIcon; title: string; org: string; desc: string; status: string; s: CertStatus }[] = [
  { icon: ShieldCheck, title: "Red Hat — Getting Started with Linux Fundamentals (RH104)", org: "Red Hat Training",
    desc: "Certificate of attendance · Ver. 9.1 · 16 credit hours · verify via Credly (credly.com/badges/be13fe9b-4164-469a-9092-c3adfd1b0e0c).",
    status: "Completed · Mar 2026", s: "green" },
  { icon: Award, title: "Juara 3 LKS Kab. Purbalingga — Cybersecurity Technology", org: "MKKS SMK Kab. Purbalingga · Dinas Pendidikan Prov. Jateng",
    desc: "Lomba Kompetensi Siswa SMK Kab. Purbalingga · 7–14 Feb 2026 · No. 20/MKKS.SMK/II/2026.",
    status: "Juara 3 · Feb 2026", s: "amber" },
  { icon: Shield, title: "PortSwigger Web Security Academy", org: "PortSwigger", desc: "Lab SQL injection, XSS, access control & logic flaws.", status: "In Progress", s: "amber" },
  { icon: Terminal, title: "TryHackMe — Learning Paths", org: "TryHackMe", desc: "Pre-Security → Jr Penetration Tester path.", status: "Learning", s: "cy" },
  { icon: Bug, title: "OWASP Juice Shop — CTF", org: "OWASP", desc: "Practice hunting OWASP Top 10 pada aplikasi lanjutan.", status: "Practice", s: "dim" },
  { icon: ShieldCheck, title: "Bug Bounty Platform", org: "HackerOne", desc: "Eksplorasi program publik — responsible disclosure.", status: "Active", s: "green" },
];

export const CERT_PHOTOS: { title: string; src: string }[] = [
  { title: "Red Hat RH104 — Certificate of Attendance", src: cert01 },
  { title: "LKS Kab. Purbalingga — Juara 3", src: cert02 },
];

export const NAV: { id: string; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const TABS: { id: "projects" | "stack" | "certs"; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Tech & Arsenal" },
  { id: "certs", label: "Certificates" },
];
