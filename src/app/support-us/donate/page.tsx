import type { Metadata } from "next";
import Faqs from "@/app/components/Faqs";
import { pageTitles } from "@/app/lib/pageTitles";

export const metadata: Metadata = {
  title: pageTitles["/support-us/donate"].ga,
  description: "Support Alba FA's work connecting, inspiring and growing Scottish Gaelic through community football.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-navy-dark px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="lang-ga">Cuidich Sinn</span>
          <span className="lang-en">Support Us</span>
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          <span className="lang-ga">Dèan Tabhartas</span>
          <span className="lang-en">Donate</span>
        </h1>
      </section>

      <Faqs />
    </>
  );
}
