import FAQAccordion from "../sections/FAQAccordion";
import Container from "../ui/Container";

export default function GeoFaq({ area, inline = false, bare = false }) {
  if (!area.faq?.length || !area.faq[0]?.q) {
    return (
      <section className="py-12">
        <Container>
          <p className="rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Content slot: FAQ — add questions in{" "}
            <code className="font-mono text-xs">serviceAreas.js</code> before launch.
          </p>
        </Container>
      </section>
    );
  }

  const inlineContent = (
    <>
      <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {area.faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-gray-200 bg-brand-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer list-none font-semibold marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-brand-red group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );

  const accordionContent = (
    <div className="mx-auto max-w-3xl">
      <FAQAccordion items={area.faq} heading={`${area.town} HVAC FAQ`} />
    </div>
  );

  if (inline) {
    if (bare) return inlineContent;
    return (
      <section className="py-12">
        <Container>{inlineContent}</Container>
      </section>
    );
  }

  if (bare) return accordionContent;

  return (
    <section className="py-12">
      <Container>{accordionContent}</Container>
    </section>
  );
}