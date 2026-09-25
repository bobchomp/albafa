import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faqs from "@/app/components/Faqs";
import { PROGRAMMES_PAGE_ENABLED } from "@/app/lib/features";
import { pageTitles } from "@/app/lib/pageTitles";

export const metadata: Metadata = {
  title: pageTitles["/programmes"].ga,
  description: "Alba FA's Gaelic community football programmes.",
};

export default function ProgrammesPage() {
  if (!PROGRAMMES_PAGE_ENABLED) notFound();

  return (
    <>
      <section className="bg-navy-dark px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="lang-ga">Prògraman</span>
          <span className="lang-en">Programmes</span>
        </h1>
      </section>

      <Faqs />
    </>
  );
}
