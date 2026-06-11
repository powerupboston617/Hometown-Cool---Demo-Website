import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import CTABanner from "../components/sections/CTABanner";
import ContactForm from "../components/sections/ContactForm";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import Section from "../components/ui/Section";

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About Us"
        description="Learn about Hometown Cooling & Heating's mission to deliver exceptional HVAC service to Plymouth and surrounding communities."
      />

      <PageHero
        title="About Us"
        subtitle="Offering the most professional HVAC services to Plymouth and the surrounding South Shore, South Coast, and Cape communities."
        primaryCta="Schedule a Free Inspection"
        primaryCtaHref="#estimate"
        imageSrc={siteImages.heroAbout}
        imageAlt="Professional HVAC tools and equipment at Hometown Cooling and Heating"
      />

      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Mission &amp; Values</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                At Hometown Cooling &amp; Heating, our mission is to provide exceptional heating,
                ventilation, and air conditioning services that ensure the comfort, health, and
                satisfaction of our customers. We are committed to delivering innovative,
                energy-efficient solutions and top-quality workmanship through our team of skilled
                professionals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our goal is to build lasting relationships with our clients by exceeding their
                expectations, offering reliable and timely service, and maintaining the highest
                standards of integrity and excellence in everything we do. We strive to create a
                comfortable and sustainable indoor environment for homes and businesses alike,
                contributing positively to the Plymouth community and the surrounding areas.
              </p>
            </div>
            <ResponsiveImage
              src={siteImages.maintenanceService}
              alt="HVAC technician performing professional system maintenance"
              className="shadow-md"
            />
          </div>
        </Container>
      </Section>

      <CTABanner />

      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-xl">
            <ContactForm
              title="Schedule a Free Inspection"
              submitLabel="Request Inspection"
              showInspectionOption
            />
          </div>
        </Container>
      </Section>
    </>
  );
}