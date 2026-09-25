"use client";

import { useEffect, useState } from "react";

const DISMISSED_KEY = "albafa-lang-hint-dismissed";

// A callout under the language switch, always written in the *other*
// language so a visitor who can't read the current one can find the switch.
export default function LanguageHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISSED_KEY) === "1";
    } catch {}
    // Shown only after mount so visitors who dismissed it never see a flash.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {}
  }

  if (!visible) return null;

  return (
    <div className="absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2">
      <div className="relative flex items-center gap-2 whitespace-nowrap rounded-full bg-white py-2 pl-4 pr-2 text-xs font-semibold text-navy shadow-lg shadow-black/20">
        <span
          aria-hidden="true"
          className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
        />
        <span className="lang-ga" lang="en">
          Change the language to English here
        </span>
        <span className="lang-en" lang="gd">
          Atharraich an cànan gu Gàidhlig an seo
        </span>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="flex h-5 w-5 items-center justify-center rounded-full text-navy/50 hover:bg-navy/10 hover:text-navy"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="h-3 w-3"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
