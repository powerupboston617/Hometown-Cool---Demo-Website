import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter";
import PageHead from "../components/layout/PageHead";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { blogCategories } from "../data/blogPosts";
import { getBlogPostsByCategory } from "../utils/blogUtils";

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const posts = getBlogPostsByCategory(activeCategory);

  return (
    <>
      <PageHead
        title="The Journal"
        description="Seasonal HVAC insights, comfort tips, and local guidance for Plymouth and South Shore homeowners."
      />

      <Section className="!py-20 md:!py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <header className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
                The Journal
              </p>
              <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-brand-black md:text-5xl">
                Insights for Plymouth Living
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-500">
                Seasonal guidance on heating, cooling, and air quality—written for neighbors who
                know what a South Shore winter (and summer) really feels like.
              </p>
            </header>

            <div className="mt-12 md:mt-16">
              <BlogCategoryFilter
                categories={blogCategories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-y-20">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <p className="mt-14 text-gray-500">No articles in this category yet.</p>
            )}

            <p className="mt-20 border-t border-gray-100 pt-10 text-base text-gray-500">
              Looking for expert climate solutions?{" "}
              <Link
                to="/contact"
                className="text-brand-black underline decoration-gray-300 underline-offset-4 transition-colors duration-300 ease-in-out hover:decoration-brand-black"
              >
                Get in touch →
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}