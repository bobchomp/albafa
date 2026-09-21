"use client";

import Image from "next/image";
import { useState } from "react";
import DeadButton from "./DeadButton";

const navItems = [
  { gaelic: "Prògraman", english: "Programmes" },
  { gaelic: "Sgiobaidhean", english: "Teams" },
  { gaelic: "Tachartasan", english: "Events" },
  { gaelic: "Cuidich Sinn", english: "Support Us" },
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
              key={item.english}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.gaelic}
              <span className="text-white/50"> | </span>
              {item.english}
            </DeadButton>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
            Logadh a-steach | Member Login
          </DeadButton>
          <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition hover:brightness-95">
            Dèan Tabhartas | Donate
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
                key={item.english}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                {item.gaelic} | {item.english}
              </DeadButton>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white">
              Logadh a-steach | Member Login
            </DeadButton>
            <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark">
              Dèan Tabhartas | Donate
            </DeadButton>
          </div>
        </div>
      )}
    </header>
  );
}
