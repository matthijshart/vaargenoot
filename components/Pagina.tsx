import type { ReactNode } from "react";
import { Aanmelden } from "./Aanmelden";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

/** Vaste omlijsting voor onderliggende pagina's: nav, inhoud, aanmelden, footer. */
export function Pagina({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1 pt-16">
        {children}
        <Aanmelden />
      </main>
      <Footer />
    </>
  );
}
