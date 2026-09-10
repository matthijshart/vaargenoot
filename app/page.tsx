import { Hero } from "@/components/Hero";
import { DuoSolo, Inbegrepen, LeasenOfDelen, Samen, Slot, Stappen, VoorWie } from "@/components/Home";
import { home } from "@/content/home";

export default function Voorpagina() {
  return (
    <>
      <Hero kop={home.hero.kop} sub={home.hero.sub} />
      <VoorWie />
      <DuoSolo />
      <Samen />
      <Stappen />
      <Inbegrepen />
      <LeasenOfDelen />
      <Slot />
    </>
  );
}
