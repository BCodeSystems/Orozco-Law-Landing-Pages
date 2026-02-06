import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/Landing/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),

  title: {
    default: "San Diego Injury Lawyer | Orozco Law Firm",
    template: "%s | Orozco Law Firm",
  },

  description: "San Diego personal injury representation by Orozco Law Firm.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Orozco Law Firm",
    description: "San Diego personal injury representation by Orozco Law Firm.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Orozco Law Firm",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Orozco Law Firm",
    description: "San Diego personal injury representation by Orozco Law Firm.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}