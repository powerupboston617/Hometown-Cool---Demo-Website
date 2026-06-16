import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import CTABanner from "../components/sections/CTABanner";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const programSteps = [
  {
    step: 1,
    title: "Schedule a Home Energy Assessment",
    description:
      "Book a no-cost virtual or in-person assessment. An energy specialist evaluates your home, suggests improvements, and provides a prioritized list of recommended upgrades.",
  },
  {
    step: 2,
    title: "Claim Instant Products",
    description:
      "During or after your assessment, receive free or heavily discounted energy-saving items such as LED bulbs, smart thermostats, and efficient showerheads.",
  },
  {
    step: 3,
    title: "Apply for Rebates & Upgrades",
    description:
      "Use program rebates on major improvements including weatherization (insulation and air sealing) and heat pump installations.",
  },
  {
    step: 4,
    title: "Access Financing",
    description:
      "Need help with upfront costs? Apply for a Mass Save HEAT Loan for zero-percent interest financing up to $25,000 on qualifying upgrades.",
  },
  {
    step: 5,
    title: "Check Income-Based Offers",
    description:
      "If your household income qualifies, you may be eligible for the Income Eligible Program, which can cover up to 100% of the cost for insulation, air sealing, and eligible appliance upgrades.",
  },
];

const programBenefits = [
  {
    label: "Energy Assessments",
    offer: "No-cost virtual or in-home evaluation",
    appliesTo: "All Massachusetts residents (start here)",
  },
  {
    label: "Instant Savings",
    offer: "Free or discounted LEDs, thermostats, showerheads",
    appliesTo: "During or after your assessment",
  },
  {
    label: "Equipment Rebates",
    offer: "Rebates on insulation, air sealing, heat pumps & more",
    appliesTo: "Major efficiency upgrades",
  },
  {
    label: "HEAT Loan",
    offer: "0% interest financing up to $25,000",
    appliesTo: "Qualifying weatherization & HVAC projects",
  },
  {
    label: "Income Eligible Program",
    offer: "Up to 100% coverage for eligible work",
    appliesTo: "Qualifying low- and moderate-income households",
  },
];

const hvacRebates = [
  {
    upgrade: "Air-source heat pump (heating & cooling)",
    benefit: "Rebates available through Mass Save partners",
    hometownRole: "We size, install, and document qualifying equipment",
  },
  {
    upgrade: "Ductless mini-splits",
    benefit: "Incentives for high-efficiency ductless systems",
    hometownRole: "Ideal for older Plymouth homes without ductwork",
  },
  {
    upgrade: "Weatherization (insulation & air sealing)",
    benefit: "Rebates that pair with HVAC performance gains",
    hometownRole: "We coordinate recommendations from your assessment",
  },
  {
    upgrade: "Smart thermostat",
    benefit: "Often included or discounted at assessment",
    hometownRole: "We integrate controls with new system installs",
  },
];

const utilitySponsors = [
  "Berkshire Gas",
  "Cape Light Compact",
  "Eversource",
  "Liberty Utilities",
  "National Grid",
  "Unitil",
];

