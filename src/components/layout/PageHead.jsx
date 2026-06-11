import { Helmet } from "react-helmet-async";

export default function PageHead({
  title,
  description,
  schemas = [],
}) {
  const fullTitle = title.includes("Hometown")
    ? title
    : `${title} | Hometown Cooling & Heating`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}