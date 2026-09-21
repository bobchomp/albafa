"use client";

import Image from "next/image";
import { useState } from "react";
import DeadButton from "./DeadButton";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { ga: "Prògraman", en: "Programmes" },
  { ga: "Sgiobaidhean", en: "Teams" },
  { ga: "Tachartasan", en: "Events" },
  { ga: "Cuidich Sinn", en: "Support Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg shadow-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
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
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <DeadButton
              key={item.en}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <span className="lang-ga">{item.ga}</span>
              <span className="lang-en">{item.en}</span>
            </DeadButton>
          ))}
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
            {navItems.map((item) => (
              <DeadButton
                key={item.en}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                <span className="lang-ga">{item.ga}</span>
                <span className="lang-en">{item.en}</span>
              </DeadButton>
            ))}
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
