import { cta } from "@/content/site";
import { foto } from "@/content/foto";
import { Container } from "./ui/Container";
import { Diashow } from "./Diashow";
import { KnopLink, PijlLink } from "./ui/Knop";

/**
 * Hero: één centrale kop met beeld eronder. De foto loopt van rand tot rand,
 * als rustige diavoorstelling van drie beelden.
 */
export function Hero({ kop, sub }: { kop: string; sub: string }) {
  const regels = kop.split("\n");
  return (
    <section className="pt-32 md:pt-44">
      <Container>
        <div className="mx-auto max-w-[60rem] text-center">
          <h1 className="text-[48px] md:text-[76px] lg:text-[92px]">
            {regels.map((regel, i) => (
              <span key={regel} className={i > 0 ? "md:block" : undefined}>
                {i > 0 && " "}
                {regel.split(/(\*[^*]+\*)/).map((deel, j) =>
                  deel.startsWith("*") ? <em key={j}>{deel.slice(1, -1)}</em> : <span key={j}>{deel}</span>,
                )}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-7 max-w-[38rem] text-[18px] leading-relaxed text-grijs md:text-[21px]">{sub}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:mt-10">
            <KnopLink href={cta.proefvaren.href}>{cta.proefvaren.label}</KnopLink>
            <PijlLink href={cta.reserveer.href}>{cta.reserveer.label}</PijlLink>
          </div>
        </div>
      </Container>
      <div className="mx-auto mt-14 w-full max-w-[1320px] px-3 md:mt-20 md:px-6">
        <Diashow
          beelden={[
            { src: foto.prinsen.src, alt: foto.prinsen.alt, positie: "50% 55%" },
            { src: foto.bovenaf.src, alt: foto.bovenaf.alt, positie: "50% 45%" },
            { src: foto.greenEgg.src, alt: foto.greenEgg.alt, positie: "50% 60%" },
          ]}
        />
      </div>
    </section>
  );
}
