import { Link } from "react-router-dom";
import { aggregateRating } from "../data/serviceAreas";
import { business } from "../data/business";
import { homeFaqs, processSteps, trustSignals } from "../data/homeContent";
import { serviceAreas } from "../data/serviceAreas";
import {
  buildFaqSchemaFromItems,
  buildSiteLocalBusinessSchema,
  buildWebSiteSchema,
} from "../utils/siteSchema";
import { siteImages } from "../data/siteImages";
import PageHead from "../components/layout/PageHead";
import SectionHeader from "../components/layout/SectionHeader";
import CTABanner from "../components/sections/CTABanner";
import PageHero from "../components/sections/PageHero";
import ContactSidebarCard from "../components/sections/ContactSidebarCard";
import FAQAccordion from "../components/sections/FAQAccordion";
import FeatureBlock from "../components/sections/FeatureBlock";
import ServicesGrid from "../components/sections/ServicesGrid";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import ContentCard from "../components/ui/ContentCard";
import InfoCard from "../components/ui/InfoCard";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import Section from "../components/ui/Section";
import StepCard from "../components/ui/StepCard";
import TownAreaCard from "../components/ui/TownAreaCard";

const homeSchemas = [
  buildSiteLocalBusinessSchema(business, {
    areaServed: serviceAreas.map((area) => area.town),
    aggregateRating,
  }),
  buildWebSiteSchema(business),
  buildFaqSchemaFromItems(homeFaqs),
].filter(Boolean);

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Hometown Cooling & Heating | Heat Pump | Mass Save | Plymouth, MA"
        description="Top-notch HVAC solutions for Plymouth and surrounding areas. Heating, cooling, installation, repair, and maintenance from a local team based on Hedges Pond Road."
        schemas={homeSchemas}
        ogImage={siteImages.heroHomepage}
      />

      <PageHero
        eyebrow="Plymouth, MA & Surrounding Areas"
        eyebrowClassName="text-[#9c2017]"
        title="Top-Notch HVAC Solutions for Your Hometown"
        subtitle="Hometown Cooling & Heating is your local HVAC contractor in Plymouth, MA — installing, repairing, and maintaining heating and air conditioning across the South Shore, South Coast, and Cape gateway communities. From heat pump upgrades and AC repair to emergency no-heat calls, we deliver dependable comfort backed by clear communication and workmanship you can trust."
        primaryCta="Get a Free Estimate"
        primaryCtaHref="#estimate"
        secondaryCta="View Services"
        secondaryCtaHref="/services"
        imageSrc={siteImages.heroHomepage}
        imageAlt="Ductless heat pump installed on a coastal New England home in the Plymouth area"
      />

      {/* Trust signals */}
      <section className="border-b border-border bg-surface-muted py-10 md:py-12">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <InfoCard key={signal.label} label={signal.label} detail={signal.detail} hoverable />
            ))}
          </ul>
        </Container>
      </section>

      {/* Local intro — split column + sidebar */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-6 lg:col-span-2">
              <SectionHeader
                align="left"
                title="Your Local HVAC Contractor in Plymouth, Massachusetts"
              />
              <p className="text-lg leading-relaxed text-text-muted">
              When your furnace quits on a January night or your AC struggles through a humid
              August week, you want a team that actually knows your neighborhood — not a
              dispatch center three states away. We're headquartered at{" "}
              <strong>
                {business.street}, {business.city}, {business.state} {business.zip}
              </strong>
              , and most of our work happens within a 30-mile radius of Plymouth. That local
              focus means faster drive times, familiarity with regional building styles, and
              technicians who understand what coastal Massachusetts does to heating and cooling
              equipment over time.
            </p>
              <p className="text-lg leading-relaxed text-text-muted">
              Whether you own a year-round home in Plymouth Center, a seasonal cottage toward
              the Cape, or a larger property inland in Carver or Middleborough, comfort needs
              vary — and so do the right solutions. We install{" "}
              <Link
                to="/services/heating-system-installation"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                furnaces and boilers
              </Link>
              ,{" "}
              <Link
                to="/services/ac-installation"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                central air and heat pumps
              </Link>
              , and{" "}
              <Link
                to="/services/ductless-mini-splits"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                ductless mini-splits
              </Link>{" "}
              sized for your layout. When something breaks, our{" "}
              <Link
                to="/services/heating-system-repair"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                heating repair
              </Link>{" "}
              and{" "}
              <Link
                to="/services/air-conditioning-repair"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                AC repair
              </Link>{" "}
              teams diagnose the root cause instead of patching symptoms. And for homeowners
              planning ahead,{" "}
              <Link
                to="/services/heating-system-maintenance"
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                seasonal maintenance
              </Link>{" "}
              keeps small issues from becoming expensive emergencies.
            </p>
              <p className="text-lg leading-relaxed text-text-muted">
              Our business hours are {business.hours}. For urgent no-heat situations, call{" "}
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="font-semibold text-brand-blue hover:text-brand-red"
              >
                {business.phone}
              </a>{" "}
              — we'll work to get heat restored as quickly as we can. For installations,
              efficiency upgrades, and routine service, request a free estimate and we'll follow
              up with next steps.
              </p>
            </div>
            <ContactSidebarCard className="h-fit lg:sticky lg:top-24" />
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-surface-muted">
        <ServicesGrid
          heading="HVAC Services for the South Shore &amp; Beyond"
          subheading="Installation, repair, maintenance, and energy-efficient upgrades for heating and cooling systems — from Plymouth to Duxbury, Wareham, and surrounding towns."
        />
        <Container>
          <p className="mx-auto mt-10 max-w-3xl text-center text-text-muted">
            Explore our full{" "}
            <Link to="/services" className="font-semibold text-brand-blue hover:text-brand-red">
              services directory
            </Link>{" "}
            for detailed information on each offering, or read about{" "}
            <Link
              to="/services/energy-efficient-upgrades"
              className="font-semibold text-brand-blue hover:text-brand-red"
            >
              energy-efficient upgrades
            </Link>{" "}
            and{" "}
            <Link
              to="/services/indoor-air-quality-solutions"
              className="font-semibold text-brand-blue hover:text-brand-red"
            >
              indoor air quality
            </Link>{" "}
            if you're improving comfort beyond temperature alone.
          </p>
        </Container>
      </Section>

      {/* Systems we install — card grid */}
      <Section>
        <Container>
          <SectionHeader
            align="left"
            eyebrow="What We Service"
            title="Heating &amp; Cooling Systems We Install and Service"
            description="Every home is a little different on the South Shore. Some properties have full basement ductwork and a aging furnace that still runs — others heat with boilers and radiators and have never had central air. We match equipment to your existing infrastructure instead of forcing a one-size-fits-all package."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ContentCard title="Furnaces, Boilers &amp; Traditional Heat" accent="red" hoverable>
              <p>
                High-efficiency gas and oil furnaces remain a practical choice for many Plymouth
                County homes with existing ductwork. We also work on boiler systems — common in
                older colonials and Cape-style houses — and handle conversions carefully when
                homeowners want to modernize. Proper sizing matters: an oversized furnace short-cycles
                and wastes fuel, while an undersized unit never catches up on the coldest nights.
                Our installation process includes load assessment, venting and gas line review, and
                startup testing so you know the system is safe before we leave.
              </p>
            </ContentCard>
            <ContentCard title="Heat Pumps &amp; Central Air" accent="blue" hoverable>
              <p>
                Air-source heat pumps have become one of the most requested upgrades in our market.
                They move heat rather than generate it, which can lower operating costs compared to
                resistance heat or older equipment. For homes with ducts, a central heat pump or
                dual-fuel setup may be the answer. For homes without, ductless mini-splits deliver
                room-by-room control with minimal renovation. We install equipment from established
                manufacturers and configure it for Massachusetts climate conditions — not generic
                templates meant for milder regions.
              </p>
            </ContentCard>
            <ContentCard
              title="Repair, Maintenance &amp; Indoor Air Quality"
              accent="green"
              className="md:col-span-2 lg:col-span-1"
              hoverable
            >
              <p>
                Not every visit ends in replacement. Strange noises, uneven temperatures, rising
                utility bills, and short cycling are often repairable when caught early. Our
                maintenance visits include safety checks, filter review, coil cleaning, and
                combustion analysis where applicable. If your concern is air quality — dust, pollen,
                or stale air in a tightly sealed modern home — we can discuss filtration upgrades
                and ventilation options as part of a broader comfort plan. Year-round planning is
                covered in{" "}
                <Link
                  to="/blog/plymouth-year-round-smart-hvac"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  our year-round HVAC guide
                </Link>
                .
              </p>
            </ContentCard>
          </div>
        </Container>
      </Section>

      {/* Coastal climate — bento card grid */}
      <Section className="bg-surface-muted">
        <Container>
          <SectionHeader
            eyebrow="South Shore Climate"
            title="HVAC Built for Coastal Massachusetts Weather"
            description="Living on the South Shore or near Buzzards Bay isn't quite the same as heating and cooling a home in central Massachusetts. Salt air corrodes outdoor condenser coils and fasteners faster than inland exposure. Summer humidity makes your air conditioner work harder and can leave rooms feeling clammy even when the thermostat says cool. Spring and fall bring shoulder-season swings — a 55-degree morning and a 72-degree afternoon in the same day — that strain single-stage equipment cycling on and off."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ContentCard title="Salt Air &amp; Outdoor Equipment" accent="blue" className="md:row-span-1" hoverable>
              <p>
                Homes in Scituate, Marshfield, Duxbury, Mattapoisett, and other waterfront
                communities should plan for more frequent condenser rinses and coil inspections.
                We recommend equipment placement that minimizes direct salt spray where possible,
                and we talk honestly about maintenance intervals that match your property's
                exposure. Ignoring coastal wear is one of the most common reasons outdoor units fail
                earlier than expected.
              </p>
            </ContentCard>
            <ContentCard title="Humidity &amp; Indoor Comfort" accent="blue" hoverable>
              <p>
                Cooling alone doesn't always solve comfort complaints. If your home feels damp in
                July, the issue may be oversized equipment, poor airflow, or a system that never
                runs long enough to remove moisture. We evaluate ductwork, filtration, and
                equipment sizing together — and when appropriate, discuss{" "}
                <Link
                  to="/services/ductless-mini-splits"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  ductless zones
                </Link>{" "}
                or upgrades that improve dehumidification without major renovation.
              </p>
            </ContentCard>
            <ContentCard title="Older Homes &amp; Limited Ductwork" accent="red" hoverable>
              <p>
                Plymouth County has plenty of colonials, Capes, and post-war homes that were built
                for oil heat and never meant for central air. Adding ductwork can be invasive and
                expensive. Ductless mini-splits and modern cold-climate heat pumps give you
                efficient heating and cooling with minimal disruption — a reason they're among the
                most requested upgrades we see from South Shore homeowners. Read how local seasons
                affect your system in{" "}
                <Link
                  to="/blog/navigating-plymouth-shoulder-season"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  our shoulder-season guide
                </Link>{" "}
                and{" "}
                <Link
                  to="/blog/beat-the-heat-damp-south-shore"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  tips for humid summers
                </Link>
                .
              </p>
            </ContentCard>
            <ContentCard title="Winter Storms &amp; Freezing Conditions" accent="blue" hoverable>
              <p>
                Nor'easters and extended cold snaps stress heating systems that were already
                borderline. Frozen pipes, failed ignitors, and clogged filters show up when demand
                is highest. We recommend a fall tune-up before heating season and practical steps
                like keeping outdoor heat pump units clear of snow buildup. If you lose heat during
                a storm, call right away — and see our article on{" "}
                <Link
                  to="/blog/surviving-storm-plymouth-freezes"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  preparing for Plymouth freezes
                </Link>{" "}
                for preventative advice.
              </p>
            </ContentCard>
          </div>
        </Container>
      </Section>

      {/* Cooling teaser */}
      <Section>
        <FeatureBlock
          title="Beat the Heat"
          description="When summer humidity rolls in off the bay, you need cooling that actually keeps up. We install new central air and heat pump systems sized for your home's layout, repair failing compressors and refrigerant issues, and perform preseason tune-ups so you're not calling for AC repair on the hottest week of the year. From Plymouth village to coastal Scituate, we help South Shore homeowners stay comfortable without runaway electric bills."
          imageAlt="Professional air conditioning installation at a residential home"
          imageSrc={siteImages.coolingService}
          accent="blue"
          imageHoverable
        />
      </Section>

      {/* Heating teaser */}
      <Section className="bg-surface-muted">
        <FeatureBlock
          title="Stay Warm All Winter"
          description="New England winters don't forgive a neglected furnace. We install high-efficiency furnaces and boilers, service heat pumps that heat down to low outdoor temperatures, and respond to emergency no-heat calls when your family needs warmth now. Whether you're replacing a 20-year-old system in Kingston or troubleshooting uneven heat in a Plympton colonial, our heating team focuses on safe, code-compliant work and honest recommendations — repair when it makes sense, replace when it saves money long term."
          imageAlt="High-efficiency home heating system in a residential mechanical room"
          imageSrc={siteImages.heatingService}
          reverse
          accent="red"
          imageHoverable
        />
      </Section>

      {/* Mass Save */}
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Mass Save Rebates &amp; Efficient Upgrades
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Massachusetts homeowners have access to some of the strongest energy-efficiency
                incentives in the country through the{" "}
                <Link to="/mass-save" className="font-semibold text-brand-blue hover:text-brand-red">
                  Mass Save program
                </Link>
                . Heat pumps, ductless mini-splits, insulation, and weatherization can qualify
                for rebates and zero-interest HEAT Loan financing when you follow program steps —
                starting with a home energy assessment.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                As a Mass Save partner, we help you understand which HVAC upgrades fit your
                comfort goals and which documentation you'll need for rebate submissions. Program
                rules and dollar amounts change, so we confirm current eligibility when we quote
                your project — no outdated promises. Many customers pair equipment upgrades with
                the efficiency planning described in{" "}
                <Link
                  to="/blog/maximize-home-efficiency-mass-save-program"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  our Mass Save overview
                </Link>
                .
              </p>
              <div className="mt-8">
                <Button href="/mass-save" variant="massSave" size="lg">
                  Learn About Mass Save
                </Button>
              </div>
            </div>
            <div className="card-surface card-hover card-hover-green flex flex-col items-center justify-center p-10">
              <img
                src="/images/mass-save-heat-pump.png"
                alt="Mass Save heat pump partner logo"
                className="h-auto max-w-[240px]"
                width={240}
                height={120}
              />
              <p className="mt-6 text-center text-text-muted">
                Ask about qualifying heat pump and mini-split installations when you request your
                estimate.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service areas — town card grid */}
      <Section>
        <Container>
          <SectionHeader
            title="South Shore &amp; Plymouth County Service Areas"
            description="We serve 16 towns across the South Shore, South Coast, Cape gateway, and inland Plymouth County. Select your community for locally tailored HVAC information."
          />
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-text-muted">
            View the full{" "}
            <Link
              to="/service-areas"
              className="font-semibold text-brand-blue hover:text-brand-red"
            >
              service areas map
            </Link>
            .
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <TownAreaCard area={area} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How we work — step card grid */}
      <Section className="bg-surface-muted">
        <Container>
          <SectionHeader
            title="How We Work With Homeowners"
            description="Straightforward process, clear pricing, and technicians who respect your home — from the first call through startup and follow-up."
          />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
              <StepCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                hoverable
                accent="green"
              />
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Button href="#estimate" size="lg">
              Start With a Free Estimate
            </Button>
          </div>
        </Container>
      </Section>

      {/* Mission & Values */}
      <Section dark>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Our Mission &amp; Values</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                At Hometown Cooling &amp; Heating, our mission is to provide exceptional heating,
                ventilation, and air conditioning services that ensure the comfort, health, and
                satisfaction of our customers. We are committed to delivering innovative,
                energy-efficient solutions and top-quality workmanship through our team of skilled
                professionals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Our goal is to build lasting relationships with our clients by exceeding their
                expectations, offering reliable and timely service, and maintaining the highest
                standards of integrity and excellence in everything we do. We're neighbors serving
                neighbors — and that shows in how we communicate, how we stand behind our work,
                and how we show up when you need us.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Learn more about our team on the{" "}
                <Link to="/about" className="font-semibold text-brand-red hover:text-white">
                  About page
                </Link>
                , browse{" "}
                <Link to="/blog" className="font-semibold text-brand-red hover:text-white">
                  The Journal
                </Link>{" "}
                for seasonal HVAC tips, or{" "}
                <Link to="/contact" className="font-semibold text-brand-red hover:text-white">
                  contact us
                </Link>{" "}
                with questions about your project.
              </p>
            </div>
            <ResponsiveImage
              src={siteImages.indoorComfort}
              alt="Comfortable home interior with climate control"
              aspectClass="aspect-[4/3]"
              className="shadow-lg shadow-black/30"
            />
          </div>
        </Container>
      </Section>

      {/* FAQ — split column with contact sidebar */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <FAQAccordion
                heading="Frequently Asked Questions About HVAC in Plymouth, MA"
                items={homeFaqs}
              />
              <p className="mt-8 text-text-muted">
                Have a question we didn't cover?{" "}
                <Link to="/contact" className="font-semibold text-brand-blue hover:text-brand-red">
                  Send us a message
                </Link>{" "}
                or call{" "}
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  {business.phone}
                </a>
                . For emergency heating, see our{" "}
                <Link
                  to="/services/emergency-heating-services"
                  className="font-semibold text-brand-blue hover:text-brand-red"
                >
                  emergency heating services
                </Link>{" "}
                page.
              </p>
            </div>
            <ContactSidebarCard className="h-fit lg:sticky lg:top-24" />
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready for Dependable Heating &amp; Cooling?"
        description="Request a free estimate for installation, repair, or maintenance — or call our Plymouth office and speak with our team directly."
      />
    </>
  );
}