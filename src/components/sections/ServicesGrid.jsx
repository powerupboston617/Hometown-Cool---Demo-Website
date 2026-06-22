import { business } from "../../data/business";
import { getServiceAccent } from "../../utils/cardAccent";
import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";

const serviceDescriptions = {
  "AC Installation": "New central air and heat pump systems sized for your home.",
  "AC Repair": "Fast diagnostics and repairs when your cooling system fails.",
  "Heating Installation": "Furnaces, boilers, and heat pumps installed right.",
  "Heating Repair": "24/7 emergency heating repair to restore warmth quickly.",
  "Ductless Mini-Splits": "Efficient heating and cooling without invasive ductwork.",
  "Maintenance Plans": "Seasonal tune-ups that prevent breakdowns and extend system life.",
};

const serviceSlugs = {
  "AC Installation": "ac-installation",
  "AC Repair": "air-conditioning-repair",
  "Heating Installation": "heating-system-installation",
  "Heating Repair": "heating-system-repair",
  "Ductless Mini-Splits": "ductless-mini-splits",
  "Maintenance Plans": "heating-system-maintenance",
};

export default function ServicesGrid({
  services = business.services,
  heading = "Our HVAC Services",
  subheading,
}) {
  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>
        {subheading && <p className="mt-4 text-lg text-text-muted">{subheading}</p>}
      </div>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const slug = serviceSlugs[service];

          return (
            <ServiceCard
              key={service}
              title={service}
              description={
                serviceDescriptions[service] || "Professional HVAC service tailored to your home."
              }
              slug={slug}
              accent={getServiceAccent(slug || service)}
            />
          );
        })}
      </div>
    </Container>
  );
}