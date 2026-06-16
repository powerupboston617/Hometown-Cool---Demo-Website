import { Link } from "react-router-dom";
import Breadcrumb from "../layout/Breadcrumb";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { formatBlogDate } from "../../utils/blogUtils";

export default function BlogArticle({ post }) {
  return (
    <>
      <div className="border-b border-gray-100 py-6">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "The Journal", to: "/blog" },
              { label: post.title, to: `/blog/${post.slug}` },
            ]}
          />
        </Container>
      </div>

      <Section className="!py-16 md:!py-24">
        <Container>
          <article className="mx-auto max-w-3xl">
            <header>
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

              <h1 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-brand-black md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-gray-500">{post.excerpt}</p>
            </header>

            <figure className="my-12">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>

            <div className="space-y-10">
              {post.sections.map((section, index) => (
                <section key={index}>
                  {section.heading && (
                    <h2 className="font-serif text-2xl font-normal tracking-tight text-brand-black">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className={`text-lg leading-[1.8] text-gray-600 ${
                        section.heading || paragraphIndex > 0 ? "mt-4" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className={`space-y-3 ${section.heading ? "mt-4" : ""}`}>
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="border-l border-gray-200 pl-5 text-lg leading-relaxed text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <footer className="mt-16 border-t border-gray-100 pt-10">
              <p className="text-base text-gray-500">
                Looking for expert climate solutions?{" "}
                <Link
                  to="/contact"
                  className="text-brand-black underline decoration-gray-300 underline-offset-4 transition-colors duration-300 ease-in-out hover:decoration-brand-black"
                >
                  Get in touch →
                </Link>
              </p>
            </footer>
          </article>
        </Container>
      </Section>
    </>
  );
}