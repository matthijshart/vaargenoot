import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1 pt-16">
        <div className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
          <h1 className="text-5xl text-nacht">Jouw sloep. Onze zorg.</h1>
          <p className="mt-6 maat text-lg text-zacht">
            De secties volgen in de volgende stappen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
