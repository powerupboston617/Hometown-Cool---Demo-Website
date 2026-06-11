const coastalRegions = new Set(["South Shore", "South Coast", "Cape"]);

export default function RegionBadge({ region }) {
  const isCoastal = coastalRegions.has(region);

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
        isCoastal
          ? "bg-brand-blue/10 text-brand-blue"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {isCoastal ? "Coastal" : "Inland"} · {region}
    </span>
  );
}