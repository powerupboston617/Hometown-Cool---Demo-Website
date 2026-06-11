export default function Section({
  children,
  className = "",
  dark = false,
  id,
}) {
  const bg = dark ? "bg-brand-black text-brand-white" : "bg-brand-white text-brand-black";

  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      {children}
    </section>
  );
}