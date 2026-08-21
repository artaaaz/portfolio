import React, { useState } from "react";
import { Dock, DockIcon } from "./ui/dock";
import { Confetti } from "./ui/confetti";
import { Mail, FileText } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FooterSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <footer className="relative w-full bg-black overflow-hidden">
      <Confetti trigger={showConfetti} />

      {/* Top section: Big typography */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-24 sm:pt-32 pb-16">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-white/30">
            End of the line
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tight">
            THANK YOU
            <br />
            <span className="text-brand-blue">FOR SCROLLING</span>
            <br />
            THIS FAR.
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* Bottom section: CTA + Dock */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* CTA Button */}
          <div>
            <button
              onClick={handleConfetti}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">LET'S CONNECT</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <p className="text-xs text-white/30 mt-3 tracking-wide">
              Click for a little surprise ✨
            </p>
          </div>

          {/* Dock */}
          <Dock>
            <DockIcon
              href="https://github.com/artaaaz"
              label="GitHub"
            >
              <GithubIcon />
            </DockIcon>
            <DockIcon
              href="https://linkedin.com/in/artaaaz"
              label="LinkedIn"
            >
              <LinkedinIcon />
            </DockIcon>
            <DockIcon
              href="mailto:hello@arthaaz.com"
              label="Email"
            >
              <Mail className="w-5 h-5" />
            </DockIcon>
            <DockIcon
              href="/resume.pdf"
              label="CV"
            >
              <FileText className="w-5 h-5" />
            </DockIcon>
          </Dock>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/20 tracking-wide">
            © {new Date().getFullYear()} Artha Az. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-wide">
            Designed & built with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;