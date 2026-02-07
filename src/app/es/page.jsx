import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";

// Static metadata for this branch (domain-specific behavior will come from branches/domains, not runtime host detection)
export const metadata = {
  title: es?.meta?.title ?? "Orozco Law Firm",
  description:
    es?.meta?.description ?? "Abogados de lesiones personales. Consulta gratis.",
  openGraph: {
    title: es?.meta?.title ?? "Orozco Law Firm",
    description:
      es?.meta?.description ?? "Abogados de lesiones personales. Consulta gratis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: es?.meta?.title ?? "Orozco Law Firm",
    description:
      es?.meta?.description ?? "Abogados de lesiones personales. Consulta gratis.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={es} />;
}