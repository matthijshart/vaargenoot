import { Bedrijven } from "@/components/Bedrijven";
import { Aanmelden } from "@/components/Aanmelden";
import { Aandeel } from "@/components/Aandeel";
import { Ervaring } from "@/components/Ervaring";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inbegrepen } from "@/components/Inbegrepen";
import { Inzicht } from "@/components/Inzicht";
import { Schipper } from "@/components/Schipper";
import { SloepLagen } from "@/components/SloepLagen";
import { Sloepen } from "@/components/Sloepen";
import { Vragen } from "@/components/Vragen";
import { ZoWerktHet } from "@/components/ZoWerktHet";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <Inzicht />
        <Ervaring />
        <Sloepen />
        <Aandeel />
        <Bedrijven />
        <ZoWerktHet />
        <SloepLagen />
        <Schipper />
        <Inbegrepen />
        <Vragen />
        <Aanmelden />
      </main>
      <Footer />
    </>
  );
}
