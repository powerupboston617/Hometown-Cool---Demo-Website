import { business } from "./business";

export const aboutSections = [
  {
    heading: "Who We Are",
    paragraphs: [
      `${business.name} is a Plymouth, Massachusetts HVAC contractor headquartered at ${business.street}, ${business.city}, ${business.state} ${business.zip}. We install, repair, and maintain heating and air conditioning systems for homeowners across the South Shore, South Coast, Cape gateway towns, and inland Plymouth County.`,
      "We're not a national franchise with a local phone number — we're neighbors serving neighbors. Our technicians work in the same coastal humidity, salt air, and New England temperature swings your home faces. That local context shapes how we size equipment, recommend maintenance, and show up when you need follow-up after an install.",
    ],
  },
  {
    heading: "What We Do",
    paragraphs: [
      "Our services span the full residential HVAC lifecycle: furnace and boiler installation, heat pumps and central AC, ductless mini-splits, heating and AC repair, emergency no-heat response, seasonal maintenance plans, energy-efficient upgrades, indoor air quality improvements, and Mass Save rebate guidance on qualifying projects.",
      "Every job starts with listening — what's uncomfortable, what's failing, what you're hoping to improve — followed by an on-site assessment when the project warrants it. You get clear options and upfront pricing before work begins.",
    ],
  },
  {
    heading: "How We're Different",
    paragraphs: [
      "South Shore housing isn't one-size-fits-all. Harbor cottages without ductwork, inland colonials with aging oil heat, and newer subdivisions with modern ductwork all need different solutions. We recommend equipment matched to your home instead of pushing the same package everywhere.",
      "We guide customers through Mass Save when heat pumps or efficiency upgrades qualify, document warranty and rebate requirements, and stand behind our workmanship. License and insurance details are available on request — MA HVAC License #[Pending].",
    ],
  },
];

export const aboutValues = [
  {
    title: "Integrity",
    description:
      "Honest repair-or-replace advice, clear estimates, and no pressure sales. If a $200 part fixes the problem, we'll say so.",
  },
  {
    title: "Quality Workmanship",
    description:
      "Code-compliant installs, proper sizing, thorough startup testing, and respect for your home during every visit.",
  },
  {
    title: "Local Accountability",
    description:
      "Based in Plymouth, accountable in the community, and a short drive away when something needs adjustment after install.",
  },
  {
    title: "Energy Smarts",
    description:
      "Right-sized efficient equipment and Mass Save guidance so upgrades deliver real comfort and real savings.",
  },
];

export const aboutFaqs = [
  {
    q: "Where is Hometown Cooling & Heating located?",
    a: `We're at ${business.street}, ${business.city}, ${business.state} ${business.zip} — our home base for daily service across Plymouth County and the South Shore.`,
  },
  {
    q: "What towns do you serve?",
    a: "We serve Plymouth and 15 surrounding communities including Duxbury, Marshfield, Scituate, Hingham, Bourne, Wareham, Kingston, Carver, Pembroke, Halifax, Middleborough, and more. See our service areas page for the full list.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are fully insured. MA HVAC License #[Pending] — update with your license number before launch.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Request a free estimate online, through our contact form, or by calling (774) 454-0290. Installations and larger projects include an on-site assessment.",
  },
  {
    q: "Are you a Mass Save partner?",
    a: "Yes. We help homeowners understand qualifying heat pump and efficiency upgrades and install equipment to program standards when rebates apply.",
  },
  {
    q: "How do I leave a review?",
    a: "We welcome feedback from customers. Reviews will be shared on our reviews page as verified testimonials become available. You can also reach out through our contact page or Facebook.",
  },
];