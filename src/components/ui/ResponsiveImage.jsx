export default function ResponsiveImage({
  src,
  alt,
  className = "",
  aspectClass = "aspect-[4/3]",
  rounded = "rounded-2xl",
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${aspectClass} ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}