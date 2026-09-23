import type { Metadata } from "next";
import Image from "next/image";
import Faqs from "@/app/components/Faqs";
import { pageTitles } from "@/app/lib/pageTitles";
import RegionCard from "./RegionCard";

export const metadata: Metadata = {
  title: pageTitles["/teams/community-clubs"].ga,
  description:
    "Find your local Alba FA Gaelic community football club across Scotland.",
};

const regions = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/76ca0083-5545-41c8-9659-ce1999b59dae/ALBA26-01-P04_MCH-square.png",
    ga: "Gàidhealtachd",
    en: "Highlands",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/40aeed2e-5c9f-4835-9612-87042b849ed5/ALBA26-01-P06_MCH-square.png",
    ga: "Glaschu",
    en: "Glasgow",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/aeeaa4ca-4da3-4544-9ffd-239ea899876c/ALBA26-01-P05_MCH-square.png",
    ga: "Uibhist",
    en: "Uist",
  },
];

export default function CommunityClubsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Image
          src="/images/hero-wallpaper-4.webp"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 lg:mx-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6662e44c39efc81daedf9887/b470664d-8f69-4a81-a8a0-35f82b69e9b8/alba-fa_web_gov-org-3.png"
              alt="Diagram of the Alba FA founding clubs and their locations, with the central Alba FA logo."
              width={824}
              height={918}
              className="h-auto w-full"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="lang-ga">Ar Coimhearsnachd</span>
              <span className="lang-en">Our Community</span>
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              <span className="lang-ga">Comann Ballrachd</span>
              <span className="lang-en">Membership Organisation</span>
            </h1>
            <p className="mt-6 text-sm text-white/80 sm:text-base">
              <span className="lang-ga">
                Thig Alba FA gu bhith na bhuidheann ballrachd le uallach
                airson leasachadh chluban ball-coise coimhearsnachd
                Gàidhlig.
              </span>
              <span className="lang-en">
                The Alba FA will become a membership organisation
                responsible for the development of Gaelic community
                football clubs.
              </span>
            </p>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              <span className="lang-ga">
                Tha a&rsquo; bhuidheann air ainmeachadh gu poblach gur e
                Siorrachd Inbhir Nis (FC Sonas), Glaschu agus Uibhist na
                clubaichean-stèidheachaidh, le 3 eile ri thighinn anns na
                bliadhnaichean a tha romhainn.
              </span>
              <span className="lang-en">
                The organisation has publicly announced Inverness-shire (FC
                Sonas), Glasgow and Uist as founding clubs, with 3 more to
                follow in the coming years.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            <span className="lang-ga">
              Clubaichean Coimhearsnachdan Ball-Coise Gàidhlig
            </span>
            <span className="lang-en">
              What is a Gaelic Community Football Club?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            <span className="lang-ga">
              Tha Club Ball-Coise Coimhearsnachd Gàidhlig na bhuidheann
              stèidhichte sa choimhearsnachd a tha dealasach a thaobh
              gnìomhachd ball-coise chunbhalach a thabhann do
              luchd-labhairt fileanta na Gàidhlig agus do
              luchd-ionnsachaidh a&rsquo; chànain.
            </span>
            <span className="lang-en">
              A Gaelic Community Football Club is a community-based
              organisation committed to providing consistent football
              activity to both fluent Gaelic speakers and language
              learners.
            </span>
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {regions.map((region) => (
            <RegionCard key={region.en} {...region} />
          ))}
        </div>
      </section>

      <Faqs />
    </>
  );
}
