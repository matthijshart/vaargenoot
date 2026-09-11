import { inhoud } from "@/content";
import type { Taal } from "@/lib/taal";
import { Container } from "./ui/Container";
import { Diashow } from "./Diashow";
import { KnopLink } from "./ui/Knop";
import { Vinkje } from "./ui/Rijen";

/**
 * Hero: label in monospace, een grote kop links, rechts de korte uitleg met
 * twee pilknoppen. Daaronder de sloep in één breed afgerond kader, als
 * rustige diavoorstelling. Tekst staat nooit op een foto.
 */
export function Hero({ taal }: { taal: Taal }) {
  const { home, cta, foto, ui } = inhoud(taal);
  const { boven, kop, sub, punten } = home.hero;
  const regels = kop.split("\n");
  const beelden = [
    { src: foto.prinsen.src, alt: foto.prinsen.alt, positie: "50% 55%" },
    { src: foto.bovenaf.src, alt: foto.bovenaf.alt, positie: "50% 45%" },
    { src: foto.greenEgg.src, alt: foto.greenEgg.alt, positie: "50% 60%" },
  ].map((b, i, alle) => ({ ...b, knop: ui.foto(i + 1, alle.length) }));

  return (
    <section className="pt-28 md:pt-36">
      <Container>
        <p className="label text-grijs">{boven}</p>
        <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <h1 className="text-[48px] md:col-span-8 md:text-[80px] lg:text-[104px]">
            {regels.map((regel, i) => (
              <span key={regel} className={i > 0 ? "block" : undefined}>
                {regel.split(/(\*[^*]+\*)/).map((deel, j) =>
                  deel.startsWith("*") ? <em key={j}>{deel.slice(1, -1)}</em> : <span key={j}>{deel}</span>,
                )}
              </span>
            ))}
          </h1>
          <div className="md:col-span-4 md:pb-2">
            <p className="max-w-[30rem] text-[17px] leading-relaxed text-grijs md:text-[18px]">{sub}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <KnopLink href={cta.proefvaren.href}>{cta.proefvaren.label}</KnopLink>
              <KnopLink href={cta.reserveer.href} variant="licht">
                {cta.reserveer.label}
              </KnopLink>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-grijs">
              {punten.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <Vinkje className="h-3.5 w-3.5 text-antraciet" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="mx-auto mt-12 max-w-[1360px] px-3 md:mt-16 md:px-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-kaart bg-room sm:aspect-[16/10] md:aspect-[21/9]">
          <Diashow beelden={beelden} label={ui.fotos} />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-antraciet/10 ring-inset" />
        </div>
      </div>
    </section>
  );
}
