import { business } from "../data/business";
import { siteImages } from "../data/siteImages";
import { contactFaq } from "../data/contactFaq";
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
        title="Contact Us"
        description={`Contact ${business.name} for heating and cooling service in Plymouth, MA. Call ${business.phone} or send us a message.`}
      />

      <PageHero
        title="Contact Us"
        subtitle="Got questions about your heating or cooling system? Need expert advice or assistance with a service request? We're here to help."
        primaryCta="Schedule a Free Inspection"
        primaryCtaHref="#estimate"
        secondaryCta={`Call ${business.phone}`}
        secondaryCtaHref={`tel:${business.phone.replace(/\D/g, "")}`}
        imageSrc={siteImages.heroContact}
        imageAlt="Welcoming home entryway with thermostat for contacting Hometown Cooling and Heating"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm showInspectionOption anchorId="estimate" />
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">Service Area</h2>
          <MapEmbed label="Plymouth County service area map" />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={contactFaq} />
          </div>
        </Container>
      </Section>
    </>
  );
}