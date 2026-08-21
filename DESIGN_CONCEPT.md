# DESIGN CONCEPT — Portfolio Redesign

## 1. PERSONAL BRANDING

**Title:** `Multidisciplinary Designer & Developer`

Alasan:
- Bukan hanya "Frontend Developer" — portfolio menunjukkan kemampuan di design (poster, layout, brand, UI/UX) DAN development (React, web)
- "Multidisciplinary" mencerminkan jangkauan dari social media content sampai UI/UX system design
- Cocok dengan tagline existing: "exploring the intersection of culture, emotion, and aesthetics"

---

## 2. STRUKTUR WEBSITE

```
┌─────────────────────────────────────┐
│            PORTFOLIO                │  ← HERO (fullscreen)
│     [blue rectangle follower]       │
├─────────────────────────────────────┤
│                                     │
│   HELLO!                            │  ← PROFILE
│   I'M ERLANGGA ARTHA                │     (dengan foto)
│                                     │
├─────────────────────────────────────┤
│                                     │
│   "I explore the intersection of    │  ← PERSONAL STATEMENT
│    culture, emotion, and            │     (fullscreen typography)
│    aesthetics..."                   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   TOOLS I'M FLUENT IN               │  ← FLOATING SKILLS
│                                     │     (floating pills)
│   [JS]  [React]  [Figma]            │
│        [PS]  [AI]  [VS Code]        │
│   [Tailwind]  [CapCut]  [Canva]     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SELECTED WORK                     │  ← HORIZONTAL SCROLL
│   ┌──────┐ ┌──────┐ ┌──────┐      │     (GSAP horizontal)
│   │SPMB  │ │BAZMA │ │PRISMA│      │
│   │2026  │ │2025  │ │2025  │      │
│   └──────┘ └──────┘ └──────┘      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GET IN TOUCH                      │  ← CONTACT
│   erlangga.arthaa@gmail.com         │
│                                     │
└─────────────────────────────────────┘
```

---

## 3. WIREFRAME TEXT-BASED PER SECTION

### HERO
```
┌─────────────────────────────────────────┐
│  [globe icon]  09 Jan, 2026             │
│  Social Media  By: Erlangga Artha       │
│                                         │
│                                         │
│              P O R T F O L I O          │  ← 25vw, bold, hitam
│                                         │
│                                         │
│  Frontend Web / UI/UX Design / Brand    │
│                    erlangga.arthaa@gmail │
│                    088293657753         │
│                    Bogor, West Java     │
└─────────────────────────────────────────┘
```

