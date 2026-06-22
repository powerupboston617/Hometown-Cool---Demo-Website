import { Link } from "react-router-dom";
import { accentBarClass, cardHoverClass } from "../../utils/cardAccent";

export default function ServiceCard({
  title,
  description,
  slug,
  accent = "red",
  titleClassName = "text-lg font-bold",
  descriptionClassName = "mt-2 flex-grow text-text-muted",
}) {
  const cardClasses = `flex h-full w-full flex-col rounded-2xl border border-border bg-brand-white p-6 shadow-card ${cardHoverClass[accent] ?? cardHoverClass.green}`;

  const accentBarClasses = `mb-4 h-1 w-8 rounded-full ${accentBarClass[accent] ?? accentBarClass.green} transition-[width] duration-[250ms] ease-out group-hover:w-full`;

  const arrowClasses =
    "transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0";

  const linkHoverClass =
    accent === "blue"
      ? "group-hover:text-brand-blue"
      : accent === "green"
        ? "group-hover:text-brand-green"
        : "group-hover:text-brand-red";

  const content = (
    <>
      <div className={accentBarClasses} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
      {slug && (
        <span className={`mt-auto inline-flex items-center pt-4 text-sm font-semibold text-brand-blue ${linkHoverClass}`}>
          Learn more
          <span aria-hidden="true" className={arrowClasses}>
            {" →"}
          </span>
        </span>
      )}
    </>
  );

  if (!slug) {
    return <div className={cardClasses}>{content}</div>;
  }

  return (
    <Link
      to={`/services/${slug}`}
      className="group flex h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <div className={cardClasses}>{content}</div>
    </Link>
  );
}