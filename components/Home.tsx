import { home } from "@/content/home";
import { cta } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { KnopLink, PijlLink } from "./ui/Knop";
import { Kop } from "./ui/Kop";
import { Lijst } from "./ui/Rijen";
import { Sectie } from "./ui/Sectie";

/** Blok 2: Duo of Solo, twee rustige kolommen. */
export function DuoSolo() {
  const t = home.duoSolo;
  return (
    <Sectie id="duo-of-solo">
      <Container>
        <Kop boven={t.boven} kop={t.kop} midden />
        <div className="mx-auto mt-14 grid max-w-[56rem] gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {t.kolommen.map((k) => (
            <div key={k.id} className="border-t border-lijn pt-6">
              <h3 className="text-[28px] md:text-[32px]">{k.naam}</h3>
              <p className="mt-4 leading-relaxed text-grijs">{k.tekst}</p>
              <p className="mt-6 text-[17px] font-medium">{k.vanaf}</p>
              <PijlLink href={k.href}>{k.link}</PijlLink>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-[56rem] text-[14px] text-grijs">{t.onder}</p>
      </Container>
    </Sectie>
  );
}

/** Blok 3: samen delen, in vier zinnen. */
export function Samen() {
  const t = home.samen;
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
export function Inbegrepen() {
  const t = home.inbegrepen;
  return (
    <Sectie id="inbegrepen">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Kop boven={t.boven} kop={t.kop} />
          <p className="mt-6 text-grijs">{t.extra}</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Lijst items={t.items} kolommen={2} />
        </div>
      </Container>
    </Sectie>
  );
}

/** Blok 5: leasen of delen, drie kolommen. Ook op de prijspagina. */
export function LeasenOfDelen({ id = "leasen-of-delen" }: { id?: string }) {
  const t = home.leasen;
  return (
    <Sectie id={id} toon="room">
      <Container>
        <Kop boven={t.boven} kop={t.kop} intro={t.intro} />
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {t.kolommen.map((k) => (
            <div
              key={k.naam}
              className={cn("rounded-kaart border p-6 md:p-7", k.wij ? "border-lijn bg-wit" : "border-lijn/80")}
            >
              <h3 className="text-[19px] font-medium tracking-normal">{k.naam}</h3>
              <p className="mt-5 text-[34px] font-semibold tracking-[-0.02em] tabular-nums">{k.prijs}</p>
              <p className="mt-1 text-[14px] text-grijs">
                {t.rijen[0].toLowerCase()}, {k.prijsKlein}
              </p>
              <dl className="mt-6 divide-y divide-lijn border-t border-lijn text-[15px]">
                {[
                  [t.rijen[1], k.looptijd],
                  [t.rijen[2], k.huisstijl],
                  [t.rijen[3], k.aanBoord],
                ].map(([label, waarde]) => (
                  <div key={label} className="py-3">
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

/** Blok: zo makkelijk is het, drie stappen naast elkaar. */
export function Stappen() {
  const t = home.stappen;
  return (
    <Sectie id="stappen">
      <Container>
        <Kop boven={t.boven} kop={t.kop} midden />
        <ol className="mx-auto mt-14 grid max-w-[56rem] gap-8 border-t border-lijn pt-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {t.lijst.map((s, i) => (
            <li key={s.kop}>
              <p className="text-[15px] text-grijs tabular-nums">{i + 1}</p>
              <h3 className="mt-2 text-[24px]">{s.kop}</h3>
              <p className="mt-2 leading-relaxed text-grijs">{s.tekst}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <PijlLink href={t.href}>{t.link}</PijlLink>
        </div>
      </Container>
    </Sectie>
  );
}

/** Slot: de twee acties nog een keer. Ook onderaan de andere pagina's. */
export function Slot({ kop = home.slot.kop, tekst = home.slot.tekst }: { kop?: string; tekst?: string }) {
  return (
    <Sectie id="slot" className="border-t border-lijn">
      <Container>
        <div className="mx-auto max-w-[40rem] text-center">
          <h2 className="text-[32px] md:text-[44px]">{kop}</h2>
          <p className="mt-5 text-[18px] text-grijs md:text-[20px]">{tekst}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <KnopLink href={cta.proefvaren.href}>{cta.proefvaren.label}</KnopLink>
            <PijlLink href={cta.reserveer.href}>{cta.reserveer.label}</PijlLink>
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
