import Container from "../ui/Container";
import RegionBadge from "../ui/RegionBadge";

function ContentSlot({ label }) {
  return (
    <p className="rounded-lg border border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      Content slot: {label} — add copy in{" "}
      <code className="font-mono text-xs">serviceAreas.js</code> before launch.
    </p>
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
            <div>
              {hasIntro ? (
                <p className="text-xl font-medium leading-relaxed text-brand-black">{area.intro}</p>
              ) : (
                <ContentSlot label="intro" />
              )}
            </div>
            <div>
              {hasBody ? (
                <p className="leading-relaxed text-gray-600">{area.body}</p>
              ) : (
                <ContentSlot label="body" />
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          {showBadge && <RegionBadge region={area.region} />}
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">{area.h1}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
            {hasIntro ? <p className="text-brand-black">{area.intro}</p> : <ContentSlot label="intro" />}
            {hasBody ? <p>{area.body}</p> : <ContentSlot label="body" />}
          </div>
        </div>
      </Container>
    </section>
  );
}