import { useEffect, useState } from "react";
import Container from "../ui/Container";

const overlayStyles = {
  default:
    "bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/40",
  red: "bg-gradient-to-r from-brand-red/85 via-brand-red/55 to-brand-black/45",
};

export default function FullWidthHero({
  imageSrc,
  fallbackImageSrc,
  imageAlt = "",
  overlay = "default",
  children,
  className = "",
}) {
  const [src, setSrc] = useState(imageSrc);

  useEffect(() => {
    setSrc(imageSrc);
  }, [imageSrc]);

  return (
    <section
      className={`relative isolate min-h-[28rem] overflow-hidden text-brand-white md:min-h-[32rem] lg:min-h-[36rem] ${className}`}
    >
      <img
        src={src}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        onError={() => {
          if (fallbackImageSrc && src !== fallbackImageSrc) {
            setSrc(fallbackImageSrc);
          }
        }}
      />
      <div className={`absolute inset-0 ${overlayStyles[overlay] ?? overlayStyles.default}`} aria-hidden="true" />
      <Container className="relative z-10 flex h-full min-h-[inherit] items-center">
        <div className="w-full py-20 md:py-28 lg:py-32">{children}</div>
      </Container>
    </section>
  );
}