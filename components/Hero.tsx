import { cta } from "@/content/site";
import { foto } from "@/content/foto";
import { Tekst } from "./ui/Tekst";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, PijlLink } from "./ui/Knop";

/**
 * Hero: één centrale kop met beeld eronder. Geen beweging, geen parallax.
 * De foto loopt van rand tot rand.
 */
export function Hero({ kop, sub, beeldNoot }: { kop: string; sub: string; beeldNoot?: string }) {
  return (
    <section className="pt-32 md:pt-44">
      <Container>
        <div className="mx-auto max-w-[52rem] text-center">
          <h1 className="text-[40px] md:text-[64px] lg:text-[76px]">{kop}</h1>
          <p className="mx-auto mt-6 max-w-[38rem] text-[18px] leading-relaxed text-grijs md:text-[21px]">{sub}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:mt-10">
            <KnopLink href={cta.proefvaren.href}>{cta.proefvaren.label}</KnopLink>
            <PijlLink href={cta.reserveer.href}>{cta.reserveer.label}</PijlLink>
          </div>
        </div>
      </Container>
      <div className="mt-14 md:mt-20">
        <Foto
          src={foto.prinsen.src}
          alt={foto.prinsen.alt}
          ratio="16 / 7"
          sizes="100vw"
          priority
          positie="50% 55%"
          className="max-h-[70svh] w-full"
        />
        {beeldNoot && (
          <Container>
            <p className="mt-3 text-[13px] text-grijs">
              <Tekst>{`[INVULLEN: beeld, ${beeldNoot}]`}</Tekst>
            </p>
          </Container>
        )}
      </div>
    </section>
  );
}
