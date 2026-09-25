import Marquee from "./Marquee";

const pillars = [
  { ga: "A Cheanglachadh", en: "Connect" },
  { ga: "A Bhrosnachadh", en: "Inspire" },
  { ga: "A dh’Fhàs", en: "Grow" },
];

export default function PillarsMarquee() {
  return (
    <div className="bg-navy py-6">
      <Marquee
        repeat={6}
        secondsPerRepeat={24}
        halfClassName="gap-6 pr-6 sm:gap-8 sm:pr-8"
      >
        {pillars.flatMap((pillar) => [
          <span
            key={`${pillar.en}-word`}
            className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
          >
            <span className="lang-ga">{pillar.ga}</span>
            <span className="lang-en">{pillar.en}</span>
          </span>,
          <span
            key={`${pillar.en}-dash`}
            className="text-2xl font-extrabold text-gold sm:text-3xl"
            aria-hidden="true"
          >
            &mdash;
          </span>,
        ])}
      </Marquee>
    </div>
  );
}
