import { Link, useLocation } from "react-router-dom";
import { useEstimateModal } from "../../context/EstimateModalContext";
import { isEstimateHref } from "../../utils/estimateLinks";

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const liftClasses =
  "hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:hover:translate-y-0 disabled:hover:shadow-none";

const variants = {
  primary: `bg-brand-red text-brand-white hover:bg-brand-red-hover focus-visible:ring-red-500 ${liftClasses}`,
  secondary: `bg-brand-blue text-brand-white hover:bg-brand-blue-hover focus-visible:ring-blue-500 ${liftClasses}`,
  inverse: `bg-brand-white text-brand-red hover:bg-gray-50 focus-visible:ring-red-500 ${liftClasses}`,
  outline:
    "border-2 border-brand-white text-brand-white transition-colors hover:bg-brand-white hover:text-brand-black focus-visible:ring-white",
  ghost:
    "text-brand-blue transition-colors hover:text-brand-red focus-visible:ring-blue-500",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
  ...props
}) {
  const location = useLocation();
  const { openEstimateModal } = useEstimateModal();
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const opensEstimateModal =
    href && isEstimateHref(href) && location.pathname !== "/contact";

  if (opensEstimateModal) {
    return (
      <button
        type="button"
        className={classes}
        onClick={(event) => {
          onClick?.(event);
          openEstimateModal();
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link to={href} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}