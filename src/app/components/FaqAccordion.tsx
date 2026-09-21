"use client";

import { useState } from "react";

const faqs = [
  {
    gaelic: "Dè th’ ann an Alba FA?",
    question: "What is Alba FA?",
    answer:
      "The Alba Football Alliance (Alba FA) has been established to use football as a force to connect, inspire and grow Scottish Gaelic through community football activity.",
  },
  {
    gaelic: "Ciamar a tha Alba FA co-cheangailte ris na cluban coimhearsnachd sin?",
    question: "How is Alba FA associated with these community clubs?",
    answer:
      "The Alba FA will become a membership organisation responsible for the development of Gaelic community football clubs.",
  },
  {
    gaelic: "Dè tha ann an Club Ball-Coise Coimhearsnachd Gàidhlig?",
    question: "What is a Gaelic Community Football Club?",
    answer:
      "A community-based organisation committed to providing multigenerational football activity to both fluent Gaelic speakers and language learners in a dedicated region.",
  },
  {
    gaelic: "Cò a bha na Club Ball-Coise Coimhearsnachd Gàidhlig an toiseach?",
    question: "Who was the first Gaelic Community Football Club?",
    answer:
      "FC Sonas (Inverness-shire region) was Scotland's first Gaelic Community Football Club.",
  },
  {
    gaelic: "Dè th’ ann am FC Sonas?",
    question: "What is FC Sonas?",
    answer:
      "FC Sonas is a Gaelic community football club in Inverness-shire committed to providing regular multigenerational football activity through the medium of Gaelic to the Inverness-shire region.",
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
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-navy/10 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span>
                <span className="block text-sm font-medium text-navy/70 italic">
                  {faq.gaelic}
                </span>
                <span className="block font-semibold text-navy">
                  {faq.question}
                </span>
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
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
