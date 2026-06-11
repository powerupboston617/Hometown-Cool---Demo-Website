import MapEmbed from "../sections/MapEmbed";
import Container from "../ui/Container";

export default function GeoMapSection({ area, compact = false, bare = false }) {
  const content = (
    <>
      <h2 className="mb-4 text-xl font-bold md:text-2xl">Map — {area.town}, MA</h2>
      <MapEmbed
        embedUrl={area.mapEmbed}
        lat={area.lat}
        lng={area.lng}
        label={`Map of ${area.town}, Massachusetts`}
        className={compact ? "max-w-4xl" : ""}
      />
    </>
  );

  if (bare) return content;

  return (
    <section className={compact ? "py-8" : "py-12"}>
      <Container>{content}</Container>
    </section>
  );
}