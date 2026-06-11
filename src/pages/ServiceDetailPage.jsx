import { useParams } from "react-router-dom";
import ServiceLanding from "../components/services/ServiceLanding";
import { getServiceBySlug } from "../utils/servicePageUtils";
import NotFoundPage from "./NotFoundPage";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceLanding service={service} />;
}