import { siteImages } from "../../data/siteImages";
import Button from "../ui/Button";
import Container from "../ui/Container";
import FullWidthHero from "./FullWidthHero";

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  primaryCta,
  primaryCtaHref = "#estimate",
  primaryCtaVariant = "primary",
  secondaryCta,
  secondaryCtaHref,
  imageSrc = siteImages.heroHomepage,
  imageAlt,
  logoSrc,
  logoAlt = "",
}) {
  const content = (
    <div className="motion-fade-in max-w-3xl">
      {logoSrc && (
        <img
          src={logoSrc}
          alt={logoAlt}
          className="mb-6 h-14 w-auto md:h-16"
          width="200"
          height="85"
        />
      )}
      {eyebrow && <p className="section-eyebrow mb-4 text-brand-red">{eyebrow}</p>}
      <h1 className="heading-display text-brand-white">{title}</h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">{subtitle}</p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {primaryCta && (
            <Button href={primaryCtaHref} variant={primaryCtaVariant} size="lg">
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
    </div>
  );

  return (
    <FullWidthHero imageSrc={imageSrc} imageAlt={imageAlt || title}>
      {content}
    </FullWidthHero>
  );
}