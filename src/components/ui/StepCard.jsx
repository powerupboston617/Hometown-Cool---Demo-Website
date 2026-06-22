import { cardHoverClass } from "../../utils/cardAccent";

const stepBadgeClass = {
  red: "bg-brand-red",
  blue: "bg-brand-blue",
  green: "bg-brand-green",
};

export default function StepCard({
  step,
  title,
  description,
  hoverable = false,
  accent = "red",
}) {
  const hoverClass = hoverable ? cardHoverClass[accent] ?? cardHoverClass.green : "";

  return (
    <li className={`card-surface flex h-full flex-col p-6 ${hoverClass}`}>
      <span
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${stepBadgeClass[accent] ?? stepBadgeClass.green}`}
        aria-hidden="true"
      >
        {step}
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-text-muted">{description}</p>
    </li>
  );
}