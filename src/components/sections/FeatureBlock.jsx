import { accentBarClass } from "../../utils/cardAccent";
import Container from "../ui/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function FeatureBlock({
  title,
  description,
  imageAlt,
  imageSrc,
  reverse = false,
  accent = "red",
  imageHoverable = false,
}) {
  return (
    <Container>
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className={`mb-4 h-1 w-16 rounded-full ${accentBarClass[accent] ?? accentBarClass.green}`} />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{description}</p>
        </div>
        {imageSrc ? (
          <ResponsiveImage
            src={imageSrc}
            alt={imageAlt}
            className="shadow-md"
            hoverable={imageHoverable}
            accent={accent}
          />
        ) : (
          <div
            className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gray-100 shadow-sm"
            role="img"
            aria-label={imageAlt}
          >
            <p className="text-sm text-gray-400">{imageAlt}</p>
          </div>
        )}
      </div>
    </Container>
  );
}