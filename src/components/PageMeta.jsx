import React from "react";

const PageMeta = ({ light = false, className = "" }) => {
  return (
    <div
      className={`w-full flex justify-between items-center text-xs md:text-sm tracking-wider uppercase font-medium select-none font-sans ${
        light ? "text-neutral-400" : "text-neutral-600"
      } ${className}`}
    >
      <span>TECH ENTHUSIAST</span>
      <span>09 FEB 2026</span>
    </div>
  );
};

export default PageMeta;
