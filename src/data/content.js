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
    // Gabungan desain UI/UX (Figma) + website full-stack (GitHub).
    id: "bmps",
    aliases: ["bmps-uiux", "bmps-web"],
    color: "#22a06b",
    type: "development",
    title: "BMPS Bogor",
    subtitle: "Badan Musyawarah Perguruan Swasta",
    kicker: "Badan Musyawarah Perguruan Swasta",
    category: "UI/UX Design & Full-Stack Web",
    year: "2026",
    date: "Aug 2026",
    tags: ["ui/ux", "next.js", "postgresql"],
    image: "/image/BMPS ANJ.png",
    tools: ["Figma", "User Flow & Wireframe", "Next.js 16 + React 19", "TypeScript", "Prisma + PostgreSQL", "Tailwind CSS", "GSAP", "Vercel Blob"],
    toolsLabel: "Design & Stack",
    description:
      "Website resmi BMPS Bogor sekaligus portal anggota, dari riset dan desain UI/UX di Figma sampai sistem yang berjalan: profil organisasi, program, berita, pelatihan, beasiswa, dan direktori sekolah & yayasan swasta.",
    overview:
      "Project ini dikerjakan dua tahap: merancang struktur informasi, alur, dan antarmukanya di Figma, lalu mewujudkannya menjadi aplikasi Next.js lengkap dengan database, panel admin verifikasi lembaga, dan dashboard sekolah anggota.",
    challenge:
      "Informasi organisasi BMPS kompleks dan data sekolah swasta di Bogor masih didata manual. Dibutuhkan satu tempat yang mudah dinavigasi publik sekaligus bisa menerima, memverifikasi, dan memperbarui data lembaga anggota tanpa proses kertas.",
    process:
      "Riset kebutuhan & stakeholder → user flow dan wireframe → design system & prototype di Figma → komponen React dari desain → database Prisma (sekolah, yayasan, pendaftaran, berita, program, audit log) → API + validasi Zod → login berbasis role, panel admin, dan animasi GSAP.",
    solution:
      "Layout editorial dengan hierarki visual yang jelas dan navigasi adaptif. Sekolah mendaftar online dan bisa mengecek statusnya, admin menerima atau menolak lewat panel verifikasi, dan sekolah yang disetujui otomatis tampil di direktori publik lengkap dengan tombol WhatsApp.",
    result:
      "Pendataan anggota BMPS berpindah dari manual ke sistem online yang terverifikasi, dengan website publik yang modern, responsif, dan kredibel. Keamanannya dijaga lewat role akses, rate limit login, dan audit log.",
    deliverablesLabel: "Features",
    deliverables: [
      "User flow & wireframe",
      "Figma UI kit",
      "Public website",
      "School directory",
      "Online registration",
      "Admin verification",
      "News & program CMS",
      "Role-based access",
      "Audit log",
    ],
    links: [
      { href: "https://www.figma.com/design/1mbMyVTcBIi01G7pfpQBXF/BMPS-ASOY?node-id=483-1008&t=KdRrUQbelbVvQZUb-1", label: "View Figma" },
      { href: "https://github.com/rifkyfbrn07/BMPS-bogor.git", label: "View on GitHub" },
    ],
    gallery: [
      { src: "/image/bmps/d-home.jpg", caption: "Landing page" },
      { phones: ["/image/bmps/m-home.jpg", "/image/bmps/m-schools.jpg"], caption: "Mobile site" },
      { src: "/image/bmps/d-programs.jpg", caption: "Programs" },
      { src: "/image/bmps/d-gallery.jpg", caption: "Activity gallery" },
      { src: "/image/bmps/d-schools.jpg", caption: "School directory" },
      { phones: ["/image/bmps/m-register.jpg", "/image/bmps/m-news.jpg"], caption: "Registration & news" },
      { src: "/image/bmps/d-news.jpg", caption: "News & categories" },
      { src: "/image/bmps/d-admin-verify.jpg", caption: "Admin verification" },
    ],
  },
  {
    // Gabungan desain UI/UX (Figma) + implementasi frontend (GitHub).
    id: "spmb",
    aliases: ["spmb-uiux", "spmb-web"],
    color: "#4f6bff",
    type: "uiux",
    title: "SPMB",
    subtitle: "Sistem Penerimaan Murid Baru",
    kicker: "Sistem Penerimaan Murid Baru · SMK TI Bazma",
    category: "UI/UX Design & Frontend Web",
    year: "2025",
    date: "Nov 2025",
    tags: ["ui/ux", "next.js", "frontend"],
    image: "/image/DB.png",
    tools: ["Figma", "User Flow & Wireframe", "Next.js + React", "TypeScript", "Tailwind CSS + shadcn/ui", "GSAP"],
    toolsLabel: "Design & Stack",
    description:
      "Sistem penerimaan murid baru SMK TI Bazma, dari riset alur dan desain di Figma sampai diwujudkan menjadi web: daftar akun, formulir multi-step, upload berkas, dan dashboard tahapan seleksi.",
    overview:
      "Project ini dikerjakan dua tahap: merancang UI/UX-nya di Figma, lalu membangun front-end-nya dengan Next.js bersama tim sehingga desain tersebut bisa dipakai calon murid.",
    challenge:
      "Pendaftaran punya banyak tahap (akun, data pribadi, prestasi, orang tua, rumah, kesehatan, berkas) dan tujuh rangkaian seleksi. Calon murid dan orang tua mudah bingung harus mengisi apa dan sedang berada di tahap mana.",
    process:
      "Pemetaan alur pendaftaran & seleksi → user flow dan wireframe → desain UI & komponen di Figma → implementasi Next.js + Tailwind + shadcn/ui → stepper, formulir per tahap, dan animasi GSAP → uji tampilan di desktop & HP.",
    solution:
      "Formulir dipecah menjadi enam langkah dengan stepper, dropdown wilayah otomatis dari API wilayah Indonesia, dan daftar berkas lengkap dengan template surat. Dashboard menampilkan tujuh tahap seleksi (pendaftaran sampai pengumuman) beserta panduan alur seleksi.",
    result:
      "Alur pendaftaran yang tadinya panjang jadi bertahap dan jelas: calon murid tahu langkah berikutnya, berkas apa yang disiapkan, dan posisi mereka di proses seleksi, baik di desktop maupun HP.",
    deliverablesLabel: "Features",
    deliverables: [
      "User flow & wireframe",
      "Figma UI kit",
      "Account sign-up & login",
      "6-step registration form",
      "Region dropdown (API)",
      "Document upload",
      "Selection stepper",
      "Selection guide",
      "Responsive layout",
    ],
    links: [
      { href: "https://www.figma.com/design/pkcwPccBYX4aY38ICOQWSa/Untitled?node-id=0-1&t=mVmv8niKC9yyvdFc-1", label: "View Figma" },
      { href: "https://github.com/Finnn-45/front-end-ppdb.git", label: "View on GitHub" },
    ],
    gallery: [
      { src: "/image/DB.png", caption: "Figma design" },
      { src: "/image/spmb/d-dashboard.jpg", caption: "Built dashboard" },
      { phones: ["/image/spmb/m-login.jpg", "/image/spmb/m-dashboard.jpg"], caption: "Mobile login & dashboard" },
      { src: "/image/spmb/d-guide.jpg", caption: "Selection guide" },
      { src: "/image/spmb/d-form.jpg", caption: "Multi-step form" },
      { phones: ["/image/spmb/m-form.jpg", "/image/spmb/m-upload.jpg"], caption: "Form on mobile" },
      { src: "/image/spmb/d-upload.jpg", caption: "Document upload" },
      { src: "/image/spmb/d-login.jpg", caption: "Login page" },
    ],
  },
  {
    id: "wedding",
    color: "#d6455a",
    type: "development",
    title: "Wedding Invitation",
    category: "Full-Stack Web Development",
    year: "2026",
    date: "Aug 2026",
    tags: ["full-stack", "laravel", "filament"],
    image: "/image/we.jpeg",
    kicker: "Walimatul 'Urus · Digital Invitation",
    tools: ["Laravel 13", "Filament (admin panel)", "Tailwind CSS 4", "Alpine.js", "GSAP + Lenis", "SQLite"],
    toolsLabel: "Stack",
    github: "https://github.com/rifkyfbrn07/wedding_web.git",
    description:
      "Undangan pernikahan digital yang personal untuk setiap tamu: nama tamu langsung tampil dari link undangan, lengkap dengan hitung mundur, love story, RSVP, dan ucapan, dalam Bahasa Indonesia maupun English.",
    overview:
      "Dibangun dengan Laravel 13 dan Filament sebagai panel admin, sehingga data mempelai, jadwal acara, musik, galeri, daftar tamu, RSVP, dan ucapan bisa dikelola tanpa menyentuh kode.",
    challenge:
      "Undangan digital biasanya generik: satu link untuk semua orang, tidak ketahuan siapa yang sudah membuka, dan konfirmasi kehadiran masih dikumpulkan manual lewat chat. Di sisi lain tampilannya harus tetap terasa hangat dan elegan, bukan seperti formulir.",
    process:
      "Merancang alur tamu (cover → buka undangan → isi undangan → RSVP) → menyusun database (undangan, tamu, log kunjungan, RSVP, ucapan, galeri) → membangun panel admin dengan Filament → memoles UI dengan ilustrasi adat, animasi GSAP + Lenis, lalu menguji responsif di HP.",
    solution:
      "Setiap tamu mendapat link personal (/i/ikko-fadhly/to/nama-tamu atau ?to=Nama) yang otomatis menyapa namanya dan mencatat kunjungannya. RSVP dan ucapan terkirim lewat AJAX tanpa reload, musik latar diputar setelah undangan dibuka, dan semua teks bisa berganti Bahasa Indonesia ↔ English tanpa memuat ulang halaman.",
    result:
      "Undangan terasa personal bagi tamu dan praktis bagi mempelai: kehadiran dan ucapan terkumpul otomatis di satu dashboard, kunjungan tamu bisa dipantau, dan tampilan tetap rapi dari HP sampai desktop.",
    deliverablesLabel: "Features",
    deliverables: [
      "Personalized guest links",
      "RSVP & guest count",
      "Wishes wall (AJAX)",
      "Bilingual ID / EN",
      "Live countdown",
      "Background music",
      "Guest visit tracking",
      "Filament admin panel",
      "Mobile-first layout",
    ],
    gallery: [
      { src: "/image/wedding/desktop-cover.jpg", caption: "Personalized cover" },
      { phones: ["/image/wedding/phone-cover-id.jpg", "/image/wedding/phone-cover-en.jpg"], caption: "Bilingual ID / EN" },
      { src: "/image/wedding/desktop-hero.jpg", caption: "Split layout on desktop" },
      { phones: ["/image/wedding/phone-hero.jpg", "/image/wedding/phone-countdown.jpg"], caption: "Mobile + bottom nav" },
      { src: "/image/wedding/desktop-countdown.jpg", caption: "Live countdown & love story" },
      { phones: ["/image/wedding/phone-story.jpg", "/image/wedding/phone-rsvp.jpg"], caption: "Love story & RSVP" },
      { src: "/image/wedding/desktop-rsvp.jpg", caption: "RSVP & wishes form" },
    ],
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
    kicker: "drg.Maskapai · Flight Booking Platform",
    tools: ["Laravel 13", "MySQL", "Tailwind CSS", "Alpine.js", "Midtrans", "Chart.js", "DomPDF + Excel export", "PWA"],
    toolsLabel: "Stack",
    github: "https://github.com/artaaaz/maskapai.git",
    description:
      "Platform pemesanan tiket pesawat end-to-end: dari cari penerbangan, pilih kelas & kursi, bayar lewat Midtrans, sampai e-ticket, check-in, boarding, dan laporan pendapatan.",
    overview:
      "Dikerjakan sebagai project UKK dengan empat peran dalam satu sistem: customer memesan tiket, admin mengelola master data, staff menjalankan operasional bandara, dan manager memantau bisnis lewat dashboard.",
    challenge:
      "Alur maskapai melibatkan banyak pihak dan data yang saling terkait: harga per kelas, ketersediaan kursi yang berubah real-time, pembayaran online, promo berkuota, hingga status penumpang dari booked sampai boarding. Semuanya harus konsisten untuk setiap role.",
    process:
      "Merancang skema database (maskapai, bandara, pesawat, jadwal, kelas, kursi, booking, penumpang, pembayaran) → membangun alur customer dari pencarian sampai e-ticket → integrasi Midtrans & webhook → panel admin, staff, dan manager dengan middleware role → export laporan PDF/Excel dan PWA untuk HP.",
    solution:
      "Pencarian dengan filter maskapai, harga, dan jam; pemilihan kelas (Economy sampai First) dengan peta kursi interaktif; pembayaran Midtrans dengan verifikasi otomatis; e-ticket berisi gate dan jam boarding. Staff bisa check-in, boarding, dan check-out penumpang lewat manifest, sementara manager melihat revenue, okupansi, dan rute terlaris.",
    result:
      "Satu sistem yang menyatukan pengalaman pemesanan customer dengan operasional dan pelaporan internal: data booking, kursi, dan pembayaran tersinkron di semua role, dan bisa dipakai nyaman dari desktop maupun HP.",
    deliverablesLabel: "Features",
    deliverables: [
      "Flight search",
      "Class & seat map",
      "Midtrans payment",
      "E-ticket",
      "Promo & insurance",
      "Check-in & boarding",
      "Revenue dashboard",
      "PDF & Excel reports",
      "4 user roles",
      "Installable PWA",
    ],
    gallery: [
      { src: "/image/airline/d-home.jpg", caption: "Flight search" },
      { phones: ["/image/airline/m-home.jpg", "/image/airline/m-detail.jpg"], caption: "Mobile booking flow" },
      { src: "/image/airline/d-results.jpg", caption: "Results & filters" },
      { src: "/image/airline/d-detail.jpg", caption: "Class selection & summary" },
      { phones: ["/image/airline/m-seats.jpg", "/image/airline/m-eticket.jpg"], caption: "Seat map & e-ticket" },
      { src: "/image/airline/d-staff.jpg", caption: "Staff operations" },
      { src: "/image/airline/d-manager-charts.jpg", caption: "Manager dashboard" },
      { src: "/image/airline/d-admin.jpg", caption: "Admin master data" },
    ],
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
    image: "/image/catering/d-home.jpg",
    kicker: "Mamamia Lezat · Online Catering Order",
    tools: ["Laravel 13", "MySQL", "Tailwind CSS", "Alpine.js", "Laravel Breeze", "Sanctum API"],
    toolsLabel: "Stack",
    github: "https://github.com/artaaaz/catering-kali-ini-serius.git",
    description:
      "Aplikasi pemesanan catering online untuk Mamamia Lezat: pelanggan memilih paket, mengisi detail acara, dan mengunggah bukti bayar, lalu pesanan diproses admin, diantar kurir, dan dipantau owner.",
    overview:
      "Satu sistem dengan empat peran: pelanggan memesan dan memantau status, admin mengelola paket dan mengonfirmasi pesanan, kurir menjalankan pengiriman, dan owner melihat pendapatan serta paket terlaris.",
    challenge:
      "Pemesanan catering biasanya lewat chat: detail acara, jumlah porsi, alamat, dan bukti transfer tercecer di percakapan. Penjual sulit melacak pesanan mana yang sudah dibayar, sedang dimasak, atau sudah diantar.",
    process:
      "Merancang database (pelanggan, paket, jenis pembayaran, pemesanan, detail, pengiriman) → katalog paket dan alur pemesanan pelanggan → upload bukti bayar ke storage → panel admin, kurir, dan owner dengan redirect sesuai level user → API login & paket dengan Sanctum.",
    solution:
      "Katalog menampilkan paket per jenis (Prasmanan/Box) dan kategori acara. Form pesanan langsung menghitung total dari harga × pax, dan setiap pesanan mendapat nomor resi. Status bergerak dari Menunggu Konfirmasi → Diproses → Menunggu Kurir → Dikirim → Selesai, dan kurir mengunggah foto bukti tiba.",
    result:
      "Alur pesanan dari katalog sampai pengantaran tercatat di satu tempat: pelanggan bisa memantau status dan riwayat pesanannya, sementara admin, kurir, dan owner melihat data yang sama sesuai perannya.",
    deliverablesLabel: "Features",
    deliverables: [
      "Package catalog",
      "Online ordering",
      "Receipt number",
      "Payment proof",
      "Status tracking",
      "Package CRUD",
      "Courier tasks",
      "Revenue dashboard",
      "4 user roles",
    ],
    gallery: [
      { src: "/image/catering/d-home.jpg", caption: "Landing page" },
      { phones: ["/image/catering/m-home.jpg", "/image/catering/m-pakets.jpg"], caption: "Mobile site" },
      { src: "/image/catering/d-pakets.jpg", caption: "Package catalog" },
      { src: "/image/catering/d-order.jpg", caption: "Order & payment" },
      { phones: ["/image/catering/m-order.jpg", "/image/catering/m-riwayat.jpg"], caption: "Order on mobile" },
      { src: "/image/catering/d-riwayat.jpg", caption: "Order history" },
      { src: "/image/catering/d-admin-pemesanans.jpg", caption: "Admin orders" },
      { src: "/image/catering/d-kurir-pengiriman.jpg", caption: "Courier tasks" },
      { src: "/image/catering/d-owner-dashboard.jpg", caption: "Owner dashboard" },
    ],
  },
  {
    id: "sensor",
    color: "#14b8a6",
    type: "development",
    title: "Sensor Data CRUD",
    category: "Full-Stack Web Development",
    year: "2026",
    date: "June 2026",
    tags: ["full-stack", "laravel", "iot"],
    image: "/image/sensor/d-sensors.jpg",
    kicker: "IoT Monitor · Sensor & Device Management",
    tools: ["Laravel 13", "MySQL", "Eloquent ORM", "Tailwind CSS", "Laravel Breeze"],
    toolsLabel: "Stack",
    github: "https://github.com/artaaaz/sistem-crud-sensor-suhu.git",
    description:
      "Aplikasi web untuk mencatat dan mengelola sensor IoT: suhu, kelembapan, cahaya, dan gas, lengkap dengan device ESP32 tempat sensor terpasang, status online/offline, dan riwayat pembacaan.",
    overview:
      "Tahap pertama dari sistem IoT Monitor. Fokusnya membangun fondasi data: CRUD sensor dan device yang nantinya diisi otomatis oleh ESP32 dan ditampilkan di dashboard monitoring.",
    challenge:
      "Data sensor dari banyak titik (ruang server, gudang, outdoor) perlu disimpan rapi: sensor mana terpasang di device mana, nilainya berapa, kapan terakhir mengirim data, dan apakah masih online.",
    process:
      "Merancang tabel devices, sensors, dan sensor_logs beserta relasi dan index → migration bertahap (lokasi, tipe, status, last_seen) → model dengan relasi & scope (online, aktif) → CRUD sensor & device dengan validasi → halaman detail sensor dan device.",
    solution:
      "Daftar sensor menampilkan nilai terakhir, serial, topik MQTT, dan status dengan badge online/offline. Setiap sensor bisa dihubungkan ke device ESP32, dan halaman device menampilkan metadata (firmware, IP) serta sensor yang terhubung.",
    result:
      "Data sensor dan device tersusun dalam satu panel yang mudah dikelola, dan struktur database-nya siap menerima data real-time dari ESP32 untuk tahap IoT Dashboard.",
    deliverablesLabel: "Features",
    deliverables: [
      "Sensor CRUD",
      "Device management",
      "Sensor ↔ device link",
      "Online/offline status",
      "MQTT topic per sensor",
      "Sensor log table",
      "Form validation",
      "Login & register",
    ],
    gallery: [
      { src: "/image/sensor/d-sensors.jpg", caption: "Sensor list" },
      { src: "/image/sensor/d-sensors-create.jpg", caption: "Add sensor" },
      { src: "/image/sensor/d-sensors-1.jpg", caption: "Sensor detail" },
      { src: "/image/sensor/d-sensors-1-edit.jpg", caption: "Edit sensor" },
    ],
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
    image: "/image/iot/d-dashboard.jpg",
    kicker: "IoT Monitor · ESP32 + MQTT",
    tools: ["Laravel 13", "MQTT (Shiftr.io)", "php-mqtt/client", "ESP32 + DHT22 (Wokwi)", "Chart.js", "REST API"],
    toolsLabel: "Stack",
    github: "https://github.com/artaaaz/sistem-crud-sensor-suhu.git",
    description:
      "Dashboard monitoring IoT yang terhubung ke ESP32 lewat MQTT: menampilkan suhu dan kelembapan terbaru, mengontrol posisi motor servo, dan mengirim teks ke layar LCD langsung dari browser.",
    overview:
      "Lanjutan dari Sensor Data CRUD. Laravel dihubungkan ke broker MQTT Shiftr.io, sehingga web bisa menerima data dari ESP32 sekaligus mengirim perintah balik ke perangkat.",
    challenge:
      "Data dari perangkat harus masuk terus-menerus tanpa input manual, dan pengguna juga perlu mengendalikan perangkat dari jarak jauh. Web dan ESP32 harus berbicara dua arah dengan format yang sama.",
    process:
      "Merakit ESP32 + DHT22 + servo + LCD I2C di simulator Wokwi → firmware C++ (PubSubClient) yang publish suhu, kelembapan, dan heartbeat ke broker Shiftr.io → command artisan mqtt:listen untuk menyimpan data ke sensor_logs → endpoint API untuk telemetry & heartbeat ESP32 → publish perintah servo & LCD → dashboard yang refresh otomatis tiap 3 detik.",
    solution:
      "Subscriber Laravel mencatat setiap pesan sensor ke database dan memperbarui status device. Dashboard mengambil data terbaru lewat API, slider servo (0–180°) dan input LCD (maks. 16 karakter) mengirim perintah via MQTT, dan ESP32 juga bisa mengirim data lewat REST API.",
    result:
      "Perangkat IoT bisa dipantau dan dikendalikan dari browser: nilai sensor muncul tanpa reload, perintah servo dan teks LCD sampai ke ESP32, dan riwayat data tersimpan untuk dianalisis.",
    deliverablesLabel: "Features",
    deliverables: [
      "MQTT subscriber",
      "Live sensor tiles",
      "Auto refresh (3s)",
      "Servo control",
      "LCD text sender",
      "ESP32 telemetry API",
      "Device heartbeat",
      "ESP32 firmware (Wokwi)",
    ],
    gallery: [
      { src: "/image/iot/d-dashboard.jpg", caption: "Monitoring dashboard" },
      { src: "/image/iot/wokwi-sim.jpg", caption: "ESP32 simulation (Wokwi)" },
      { src: "/image/iot/d-dashboard-tiles.jpg", caption: "Sensor, servo & LCD" },
      { src: "/image/iot/wokwi-code.jpg", caption: "ESP32 firmware" },
      { src: "/image/iot/d-devices.jpg", caption: "ESP32 devices" },
      { src: "/image/iot/d-devices-1.jpg", caption: "Device detail" },
      { src: "/image/iot/d-login.jpg", caption: "Login" },
    ],
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
