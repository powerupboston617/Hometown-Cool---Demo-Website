import { business } from "../../data/business";
import Card from "../ui/Card";
import Container from "../ui/Container";

const serviceDescriptions = {
  "AC Installation": "New systems sized for your home and local climate.",
  "AC Repair": "Fast diagnostics and repairs when cooling fails.",
  "Heating Installation": "Furnaces, boilers, and heat pumps installed right.",
  "Heating Repair": "Emergency and scheduled heating repairs.",
  "Ductless Mini-Splits": "Efficient comfort without invasive ductwork.",
  "Maintenance Plans": "Seasonal tune-ups that prevent breakdowns.",
};

export default function GeoServicesHighlight({
  area,
  horizontal = false,
  heading = `HVAC Services in ${area.town}`,
  bare = false,
}) {
  const services =
    area.servicesHighlight?.length > 0 ? area.servicesHighlight : business.services;

  const content = (
    <>
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">{heading}</h2>
      <div
        className={
          horizontal
            ? "flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {services.map((service) => (
          <Card key={service} className={horizontal ? "min-w-[260px] shrink-0 md:min-w-0" : ""}>
            <div className="mb-2 h-1 w-8 rounded-full bg-brand-blue" />
            <h3 className="font-bold">{service}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {serviceDescriptions[service] || "Professional HVAC service for your home."}
            </p>
          </Card>
        ))}
      </div>
    </>
  );

  if (bare) return content;

  return <Container>{content}</Container>;
}