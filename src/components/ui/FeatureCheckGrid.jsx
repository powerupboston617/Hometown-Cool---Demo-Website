export default function FeatureCheckGrid({ features, columns = 2 }) {
  const colClass = columns === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <ul className={`grid gap-4 ${colClass}`}>
      {features.map((feature) => (
        <li key={feature} className="card-surface flex items-start gap-3 p-4 md:p-5">
          <span className="mt-0.5 shrink-0 font-bold text-brand-red" aria-hidden="true">
            ✓
          </span>
          <span className="text-text-muted">{feature}</span>
        </li>
      ))}
    </ul>
  );
}