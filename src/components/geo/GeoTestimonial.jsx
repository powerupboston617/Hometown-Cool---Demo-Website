import Container from "../ui/Container";

export default function GeoTestimonial({ area }) {
  if (!area.testimonial) return null;

  const { quote, author, location } = area.testimonial;

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <blockquote className="mx-auto max-w-2xl text-center">
          <p className="text-xl italic leading-relaxed text-gray-700">&ldquo;{quote}&rdquo;</p>
          <footer className="mt-4 text-sm font-semibold text-brand-black">
            — {author}
            {location && <span className="font-normal text-gray-500">, {location}</span>}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}