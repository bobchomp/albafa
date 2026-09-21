const pillars = [
  { ga: "A Cheanglachadh", en: "Connect" },
  { ga: "A Bhrosnachadh", en: "Inspire" },
  { ga: "A dh’Fhàs", en: "Grow" },
];

function PillarItems() {
  return (
    <>
      {pillars.map((pillar) => (
        <span key={pillar.en} className="contents">
          <span className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            <span className="lang-ga">{pillar.ga}</span>
            <span className="lang-en">{pillar.en}</span>
          </span>
          <span
            className="text-2xl font-extrabold text-gold sm:text-3xl"
            aria-hidden="true"
          >
            &mdash;
          </span>
        </span>
      ))}
    </>
  );
}

export default function PillarsMarquee() {
  return (
    <div className="overflow-hidden bg-navy py-6">
      <div className="marquee flex w-max items-center gap-6 sm:gap-8">
        <PillarItems />
        <PillarItems />
      </div>
    </div>
  );
}
