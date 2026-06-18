export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left";

  return (
    <header className={`${alignClass} ${className}`}>
      {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-text-muted">{description}</p>
      )}
    </header>
  );
}