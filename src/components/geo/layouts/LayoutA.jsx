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

// A: hero > map > services > landmark > body > neighbors > testimonial > FAQ > related > CTA
export default function LayoutA({ area }) {
  return (
    <>
      <GeoHero area={area} variant="A" />
      <GeoBreadcrumb area={area} />
      <GeoMapSection area={area} />
      <section className="border-t-4 border-brand-blue py-12">
        <GeoServicesHighlight area={area} />
      </section>
      <LandmarkSection area={area} variant="sideBySide" />
      <GeoIntroBody area={area} showBadge={false} />
      <NeighborsLine area={area} />
      <GeoTestimonial area={area} />
      <GeoFaq area={area} />
      <RelatedAreas area={area} />
      <CTABanner
        title={`Need HVAC Service in ${area.town}?`}
        description={`Call our Plymouth-based team for heating and cooling in ${area.town} and nearby towns.`}
      />
    </>
  );
}