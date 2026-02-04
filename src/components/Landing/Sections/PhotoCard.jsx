import Image from "next/image";

export default function PhotoCard({ t }) {
  const photo = t?.photoCard ?? t?.hero?.photoCard ?? {};

  const name = photo.name ?? "";
  const description = photo.description ?? "";
  const chips = Array.isArray(photo.chips) ? photo.chips : [];
  const alt = photo.alt ?? "";

  return (
    <div className="min-w-0 w-full max-w-full overflow-hidden rounded-2xl bg-white/90 shadow-lg ring-1 ring-black/10">
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src="/Jose-Orozco.jpg"
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 420px, 92vw"
          className="object-cover object-top"
        />
      </div>

      <div className="bg-white/80 px-5 py-5 text-left backdrop-blur-sm">
        <div className="h-[3px] w-20 rounded-full bg-brand-gold" />

        <p className="mt-4 break-words text-xl font-bold text-brand-purple">{name}</p>

        <p className="mt-2 break-words text-sm text-brand-gray">{description}</p>

        {chips.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-brand-purple/5 px-3 py-1 text-xs font-medium text-brand-purple/90"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}