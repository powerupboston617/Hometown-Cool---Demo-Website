export default function InfoCard({ label, detail, className = "", hoverable = false }) {
  const hoverClass = hoverable ? "card-hover card-hover-red" : "";

  return (
    <li className={`card-surface flex h-full flex-col p-5 md:p-6 ${hoverClass} ${className}`}>
      <p className="text-sm font-bold uppercase tracking-wide text-brand-red">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{detail}</p>
    </li>
  );
}