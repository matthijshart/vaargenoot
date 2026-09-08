/**
 * Alle beelden op de site. De huidige foto's zijn uitsnedes uit één
 * bronfoto (foto-bron/sloep-bovenaf.png) via scripts/foto-crops.mjs.
 * Zie TODO.md voor de shotlist van definitieve foto's.
 */
import hero from "@/public/foto/hero.jpg";
import sloepAmstel from "@/public/foto/amstel.jpg";
import sloepPrinsen from "@/public/foto/prinsen.jpg";
import schipper from "@/public/foto/schipper.jpg";
import detailKoelkast from "@/public/foto/detail-koelkast.jpg";
import detailTafel from "@/public/foto/detail-tafel.jpg";
import zijgracht from "@/public/foto/zijgracht.jpg";
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
    alt: "Achterdek van de sloep met de lange tafel",
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
  zijgracht: {
    src: zijgracht,
    alt: "Sloep in een stille gracht, gezien van bovenaf",
  },
  sloepBovenaf: {
    src: sloepBovenaf,
    alt: "De hele sloep van bovenaf",
  },
} as const;

export type FotoNaam = keyof typeof foto;
