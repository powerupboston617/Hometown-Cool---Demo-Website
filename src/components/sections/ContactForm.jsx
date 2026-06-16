import { useState } from "react";
import { business } from "../../data/business";
import Button from "../ui/Button";

export default function ContactForm({
  title = "Send Us a Message",
  submitLabel = "Send Message",
  showInspectionOption = false,
  idPrefix = "contact",
  anchorId,
  showIntro = true,
  titleId,
}) {
  const [status, setStatus] = useState("idle");
  const isConfigured = business.formAccessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";
  const fieldId = (name) => `${idPrefix}-${name}`;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isConfigured || status === "submitting") return;

    const form = event.target;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch(business.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: business.formAccessKey,
          subject: `New inquiry — ${business.name}`,
          from_name: business.name,
          name: formData.get("name"),
          email: formData.get("email"),
          service: formData.get("service") || undefined,
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id={anchorId}>
      <h2 id={titleId} className="text-2xl font-bold md:text-3xl">
        {title}
      </h2>
      {showIntro && (
        <p className="mt-2 text-gray-600">
          Got questions about your heating or cooling system? We&apos;re here to help.
        </p>
      )}

      {!isConfigured && (
        <p
          className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          role="status"
        >
          Form placeholder: add your Web3Forms access key in{" "}
          <code className="font-mono text-xs">src/data/business.js</code> before launch.
        </p>
      )}

      {status === "success" ? (
        <p className="mt-6 text-lg font-medium text-brand-blue" role="status">
          Thank you! Your message has been sent. We&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor={fieldId("name")} className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id={fieldId("name")}
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div>
            <label htmlFor={fieldId("email")} className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          {showInspectionOption && (
            <div>
              <label htmlFor={fieldId("service")} className="mb-1 block text-sm font-medium">
                Service needed
              </label>
              <select
                id={fieldId("service")}
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
            <label htmlFor={fieldId("message")} className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id={fieldId("message")}
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          {status === "error" && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              Something went wrong sending your message. Please try again or call us at{" "}
              <a href={`tel:${business.phone.replace(/\D/g, "")}`} className="font-semibold underline">
                {business.phone}
              </a>
              .
            </p>
          )}

          <Button type="submit" size="lg" disabled={!isConfigured || status === "submitting"}>
            {status === "submitting" ? "Sending…" : submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
}