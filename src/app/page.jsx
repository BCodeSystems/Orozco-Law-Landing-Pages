export const dynamic = "force-dynamic";
export const revalidate = 0;
import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";
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

  const title = site?.meta?.en?.title ?? "Orozco Law Firm";
  const description =
    site?.meta?.en?.description ??
    "Personal injury attorneys. Free consultation.";

  const baseUrl = new URL(`https://${host || "example.com"}`);
  const ogImage = site?.ogImage ?? "/og-image.png";

  return {
    title,
    description,
    metadataBase: baseUrl,
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Orozco Law Firm",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
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
    ...en,
    hero: {
      ...en.hero,
      headline: site.heroH1.en,
    },
  };

  return <LandingTemplate t={t} />;
}