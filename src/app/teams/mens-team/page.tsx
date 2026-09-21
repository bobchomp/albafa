import type { Metadata } from "next";
import Image from "next/image";
import Faqs from "@/app/components/Faqs";
import PlayerCard from "./PlayerCard";

export const metadata: Metadata = {
  title: "Alba FA | Mens Team",
  description:
    "Meet the Alba FA Mens Team — the Alba FA's pioneering Representative Team for Gaelic speakers.",
};

const squad = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/19515cc7-f4d1-46e3-8f0c-3df10a738911/2026ALAB_alba-nuadh_squad_luke-mackkay.png",
    name: "Luke Mackay",
    position: "FWD",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/576b976c-2386-4e58-a8fc-df0a03fc1d12/2026ALAB_alba-nuadh_squad_AJ-morrison.png",
    name: "AJ Morrison",
    position: "MID",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/4cfc1ce0-3999-4eb6-988e-0b964fabc304/2026ALAB_alba-nuadh_squad_harry-nicolson.png",
    name: "Harry Nicolson",
    position: "DEF",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/6cdfaa27-e43e-4169-b8a0-768ed670f7c3/2026ALAB_alba-nuadh_squad_ross-macdonald.png",
    name: "Ross Macdonald",
    position: "MID",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/128e10ae-aaa8-49f2-95a2-44323d2d1c69/2026ALAB_alba-nuadh_squad_jamie-ross.png",
    name: "Jamie Ross",
    position: "DEF",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/f4545788-5c32-455f-a3ad-de7a92e90e70/2026ALAB_alba-nuadh_squad_sam-mackkay.png",
    name: "Sam Mackay",
    position: "FWD",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/461632d0-e434-43b8-bdeb-6013c998981f/2026ALAB_alba-nuadh_squad_calum-ferguson.png",
    name: "Calum Ferguson",
    position: "FWD",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/8d5cb7e8-49bb-47a4-8248-624687f8b1b2/2026ALAB_alba-nuadh_squad_robbie-macdonald.png",
    name: "Robbie Macdonald",
    position: "CÒIDSE",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/8d8e8e5b-955c-4750-ba38-655e600759d6/2026ALAB_alba-nuadh_squad_cameron-simpson.png",
    name: "Cameron Simpson",
    position: "CÒIDSE",
  },
];

const quotes = [
  "“See this emblem here… it’s not just about playing football.”",
  "“This is Our Culture. This is Our Language. This is Our Identity.”",
  "“Pioneers creating National Teams for Gaelic speakers.”",
];

export default function MensTeamPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-dark">
        <Image
          src="/images/hero-wallpaper-main.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Representative Teams
          </p>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            <span className="lang-ga">Sgioba Nam Fear</span>
            <span className="lang-en">Mens Team</span>
          </h1>
          <p className="max-w-2xl text-sm text-white/80 sm:text-base">
            <span className="lang-ga">
              Leanaidh Alba FA a bhith na thùsaire gus sgiobaidhean nàiseanta
              a chruthachadh airson agus gun riochdaich iad cùltar, cànan
              agus fèin-aithne na Gàidhlig.
            </span>
            <span className="lang-en">
              The Alba FA will continue to pioneer the creation of
              Representative Teams to represent the Gaelic language, culture
              and identity.
            </span>
          </p>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            <span className="lang-ga">
              Lèirigidh Comann Ball-coise Alba suidheachadh na Gàidhlig ann
              an sòisealtas an latha an-diugh agus comharrachaidh e mar a tha
              i bunaiteach do dhualchas nàiseanta na h-Alba.
            </span>
            <span className="lang-en">
              The Alba Representative Teams will showcase Gaelic&rsquo;s
              role in contemporary society and celebrate an integral part of
              Scotland&rsquo;s national heritage.
            </span>
          </p>
        </div>
      </section>

      <div className="overflow-hidden bg-navy py-4">
        <div className="marquee flex w-max items-center gap-6">
          {Array.from({ length: 8 }).flatMap((_, i) => [
            <span
              key={`connect-${i}`}
              className="text-lg font-extrabold uppercase tracking-wide text-white"
            >
              Connect
            </span>,
            <span key={`dot1-${i}`} className="text-gold">
              &bull;
            </span>,
            <span
              key={`inspire-${i}`}
              className="text-lg font-extrabold uppercase tracking-wide text-white"
            >
              Inspire
            </span>,
            <span key={`dot2-${i}`} className="text-gold">
              &bull;
            </span>,
            <span
              key={`grow-${i}`}
              className="text-lg font-extrabold uppercase tracking-wide text-white"
            >
              Grow
            </span>,
            <span key={`dot3-${i}`} className="text-gold">
              &bull;
            </span>,
          ])}
        </div>
      </div>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
              <span className="lang-ga">Sgioba nam fear</span>
              <span className="lang-en">Men&rsquo;s Team</span>
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {squad.map((player) => (
              <PlayerCard key={player.name} {...player} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((quote) => (
            <div
              key={quote}
              className="rounded-2xl border border-navy/10 bg-white p-6 text-center"
            >
              <p className="text-sm font-medium italic leading-relaxed text-navy">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Faqs />
    </>
  );
}
