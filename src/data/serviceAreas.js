// One source of truth for all 16 geo landing pages.
// The geo-page template reads from this file. The `layout` field controls
// which structural variant renders (rotated A/B/C/D so adjacent towns differ).
//
// COPY STATUS: intro / body / faq / metaDescription / heroHeadline /
// heroSubhead are populated with unique, town-specific copy. Angles vary
// by `region`:
//   - South Shore / South Coast / Cape (coastal): salt air, humidity,
//     shoulder-season swings, older/seasonal homes, mini-split retrofits.
//   - Inland: larger lots, system sizing, older-furnace themes, wider
//     temperature range.
//
// BEFORE LAUNCH, fill these per town:
//   - mapEmbed: Google Maps "Embed a map" iframe src URL (Share > Embed).
//   - lat / lng: optional; if set, used for map fallback AND schema geo.
//   - landmarkImage: drop a real photo at the given path. No random stock.
//   - testimonial: real customer quote only. Leave null until you have one;
//     never fabricate. The component hides the section when testimonial is null.
//
// servicesHighlight: 2-3 service names (must match values in business.js
// `services`) that this town's page leads with, for natural copy variation.

export const serviceAreas = [
  {
    slug: "duxbury",
    town: "Duxbury",
    county: "Plymouth County",
    region: "South Shore",
    layout: "A",
    metaTitle: "HVAC, Heating & AC Services in Duxbury, MA | Hometown Cooling & Heating",
    metaDescription: "Heating and air conditioning service for Duxbury homes built for coastal weather. Installation, repair, and maintenance from a local Plymouth-based team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Duxbury",
    heroHeadline: "Coastal-Ready Comfort for Duxbury Homes",
    heroSubhead: "Heating and cooling that stands up to bay-side salt air, from a team based just down the road in Plymouth.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/duxbury.jpg",
    landmarkAlt: "Powder Point Bridge in Duxbury, Massachusetts",
    landmarkName: "Powder Point Bridge",
    servicesHighlight: ["Ductless Mini-Splits", "AC Installation", "Maintenance Plans"],
    neighbors: ["Marshfield", "Kingston", "Pembroke"],
    intro:
      "Duxbury's location right on the bay means homes here take a beating from salt air and damp ocean wind. We help homeowners across town keep heating and cooling systems running reliably through coastal weather that's tough on outdoor equipment.",
    body:
      "From the older homes near Snug Harbor to newer construction inland of Route 3A, Duxbury has a wide mix of housing, and each needs a different approach to comfort. Coastal humidity puts extra strain on condenser units and accelerates corrosion, so we size and place equipment with salt exposure in mind and recommend maintenance schedules that catch wear early. Whether you're replacing an aging system, adding cooling to a home that never had it, or fitting ductless mini-splits into a historic property where ductwork isn't practical, we handle the full range of HVAC work for Duxbury homeowners.",
    faq: [
      {
        q: "Does living near the water in Duxbury affect my AC unit?",
        a: "Yes. Salt air speeds up corrosion on outdoor condenser coils and hardware. We recommend coastal-rated equipment where it makes sense and regular rinse-downs and inspections to extend the life of your system.",
      },
      {
        q: "Can you add air conditioning to an older Duxbury home without ducts?",
        a: "Absolutely. Ductless mini-split systems are ideal for older and historic homes where adding ductwork would be invasive or impossible. They cool and heat efficiently without major renovation.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Marshfield", "Kingston", "Scituate"],
  },
  {
    slug: "marshfield",
    town: "Marshfield",
    county: "Plymouth County",
    region: "South Shore",
    layout: "B",
    metaTitle: "HVAC, Heating & AC Services in Marshfield, MA | Hometown Cooling & Heating",
    metaDescription: "Marshfield heating and cooling service for year-round and coastal homes. AC installation, furnace repair, and mini-splits from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Marshfield",
    heroHeadline: "Year-Round Comfort for Marshfield Homes",
    heroSubhead: "From Brant Rock cottages to inland streets, we keep your heating and cooling dependable through every season.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/marshfield.jpg",
    landmarkAlt: "Brant Rock seawall and beach in Marshfield, Massachusetts",
    landmarkName: "Brant Rock",
    servicesHighlight: ["Heating Installation", "AC Installation", "Maintenance Plans"],
    neighbors: ["Duxbury", "Scituate", "Pembroke"],
    intro:
      "With neighborhoods running from the beaches at Brant Rock and Green Harbor to quieter inland streets, Marshfield homes face everything the coast throws at them. We keep heating and cooling systems dependable through salt wind, summer humidity, and quick shoulder-season temperature swings.",
    body:
      "Many Marshfield properties near the shore started as seasonal cottages and have been converted to year-round homes, which often means heating and cooling systems that were never designed for full-time use. We help homeowners upgrade undersized or aging equipment, add efficient cooling, and protect outdoor units against the salt exposure that comes with living this close to the Atlantic. For inland Marshfield homes, we focus on right-sizing systems and improving efficiency so you're comfortable without overpaying to run an oversized unit.",
    faq: [
      {
        q: "My Marshfield home was originally a summer cottage. Is my heating system enough for year-round living?",
        a: "Often it isn't. Seasonal homes were built around light, occasional use. We assess whether your current system can handle full-time heating and cooling and recommend upgrades sized for year-round comfort.",
      },
      {
        q: "How often should coastal Marshfield homes service their AC?",
        a: "We recommend at least once a year, ideally in spring. Salt air and humidity wear systems faster than inland conditions, so annual maintenance helps prevent mid-summer breakdowns.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Duxbury", "Scituate", "Pembroke"],
  },
  {
    slug: "scituate",
    town: "Scituate",
    county: "Plymouth County",
    region: "South Shore",
    layout: "C",
    metaTitle: "HVAC, Heating & AC Services in Scituate, MA | Hometown Cooling & Heating",
    metaDescription: "Scituate HVAC service for coastal homes and harbor-area properties. Heating, AC, and ductless mini-split installation and repair. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Scituate",
    heroHeadline: "Heating & Cooling Built for Scituate's Coast",
    heroSubhead: "Systems that hold up to harbor wind, salt, and storms, installed and serviced by a local team.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/scituate.jpg",
    landmarkAlt: "Scituate Lighthouse on the Massachusetts coast",
    landmarkName: "Scituate Lighthouse",
    servicesHighlight: ["Ductless Mini-Splits", "Heating Repair", "AC Repair"],
    neighbors: ["Cohasset", "Marshfield", "Hingham"],
    intro:
      "Scituate's exposed coastline, from the harbor to the cliffs at Minot, makes it one of the more weather-battered spots on the South Shore. Homes here need heating and cooling that holds up to heavy wind, salt, and the storms that roll in off the water.",
    body:
      "Properties close to Scituate Harbor and the open shoreline deal with constant salt exposure that degrades outdoor equipment faster than almost anywhere inland. We help homeowners choose and place condenser units to limit that wear, and we keep older heating systems in the town's many historic homes running efficiently. Power interruptions during coastal storms are also a reality here, so we talk through resilient heating options and proper system protection. From mini-split installs in older houses to full system replacements, we cover Scituate's full range of HVAC needs.",
    faq: [
      {
        q: "Storms hit Scituate hard. How can I protect my HVAC system?",
        a: "We position and secure outdoor units to reduce storm and salt exposure, and we can discuss backup heating options so you're not left without warmth during a coastal power interruption.",
      },
      {
        q: "Do you work on historic homes near Scituate Harbor?",
        a: "Yes. We're experienced with older homes where ductwork is limited. Ductless mini-splits and carefully sized systems let us add modern comfort without compromising the structure.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Cohasset", "Marshfield", "Hingham"],
  },
  {
    slug: "cohasset",
    town: "Cohasset",
    county: "Norfolk County",
    region: "South Shore",
    layout: "D",
    metaTitle: "HVAC, Heating & AC Services in Cohasset, MA | Hometown Cooling & Heating",
    metaDescription: "Cohasset heating and cooling service for coastal and historic homes. Quality AC installation, repair, and mini-splits from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Cohasset",
    heroHeadline: "Quality HVAC for Cohasset's Historic & Coastal Homes",
    heroSubhead: "Careful, high-quality heating and cooling work suited to the town's older architecture and shoreline exposure.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/cohasset.jpg",
    landmarkAlt: "Cohasset Town Common and St. Stephen's Church",
    landmarkName: "Cohasset Common",
    servicesHighlight: ["Ductless Mini-Splits", "Heating Installation", "AC Installation"],
    neighbors: ["Scituate", "Hingham"],
    intro:
      "Cohasset blends historic homes around the Common with newer coastal properties, and both demand heating and cooling that's done right. We deliver careful, high-quality HVAC work suited to the town's mix of older architecture and shoreline exposure.",
    body:
      "Many Cohasset homes are older and architecturally distinctive, which means HVAC upgrades have to respect the building while still delivering modern efficiency. Ductless mini-splits are often the right answer for homes where running new ductwork would be intrusive. For properties closer to the water, salt air remains the main enemy of outdoor equipment, so we focus on durable installations and consistent maintenance. Whether you're modernizing the comfort system in a historic home or maintaining a newer build, we handle it with attention to detail.",
    faq: [
      {
        q: "Can you upgrade comfort in a historic Cohasset home without major remodeling?",
        a: "Yes. Ductless mini-split systems provide efficient heating and cooling with minimal disruption, making them ideal for older Cohasset homes where preserving the structure matters.",
      },
      {
        q: "What's the most efficient heating option for an older home here?",
        a: "It depends on the home, but heat pumps and ductless systems often deliver strong efficiency gains over older oil or electric setups. We assess your home and recommend the best fit.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Scituate", "Hingham"],
  },
  {
    slug: "hingham",
    town: "Hingham",
    county: "Plymouth County",
    region: "South Shore",
    layout: "A",
    metaTitle: "HVAC, Heating & AC Services in Hingham, MA | Hometown Cooling & Heating",
    metaDescription: "Hingham HVAC service for historic and modern homes alike. Heating, air conditioning, and ductless installation and repair from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Hingham",
    heroHeadline: "Modern Comfort for Hingham's Historic Homes",
    heroSubhead: "Efficient heating and cooling that fits established homes, without tearing into original walls and ceilings.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/hingham.jpg",
    landmarkAlt: "World's End peninsula in Hingham, Massachusetts",
    landmarkName: "World's End",
    servicesHighlight: ["Ductless Mini-Splits", "Heating Installation", "Maintenance Plans"],
    neighbors: ["Cohasset", "Scituate"],
    intro:
      "From the historic homes along Main Street to properties near the harbor and World's End, Hingham has some of the South Shore's most established housing stock. We help these homes stay comfortable year-round with heating and cooling tailored to older construction.",
    body:
      "Hingham's many antique and historic homes often run on aging heating systems and rarely had central cooling designed in. We specialize in modernizing comfort in these properties, frequently with ductless mini-splits that add efficient heating and cooling without tearing into original walls and ceilings. Closer to the harbor, salt air adds wear to outdoor equipment, so durable installation and steady maintenance matter. Whether you're updating a centuries-old home or maintaining a newer one, we bring an approach that fits Hingham's character.",
    faq: [
      {
        q: "My Hingham home is over a hundred years old. Can I get central air?",
        a: "In many cases, yes, though ductless mini-splits are often a better fit for historic homes. They deliver cooling and heating efficiently without the invasive ductwork central air requires.",
      },
      {
        q: "How do I improve efficiency in an older Hingham home?",
        a: "Upgrading to a modern heat pump or ductless system, paired with proper maintenance, usually delivers the biggest gains. We evaluate your home and lay out the options with clear reasoning.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Cohasset", "Scituate"],
  },
  {
    slug: "bourne",
    town: "Bourne",
    county: "Barnstable County",
    region: "Cape",
    layout: "B",
    metaTitle: "HVAC, Heating & AC Services in Bourne, MA | Hometown Cooling & Heating",
    metaDescription: "Bourne HVAC service on both sides of the Cape Cod Canal. Heating, AC, and mini-split installation and repair for year-round and seasonal homes. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Bourne",
    heroHeadline: "Dependable HVAC at the Gateway to the Cape",
    heroSubhead: "Heating and cooling for Bourne's year-round and seasonal homes on both sides of the canal.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/bourne.jpg",
    landmarkAlt: "Cape Cod Canal and Bourne Bridge",
    landmarkName: "Cape Cod Canal",
    servicesHighlight: ["Maintenance Plans", "AC Installation", "Ductless Mini-Splits"],
    neighbors: ["Sandwich", "Wareham"],
    intro:
      "As the gateway to Cape Cod, Bourne spans both sides of the canal and sees a heavy mix of year-round residents and seasonal homeowners. We keep heating and cooling systems reliable through Cape humidity, salt air, and the on-and-off use that seasonal homes bring.",
    body:
      "Bourne's seasonal and vacation properties often sit unused for stretches, which makes systems vulnerable to humidity, mold, and the wear that comes from sitting idle and then running hard. We help part-time owners keep equipment protected and ready, and we serve year-round residents with full heating and cooling service. The Cape's damp, salty climate is hard on outdoor units, so we focus on durable installations and maintenance plans that catch problems before a summer weekend or a winter cold snap exposes them.",
    faq: [
      {
        q: "I only use my Bourne home seasonally. How should I handle HVAC?",
        a: "Seasonal homes benefit from pre-season checkups and humidity control while empty. We can set up a maintenance schedule that keeps your system protected during downtime and ready when you arrive.",
      },
      {
        q: "Does Cape humidity affect my cooling system?",
        a: "Yes. High humidity makes your system work harder and can encourage mold if airflow and drainage aren't right. Proper sizing and regular service keep both comfort and air quality in check.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Sandwich", "Wareham"],
  },
  {
    slug: "mattapoisett",
    town: "Mattapoisett",
    county: "Plymouth County",
    region: "South Coast",
    layout: "C",
    metaTitle: "HVAC, Heating & AC Services in Mattapoisett, MA | Hometown Cooling & Heating",
    metaDescription: "Mattapoisett heating and cooling service for harbor-area and village homes. AC, heating, and mini-split installation and repair. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Mattapoisett",
    heroHeadline: "Coastal HVAC for Mattapoisett Village & Harbor",
    heroSubhead: "Efficient, dependable heating and cooling for homes on Buzzards Bay.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/mattapoisett.jpg",
    landmarkAlt: "Mattapoisett Town Wharf and harbor",
    landmarkName: "Mattapoisett Harbor",
    servicesHighlight: ["Ductless Mini-Splits", "AC Installation", "Maintenance Plans"],
    neighbors: ["Wareham", "Middleborough"],
    intro:
      "Mattapoisett's village and harbor sit right on Buzzards Bay, where salt air and summer humidity are constant. We help homeowners here keep heating and cooling systems efficient and dependable in a classic South Coast coastal setting.",
    body:
      "The older homes throughout Mattapoisett village often rely on dated heating systems and lack central cooling, making ductless mini-splits a popular, low-disruption upgrade. Near the harbor, salt exposure wears on outdoor equipment, so durable installation and routine maintenance go a long way. Buzzards Bay humidity also raises the load on cooling systems in summer, which makes proper sizing important so you stay comfortable without an oversized, inefficient unit. We handle installs, repairs, and ongoing care across town.",
    faq: [
      {
        q: "Are mini-splits a good fit for older Mattapoisett village homes?",
        a: "Very much so. Many village homes lack ductwork, and ductless mini-splits add efficient heating and cooling without the renovation that central systems require.",
      },
      {
        q: "Why does my AC struggle on humid Buzzards Bay days?",
        a: "High humidity increases the cooling load and can overwhelm an undersized or aging system. We make sure your equipment is correctly sized and maintained for the local climate.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Wareham", "Middleborough"],
  },
  {
    slug: "sandwich",
    town: "Sandwich",
    county: "Barnstable County",
    region: "Cape",
    layout: "D",
    metaTitle: "HVAC, Heating & AC Services in Sandwich, MA | Hometown Cooling & Heating",
    metaDescription: "Sandwich HVAC service for historic and coastal Cape homes. Heating, air conditioning, and ductless mini-splits installed and repaired locally. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Sandwich",
    heroHeadline: "HVAC for the Oldest Town on the Cape",
    heroSubhead: "Careful heating and cooling work for Sandwich's historic and coastal homes.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/sandwich.jpg",
    landmarkAlt: "Sandwich Boardwalk over the salt marsh",
    landmarkName: "Sandwich Boardwalk",
    servicesHighlight: ["Ductless Mini-Splits", "Heating Installation", "Maintenance Plans"],
    neighbors: ["Bourne", "Wareham"],
    intro:
      "As the oldest town on Cape Cod, Sandwich is full of historic homes that need careful heating and cooling work, alongside coastal properties exposed to Cape humidity and salt air. We bring both the right approach and the right equipment to the area.",
    body:
      "Sandwich's antique homes near the village center frequently run on older heating systems and were never built for central air. Ductless mini-splits let us add efficient comfort while preserving these homes' character. For properties closer to the marsh and shoreline, humidity and salt exposure are the main concerns, so we emphasize durable installs and regular maintenance. Many homes here also see seasonal use, which calls for protection during idle stretches. We provide complete HVAC service tailored to Sandwich's mix of historic and coastal living.",
    faq: [
      {
        q: "Can I add cooling to a historic Sandwich home?",
        a: "Yes. Ductless mini-split systems are ideal for the town's older homes, delivering efficient cooling and heating without invasive ductwork that could damage historic features.",
      },
      {
        q: "What should I do about my HVAC system during the off-season?",
        a: "Pre-season maintenance and humidity control protect your system while the home sits empty. We can schedule checkups that keep equipment ready for your next visit.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Bourne", "Wareham"],
  },
  {
    slug: "wareham",
    town: "Wareham",
    county: "Plymouth County",
    region: "South Coast",
    layout: "A",
    metaTitle: "HVAC, Heating & AC Services in Wareham, MA | Hometown Cooling & Heating",
    metaDescription: "Wareham heating and cooling service from Onset village to inland neighborhoods. AC, heating, and mini-split install and repair. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Wareham",
    heroHeadline: "Coastal & Inland HVAC Across Wareham",
    heroSubhead: "From Onset's beach cottages to wooded inland lots, we right-size comfort for every kind of Wareham home.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/wareham.jpg",
    landmarkAlt: "Onset Beach and pier in Wareham, Massachusetts",
    landmarkName: "Onset Beach",
    servicesHighlight: ["AC Installation", "Heating Installation", "Ductless Mini-Splits"],
    neighbors: ["Bourne", "Carver", "Middleborough"],
    intro:
      "Wareham stretches from the beaches and cottages of Onset to wooded inland neighborhoods, giving the town a real split between coastal and inland HVAC needs. We serve both, keeping systems efficient whether you're steps from the water or set back among the pines.",
    body:
      "In Onset and along Wareham's shoreline, older cottages and converted seasonal homes often need heating and cooling upgrades they were never originally designed for, plus protection against salt-air wear. Inland Wareham homes sit on larger, often wooded lots where system sizing and efficient heating matter more than salt exposure. That contrast means there's no one-size-fits-all answer here, so we assess each home individually, whether it's a compact coastal cottage or a larger inland property, and recommend the right system with clear reasoning.",
    faq: [
      {
        q: "Do coastal Onset homes and inland Wareham homes need different HVAC approaches?",
        a: "They do. Coastal homes need salt-air-resistant equipment and humidity control, while inland homes focus more on proper sizing for larger spaces and efficient heating. We tailor the solution to your location.",
      },
      {
        q: "My Onset cottage is being used year-round now. Is my system up to it?",
        a: "Many converted cottages have systems built for seasonal use. We evaluate whether yours can handle full-time demand and recommend upgrades sized for year-round comfort.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Bourne", "Carver", "Plymouth"],
  },
  {
    slug: "plymouth",
    town: "Plymouth",
    county: "Plymouth County",
    region: "South Shore",
    layout: "B",
    metaTitle: "HVAC, Heating & AC Services in Plymouth, MA | Hometown Cooling & Heating",
    metaDescription: "Local Plymouth HVAC service from a team based right here in town. Heating, AC, and mini-split installation, repair, and maintenance. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Plymouth",
    heroHeadline: "Your Local Plymouth Heating & Cooling Team",
    heroSubhead: "Based right here on Hedges Pond Road, with fast response and a real understanding of local homes.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/plymouth.jpg",
    landmarkAlt: "Plymouth Rock and waterfront in Plymouth, Massachusetts",
    landmarkName: "Plymouth Rock",
    servicesHighlight: ["AC Repair", "Heating Repair", "Maintenance Plans"],
    neighbors: ["Kingston", "Carver", "Bourne"],
    intro:
      "Plymouth is our home base, so this is the town we know best. From the historic waterfront downtown to the newer developments spreading west and south, we provide fast, local heating and cooling service across one of the largest towns in the state.",
    body:
      "Plymouth's sheer size and variety, from antique homes near the harbor to modern subdivisions inland, means we see just about every kind of HVAC situation here. Coastal and downtown homes deal with salt air and older heating systems, while newer inland neighborhoods are more about efficient sizing and modern equipment. Being based in Plymouth means we can respond quickly and we genuinely understand the local housing stock and climate. Whether you need an emergency repair, a system replacement, or a maintenance plan, we're right around the corner.",
    faq: [
      {
        q: "Are you actually located in Plymouth?",
        a: "Yes. We're based right here on Hedges Pond Road in Plymouth, which means quick response times and a team that knows the local homes and climate firsthand.",
      },
      {
        q: "Plymouth is huge. Do you cover the whole town?",
        a: "We serve all of Plymouth, from the historic downtown and waterfront to the newer inland and southern neighborhoods, with full heating and cooling service.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Kingston", "Carver", "Duxbury"],
  },
  {
    slug: "kingston",
    town: "Kingston",
    county: "Plymouth County",
    region: "South Shore",
    layout: "C",
    metaTitle: "HVAC, Heating & AC Services in Kingston, MA | Hometown Cooling & Heating",
    metaDescription: "Kingston HVAC service for bay-side and inland homes. Heating, air conditioning, and ductless mini-split install and repair from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Kingston",
    heroHeadline: "Fast, Local HVAC for Kingston",
    heroSubhead: "Minutes from our Plymouth base, serving bay-side and inland Kingston homes alike.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/kingston.jpg",
    landmarkAlt: "Gray's Beach and Kingston Bay, Massachusetts",
    landmarkName: "Gray's Beach",
    servicesHighlight: ["AC Installation", "Ductless Mini-Splits", "Maintenance Plans"],
    neighbors: ["Plymouth", "Duxbury", "Plympton"],
    intro:
      "Sitting at the head of the bay between Plymouth and Duxbury, Kingston mixes waterfront neighborhoods with established inland streets and newer growth. We keep heating and cooling systems running smoothly across the whole town, just minutes from our Plymouth base.",
    body:
      "Kingston's bay-side homes contend with some salt-air exposure and humidity, while the bulk of the town's housing sits inland on a mix of older and newer lots. That variety means we tailor each job, from adding efficient cooling to older homes that never had central air, to maintaining modern systems in newer developments. Because we're based next door in Plymouth, we respond quickly here and understand the local climate well. We handle installation, repair, and seasonal maintenance throughout Kingston.",
    faq: [
      {
        q: "How quickly can you reach Kingston for a repair?",
        a: "Kingston borders our home base in Plymouth, so we're typically able to respond quickly, which matters most during a mid-summer or mid-winter system failure.",
      },
      {
        q: "Can you add AC to an older Kingston home?",
        a: "Yes. For homes without existing ductwork, ductless mini-splits are an efficient, low-disruption way to add cooling and supplemental heating.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Plymouth", "Duxbury", "Plympton"],
  },
  {
    slug: "plympton",
    town: "Plympton",
    county: "Plymouth County",
    region: "Inland",
    layout: "D",
    metaTitle: "HVAC, Heating & AC Services in Plympton, MA | Hometown Cooling & Heating",
    metaDescription: "Plympton HVAC service for rural and larger-lot homes. Heating, AC, and efficient system upgrades from a local Plymouth-based team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Plympton",
    heroHeadline: "Efficient Heating & Cooling for Rural Plympton",
    heroSubhead: "Right-sized systems and modern furnace upgrades for the town's larger lots and country homes.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/plympton.jpg",
    landmarkAlt: "Historic town center in Plympton, Massachusetts",
    landmarkName: "Plympton Town Green",
    servicesHighlight: ["Heating Installation", "Heating Repair", "AC Installation"],
    neighbors: ["Kingston", "Halifax", "Carver"],
    intro:
      "Plympton is a small, rural inland town of larger lots, older farmhouses, and quiet country roads. Without the coast's salt air to worry about, the priorities here are efficient heating, proper system sizing, and reliable service for spread-out homes.",
    body:
      "Plympton's housing leans toward older homes and larger properties, which often means dated furnaces and heating systems that are due for an efficiency upgrade. With bigger spaces to heat and cool, correct sizing makes a real difference in both comfort and operating cost, an oversized system wastes energy, while an undersized one struggles. We help Plympton homeowners replace aging equipment, add efficient cooling, and keep systems maintained. As an inland town, the focus is less on salt exposure and more on getting the most efficient, properly matched system for the home.",
    faq: [
      {
        q: "My Plympton farmhouse has an old furnace. Is it worth upgrading?",
        a: "Often, yes. Older furnaces run far less efficiently than modern systems, and an upgrade can noticeably lower heating costs while improving comfort. We'll assess yours and give you straight reasoning.",
      },
      {
        q: "Why does system sizing matter so much for larger Plympton homes?",
        a: "On bigger properties, an oversized system wastes energy and cycles poorly, while an undersized one can't keep up. Correct sizing is the key to efficient, even comfort.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Kingston", "Halifax", "Carver"],
  },
  {
    slug: "carver",
    town: "Carver",
    county: "Plymouth County",
    region: "Inland",
    layout: "A",
    metaTitle: "HVAC, Heating & AC Services in Carver, MA | Hometown Cooling & Heating",
    metaDescription: "Carver HVAC service for rural and larger-lot homes among the cranberry bogs. Heating, AC, and efficient system upgrades. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Carver",
    heroHeadline: "Reliable HVAC for Carver's Country Homes",
    heroSubhead: "Efficient heating and well-matched cooling for larger lots among the cranberry bogs.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/carver.jpg",
    landmarkAlt: "Edaville and cranberry bogs in Carver, Massachusetts",
    landmarkName: "Carver Cranberry Bogs",
    servicesHighlight: ["Heating Installation", "AC Installation", "Maintenance Plans"],
    neighbors: ["Plympton", "Wareham", "Middleborough"],
    intro:
      "Known for its cranberry bogs and open, rural character, Carver is an inland town of larger lots and country homes. Here the focus is on efficient heating, well-matched system sizing, and dependable service for properties spread across town.",
    body:
      "Carver's homes tend toward older construction and larger inland lots, which often means aging heating systems ready for a more efficient replacement. With more space to condition, sizing equipment correctly is essential, both for comfort and to avoid wasting energy on an oversized unit. We help homeowners modernize older furnaces, add efficient cooling, and stay ahead of breakdowns with regular maintenance. Being inland, salt air isn't the concern it is on the coast, so our attention goes to efficiency, reliability, and getting the right system for each home.",
    faq: [
      {
        q: "What's the most cost-effective heating upgrade for a Carver home?",
        a: "It depends on your current setup, but replacing an old furnace with a modern high-efficiency system or heat pump usually delivers strong savings. We evaluate your home and explain the trade-offs.",
      },
      {
        q: "Do you service homes on Carver's more rural roads?",
        a: "Yes. We serve homes throughout Carver, including the more spread-out rural properties, with full heating and cooling service.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Plympton", "Wareham", "Plymouth"],
  },
  {
    slug: "pembroke",
    town: "Pembroke",
    county: "Plymouth County",
    region: "South Shore",
    layout: "B",
    metaTitle: "HVAC, Heating & AC Services in Pembroke, MA | Hometown Cooling & Heating",
    metaDescription: "Pembroke heating and cooling service for lake-area and residential homes. AC, heating, and mini-split install and repair from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Pembroke",
    heroHeadline: "Heating & Cooling for Pembroke Family Homes",
    heroSubhead: "Efficient, properly sized systems for the town's residential neighborhoods, just inland of the coast.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/pembroke.jpg",
    landmarkAlt: "Herring Run and North River in Pembroke, Massachusetts",
    landmarkName: "Pembroke Herring Run",
    servicesHighlight: ["AC Installation", "Heating Installation", "Maintenance Plans"],
    neighbors: ["Marshfield", "Duxbury", "Halifax"],
    intro:
      "Set just inland of the coast around its ponds and the North River, Pembroke is a residential town with a mix of older homes and newer neighborhoods. We provide heating and cooling service tuned to its largely inland, family-home character.",
    body:
      "Pembroke sits far enough from the open ocean that salt air is less of a factor than it is for its coastal neighbors, so the emphasis here is on efficient, properly sized systems for everyday family homes. The town has plenty of older houses with dated heating equipment that benefit from modern upgrades, as well as newer homes that need routine maintenance to stay efficient. We help homeowners add cooling where it's missing, replace aging systems, and keep everything running reliably through New England's full temperature range.",
    faq: [
      {
        q: "Is my Pembroke home too far inland to worry about salt air?",
        a: "Mostly, yes. Pembroke's distance from the open coast means salt exposure is a minor factor, so we focus on efficiency and correct sizing rather than coastal-grade protection.",
      },
      {
        q: "What's the best way to add cooling to my Pembroke home?",
        a: "If you have existing ductwork, central air may be a fit; if not, ductless mini-splits are an efficient option. We assess your home and recommend the best approach.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Marshfield", "Duxbury", "Halifax"],
  },
  {
    slug: "halifax",
    town: "Halifax",
    county: "Plymouth County",
    region: "Inland",
    layout: "C",
    metaTitle: "HVAC, Heating & AC Services in Halifax, MA | Hometown Cooling & Heating",
    metaDescription: "Halifax HVAC service for lake-area and inland homes. Heating, air conditioning, and efficient system upgrades from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Halifax",
    heroHeadline: "Dependable HVAC for Halifax Homes",
    heroSubhead: "Efficient heating and well-sized cooling for lake-area and country properties around Silver Lake.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/halifax.jpg",
    landmarkAlt: "Silver Lake in Halifax, Massachusetts",
    landmarkName: "Silver Lake",
    servicesHighlight: ["Heating Installation", "AC Installation", "Heating Repair"],
    neighbors: ["Plympton", "Pembroke", "Middleborough"],
    intro:
      "Built around Silver Lake and surrounded by quiet inland neighborhoods, Halifax is a small residential town where efficient heating and well-sized systems matter most. We provide dependable HVAC service across its lake-area and country homes.",
    body:
      "Halifax's housing includes older lake-area homes and inland properties on generous lots, many running on heating systems that are due for an efficiency upgrade. Without coastal salt exposure to manage, our focus here is on right-sizing equipment, modernizing older furnaces, and adding efficient cooling for homes that need it. Some lake-area homes started as smaller seasonal places and have grown into year-round residences, which can mean their systems need rethinking. We handle installation, repair, and maintenance throughout the town.",
    faq: [
      {
        q: "My home near Silver Lake was once seasonal. Is the heating system adequate now?",
        a: "Older lake homes often have systems built for light, seasonal use. We assess whether yours can handle full-time living and recommend properly sized upgrades if needed.",
      },
      {
        q: "What heating upgrades make the most sense in Halifax?",
        a: "Replacing an aging furnace with a high-efficiency system or heat pump typically offers the best return. We look at your specific home and lay out the options clearly.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Plympton", "Pembroke", "Middleborough"],
  },
  {
    slug: "middleborough",
    town: "Middleborough",
    county: "Plymouth County",
    region: "Inland",
    layout: "D",
    metaTitle: "HVAC, Heating & AC Services in Middleborough, MA | Hometown Cooling & Heating",
    metaDescription: "Middleborough HVAC service for one of the region's largest inland towns. Heating, AC, and efficient system upgrades from a local team. Call (774) 454-0290.",
    h1: "Heating & Air Conditioning Services in Middleborough",
    heroHeadline: "Full-Town HVAC Coverage in Middleborough",
    heroSubhead: "From the historic center to rural outskirts, efficient heating and cooling for one of the state's largest towns.",
    mapEmbed: "",
    lat: null,
    lng: null,
    landmarkImage: "/images/geo/middleborough.jpg",
    landmarkAlt: "Historic downtown Middleborough, Massachusetts",
    landmarkName: "Downtown Middleborough",
    servicesHighlight: ["Heating Installation", "AC Installation", "Maintenance Plans"],
    neighbors: ["Carver", "Halifax", "Wareham"],
    intro:
      "One of the largest towns by area in the state, Middleborough is a sprawling inland community of historic downtown homes, rural roads, and newer neighborhoods. We cover its wide range of properties with efficient, reliable heating and cooling service.",
    body:
      "Middleborough's size and variety mean we encounter everything from antique homes near the historic center to modern houses on large rural lots. As an inland town, the emphasis is on efficient heating through cold New England winters and properly sized cooling for hot, humid summers, rather than the salt-air concerns of the coast. Older homes here often run on dated furnaces ready for a more efficient replacement, while larger properties depend on correct system sizing for even, affordable comfort. We provide full HVAC service across the entire town.",
    faq: [
      {
        q: "Middleborough is large and spread out. Do you cover all of it?",
        a: "Yes. We serve the whole town, from the historic downtown to the rural outskirts and newer neighborhoods, with complete heating and cooling service.",
      },
      {
        q: "My older Middleborough home has an aging furnace. What are my options?",
        a: "Modern high-efficiency furnaces and heat pumps can significantly cut heating costs versus older equipment. We assess your home and recommend the most cost-effective upgrade with clear reasoning.",
      },
    ],
    testimonial: null,
    relatedAreas: ["Carver", "Halifax", "Wareham"],
  },
];

export const LAYOUT_VARIANTS = ["A", "B", "C", "D"];

// Optional business-wide aggregate rating for schema. Leave null until you
// have real, verifiable reviews — fabricated ratings violate Google's
// guidelines and can earn a manual penalty.
// Example once real: { ratingValue: "4.9", reviewCount: "37" }
export const aggregateRating = null;
