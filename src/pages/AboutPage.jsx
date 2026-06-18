import { Link } from "react-router-dom";
import { aboutFaqs, aboutSections, aboutValues } from "../data/aboutContent";
import { business } from "../data/business";
import {
  buildBreadcrumbSchema,
  buildFaqSchemaFromItems,
  buildSiteLocalBusinessSchema,
} from "../utils/siteSchema";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import SectionHeader from "../components/layout/SectionHeader";
import CTABanner from "../components/sections/CTABanner";
import ContactSidebarCard from "../components/sections/ContactSidebarCard";
import FAQAccordion from "../components/sections/FAQAccordion";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import ContentCard from "../components/ui/ContentCard";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import Section from "../components/ui/Section";

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About Us | HVAC Contractor Plymouth, MA"
        description={`Learn about ${business.name} — a Plymouth-based HVAC team serving the South Shore with heating, cooling, heat pumps, and Mass Save guidance.`}
        schemas={[
          buildSiteLocalBusinessSchema(business, {
            pageUrl: `${business.baseUrl}/about`,
          }),
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ],
            business
          ),
          buildFaqSchemaFromItems(aboutFaqs),
        ].filter(Boolean)}
        ogImage={siteImages.heroAbout}
      />

      <PageHero
        title="About Us"
        subtitle="Professional heating and cooling service from a team headquartered in Plymouth — serving the South Shore, South Coast, and Cape gateway communities we know best."
        primaryCta="Schedule a Free Inspection"
        primaryCtaHref="#estimate"
        imageSrc={siteImages.heroAbout}
        imageAlt="Professional HVAC tools and equipment at Hometown Cooling and Heating"
      />

      {/* Mission — split column */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" title="Our Mission &amp; Values" />
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                At Hometown Cooling &amp; Heating, our mission is to provide exceptional heating,
                ventilation, and air conditioning services that ensure the comfort, health, and
                satisfaction of our customers. We deliver energy-efficient solutions and top-quality
                workmanship through skilled technicians who understand South Shore homes.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Our goal is to build lasting relationships by exceeding expectations, offering
                reliable service, and maintaining integrity in everything we do. We create
                comfortable indoor environments for Plymouth-area families while contributing
                positively to the community we call home.
              </p>
            </div>
            <ResponsiveImage
              src={siteImages.maintenanceService}
              alt="HVAC technician performing professional system maintenance"
              className="shadow-md"
              hoverable
            />
          </div>
        </Container>
      </Section>

      {/* About sections — card grid */}
      <Section className="bg-surface-muted">
        <Container>
          <SectionHeader
            eyebrow="Who We Are"
            title="A Plymouth HVAC Team You Can Count On"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutSections.map((section, index) => (
              <ContentCard
                key={section.heading}
                title={section.heading}
                accent={index % 2 === 0 ? "red" : "blue"}
                hoverable
              >
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </ContentCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values — card grid */}
      <Section>
        <Container>
          <SectionHeader title="What Guides Our Work" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {aboutValues.map((value, index) => (
              <ContentCard
                key={value.title}
                title={value.title}
                accent={index % 2 === 0 ? "red" : "blue"}
                hoverable
              >
                <p>{value.description}</p>
              </ContentCard>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-text-muted">
            Explore our{" "}
            <Link to="/services" className="font-semibold text-brand-blue hover:text-brand-red">
              services
            </Link>
            ,{" "}
            <Link
              to="/service-areas"
              className="font-semibold text-brand-blue hover:text-brand-red"
            >
              service areas
            </Link>
            , or{" "}
            <Link to="/mass-save" className="font-semibold text-brand-blue hover:text-brand-red">
              Mass Save rebates
            </Link>{" "}
            to learn more about how we help homeowners.
          </p>
        </Container>
      </Section>

      {/* FAQ — split with sidebar */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <FAQAccordion heading="About Hometown Cooling & Heating" items={aboutFaqs} />
            </div>
            <ContactSidebarCard className="h-fit lg:sticky lg:top-24" />
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Work With a Plymouth-Based HVAC Team"
        description="Request a free estimate for installation, repair, or maintenance — or call our office and speak with us directly."
      />
    </>
  );
}