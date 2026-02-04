import FormCard from "@/components/Landing/Sections/FormCard";

export default function LeadFormBandSection({ t }) {
  return (
    <section
      id="lead-form"
      className="w-full bg-white/60 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto -mt-10 max-w-4xl">
  <FormCard t={t} />
</div>
      </div>
    </section>
  );
}