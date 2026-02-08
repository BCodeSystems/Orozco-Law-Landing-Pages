import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";

export const metadata = {
  metadataBase: new URL("https://www.chulavistapersonalinjury.com"),

  title: es?.meta?.title ?? "Orozco Law Firm",
  description:
    es?.meta?.description ??
    "Abogados de lesiones personales. Consulta gratis.",

  openGraph: {
    title: es?.meta?.title ?? "Orozco Law Firm",
    description:
      es?.meta?.description ??
      "Abogados de lesiones personales. Consulta gratis.",
    url: "https://www.chulavistapersonalinjury.com/es",
    siteName: "Orozco Law Firm",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: es?.meta?.title ?? "Orozco Law Firm",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: es?.meta?.title ?? "Orozco Law Firm",
    description:
      es?.meta?.description ??
      "Abogados de lesiones personales. Consulta gratis.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={es} />;
}