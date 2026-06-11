import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import CTABanner from "../components/sections/CTABanner";
import FeatureBlock from "../components/sections/FeatureBlock";
import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const keyFeatures = [
  {
    title: "Energy Assessments",
    description:
      "Mass Save offers free home and business energy assessments. During these assessments, experts evaluate the building's energy use and provide recommendations for efficiency improvements.",
  },
  {
    title: "Rebates and Incentives",
    description:
      "The program provides rebates and financial incentives for energy-efficient appliances, HVAC systems, water heaters, insulation, windows, and lighting. These rebates help reduce the upfront cost of purchasing more efficient equipment.",
  },
  {
    title: "Discounts and Instant Savings",
    description:
      "Customers can take advantage of discounts on energy-efficient products like LED bulbs, thermostats, and smart power strips. Often, these products are available at reduced prices in retail stores or through the Mass Save online marketplace.",
  },
  {
    title: "Weatherization and Insulation Services",
    description:
      "Mass Save offers discounts on insulation and weatherization services. By improving insulation, homeowners and businesses can reduce heating and cooling costs.",
  },
  {
    title: "Heat Pump Programs",
    description:
      "Financial incentives are available for installing energy-efficient heating and cooling systems, such as air-source or ground-source heat pumps, which reduce reliance on fossil fuels.",
  },
  {
    title: "Income-Eligible Programs",
    description:
      "Special programs are available for low- and moderate-income households to ensure that everyone can benefit from energy-saving measures, often at no cost.",
  },
  {
    title: "Financing Options",
    description:
      "Mass Save provides access to 0% interest financing for qualifying energy-efficient upgrades through the Mass Save HEAT Loan Program. This helps spread out the cost of energy-efficient improvements over time.",
  },
  {
    title: "Business Programs",
    description:
      "The program also extends to businesses, offering customized energy-saving recommendations, financial incentives, and support for commercial energy projects.",
  },
];

const goals = [
  {
    title: "Energy Reduction",
    description:
      "To help the state meet its ambitious energy and carbon reduction goals by promoting energy-efficient practices.",
  },
  {
    title: "Cost Savings",
    description:
      "To lower energy bills for Massachusetts residents and businesses by reducing energy consumption.",
  },
  {
    title: "Environmental Impact",
    description:
      "To contribute to the state's climate goals by lowering greenhouse gas emissions through energy efficiency.",
  },
];

export default function MassSavePage() {
  return (
    <>
      <PageHead
        title="Mass Save Energy Efficiency Program"
        description="Learn about Massachusetts Mass Save rebates, incentives, and 0% HEAT Loan financing for energy-efficient HVAC upgrades."
      />

      <PageHero
        title="Mass Save"
        subtitle="The Mass Save program is a collaborative energy efficiency initiative in Massachusetts, aimed at helping residents, businesses, and communities reduce energy consumption and costs. It is sponsored by a collection of the state's gas and electric utility companies and energy efficiency service providers, such as National Grid, Eversource, Cape Light Compact, and others."
        primaryCta="Ask About Mass Save"
        primaryCtaHref="/contact#estimate"
        imageSrc={siteImages.heatPumpUpgrade}
        imageAlt="Energy-efficient heat pump HVAC upgrade eligible for Mass Save rebates"
      />

      <Section className="bg-gray-50">
        <FeatureBlock
          title="Heat Pump Rebates & Upgrades"
          description="Mass Save offers financial incentives for installing energy-efficient heating and cooling systems like air-source heat pumps. We help Plymouth-area homeowners navigate rebates, financing, and the right equipment for their home."
          imageAlt="Modern heat pump system installation"
          imageSrc={siteImages.ductlessMiniSplit}
          reverse
          accent="blue"
        />
      </Section>

      <Section>
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Key Features of Mass Save</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {keyFeatures.map((feature) => (
              <Card key={feature.title}>
                <div className="mb-3 h-1 w-10 rounded-full bg-brand-blue" />
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="mb-8 text-3xl font-bold">Goals of Mass Save</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {goals.map((goal) => (
              <Card key={goal.title}>
                <h3 className="text-lg font-bold text-brand-red">{goal.title}</h3>
                <p className="mt-2 text-gray-600">{goal.description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg text-gray-600">
            Mass Save is part of Massachusetts&apos; broader effort to transition to a more
            sustainable energy future, making it one of the leading states in energy efficiency in
            the U.S.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Contact Us About Rebates
            </Button>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Interested in Mass Save Rebates?"
        description="We can help you understand which HVAC upgrades qualify for Mass Save incentives and financing."
      />
    </>
  );
}