**Interactive Element:** Blue rectangle (#2147ff) mengikuti cursor dengan smooth lag. Saat melewati "PORTFOLIO", teks berubah putih via mix-blend-mode.

### PROFILE
```
┌─────────────────────────────────────────┐
│  ┌──────────┐                           │
│  │          │   HELLO!                   │
│  │  PHOTO   │   I'M ERLANGGA ARTHA      │
│  │          │                           │
│  └──────────┽   Multidisciplinary        │
│                  Designer & Developer    │
│                                         │
│  [description dari CV / personal]       │
│                                         │
│  ─────────────────────────────────────  │
│  Email          Phone         Location  │
└─────────────────────────────────────────┘
```

### PERSONAL STATEMENT
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│   "I explore the intersection of        │
│    culture, emotion, and aesthetics     │
│    to create visual systems that        │
│    resonate."                           │
│                                         │
│   — Erlangga Artha                      │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```
GSAP text reveal per word / per line.

### TOOLS I'M FLUENT IN
```
┌─────────────────────────────────────────┐
│                                         │
│   TOOLS I'M FLUENT IN                   │
│                                         │
│         ┌──────────┐                    │
│    ┌────┤  React   ├────┐              │
│    │    └──────────┘    │  ┌─────────┐  │
│  ┌─┴──────┐    ┌───────┴┐ │  Figma  │  │
│  │  VS    │    │Tailwind│ └─────────┘  │
│  │ Code   │    └───────┘               │
│  └────────┘          ┌──────────┐      │
│          ┌───────────┤Photoshop │      │
│          │  Canva    └──────────┘      │
│          └───────────┐                 │
│                    ┌─┴────────┐        │
│                    │Illustrator│       │
│                    └──────────┘        │
│                                         │
└─────────────────────────────────────────┘
```
Floating pills dengan posisi organik. Muncul dari posisi acak dengan GSAP.

### SELECTED WORK (Horizontal Scroll)
```
┌─────────────────────────────────────────┐
│  ◄ [PROJECT 1]  [PROJECT 2]  [PROJECT 3] ►
│                                         │
│  ┌─────────────────┐ ┌──────────────┐  │
│  │  SPMB UI/UX     │ │ BAZMA        │  │
│  │  2026           │ │ 2025         │  │
│  │  React · Figma  │ │ Canva · PS   │  │
│  │  "New Student   │ │ "Content     │  │
│  │   Admission     │ │  Creator"    │  │
│  │   System"       │ │              │  │
│  └─────────────────┘ └──────────────┘  │
│                                         │
│  Scroll ↓ → Projects move ←            │
└─────────────────────────────────────────┘
```
GSAP horizontal scroll: scroll vertikal → project bergerak horizontal.

---

## 4. ANIMASI GSAP

### A. Hero — Blue Rectangle Follower
```javascript
// GSAP ticker untuk follow cursor
// Blue rectangle (#2147ff) dengan ukuran ~200px x 400px
// Posisi: lerp ke mouse position dengan smooth lag
// mix-blend-mode: difference atau masking untuk efek teks berubah putih
```

### B. Profile — Reveal
```javascript
// Framer Motion (existing): opacity + x axis
// Foto: slide from left
// Text: slide from right
// Contact bar: fade up
```

### C. Personal Statement — Text Reveal
```javascript
// GSAP SplitText atau manual per-line
// Setiap line: y: 100 → 0, opacity: 0 → 1
// Stagger: 0.15s antar line
// ScrollTrigger trigger
```

### D. Tools — Floating Pills
```javascript
// Setiap pill:
//   - Posisi awal: random (di luar viewport)
//   - Posisi akhir: posisi organik yang ditentukan
//   - Rotasi: random -5deg → 0deg
//   - Opacity: 0 → 1
//   - Duration: 1-1.5s, stagger: 0.1s
//   - ScrollTrigger: once

// Idle animation:
//   - Float: 2-4px y-axis
//   - Duration: 4-6s
//   - Repeat: infinite, yoyo: true

// Magnetic hover:
//   - onMouseMove: GSAP ke arah cursor (max 10px)
//   - onMouseLeave: GSAP kembali ke posisi awal
```

### E. Selected Work — Horizontal Scroll
```javascript
// GSAP ScrollTrigger dengan horizontal movement
// container: width = total project width
// trigger: section
// scrub: 1-2
// pin: true
// end: () => "+=" + (container width - window width)
```

---

## 5. ALASAN DESAIN

### Kenapa "PORTFOLIO" sebagai Hero utama?
- **Bold statement** — langsung menyatakan ini adalah portfolio tanpa basa-basi
- Typography besar menciptakan **visual impact** yang kuat
- Blue rectangle follower memberikan **interactive identity** yang memorable
- Sesuai dengan referensi Bureau DAM / Studio Freight yang typography-driven

### Kenapa floating pills untuk Tools?
- Menghindari kesan "dashboard" atau "tech stack template"
- Posisi organik menciptakan **editorial feel**
- Animasi floating membuat section terasa **hidup** tanpa mengganggu
- Magnetic interaction memberikan **premium tactile feedback**

### Kenapa horizontal scroll untuk Selected Work?
- **Break dari grid biasa** — memberikan pengalaman browsing yang unik
- Setiap project mendapat **viewport penuh** — fokus maksimal
- Typography sebagai fokus utama, screenshot sebagai pendukung
- Cocok untuk menampilkan 4-6 project terbaik

### Kenapa Black & White + Blue (#2147ff)?
- **Hitam & putih** memberikan kesan **timeless, premium, editorial**
- **Blue (#2147ff)** sebagai satu-satunya accent color — berani, modern, kontras
- Konsisten dengan referensi: Bureau DAM, Basic Agency, Signal Studio
- Menghindari gradient/warna mencolok yang terkesan template

### Kenapa "Multidisciplinary Designer & Developer"?
- Mencerminkan realita: user mengerjakan **frontend, UI/UX, brand design, social media content, layout design**
- Bukan label sempit seperti "Frontend Developer" saja
- Memberi kesan **creative technologist** yang langka dan premium

---

## 6. COLOR PALETTE & TYPOGRAPHY

### Colors
```css
--black: #1a1a1a;
--white: #ffffff;
--gray-100: #f5f5f5;
--gray-300: #d4d4d4;
--gray-500: #a3a3a3;
--gray-700: #404040;
--blue: #2147ff;
```

### Typography
- **Display:** Inter (Black, 900) — untuk heading besar
- **Body:** Inter (Regular 400, Medium 500) — untuk body text
- **Scale:** 14vw (hero), 8xl (section titles), base-lg (body)

---

## 7. IMPLEMENTASI PLAN

1. Install GSAP + ScrollTrigger
2. Buat Hero baru dengan blue rectangle follower
3. Update Profile section (About.jsx) dengan layout editorial
4. Buat Personal Statement section baru
5. Redesign Tools section → floating pills dengan GSAP
6. Buat Selected Work section → horizontal scroll GSAP
7. Update Contact section
8. Update App.js dengan struktur baru
9. Hapus komponen yang tidak dipakai
10. Test & build

---

**Setuju dengan konsep ini?** Jika ada revisi, sampaikan. Jika setuju, saya akan mulai implementasi.