import { Aandeel } from "@/components/Aandeel";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inbegrepen } from "@/components/Inbegrepen";
import { Inzicht } from "@/components/Inzicht";
import { Schipper } from "@/components/Schipper";
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
        <ZoWerktHet />
        <Sloepen />
        <Aandeel />
        <Schipper />
        <Inbegrepen />
        <Vragen />
      </main>
      <Footer />
    </>
  );
}
