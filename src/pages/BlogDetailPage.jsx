import { useParams } from "react-router-dom";
import BlogArticle from "../components/blog/BlogArticle";
import PageHead from "../components/layout/PageHead";
import { business } from "../data/business";
import { getBlogBySlug } from "../utils/blogUtils";
import NotFoundPage from "./NotFoundPage";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${business.baseUrl}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.baseUrl,
    },
    mainEntityOfPage: `${business.baseUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <PageHead title={post.title} description={post.metaDescription} schemas={[articleSchema]} />
      <BlogArticle post={post} />
    </>
  );
}