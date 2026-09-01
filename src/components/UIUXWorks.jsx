import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const uiuxProjects = [
  {
    id: "01",
    title: "BMPS Bogor",
    subtitle: "Badan Musyawarah Perguruan Swasta",
    category: "UI / UX DESIGN",
    year: "2026",
    date: "2026",
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
    github: "https://www.figma.com/design/1mbMyVTcBIi01G7pfpQBXF/BMPS-ASOY?node-id=483-1008&t=KdRrUQbelbVvQZUb-1",
  },
  {
    id: "02",
    title: "SPMB",
    subtitle: "Sistem Penerimaan Murid Baru",
    category: "UI / UX DESIGN",
    year: "2025",
    date: "2025",
    image: "/image/DB.png",
    tools: ["Figma", "User Flow", "Wireframe", "UI Design", "Responsiv Design"],
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
    github: "https://www.figma.com/design/pkcwPccBYX4aY38ICOQWSa/Untitled?node-id=0-1&t=mVmv8niKC9yyvdFc-1",
  },
];

const UIUXWorks = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="uiux-works"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* =================================================
            SECTION HEADER: EDITORIAL HIERARCHY
        ================================================= */}
        <div className="border-b border-neutral-200 pb-12 md:pb-16 mb-16 md:mb-24">
          {/* Category Tag & Index */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >

          </motion.div>

          {/* Editorial Display Heading & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.9] text-[#1a1a1a] uppercase select-none">
                Designing
                <br />
                Digital
                <br />
                Experiences.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-4"
            >
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-normal">
                Selected interface and user experience projects focused on
                clarity, usability, visual systems, and interaction.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            LARGE EDITORIAL PROJECT CARDS (2 PROJECTS)
        ================================================= */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {uiuxProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View Case Study: ${project.title}`}
              className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2147ff] rounded-2xl"
            >
              {/* Card Container */}
              <div className="w-full flex flex-col gap-6 md:gap-8">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a]">

                    </span>
                    <span className="text-neutral-300">/</span>
                    <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-500">
                      {project.title}
                    </span>
                  </div>

                  <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400">
                    {project.year}
                  </span>
                </div>

                {/* Large UI Preview Frame */}
                <div className="relative w-full aspect-[16/9] md:aspect-[16/9] lg:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 transition-all duration-500 group-hover:border-neutral-400 group-hover:shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} - UI/UX Design Interface Preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback visual if image path is adjusted
                      e.target.style.display = "none";
                      const parent = e.target.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = index === 0 ? "#eef2ff" : "#f5f5f5";
                      }
                    }}
                  />

                  {/* Subtle Inner Border Overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl md:rounded-2xl ring-1 ring-inset ring-black/5" />
                </div>

                {/* Card Information & Metadata */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-2">
                  {/* Left: Project Title & Category */}
                  <div className="lg:col-span-5">
                    <span className="inline-block font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#2147ff] font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-[#2147ff]">
                      {project.title}
                    </h3>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA Link */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <span className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-[#1a1a1a] transition-all duration-300 group-hover:text-[#2147ff] group-hover:gap-3">
                      <span>VIEW CASE STUDY</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path
                          d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =================================================
          PROJECT DETAIL MODAL
      ================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default UIUXWorks;
