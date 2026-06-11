import { useParams } from "react-router-dom";
import GeoPage from "../components/geo/GeoPage";
import { getAreaBySlug } from "../utils/serviceAreaUtils";
import NotFoundPage from "./NotFoundPage";

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = getAreaBySlug(slug);

  if (!area) {
    return <NotFoundPage />;
  }

  return <GeoPage area={area} />;
}