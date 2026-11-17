// Semua konten portfolio di satu tempat. Ubah teks di sini, bukan di komponen.

export const profile = {
  name: "Erlangga Artha",
  short: "artha",
  roles: ["Frontend Web Development", "UI/UX Design", "Brand Design"],
  email: "erlangga.arthaa@gmail.com",
  phone: "088293657753",
  phoneHref: "tel:+6288293657753",
  location: "Bogor, West Java",
  cv: "/image/CV ARTHA.pdf",
  photo: "/image/artha.png",
  intro:
    "I combine frontend web and graphic design — building responsive interfaces and bold visuals. Clean code, strong graphics, functional digital experiences.",
  bio: "A multidisciplinary designer exploring the intersection of culture, emotion, and aesthetics. To me, design is more than just aesthetics; it's a tool to tell stories, navigate identities, and find the perfect balance between enduring values and constant change.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/artaaaz" },
  { label: "Instagram", href: "https://www.instagram.com/erlangga.artha/" },
  { label: "Email", href: "mailto:erlangga.arthaa@gmail.com" },
];

export const services = [
  {
    num: "01",
    title: "UI/UX Design",
    text: "User flow, wireframe, design system, dan prototype interaktif di Figma.",
  },
  {
    num: "02",
    title: "Web Development",
    text: "Antarmuka responsif dengan React, Next.js, Tailwind, dan Laravel.",
  },
  {
    num: "03",
    title: "Video Production",
    text: "Editing dan visual storytelling untuk konten dan dokumentasi.",
  },
  {
    num: "04",
    title: "Editorial Design",
    text: "Poster, publikasi, social media kit, dan brand identity kit.",
  },
];

export const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "GSAP",
  "Laravel",
  "MySQL",
  "Docker",
  "Linux",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Affinity",
  "VS Code",
  "Canva",
  "CapCut",
];

