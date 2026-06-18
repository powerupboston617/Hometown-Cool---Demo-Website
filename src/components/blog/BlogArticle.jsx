import { Link } from "react-router-dom";
import Breadcrumb from "../layout/Breadcrumb";
import ContactSidebarCard from "../sections/ContactSidebarCard";
import FullWidthHero from "../sections/FullWidthHero";
import Container from "../ui/Container";
import ContentCard from "../ui/ContentCard";
import Section from "../ui/Section";
import { formatBlogDate } from "../../utils/blogUtils";

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogArticle({ post }) {
  const tocSections = post.sections.filter((section) => section.heading?.trim());

  return (
    <>
      <div className="border-b border-gray-100 bg-surface py-4">
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

      <FullWidthHero imageSrc={post.image} imageAlt={post.imageAlt}>
        <div className="motion-fade-in max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-300">
            <span>{post.category}</span>
            <span className="mx-2 text-gray-400" aria-hidden="true">
              ·
            </span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="mx-2 text-gray-400" aria-hidden="true">
              ·
            </span>
            <span>{post.readingTime}</span>
          </p>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-brand-white md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-gray-200">{post.excerpt}</p>
        </div>
      </FullWidthHero>

      <Section className="!py-16 md:!py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <article className="lg:col-span-2">
              <div className="space-y-10">
                {post.sections.map((section, index) => {
                  const sectionId = section.heading
                    ? slugifyHeading(section.heading)
                    : `section-${index}`;

                  return (
                    <section
                      key={index}
                      id={sectionId}
                      className={
                        section.list
                          ? "card-surface p-6 md:p-8"
                          : section.heading
                            ? ""
                            : ""
                      }
                    >
                      {section.heading && (
                        <h2 className="font-serif text-2xl font-normal tracking-tight text-brand-black md:text-3xl">
                          {section.heading}
                        </h2>
                      )}

                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={`text-lg leading-[1.8] text-text-muted ${
                            section.heading || paragraphIndex > 0 ? "mt-4" : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.list && (
                        <ul className={`grid gap-3 sm:grid-cols-2 ${section.heading ? "mt-6" : ""}`}>
                          {section.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 rounded-lg border border-border bg-surface-muted px-4 py-3 text-base leading-relaxed text-text-muted"
                            >
                              <span className="mt-0.5 shrink-0 font-bold text-brand-red" aria-hidden="true">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>

              <footer className="mt-16 border-t border-border pt-10">
                <p className="text-base text-text-muted">
                  Looking for expert climate solutions?{" "}
                  <Link
                    to="/contact"
                    className="font-semibold text-brand-black underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-brand-black"
                  >
                    Get in touch →
                  </Link>
                </p>
              </footer>
            </article>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {tocSections.length > 0 && (
                <nav aria-label="Article sections" className="card-surface p-6 md:p-8">
                  <p className="section-eyebrow mb-2">In This Article</p>
                  <h3 className="text-lg font-bold">Jump to Section</h3>
                  <ol className="mt-4 space-y-2">
                    {tocSections.map((section) => (
                      <li key={section.heading}>
                        <a
                          href={`#${slugifyHeading(section.heading)}`}
                          className="text-sm font-medium text-brand-blue transition-colors hover:text-brand-red"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <ContactSidebarCard />
              <ContentCard title="More from The Journal" accent="blue">
                <p>
                  Seasonal HVAC tips written for Plymouth and South Shore homeowners — from
                  shoulder-season comfort to storm prep and Mass Save planning.
                </p>
                <Link
                  to="/blog"
                  className="mt-4 inline-block font-semibold text-brand-blue hover:text-brand-red"
                >
                  Browse all articles →
                </Link>
              </ContentCard>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}