/**
 * Maakt tijdelijke plaatshouders in public/foto/tmp/ in de juiste
 * beeldverhoudingen. Vervang ze door echte foto's (zie TODO.md).
 * Draaien: node scripts/plaatshouders.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const uit = "public/foto/tmp";
mkdirSync(uit, { recursive: true });

const shots = [
  { naam: "01-hero", w: 2400, h: 1200, boven: "#0b1f33", onder: "#1f4e79", horizon: 0.42 },
  { naam: "02-sloep-amstel", w: 1600, h: 1200, boven: "#a7c7e7", onder: "#1f4e79", horizon: 0.38 },
  { naam: "03-sloep-prinsen", w: 1600, h: 1200, boven: "#1f4e79", onder: "#0b1f33", horizon: 0.3 },
  { naam: "04-schipper", w: 1000, h: 1200, boven: "#dce6f0", onder: "#1f4e79", horizon: 0.5 },
  { naam: "05-detail-koelkast", w: 1200, h: 1200, boven: "#0b1f33", onder: "#1f4e79", horizon: 0.55 },
  { naam: "06-detail-laadstekker", w: 1200, h: 1200, boven: "#0f1b26", onder: "#0b1f33", horizon: 0.5 },
  { naam: "07-zijgracht", w: 1600, h: 1200, boven: "#0b1f33", onder: "#0f1b26", horizon: 0.45 },
];

function golven(w, h, vanaf) {
  let s = "";
  const n = 14;
  for (let i = 0; i < n; i++) {
    const y = vanaf + ((h - vanaf) / n) * i + 8;
    const amp = 3 + i * 0.6;
    const lengte = 180 + i * 20;
    let d = `M 0 ${y}`;
    for (let x = 0; x <= w; x += lengte / 2) {
      const cy = y + (Math.floor(x / (lengte / 2)) % 2 === 0 ? -amp : amp);
      d += ` Q ${x + lengte / 4} ${cy} ${x + lengte / 2} ${y}`;
    }
    s += `<path d="${d}" fill="none" stroke="#ffffff" stroke-opacity="${0.05 + i * 0.006}" stroke-width="1.2"/>`;
  }
  return s;
}

for (const s of shots) {
  const hy = Math.round(s.h * s.horizon);
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${s.w}" height="${s.h}" viewBox="0 0 ${s.w} ${s.h}">
    <defs>
      <linearGradient id="lucht" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${s.boven}"/>
        <stop offset="1" stop-color="${s.onder}" stop-opacity="0.85"/>
      </linearGradient>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${s.onder}"/>
        <stop offset="1" stop-color="#0f1b26"/>
      </linearGradient>
      <radialGradient id="glans" cx="0.5" cy="${s.horizon}" r="0.6">
        <stop offset="0" stop-color="#c9a26b" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#c9a26b" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${s.w}" height="${hy}" fill="url(#lucht)"/>
    <rect y="${hy}" width="${s.w}" height="${s.h - hy}" fill="url(#water)"/>
    <rect width="${s.w}" height="${s.h}" fill="url(#glans)"/>
    ${golven(s.w, s.h, hy)}
    <line x1="0" y1="${hy}" x2="${s.w}" y2="${hy}" stroke="#c9a26b" stroke-opacity="0.5" stroke-width="1"/>
  </svg>`;
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${uit}/${s.naam}.jpg`);
  console.log("ok", s.naam);
}
