import { business } from "../../data/business";

export default function ContactInfo() {
  const address = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;

  return (
    <div>
      <h2 className="text-2xl font-bold md:text-3xl">Contact Details</h2>
      <address className="mt-4 space-y-3 not-italic text-gray-600">
        <p>
          <span className="font-semibold text-brand-black">Address:</span>
          <br />
          {address}
        </p>
        <p>
          <span className="font-semibold text-brand-black">Phone:</span>
          <br />
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="text-brand-blue hover:text-brand-red"
          >
            {business.phone}
          </a>
        </p>
        <p>
          <span className="font-semibold text-brand-black">Email:</span>
          <br />
          <a href={`mailto:${business.email}`} className="text-brand-blue hover:text-brand-red">
            {business.email}
          </a>
        </p>
        <p>
          <span className="font-semibold text-brand-black">Hours:</span>
          <br />
          {business.hours}
        </p>
      </address>
    </div>
  );
}