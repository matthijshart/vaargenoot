import { cta } from "@/content/site";
import { foto } from "@/content/foto";
import { Container } from "./ui/Container";
import { Diashow } from "./Diashow";
import { KnopLink, PijlLink } from "./ui/Knop";

/**
 * Hero: de sloep over de volle hoogte, de kop links onderin op de foto.
 * Drie beelden als rustige diavoorstelling, een donkere waas onderin voor
 * de leesbaarheid.
 */
export function Hero({ boven, kop, sub }: { boven: string; kop: string; sub: string }) {
  const regels = kop.split("\n");
  return (
    <section className="relative flex min-h-[86svh] items-end overflow-hidden bg-nacht text-wit md:min-h-[90svh]">
      <Diashow
        beelden={[
          { src: foto.prinsen.src, alt: foto.prinsen.alt, positie: "50% 50%" },
          { src: foto.bovenaf.src, alt: foto.bovenaf.alt, positie: "50% 45%" },
          { src: foto.greenEgg.src, alt: foto.greenEgg.alt, positie: "50% 60%" },
        ]}
        stippen="rechts"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nacht/75 via-nacht/25 to-nacht/10" />
      <Container className="relative pt-44 pb-16 md:pb-24">
        <p className="label text-wit/70">{boven}</p>
        <h1 className="mt-5 max-w-[13ch] text-[52px] text-wit md:text-[84px] lg:text-[104px] [&_em]:text-wit/85">
          {regels.map((regel, i) => (
            <span key={regel} className={i > 0 ? "block" : undefined}>
              {regel.split(/(\*[^*]+\*)/).map((deel, j) =>
                deel.startsWith("*") ? <em key={j}>{deel.slice(1, -1)}</em> : <span key={j}>{deel}</span>,
              )}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-wit/80 md:text-[21px]">{sub}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-10">
          <KnopLink href={cta.proefvaren.href} variant="licht">
            {cta.proefvaren.label}
          </KnopLink>
          <PijlLink href={cta.reserveer.href} licht>
            {cta.reserveer.label}
          </PijlLink>
        </div>
      </Container>
    </section>
  );
}
