export const accentBarClass = {
  red: "bg-brand-red",
  blue: "bg-brand-blue",
  green: "bg-brand-green",
};

export const cardHoverClass = {
  red: "card-hover card-hover-red",
  blue: "card-hover card-hover-blue",
  green: "card-hover card-hover-green",
};

export const imageHoverClass = {
  red: "image-card-hover image-card-hover-red",
  blue: "image-card-hover image-card-hover-blue",
  green: "image-card-hover image-card-hover-green",
};

const coastalRegions = new Set(["South Shore", "South Coast", "Cape"]);

export function getRegionAccent(region) {
  return coastalRegions.has(region) ? "blue" : "red";
}

export function getServiceAccent(slugOrTitle = "") {
  const value = slugOrTitle.toLowerCase();

  if (
    value.includes("mass-save") ||
    value.includes("mass save") ||
    value.includes("energy-efficient") ||
    value.includes("maintenance") ||
    value.includes("indoor-air-quality")
  ) {
    return "green";
  }

  if (
    value.includes("ac-") ||
    value.includes("cooling") ||
    value.includes("ductless") ||
    value.includes("air-conditioning") ||
    value.includes("air conditioning") ||
    value.includes("heat pump") ||
    value.includes("central air")
  ) {
    return "blue";
  }

  if (
    value.includes("heating") ||
    value.includes("furnace") ||
    value.includes("boiler") ||
    value.includes("emergency") ||
    value.includes("winter") ||
    value.includes("heat") ||
    value.includes("warm")
  ) {
    return "red";
  }

  return "green";
}

export function getTrustSignalAccent(label = "") {
  if (label.toLowerCase().includes("mass save")) {
    return "green";
  }

  if (label.toLowerCase().includes("response")) {
    return "red";
  }

  return "green";
}