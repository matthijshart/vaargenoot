import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
