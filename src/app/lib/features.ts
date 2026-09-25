// Page switches. Flip one to true to enable that page and every link to it.
// While false, the links do nothing and the page returns a 404.

// Club Lotto and Donate (/support-us/*).
export const SUPPORT_PAGES_ENABLED = false;

// /programmes
export const PROGRAMMES_PAGE_ENABLED = false;

// /events
export const EVENTS_PAGE_ENABLED = false;

export function isPageEnabled(pathname: string) {
  if (pathname.startsWith("/support-us/")) return SUPPORT_PAGES_ENABLED;
  if (pathname === "/programmes") return PROGRAMMES_PAGE_ENABLED;
  if (pathname === "/events") return EVENTS_PAGE_ENABLED;
  return true;
}
