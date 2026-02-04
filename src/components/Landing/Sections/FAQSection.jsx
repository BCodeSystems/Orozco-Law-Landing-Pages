export default function FAQSection({ t }) {
  const faq = t?.faq ?? {};
  const questions = Array.isArray(faq.questions) ? faq.questions : [];

  // If the landing page forgets to provide FAQ content, don’t render the section.
  if (!faq.heading && questions.length === 0) return null;

  const phoneHref =
    faq?.cta?.phoneHref ??
    t?.header?.phoneHref ??
    t?.contact?.phoneHref ??
    "tel:6197361268";

  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand-purple">
          {faq.heading ?? ""}
        </h2>

        {faq.subheading ? (
          <p className="mt-3 max-w-2xl text-brand-gray">{faq.subheading}</p>
        ) : null}

        <div className="mt-8 space-y-4">
          {questions.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-semibold text-brand-purple">{item.q}</span>
                <span className="text-xl text-brand-purple/70 group-open:hidden">
                  {faq.expandClosed ?? "+"}
                </span>
                <span className="hidden text-xl text-brand-purple/70 group-open:inline">
                  {faq.expandOpen ?? "–"}
                </span>
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {faq.cta?.heading ? (
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-purple">
              {faq.cta.heading}
            </h3>

            {faq.cta.body ? (
              <p className="mt-2 text-sm text-brand-gray">{faq.cta.body}</p>
            ) : null}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-xl bg-brand-gold px-6 py-3 text-sm font-semibold text-black shadow-sm"
              >
                {faq.cta.callNow ?? t?.header?.callNow ?? "Call Now"}
              </a>

              <a
                href={faq.cta.sendMessageHref ?? "#lead-form"}
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-purple shadow-sm"
              >
                {faq.cta.sendMessage ?? "Send a Message"}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}