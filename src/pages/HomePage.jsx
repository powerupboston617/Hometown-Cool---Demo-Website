import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import CTABanner from "../components/sections/CTABanner";
import FeatureBlock from "../components/sections/FeatureBlock";
import ServicesGrid from "../components/sections/ServicesGrid";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import Section from "../components/ui/Section";

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Hometown Cooling & Heating | Heat Pump | Mass Save | Plymouth, MA"
        description="Top-notch HVAC solutions for Plymouth and surrounding areas. Heating, cooling, installation, repair, and maintenance from a local team based on Hedges Pond Road."
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white">
        <Container>
          <div className="grid items-center gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Plymouth, MA &amp; Surrounding Areas
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Top-Notch HVAC Solutions for Your Hometown
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                At Hometown Cooling &amp; Heating, we pride ourselves on delivering reliable
                heating and cooling service for Plymouth and surrounding areas.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#estimate" size="lg">
                  Get a Free Estimate
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  View Services
                </Button>
              </div>
            </div>
            <ResponsiveImage
              src={siteImages.heroHomepage}
              alt="Ductless heat pump installed on a coastal New England home in the Plymouth area"
              aspectClass="aspect-square lg:aspect-[4/5]"
              className="shadow-lg shadow-black/40"
            />
          </div>
        </Container>
      </section>

      {/* Services intro */}
      <Section>
        <ServicesGrid
          heading="HVAC Services"
          subheading="Installation, repair, and maintenance for heating and cooling systems across the South Shore, South Coast, and Cape."
        />
      </Section>

      {/* Cooling teaser */}
      <Section className="bg-gray-50">
        <FeatureBlock
          title="Beat the Heat"
          description="Beat the heat with Hometown's top-notch cooling services. New installation, repair, or maintenance for existing systems — our team of certified experts is dedicated to keeping your home or business cool and comfortable."
          imageAlt="Professional air conditioning installation at a residential home"
          imageSrc={siteImages.coolingService}
          accent="blue"
        />
      </Section>

      {/* Heating teaser */}
      <Section>
        <FeatureBlock
          title="Stay Warm All Winter"
          description="Stay warm and comfortable all winter long with our comprehensive heating services. From furnace and boiler installation to emergency repairs and energy-efficient upgrades, we keep your home cozy through New England's coldest months."
          imageAlt="High-efficiency home heating system in a residential mechanical room"
          imageSrc={siteImages.heatingService}
          reverse
          accent="red"
        />
      </Section>

      {/* Mission & Values */}
      <Section dark>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Our Mission &amp; Values</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                At Hometown Cooling &amp; Heating, our mission is to provide exceptional heating,
                ventilation, and air conditioning services that ensure the comfort, health, and
                satisfaction of our customers. We are committed to delivering innovative,
                energy-efficient solutions and top-quality workmanship through our team of skilled
                professionals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Our goal is to build lasting relationships with our clients by exceeding their
                expectations, offering reliable and timely service, and maintaining the highest
                standards of integrity and excellence in everything we do.
              </p>
            </div>
            <ResponsiveImage
              src={siteImages.indoorComfort}
              alt="Comfortable home interior with climate control"
              aspectClass="aspect-[4/3]"
              className="shadow-lg shadow-black/30"
            />
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}