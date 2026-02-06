import { headers } from "next/headers";
import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";
import { getSiteConfig } from "@/lib/siteConfig";

export default function Page() {
  const host = headers().get("host") || "";
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