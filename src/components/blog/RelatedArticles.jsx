import { useMemo } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Section from "../ui/Section";

const articles = [
  {
    id: 1,
    title: "Taming the Mayflower Pollen: Why Your AC Needs a Spring Awakening",
    category: "air quality",
    date: "2026-03-15",
    slug: "taming-mayflower-pollen-ac-spring-awakening",
  },
  {
    id: 2,
    title: "Beat the Heat and the Damp: Living Comfortably on the South Shore",
    category: "cooling",
    date: "2026-07-08",
    slug: "beat-the-heat-damp-south-shore",
  },
  {
    id: 3,
    title: "To Heat or Not to Heat? Navigating Plymouth's Shoulder Season",
    category: "heating",
    date: "2026-10-12",
    slug: "navigating-plymouth-shoulder-season",
  },
  {
    id: 4,
    title: "Surviving the Storm: Keeping the Heat on When Plymouth Freezes",
    category: "heating",
    date: "2026-01-20",
    slug: "surviving-storm-plymouth-freezes",
  },
  {
    id: 5,
    title: "Investing in Year-Round Comfort: Why Plymouth Is Upgrading to Smart, Efficient HVAC",
    category: "cooling",
    date: "2026-04-02",
    slug: "plymouth-year-round-smart-hvac",
  },
  {
    id: 6,
    title: "Maximize Your Home's Efficiency with the Mass Save® Program",
    category: "heating",
    date: "2026-06-16",
    slug: "maximize-home-efficiency-mass-save-program",
  },
];

function formatDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function selectRelatedArticles(currentCategory) {
  const normalizedCategory = currentCategory?.toLowerCase().trim();
  const matching = articles.filter((article) => article.category === normalizedCategory);
  const selected = [...matching];
  const selectedIds = new Set(selected.map((article) => article.id));

  if (selected.length < 3) {
    const recentArticles = [...articles].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    for (const article of recentArticles) {
      if (selected.length >= 3) break;
      if (!selectedIds.has(article.id)) {
        selected.push(article);
        selectedIds.add(article.id);
      }
    }
  }

  return selected.slice(0, 3);
}

export default function RelatedArticles({ currentCategory }) {
  const relatedArticles = useMemo(
    () => selectRelatedArticles(currentCategory),
    [currentCategory],
  );

  if (relatedArticles.length === 0) return null;

  return (
    <Section>
      <Container>
        <aside className="mx-auto max-w-5xl" aria-labelledby="related-articles-heading">
          <h2
            id="related-articles-heading"
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400"
          >
            From the Journal
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article key={article.id}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
                    {article.category}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-normal leading-snug tracking-tight text-brand-black transition-colors duration-300 ease-in-out group-hover:text-gray-600 group-hover:underline group-hover:decoration-gray-300 group-hover:underline-offset-4">
                    {article.title}
                  </h3>
                  <time
                    dateTime={article.date}
                    className="mt-4 block text-sm text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-500"
                  >
                    {formatDate(article.date)}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </aside>
      </Container>
    </Section>
  );
}