import { cardHoverClass, getTrustSignalAccent } from "../../utils/cardAccent";

export default function InfoCard({
  label,
  detail,
  className = "",
  hoverable = false,
  accent,
}) {
  const resolvedAccent = accent ?? getTrustSignalAccent(label);
  const hoverClass = hoverable ? cardHoverClass[resolvedAccent] : "";
  const labelColor =
    resolvedAccent === "blue"
      ? "text-brand-blue"
      : resolvedAccent === "green"
        ? "text-brand-green"
        : "text-brand-red";

  return (
    <li className={`card-surface flex h-full flex-col p-5 md:p-6 ${hoverClass} ${className}`}>
      <p className={`text-sm font-bold uppercase tracking-wide ${labelColor}`}>{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{detail}</p>
    </li>
  );
}