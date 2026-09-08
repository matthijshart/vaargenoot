import { sloepen } from "@/content/sloepen";
import { Container } from "./ui/Container";
import { Foto } from "./ui/Foto";
import { Sectie } from "./ui/Sectie";
import { SectieKop } from "./ui/SectieKop";

export function Sloepen() {
  return (
    <Sectie id="sloepen">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectieKop label={sloepen.label} kop={sloepen.kop} />
          <p className="shrink-0 text-[15px] font-medium text-gracht">{sloepen.intro}</p>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10 lg:mt-20 lg:gap-16">
          {sloepen.lijst.map((sloep) => (
            <article key={sloep.naam}>
              <Foto
                src={sloep.beeld.src}
                alt={sloep.beeld.alt}
                ratio="4 / 3"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="rounded-2xl"
              />
              <h3 className="mt-8 text-[32px] text-nacht sm:text-[36px]">{sloep.naam}</h3>
              <dl className="mt-5 divide-y divide-nevel border-y border-nevel text-[15px]">
                {sloep.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[11rem_1fr] gap-4 py-3">
                    <dt className="text-zacht">{spec.label}</dt>
                    <dd className={spec.waarde === "volgt" ? "text-zacht/70" : "text-inkt"}>
                      {spec.waarde}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </Sectie>
  );
}
