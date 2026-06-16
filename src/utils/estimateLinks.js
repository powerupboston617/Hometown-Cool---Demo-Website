export function isEstimateHref(href) {
  if (!href) return false;

  const normalized = href.toLowerCase();

  return (
    normalized === "#estimate" ||
    normalized === "estimate" ||
    normalized === "/contact#estimate" ||
    normalized.endsWith("#estimate")
  );
}