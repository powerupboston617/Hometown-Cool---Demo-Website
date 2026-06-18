import { blogPosts } from "../data/blogPosts";

function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllBlogPosts() {
  return sortByDateDesc(blogPosts);
}

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export function getBlogPostsByCategory(category) {
  if (!category || category === "All") return sortByDateDesc(blogPosts);
  return sortByDateDesc(blogPosts.filter((post) => post.category === category));
}

export function formatBlogDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}