import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter";
import PageHead from "../components/layout/PageHead";
import PageHero from "../components/sections/PageHero";
import ContactSidebarCard from "../components/sections/ContactSidebarCard";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { business } from "../data/business";
import { blogCategories, blogPosts } from "../data/blogPosts";
import { siteImages } from "../data/siteImages";
import { buildBreadcrumbSchema, buildItemListSchema } from "../utils/siteSchema";
import { formatBlogDate, getBlogPostsByCategory } from "../utils/blogUtils";

function FeaturedBlogCard({ post }) {
  return (
    <article className="group card-surface overflow-hidden">
      <Link
        to={`/blog/${post.slug}`}
        className="grid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
            <span>Featured</span>
            <span className="mx-2 text-gray-300" aria-hidden="true">
              ·
            </span>
            <span>{post.category}</span>
            <span className="mx-2 text-gray-300" aria-hidden="true">
              ·
            </span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-snug tracking-tight text-brand-black transition-colors group-hover:text-brand-red md:text-4xl">
            {post.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{post.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-brand-red">
            Continue reading →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const posts = getBlogPostsByCategory(activeCategory);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHead
        title="The Journal | HVAC Tips for Plymouth & South Shore"
        description="Seasonal HVAC insights, comfort tips, and local guidance for Plymouth and South Shore homeowners."
        schemas={[
          buildBreadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "The Journal", path: "/blog" },
            ],
            business
          ),
          buildItemListSchema(
            "The Journal",
            blogPosts.map((post) => ({
              name: post.title,
              path: `/blog/${post.slug}`,
            })),
            business
          ),
        ].filter(Boolean)}
        ogImage={siteImages.heroBlog}
      />

      <PageHero
        eyebrow="The Journal"
        title="Insights for Plymouth Living"
        subtitle="Seasonal guidance on heating, cooling, and air quality—written for neighbors who know what a South Shore winter (and summer) really feels like."
        imageSrc={siteImages.heroBlog}
        imageAlt="Cape Cod style coastal Massachusetts home at golden hour with a heat pump unit"
      />

      <Section className="!py-16 md:!py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <div>
                <BlogCategoryFilter
                  categories={blogCategories}
                  activeCategory={activeCategory}
                  onChange={setActiveCategory}
                />
              </div>

              {posts.length === 0 ? (
                <p className="mt-14 text-text-muted">No articles in this category yet.</p>
              ) : (
                <div className="mt-12 space-y-14">
                  {featured && <FeaturedBlogCard post={featured} />}

                  {rest.length > 0 && (
                    <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-y-20">
                      {rest.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <p className="mt-16 border-t border-border pt-10 text-base text-text-muted">
                Looking for expert climate solutions?{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-brand-black underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-brand-black"
                >
                  Get in touch →
                </Link>
              </p>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <ContactSidebarCard />
              <div className="card-surface p-6 md:p-8">
                <p className="section-eyebrow mb-2">Topics</p>
                <h3 className="text-lg font-bold">Browse by Category</h3>
                <ul className="mt-4 space-y-2">
                  {blogCategories
                    .filter((cat) => cat !== "All")
                    .map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={`text-sm font-medium transition-colors hover:text-brand-red ${
                            activeCategory === cat
                              ? "text-brand-red"
                              : "text-brand-blue"
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}