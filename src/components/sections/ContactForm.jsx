import { useState } from "react";
import { business } from "../../data/business";
import Button from "../ui/Button";

export default function ContactForm({
  title = "Send Us a Message",
  submitLabel = "Send Message",
  showInspectionOption = false,
}) {
  const [submitted, setSubmitted] = useState(false);
  const isConfigured = business.formAccessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

  function handleSubmit(event) {
    event.preventDefault();
    if (!isConfigured) return;
    event.target.submit();
    setSubmitted(true);
  }

  return (
    <div id="estimate">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-2 text-gray-600">
        Got questions about your heating or cooling system? We&apos;re here to help.
      </p>

      {!isConfigured && (
        <p
          className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          role="status"
        >
          Form placeholder: add your Web3Forms access key in{" "}
          <code className="font-mono text-xs">src/data/business.js</code> before launch.
        </p>
      )}

      {submitted ? (
        <p className="mt-6 text-lg font-medium text-brand-blue" role="status">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form
          action={business.formEndpoint}
          method="POST"
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <input type="hidden" name="access_key" value={business.formAccessKey} />
          <input type="hidden" name="subject" value={`New inquiry — ${business.name}`} />

          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          {showInspectionOption && (
            <div>
              <label htmlFor="contact-service" className="mb-1 block text-sm font-medium">
                Service needed
              </label>
              <select
                id="contact-service"
                name="service"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              >
                <option value="estimate">Free Estimate</option>
                <option value="inspection">Schedule a Free Inspection</option>
                <option value="repair">Repair</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <Button type="submit" size="lg" disabled={!isConfigured}>
            {submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
}