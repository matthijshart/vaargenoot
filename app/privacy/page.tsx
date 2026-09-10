import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Kop } from "@/components/ui/Kop";
import { Tekst } from "@/components/ui/Tekst";
import { privacy } from "@/content/over";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Wat Sloepmaten doet met de gegevens uit het reserverings- en proefvaartformulier. Geen cookies, geen tracking.",
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <Container className="pt-32 pb-24 md:pt-44 md:pb-40">
      <Kop niveau={1} kop={privacy.kop} intro={privacy.intro} />
      <div className="mt-14 max-w-[44rem] divide-y divide-lijn border-y border-lijn md:mt-20">
        {privacy.blokken.map((b) => (
          <div key={b.kop} className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <h2 className="text-[18px] font-semibold tracking-[-0.01em]">{b.kop}</h2>
            <p className="leading-relaxed text-grijs">
              <Tekst>{b.tekst}</Tekst>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
