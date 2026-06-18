import { Link } from "react-router-dom";
import { business } from "../../data/business";
import Button from "../ui/Button";

export default function ContactSidebarCard({ className = "" }) {
  const address = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;

  return (
    <aside className={`card-surface p-6 md:p-8 ${className}`}>
      <p className="section-eyebrow mb-2">Get Started</p>
      <h3 className="text-xl font-bold">Talk to Our Plymouth Team</h3>
      <address className="mt-5 space-y-4 not-italic text-sm text-text-muted">
        <p>
          <span className="block font-semibold text-brand-black">Address</span>
          {address}
        </p>
        <p>
          <span className="block font-semibold text-brand-black">Phone</span>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="font-semibold text-brand-blue hover:text-brand-red"
          >
            {business.phone}
          </a>
        </p>
        <p>
          <span className="block font-semibold text-brand-black">Hours</span>
          {business.hours}
        </p>
      </address>
      <div className="mt-6 flex flex-col gap-3">
        <Button href="#estimate" size="md" className="w-full">
          Free Estimate
        </Button>
        <Link
          to="/contact"
          className="text-center text-sm font-semibold text-brand-blue hover:text-brand-red"
        >
          Contact form →
        </Link>
      </div>
    </aside>
  );
}