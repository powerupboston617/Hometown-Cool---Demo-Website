import { Link } from "react-router-dom";
import { business } from "../data/business";
import { serviceAreas } from "../data/serviceAreas";
import {
  buildBreadcrumbSchema,
  buildFaqSchemaFromItems,
  buildSiteLocalBusinessSchema,
} from "../utils/siteSchema";
import {
  contactExpectations,
  contactIntro,
  contactServiceAreaNote,
} from "../data/contactContent";
import { contactFaq } from "../data/contactFaq";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";
import FAQAccordion from "../components/sections/FAQAccordion";
import MapEmbed from "../components/sections/MapEmbed";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact Us | HVAC Contractor Plymouth, MA"
        description={`Contact ${business.name} for heating and cooling service in Plymouth, MA and the South Shore. Call ${business.phone} or request a free estimate online.`}
        schemas={[
          buildSiteLocalBusinessSchema(business, {
            pageUrl: `${business.baseUrl}/contact`,
            areaServed: serviceAreas.map((area) => area.town),
          }),
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ],
            business
          ),
          buildFaqSchemaFromItems(contactFaq),
        ].filter(Boolean)}
        ogImage={siteImages.heroContact}
      />

      <PageHero
        title="Contact Us"
        subtitle="Questions about heating, cooling, heat pumps, or Mass Save rebates? Request a free estimate or call our Plymouth office — we're here to help."
        primaryCta="Schedule a Free Inspection"
        primaryCtaHref="#estimate"
        secondaryCta={`Call ${business.phone}`}
        secondaryCtaHref={`tel:${business.phone.replace(/\D/g, "")}`}
        imageSrc={siteImages.heroContact}
        imageAlt="Welcoming home entryway with thermostat for contacting Hometown Cooling and Heating"
      />

      <Section>
        <Container>
          <div className="mx-auto mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold">{contactIntro.heading}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              {contactIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm showInspectionOption anchorId="estimate" />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">{contactExpectations.heading}</h2>
            <ol className="mt-8 space-y-6">
              {contactExpectations.steps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">{contactServiceAreaNote.heading}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              {contactServiceAreaNote.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6">
              <Link
                to="/service-areas"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                View all service areas →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">Service Area Map</h2>
          <MapEmbed label="Plymouth County service area map" />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion
              heading="Contact & Scheduling FAQ"
              items={contactFaq}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}