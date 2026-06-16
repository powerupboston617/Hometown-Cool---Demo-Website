import { useEffect, useId, useRef } from "react";
import ContactForm from "./ContactForm";

export default function EstimateModal({ isOpen, onClose }) {
  const titleId = useId();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-brand-black/50 backdrop-blur-[2px]"
        aria-label="Close estimate form"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-brand-white p-6 shadow-xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ContactForm
          title="Get a Free Estimate"
          titleId={titleId}
          submitLabel="Request Estimate"
          showInspectionOption
          idPrefix="modal-estimate"
          showIntro
        />
      </div>
    </div>
  );
}