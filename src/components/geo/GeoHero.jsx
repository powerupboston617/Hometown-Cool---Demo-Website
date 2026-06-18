import { business } from "../../data/business";
import { siteImages } from "../../data/siteImages";
import FullWidthHero from "../sections/FullWidthHero";
import Button from "../ui/Button";
import RegionBadge from "../ui/RegionBadge";

export default function GeoHero({ area, variant }) {
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;
  const overlay = variant === "D" ? "red" : "default";

  const headline =
    variant === "A" ? (
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        <span className="border-b-4 border-brand-red pb-1">{area.heroHeadline}</span>
      </h1>
    ) : (
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{area.heroHeadline}</h1>
    );

  return (
    <FullWidthHero
      imageSrc={area.landmarkImage || siteImages.heroServiceAreas}
      fallbackImageSrc={siteImages.heroServiceAreas}
      imageAlt={area.landmarkAlt}
      overlay={overlay}
    >
      <div className="motion-fade-in max-w-3xl">
        <RegionBadge region={area.region} className="bg-white/15 text-white" />
        <div className="mt-4">{headline}</div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-200">{area.heroSubhead}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href={phoneHref} size="lg">
            Call {business.phone}
          </Button>
          <Button href="/contact#estimate" variant="secondary" size="lg">
            Free Estimate
          </Button>
        </div>
      </div>
    </FullWidthHero>
  );
}