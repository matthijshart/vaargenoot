import { Hero } from "@/components/Hero";
import { Amsterdam, DuoSolo, Inbegrepen, LeasenOfDelen, Samen, Slot, Stappen, VoorWie } from "@/components/Home";
import { home } from "@/content/home";

export default function Voorpagina() {
  return (
    <>
      <Hero kop={home.hero.kop} sub={home.hero.sub} />
      <VoorWie />
      <Amsterdam />
      <DuoSolo />
      <Samen />
      <Stappen />
      <Inbegrepen />
      <LeasenOfDelen />
      <Slot />
    </>
  );
}
