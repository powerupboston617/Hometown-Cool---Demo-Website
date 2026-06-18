export default function StepCard({ step, title, description, hoverable = false }) {
  const hoverClass = hoverable ? "card-hover card-hover-red" : "";

  return (
    <li className={`card-surface flex h-full flex-col p-6 ${hoverClass}`}>
      <span
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white"
        aria-hidden="true"
      >
        {step}
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-text-muted">{description}</p>
    </li>
  );
}