import { business } from "../data/business";
import { reviewsFaqs, reviewsIntro, reviewsTrustPoints } from "../data/reviewsContent";
import { buildBreadcrumbSchema, buildFaqSchemaFromItems } from "../utils/siteSchema";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import ContactInfo from "../components/sections/ContactInfo";
import FAQAccordion from "../components/sections/FAQAccordion";
import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function ReviewsPage() {
  return (
    <>
      <PageHead
        title="Customer Reviews | Hometown Cooling & Heating"
        description={`Customer reviews for ${business.name}. Verified testimonials from Plymouth and South Shore homeowners — no fabricated reviews.`}
        schemas={[
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
            ],
            business
          ),
          buildFaqSchemaFromItems(reviewsFaqs),
        ].filter(Boolean)}
        ogImage={siteImages.indoorComfort}
      />

      <PageHero
        title="What People Are Saying"
        subtitle="Verified customer reviews are coming soon. We appreciate every homeowner who trusts our Plymouth-based team with their heating and cooling."
        imageSrc={siteImages.indoorComfort}
        imageAlt="Comfortable home with reliable heating and cooling"
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">{reviewsIntro.heading}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              {reviewsIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviewsTrustPoints.map((point) => (
              <li
                key={point.label}
                className="rounded-xl border border-gray-200 bg-surface-muted px-5 py-6 text-center"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
                  {point.label}
                </p>
                <p className="mt-2 text-sm text-gray-600">{point.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="rounded-2xl border border-gray-200 bg-surface-muted px-8 py-12">
              <h2 className="text-2xl font-bold">Reviews Coming Soon</h2>
              <p className="mt-4 text-gray-600">
                We&apos;re gathering verified customer feedback to share here. In the meantime, if
                you&apos;ve worked with us we&apos;d love to hear about your experience.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact#estimate" size="lg">
                  Share Your Experience
                </Button>
                <Button
                  href={business.social.facebook}
                  variant="secondary"
                  size="lg"
                >
                  Visit Facebook
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion heading="Reviews FAQ" items={reviewsFaqs} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-xl">
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  );
}