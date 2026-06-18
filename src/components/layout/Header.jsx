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
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-brand-white/95 shadow-sm backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <Link
              to="/"
              className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              aria-label="Hometown Cooling & Heating home"
            >
              <img
                src="/hometown_logo.svg"
                alt=""
                className="h-10 w-auto md:h-12"
                width="48"
                height="40"
              />
            </Link>
            <Link
              to="/mass-save"
              className="flex items-center border-l border-border pl-3 md:pl-4"
              aria-label="Mass Save program"
            >
              <img
                src="/images/mass_save_partner.png"
                alt="Mass Save partner"
                className="h-9 w-auto md:h-11"
                width="139"
                height="85"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-red"
            >
              {business.phone}
            </a>
            <Button href="#estimate" size="sm">
              Free Estimate
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-black transition-colors hover:bg-surface-muted lg:hidden"
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
            className="motion-slide-up border-t border-border py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-surface-muted ${
                        isActive ? "bg-surface-muted text-brand-red" : "text-brand-black"
                      }`
                    }
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-3">
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="block px-3 py-2 text-sm font-semibold text-brand-blue"
                >
                  {business.phone}
                </a>
              </li>
              <li className="px-3 pt-2">
                <Button href="#estimate" size="sm" className="w-full" onClick={() => setMenuOpen(false)}>
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