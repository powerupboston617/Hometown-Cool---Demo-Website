import { Link } from "react-router-dom";

const cardClasses =
  "flex h-full w-full flex-col rounded-xl border border-gray-100 bg-brand-white p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-gray-50/50 hover:shadow-lg motion-reduce:hover:translate-y-0";

const accentBarClasses =
  "mb-3 h-1 w-6 rounded-full bg-brand-red transition-[width] duration-[250ms] ease-out group-hover:w-full";

const arrowClasses =
  "transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0";

export default function ServiceCard({
  title,
  description,
  slug,
  titleClassName = "text-lg font-bold",
  descriptionClassName = "mt-2 flex-grow text-gray-600",
}) {
  const content = (
    <>
      <div className={accentBarClasses} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
      {slug && (
        <span className="mt-auto inline-flex items-center pt-4 text-sm font-semibold text-brand-blue">
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
      className="group flex h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
    >
      <div className={cardClasses}>{content}</div>
    </Link>
  );
}