import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { business } from "../../data/business";

export default function PageHead({
  title,
  description,
  schemas = [],
  canonicalPath,
  ogImage,
  ogType = "website",
  noindex = false,
}) {
  const location = useLocation();
  const fullTitle = title.includes("Hometown")
    ? title
    : `${title} | Hometown Cooling & Heating`;

  const path = canonicalPath ?? location.pathname;
  const canonicalUrl = `${business.baseUrl}${path === "/" ? "" : path}`;
  const imageUrl = `${business.baseUrl}${ogImage ?? business.ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={business.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}