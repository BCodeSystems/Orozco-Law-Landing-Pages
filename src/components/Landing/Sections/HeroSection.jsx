import HeroCopy from "@/components/Landing/Sections/HeroCopy";
import PhotoCard from "@/components/Landing/Sections/PhotoCard";

export default function HeroSection({ t, heroHeadline }) {
  return (
    <section className="relative overflow-hidden">
      {/* 
        Background/overlay layer:
        We pull ONLY the overlay up under the fixed header using -top-20,
        without shifting the hero layout/content itself.
      */}
      <div className="pointer-events-none absolute -top-20 inset-x-0 bottom-0 bg-gradient-to-b from-black/45 via-black/30 to-black/10" />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center px-6 py-12 sm:py-16 lg:min-h-[680px] lg:py-28">
      <div className="grid w-full items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="min-w-0">
            <HeroCopy t={t} heroHeadline={heroHeadline} />
          </div>

          {/* Mobile: let the photo feel like the hero visual (full-width + centered). Desktop: keep it constrained. */}
          <div className="mx-auto w-full max-w-none sm:max-w-lg lg:mx-0 lg:max-w-sm lg:justify-self-end">
            <PhotoCard t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
