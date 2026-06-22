import Breadcrumb from "../layout/Breadcrumb";
import Container from "../ui/Container";

export default function GeoBreadcrumb({ area }) {
  return (
    <div className="border-b border-gray-100 bg-surface-muted py-4">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Service Areas", to: "/service-areas" },
            { label: area.town, to: `/service-areas/${area.slug}` },
          ]}
        />
      </Container>
    </div>
  );
}