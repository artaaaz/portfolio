/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#eceef4",
        ink: "#0e0f12",
        accent: "#2147ff",
        muted: "#6b6f7b",
        // Warna tema: biru di halaman biasa, warna project di halaman project.
        theme: "rgb(var(--theme-rgb) / <alpha-value>)",
        "on-theme": "rgb(var(--on-theme-rgb) / <alpha-value>)",
        // warna lama, dipakai komponen yang belum diganti
        "custom-red": "#831514",
        "brand-blue": "#2147ff",
      },
      fontFamily: {
        sans: ["Inter Tight", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
