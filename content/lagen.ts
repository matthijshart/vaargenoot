import type { StaticImageData } from "next/image";
import romp from "@/public/foto/lagen/tmp/01-romp.png";
import ligdek from "@/public/foto/lagen/tmp/02-ligdek.png";
import kussens from "@/public/foto/lagen/tmp/03-kussens.png";
import tafel from "@/public/foto/lagen/tmp/04-tafel.png";
import geluid from "@/public/foto/lagen/tmp/05-geluid-koelkast.png";
import bimini from "@/public/foto/lagen/tmp/06-bimini.png";

export type Laag = {
  id: string;
  kop: string;
  tekst: string;
  beeld: StaticImageData;
  alt: string;
};

/**
 * De sloep in lagen, van bovenaf. Elke laag is een transparante PNG in
 * hetzelfde kader, zodat ze precies op elkaar stapelen. De volgorde hier is
 * de volgorde van opbouw bij het scrollen. Zie TODO.md voor echte lagen.
 */
export const lagen = {
  label: "De sloep",
  kop: "Zo is de Amstel opgebouwd.",
  intro: "Scroll en zie laag voor laag wat er aan boord is.",
  slot: "Alles zit erop en eraan. Jij stapt aan boord.",
  lijst: [
    {
      id: "romp",
      kop: "Romp",
      tekst: "7,5 meter, elektrisch en stil.",
      beeld: romp,
      alt: "Romp van de sloep, van bovenaf",
    },
    {
      id: "ligdek",
      kop: "Ligdek",
      tekst: "Achterin, om te liggen in de zon.",
      beeld: ligdek,
      alt: "Ligdek en vloer van de sloep",
    },
    {
      id: "kussens",
      kop: "Kussens",
      tekst: "Op elke bank en op het ligdek.",
      beeld: kussens,
      alt: "Kussens op de banken en het ligdek",
    },
    {
      id: "tafel",
      kop: "Grote tafel",
      tekst: "In het midden, met plek voor 10 personen eromheen.",
      beeld: tafel,
      alt: "Grote tafel in het midden van de sloep",
    },
    {
      id: "geluid",
      kop: "Geluid en koelkast",
      tekst: "Speakers aan boord en een koelkast met ijs.",
      beeld: geluid,
      alt: "Speakers en koelkast aan boord",
    },
    {
      id: "bimini",
      kop: "Bimini",
      tekst: "Schaduw als de zon te fel wordt.",
      beeld: bimini,
      alt: "Bimini boven de sloep",
    },
  ] satisfies Laag[],
};
