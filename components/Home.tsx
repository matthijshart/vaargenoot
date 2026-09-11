import { inhoud } from "@/content";
import type { Taal } from "@/lib/taal";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { KnopLink, PijlLink } from "./ui/Knop";
import { Kop } from "./ui/Kop";
import { Foto } from "./ui/Foto";
import { Lijst } from "./ui/Rijen";
import { Sectie } from "./ui/Sectie";

/** Blok: waarom bedrijven dit doen. Vier korte voordelen op hairlines. */
export function Waarom({ taal }: { taal: Taal }) {
  const t = inhoud(taal).home.waarom;
  return (
    <Sectie id="waarom" toon="room">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <dl className="divide-y divide-lijn border-y border-lijn">
            {t.items.map((i) => (
              <div key={i.kop} className="py-6">
                <dt className="text-[19px] font-semibold tracking-[-0.01em] md:text-[20px]">{i.kop}</dt>
                <dd className="mt-2 max-w-[46ch] leading-relaxed text-grijs">{i.tekst}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok 1: waar je hem voor gebruikt. Eén kolom tekst naast één beeld. */
export function VoorWie({ taal }: { taal: Taal }) {
  const { home, foto } = inhoud(taal);
  const t = home.voorWie;
  return (
    <Sectie id="voor-wie">
      <Container className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-6">
          <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
          <Lijst items={t.items} vinkjes className="mt-8" />
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Foto src={foto.greenEgg.src} alt={foto.greenEgg.alt} ratio="1 / 1" sizes="(min-width: 768px) 40vw, 100vw" className="rounded-kaart" />
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok: Amsterdam. De grachten dragen de pagina, één foto naast één kolom tekst. */
export function Amsterdam({ taal }: { taal: Taal }) {
  const { home, foto } = inhoud(taal);
  const t = home.amsterdam;
  return (
    <Sectie id="amsterdam" toon="room">
      <Container className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-6">
          <Foto src={foto.grachtBrug.src} alt={foto.grachtBrug.alt} ratio="4 / 3" sizes="(min-width: 768px) 50vw, 100vw" className="rounded-kaart" positie="50% 60%" />
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
          <Lijst items={t.items} vinkjes className="mt-8" />
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok 2: Duo of Solo. Kop links, de twee opties rechts, gescheiden door een hairline. */
export function DuoSolo({ taal }: { taal: Taal }) {
  const t = inhoud(taal).home.duoSolo;
  return (
    <Sectie id="duo-of-solo">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Kop boven={t.boven} kop={t.kop} />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="grid gap-10 border-t border-lijn sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-lijn">
            {t.kolommen.map((k, i) => (
              <div key={k.id} className={cn("pt-6 sm:pt-8", i > 0 && "sm:pl-10")}>
                <h3 className="kop text-[40px] md:text-[48px]">{k.naam}</h3>
                <p className="mt-4 leading-relaxed text-grijs">{k.tekst}</p>
                <p className="mt-8 text-[17px] font-medium">{k.vanaf}</p>
                <PijlLink href={k.href} className="mt-2">
                  {k.link}
                </PijlLink>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-grijs">{t.onder}</p>
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok 3: samen delen, in vier zinnen. */
export function Samen({ taal }: { taal: Taal }) {
  const t = inhoud(taal).home.samen;
  return (
    <Sectie id="samen" toon="room">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Kop boven={t.boven} kop={t.kop} />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-5 text-[18px] leading-relaxed md:text-[20px]">
            {t.zinnen.map((zin) => (
              <p key={zin}>{zin}</p>
            ))}
          </div>
          <PijlLink href={t.href} className="mt-6">
            {t.link}
          </PijlLink>
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok 4: alles inbegrepen, als rustige lijst in twee kolommen. */
export function Inbegrepen({ taal }: { taal: Taal }) {
  const t = inhoud(taal).home.inbegrepen;
  return (
    <Sectie id="inbegrepen">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
          <p className="mt-6 text-grijs">{t.extra}</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Lijst items={t.items} kolommen={2} vinkjes />
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok: wat het kost. Twee kolommen op hairlines, zonder kaders. Ook op de prijspagina. */
export function WatHetKost({ taal, id = "wat-het-kost" }: { taal: Taal; id?: string }) {
  const t = inhoud(taal).home.kosten;
  return (
    <Sectie id={id} toon="room">
      <Container>
        <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
        <div className="mt-12 grid border-t border-lijn md:mt-16 md:grid-cols-2 md:divide-x md:divide-lijn">
          {t.kolommen.map((k, i) => (
            <div key={k.naam} className={cn("border-b border-lijn py-7 md:border-b-0 md:py-8", i > 0 ? "md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14")}>
              <h3 className="kop text-[34px] md:text-[40px]">{k.naam}</h3>
              <p className="kop mt-4 text-[48px] tabular-nums md:text-[56px]">{k.prijs}</p>
              <p className="mt-1 text-[14px] text-grijs">
                {t.rijen[0].toLowerCase()}, {k.prijsKlein}
              </p>
              <dl className="mt-7 space-y-4 text-[15px]">
                {[
                  [t.rijen[1], k.looptijd],
                  [t.rijen[2], k.huisstijl],
                  [t.rijen[3], k.aanBoord],
                ].map(([label, waarde]) => (
                  <div key={label}>
                    <dt className="text-grijs">{label}</dt>
                    <dd className="mt-0.5">{waarde}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <PijlLink href={t.href} className="mt-8">
          {t.link}
        </PijlLink>
      </Container>
    </Sectie>
  );
}

/** Blok: zo makkelijk is het. Kop links, drie stappen rechts als rijen op hairlines. */
export function Stappen({ taal }: { taal: Taal }) {
  const t = inhoud(taal).home.stappen;
  return (
    <Sectie id="stappen">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Kop boven={t.boven} kop={t.kop} />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ol className="divide-y divide-lijn border-y border-lijn">
            {t.lijst.map((s, i) => (
              <li key={s.kop} className="grid gap-x-8 gap-y-2 py-7 sm:grid-cols-[4rem_1fr] md:py-8">
                <p className="kop text-[28px] text-grijs tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="kop text-[32px] md:text-[36px]">{s.kop}</h3>
                  <p className="mt-2 max-w-[44ch] leading-relaxed text-grijs">{s.tekst}</p>
                </div>
              </li>
            ))}
          </ol>
          <PijlLink href={t.href} className="mt-8">
            {t.link}
          </PijlLink>
        </div>
      </Container>
    </Sectie>
  );
}

/** Slot: één donkere band met de twee acties. Ook onderaan de andere pagina's. */
export function Slot({ taal }: { taal: Taal }) {
  const { home, cta } = inhoud(taal);
  return (
    <Sectie id="slot" toon="nacht">
      <Container>
        <h2 className="max-w-[16ch] text-[40px] text-wit md:text-[56px] lg:text-[64px]">{home.slot.kop}</h2>
        <p className="mt-5 max-w-[36rem] text-[18px] text-wit/75 md:text-[20px]">{home.slot.tekst}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-10">
          <KnopLink href={cta.proefvaren.href} variant="licht">
            {cta.proefvaren.label}
          </KnopLink>
          <PijlLink href={cta.reserveer.href} licht>
            {cta.reserveer.label}
          </PijlLink>
        </div>
      </Container>
    </Sectie>
  );
}
