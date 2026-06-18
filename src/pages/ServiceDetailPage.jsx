import { Navigate, useParams } from "react-router-dom";
import ServiceLanding from "../components/services/ServiceLanding";
import { getServiceBySlug } from "../utils/servicePageUtils";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceLanding service={service} />;
}