import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";

// Static metadata for this branch (domain-specific behavior will come from branches/domains, not runtime host detection)
export const metadata = {
  title: en?.meta?.title ?? "Orozco Law Firm",
  description:
    en?.meta?.description ?? "Personal injury attorneys. Free consultation.",
  openGraph: {
    title: en?.meta?.title ?? "Orozco Law Firm",
    description:
      en?.meta?.description ?? "Personal injury attorneys. Free consultation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
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
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <LandingTemplate t={en} />;
}