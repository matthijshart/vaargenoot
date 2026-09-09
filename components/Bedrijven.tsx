import { bedrijven } from "@/content/bedrijven";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink } from "./ui/Knop";
import { PuntKaarten } from "./ui/PuntKaarten";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Bedrijven() {
  return (
    <Sectie id="bedrijven">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <SectieKop label={bedrijven.label} kop={bedrijven.kop} intro={bedrijven.intro} />
            <PuntKaarten punten={bedrijven.punten} kolommen={2} toon="wit" className="mt-10" />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <KnopLink href="#aanmelden">{bedrijven.cta}</KnopLink>
              <p className="max-w-[36ch] text-[14px] leading-relaxed text-zacht">{bedrijven.ctaTekst}</p>
            </div>
          </div>
          <div className="self-center lg:col-span-5">
            <Foto
              src={bedrijven.beeld.src}
              alt={bedrijven.beeld.alt}
              ratio="1 / 1"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="group rounded-2xl"
              fotoClassName="transition-transform duration-700 ease-zacht md:group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
