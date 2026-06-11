import { useId, useState } from "react";

function FAQItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        >
          {question}
          <span className="shrink-0 text-brand-red" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!isOpen}
        className="pb-5 text-gray-600"
      >
        <p>{answer}</p>
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
      <div>
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