import type { vragen as vragenNl } from "../vragen";
import { bedrag, procentMinder } from "@/lib/utils";
import { checks, fiscaal, juridisch, looptijd, modellen, producten, reservering, samen, schade, seizoen, vergelijking } from "./config";

const en = (n: number) => bedrag(n, "en");
const solo = producten.solo.prijs.prinsen;
const duo = producten.duo.prijs.prinsen;
const lease = vergelijking.lease.prijs.prinsen;

export const vragen: typeof vragenNl = {
  meta: {
    title: "FAQ",
    description: "Twelve questions about Duo, Solo, co-ownership, term, branding, damage, boating licence and the season.",
  },
  kop: "Questions.",
  intro: "The questions companies ask us, in the order they come.",
  lijst: [
    {
      vraag: "What if I want to sail and so does my duo partner?",
      antwoord: `${samen.regels[0]} ${samen.regels[1]} ${samen.regels[2]} That keeps it fair, without points and without fixed days.`,
    },
    {
      vraag: "Why not just lease a whole boat?",
      antwoord: `You can, elsewhere. A ${modellen.prinsen.naam} of ${modellen.prinsen.lengte} metres costs from ${en(lease)} a month there, fixed for four to five years. With us the same boat as a Solo costs ${en(solo)}, which is ${procentMinder(lease, solo)} percent less, with full branding and a twelve-month term. Duo is ${en(duo)} per company, for a boat you share with one other company. All amounts excluding VAT, indicative.`,
    },
    {
      vraag: "What does it cost a year and what's included?",
      antwoord: `Twelve times the monthly amount. ${producten.duo.naam} ${modellen.prinsen.naam}: ${en(duo * 12)} per company a year. ${producten.solo.naam} ${modellen.prinsen.naam}: ${en(solo * 12)} a year. Excluding VAT, indicative. Everything is in there, we take care of it: a berth in the canal ring or at a spot of your choice, permits and vignette, insurance, charging and power, maintenance, cleaning after every trip, winterising, a replacement boat, the app and the service line. A skipper and catering you arrange on top.`,
    },
    {
      vraag: "Does my company really become a co-owner?",
      antwoord: `Yes. ${juridisch} Exactly how it works is in the agreement, in plain language.`,
    },
    {
      vraag: "Can I go from Duo to Solo later, or the other way round?",
      antwoord: `Yes. A ${producten.duo.naam} owner has first right to the other half and can scale up to ${producten.solo.naam} on ${looptijd.start}. A ${producten.solo.naam} owner can bring in a partner and go back to ${producten.duo.naam}. Nobody has to choose forever right now.`,
    },
    {
      vraag: "Can I choose who I share with?",
      antwoord: `Yes. Bring your own duo partner: a befriended company, a client, the office next door. ${reservering.duoPartnerActie} If you come alone, we find a partner that suits you.`,
    },
    {
      vraag: "How long am I committed and how do I get out?",
      antwoord: `Twelve months from ${looptijd.start}. ${looptijd.uitstappen} Not four or five years, as with a lease.`,
    },
    {
      vraag: "Can we put our branding on the boat?",
      antwoord: `${producten.solo.naam}: ${producten.solo.huisstijl} ${producten.duo.naam}: ${producten.duo.huisstijl}`,
    },
    {
      vraag: "What if there's damage?",
      antwoord: `You call the service line, even when you're on the water. Insurance is included. The deductible is ${schade.eigenRisico} per event. Exactly what applies is in the agreement.`,
    },
    {
      vraag: "Does the driver need a boating licence?",
      antwoord: `No. An electric boat under 15 metres that can't go faster than 20 kilometres an hour doesn't need a licence. ${checks.vaarbewijs} Before your first trip we explain how the boat works.`,
    },
    {
      vraag: "What about tax?",
      antwoord: `${fiscaal} ${checks.fiscaal}`,
    },
    {
      vraag: "What happens outside the season?",
      antwoord: `The season runs from ${seizoen.van} to ${seizoen.tot}. ${seizoen.buiten} We keep the boat winterised and charged.`,
    },
  ],
};
