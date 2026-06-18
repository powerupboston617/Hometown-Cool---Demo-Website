import { Navigate, useParams } from "react-router-dom";
import GeoPage from "../components/geo/GeoPage";
import { getAreaBySlug } from "../utils/serviceAreaUtils";

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = getAreaBySlug(slug);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return <GeoPage area={area} />;
}