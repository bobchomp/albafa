"use client";

import { useState } from "react";

const faqs = [
  {
    ga: {
      question: "Dè th’ ann an Alba FA?",
      answer:
        "Chaidh an Alba Football Alliance (Alba FA) a stèidheachadh gus ball-coise a chleachdadh mar fheachd a chum Gàidhlig na h-Alba a cheanglachadh, a bhrosnachadh agus a dh’fhàs tro ghnìomhachd ball-coise coimhearsnachd.",
    },
    en: {
      question: "What is Alba FA?",
      answer:
        "The Alba Football Alliance (Alba FA) has been established to use football as a force to connect, inspire and grow Scottish Gaelic through community football activity.",
    },
  },
  {
    ga: {
      question: "Ciamar a tha Alba FA co-cheangailte ris na cluban coimhearsnachd sin?",
      answer:
        "Thig Alba FA gu bhith na bhuidheann ballrachd le uallach airson leasachadh chluban ball-coise coimhearsnachd Gàidhlig.",
    },
    en: {
      question: "How is Alba FA associated with these community clubs?",
      answer:
        "The Alba FA will become a membership organisation responsible for the development of Gaelic community football clubs.",
    },
  },
  {
    ga: {
      question: "Dè tha ann an Club Ball-Coise Coimhearsnachd Gàidhlig?",
      answer:
        "Buidheann stèidhichte sa choimhearsnachd a tha dealasach a thaobh gnìomhachd ball-coise iomadh-ghinealach a thabhann do luchd-labhairt fileanta na Gàidhlig agus do luchd-ionnsachaidh a’ chànain ann an sgìre shònraichte.",
    },
    en: {
      question: "What is a Gaelic Community Football Club?",
      answer:
        "A community-based organisation committed to providing multigenerational football activity to both fluent Gaelic speakers and language learners in a dedicated region.",
    },
  },
  {
    ga: {
      question: "Cò a bha na Club Ball-Coise Coimhearsnachd Gàidhlig an toiseach?",
      answer:
        "B’ e FC Sonas (sgìre Siorrachd Inbhir Nis) a’ chiad Chlub Ball-Coise Coimhearsnachd Gàidhlig ann an Alba.",
    },
    en: {
      question: "Who was the first Gaelic Community Football Club?",
      answer:
        "FC Sonas (Inverness-shire region) was Scotland's first Gaelic Community Football Club.",
    },
  },
  {
    ga: {
      question: "Dè th’ ann am FC Sonas?",
      answer:
        "Tha FC Sonas na chlub ball-coise coimhearsnachd Gàidhlig ann an Siorrachd Inbhir Nis a tha dealasach a thaobh gnìomhachd ball-coise iomadh-ghinealach chunbhalach a thabhann tro mheadhan na Gàidhlig do shluagh na sgìre.",
    },
    en: {
      question: "What is FC Sonas?",
      answer:
        "FC Sonas is a Gaelic community football club in Inverness-shire committed to providing regular multigenerational football activity through the medium of Gaelic to the Inverness-shire region.",
    },
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.en.question}
            className="overflow-hidden rounded-2xl border border-navy/10 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="block font-semibold text-navy">
                <span className="lang-ga">{faq.ga.question}</span>
                <span className="lang-en">{faq.en.question}</span>
              </span>
              <span
                aria-hidden
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-navy transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink/80">
                <span className="lang-ga">{faq.ga.answer}</span>
                <span className="lang-en">{faq.en.answer}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
