import Container from "../ui/Container";
import Button from "../ui/Button";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function PageHero({
  title,
  subtitle,
  primaryCta,
  primaryCtaHref = "#estimate",
  secondaryCta,
  secondaryCtaHref,
  dark = true,
  imageSrc,
  imageAlt,
}) {
  const bg = dark ? "bg-brand-black text-brand-white" : "bg-gray-50 text-brand-black";

  const content = (
    <>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {primaryCta && (
            <Button href={primaryCtaHref} size="lg">
              {primaryCta}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCtaHref} variant="secondary" size="lg">
              {secondaryCta}
            </Button>
          )}
        </div>
      )}
    </>
  );

  return (
    <section className={bg}>
      <Container>
        {imageSrc ? (
          <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
            <div>{content}</div>
            <ResponsiveImage
              src={imageSrc}
              alt={imageAlt || title}
              aspectClass="aspect-[4/3] lg:aspect-[5/4]"
              className={dark ? "shadow-lg shadow-black/30" : "shadow-md"}
            />
          </div>
        ) : (
          <div className="py-16 md:py-20">{content}</div>
        )}
      </Container>
    </section>
  );
}