import React from "react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "GITHUB",
    href: "https://github.com/artaaaz",
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/erlangga.artha/",
  },
  {
    label: "GMAIL",
    href: "mailto:erlangga.arthaa@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-white px-8 md:px-16 lg:px-24 pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16 border-t border-neutral-200 overflow-hidden font-sans"
    >
      <div className="max-w-[1800px] mx-auto flex flex-col justify-between min-h-[60vh]">
        {/* =================================================
            MAIN FOOTER CONTENT: TWO-COLUMN EDITORIAL
        ================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 md:mb-28">
          {/* Left Column: Massive Headline & Closing Note */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold tracking-tighter leading-[0.88] text-[#1a1a1a] uppercase select-none mb-8"            >
              Let's
              <br />
              Collaborate.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 max-w-xl"
            >
              <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#2147ff] font-semibold">
                Thank you for scrolling all the way down.
              </p>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-normal">
                If you have an idea, a project, or simply want to talk, feel free
                to reach out.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Links (Editorial List) & Download CV */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col"
            >
              {/* Primary Contact Links */}
              <div className="flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#1a1a1a] transition-all duration-300 hover:text-[#2147ff] hover:pl-2"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                    >
                      <path
                        d="M5 15L15 5M15 5H7.5M15 5V12.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Separated Secondary Action: DOWNLOAD CV */}
              <div className="pt-6 mt-6 border-t border-neutral-200">
                <a
                  href="/image/CV ARTHA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#1a1a1a] transition-all duration-300 hover:text-[#2147ff] hover:pl-2 border-b border-neutral-200"
                >
                  <span>DOWNLOAD CV</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                  >
                    <path
                      d="M5 15L15 5M15 5H7.5M15 5V12.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            BOTTOM META BAR
        ================================================= */}
        <div className="w-full pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs md:text-sm font-medium tracking-wider uppercase text-neutral-500">
          <span>TECH ENTHUSIAST</span>
          <span>© 2026 ARTHA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
