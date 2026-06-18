import { Link } from "react-router-dom";
import RegionBadge from "./RegionBadge";

export default function TownAreaCard({ area }) {
  return (
    <Link
      to={`/service-areas/${area.slug}`}
      className="group flex h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <article className="card-surface flex h-full w-full flex-col p-5 transition-colors group-hover:border-brand-red/30 md:p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold group-hover:text-brand-red">{area.town}</h3>
          <RegionBadge region={area.region} className="shrink-0 text-[10px]" />
        </div>
        <p className="text-sm text-text-subtle">{area.county}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
          {area.intro}
        </p>
        <span className="mt-4 text-sm font-semibold text-brand-blue group-hover:text-brand-red">
          View HVAC services →
        </span>
      </article>
    </Link>
  );
}