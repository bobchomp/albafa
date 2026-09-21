const pillars = [
  { ga: "A Cheanglachadh", en: "Connect" },
  { ga: "A Bhrosnachadh", en: "Inspire" },
  { ga: "A dh’Fhàs", en: "Grow" },
];

// Every word and dash is a direct flex child (no wrapping element) so the
// row's single `gap` applies evenly and identically between each of them —
// a `display: contents` wrapper here is inconsistent about that across
// browsers, which is what caused the uneven-looking gaps.
function pillarNodes(copy: number) {
  return pillars.flatMap((pillar) => [
    <span
      key={`${copy}-${pillar.en}-word`}
      className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
    >
      <span className="lang-ga">{pillar.ga}</span>
      <span className="lang-en">{pillar.en}</span>
    </span>,
    <span
      key={`${copy}-${pillar.en}-dash`}
      className="text-2xl font-extrabold text-gold sm:text-3xl"
      aria-hidden="true"
    >
      &mdash;
    </span>,
  ]);
}

export default function PillarsMarquee() {
  return (
    <div className="overflow-hidden bg-navy py-6">
      <div className="marquee flex w-max items-center gap-6 sm:gap-8">
        {pillarNodes(0)}
        {pillarNodes(1)}
      </div>
    </div>
  );
}
