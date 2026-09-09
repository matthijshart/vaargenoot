/**
 * Snijdt uit één bronfoto (foto-bron/sloep-bovenaf.png, 1194 x 1212) de
 * beelden voor de site, in de juiste verhoudingen. Draaien:
 * node scripts/foto-crops.mjs
 * Komt er een betere of hogere-resolutie bron, pas dan hier de kaders aan.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const bron = "foto-bron/sloep-bovenaf.png";
/** Tweede bron: zijaanzicht met bimini, 768 x 576. */
const bronZij = "foto-bron/sloep-zijaanzicht.webp";
const uit = "public/foto";
mkdirSync(uit, { recursive: true });

// left, top, width, height in pixels van de bron.
const kaders = {
  "hero": { left: 0, top: 380, width: 1194, height: 597 }, // 2:1, tafel en gasten
  "amstel": { left: 100, top: 330, width: 1094, height: 820 }, // 4:3, hele sloep
  "schipper": { left: 150, top: 330, width: 420, height: 504 }, // 5:6, roer en ijsemmer
  "detail-koelkast": { left: 260, top: 440, width: 380, height: 380 }, // 1:1, ijsemmer
  "detail-tafel": { left: 520, top: 600, width: 480, height: 480 }, // 1:1, tafel
  "sloep-bovenaf": { left: 0, top: 9, width: 1194, height: 1194 }, // 1:1, alles
};

// Grachten: twee staande foto's, uitgesneden op 4:3 en 1:1.
await sharp("foto-bron/gracht-brug.jpeg").extract({ left: 0, top: 400, width: 736, height: 552 }).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/gracht-brug.jpg`);
console.log("ok gracht-brug 736x552");
await sharp("foto-bron/gracht-bloemen.jpeg").extract({ left: 0, top: 400, width: 736, height: 736 }).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/gracht-bloemen.jpg`);
console.log("ok gracht-bloemen 736x736");

// Prinsen: het zijaanzicht, al 4:3.
await sharp(bronZij).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/prinsen.jpg`);
console.log("ok prinsen 768x576");

for (const [naam, k] of Object.entries(kaders)) {
  await sharp(bron).extract(k).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/${naam}.jpg`);
  console.log("ok", naam, `${k.width}x${k.height}`);
}
