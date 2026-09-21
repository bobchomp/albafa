import DeadButton from "./DeadButton";

const hubItems = [
  {
    key: "membership",
    ga: { title: "Ballrachd", desc: "Faigh no stiùirich ballrachd a’ chluba ann an grunn bhriogaidhean." },
    en: { title: "Membership", desc: "Join or manage your club membership in a few clicks." },
  },
  {
    key: "events",
    ga: { title: "Tachartasan agus am Mòd 2026", desc: "Faic fiosrachadh, fèisean agus an t-slighe chun a’ Mhòid 2026." },
    en: { title: "Events & the 2026 Mòd", desc: "See fixtures, festivals and the road to the 2026 Mòd." },
  },
  {
    key: "lotto",
    ga: { title: "Crannchur a’ Chluba", desc: "Cluich crannchur a’ chluba agus cuidich ball-coise Gàidhlig gach seachdain." },
    en: { title: "Club Lotto", desc: "Play the club lotto and support Gaelic football weekly." },
  },
  {
    key: "teams",
    ga: { title: "Sgiobaidhean is Cluban Coimhearsnachd", desc: "Lean Sgioba nam Fear agus a h-uile club coimhearsnachd." },
    en: { title: "Teams & Community Clubs", desc: "Follow the Mens Team and every community club." },
  },
  {
    key: "donate",
    ga: { title: "Tabhartas", desc: "Thoir seachad gu dìreach do phrògraman coimhearsnachd na carthannais." },
    en: { title: "Donate", desc: "Give directly to the charity's community programmes." },
  },
  {
    key: "member",
    ga: { title: "Bi nad Bhall", desc: "Aon logadh a-steach airson do chlub, do theaghlach, ’s do gheamannan." },
    en: { title: "Become a Member", desc: "One login for your club, your family, your fixtures." },
  },
];

export default function UnifiedHub() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
            <span className="lang-ga">Aon dachaigh airson a h-uile càil</span>
            <span className="lang-en">One home for everything</span>
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
            <span className="lang-ga">Aon Dachaigh airson a h-Uile Càil aig Alba FA</span>
            <span className="lang-en">One Home for Everything Alba FA</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
            <span className="lang-ga">
              Ballrachd, tachartasan, crannchur agus tabhartasan &mdash; a
              h-uile càil ann an aon àite, le aon logadh a-steach.
            </span>
            <span className="lang-en">
              Membership, events, lotto and donations &mdash; all in one
              place, one login, instead of juggling two separate systems.
            </span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubItems.map((item) => (
            <DeadButton
              key={item.key}
              className="group flex h-full flex-col items-start gap-2 rounded-2xl border border-navy/10 bg-cream/60 p-6 text-left transition hover:border-gold hover:bg-cream"
            >
              <span className="lang-ga text-lg font-bold text-navy">
                {item.ga.title}
              </span>
              <span className="lang-en text-lg font-bold text-navy">
                {item.en.title}
              </span>
              <span className="lang-ga text-sm text-ink/70">
                {item.ga.desc}
              </span>
              <span className="lang-en text-sm text-ink/70">
                {item.en.desc}
              </span>
            </DeadButton>
          ))}
        </div>
      </div>
    </section>
  );
}
