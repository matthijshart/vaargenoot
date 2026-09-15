import Link from "next/link";
import { inhoud } from "@/content";
import { ingevuld } from "@/content/config";
import type { Taal } from "@/lib/taal";
import { Container } from "./ui/Container";
import { Tekst } from "./ui/Tekst";

export function Footer({ taal }: { taal: Taal }) {
  const { footer, site } = inhoud(taal);
  // Contactgegevens pas zodra ze ingevuld zijn; tot die tijd niets.
  const contact = [site.email, site.telefoon, `KvK ${site.kvk}`].filter((r) => ingevuld(r.replace(/^KvK /, "")));
  return (
    <footer className="niet-printen border-t border-lijn">
      <Container className="grid gap-10 pt-14 pb-32 md:grid-cols-12 md:gap-8 md:pb-14">
        <div className="md:col-span-5">
          <p className="kop text-[28px]">{site.naam}</p>
          <p className="mt-1 text-[15px] text-grijs">{site.plaats}</p>
          {contact.length > 0 && (
            <ul className="mt-4 space-y-1 text-[15px] text-grijs">
              {contact.map((r) => (
                <li key={r}>
                  <Tekst>{r}</Tekst>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-[15px] sm:grid-cols-3">
            {footer.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-grijs transition-colors duration-200 hover:text-antraciet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[52ch] text-[14px] leading-relaxed text-grijs">{footer.regel}</p>
        </div>
      </Container>
    </footer>
  );
}
