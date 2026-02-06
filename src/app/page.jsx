import { headers } from "next/headers";
import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";
import { getSiteConfig } from "@/lib/siteConfig";

export default function Page() {
  const host = headers().get("host") || "";
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