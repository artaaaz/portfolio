import React from "react";
import { motion } from "framer-motion";

const MentionStory = () => {
  return (
    <section
      id="mention-story"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 py-20 md:py-28"
    >
      <div className="max-w-[1800px] mx-auto">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-[#1a1a1a]">
            WHY
            <br />
            MENTION?
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
            Mention dirancang untuk membuktikan bagaimana sebuah konsep solusi digital mampu menjawab permasalahan spesifik pengguna, 
            sekaligus menunjukkan alur pemikiran (design thinking) yang matang dalam kompetisi ini
          </p>
        </motion.div>


        {/* ================= WHY MENTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-10 mb-24 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            <div className="lg:col-span-4">
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#1a1a1a]">
                Every product starts
                <br />
                with a reason.
              </h2>

              <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Mention berawal dari kebutuhan untuk menciptakan sebuah
                pengalaman digital yang tidak hanya terlihat menarik,
                tetapi juga mampu menyampaikan informasi dengan cara yang
                sederhana, jelas, dan mudah dipahami.
              </p>
            </div>

          </div>
        </motion.div>


        {/* ================= THE PROBLEM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-10 mb-24 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            <div className="lg:col-span-5">

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
                What needed
                <br />
                to change?
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Proses awal perancangan Mention dilatarbelakangi oleh hambatan nyata di mana desainer sering menghabiskan 
                terlalu banyak waktu hanya untuk mengumpulkan referensi visual dan menyusun moodboard yang terfragmentasi di berbagai platform terpisah
              </p>
            </div>

          </div>
        </motion.div>


        {/* ================= THE IDEA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-10 mb-24 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* IMAGE */}
            <div className="">
              <img
                src="/image/M.png"
                alt="Mention UI"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXT */}
            <div>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Turning the idea
                <br />
                into an experience.
              </h2>

              <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
                Dari masalah tersebut, Mention dikembangkan sebagai sebuah
                pengalaman digital yang menggabungkan struktur informasi,
                visual identity, dan interaction design dalam satu sistem.
              </p>
            </div>

          </div>
        </motion.div>


        {/* ================= DESIGN APPROACH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-10 mb-24 md:mb-32"
        >
          

          <div className="border-t border-gray-200">

            {[
              ["01", "User Experience"],
              ["02", "Information Architecture"],
              ["03", "Visual Identity"],
              ["04", "Interaction Design"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="flex items-center justify-between py-6 md:py-8 border-b border-gray-200 group"
              >
                <span className="font-mono text-sm text-gray-400">
                  {number}
                </span>

                <h3 className="flex-1 ml-8 text-2xl md:text-5xl font-semibold tracking-tight group-hover:text-[#2147ff] transition-colors">
                  {title}
                </h3>

                <span className="text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                  ↗
                </span>
              </div>
            ))}

          </div>
        </motion.div>


        {/* ================= RESULT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 pt-10"
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/image/gelo2.png"
                alt="Mention achievement"
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <p className="text-[#2147ff] font-mono text-sm mb-4">
                
              </p>

              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
                3RD
                <br />
                PLACE
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                Awalnya hanya sekadar ide untuk merapikan workflow pencarian inspirasi yang berantakan, Mention berkembang menjadi sebuah prototipe sistem yang berhasil meraih Juara 3 Kompetisi UI/UX di Widyatama.
              </p>

              <a
                href="https://www.figma.com/design/enmGRrgy0bxLAxaQM1BtxF/MENTION?node-id=0-1&t=K5RRec6RvZv2iRW1-1"
                className="inline-flex mt-10 border border-black px-6 py-4 text-sm font-mono uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                View Figma ↗
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MentionStory;