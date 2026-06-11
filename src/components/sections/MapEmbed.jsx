import { business } from "../../data/business";

export default function MapEmbed({
  embedUrl = "",
  lat = null,
  lng = null,
  label = "Service area map",
  className = "",
}) {
  const address = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;
  const fallbackSrc =
    lat != null && lng != null
      ? `https://maps.google.com/maps?q=${lat},${lng}&z=12&output=embed`
      : `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=11&output=embed`;

  const src = embedUrl || fallbackSrc;
  const isPlaceholder = !embedUrl && lat == null && lng == null;

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <iframe
          title={label}
          src={src}
          className="aspect-[16/9] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {isPlaceholder && (
        <p className="mt-3 text-sm text-gray-500">
          Map placeholder — add a Google Maps embed URL or lat/lng coordinates before launch for
          precise placement.
        </p>
      )}
    </div>
  );
}