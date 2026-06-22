const coastalRegions = new Set(["South Shore", "South Coast", "Cape"]);

export default function RegionBadge({ region, className = "" }) {
  const isCoastal = coastalRegions.has(region);

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${className} ${
        isCoastal
          ? "bg-brand-blue/10 text-brand-blue"
          : "bg-surface-subtle text-text-muted"
      }`}
    >
      {isCoastal ? "Coastal" : "Inland"} · {region}
    </span>
  );
}