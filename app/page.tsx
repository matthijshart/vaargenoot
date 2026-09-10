import { Hero } from "@/components/Hero";
import { DuoSolo, Garantie, Inbegrepen, LeasenOfDelen, Slot, Wie, ZoKopen } from "@/components/Home";
import { home } from "@/content/home";

export default function Voorpagina() {
  return (
    <>
      <Hero kop={home.hero.kop} sub={home.hero.sub} beeldNoot={home.hero.beeld} />
      <DuoSolo />
      <Garantie />
      <Inbegrepen />
      <LeasenOfDelen />
      <ZoKopen />
      <Wie />
      <Slot />
    </>
  );
}
