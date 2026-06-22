import { business } from "../data/business";
import { massSaveFaqs, massSaveLocalSection } from "../data/massSaveContent";
import { siteImages } from "../data/siteImages";
import { buildBreadcrumbSchema, buildFaqSchemaFromItems } from "../utils/siteSchema";
import PageHead from "../components/layout/PageHead";
import SectionHeader from "../components/layout/SectionHeader";
import CTABanner from "../components/sections/CTABanner";
import FAQAccordion from "../components/sections/FAQAccordion";
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

const highlightCards = [
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

function HighlightCard({ stat, label }) {
  return (
    <article className="card-hover card-hover-green flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-surface-muted px-6 py-10 text-center md:px-8 md:py-12">
      <h3 className="text-2xl font-bold text-brand-green md:text-3xl">{stat}</h3>
      <p className="mt-4 max-w-[16rem] text-base leading-relaxed text-text-muted">{label}</p>
    </article>
  );
}

function ProgramStep({ item }) {
  return (
    <li className="card-hover card-hover-green flex items-start gap-5 rounded-2xl border border-border bg-surface p-6 shadow-card md:gap-6 md:p-8">
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-brand-white md:h-16 md:w-16 md:text-2xl"
        aria-hidden="true"
      >
        {item.step}
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-bold leading-snug text-brand-black md:text-xl">{item.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-text-muted">{item.description}</p>
      </div>
    </li>
  );
}

function DataTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead>
            <tr className="border-b border-border bg-surface-muted">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-5 text-sm font-semibold uppercase tracking-wide text-brand-black md:px-8 md:py-6"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, index) => (
              <tr key={row.key} className={index % 2 === 0 ? "bg-surface" : "bg-surface-muted/50"}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-6 py-5 text-base leading-relaxed md:px-8 md:py-6 ${
                      cellIndex === 0 ? "font-semibold text-brand-black" : "text-text-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MassSavePage() {
  const leftSteps = programSteps.slice(0, 3);
  const rightSteps = programSteps.slice(3);

  return (
    <>
      <PageHead
        title="Mass Save Program | Heat Pump Rebates Plymouth, MA"
        description="Mass Save rebates, 0% HEAT Loans, and no-cost energy assessments for Massachusetts homeowners. Hometown Cooling & Heating helps Plymouth residents navigate HVAC incentives."
        schemas={[
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Mass Save", path: "/mass-save" },
            ],
            business
          ),
          buildFaqSchemaFromItems(massSaveFaqs),
        ].filter(Boolean)}
        ogImage={siteImages.heatPumpUpgrade}
      />

      <PageHero
        logoSrc="/images/mass-save-heat-pump.png"
        logoAlt="Mass Save"
        logoClassName="mb-6 h-[59px] w-auto md:h-[67px]"
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

      <Section>
        <Container>
          <SectionHeader
            title="What Is Mass Save?"
            description="Mass Save is a collaborative energy efficiency initiative sponsored by Massachusetts gas and electric utilities. Through rebates, zero-interest loans, and professional guidance, the program helps homeowners improve insulation, air sealing, and HVAC systems—including heat pumps—while reducing energy bills and carbon emissions."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {highlightCards.map((card) => (
              <HighlightCard key={card.stat} stat={card.stat} label={card.label} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <SectionHeader
            title="How to Use the Program"
            description="Residents can take advantage of Mass Save in five straightforward steps:"
            align="left"
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <ol className="flex list-none flex-col gap-6 p-0">
              {leftSteps.map((item) => (
                <ProgramStep key={item.step} item={item} />
              ))}
            </ol>
            <ol className="flex list-none flex-col gap-6 p-0">
              {rightSteps.map((item) => (
                <ProgramStep key={item.step} item={item} />
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Program Benefits at a Glance"
            description="A quick reference for the main offers available to Massachusetts residents."
            align="left"
            className="mb-12 md:mb-16"
          />

          <DataTable
            columns={["Benefit", "What You Get", "Best For"]}
            rows={programBenefits.map((row) => ({
              key: row.label,
              cells: [row.label, row.offer, row.appliesTo],
            }))}
          />
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <SectionHeader
            title="HVAC & Heat Pump Incentives"
            description="Mass Save is a major driver of heat pump adoption across Massachusetts. As your local HVAC contractor, we help Plymouth-area homeowners select qualifying equipment and complete installs that meet program requirements."
            align="left"
            className="mb-12 md:mb-16"
          />

          <DataTable
            columns={["Upgrade", "Mass Save Benefit", "How We Help"]}
            rows={hvacRebates.map((row) => ({
              key: row.upgrade,
              cells: [row.upgrade, row.benefit, row.hometownRole],
            }))}
          />

          <p className="mt-10 text-sm text-text-subtle">
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
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <article className="rounded-2xl border border-border p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                Financing
              </p>
              <h3 className="mt-3 text-2xl font-bold">Mass Save HEAT Loan</h3>
              <dl className="mt-8 space-y-5">
                <div className="flex justify-between border-b border-border pb-4">
                  <dt className="text-text-muted">Interest rate</dt>
                  <dd className="font-semibold">0%</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-4">
                  <dt className="text-text-muted">Maximum loan</dt>
                  <dd className="font-semibold">Up to $25,000</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-4">
                  <dt className="text-text-muted">Typical use</dt>
                  <dd className="text-right font-semibold">Insulation, air sealing, heat pumps</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">Best for</dt>
                  <dd className="text-right font-semibold">Spreading upgrade costs over time</dd>
                </div>
              </dl>
            </article>

            <article className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                Income Eligible
              </p>
              <h3 className="mt-3 text-2xl font-bold">Enhanced Support</h3>
              <p className="mt-5 leading-relaxed text-text-muted">
                Qualifying households may receive significantly greater assistance through the
                Income Eligible Program—including up to <strong>100% coverage</strong> for
                insulation, air sealing, and eligible appliance upgrades.
              </p>
              <ul className="mt-6 space-y-3 text-text-muted">
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
            </article>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {massSaveLocalSection.heading}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-muted">
              {massSaveLocalSection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion heading="Mass Save FAQ" items={massSaveFaqs} />
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Backed by Massachusetts Utilities</h2>
            <p className="mt-6 text-lg text-text-muted">
              Mass Save is sponsored by the state&apos;s major gas and electric providers, including:
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-4">
              {utilitySponsors.map((sponsor) => (
                <li
                  key={sponsor}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text-muted"
                >
                  {sponsor}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg text-text-muted">
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
        description="We help Plymouth and South Shore homeowners understand which HVAC upgrades qualify — and handle professional installation to program standards."
      />
    </>
  );
}