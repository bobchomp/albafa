import Image from "next/image";
import Link from "next/link";
import DeadButton from "./DeadButton";
import LanguageToggle from "./LanguageToggle";

const columns = [
  {
    ga: "Prògraman",
    en: "Programmes",
    links: [
      { ga: "Sgioba nam Fear", en: "Mens Team", href: "/teams/mens-team" },
      {
        ga: "Cluban Coimhearsnachd",
        en: "Community Clubs",
        href: "/teams/community-clubs",
      },
    ],
  },
  {
    ga: "Tachartasan",
    en: "Events",
    links: [
      { ga: "Mòd 2026", en: "Mòd 2026", href: null },
      { ga: "Fèis Ball-Coise a’ Mhòid", en: "Mòd Youth Festival", href: null },
    ],
  },
  {
    ga: "Cuidich Sinn",
    en: "Support Us",
    links: [
      { ga: null, en: "Club Lotto", href: null },
      { ga: "Dèan Tabhartas", en: "Donate", href: null },
      { ga: "Bi nad Bhall", en: "Become a Member", href: null },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/alba-fa-logo-outlined.webp"
              alt="Alba FA"
              width={56}
              height={56}
              className="h-14 w-14"
            />
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              <span className="lang-ga">Guth na Gàidhlig ann am Ball-coise</span>
              <span className="lang-en">A Voice for Gaelic in Football</span>
            </p>
          </div>
          <LanguageToggle />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column) => (
            <div key={column.en} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">
                <span className="lang-ga">{column.ga}</span>
                <span className="lang-en">{column.en}</span>
              </p>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => {
                  const content = link.ga ? (
                    <>
                      <span className="lang-ga">{link.ga}</span>
                      <span className="lang-en">{link.en}</span>
                    </>
                  ) : (
                    link.en
                  );
                  return (
                    <li key={link.en}>
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="text-left text-sm text-white/70 hover:text-white"
                        >
                          {content}
                        </Link>
                      ) : (
                        <DeadButton className="text-left text-sm text-white/70 hover:text-white">
                          {content}
                        </DeadButton>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p>Alba FA is a Scottish charity regulated by OSCR</p>
            <p>Charity Number: SC051616</p>
          </div>
          <div>
            <p className="font-medium text-white/80">ICT Community Development</p>
            <p>Culduthel Road, Inverness IV2 6AD</p>
            <p>
              <a href="mailto:support@albafa.com" className="hover:text-white">
                support@albafa.com
              </a>
            </p>
            <p>
              <a href="mailto:events@albafa.com" className="hover:text-white">
                events@albafa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
