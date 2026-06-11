import { servicePages } from "../data/servicePages";

export function getServiceBySlug(slug) {
  return servicePages.find((service) => service.slug === slug) ?? null;
}