import { Link } from "react-router-dom";
import { getSlugByTown } from "../../utils/serviceAreaUtils";
import Container from "../ui/Container";

export default function RelatedAreas({ area, chips = false, bare = false }) {
  if (!area.relatedAreas?.length) return null;

  const content = (
    <>
        <h2 className="mb-6 text-2xl font-bold">Nearby Service Areas</h2>
        {chips ? (
          <div className="flex flex-wrap gap-3">
            {area.relatedAreas.map((town) => {
              const slug = getSlugByTown(town);
              if (!slug) return null;
              return (
                <Link
                  key={town}
                  to={`/service-areas/${slug}`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-brand-blue transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  {town}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.relatedAreas.map((town) => {
              const slug = getSlugByTown(town);
              if (!slug) return null;
              return (
                <Link
                  key={town}
                  to={`/service-areas/${slug}`}
                  className="rounded-xl border border-gray-200 px-5 py-4 font-semibold text-brand-blue transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  HVAC in {town} →
                </Link>
              );
            })}
          </div>
        )}
    </>
  );

  if (bare) return content;

  return (
    <section className="py-12">
      <Container>{content}</Container>
    </section>
  );
}