import Image from "next/image";

export default function AttorneyCard({
  t,
  imageSrc = "/Jose-Orozco.jpg",
  imageAlt,
  name,
}) {
  const alt = imageAlt ?? t?.photo?.alt ?? "Attorney portrait";
  const displayName = name ?? t?.photo?.name ?? "Jose Orozco";

  const description =
    t?.photo?.description ??
    "A respected advocate known for strategic preparation, clear communication, and unwavering client focus.";

  const chips = t?.photo?.chips ?? ["Client-focused", "Results-driven", "Trial-ready"];

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full bg-black">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Caption */}
      <div className="p-6">
        <div className="mb-4 h-1 w-20 rounded-full bg-brand-gold" />

        <h3 className="text-2xl font-semibold text-brand-purple">{displayName}</h3>

        <p className="mt-3 text-sm leading-relaxed text-brand-gray">{description}</p>

        <p className="mt-4 text-sm text-brand-purple">
          {chips.join(" • ")}
        </p>
      </div>
    </div>
  );
}