import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { useEstimateModal } from "../../context/EstimateModalContext";
import Button from "../ui/Button";
import Container from "../ui/Container";

const siteMapLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
  { to: "/reviews", label: "Customer Reviews" },
  { to: "/blog", label: "Blog/News" },
  { to: "/media", label: "Media" },
];

const serviceLinks = [
  { to: "/services/heating-system-installation", label: "Heating System Installation" },
  { to: "/services/heating-system-maintenance", label: "Heating System Maintenance" },
  { to: "/services/energy-efficient-upgrades", label: "Energy Efficient Upgrades" },
  { to: "/services/heating-system-repair", label: "Heating System Repair" },
  { to: "/services/emergency-heating-services", label: "Emergency Heating Services" },
  { to: "/services/indoor-air-quality-solutions", label: "Indoor Air Quality Solutions" },
  { to: "/services/air-conditioning-repair", label: "Air Conditioning Repair" },
  { to: "/services/ductless-mini-splits", label: "Ductless Mini-Splits" },
  { to: "/services/heating-system-maintenance", label: "Seasonal Maintenance" },
];

const southShoreAreas = [
  { to: "/service-areas/duxbury", label: "Duxbury" },
  { to: "/service-areas/marshfield", label: "Marshfield" },
  { to: "/service-areas/scituate", label: "Scituate" },
  { to: "/service-areas/cohasset", label: "Cohasset" },
  { to: "/service-areas/hingham", label: "Hingham" },
  { to: "/service-areas/plymouth", label: "Plymouth" },
  { to: "/service-areas/kingston", label: "Kingston" },
  { to: "/service-areas/pembroke", label: "Pembroke" },
];

const southCoastAreas = [
  { to: "/service-areas/bourne", label: "Bourne" },
  { to: "/service-areas/sandwich", label: "Sandwich" },
  { to: "/service-areas/plympton", label: "Plympton" },
  { to: "/service-areas/carver", label: "Carver" },
  { to: "/service-areas/halifax", label: "Halifax" },
  { to: "/service-areas/middleborough", label: "Middleborough" },
];

const footerLinkClass = "text-gray-300 hover:text-brand-white hover:underline";

function FooterHeading({ children, to }) {
  if (to) {
    return (
      <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-red">
        <Link to={to} className="hover:underline">
          {children}
        </Link>
      </h2>
    );
  }

  return (
    <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-red">{children}</h2>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={`${link.to}-${link.label}`}>
          <Link to={link.to} className={footerLinkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const { openEstimateModal } = useEstimateModal();
  const address = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;

  return (
    <footer className="bg-brand-black text-brand-white">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
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
            <FooterHeading>Site Map</FooterHeading>
            <ul className="space-y-2">
              {siteMapLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={openEstimateModal} className={footerLinkClass}>
                  Free Estimate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading to="/services">Services</FooterHeading>
            <FooterLinkList links={serviceLinks} />
          </div>

          <div>
            <FooterHeading to="/service-areas">Service Areas (South Shore)</FooterHeading>
            <FooterLinkList links={southShoreAreas} />
          </div>

          <div>
            <FooterHeading to="/service-areas">Service Areas (South Coast)</FooterHeading>
            <FooterLinkList links={southCoastAreas} />
          </div>

          <div>
            <FooterHeading>Get Started</FooterHeading>
            <p className="mb-4 text-gray-300">
              Ready for heating or cooling service in Plymouth and surrounding towns?
            </p>
            <Button href="#estimate" size="sm">
              Free Estimate
            </Button>
            <div className="mt-6">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hometown Cooling & Heating on Facebook"
                className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-brand-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm hover:underline">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}