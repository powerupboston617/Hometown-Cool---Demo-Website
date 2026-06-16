import { business } from "../data/business";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import ContactInfo from "../components/sections/ContactInfo";
import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function ReviewsPage() {
  return (
    <>
      <PageHead
        title="Customer Reviews"
        description={`Customer reviews for ${business.name}. Share your experience with our Plymouth-based HVAC team.`}
      />

      <PageHero
        title="What People Are Saying"
        subtitle="Real customer reviews are coming soon. We appreciate every homeowner who trusts us with their heating and cooling."
        dark={false}
        imageSrc={siteImages.indoorComfort}
        imageAlt="Comfortable home with reliable heating and cooling"
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-12">
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
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  variant="secondary"
                  size="lg"
                >
                  Call {business.phone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-xl">
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  );
}