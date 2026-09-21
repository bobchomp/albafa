import FaqAccordion from "./FaqAccordion";

export default function Faqs() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          <span className="lang-ga">Ceistean Cumanta</span>
          <span className="lang-en">FAQs</span>
        </h2>
      </div>
      <div className="mt-10">
        <FaqAccordion />
      </div>
    </section>
  );
}
