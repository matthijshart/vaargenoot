/**
 * Beelden op de site.
 * Ontbreekt beeld, dan een neutraal vlak met [INVULLEN] via components/ui/Vlak.tsx.
 */
import prinsen from "@/public/foto/prinsen.jpg";
import bovenaf from "@/public/foto/bovenaf.jpg";
import greenEgg from "@/public/foto/green-egg.jpg";
import grachtBrug from "@/public/foto/gracht-brug.jpg";
import grachtBloemen from "@/public/foto/gracht-bloemen.jpg";

export const foto = {
  prinsen: {
    src: prinsen,
    alt: "Sloep Prinsen met bimini, varend op het water",
  },
  bovenaf: {
    src: bovenaf,
    alt: "Sloep van bovenaf in de gracht, met een lange gedekte tafel en gasten",
  },
  greenEgg: {
    src: greenEgg,
    alt: "Twee Big Green Eggs en koelers met flessen op de tafel aan boord",
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
