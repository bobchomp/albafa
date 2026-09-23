export type Lang = "ga" | "en";

export const pageTitles: Record<string, Record<Lang, string>> = {
  "/": {
    ga: "Alba FA | Guth na Gàidhlig ann am Ball-coise",
    en: "Alba FA | A Voice for Gaelic in Football",
  },
  "/teams/mens-team": {
    ga: "Alba FA | Sgioba Nam Fear",
    en: "Alba FA | Mens Team",
  },
  "/teams/community-clubs": {
    ga: "Alba FA | Cluban Coimhearsnachd",
    en: "Alba FA | Community Clubs",
  },
  "/support-us/club-lotto": {
    ga: "Alba FA | Lotto a’ Chlub",
    en: "Alba FA | Club Lotto",
  },
  "/support-us/donate": {
    ga: "Alba FA | Dèan Tabhartas",
    en: "Alba FA | Donate",
  },
};
