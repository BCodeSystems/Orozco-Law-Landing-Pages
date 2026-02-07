import AccidentTypes from "@/components/Landing/Sections/AccidentTypes";

export default function HeroCopy({ t, heroHeadline }) {
  const hero = t?.hero ?? {};

  return (
    <div className="max-w-xl">
      {/* Kicker */}
      <div className="inline-flex items-center rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-black shadow-sm">
        {hero.kicker ?? "Trusted Legal Representation"}
      </div>

      {/* Headline */}
      <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
        {heroHeadline ?? hero.headline ?? ""}
      </h1>

      {/* Subheadline (NO hardcoded English) */}
      <p className="mt-6 max-w-lg text-base leading-relaxed text-white/90">
        {hero.subheadline ?? ""}
      </p>

      {/* Accident types carousel/band */}
      <AccidentTypes t={t} />

      {/* CTA */}
      <div className="mt-10">
        <a
          href="#lead-form"
          className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-7 py-4 text-base font-semibold text-black shadow-md transition hover:shadow-lg"
        >
          {hero.ctaText ?? "Get Your Free Consultation"}
        </a>
      </div>
    </div>
  );
}