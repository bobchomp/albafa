"use client";

import { useEffect, useState, type FormEvent } from "react";

type Lang = "ga" | "en";

const placeholders: Record<Lang, string> = {
  ga: "Post-d",
  en: "Email Address",
};

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<Lang>("ga");

  useEffect(() => {
    const initial = document.documentElement.dataset.lang;
    if (initial === "en") {
      // One-time sync from the header toggle's current DOM state on mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang("en");
    }

    function handleLangChange(e: Event) {
      const detail = (e as CustomEvent<Lang>).detail;
      if (detail === "ga" || detail === "en") setLang(detail);
    }
    window.addEventListener("langchange", handleLangChange);
    return () => window.removeEventListener("langchange", handleLangChange);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-navy font-medium">
        <span className="lang-ga block">
          Tapadh leibh! Cuiridh sinn fios thugaibh le naidheachdan Alba FA.
        </span>
        <span className="lang-en block">
          Thank you! We will contact you with exciting Alba FA news.
        </span>
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="signup-email" className="sr-only">
        {placeholders[lang]}
      </label>
      <input
        id="signup-email"
        type="email"
        required
        placeholder={placeholders[lang]}
        className="w-full flex-1 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/50 focus:border-navy focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
      >
        <span className="lang-ga">Clàraich</span>
        <span className="lang-en">Sign Up</span>
      </button>
    </form>
  );
}
