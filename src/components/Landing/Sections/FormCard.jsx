export default function FormCard({ t, children }) {
  const formCard = t?.formCard ?? {};

  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-brand-purple">
          {formCard.headline ?? ""}
        </h2>
        {formCard.subheadline ? (
          <p className="mt-2 text-sm text-brand-gray">{formCard.subheadline}</p>
        ) : null}
      </div>

      {children}
    </div>
  );
}