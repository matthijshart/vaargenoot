/**
 * Alle beelden op de site. De huidige foto's komen uit twee bronfoto's in
 * foto-bron/ via scripts/foto-crops.mjs.
 * Zie TODO.md voor de shotlist van definitieve foto's.
 */
import hero from "@/public/foto/hero.jpg";
import sloepAmstel from "@/public/foto/amstel.jpg";
import sloepPrinsen from "@/public/foto/prinsen.jpg";
import schipper from "@/public/foto/schipper.jpg";
import detailKoelkast from "@/public/foto/detail-koelkast.jpg";
import detailTafel from "@/public/foto/detail-tafel.jpg";
import grachtBrug from "@/public/foto/gracht-brug.jpg";
import grachtBloemen from "@/public/foto/gracht-bloemen.jpg";
import greenEgg from "@/public/foto/green-egg.jpg";
import sloepBovenaf from "@/public/foto/sloep-bovenaf.jpg";

export const foto = {
  hero: {
    src: hero,
    alt: "Sloep van bovenaf in de gracht, gasten aan een lange tafel",
  },
  sloepAmstel: {
    src: sloepAmstel,
    alt: "Sloep Amstel van bovenaf, met tafel, kussens en schipper",
  },
  sloepPrinsen: {
    src: sloepPrinsen,
    alt: "Sloep Prinsen met bimini, varend in een brede vaart",
  },
  schipper: {
    src: schipper,
    alt: "Schipper aan het roer, met de ijsemmer naast zich",
  },
  detailKoelkast: {
    src: detailKoelkast,
    alt: "IJsemmer met flessen aan boord",
  },
  detailTafel: {
    src: detailTafel,
    alt: "De lange tafel aan boord, gedekt",
  },
  grachtBrug: {
    src: grachtBrug,
    alt: "Brug over een Amsterdamse gracht, met grachtenpanden en bomen",
  },
  greenEgg: {
    src: greenEgg,
    alt: "Twee Big Green Eggs en champagnekoelers aan boord van de sloep",
  },
  grachtBloemen: {
    src: grachtBloemen,
    alt: "Stille gracht met een brug, fietsen en bloemen langs de kade",
  },
  sloepBovenaf: {
    src: sloepBovenaf,
    alt: "De hele sloep van bovenaf",
  },
} as const;

export type FotoNaam = keyof typeof foto;
