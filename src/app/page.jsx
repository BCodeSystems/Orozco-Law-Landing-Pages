import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";
import { getSiteConfig } from "@/lib/siteConfig";
import { headers } from "next/headers";

export default function Page() {
  const h = headers();
  const rawHost =
    (typeof h.get === "function" && (h.get("x-forwarded-host") || h.get("host"))) ||
    h["x-forwarded-host"] ||
    h["host"] ||
    "";

  const host = String(rawHost).split(",")[0].trim().split(":")[0];

  const site = getSiteConfig(host);

  const t = {
    ...en,
    hero: {
      ...en.hero,
      headline: site.heroH1.en,
    },
  };

  return <LandingTemplate t={t} />;
}