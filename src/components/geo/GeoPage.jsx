import { aggregateRating } from "../../data/serviceAreas";
import { business } from "../../data/business";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
} from "../../utils/geoSchema";
import PageHead from "../layout/PageHead";
import LayoutA from "./layouts/LayoutA";
import LayoutB from "./layouts/LayoutB";
import LayoutC from "./layouts/LayoutC";
import LayoutD from "./layouts/LayoutD";

const layouts = {
  A: LayoutA,
  B: LayoutB,
  C: LayoutC,
  D: LayoutD,
};

export default function GeoPage({ area }) {
  const Layout = layouts[area.layout] || LayoutA;

  const schemas = [
    buildLocalBusinessSchema(area, business, aggregateRating),
    buildBreadcrumbSchema(area, business),
    buildFaqSchema(area),
  ].filter(Boolean);

  return (
    <>
      <PageHead
        title={area.metaTitle}
        description={area.metaDescription}
        schemas={schemas}
      />
      <Layout area={area} />
    </>
  );
}