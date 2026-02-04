export default function ReviewsSection({ t }) {
  const reviews = t?.reviewsCarousel ?? {};
  const items = Array.isArray(reviews.items) ? reviews.items : [];

  // If a landing page forgets to provide reviews, don’t render the section.
  if (items.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand-purple">
          {reviews.heading ?? ""}
        </h2>

        {reviews.subheading ? (
          <p className="mt-3 max-w-2xl text-brand-gray">{reviews.subheading}</p>
        ) : null}

        {/* Mobile: swipe carousel */}
        <div className="mt-10 md:hidden">
          <div
            className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
            aria-label={reviews.carouselAriaLabel ?? "Client reviews"}
          >
            {items.map((r, idx) => (
              <article
                key={idx}
                className="snap-start shrink-0 w-[88%] sm:w-[70%] rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-brand-gray">
                  {r.text}
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-brand-purple">{r.name}</p>
                  {r.location ? (
                    <p className="text-xs text-brand-gray">{r.location}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {reviews.carouselHint ? (
            <p className="mt-2 text-xs text-brand-gray/80">
              {reviews.carouselHint}
            </p>
          ) : null}
        </div>

        {/* Desktop/tablet: 3-card grid */}
        <div className="mt-10 hidden md:grid gap-6 md:grid-cols-3">
          {items.map((r, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-brand-gray">{r.text}</p>

              <div className="mt-5">
                <p className="font-semibold text-brand-purple">{r.name}</p>
                {r.location ? (
                  <p className="text-xs text-brand-gray">{r.location}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {reviews.privacyNote ? (
          <p className="mt-6 text-xs text-brand-gray/80">{reviews.privacyNote}</p>
        ) : null}
      </div>
    </section>
  );
}