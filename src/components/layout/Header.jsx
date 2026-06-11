import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { business } from "../../data/business";
import Button from "../ui/Button";
import Container from "../ui/Container";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/mass-save", label: "Mass Save" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-brand-red ${
    isActive ? "text-brand-red" : "text-brand-black"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-brand-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Hometown Cooling & Heating home">
            <img
              src="/hometown_logo.svg"
              alt=""
              className="h-10 w-auto md:h-12"
              width="48"
              height="40"
            />
            <span className="hidden text-sm font-bold leading-tight sm:block md:text-base">
              Hometown Cooling &amp; Heating
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="text-sm font-semibold text-brand-blue hover:text-brand-red"
            >
              {business.phone}
            </a>
            <Button href="#estimate" size="sm">
              Free Estimate
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-black hover:bg-gray-100 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-gray-200 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={linkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-sm font-semibold text-brand-blue"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <Button href="#estimate" size="sm" onClick={() => setMenuOpen(false)}>
                  Free Estimate
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}