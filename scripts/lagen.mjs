/**
 * Maakt tijdelijke lagen van de sloep, van bovenaf, als transparante PNG's
 * in public/foto/lagen/tmp/. Zelfde kader per laag, zodat ze stapelen.
 * Vervang ze door echte lagen (zie TODO.md). Draaien: node scripts/lagen.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const uit = "public/foto/lagen/tmp";
mkdirSync(uit, { recursive: true });

const W = 1200;
const H = 1600;

// Romp van bovenaf: punt boven, ronde spiegel onder.
const romp =
  "M600,70 C790,250 985,600 985,1000 C985,1360 830,1540 600,1540 C370,1540 215,1360 215,1000 C215,600 410,250 600,70 Z";
const binnen =
  "M600,150 C760,320 925,620 925,1000 C925,1320 790,1480 600,1480 C410,1480 275,1320 275,1000 C275,620 440,320 600,150 Z";
const dek =
  "M600,210 C735,370 880,640 880,1000 C880,1290 760,1430 600,1430 C440,1430 320,1290 320,1000 C320,640 465,370 600,210 Z";

const kop = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
const staart = `</svg>`;

function planken() {
  let s = "";
  for (let x = 340; x <= 860; x += 26) {
    s += `<line x1="${x}" y1="200" x2="${x}" y2="1440" stroke="#0b1f33" stroke-opacity="0.35" stroke-width="2"/>`;
  }
  return `<g clip-path="url(#dek)">${s}</g>`;
}

function kussen(x, y, w, h, r = 26) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#f4f7fa" stroke="#dce6f0" stroke-width="3"/>
  <rect x="${x + 14}" y="${y + 14}" width="${w - 28}" height="${h - 28}" rx="${Math.max(6, r - 12)}" fill="none" stroke="#dce6f0" stroke-width="2"/>`;
}

const lagen = {
  "01-romp": `
    <path d="${romp}" fill="#132a45" stroke="#a7c7e7" stroke-width="4"/>
    <path d="${binnen}" fill="#0b1f33" stroke="#a7c7e7" stroke-opacity="0.6" stroke-width="2"/>
    <line x1="600" y1="70" x2="600" y2="150" stroke="#a7c7e7" stroke-width="3"/>`,
  "02-ligdek": `
    <defs><clipPath id="dek"><path d="${dek}"/></clipPath></defs>
    <path d="${dek}" fill="#c9a26b" fill-opacity="0.55" stroke="#c9a26b" stroke-width="3"/>
    ${planken()}
    <rect x="360" y="1080" width="480" height="300" rx="40" fill="#c9a26b" fill-opacity="0.35" stroke="#c9a26b" stroke-width="2"/>`,
  "03-kussens": `
    ${kussen(330, 560, 90, 440, 30)}
    ${kussen(780, 560, 90, 440, 30)}
    ${kussen(370, 1090, 460, 280, 44)}
    ${kussen(470, 330, 260, 90, 30)}`,
  "04-tafel": `
    <rect x="455" y="600" width="290" height="380" rx="36" fill="#ffffff" stroke="#dce6f0" stroke-width="4"/>
    <rect x="480" y="625" width="240" height="330" rx="24" fill="none" stroke="#dce6f0" stroke-width="2"/>
    <line x1="600" y1="625" x2="600" y2="955" stroke="#dce6f0" stroke-width="2"/>`,
  "05-geluid-koelkast": `
    <circle cx="420" cy="470" r="34" fill="#0b1f33" stroke="#c9a26b" stroke-width="4"/>
    <circle cx="420" cy="470" r="14" fill="#c9a26b"/>
    <circle cx="780" cy="470" r="34" fill="#0b1f33" stroke="#c9a26b" stroke-width="4"/>
    <circle cx="780" cy="470" r="14" fill="#c9a26b"/>
    <rect x="525" y="215" width="150" height="100" rx="18" fill="#f4f7fa" stroke="#c9a26b" stroke-width="4"/>
    <line x1="525" y1="265" x2="675" y2="265" stroke="#c9a26b" stroke-width="3"/>`,
  "06-bimini": `
    <rect x="300" y="520" width="600" height="560" rx="120" fill="#a7c7e7" fill-opacity="0.28" stroke="#a7c7e7" stroke-width="4"/>
    <line x1="300" y1="800" x2="900" y2="800" stroke="#a7c7e7" stroke-width="3"/>
    <line x1="600" y1="520" x2="600" y2="1080" stroke="#a7c7e7" stroke-opacity="0.6" stroke-width="2"/>`,
};

for (const [naam, inhoud] of Object.entries(lagen)) {
  await sharp(Buffer.from(kop + inhoud + staart)).png({ compressionLevel: 9 }).toFile(`${uit}/${naam}.png`);
  console.log("ok", naam);
}
