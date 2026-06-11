import CTABanner from "../../sections/CTABanner";
import GeoBreadcrumb from "../GeoBreadcrumb";
import GeoFaq from "../GeoFaq";
import GeoHero from "../GeoHero";
import GeoIntroBody from "../GeoIntroBody";
import GeoMapSection from "../GeoMapSection";
import GeoServicesHighlight from "../GeoServicesHighlight";
import GeoTestimonial from "../GeoTestimonial";
import LandmarkSection from "../LandmarkSection";
import NeighborsLine from "../NeighborsLine";
import RelatedAreas from "../RelatedAreas";

// D: compact hero > services > body > FAQ (inline) > landmark > map > neighbors > related > testimonial > CTA
export default function LayoutD({ area }) {
  return (
    <>
      <GeoHero area={area} variant="D" />
      <GeoBreadcrumb area={area} />
      <section className="py-12">
        <GeoServicesHighlight area={area} />
      </section>
      <section className="bg-gray-50">
        <GeoIntroBody area={area} showBadge={false} />
      </section>
      <GeoFaq area={area} inline />
      <LandmarkSection area={area} variant="default" />
      <GeoMapSection area={area} compact />
      <NeighborsLine area={area} />
      <RelatedAreas area={area} chips />
      <GeoTestimonial area={area} />
      <CTABanner
        title={`Get a Free Estimate in ${area.town}`}
        description={`Professional heating and cooling for ${area.town} and ${area.county}.`}
      />
    </>
  );
}