import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";
import { getSiteConfig } from "@/lib/siteConfig";
import { headers } from "next/headers";

export default function Page() {
  const allHeaders = headers();
  const host =
    typeof allHeaders.get === "function"
      ? allHeaders.get("host") || ""
      : allHeaders["host"] || "";

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