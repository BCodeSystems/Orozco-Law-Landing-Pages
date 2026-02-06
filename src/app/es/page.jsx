import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";
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
    ...es,
    hero: {
      ...es.hero,
      headline: site.heroH1.es,
    },
  };

  return <LandingTemplate t={t} />;
}