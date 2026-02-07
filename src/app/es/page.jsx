import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";
import { getSiteConfig } from "@/lib/siteConfig";
import { headers } from "next/headers";

export async function generateMetadata() {
  const h = headers();
  const rawHost =
    (typeof h.get === "function" && (h.get("x-forwarded-host") || h.get("host"))) ||
    h["x-forwarded-host"] ||
    h["host"] ||
    "";

  const host = String(rawHost).split(",")[0].trim().split(":")[0];
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
  const h = headers();
  const rawHost =
    (typeof h.get === "function" && (h.get("x-forwarded-host") || h.get("host"))) ||
    h["x-forwarded-host"] ||
    h["host"] ||
    "";

  const host = String(rawHost).split(",")[0].trim().split(":")[0];

  const site = getSiteConfig(host);

  const t = {
    ...es,
    hero: {
      ...es.hero,
      headline: site?.heroH1?.es ?? es.hero.headline,
    },
  };

  return <LandingTemplate t={t} />;
}