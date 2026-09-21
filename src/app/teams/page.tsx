import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alba FA | Teams",
  description: "The Alba FA Mens Team and Gaelic community football clubs.",
};

const teamLinks = [
  {
    ga: "Sgioba Nam Fear",
    en: "Mens Team",
    desc: "The Alba FA's Representative Team and full squad list.",
    href: "/teams/mens-team",
  },
  {
    ga: "Cluban Coimhearsnachd",
    en: "Community Clubs",
    desc: "Find your local Gaelic community football club.",
    href: "/teams/community-clubs",
  },
];

export default function TeamsPage() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/60">
          Teams
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          <span className="lang-ga">Sgiobaidhean</span>
          <span className="lang-en">Teams</span>
        </h1>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {teamLinks.map((team) => (
          <Link
            key={team.en}
            href={team.href}
            className="flex flex-col items-start gap-2 rounded-2xl border border-navy/10 bg-cream/60 p-6 text-left transition hover:border-gold hover:bg-cream"
          >
            <span className="text-lg font-bold text-navy">
              <span className="lang-ga">{team.ga}</span>
              <span className="lang-en">{team.en}</span>
            </span>
            <span className="text-sm text-ink/70">{team.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
