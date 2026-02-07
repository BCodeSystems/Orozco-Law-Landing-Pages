export const dynamic = "force-dynamic";
export const revalidate = 0;

import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";
import { getSiteConfig } from "@/lib/siteConfig";
import { headers } from "next/headers";

function getHostFromHeaders() {
  const h = headers();

  const read = (key) => {
    if (h && typeof h.get === "function") return h.get(key) || "";
    if (h && typeof h === "object") return h[key] || h[key?.toLowerCase?.()] || "";
    return "";
  };

  const rawHost =
    read("x-site-host") ||
    read("x-forwarded-host") ||
    read("host") ||
    process.env.NEXT_PUBLIC_SITE_HOST ||
    process.env.VERCEL_URL ||
    "";

  const host = String(rawHost)
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .replace(/^www\./, "");

  return { rawHost, host };
}

export async function generateMetadata() {
  const { host } = getHostFromHeaders();
  const site = getSiteConfig(host);

  const title = site?.meta?.es?.title ?? es.meta?.title ?? "Orozco Law Firm";
  const description =
    site?.meta?.es?.description ??
    es.meta?.description ??
    "Abogados de lesiones personales. Consulta gratis.";

  const baseUrl = new URL(`https://${host || "example.com"}`);
  const ogImage = site?.ogImage ?? "/og-image.png";

  return {
    title,
    description,
    metadataBase: baseUrl,
    openGraph: {
      title,
      description,
      url: new URL(`${baseUrl.origin}/es`),
      siteName: "Orozco Law Firm",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page() {
  const { rawHost, host } = getHostFromHeaders();

  console.log("[ES] rawHost:", rawHost, "normalized host:", host);

  const site = getSiteConfig(host);

  console.log("[ES] site.heroH1:", site?.heroH1);

  const t = {
    ...es,
    hero: {
      ...es.hero,
      headline: site?.heroH1?.es ?? es.hero.headline,
    },
  };

  return <LandingTemplate t={t} />;
}