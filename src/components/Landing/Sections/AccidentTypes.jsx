// src/components/Landing/Sections/AccidentTypes.jsx

export default function AccidentTypes({ t }) {
  const hero = t?.hero ?? {};
  const title = hero.typesTitle ?? "Types of Cases We Handle";
  const items = Array.isArray(hero.types) ? hero.types : [];

  return (
    <div className="mt-10">
      <p className="text-sm font-semibold text-brand-purple">{title}</p>

      {/* Horizontal scroll on mobile, wrap on desktop */}
      <div className="-mx-4 mt-3 overflow-x-auto px-4">
        <div className="flex w-max gap-2 sm:w-full sm:flex-wrap">
          {items.map((label, idx) => (
            <span
              key={idx}
              className="whitespace-nowrap rounded-full bg-white/65 px-3 py-1 text-sm font-medium text-brand-purple backdrop-blur"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-2 text-xs text-brand-gray sm:hidden">Swipe to see more →</p>
    </div>
  );
}