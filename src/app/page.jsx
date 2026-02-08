import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";

export const metadata = {
  metadataBase: new URL("https://www.southbayinjuryattorney.com"),
  title: en?.meta?.title,
  description: en?.meta?.description,
  openGraph: {
    title: en?.meta?.title,
    description: en?.meta?.description,
    url: "https://www.southbayinjuryattorney.com/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: en?.meta?.title ?? "Orozco Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: en?.meta?.title,
    description: en?.meta?.description,
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={en} />;
}