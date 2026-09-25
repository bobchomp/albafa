"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isPageEnabled } from "@/app/lib/features";
import { pageTitles, type Lang } from "@/app/lib/pageTitles";

export default function DocumentTitle() {
  const pathname = usePathname();

  useEffect(() => {
    const titles = pageTitles[pathname];
    if (!titles) return;
    // Disabled pages render the 404, so leave its title alone.
    if (!isPageEnabled(pathname)) return;

    function desiredTitle() {
      const lang: Lang =
        document.documentElement.dataset.lang === "en" ? "en" : "ga";
      return titles[lang];
    }

    function apply() {
      const title = desiredTitle();
      if (document.title !== title) document.title = title;
    }

    apply();
    window.addEventListener("langchange", apply);

    // Next re-renders the static metadata <title> during client navigation,
    // which can land after this effect — re-apply if it gets overwritten.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      window.removeEventListener("langchange", apply);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
