import { geoExpansions } from "../data/geoExpansions";
import { serviceAreas } from "../data/serviceAreas";

export function getAreaBySlug(slug) {
  const area = serviceAreas.find((item) => item.slug === slug) ?? null;
  if (!area) return null;

  const expansion = geoExpansions[slug];
  if (!expansion) return area;

  return { ...area, ...expansion };
}

export function getSlugByTown(townName) {
  return serviceAreas.find((area) => area.town === townName)?.slug ?? null;
}