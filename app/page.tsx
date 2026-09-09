import { Bedrijven } from "@/components/Bedrijven";
import { Aanmelden } from "@/components/Aanmelden";
import { Aandeel } from "@/components/Aandeel";
import { Ervaring } from "@/components/Ervaring";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Sloepen } from "@/components/Sloepen";
import { Verdelen } from "@/components/Verdelen";
import { Vragen } from "@/components/Vragen";
import { ZoWerktHet } from "@/components/ZoWerktHet";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <Ervaring />
        <Sloepen />
        <Aandeel />
        <Bedrijven />
        <ZoWerktHet />
        <Verdelen />
        <Vragen />
        <Aanmelden />
      </main>
      <Footer />
    </>
  );
}
