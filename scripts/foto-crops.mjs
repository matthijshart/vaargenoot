/**
 * Maakt uit de bronfoto's in foto-bron/ de beelden in public/foto/.
 * Draaien: node scripts/foto-crops.mjs
 * Alleen beelden zonder mensen die in de camera kijken (zie de ontwerpbrief).
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const uit = "public/foto";
mkdirSync(uit, { recursive: true });

// Prinsen op het water, zijaanzicht, 768 x 576. Lage resolutie: zie TODO.md.
await sharp("foto-bron/sloep-zijaanzicht.webp").jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/prinsen.jpg`);
console.log("ok prinsen 768x576");

// Grachten, twee staande foto's, uitgesneden op 4:3 en 1:1.
await sharp("foto-bron/gracht-brug.jpeg").extract({ left: 0, top: 400, width: 736, height: 552 }).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/gracht-brug.jpg`);
console.log("ok gracht-brug 736x552");
await sharp("foto-bron/gracht-bloemen.jpeg").extract({ left: 0, top: 400, width: 736, height: 736 }).jpeg({ quality: 84, mozjpeg: true }).toFile(`${uit}/gracht-bloemen.jpg`);
console.log("ok gracht-bloemen 736x736");
