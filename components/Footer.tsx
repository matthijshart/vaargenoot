import { nav, site } from "@/content/site";
import { AnkerLink } from "./ui/AnkerLink";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-nevel bg-schuim">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-kop text-[22px] font-light text-nacht">{site.naam}</p>
          <p className="text-[15px] text-zacht">{site.plaats}</p>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-[15px] text-gracht underline decoration-lucht underline-offset-4 hover:text-nacht"
            >
              {site.email}
            </a>
          )}
          {site.kvk && <p className="mt-1 text-[13px] text-zacht">KvK {site.kvk}</p>}
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {nav.map((item) => (
              <li key={item.href}>
                <AnkerLink href={item.href} className="text-zacht transition-colors duration-150 hover:text-nacht">
                  {item.label}
                </AnkerLink>
              </li>
            ))}
          </ul>
          <p className="max-w-[42ch] text-[13px] leading-relaxed text-zacht sm:text-right">{site.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
