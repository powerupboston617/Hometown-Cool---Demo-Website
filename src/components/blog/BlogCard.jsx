import { Link } from "react-router-dom";
import { formatBlogDate } from "../../utils/blogUtils";

export default function BlogCard({ post }) {
  return (
    <article className="group flex h-full flex-col">
      <Link to={`/blog/${post.slug}`} className="flex h-full flex-col focus-visible:outline-none">
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-surface-muted">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-[1.02] group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
            <span>{post.category}</span>
            <span className="mx-2 text-gray-300" aria-hidden="true">
              ·
            </span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="mx-2 text-gray-300" aria-hidden="true">
              ·
            </span>
            <span>{post.readingTime}</span>
          </p>

          <h2 className="mt-4 font-serif text-2xl font-normal leading-snug tracking-tight text-brand-black transition-all duration-300 ease-in-out group-hover:underline group-hover:decoration-gray-300 group-hover:underline-offset-4 md:text-[1.75rem]">
            {post.title}
          </h2>

          <p className="mt-4 flex-1 text-base leading-relaxed text-gray-500">{post.excerpt}</p>

          <span
            aria-hidden="true"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-brand-black motion-reduce:group-hover:translate-x-0"
          >
            Continue reading
            <span>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}