const pillars = [
  { ga: "A Cheanglachadh", en: "Connect" },
  { ga: "A Bhrosnachadh", en: "Inspire" },
  { ga: "A dh’Fhàs", en: "Grow" },
];

function PillarGroup() {
  return (
    <>
      {pillars.map((pillar) => (
        <span
          key={pillar.en}
          className="mx-6 inline-flex items-center gap-3 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
        >
          <span className="lang-ga">{pillar.ga}</span>
          <span className="lang-en">{pillar.en}</span>
          <span className="text-gold">&mdash;</span>
        </span>
      ))}
    </>
  );
}

export default function PillarsMarquee() {
  return (
    <div className="overflow-hidden bg-navy py-6">
      <div className="marquee flex w-max">
        <div className="flex shrink-0">
          <PillarGroup />
          <PillarGroup />
        </div>
        <div className="flex shrink-0">
          <PillarGroup />
          <PillarGroup />
        </div>
      </div>
    </div>
  );
}
