import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { getServiceBySlug } from "../../utils/servicePageUtils";
import Breadcrumb from "../layout/Breadcrumb";
import PageHead from "../layout/PageHead";
import CTABanner from "../sections/CTABanner";
import ContactForm from "../sections/ContactForm";
import FAQAccordion from "../sections/FAQAccordion";
import PageHero from "../sections/PageHero";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function ServiceLanding({ service }) {
  const heroSrc = service.heroImage;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.baseUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Plymouth County, MA",
    },
    url: `${business.baseUrl}/services/${service.slug}`,
  };

  return (
    <>
      <PageHead
        title={service.metaTitle}
        description={service.metaDescription}
        schemas={[serviceSchema]}
      />

      <PageHero
        title={service.heroHeadline}
        subtitle={service.heroSubhead}
        primaryCta="Get a Free Estimate"
        primaryCtaHref="#estimate"
        secondaryCta={`Call ${business.phone}`}
        secondaryCtaHref={`tel:${business.phone.replace(/\D/g, "")}`}
        imageSrc={heroSrc}
        imageAlt={`${service.title} — hero`}
      />

      <div className="border-b border-gray-100 bg-gray-50 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.title, to: `/services/${service.slug}` },
            ]}
          />
        </Container>
      </div>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              {service.category}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{service.h1}</h2>
            <p className="mt-4 text-lg text-gray-600">{service.intro}</p>
            <p className="mt-4 leading-relaxed text-gray-600">{service.body}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">What We Offer</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-brand-white p-4 shadow-sm"
              >
                <span className="mt-1 text-brand-red" aria-hidden="true">
                  ✓
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={service.faq} heading={`${service.title} FAQ`} />
          </div>
        </Container>
      </Section>

      {service.relatedServices?.length > 0 && (
        <Section className="bg-gray-50">
          <Container>
            <h2 className="mb-6 text-2xl font-bold">Related Services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedServices.map((slug) => (
                <RelatedServiceLink key={slug} slug={slug} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTABanner
        title={`Need ${service.title}?`}
        description={`Contact our Plymouth-based team for a free estimate on ${service.title.toLowerCase()} in Plymouth and surrounding towns.`}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-xl">
            <ContactForm
              title="Request Service"
              submitLabel="Send Request"
              showInspectionOption
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

function RelatedServiceLink({ slug }) {
  const related = getServiceBySlug(slug);
  if (!related) return null;

  return (
    <Link
      to={`/services/${slug}`}
      className="rounded-xl border border-gray-200 bg-brand-white px-5 py-4 font-semibold text-brand-blue transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {related.title} →
    </Link>
  );
}