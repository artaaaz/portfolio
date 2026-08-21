"use client";

import { cn } from "../../lib/utils";

export function Dock({
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "flex items-end gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-2xl",
        "bg-white/5 backdrop-blur-lg border border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DockIcon({
  className,
  children,
  href,
  label,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center",
        "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
        "bg-white/10 hover:bg-brand-blue/20",
        "text-white/70 hover:text-brand-blue",
        "transition-all duration-300 hover:scale-110",
        "border border-transparent hover:border-brand-blue/30",
        className
      )}
    >
      {children}
    </a>
  );
}