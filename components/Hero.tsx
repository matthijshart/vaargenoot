import { inhoud } from "@/content";
import type { Taal } from "@/lib/taal";
import { Container } from "./ui/Container";
import { Diashow } from "./Diashow";
import { KnopLink, PijlLink } from "./ui/Knop";
import { Vinkje } from "./ui/Rijen";

/**
 * Hero: de kop links op wit, de sloep rechts in een hoog kader als rustige
 * diavoorstelling. Tekst staat nooit op een foto, dus altijd leesbaar.
 */
export function Hero({ taal }: { taal: Taal }) {
  const { home, cta, foto, ui } = inhoud(taal);
  const { boven, kop, sub, punten } = home.hero;
  const regels = kop.split("\n");
  const beelden = [
    { src: foto.prinsen.src, alt: foto.prinsen.alt, positie: "50% 50%" },
    { src: foto.bovenaf.src, alt: foto.bovenaf.alt, positie: "50% 45%" },
    { src: foto.greenEgg.src, alt: foto.greenEgg.alt, positie: "50% 55%" },
  ].map((b, i, alle) => ({ ...b, knop: ui.foto(i + 1, alle.length) }));

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <Container className="grid items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
        <div className="md:col-span-6">
          <p className="label text-blauw">{boven}</p>
          <h1 className="mt-5 text-[46px] md:text-[60px] lg:text-[72px]">
            {regels.map((regel, i) => (
              <span key={regel} className={i > 0 ? "block" : undefined}>
                {regel.split(/(\*[^*]+\*)/).map((deel, j) =>
                  deel.startsWith("*") ? <em key={j}>{deel.slice(1, -1)}</em> : <span key={j}>{deel}</span>,
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-grijs md:text-[20px]">{sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <KnopLink href={cta.proefvaren.href}>{cta.proefvaren.label}</KnopLink>
            <PijlLink href={cta.reserveer.href}>{cta.reserveer.label}</PijlLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-grijs">
            {punten.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Vinkje className="h-4 w-4" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-kaart bg-room md:col-span-6 md:aspect-[4/5] lg:aspect-[5/6]">
          <Diashow beelden={beelden} label={ui.fotos} />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-antraciet/10 ring-inset" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-nacht/45 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
