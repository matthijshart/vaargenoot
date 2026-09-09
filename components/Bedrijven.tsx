import { bedrijven } from "@/content/bedrijven";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { KnopLink } from "./ui/Knop";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Bedrijven() {
  return (
    <Sectie id="bedrijven" className="bg-wit">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectieKop label={bedrijven.label} kop={bedrijven.kop} intro={bedrijven.intro} />
            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {bedrijven.punten.map((punt) => (
                <li key={punt.kop} className="border-t border-nevel pt-4">
                  <h3 className="font-sans text-[16px] font-medium text-nacht">{punt.kop}</h3>
                  <p className="mt-1 max-w-[32ch] text-[15px] leading-relaxed text-zacht">{punt.tekst}</p>
                </li>
              ))}
            </ul>
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
              className="rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </Sectie>
  );
}
