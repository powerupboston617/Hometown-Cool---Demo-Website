import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { blogPosts } from "../src/data/blogPosts.js";
import { business } from "../src/data/business.js";
import { serviceAreas } from "../src/data/serviceAreas.js";
import { servicePages } from "../src/data/servicePages.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/service-areas", priority: "0.9", changefreq: "monthly" },
  { path: "/mass-save", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/reviews", priority: "0.6", changefreq: "monthly" },
  { path: "/media", priority: "0.5", changefreq: "monthly" },
];

const today = new Date().toISOString().slice(0, 10);

function urlEntry(path, priority, changefreq) {
  const loc = `${business.baseUrl}${path === "/" ? "/" : path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...staticRoutes.map((route) => urlEntry(route.path, route.priority, route.changefreq)),
  ...servicePages.map((service) =>
    urlEntry(`/services/${service.slug}`, "0.8", "monthly")
  ),
  ...serviceAreas.map((area) =>
    urlEntry(`/service-areas/${area.slug}`, "0.8", "monthly")
  ),
  ...blogPosts.map((post) => urlEntry(`/blog/${post.slug}`, "0.6", "yearly")),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${urls.length} URLs`);