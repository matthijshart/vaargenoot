import { foto } from "@/content/foto";
import { teasers } from "@/content/teasers";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
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

/** Bedrijven prominent op de voorpagina: foto, kop, drie regels, knop. */
export function BedrijvenTeaser() {
  const t = teasers.bedrijven;
  return (
    <Sectie id="voor-bedrijven" className="bg-wit">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <Foto
            src={foto.grachtBloemen.src}
            alt={foto.grachtBloemen.alt}
            ratio="1 / 1"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="group rounded-2xl"
            fotoClassName="transition-transform duration-700 ease-zacht md:group-hover:scale-[1.04]"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="mb-4 text-[14px] font-medium text-gracht">{t.label}</p>
          <h2 className="text-[34px] text-nacht sm:text-[44px] lg:text-[52px]">{t.kop}</h2>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-zacht sm:text-[19px]">{t.tekst}</p>
          <ul className="mt-6 divide-y divide-nevel border-y border-nevel text-[15px] text-inkt">
            {t.punten.map((p) => (
              <li key={p} className="flex items-center gap-3 py-3">
                <span aria-hidden className="h-px w-4 shrink-0 bg-messing" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <KnopLink href={t.href}>{t.link}</KnopLink>
          </div>
        </div>
      </Container>
    </Sectie>
  );
}

/** Twee korte verwijzingen naast elkaar: zo werkt het en vragen. */
export function VerwijsTeasers() {
  const items = [teasers.werkt, teasers.vragen];
  return (
    <Sectie id="meer" className="bg-wit py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-12">
        {items.map((t) => (
          <div key={t.href} className="group border-t border-nevel pt-6 transition-colors duration-300 md:hover:border-gracht">
            <p className="mb-2 text-[14px] font-medium text-gracht">{t.label}</p>
            <h2 className="text-[26px] text-nacht sm:text-[28px]">{t.kop}</h2>
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
