import { Link } from "react-router-dom";
import { business } from "../data/business";
import { serviceAreas } from "../data/serviceAreas";
import { siteImages } from "../data/siteImages";
import { buildBreadcrumbSchema, buildItemListSchema } from "../utils/siteSchema";
import PageHead from "../components/layout/PageHead";
import PageHero from "../components/sections/PageHero";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const regionOrder = ["South Shore", "South Coast", "Cape", "Inland"];

const regionDescriptions = {
  "South Shore":
    "Coastal and harbor-area homes from Hingham to Plymouth — salt air, humidity, and historic housing stock.",
  "South Coast":
    "Buzzards Bay and Onset communities where coastal weather shapes HVAC needs year-round.",
  Cape: "Gateway and Cape Cod towns with seasonal homes, humidity, and salt-exposed outdoor equipment.",
  Inland:
    "Rural and larger-lot communities where system sizing, furnace upgrades, and efficiency matter most.",
};

function groupByRegion(areas) {
  return areas.reduce((groups, area) => {
    const list = groups[area.region] || [];
    list.push(area);
    groups[area.region] = list;
    return groups;
  }, {});
}

export default function ServiceAreasIndexPage() {
  const grouped = groupByRegion(serviceAreas);

  return (
    <>
      <PageHead
        title="Service Areas | South Shore & Plymouth County HVAC"
        description="Hometown Cooling & Heating serves Plymouth County and surrounding South Shore, South Coast, Cape, and inland communities."
        schemas={[
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
            ],
            business
          ),
          buildItemListSchema(
            "HVAC Service Areas",
            serviceAreas.map((area) => ({
              name: area.town,
              path: `/service-areas/${area.slug}`,
            })),
            business
          ),
        ].filter(Boolean)}
        ogImage={siteImages.heroServiceAreas}
      />

      <PageHero
        title="Service Areas"
        subtitle="Based in Plymouth, we provide heating and cooling service across 16 towns on the South Shore, South Coast, Cape, and inland Plymouth County."
        primaryCta="Get a Free Estimate"
        primaryCtaHref="/contact#estimate"
        secondaryCta="Contact Us"
        secondaryCtaHref="/contact"
        imageSrc={siteImages.heroServiceAreas}
        imageAlt="New England neighborhood homes served by Hometown Cooling and Heating"
      />

      {regionOrder.map((region) => {
        const towns = grouped[region];
        if (!towns?.length) return null;

        return (
          <Section key={region} className={region === "South Coast" || region === "Inland" ? "bg-gray-50" : ""}>
            <Container>
              <div className="mb-8">
                <h2 className="text-3xl font-bold">{region}</h2>
                <p className="mt-2 max-w-2xl text-gray-600">{regionDescriptions[region]}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {towns.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <Card className="h-full transition-colors group-hover:border-brand-red">
                      <h3 className="text-lg font-bold group-hover:text-brand-red">
                        {area.town}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{area.county}</p>
                      <p className="mt-3 line-clamp-2 text-sm text-gray-600">{area.intro}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-brand-blue group-hover:text-brand-red">
                        View services →
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}