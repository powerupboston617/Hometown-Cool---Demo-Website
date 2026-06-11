// Single source of truth for company-wide details used across all pages
// and in JSON-LD structured data.
export const business = {
  name: "Hometown Cooling & Heating",
  phone: "(774) 454-0290",
  email: "mike@hometown.cool",
  street: "241 Hedges Pond Rd",
  city: "Plymouth",
  state: "MA",
  zip: "02360",
  baseUrl: "https://hometown.cool",
  hours: "Mon–Fri, 7am – 3pm",
  // Update with real profile URLs before launch
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
  },
  // Web3Forms (or similar) — replace access key before launch
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  services: [
    "AC Installation",
    "AC Repair",
    "Heating Installation",
    "Heating Repair",
    "Ductless Mini-Splits",
    "Maintenance Plans",
  ],
};