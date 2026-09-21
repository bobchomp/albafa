"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DeadButton from "./DeadButton";
import LanguageToggle from "./LanguageToggle";

const teamsLinks = [
  { ga: "Sgioba Nam Fear", en: "Mens Team", href: "/teams/mens-team" },
  {
    ga: "Cluban Coimhearsnachd",
    en: "Community Clubs",
    href: "/teams/community-clubs",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [mobileTeamsOpen, setMobileTeamsOpen] = useState(false);
  const teamsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Close any open menu after a navigation completes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setTeamsOpen(false);
    setMobileTeamsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (teamsRef.current && !teamsRef.current.contains(e.target as Node)) {
        setTeamsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg shadow-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/alba-fa-logo-outlined.webp"
            alt="Alba FA"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden text-lg font-bold tracking-wide text-white sm:block">
            ALBA FA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <DeadButton className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white">
            <span className="lang-ga">Prògraman</span>
            <span className="lang-en">Programmes</span>
          </DeadButton>

          <div className="relative" ref={teamsRef}>
            <button
              type="button"
              onClick={() => setTeamsOpen((open) => !open)}
              aria-expanded={teamsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <span className="lang-ga">Sgiobaidhean</span>
              <span className="lang-en">Teams</span>
              <Chevron open={teamsOpen} />
            </button>
            {teamsOpen && (
              <div className="absolute left-0 top-full mt-2 w-60 rounded-xl border border-white/10 bg-navy-dark p-2 shadow-xl">
                {teamsLinks.map((link) => (
                  <Link
                    key={link.en}
                    href={link.href}
                    onClick={() => setTeamsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="lang-ga">{link.ga}</span>
                    <span className="lang-en">{link.en}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <DeadButton className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white">
            <span className="lang-ga">Tachartasan</span>
            <span className="lang-en">Events</span>
          </DeadButton>
          <DeadButton className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white">
            <span className="lang-ga">Cuidich Sinn</span>
            <span className="lang-en">Support Us</span>
          </DeadButton>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
            <span className="lang-ga">Log a-steach</span>
            <span className="lang-en">Member Login</span>
          </DeadButton>
          <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition hover:brightness-95">
            <span className="lang-ga">Dèan Tabhartas</span>
            <span className="lang-en">Donate</span>
          </DeadButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-white transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-white transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <DeadButton className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white">
              <span className="lang-ga">Prògraman</span>
              <span className="lang-en">Programmes</span>
            </DeadButton>

            <div>
              <button
                type="button"
                onClick={() => setMobileTeamsOpen((open) => !open)}
                aria-expanded={mobileTeamsOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                <span>
                  <span className="lang-ga">Sgiobaidhean</span>
                  <span className="lang-en">Teams</span>
                </span>
                <Chevron open={mobileTeamsOpen} />
              </button>
              {mobileTeamsOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {teamsLinks.map((link) => (
                    <Link
                      key={link.en}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-2 text-left text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      <span className="lang-ga">{link.ga}</span>
                      <span className="lang-en">{link.en}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <DeadButton className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white">
              <span className="lang-ga">Tachartasan</span>
              <span className="lang-en">Events</span>
            </DeadButton>
            <DeadButton className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white">
              <span className="lang-ga">Cuidich Sinn</span>
              <span className="lang-en">Support Us</span>
            </DeadButton>
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <LanguageToggle className="self-start" />
            <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white">
              <span className="lang-ga">Log a-steach</span>
              <span className="lang-en">Member Login</span>
            </DeadButton>
            <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark">
              <span className="lang-ga">Dèan Tabhartas</span>
              <span className="lang-en">Donate</span>
            </DeadButton>
          </div>
        </div>
      )}
    </header>
  );
}
