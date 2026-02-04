import LandingShell from "@/components/Landing/LandingShell";
import LandingHeader from "@/components/Landing/LandingHeader";

import HeroSection from "@/components/Landing/Sections/HeroSection";
import FormCard from "@/components/Landing/Sections/FormCard";
import LeadFormSection from "@/components/Landing/Sections/LeadFormSection";
import ReviewsSection from "@/components/Landing/Sections/ReviewsSection";
import FAQSection from "@/components/Landing/Sections/FAQSection";
import OfficePhotoSection from "@/components/Landing/Sections/OfficePhotoSection";
import FooterSection from "@/components/Landing/Sections/FooterSection";


export default function LandingTemplate({ config }) {
  return (
    <LandingShell>
      <LandingHeader t={config.t} />
      <HeroSection t={config.t} />
      <section id="lead-form" className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <FormCard t={config.t}>
            <LeadFormSection t={config.t} />
          </FormCard>
        </div>
      </section>

      <main className="space-y-10">
        <section className="pt-4">
          <ReviewsSection t={config.t} />
        </section>

        <section className="pt-2">
          <FAQSection t={config.t} />
        </section>

        <section className="pt-6">
          <OfficePhotoSection t={config.t} />
        </section>
        {/* other sections */}
      </main>

      <FooterSection t={config.t} />
    </LandingShell>
  );
}