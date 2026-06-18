// Shared JSON-LD builders for sitewide structured data.

export function buildFaqSchemaFromItems(faqItems) {
  if (!faqItems?.length || !faqItems[0]?.q) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildBreadcrumbSchema(crumbs, business) {
  if (!crumbs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${business.baseUrl}${crumb.path}`,
    })),
  };
}

export function buildSiteLocalBusinessSchema(business, options = {}) {
  const {
    pageUrl = business.baseUrl,
    areaServed = [],
    aggregateRating = null,
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: business.name,
    telephone: business.phone,
    url: pageUrl,
    image: `${business.baseUrl}${business.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    openingHours: business.openingHoursSchema,
  };

  if (business.email) schema.email = business.email;

  if (areaServed.length) {
    schema.areaServed = areaServed.map((town) => ({
      "@type": "City",
      name: town,
    }));
  }

  if (aggregateRating?.ratingValue) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  return schema;
}

export function buildWebSiteSchema(business) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.baseUrl,
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.baseUrl,
    },
  };
}

export function buildServiceSchema(service, business) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.baseUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Plymouth County, MA",
    },
    url: `${business.baseUrl}/services/${service.slug}`,
  };
}

export function buildItemListSchema(name, items, business) {
  if (!items?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${business.baseUrl}${item.path}`,
    })),
  };
}