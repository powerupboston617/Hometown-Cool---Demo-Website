import { imageHoverClass } from "../../utils/cardAccent";

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  aspectClass = "aspect-[4/3]",
  rounded = "rounded-2xl",
  priority = false,
  hoverable = false,
  accent = "red",
}) {
  const hoverClass = hoverable ? imageHoverClass[accent] ?? imageHoverClass.green : "";

  return (
    <div className={`relative overflow-hidden ${rounded} ${aspectClass} ${hoverClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}