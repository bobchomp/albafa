import DeadButton from "./DeadButton";

const hubItems = [
  {
    gaelic: "Ballrachd",
    english: "Membership",
    description: "Join or manage your club membership in a few clicks.",
  },
  {
    gaelic: "Tachartasan",
    english: "Events & the 2026 Mòd",
    description: "See fixtures, festivals and the road to the 2026 Mòd.",
  },
  {
    gaelic: "Crannchur a’ Chluba",
    english: "Club Lotto",
    description: "Play the club lotto and support Gaelic football weekly.",
  },
  {
    gaelic: "Sgiobaidhean",
    english: "Teams & Community Clubs",
    description: "Follow the Mens Team and every community club.",
  },
  {
    gaelic: "Tabhartas",
    english: "Donate",
    description: "Give directly to the charity's community programmes.",
  },
  {
    gaelic: "Bi nad Bhall",
    english: "Become a Member",
    description: "One login for your club, your family, your fixtures.",
  },
];

export default function UnifiedHub() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
            Aon dachaigh airson a h-uile càil
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
            One home for everything Alba FA
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
            Ballrachd, tachartasan, crannchur agus tabhartasan &mdash; a h-uile
            càil ann an aon àite, aon logadh a-steach.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
            Membership, events, lotto and donations &mdash; all in one place,
            one login, instead of juggling two separate systems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubItems.map((item) => (
            <DeadButton
              key={item.english}
              className="group flex h-full flex-col items-start gap-2 rounded-2xl border border-navy/10 bg-cream/60 p-6 text-left transition hover:border-gold hover:bg-cream"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                {item.gaelic}
              </span>
              <span className="text-lg font-bold text-navy">
                {item.english}
              </span>
              <span className="text-sm text-ink/70">{item.description}</span>
            </DeadButton>
          ))}
        </div>
      </div>
    </section>
  );
}
