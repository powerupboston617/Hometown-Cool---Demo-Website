import { readFileSync } from "fs";
import { servicePages } from "../src/data/servicePages.js";
import { serviceAreas } from "../src/data/serviceAreas.js";
import { blogPosts } from "../src/data/blogPosts.js";
import { contactFaq } from "../src/data/contactFaq.js";

const wc = (text) => (text || "").split(/\s+/).filter(Boolean).length;

const serviceLandingBoilerplate = `
How It Works Home Assessment We evaluate your home's size layout ductwork and existing system to recommend the right solution
Sizing Quote We calculate proper load and provide a clear upfront estimate with no surprises
Professional Installation Our licensed technicians handle removal installation venting and electrical work to code
Testing Walkthrough We test the full system and walk you through everything before we leave
What We Offer Why Choose Us Plymouth-Based Team We're based right here on Hedges Pond Road so we know local homes and can reach surrounding towns quickly
Licensed Technicians Our certified technicians handle every job to code with quality workmanship you can count on
Upfront Estimates Clear honest pricing before work starts no hidden fees or surprise add-ons
Energy-Smart Solutions We recommend right-sized efficient equipment and can help you navigate Mass Save rebates when they apply
Related Services Need Contact our Plymouth-based team for a free estimate
`;

const boilerplateWc = wc(serviceLandingBoilerplate);

for (const s of servicePages) {
  const parts = [
    s.title,
    s.h1,
    s.intro,
    s.body,
    s.heroHeadline,
    s.heroSubhead,
    ...s.features,
    ...s.faq.flatMap((f) => [f.q, f.a]),
    serviceLandingBoilerplate,
  ];
  console.log(`SERVICE\t${s.slug}\t${wc(parts.join(" "))}`);
}

for (const a of serviceAreas) {
  const parts = [
    a.town,
    a.h1,
    a.heroHeadline,
    a.heroSubhead,
    a.intro,
    a.body,
    a.metaDescription,
    ...a.faq.flatMap((f) => [f.q, f.a]),
    a.testimonial?.quote,
    "HVAC Services neighbors related areas landmark",
  ];
  console.log(`GEO\t${a.slug}\t${wc(parts.join(" "))}`);
}

for (const b of blogPosts) {
  const parts = [
    b.title,
    b.excerpt,
    ...b.sections.flatMap((s) => [s.heading || "", ...(s.paragraphs || []), ...(s.list || [])]),
  ];
  console.log(`BLOG\t${b.slug}\t${wc(parts.join(" "))}`);
}

const staticPages = [
  "src/pages/HomePage.jsx",
  "src/pages/ServicesPage.jsx",
  "src/pages/AboutPage.jsx",
  "src/pages/ContactPage.jsx",
  "src/pages/MassSavePage.jsx",
  "src/pages/ReviewsPage.jsx",
  "src/pages/MediaPage.jsx",
  "src/pages/ServiceAreasIndexPage.jsx",
  "src/pages/BlogIndexPage.jsx",
  "src/pages/NotFoundPage.jsx",
];

for (const file of staticPages) {
  const raw = readFileSync(file, "utf8");
  const strings = [...raw.matchAll(/>([^<{]+)</g), ...raw.matchAll(/"([^"\\]{8,})"/g), ...raw.matchAll(/'([^'\\]{8,})'/g)]
    .map((m) => m[1])
    .filter((s) => !s.includes("className") && !s.includes("import") && !s.includes("/"))
    .join(" ");
  const name = file.split("/").pop().replace(".jsx", "");
  let extra = 0;
  if (name === "ContactPage") extra = wc(contactFaq.flatMap((f) => [f.q, f.a]).join(" "));
  if (name === "ServicesPage") extra += 200;
  console.log(`STATIC\t${name}\t${wc(strings) + extra}`);
}