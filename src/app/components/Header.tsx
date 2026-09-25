"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DeadButton from "./DeadButton";
import LanguageToggle from "./LanguageToggle";
import LanguageHint from "./LanguageHint";
import {
  EVENTS_PAGE_ENABLED,
  PROGRAMMES_PAGE_ENABLED,
  SUPPORT_PAGES_ENABLED,
} from "@/app/lib/features";

type NavLink = { ga: string; en: string; href: string | null };

const teamsLinks: NavLink[] = [
  { ga: "Sgioba Nam Fear", en: "Mens Team", href: "/teams/mens-team" },
  {
    ga: "Cluban Coimhearsnachd",
    en: "Community Clubs",
    href: "/teams/community-clubs",
  },
];

const supportLinks: NavLink[] = [
  {
    ga: "Lotto a’ Chlub",
    en: "Club Lotto",
    href: SUPPORT_PAGES_ENABLED ? "/support-us/club-lotto" : null,
  },
  {
    ga: "Dèan Tabhartas",
    en: "Donate",
    href: SUPPORT_PAGES_ENABLED ? "/support-us/donate" : null,
  },
];

type DropdownId = "teams" | "support";

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

function NavItem({
  ga,
  en,
  href,
  className,
  onNavigate,
}: {
  ga: string;
  en: string;
  href: string | null;
  className: string;
  onNavigate?: () => void;
}) {
  const label = (
    <>
      <span className="lang-ga">{ga}</span>
      <span className="lang-en">{en}</span>
    </>
  );
  return href ? (
    <Link href={href} onClick={onNavigate} className={className}>
      {label}
    </Link>
  ) : (
    <DeadButton className={className}>{label}</DeadButton>
  );
}

function NavDropdown({
  ga,
  en,
  links,
  open,
  onToggle,
}: {
  ga: string;
  en: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
      >
        <span className="lang-ga">{ga}</span>
        <span className="lang-en">{en}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 w-60 rounded-xl border border-white/10 bg-navy-dark p-2 shadow-xl">
          {links.map((link) => {
            const className =
              "block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white";
            const label = (
              <>
                <span className="lang-ga">{link.ga}</span>
                <span className="lang-en">{link.en}</span>
              </>
            );
            return link.href ? (
              <Link key={link.en} href={link.href} className={className}>
                {label}
              </Link>
            ) : (
              <DeadButton key={link.en} className={className}>
                {label}
              </DeadButton>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  ga,
  en,
  links,
  open,
  onToggle,
  onNavigate,
}: {
  ga: string;
  en: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
      >
        <span>
          <span className="lang-ga">{ga}</span>
          <span className="lang-en">{en}</span>
        </span>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
          {links.map((link) => {
            const className =
              "rounded-lg px-3 py-2 text-left text-sm text-white/70 hover:bg-white/10 hover:text-white";
            const label = (
              <>
                <span className="lang-ga">{link.ga}</span>
                <span className="lang-en">{link.en}</span>
              </>
            );
            return link.href ? (
              <Link
                key={link.en}
                href={link.href}
                onClick={onNavigate}
                className={className}
              >
                {label}
              </Link>
            ) : (
              <DeadButton key={link.en} className={className}>
                {label}
              </DeadButton>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const [mobileSection, setMobileSection] = useState<DropdownId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Close any open menu after a navigation completes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDropdown(id: DropdownId) {
    setActiveDropdown((current) => (current === id ? null : id));
  }

  function toggleMobileSection(id: DropdownId) {
    setMobileSection((current) => (current === id ? null : id));
  }

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

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          <NavItem
            ga="Prògraman"
            en="Programmes"
            href={PROGRAMMES_PAGE_ENABLED ? "/programmes" : null}
            className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
          />

          <NavDropdown
            ga="Sgiobaidhean"
            en="Teams"
            links={teamsLinks}
            open={activeDropdown === "teams"}
            onToggle={() => toggleDropdown("teams")}
          />

          <NavItem
            ga="Tachartasan"
            en="Events"
            href={EVENTS_PAGE_ENABLED ? "/events" : null}
            className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
          />

          <NavDropdown
            ga="Cuidich Sinn"
            en="Support Us"
            links={supportLinks}
            open={activeDropdown === "support"}
            onToggle={() => toggleDropdown("support")}
          />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <LanguageToggle />
            <LanguageHint />
          </div>
          <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
            <span className="lang-ga">Log a-steach</span>
            <span className="lang-en">Member Login</span>
          </DeadButton>
          {SUPPORT_PAGES_ENABLED ? (
            <Link
              href="/support-us/donate"
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition hover:brightness-95"
            >
              <span className="lang-ga">Dèan Tabhartas</span>
              <span className="lang-en">Donate</span>
            </Link>
          ) : (
            <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark transition hover:brightness-95">
              <span className="lang-ga">Dèan Tabhartas</span>
              <span className="lang-en">Donate</span>
            </DeadButton>
          )}
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
            <NavItem
              ga="Prògraman"
              en="Programmes"
              href={PROGRAMMES_PAGE_ENABLED ? "/programmes" : null}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              onNavigate={() => setMenuOpen(false)}
            />

            <MobileAccordion
              ga="Sgiobaidhean"
              en="Teams"
              links={teamsLinks}
              open={mobileSection === "teams"}
              onToggle={() => toggleMobileSection("teams")}
              onNavigate={() => setMenuOpen(false)}
            />

            <NavItem
              ga="Tachartasan"
              en="Events"
              href={EVENTS_PAGE_ENABLED ? "/events" : null}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              onNavigate={() => setMenuOpen(false)}
            />

            <MobileAccordion
              ga="Cuidich Sinn"
              en="Support Us"
              links={supportLinks}
              open={mobileSection === "support"}
              onToggle={() => toggleMobileSection("support")}
              onNavigate={() => setMenuOpen(false)}
            />
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <LanguageToggle className="self-start" />
            <DeadButton className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white">
              <span className="lang-ga">Log a-steach</span>
              <span className="lang-en">Member Login</span>
            </DeadButton>
            {SUPPORT_PAGES_ENABLED ? (
              <Link
                href="/support-us/donate"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-gold px-4 py-2 text-center text-sm font-semibold text-navy-dark"
              >
                <span className="lang-ga">Dèan Tabhartas</span>
                <span className="lang-en">Donate</span>
              </Link>
            ) : (
              <DeadButton className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-dark">
                <span className="lang-ga">Dèan Tabhartas</span>
                <span className="lang-en">Donate</span>
              </DeadButton>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
