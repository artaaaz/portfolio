"use client";

import { motion } from "framer-motion";

/**
 * TweetCard — inspired by Magic UI's tweet-card component.
 * Repurposed as a project highlight / testimonial card.
 *
 * Two modes:
 *   - "project"   : name, year, role, description, link
 *   - "testimonial": name, role, quote, avatar
 */
export function TweetCard({
  mode = "project",
  // Project mode
  projectName,
  year,
  role,
  description,
  link,
  // Testimonial mode
  clientName,
  clientRole,
  quote,
  avatarSrc,
  avatarAlt,
  // Styling
  className = "",
}) {
  if (mode === "testimonial") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`group relative bg-white border border-gray-200/80 rounded-2xl p-6 md:p-7 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 ${className}`}
      >
        {/* Quote */}
        <div className="mb-5">
          <svg className="w-6 h-6 text-brand-blue/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {quote}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          {avatarSrc && (
            <img
              src={avatarSrc}
              alt={avatarAlt || clientName}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
          )}
          <div>
            <p className="text-sm font-semibold text-gray-900">{clientName}</p>
            <p className="text-xs text-gray-500">{clientRole}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default: project mode
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative bg-white border border-gray-200/80 rounded-2xl p-6 md:p-7 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 ${className}`}
    >
      {/* Top row: project name + year */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight tracking-tight">
          {projectName}
        </h3>
        {year && (
          <span className="shrink-0 text-xs font-mono text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
            {year}
          </span>
        )}
      </div>

      {/* Role */}
      {role && (
        <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
          {role}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
      )}

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-brand-blue transition-colors group/link"
        >
          View Project
          <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}