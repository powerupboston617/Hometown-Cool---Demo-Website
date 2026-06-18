import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { getServiceBySlug } from "../../utils/servicePageUtils";
import {
  buildBreadcrumbSchema,
  buildFaqSchemaFromItems,
  buildServiceSchema,
} from "../../utils/siteSchema";
import RelatedArticles from "../blog/RelatedArticles";
import Breadcrumb from "../layout/Breadcrumb";
import PageHead from "../layout/PageHead";
import SectionHeader from "../layout/SectionHeader";
import CTABanner from "../sections/CTABanner";
import ContactSidebarCard from "../sections/ContactSidebarCard";
import FAQAccordion from "../sections/FAQAccordion";
import PageHero from "../sections/PageHero";
import Container from "../ui/Container";
import ContentCard from "../ui/ContentCard";
import FeatureCheckGrid from "../ui/FeatureCheckGrid";
import InfoCard from "../ui/InfoCard";
import ResponsiveImage from "../ui/ResponsiveImage";
import Section from "../ui/Section";
import StepCard from "../ui/StepCard";

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
  const bodySrc = service.bodyImage || service.heroImage;

  const schemas = [
    buildServiceSchema(service, business),
    buildBreadcrumbSchema(
      [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ],
      business
    ),
    buildFaqSchemaFromItems(service.faq),
  ].filter(Boolean);

  return (
    <>
      <PageHead
        title={service.metaTitle}
        description={service.metaDescription}
        schemas={schemas}
        ogImage={service.heroImage}
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

      {/* Intro — split column with image */}
      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="section-eyebrow mb-3">{service.category}</p>
              <h2 className="text-3xl font-bold md:text-4xl">{service.h1}</h2>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">{service.intro}</p>
              <p className="mt-4 leading-relaxed text-text-muted">{service.body}</p>
            </div>
            <ResponsiveImage
              src={bodySrc}
              alt={`${service.title} — professional HVAC service`}
              aspectClass="aspect-[4/3]"
              className="shadow-lg lg:sticky lg:top-24"
            />
          </div>
        </Container>
      </Section>

      {/* Detail sections — card grid */}
      {service.sections?.length > 0 && (
        <Section className="bg-surface-muted">
          <Container>
            <SectionHeader
              align="left"
              eyebrow="In Depth"
              title={`What to Know About ${service.title}`}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.sections.map((section, index) => (
                <ContentCard
                  key={section.heading}
                  title={section.heading}
                  accent={index % 2 === 0 ? "red" : "blue"}
                  className={section.paragraphs.length > 2 ? "md:col-span-2" : ""}
                >
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </ContentCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* How it works — step cards */}
      <Section>
        <Container>
          <SectionHeader title="How It Works" />
          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <StepCard
                key={step.number}
                step={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </ol>
        </Container>
      </Section>

      {/* Features — check grid */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader title="What We Offer" />
          <div className="mx-auto mt-10 max-w-4xl">
            <FeatureCheckGrid features={service.features} columns={2} />
          </div>
        </Container>
      </Section>

      {/* Why choose us — info cards */}
      <Section>
        <Container>
          <SectionHeader title="Why Choose Us" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {whyChooseUsPoints.map((point) => (
              <InfoCard key={point.title} label={point.title} detail={point.description} />
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ — split with sidebar */}
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <FAQAccordion items={service.faq} heading={`${service.title} FAQ`} />
            </div>
            <ContactSidebarCard className="h-fit lg:sticky lg:top-24" />
          </div>
        </Container>
      </Section>

      {service.relatedServices?.length > 0 && (
        <Section>
          <Container>
            <SectionHeader align="left" title="Related Services" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      className="card-surface block px-5 py-4 font-semibold text-brand-blue transition-colors hover:border-brand-red/30 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {related.title} →
    </Link>
  );
}