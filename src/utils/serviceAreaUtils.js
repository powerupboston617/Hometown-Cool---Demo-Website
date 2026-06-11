import { serviceAreas } from "../data/serviceAreas";

export function getAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug) ?? null;
}

export function getSlugByTown(townName) {
  return serviceAreas.find((area) => area.town === townName)?.slug ?? null;
}