import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inzicht } from "@/components/Inzicht";
import { Sloepen } from "@/components/Sloepen";
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
      </main>
      <Footer />
    </>
  );
}
