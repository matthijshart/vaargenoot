import { teasers } from "@/content/teasers";
import { Container } from "./ui/Container";
import { KnopLink, TekstLink } from "./ui/Knop";
import { Sectie } from "./ui/Sectie";

/** Donkere prijsregel op de voorpagina, verwijst naar /prijzen. */
export function PrijsTeaser() {
  const t = teasers.prijs;
  return (
    <Sectie id="aandeel" donker className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-8">
          <p className="mb-3 text-[14px] font-medium text-lucht">{t.label}</p>
          <h2 className="text-[30px] text-wit sm:text-[40px] lg:text-[48px]">{t.kop}</h2>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-lucht sm:text-[17px]">{t.tekst}</p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <KnopLink href={t.href} variant="licht">
            {t.link}
          </KnopLink>
        </div>
      </Container>
    </Sectie>
  );
}

/** Twee korte verwijzingen naast elkaar: bedrijven en zo werkt het. */
export function VerwijsTeasers() {
  const items = [teasers.bedrijven, teasers.werkt];
  return (
    <Sectie id="meer" className="bg-wit py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-12">
        {items.map((t) => (
          <div key={t.href} className="border-t border-nevel pt-6">
            <p className="mb-2 text-[14px] font-medium text-gracht">{t.label}</p>
            <h2 className="text-[26px] text-nacht sm:text-[30px]">{t.kop}</h2>
            <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-zacht sm:text-[16px]">{t.tekst}</p>
            <TekstLink href={t.href} className="mt-3">
              {t.link}
            </TekstLink>
          </div>
        ))}
      </Container>
    </Sectie>
  );
}
