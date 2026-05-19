export const social = [
  { url: "mailto:elvis.yoelkill@gmail.com", name: "mail" },
  { url: "https://github.com/yoelkill97", name: "github" },
  { url: "https://www.linkedin.com/in/elvis-p-101115a6/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
