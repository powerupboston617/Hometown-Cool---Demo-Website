const filterLinkClass = (active) =>
  `pb-0.5 text-sm tracking-wide transition-all duration-300 ease-in-out ${
    active
      ? "border-b border-brand-black font-medium text-brand-black"
      : "border-b border-transparent text-gray-400 hover:text-gray-600"
  }`;

export default function BlogCategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <nav aria-label="Filter articles by category" className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {categories.map((category, index) => (
        <span key={category} className="flex items-center gap-3">
          {index > 0 && (
            <span aria-hidden="true" className="text-gray-300">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => onChange(category)}
            className={filterLinkClass(activeCategory === category)}
            aria-current={activeCategory === category ? "true" : undefined}
          >
            {category}
          </button>
        </span>
      ))}
    </nav>
  );
}