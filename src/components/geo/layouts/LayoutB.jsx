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

// B: hero > landmark > body > services > map > FAQ > neighbors > related > testimonial > CTA
export default function LayoutB({ area }) {
  return (
    <>
      <GeoHero area={area} variant="B" />
      <GeoBreadcrumb area={area} />
      <LandmarkSection area={area} variant="fullBleed" />
      <GeoIntroBody area={area} />
      <section className="bg-gray-50 py-12">
        <GeoServicesHighlight area={area} horizontal />
      </section>
      <GeoMapSection area={area} />
      <GeoFaq area={area} />
      <NeighborsLine area={area} />
      <RelatedAreas area={area} />
      <GeoTestimonial area={area} />
      <CTABanner
        title={`Schedule Service in ${area.town}`}
        description={`From ${area.landmarkName} to every neighborhood in town — we're here for your HVAC needs.`}
      />
    </>
  );
}