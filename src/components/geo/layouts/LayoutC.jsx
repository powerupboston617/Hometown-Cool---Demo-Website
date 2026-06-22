import CTABanner from "../../sections/CTABanner";
import Container from "../../ui/Container";
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

// C: split hero > intro/body split > map+services side-by-side > landmark > FAQ > neighbors+related > testimonial > CTA
export default function LayoutC({ area }) {
  return (
    <>
      <GeoHero area={area} variant="C" />
      <GeoBreadcrumb area={area} />
      <GeoIntroBody area={area} split showBadge={false} />
      <section className="bg-surface-muted py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <GeoMapSection area={area} compact bare />
            <GeoServicesHighlight area={area} bare />
          </div>
        </Container>
      </section>
      <LandmarkSection area={area} variant="centered" />
      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <GeoFaq area={area} bare />
            <div className="space-y-8">
              <NeighborsLine area={area} bare />
              <RelatedAreas area={area} bare />
            </div>
          </div>
        </Container>
      </section>
      <GeoTestimonial area={area} />
      <CTABanner
        title={`HVAC in ${area.town} — Call Today`}
        description={`Heating and cooling service tailored to ${area.region} homes.`}
      />
    </>
  );
}