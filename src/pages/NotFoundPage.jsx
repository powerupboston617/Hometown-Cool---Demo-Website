import PageHead from "../components/layout/PageHead";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function NotFoundPage() {
  return (
    <>
      <PageHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Hometown Cooling & Heating."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">404</p>
            <h1 className="mt-2 text-4xl font-bold">Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" size="lg">
                Back to Home
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}