export default function MassSavePage() {
  return (
    <>
      <PageHead
        title="Mass Save Program"
        description="Mass Save rebates, 0% HEAT Loans, and no-cost energy assessments for Massachusetts homeowners. Hometown Cooling & Heating helps Plymouth residents navigate HVAC incentives."
      />

      <PageHero
        logoSrc="/images/mass-save-logo.svg"
        logoAlt="Mass Save"
        title="Mass Save"
        subtitle="A consumer-funded Massachusetts program backed by the state's utility providers—helping residents lower energy use, cut costs, and upgrade to efficient heating and cooling."
        primaryCta="Ask About Mass Save"
        primaryCtaHref="#estimate"
        primaryCtaVariant="massSave"
        secondaryCta="Visit MassSave.com"
        secondaryCtaHref="https://www.masssave.com/en"
        imageSrc={siteImages.heatPumpUpgrade}
        imageAlt="Energy-efficient heat pump upgrade eligible for Mass Save rebates"
      />

      {/* Program overview */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">What Is Mass Save?</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Mass Save is a collaborative energy efficiency initiative sponsored by Massachusetts
              gas and electric utilities. Through rebates, zero-interest loans, and professional
              guidance, the program helps homeowners improve insulation, air sealing, and HVAC
              systems—including heat pumps—while reducing energy bills and carbon emissions.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                stat: "Rebates",
                label: "On insulation, weatherization, heat pumps, and efficient equipment",
              },
              {
                stat: "0% Loans",
                label: "HEAT Loan financing up to $25,000 for qualifying upgrades",
              },
              {
                stat: "No-Cost Assessments",
                label: "Virtual or in-person home energy evaluations to get started",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-8 text-center"
              >
                <p className="text-2xl font-bold text-brand-blue">{item.stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to participate — steps */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">How to Use the Program</h2>
            <p className="mt-3 text-lg text-gray-600">
              Residents can take advantage of Mass Save in five straightforward steps:
            </p>
          </div>

          <ol className="mx-auto mt-10 max-w-3xl space-y-0">
            {programSteps.map((item, index) => (
              <li
                key={item.step}
                className={`relative flex gap-6 pb-10 ${
                  index < programSteps.length - 1
                    ? "border-l border-gray-200 pl-8 ml-4 md:ml-6"
                    : "pl-8 ml-4 md:ml-6"
                }`}
              >
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-brand-white md:-left-5">
                  {item.step}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Program benefits table */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold">Program Benefits at a Glance</h2>
            <p className="mt-3 text-gray-600">
              A quick reference for the main offers available to Massachusetts residents.
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-5 py-4 font-semibold text-brand-black">Benefit</th>
                    <th className="px-5 py-4 font-semibold text-brand-black">What You Get</th>
                    <th className="px-5 py-4 font-semibold text-brand-black">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {programBenefits.map((row, index) => (
                    <tr
                      key={row.label}
                      className={index % 2 === 0 ? "bg-brand-white" : "bg-gray-50/50"}
                    >
                      <td className="px-5 py-4 font-medium text-brand-black">{row.label}</td>
                      <td className="px-5 py-4 text-gray-600">{row.offer}</td>
                      <td className="px-5 py-4 text-gray-600">{row.appliesTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* HVAC-specific table */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold">HVAC &amp; Heat Pump Incentives</h2>
            <p className="mt-3 text-gray-600">
              Mass Save is a major driver of heat pump adoption across Massachusetts. As your local
              HVAC contractor, we help Plymouth-area homeowners select qualifying equipment and
              complete installs that meet program requirements.
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-brand-white">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-5 py-4 font-semibold text-brand-black">Upgrade</th>
                    <th className="px-5 py-4 font-semibold text-brand-black">Mass Save Benefit</th>
                    <th className="px-5 py-4 font-semibold text-brand-black">How We Help</th>
                  </tr>
                </thead>
                <tbody>
                  {hvacRebates.map((row, index) => (
                    <tr key={row.upgrade} className={index % 2 === 0 ? "" : "bg-gray-50/50"}>
                      <td className="px-5 py-4 font-medium text-brand-black">{row.upgrade}</td>
                      <td className="px-5 py-4 text-gray-600">{row.benefit}</td>
                      <td className="px-5 py-4 text-gray-600">{row.hometownRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Rebate amounts and eligibility change periodically. Visit{" "}
              <a
                href="https://www.masssave.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-blue hover:text-brand-red hover:underline"
              >
                MassSave.com
              </a>{" "}
              for current offers, or contact us for guidance on your project.
            </p>
          </div>
        </Container>
      </Section>

      {/* HEAT Loan + Income eligible — side by side cards */}
      <Section>
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                Financing
              </p>
              <h3 className="mt-2 text-2xl font-bold">Mass Save HEAT Loan</h3>
              <dl className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-gray-600">Interest rate</dt>
                  <dd className="font-semibold">0%</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-gray-600">Maximum loan</dt>
                  <dd className="font-semibold">Up to $25,000</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-gray-600">Typical use</dt>
                  <dd className="text-right font-semibold">Insulation, air sealing, heat pumps</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Best for</dt>
                  <dd className="text-right font-semibold">Spreading upgrade costs over time</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-brand-red/20 bg-red-50/30 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                Income Eligible
              </p>
              <h3 className="mt-2 text-2xl font-bold">Enhanced Support</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Qualifying households may receive significantly greater assistance through the
                Income Eligible Program—including up to <strong>100% coverage</strong> for
                insulation, air sealing, and eligible appliance upgrades.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-red" aria-hidden="true">
                    ✓
                  </span>
                  No-cost or reduced-cost weatherization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-red" aria-hidden="true">
                    ✓
                  </span>
                  Eligible high-efficiency appliance upgrades
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-red" aria-hidden="true">
                    ✓
                  </span>
                  Income verification required
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sponsors + official link */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Backed by Massachusetts Utilities</h2>
            <p className="mt-3 text-gray-600">
              Mass Save is sponsored by the state&apos;s major gas and electric providers, including:
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {utilitySponsors.map((sponsor) => (
                <li
                  key={sponsor}
                  className="rounded-full border border-gray-200 bg-brand-white px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {sponsor}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">
              For official program details, current rebate amounts, and to schedule your no-cost
              energy assessment, visit{" "}
              <a
                href="https://www.masssave.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue hover:text-brand-red hover:underline"
              >
                MassSave.com
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Interested in Mass Save Rebates?"
        description="We help Plymouth-area homeowners understand which HVAC upgrades qualify—and handle professional installation to program standards."
      />
    </>
  );
}