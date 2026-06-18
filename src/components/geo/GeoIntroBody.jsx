import Container from "../ui/Container";
import ContentCard from "../ui/ContentCard";
import RegionBadge from "../ui/RegionBadge";
import SectionHeader from "../layout/SectionHeader";

function ContentSlot({ label }) {
  return (
    <p className="rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      Content slot: {label} — add copy in{" "}
      <code className="font-mono text-xs">serviceAreas.js</code> before launch.
    </p>
  );
}

function ExtendedSections({ sections }) {
  if (!sections?.length) return null;

  return (
    <div className="mt-12">
      <SectionHeader align="left" eyebrow="Local Detail" title="What Homeowners Should Know" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <ContentCard
            key={section.heading}
            title={section.heading}
            accent={index % 2 === 0 ? "red" : "blue"}
            className={section.paragraphs.length > 2 ? "md:col-span-2" : ""}
          >
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </ContentCard>
        ))}
      </div>
    </div>
  );
}

export default function GeoIntroBody({ area, split = false, showBadge = true }) {
  const hasIntro = area.intro?.trim();
  const hasBody = area.body?.trim();

  if (split) {
    return (
      <section className="py-12">
        <Container>
          {showBadge && <RegionBadge region={area.region} />}
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="card-surface p-6 md:p-8">
              {hasIntro ? (
                <p className="text-xl font-medium leading-relaxed text-brand-black">{area.intro}</p>
              ) : (
                <ContentSlot label="intro" />
              )}
            </div>
            <div className="card-surface p-6 md:p-8">
              {hasBody ? (
                <p className="leading-relaxed text-text-muted">{area.body}</p>
              ) : (
                <ContentSlot label="body" />
              )}
            </div>
          </div>
          <ExtendedSections sections={area.sections} />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {showBadge && <RegionBadge region={area.region} />}
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">{area.h1}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="card-surface p-6 md:p-8">
                {hasIntro ? (
                  <p className="text-lg font-medium leading-relaxed text-brand-black">{area.intro}</p>
                ) : (
                  <ContentSlot label="intro" />
                )}
              </div>
              <div className="card-surface p-6 md:p-8">
                {hasBody ? (
                  <p className="leading-relaxed text-text-muted">{area.body}</p>
                ) : (
                  <ContentSlot label="body" />
                )}
              </div>
            </div>
            <ExtendedSections sections={area.sections} />
          </div>
          <aside className="card-surface h-fit p-6 md:p-8 lg:sticky lg:top-24">
            <p className="section-eyebrow mb-2">Service Area</p>
            <h3 className="text-xl font-bold">{area.town}, MA</h3>
            <p className="mt-3 text-sm text-text-muted">{area.county}</p>
            {area.neighbors?.length > 0 && (
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                <span className="font-semibold text-brand-black">Nearby: </span>
                {area.neighbors.join(", ")}
              </p>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}