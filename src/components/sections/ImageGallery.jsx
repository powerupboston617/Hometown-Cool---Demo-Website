import ResponsiveImage from "../ui/ResponsiveImage";

export default function ImageGallery({ images, altPrefix = "HVAC service photo" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, index) => (
        <ResponsiveImage
          key={src}
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          aspectClass="aspect-[4/3]"
          className="shadow-sm transition-shadow hover:shadow-md"
        />
      ))}
    </div>
  );
}