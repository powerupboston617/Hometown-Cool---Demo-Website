import { Link } from "react-router-dom";
import { business } from "../data/business";
import { servicePages } from "../data/servicePages";
import { siteImages } from "../data/siteImages";
import { coolingServices, heatingServices } from "../data/servicesContent";
import { buildBreadcrumbSchema, buildItemListSchema } from "../utils/siteSchema";
import PageHead from "../components/layout/PageHead";
import SectionHeader from "../components/layout/SectionHeader";
import CTABanner from "../components/sections/CTABanner";
import FeatureBlock from "../components/sections/FeatureBlock";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import ContentCard from "../components/ui/ContentCard";
import Section from "../components/ui/Section";
import ServiceCard from "../components/ui/ServiceCard";

function ServiceCategoryGrid({ items, heading, eyebrow, accent = "red" }) {
  return (
    <div>
      <SectionHeader align="left" eyebrow={eyebrow} title={heading} />
      <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ServiceCard
            key={item.slug}
            title={item.title}
            description={item.description}
            slug={item.slug}
            accent={accent}
            titleClassName="text-xl font-bold"
            descriptionClassName="mt-3 flex-grow text-text-muted"
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
        title="HVAC Services | Plymouth, MA"
        description={`Comprehensive heating and cooling services from ${business.name}. Installation, repair, maintenance, and emergency service in Plymouth and surrounding areas.`}
        schemas={[
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ],
            business
          ),
          buildItemListSchema(
            "HVAC Services",
            servicePages.map((service) => ({
              name: service.title,
              path: `/services/${service.slug}`,
            })),
            business
          ),
        ].filter(Boolean)}
        ogImage={siteImages.heroServices}
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

      {/* All services overview grid */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Full Directory"
            title="Heating, Cooling &amp; Comfort Services"
            description="Nine specialized services covering installation, repair, maintenance, emergency response, and efficiency upgrades — all from our Plymouth headquarters."
          />
          <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.intro}
                slug={service.slug}
                titleClassName="text-lg font-bold"
                descriptionClassName="mt-2 flex-grow text-sm text-text-muted line-clamp-4"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Heating category */}
      <Section className="bg-surface-muted">
        <Container>
          <ServiceCategoryGrid
            eyebrow="Heating"
            heading="Our Heating Services Include"
            items={heatingServices}
          />
        </Container>
      </Section>

      {/* Ductless spotlight */}
      <Section>
        <Container>
          <FeatureBlock
            title="Ductless Mini-Splits"
            description="Perfect for older homes, additions, and spaces without ductwork. We install efficient ductless systems that deliver year-round comfort with minimal disruption."
            imageAlt="Ductless mini-split HVAC system installation"
            imageSrc={siteImages.ductlessMiniSplit}
            accent="blue"
            imageHoverable
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

      {/* Cooling category */}
      <Section className="bg-gray-50">
        <Container>
          <ServiceCategoryGrid
            eyebrow="Cooling"
            heading="Cooling Services"
            items={coolingServices}
            accent="blue"
          />
        </Container>
      </Section>

      {/* Efficiency & IAQ cards */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Beyond Temperature"
            title="Efficiency, Air Quality &amp; Emergency Service"
            description="Modern comfort isn't just about heating and cooling — it's about efficiency, healthy air, and knowing someone will answer when the heat goes out."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ContentCard title="Energy-Efficient Upgrades" accent="blue" hoverable>
              <p>
                Right-sized heat pumps, high-efficiency furnaces, and smart thermostat integration
                can lower operating costs while improving comfort. We help you understand which
                upgrades make sense for your home and budget.
              </p>
              <Link
                to="/services/energy-efficient-upgrades"
                className="mt-4 inline-block font-semibold text-brand-blue hover:text-brand-red"
              >
                Learn about upgrades →
              </Link>
            </ContentCard>
            <ContentCard title="Indoor Air Quality" accent="red" hoverable>
              <p>
                Filtration upgrades, ventilation improvements, and humidity control address the
                dust, pollen, and stale air that temperature alone can't fix — especially in tightly
                sealed South Shore homes.
              </p>
              <Link
                to="/services/indoor-air-quality-solutions"
                className="mt-4 inline-block font-semibold text-brand-blue hover:text-brand-red"
              >
                Explore IAQ solutions →
              </Link>
            </ContentCard>
            <ContentCard title="Emergency Heating" accent="red" hoverable>
              <p>
                No heat on a freezing night demands a fast response. Our Plymouth-based team works
                to restore warmth as quickly as possible when furnaces fail, ignitors break, or
                heat pumps stop running.
              </p>
              <Link
                to="/services/emergency-heating-services"
                className="mt-4 inline-block font-semibold text-brand-blue hover:text-brand-red"
              >
                Emergency heating info →
              </Link>
            </ContentCard>
          </div>
        </Container>
      </Section>

      {/* Maintenance spotlight */}
      <Section className="bg-gray-50">
        <Container>
          <FeatureBlock
            title="Seasonal Maintenance"
            description="Regular tune-ups keep your system efficient and help prevent costly breakdowns. We offer maintenance plans tailored to your schedule and equipment."
            imageAlt="HVAC technician performing seasonal system maintenance"
            imageSrc={siteImages.maintenanceService}
            reverse
            accent="red"
            imageHoverable
          />
        </Container>
      </Section>

      <CTABanner
        title="Schedule a Free Inspection"
        description="Not sure what your system needs? Our Plymouth-based team will assess your heating or cooling setup and recommend the right next step."
      />
    </>
  );
}