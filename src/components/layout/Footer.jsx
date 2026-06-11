import { Link } from "react-router-dom";
import { business } from "../../data/business";
import Button from "../ui/Button";
import Container from "../ui/Container";

const siteMapLinks = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact Us" },
  { to: "/services", label: "Services" },
];

const quickLinks = [
  { to: "/contact#estimate", label: "Free Estimate" },
  { to: "/reviews", label: "Customer Reviews" },
  { to: "/media", label: "Media" },
];

export default function Footer() {
  const address = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;

  return (
    <footer className="bg-brand-black text-brand-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/hometown_logo.svg"
              alt=""
              className="mb-4 h-12 w-auto brightness-0 invert"
              width="58"
              height="48"
            />
            <p className="mb-2 text-lg font-bold">{business.name}</p>
            <address className="not-italic text-gray-300">
              <p>{address}</p>
              <p className="mt-2">
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-brand-white hover:underline"
                >
                  {business.phone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${business.email}`} className="text-brand-white hover:underline">
                  {business.email}
                </a>
              </p>
              <p className="mt-1">{business.hours}</p>
            </address>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-red">
              Site Map
            </h2>
            <ul className="space-y-2">
              {siteMapLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-brand-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-red">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-brand-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-red">
              Get Started
            </h2>
            <p className="mb-4 text-gray-300">
              Ready for heating or cooling service in Plymouth and surrounding towns?
            </p>
            <Button href="#estimate" size="sm">
              Free Estimate
            </Button>
            <div className="mt-6 flex gap-4">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-brand-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={business.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-gray-300 hover:text-brand-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}