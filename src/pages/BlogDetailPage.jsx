import { Navigate, useParams } from "react-router-dom";
import BlogArticle from "../components/blog/BlogArticle";
import PageHead from "../components/layout/PageHead";
import { business } from "../data/business";
import { buildBreadcrumbSchema } from "../utils/siteSchema";
import { getBlogBySlug } from "../utils/blogUtils";
export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/" replace />;
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

  const schemas = [
    articleSchema,
    buildBreadcrumbSchema(
      [
        { name: "Home", path: "/" },
        { name: "The Journal", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ],
      business
    ),
  ].filter(Boolean);

  return (
    <>
      <PageHead
        title={post.title}
        description={post.metaDescription}
        schemas={schemas}
        ogImage={post.image}
        ogType="article"
      />
      <BlogArticle post={post} />
    </>
  );
}