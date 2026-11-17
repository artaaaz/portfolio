// Utilitas warna tema project.
export function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Warna teks yang kontras di atas warna tema: hitam untuk warna terang
// (mis. kuning), putih untuk warna gelap (mis. merah, biru).
export function onColor(hex) {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.4 ? "#0e0f12" : "#ffffff";
}

// CSS variable untuk dipasang di elemen pembungkus halaman.
export function themeVars(hex) {
  if (!hex) return undefined;
  return {
    "--theme-rgb": hexToRgb(hex).join(" "),
    "--on-theme-rgb": hexToRgb(onColor(hex)).join(" "),
  };
}

