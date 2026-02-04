"use client";

import LandingShell from "@/components/Landing/LandingShell";
import HeroSection from "@/components/Landing/Sections/HeroSection";
import ReviewsSection from "@/components/Landing/Sections/ReviewsSection";
import FAQSection from "@/components/Landing/Sections/FAQSection";
import OfficePhotoSection from "@/components/Landing/Sections/OfficePhotoSection";
import FooterSection from "@/components/Landing/Sections/FooterSection";
import LanguageToggle from "@/components/Landing/i18n/LanguageToggle";
import { useLanguage } from "@/components/Landing/i18n/LanguageProvider";

export default function HomeClient() {
  const { t } = useLanguage();

  return (
    <LandingShell>
      <LanguageToggle />

      <HeroSection t={t} />

      <div className="mt-14 space-y-14">
        <ReviewsSection t={t} />
        <FAQSection t={t} />
        <OfficePhotoSection t={t} />
      </div>

      <div className="mt-14 border-t border-gray-200 pt-14">
        <FooterSection t={t} />
      </div>
    </LandingShell>
  );
}