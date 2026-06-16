import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { getServiceBySlug } from "../../utils/servicePageUtils";
import RelatedArticles from "../blog/RelatedArticles";
import Breadcrumb from "../layout/Breadcrumb";
import PageHead from "../layout/PageHead";
import CTABanner from "../sections/CTABanner";
import FAQAccordion from "../sections/FAQAccordion";
import PageHero from "../sections/PageHero";
import Container from "../ui/Container";
import Section from "../ui/Section";

const whyChooseUsPoints = [
  {
    title: "Plymouth-Based Team",
    description:
      "We're based right here on Hedges Pond Road, so we know local homes and can reach surrounding towns quickly.",
  },
  {
    title: "Licensed Technicians",
    description:
      "Our certified technicians handle every job to code with quality workmanship you can count on.",
  },
  {
    title: "Upfront Estimates",
    description:
      "Clear, honest pricing before work starts — no hidden fees or surprise add-ons.",
  },
  {
    title: "Energy-Smart Solutions",
    description:
      "We recommend right-sized, efficient equipment and can help you navigate Mass Save rebates when they apply.",
  },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Home Assessment",
    description:
      "We evaluate your home's size, layout, ductwork, and existing system to recommend the right solution.",
  },
  {
    number: 2,
    title: "Sizing & Quote",
    description:
      "We calculate proper load and provide a clear, upfront estimate with no surprises.",
  },
  {
    number: 3,
    title: "Professional Installation",
    description:
      "Our licensed technicians handle removal, installation, venting, and electrical work to code.",
  },
  {
    number: 4,
    title: "Testing & Walkthrough",
    description:
      "We test the full system and walk you through everything before we leave.",
  },
];

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

      <Section>
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">How It Works</h2>
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex h-full flex-col rounded-xl border border-gray-100 bg-brand-white p-6 shadow-sm"
                >
                  <span className="mb-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-brand-white">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">What We Offer</h2>
            <ul className="flex flex-col space-y-3">
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
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Why Choose Us</h2>
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              {whyChooseUsPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex h-full flex-col rounded-xl border border-gray-100 bg-brand-white p-6 shadow-sm"
                >
                  <div className="mb-3 h-1 w-6 rounded-full bg-brand-red" />
                  <h3 className="text-lg font-bold">{point.title}</h3>
                  <p className="mt-2 text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={service.faq} heading={`${service.title} FAQ`} />
          </div>
        </Container>
      </Section>

      {service.relatedServices?.length > 0 && (
        <Section>
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

      <RelatedArticles currentCategory={service.category.toLowerCase()} />

      <CTABanner
        title={`Need ${service.title}?`}
        description={`Contact our Plymouth-based team for a free estimate on ${service.title.toLowerCase()} in Plymouth and surrounding towns.`}
      />
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