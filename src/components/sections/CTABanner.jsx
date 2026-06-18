import { business } from "../../data/business";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CTABanner({
  title = "Get a Free Estimate",
  description = "Tell us about your heating or cooling project and our Plymouth-based team will follow up.",
}) {
  return (
    <section className="cta-banner py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center motion-fade-in">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#estimate" variant="inverse" size="lg">
              Request Estimate
            </Button>
            <Button
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              variant="outline"
              size="lg"
            >
              Call {business.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}