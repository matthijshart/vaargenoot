import { stappen } from "@/content/stappen";
import { Container } from "./ui/Container";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";
import { Weekstrook } from "./Weekstrook";

export function ZoWerktHet() {
  return (
    <Sectie id="zo-werkt-het">
      <Container>
        <SectieKop label={stappen.label} kop={stappen.kop} />

        <ol className="mt-14 grid gap-10 border-t border-nevel pt-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {stappen.lijst.map((stap, i) => (
            <li key={stap.kop} className="flex flex-col">
              <span className="font-kop text-[44px] font-light leading-none text-messing">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[24px] text-nacht">{stap.kop}</h3>
              <p className="mt-3 max-w-[38ch] text-[16px] leading-relaxed text-zacht">
                {stap.tekst}
              </p>
              {i === 1 && (
                <div className="mt-6 max-w-xs">
                  <Weekstrook />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Sectie>
  );
}
