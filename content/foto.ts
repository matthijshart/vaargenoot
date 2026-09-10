/**
 * Beelden op de site. Alleen rustige composities: de sloep en het water.
 * Ontbreekt beeld, dan een neutraal vlak met [INVULLEN] via components/ui/Vlak.tsx.
 */
import prinsen from "@/public/foto/prinsen.jpg";
import grachtBrug from "@/public/foto/gracht-brug.jpg";
import grachtBloemen from "@/public/foto/gracht-bloemen.jpg";

export const foto = {
  prinsen: {
    src: prinsen,
    alt: "Sloep Prinsen met bimini, varend op het water",
  },
  grachtBrug: {
    src: grachtBrug,
    alt: "Brug over een Amsterdamse gracht, met grachtenpanden en bomen",
  },
  grachtBloemen: {
    src: grachtBloemen,
    alt: "Stille gracht met een brug, fietsen en bloemen langs de kade",
  },
} as const;
