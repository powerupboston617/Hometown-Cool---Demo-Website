import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-red text-brand-white hover:bg-red-700 focus-visible:ring-brand-red",
  secondary:
    "bg-brand-blue text-brand-white hover:bg-blue-700 focus-visible:ring-brand-blue",
  outline:
    "border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black focus-visible:ring-brand-white",
  ghost:
    "text-brand-blue hover:text-brand-red focus-visible:ring-brand-blue",
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
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}