import { buildFaqSchemaFromItems } from "./siteSchema";

// Builds JSON-LD structured data for each geo landing page.
// Inject the returned object into the page head as:
//   <script type="application/ld+json">{JSON.stringify(schema)}</script>
//
// Usage:
//   import { business } from "../data/business";
//   import { aggregateRating } from "../data/serviceAreas";
//   const schema = buildLocalBusinessSchema(area, business, aggregateRating);

export function buildLocalBusinessSchema(area, business, aggregateRating = null) {
  // Primary town plus neighbors = genuine service radius signal.
  const areaServed = [
    { "@type": "City", name: area.town },
    ...(area.neighbors || []).map((n) => ({ "@type": "City", name: n })),
  ];

  // Map the town's highlighted services into an offer catalog.
  const offerCatalog =
    area.servicesHighlight && area.servicesHighlight.length
      ? {
          "@type": "OfferCatalog",
          name: `HVAC Services in ${area.town}`,
          itemListElement: area.servicesHighlight.map((svc) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: svc },
          })),
        }
      : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: business.name,
    telephone: business.phone,
    url: `${business.baseUrl}/service-areas/${area.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    areaServed,
    ...(offerCatalog ? { hasOfferCatalog: offerCatalog } : {}),
  };

  if (business.email) schema.email = business.email;

  // Include geo coordinates only when supplied for the town.
  if (area.lat != null && area.lng != null) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: area.lat,
      longitude: area.lng,
    };
  }

  // Include rating ONLY if real, verifiable reviews exist.
  if (aggregateRating && aggregateRating.ratingValue) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  return schema;
}

// Breadcrumb schema: Home > Service Areas > Town. Improves SEO + UX.
export function buildBreadcrumbSchema(area, business) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: business.baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${business.baseUrl}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.town,
        item: `${business.baseUrl}/service-areas/${area.slug}`,
      },
    ],
  };
}

// FAQPage schema from a town's faq array. Eligible for rich results.
export function buildFaqSchema(area) {
  return buildFaqSchemaFromItems(area.faq);
}
