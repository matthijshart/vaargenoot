/**
 * Alle beelden op de site. Vervang de bestanden in public/foto/tmp/
 * door de definitieve foto's in public/foto/ en pas hier het pad aan.
 * Zie TODO.md voor de shotlist.
 */
import hero from "@/public/foto/tmp/01-hero.jpg";
import sloepAmstel from "@/public/foto/tmp/02-sloep-amstel.jpg";
import sloepPrinsen from "@/public/foto/tmp/03-sloep-prinsen.jpg";
import schipper from "@/public/foto/tmp/04-schipper.jpg";
import detailKoelkast from "@/public/foto/tmp/05-detail-koelkast.jpg";
import detailLaadstekker from "@/public/foto/tmp/06-detail-laadstekker.jpg";
import zijgracht from "@/public/foto/tmp/07-zijgracht.jpg";

export const foto = {
  hero: {
    src: hero,
    alt: "Elektrische sloep bij de Magere Brug in het gouden uur, gasten aan tafel",
  },
  sloepAmstel: {
    src: sloepAmstel,
    alt: "Sloep Amstel, driekwart van voren, in de ochtend",
  },
  sloepPrinsen: {
    src: sloepPrinsen,
    alt: "Sloep Prinsen van bovenaf, ligdek vol kussens",
  },
  schipper: {
    src: schipper,
    alt: "Schipper aan het roer, gasten proosten in tegenlicht",
  },
  detailKoelkast: {
    src: detailKoelkast,
    alt: "Koelkast aan boord met ijs en flessen",
  },
  detailLaadstekker: {
    src: detailLaadstekker,
    alt: "Laadstekker aan de ligplaats in de avond",
  },
  zijgracht: {
    src: zijgracht,
    alt: "Sloep afgemeerd in een stille zijgracht, lantaarn aan",
  },
} as const;

export type FotoNaam = keyof typeof foto;
