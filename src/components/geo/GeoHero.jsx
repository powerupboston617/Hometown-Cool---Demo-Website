import { business } from "../../data/business";
import Button from "../ui/Button";
import Container from "../ui/Container";
import RegionBadge from "../ui/RegionBadge";

export default function GeoHero({ area, variant }) {
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  if (variant === "C") {
    return (
      <section className="bg-brand-black text-brand-white">
        <Container>
          <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2">
            <div>
              <RegionBadge region={area.region} />
              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {area.heroHeadline}
              </h1>
              <p className="mt-4 text-lg text-gray-300">{area.heroSubhead}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={phoneHref} size="lg">
                  Call {business.phone}
                </Button>
                <Button href="/contact#estimate" variant="secondary" size="lg">
                  Free Estimate
                </Button>
              </div>
            </div>
            <LandmarkPreview area={area} />
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "D") {
    return (
      <section className="bg-brand-red py-12 text-brand-white md:py-16">
        <Container>
          <RegionBadge region={area.region} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {area.heroHeadline}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90">{area.heroSubhead}</p>
          <div className="mt-6">
            <Button href={phoneHref} variant="outline" size="md">
              Call {business.phone}
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  if (variant === "B") {
    return (
      <section className="border-b border-gray-200 bg-brand-white">
        <Container>
          <div className="py-16 md:py-20">
            <div className="max-w-3xl border-l-4 border-brand-red pl-6">
              <RegionBadge region={area.region} />
              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {area.heroHeadline}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{area.heroSubhead}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={phoneHref} size="lg">
                  Call {business.phone}
                </Button>
                <Button href="/contact#estimate" variant="secondary" size="lg">
                  Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Layout A — full-width dark, red accent underline
  return (
    <section className="bg-brand-black text-brand-white">
      <Container>
        <div className="py-16 md:py-24">
          <RegionBadge region={area.region} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="border-b-4 border-brand-red pb-1">{area.heroHeadline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">{area.heroSubhead}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={phoneHref} size="lg">
              Call {business.phone}
            </Button>
            <Button href="/contact#estimate" variant="secondary" size="lg">
              Free Estimate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LandmarkPreview({ area }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-lg">
      <img
        src={area.landmarkImage}
        alt={area.landmarkAlt}
        className="aspect-[4/3] w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
      />
      <div className="hidden flex aspect-[4/3] items-center justify-center bg-gray-900 p-6 text-center">
        <div>
          <p className="text-sm text-gray-400">Landmark image placeholder</p>
          <p className="mt-2 font-medium text-gray-200">{area.landmarkAlt}</p>
        </div>
      </div>
    </div>
  );
}