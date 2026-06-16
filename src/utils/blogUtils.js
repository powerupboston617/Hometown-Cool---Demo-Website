import { blogPosts } from "../data/blogPosts";

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getBlogPostsByCategory(category) {
  if (!category || category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function formatBlogDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}