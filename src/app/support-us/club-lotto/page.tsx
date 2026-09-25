import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faqs from "@/app/components/Faqs";
import { SUPPORT_PAGES_ENABLED } from "@/app/lib/features";
import { pageTitles } from "@/app/lib/pageTitles";

export const metadata: Metadata = {
  title: pageTitles["/support-us/club-lotto"].ga,
  description: "Play the Alba FA Club Lotto and support Gaelic football.",
};

export default function ClubLottoPage() {
  if (!SUPPORT_PAGES_ENABLED) notFound();

  return (
    <>
      <section className="bg-navy-dark px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="lang-ga">Cuidich Sinn</span>
          <span className="lang-en">Support Us</span>
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          <span className="lang-ga">Lotto a’ Chlub</span>
          <span className="lang-en">Club Lotto</span>
        </h1>
      </section>

      <Faqs />
    </>
  );
}