// Proyek unggulan (UI/UX case study + web development).
// `tags` tampil sebagai baris kecil di bawah judul kartu.
// `color` = warna tema halaman project (logo, tombol gelombang, label, dll.),
// sesuaikan dengan warna utama tiap project.
export const projects = [
  {
    id: "mention",
    color: "#ffe500",
    type: "uiux",
    title: "Mention",
    subtitle: "UI/UX Competition — 3rd Place, Widyatama",
    category: "UI / UX Design",
    year: "2025",
    tags: ["ui/ux", "brand identity", "interaction"],
    image: "/image/M.png",
    award: "3rd Place",
    // Isi "The Making of Mention" — tampil di halaman project Mention.
    kicker: "The Making of Mention",
    badge: "🏆 3rd Place — UI/UX Competition, Widyatama",
    description: "Every product starts with a reason.",
    tools: ["User Experience", "Information Architecture", "Visual Identity", "Interaction Design"],
    toolsLabel: "Disciplines",
    challenge:
      "Proses awal perancangan Mention dilatarbelakangi oleh hambatan nyata di mana desainer sering menghabiskan terlalu banyak waktu hanya untuk mengumpulkan referensi visual dan menyusun moodboard yang terfragmentasi di berbagai platform terpisah.",
    solution:
      "Dari masalah tersebut, Mention dikembangkan sebagai sebuah pengalaman digital yang menggabungkan struktur informasi, visual identity, dan interaction design dalam satu sistem.",
    result:
      "Awalnya hanya sekadar ide untuk merapikan workflow pencarian inspirasi yang berantakan, Mention berkembang menjadi sebuah prototipe sistem yang berhasil meraih Juara 3 Kompetisi UI/UX di Widyatama.",
    deliverables: [
      "Brand Identity Kit",
      "Social Media Kit",
      "Educational Publication",
      "Event & Celebration Poster",
      "Interactive UI/UX Design",
    ],
    gallery: ["/image/gelo2.png", "/image/gelo.png", "/image/gelo1.png"],
    galleryLabel: "Award documentation",
    github: "https://www.figma.com/design/enmGRrgy0bxLAxaQM1BtxF/MENTION?node-id=0-1&t=K5RRec6RvZv2iRW1-1",
    linkLabel: "View Figma",
  },
  {
    id: "bmps-uiux",
    color: "#22a06b",
    type: "uiux",
    title: "BMPS Bogor",
    subtitle: "Badan Musyawarah Perguruan Swasta",
    category: "UI / UX Design",
    year: "2026",
    date: "2026",
    tags: ["ui/ux", "figma", "responsive"],
    image: "/image/bmps-uiux.png",
    tools: ["Figma", "UI Design", "Responsive Design", "User Flow"],
    description:
      "Perancangan pengalaman dan antarmuka website BMPS Bogor dengan fokus pada struktur informasi, kemudahan navigasi, responsive layout, dan visual identity yang konsisten.",
    overview:
      "Perancangan antarmuka dan pengalaman pengguna untuk platform digital BMPS Bogor yang bertujuan menyajikan informasi organisasi secara terstruktur, modern, dan mudah diakses oleh seluruh stakeholder pendidikan swasta.",
    challenge:
      "Menata arsitektur informasi yang kompleks dan menyederhanakan alur navigasi agar pengguna dari berbagai latar belakang dapat menemukan informasi penting secara cepat dan intuitif.",
    process:
      "Riset kebutuhan pengguna & stakeholder → Wireframing & User Flow → Design System & Komponen UI di Figma → Prototyping interaktif → Validasi responsivitas antar perangkat.",
    solution:
      "Menerapkan layout editorial modern dengan visual hierarchy yang kuat, tipografi terstruktur, sistem navigasi adaptif, serta komponen UI yang konsisten dan aksesibel.",
    result:
      "Peningkatan signifikan dalam kemudahan navigasi, kepuasan pengguna, dan representasi identitas digital BMPS Bogor yang jauh lebih profesional dan kredibel.",
    github:
      "https://www.figma.com/design/1mbMyVTcBIi01G7pfpQBXF/BMPS-ASOY?node-id=483-1008&t=KdRrUQbelbVvQZUb-1",
    linkLabel: "View Figma",
  },
  {
    id: "spmb-uiux",
    color: "#4f6bff",
    type: "uiux",
    title: "SPMB",
    subtitle: "Sistem Penerimaan Murid Baru",
    category: "UI / UX Design",
    year: "2025",
    date: "2025",
    tags: ["ui/ux", "user flow", "wireframe"],
    image: "/image/DB.png",
    tools: ["Figma", "User Flow", "Wireframe", "UI Design", "Responsive Design"],
    description:
      "Perancangan UI/UX sistem penerimaan murid baru dengan fokus pada alur pendaftaran yang sederhana, informasi yang jelas, dan pengalaman pengguna yang mudah dipahami.",
    overview:
      "Perancangan sistem pendaftaran online terpadu yang memfasilitasi calon siswa dan orang tua dalam seluruh tahapan registrasi, pengunggahan berkas, verifikasi data, hingga pemantauan status seleksi secara real-time.",
    challenge:
      "Banyaknya tahapan administrasi dan formulir data yang berpotensi membingungkan pengguna baru, sehingga memicu tingginya tingkat drop-off dan kesalahan pengisian data saat proses pendaftaran.",
    process:
      "Analisis alur registrasi konvensional → Pemetaan user flow & task flow multi-step → Wireframing low-fidelity → Penyusunan design tokens & UI library di Figma → Usability testing alur form pendaftaran.",
    solution:
      "Membagi formulir pendaftaran ke dalam multi-step form dengan indikator progres yang jelas, validasi form real-time, dashboard status pendaftaran yang transparan, serta tata letak responsif yang mobile-friendly.",
    result:
      "Alur registrasi menjadi jauh lebih cepat, intuitif, dan bebas hambatan, mengurangi tingkat kebingungan pengguna secara signifikan, serta menghadirkan pengalaman pengguna yang transparan dan efisien.",
    github:
      "https://www.figma.com/design/pkcwPccBYX4aY38ICOQWSa/Untitled?node-id=0-1&t=mVmv8niKC9yyvdFc-1",
    linkLabel: "View Figma",
  },
  {
    id: "spmb-web",
    color: "#4f6bff",
    type: "development",
    title: "Sistem Penerimaan Murid Baru",
    category: "Frontend Web & UI/UX",
    year: "2025",
    date: "Nov 2025",
    tags: ["frontend", "react", "ui/ux"],
    image: "/image/user.png",
    tools: "Figma, React, VS Code",
    github: "https://github.com/Finnn-45/front-end-ppdb.git",
    description:
      "Mengembangkan platform web sistem penerimaan murid baru digital yang dirancang untuk mempermudah alur pendaftaran, seleksi, hingga pengumuman calon siswa secara efisien.",
  },
  {
    id: "bmps-web",
    color: "#22a06b",
    type: "development",
    title: "BMPS Bogor Website",
    category: "UI/UX & Frontend Web",
    year: "2026",
    date: "Aug 2026",
    tags: ["frontend", "next.js", "ui/ux"],
    image: "/image/BMPS ANJ.png",
    tools: "Figma, Next.js, VS Code",
    github: "https://github.com/rifkyfbrn07/BMPS-bogor.git",
    // TODO(artha): cek ulang deskripsi ini
    description:
      "Implementasi website BMPS Bogor dari desain Figma ke frontend menggunakan Next.js.",
  },
  {
    id: "wedding",
    color: "#d6455a",
    type: "development",
    title: "Wedding Invitation",
    category: "Frontend Web Development",
    year: "2026",
    date: "Aug 2026",
    tags: ["frontend", "laravel"],
    image: "/image/we.jpeg",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/rifkyfbrn07/wedding_web.git",
    // TODO(artha): cek ulang deskripsi ini
    description: "Website undangan pernikahan digital berbasis Laravel dan MySQL.",
  },
  {
    id: "airline",
    color: "#38bdf8",
    type: "development",
    title: "Airline System",
    category: "Full-Stack Web Development",
    year: "2026",
    date: "June 2026",
    tags: ["full-stack", "laravel", "mysql"],
    image: "/image/doni.png",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/maskapai.git",
    // TODO(artha): cek ulang deskripsi ini
    description: "Sistem informasi maskapai berbasis web, dibangun dengan Laravel dan MySQL.",
  },
  {
    id: "catering",
    color: "#ff7a1a",
    type: "development",
    title: "Catering Online",
    category: "Full-Stack Web Development",
    year: "2026",
    date: "June 2026",
    tags: ["full-stack", "laravel", "mysql"],
    image: "",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/catering-kali-ini-serius.git",
    // TODO(artha): cek ulang deskripsi ini
    description: "Aplikasi web pemesanan catering online, dibangun dengan Laravel dan MySQL.",
  },
  {
    id: "sensor",
    color: "#14b8a6",
    type: "development",
    title: "Sensor Data CRUD",
    category: "Full-Stack Web Development",
    year: "2025",
    date: "Aug 2025",
    tags: ["full-stack", "laravel", "iot"],
    image: "",
    tools: "Laravel, MySQL, VS Code",
    github: "https://github.com/artaaaz/sistem-crud-sensor-suhu.git",
    // TODO(artha): cek ulang deskripsi ini
    description:
      "Aplikasi web CRUD untuk mencatat dan mengelola data sensor suhu, dibangun dengan Laravel dan MySQL.",
  },
  {
    id: "iot",
    color: "#a3e635",
    type: "development",
    title: "IoT Dashboard",
    category: "Full-Stack Web Development",
    year: "2026",
    date: "June 2026",
    tags: ["full-stack", "laravel", "iot"],
    image: "",
    tools: "Laravel, MySQL, VS Code",
    // TODO(artha): cek ulang deskripsi ini
    description: "Dashboard web untuk memantau data perangkat IoT, dibangun dengan Laravel dan MySQL.",
  },

  // ---------------------------------------------------------------------------
  // DUMMY: tempat untuk project web yang belum dimasukkan.
  // Ganti judul, tahun, tags, gambar, deskripsi, dan link GitHub dengan data asli,
  // atau hapus yang tidak dipakai. Selama `image` kosong, kartu menampilkan judul.
  // ---------------------------------------------------------------------------
  ...[1, 2, 3, 4].map((n) => ({
    id: `dummy-${n}`,
    color: "#2147ff",
    type: "development",
    dummy: true,
    title: `Project Dummy ${String(n).padStart(2, "0")}`,
    category: "Web Development",
    year: "2026",
    date: "2026",
    tags: ["frontend", "react"],
    image: "",
    tools: "React, Tailwind, VS Code",
    description: "Data dummy — ganti dengan deskripsi project asli.",
  })),
];

// Semua video, tampil berurutan di section PLAY REEL (setelah hero).
// Saat discroll, video berganti sesuai urutan di sini. `short` = nama di tombol pilihan.
export const videos = [
  {
    id: "kaleidoskop",
    short: "Kaleidoskop",
    title: "The Dreams We Crafted Together",
    series: "Lepas Juang #2 — Kaleidoskop",
    videoSrc: "https://youtu.be/9qyouysn6AU",
    thumbnail: "/image/kaleidoskop.jpg",
    role: "Video • Editing",
  },
  {
    id: "langkah-kecil",
    short: "Langkah Kecil",
    title: "Langkah Kecil Mereka, Harapan Besar Kita",
    series: "Lepas Juang #2",
    videoSrc: "https://youtu.be/2K3CYhc-ILQ",
    thumbnail: "/image/tak.png",
    role: "Video • Editing",
  },
];

export const showreel = {
  story: [
    "A short visual story about the final moments of our journey together. The video captures the atmosphere, laughter, memories, and emotions that came with saying goodbye.",
    "The intention was simple — to preserve the small, fleeting moments that would eventually become lasting memories.",
  ],
};
