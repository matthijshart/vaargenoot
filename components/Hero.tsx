import { cta } from "@/content/site";
import { foto } from "@/content/foto";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink, PijlLink } from "./ui/Knop";

/**
 * Hero: één centrale kop met beeld eronder. Geen beweging, geen parallax.
 * De foto loopt van rand tot rand.
 */
export function Hero({ kop, sub }: { kop: string; sub: string }) {
  const regels = kop.split("\n");
  return (
    <section className="pt-32 md:pt-44">
      <Container>
        <div className="mx-auto max-w-[60rem] text-center">
          <h1 className="text-[40px] md:text-[60px] lg:text-[72px]">
            {regels.map((regel, i) => (
              <span key={regel} className={i > 0 ? "md:block" : undefined}>
                {i > 0 && " "}
                {regel}
              </span>
            ))}
          </h1>
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
      </div>
    </section>
  );
}
