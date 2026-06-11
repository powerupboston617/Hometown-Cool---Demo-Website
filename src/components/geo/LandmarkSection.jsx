import Container from "../ui/Container";

export default function LandmarkSection({ area, variant = "default" }) {
  if (variant === "fullBleed") {
    return (
      <section className="relative">
        <LandmarkImage area={area} className="aspect-[21/9] w-full object-cover" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-black/80 to-transparent">
          <Container>
            <p className="py-8 text-lg font-medium text-brand-white">
              {area.landmarkName} · {area.town}, MA
            </p>
          </Container>
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section className="py-12">
        <Container>
          <figure className="mx-auto max-w-3xl text-center">
            <LandmarkImage area={area} className="aspect-[16/10] w-full rounded-2xl object-cover shadow-md" />
            <figcaption className="mt-4 text-sm text-gray-500">
              {area.landmarkName} · {area.landmarkAlt}
            </figcaption>
          </figure>
        </Container>
      </section>
    );
  }

  if (variant === "sideBySide") {
    return (
      <section className="py-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <LandmarkImage area={area} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" />
            <div>
              <h2 className="text-2xl font-bold">{area.landmarkName}</h2>
              <p className="mt-3 text-gray-600">
                A local landmark in {area.town} — we know the homes and HVAC challenges in this
                part of {area.county}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // default — image with caption below (Layout D)
  return (
    <section className="py-12">
      <Container>
        <figure>
          <LandmarkImage area={area} className="aspect-[16/9] w-full rounded-2xl object-cover shadow-md" />
          <figcaption className="mt-3 text-sm text-gray-500">{area.landmarkAlt}</figcaption>
        </figure>
      </Container>
    </section>
  );
}

function LandmarkImage({ area, className }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-100">
      <img
        src={area.landmarkImage}
        alt={area.landmarkAlt}
        className={className}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
      />
      <div className="hidden flex min-h-[200px] items-center justify-center p-8 text-center">
        <div>
          <p className="text-sm font-medium text-gray-500">Landmark image placeholder</p>
          <p className="mt-2 text-gray-600">{area.landmarkAlt}</p>
          <p className="mt-1 text-xs text-gray-400">
            Add photo at <code className="font-mono">{area.landmarkImage}</code>
          </p>
        </div>
      </div>
    </div>
  );
}