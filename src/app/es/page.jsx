import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";

export const metadata = {
  metadataBase: new URL("https://www.southbayinjuryattorney.com"),
  title: es?.meta?.title,
  description: es?.meta?.description,
  openGraph: {
    title: es?.meta?.title,
    description: es?.meta?.description,
    url: "https://www.southbayinjuryattorney.com/es",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: es?.meta?.title ?? "Orozco Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: es?.meta?.title,
    description: es?.meta?.description,
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={es} />;
}