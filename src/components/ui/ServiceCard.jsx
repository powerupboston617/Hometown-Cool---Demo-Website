import { Link } from "react-router-dom";

export default function ServiceCard({
  title,
  description,
  slug,
  accent = "red",
  titleClassName = "text-lg font-bold",
  descriptionClassName = "mt-2 flex-grow text-text-muted",
}) {
  const accentColor = accent === "blue" ? "bg-brand-blue" : "bg-brand-red";
  const borderHover = accent === "blue" ? "hover:border-brand-blue/20" : "hover:border-brand-red/20";

  const cardClasses = `flex h-full w-full flex-col rounded-2xl border border-border bg-brand-white p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-1 ${borderHover} hover:shadow-card-hover motion-reduce:hover:translate-y-0`;

  const accentBarClasses = `mb-4 h-1 w-8 rounded-full ${accentColor} transition-[width] duration-[250ms] ease-out group-hover:w-full`;

  const arrowClasses =
    "transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0";

  const content = (
    <>
      <div className={accentBarClasses} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
      {slug && (
        <span
          className={`mt-auto inline-flex items-center pt-4 text-sm font-semibold text-brand-blue ${
            accent === "blue" ? "group-hover:text-brand-blue" : "group-hover:text-brand-red"
          }`}
        >
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