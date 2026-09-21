"use client";

import { useEffect, useState } from "react";

type Lang = "ga" | "en";

function applyLang(lang: Lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "ga" ? "gd" : "en";
  window.dispatchEvent(new CustomEvent<Lang>("langchange", { detail: lang }));
}

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const [lang, setLang] = useState<Lang>("ga");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("albafa-lang");
      if (stored === "en" || stored === "ga") {
        // One-time sync from a persisted, client-only preference on mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLang(stored);
        applyLang(stored);
      }
    } catch {}
  }, []);

  function choose(next: Lang) {
    setLang(next);
    applyLang(next);
    try {
      localStorage.setItem("albafa-lang", next);
    } catch {}
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/25 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => choose("ga")}
        aria-pressed={lang === "ga"}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === "ga" ? "bg-gold text-navy-dark" : "text-white/70 hover:text-white"
        }`}
      >
        Gàidhlig
      </button>
      <button
        type="button"
        onClick={() => choose("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === "en" ? "bg-gold text-navy-dark" : "text-white/70 hover:text-white"
        }`}
      >
        English
      </button>
    </div>
  );
}
