import Container from "../ui/Container";

export default function NeighborsLine({ area, bare = false }) {
  if (!area.neighbors?.length) return null;

  const content = (
        <p className={`text-lg text-gray-600 ${bare ? "" : "text-center"}`}>
          Serving <span className="font-semibold text-brand-black">{area.town}</span> and nearby
          areas including{" "}
          <span className="font-semibold text-brand-black">
            {area.neighbors.join(", ")}
          </span>
          .
        </p>
  );

  if (bare) return content;

  return (
    <section className="py-8">
      <Container>{content}</Container>
    </section>
  );
}