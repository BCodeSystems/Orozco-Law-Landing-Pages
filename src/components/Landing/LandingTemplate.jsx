import LandingShell from "@/components/Landing/LandingShell";
import LandingHeader from "@/components/Landing/LandingHeader";

import HeroSection from "@/components/Landing/Sections/HeroSection";
import FormCard from "@/components/Landing/Sections/FormCard";
import LeadFormSection from "@/components/Landing/Sections/LeadFormSection";
import ReviewsSection from "@/components/Landing/Sections/ReviewsSection";
import FAQSection from "@/components/Landing/Sections/FAQSection";
import OfficePhotoSection from "@/components/Landing/Sections/OfficePhotoSection";
import FooterSection from "@/components/Landing/Sections/FooterSection";

export default function LandingTemplate({ t, config, heroHeadline }) {
  const resolvedT = t ?? config?.t;
  const resolvedHeroHeadline = heroHeadline ?? config?.heroHeadline;

  return (
    <LandingShell>
      <LandingHeader t={resolvedT} />
      <HeroSection t={resolvedT} heroHeadline={resolvedHeroHeadline} />

      <section id="lead-form" className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <FormCard t={resolvedT}>
            <LeadFormSection t={resolvedT} />
          </FormCard>
        </div>
      </section>

      <main className="space-y-10">
        <section className="pt-4">
          <ReviewsSection t={resolvedT} />
        </section>

        <section className="pt-2">
          <FAQSection t={resolvedT} />
        </section>

        <section className="pt-6">
          <OfficePhotoSection t={resolvedT} />
        </section>
        {/* other sections */}
      </main>

      <FooterSection t={resolvedT} />
    </LandingShell>
  );
}