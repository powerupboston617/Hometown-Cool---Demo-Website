import { Link } from "react-router-dom";
import { business } from "../data/business";
import { siteImages } from "../data/siteImages";
import { coolingServices, heatingServices } from "../data/servicesContent";
import PageHead from "../components/layout/PageHead";
import CTABanner from "../components/sections/CTABanner";
import ContactForm from "../components/sections/ContactForm";
import FeatureBlock from "../components/sections/FeatureBlock";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import ServiceCard from "../components/ui/ServiceCard";

function ServiceList({ items, heading }) {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">{heading}</h2>
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {items.map((item) => (
          <ServiceCard
            key={item.slug}
            title={item.title}
            description={item.description}
            slug={item.slug}
            titleClassName="text-xl font-bold"
            descriptionClassName="mt-3 flex-grow text-gray-600"
          />
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHead
        title="HVAC Services"
        description={`Comprehensive heating and cooling services from ${business.name}. Installation, repair, maintenance, and emergency service in Plymouth and surrounding areas.`}
      />

      <PageHero
        title="Our Services"
        subtitle={`Stay warm and comfortable all winter long with ${business.name}'s comprehensive heating services. We offer a full range of heating and cooling solutions designed to meet your specific needs.`}
        primaryCta="Schedule a Free Inspection"
        primaryCtaHref="#estimate"
        secondaryCta={`Call ${business.phone}`}
        secondaryCtaHref={`tel:${business.phone.replace(/\D/g, "")}`}
        imageSrc={siteImages.heroServices}
        imageAlt="Comprehensive heating and cooling equipment in a residential mechanical room"
      />

      <Section>
        <Container>
          <ServiceList items={heatingServices} heading="Our Heating Services Include" />
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <FeatureBlock
            title="Ductless Mini-Splits"
            description="Perfect for older homes, additions, and spaces without ductwork. We install efficient ductless systems that deliver year-round comfort with minimal disruption."
            imageAlt="Ductless mini-split HVAC system installation"
            imageSrc={siteImages.ductlessMiniSplit}
            accent="blue"
          />
          <div className="mt-8 text-center">
            <Link
              to="/services/ductless-mini-splits"
              className="text-lg font-semibold text-brand-blue hover:text-brand-red"
            >
              Learn more about ductless mini-splits →
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ServiceList items={coolingServices} heading="Cooling Services" />
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <FeatureBlock
          title="Seasonal Maintenance"
          description="Regular tune-ups keep your system efficient and help prevent costly breakdowns. We offer maintenance plans tailored to your schedule and equipment."
          imageAlt="HVAC technician performing seasonal system maintenance"
          imageSrc={siteImages.maintenanceService}
          reverse
          accent="red"
        />
      </Section>

      <CTABanner
        title="Schedule a Free Inspection"
        description="Not sure what your system needs? Our Plymouth-based team will assess your heating or cooling setup and recommend the right next step."
      />

      <Section>
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