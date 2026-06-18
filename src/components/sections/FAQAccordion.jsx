import { useId, useState } from "react";

function FAQItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue sm:px-6"
        >
          <span>{question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-brand-red transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!isOpen}
        className="px-5 pb-5 text-text-muted sm:px-6"
      >
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items, heading = "Frequently Asked Questions" }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {heading && <h2 className="mb-6 text-2xl font-bold md:text-3xl">{heading}</h2>}
      <div className="card-surface overflow-hidden">
        {items.map((item, index) => (
          <FAQItem
            key={item.q}
            id={`${baseId}-${index}`}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
}