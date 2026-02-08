import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";

// Static metadata for this branch (domain-specific behavior will come from branches/domains, not runtime host detection)
export const metadata = {
  // Helps Next generate absolute OG URLs consistently
  metadataBase: new URL("https://www.chulavistapersonalinjury.com"),

  title: en?.meta?.title ?? "Orozco Law Firm",
  description:
    en?.meta?.description ?? "Personal injury attorneys. Free consultation.",

  openGraph: {
    title: en?.meta?.title ?? "Orozco Law Firm",
    description:
      en?.meta?.description ?? "Personal injury attorneys. Free consultation.",
    url: "https://www.chulavistapersonalinjury.com/",
    siteName: "Orozco Law Firm",
    images: [
      {
        url: "https://www.chulavistapersonalinjury.com/og-image.png",
        width: 1200,
        height: 630,
        alt: en?.meta?.title ?? "Orozco Law Firm",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: en?.meta?.title ?? "Orozco Law Firm",
    description:
      en?.meta?.description ?? "Personal injury attorneys. Free consultation.",
    images: ["https://www.chulavistapersonalinjury.com/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={en} />;
}