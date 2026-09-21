import Image from "next/image";
import DeadButton from "./DeadButton";

const columns = [
  {
    title: "Prògraman | Programmes",
    links: ["Sgiobaidhean | Teams", "Sgiobaidhean Fear | Mens Team", "Cluban Coimhearsnachd | Community Clubs"],
  },
  {
    title: "Tachartasan | Events",
    links: ["Mòd 2026", "Fèis Ball-Coise a’ Mhòid | Mòd Youth Festival"],
  },
  {
    title: "Cuidich Sinn | Support Us",
    links: ["Crannchur a’ Chluba | Club Lotto", "Dèan Tabhartas | Donate", "Bi nad Bhall | Become a Member"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/alba-fa-logo-outlined.webp"
              alt="Alba FA"
              width={56}
              height={56}
              className="h-14 w-14"
            />
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Guth na Gàidhlig ann am Ball-coise
            </p>
            <p className="text-sm text-white/70">
              A Voice for Gaelic in Football
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <DeadButton className="text-left text-sm text-white/70 hover:text-white">
                      {link}
                    </DeadButton>
                  </li>
                ))}
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
            <p className="font-medium text-white/80">
              ICT Community Development
            </p>
            <p>Culduthel Road, Inverness IV2 6AD</p>
            <p>support@albafa.com</p>
            <p>events@albafa.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
