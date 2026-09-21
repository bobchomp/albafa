const pillars = [
  { gaelic: "A Cheanglachadh", english: "Connect" },
  { gaelic: "A Bhrosnachadh", english: "Inspire" },
  { gaelic: "A dh’Fhàs", english: "Grow" },
];

function PillarGroup() {
  return (
    <>
      {pillars.map((pillar) => (
        <span
          key={pillar.english}
          className="mx-6 inline-flex items-center gap-3 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
        >
          <span className="text-gold">{pillar.gaelic}</span>
          <span className="text-white/40">{pillar.english}</span>
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
