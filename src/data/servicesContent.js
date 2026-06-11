import { coolingServicePages, heatingServicePages } from "./servicePages";

export const heatingServices = heatingServicePages.map((s) => ({
  title: s.title,
  slug: s.slug,
  description: s.intro,
}));

export const coolingServices = coolingServicePages.map((s) => ({
  title: s.title,
  slug: s.slug,
  description: s.intro,
}));