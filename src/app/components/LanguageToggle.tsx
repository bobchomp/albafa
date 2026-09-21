"use client";

import { useEffect, useState } from "react";

type Lang = "ga" | "en";

const FADE_MS = 220;
// A same-page opacity crossfade has none of the parallax/translation motion
// that prefers-reduced-motion is meant to guard against, so we keep it for
// those users too — just quicker, rather than skipping it outright.
const REDUCED_MOTION_FADE_MS = 80;

// Shared across every LanguageToggle instance (header, mobile menu, footer)
// so a click in one place can't race a pending fade started from another.
let pendingFadeTimer: number | null = null;

function fadeDurationMs() {
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  return reduced ? REDUCED_MOTION_FADE_MS : FADE_MS;
}

// Applies the language switch instantly (no fade) — used on first load.
function applyLangNow(lang: Lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "ga" ? "gd" : "en";
  window.dispatchEvent(new CustomEvent<Lang>("langchange", { detail: lang }));
}

// Dims and softly blurs the page, swaps the language underneath that veil,
// then clears back to sharp — a cross-dissolve, never a full blackout.
function applyLangWithFade(lang: Lang) {
  if (pendingFadeTimer !== null) {
    window.clearTimeout(pendingFadeTimer);
  }
  const duration = fadeDurationMs();
  document.body.style.transitionDuration = `${duration}ms`;
  document.body.classList.add("lang-fading");
  pendingFadeTimer = window.setTimeout(() => {
    applyLangNow(lang);
    document.body.classList.remove("lang-fading");
    pendingFadeTimer = null;
  }, duration) as unknown as number;
}

function broadcastLang(next: Lang) {
  applyLangWithFade(next);
  try {
    localStorage.setItem("albafa-lang", next);
  } catch {}
  window.dispatchEvent(new CustomEvent<Lang>("langselect", { detail: next }));
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
        applyLangNow(stored);
      }
    } catch {}

    function handleSelect(e: Event) {
      const detail = (e as CustomEvent<Lang>).detail;
      if (detail === "ga" || detail === "en") setLang(detail);
    }
    window.addEventListener("langselect", handleSelect);
    return () => window.removeEventListener("langselect", handleSelect);
  }, []);

  function choose(next: Lang) {
    if (next === lang) return;
    broadcastLang(next);
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
