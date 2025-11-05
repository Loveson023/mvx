function createSlug(property) {
  const base = property.location?.full_path || property.title || "property";
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") + "-" + property.ref_number;
}
function extractRefFromSlug(slug) {
  if (typeof slug === "object" && Array.isArray(slug)) {
    slug = slug.join("-");
  }
  if (typeof slug !== "string") return "";
  const match = slug.match(/(\d+)(?!.*\d)/);
  return match ? match[0] : "";
}

export { createSlug as c, extractRefFromSlug as e };
//# sourceMappingURL=slugify-CVBoEp9i.mjs.map
