import Image from "next/image";
import LanguageToggle from "@/components/Landing/i18n/LanguageToggle";

export default function LandingHeader({ t }) {
  const callNowLabel = t?.callNow ?? t?.header?.callNow ?? "Call Now";
  const callNowLink = t?.callLink ?? t?.header?.callLink ?? "tel:+16197361268";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Image
          src="/Orozco-Law-Firm-Logo.png"
          alt="Orozco Law Firm Logo"
          width={220}
          height={60}
          priority
          className="h-auto w-[180px] sm:w-[220px]"
        />

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />

          <a
            href={callNowLink}
            className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
          >
            {callNowLabel}
          </a>
        </div>
      </div>
    </header>
  );
}