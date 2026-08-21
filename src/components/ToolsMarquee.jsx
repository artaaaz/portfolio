import React from "react";
import Marquee from "./ui/marquee";

const tools = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🌊" },
  { name: "GSAP", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "Linux", icon: "🐧" },
  { name: "Laravel", icon: "⚡" },
  { name: "Figma", icon: "🖌️" },
  { name: "Photoshop", icon: "🎨" },
  { name: "Illustrator", icon: "✏️" },
];

const ToolCard = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap">
      <span className="text-base sm:text-lg">{icon}</span>
      <span className="text-sm sm:text-base font-medium text-white/90">{name}</span>
    </div>
  );
};

const ToolsMarquee = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
          tools &<br />
          <span className="text-brand-blue">technologies</span>
        </h2>
        <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
      </div>

      <div className="relative">
        <Marquee pauseOnHover direction="left" className="[--duration:30s]">
          {tools.map((tool, idx) => (
            <ToolCard key={idx} {...tool} />
          ))}
        </Marquee>

        <div className="mt-4">
          <Marquee pauseOnHover direction="right" className="[--duration:35s]">
            {[...tools].reverse().map((tool, idx) => (
              <ToolCard key={idx} {...tool} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default ToolsMarquee;