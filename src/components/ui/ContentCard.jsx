export default function ContentCard({
  title,
  children,
  accent = "red",
  className = "",
  hoverable = false,
  as: Tag = "div",
}) {
  const accentColor = accent === "blue" ? "bg-brand-blue" : "bg-brand-red";
  const hoverClass = hoverable
    ? `card-hover ${accent === "blue" ? "card-hover-blue" : "card-hover-red"}`
    : "";

  return (
    <Tag className={`card-surface flex h-full flex-col p-6 md:p-8 ${hoverClass} ${className}`}>
      <div className={`mb-4 h-1 w-10 rounded-full ${accentColor}`} />
      {title && <h3 className="text-xl font-bold md:text-2xl">{title}</h3>}
      <div className="mt-4 flex-1 space-y-3 text-base leading-relaxed text-text-muted">
        {children}
      </div>
    </Tag>
  );
}