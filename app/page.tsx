import { Aanmelden } from "@/components/Aanmelden";
import { Ervaring } from "@/components/Ervaring";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Sloepen } from "@/components/Sloepen";
import { PrijsTeaser, VerwijsTeasers } from "@/components/Teasers";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <Ervaring />
        <Sloepen />
        <PrijsTeaser />
        <VerwijsTeasers />
        <Aanmelden />
      </main>
      <Footer />
    </>
  );
}
