import { business } from "../data/business";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import ContactInfo from "../components/sections/ContactInfo";
import ImageGallery from "../components/sections/ImageGallery";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function MediaPage() {
  return (
    <>
      <PageHead
        title="Media"
        description={`Media inquiries for ${business.name}. Contact our Plymouth-based HVAC team.`}
      />

      <PageHero
        title="Media"
        subtitle="Project photos and HVAC work from Hometown Cooling & Heating across Plymouth County and surrounding communities."
        dark={false}
        imageSrc={siteImages.coolingService}
        imageAlt="Professional air conditioning installation"
      />

      <Section>
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Work</h2>
          <ImageGallery images={siteImages.gallery} altPrefix="Hometown Cooling and Heating project" />

          <div className="mx-auto mt-16 max-w-xl">
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  );
}