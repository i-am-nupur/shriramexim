// Single source of truth for content. Replace the placeholder values below
// with your real company, contact and specification data.

export const company = {
  name: "Shri Ram Exim LLP",
  legalName: "Shri Ram Global Trade & Exim LLP",
};

export const contact = {
  address: "Your office address, City, State, PIN, India",
  phone: "+91 00000 00000",
  email: "export@yourdomain.com",
  hours: "Mon–Sat, 9:30 am – 6:30 pm IST",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Specifications", href: "#specifications" },
  { label: "Logistics", href: "#logistics" },
  { label: "Contact", href: "#quote" },
];

// Placeholder ports: confirm the ones you actually ship from.
export const ports = [
  { name: "Chennai", code: "INMAA", note: "Guntur chillies, containerised" },
  { name: "Krishnapatnam", code: "INKRI", note: "Andhra Pradesh cargo" },
  { name: "Nhava Sheva (JNPT)", code: "INNSA", note: "Cumin and western routes" },
];

// Add a `logo` path (e.g. "/certs/apeda.svg") once you have the file in /public.
export const credentials: {
  name: string;
  detail: string;
  logo?: string;
}[] = [
  { name: "APEDA", detail: "Registered agri-product exporter" },
  { name: "FSSAI", detail: "Food safety licence" },
  { name: "MSME", detail: "Udyam-registered enterprise" },
  { name: "Spices Board India", detail: "Registered spice exporter" },
];

export const snapshot = [
  { label: "Products", value: "Guntur red chillies, Indore cumin" },
  { label: "Origin", value: "Andhra Pradesh, Madhya Pradesh" },
  { label: "Shipping terms", value: "FOB, CIF" },
  { label: "Containers", value: "20 ft and 40 ft FCL" },
  { label: "Port of loading", value: "Chennai, Krishnapatnam, Nhava Sheva" },
];

export const products = [
  {
    slug: "guntur-red-chillies",
    name: "Guntur Red Chillies",
    tagline: "Teja S17 and Sannam S4, sun-dried and graded in Andhra Pradesh",
    image: "/teja.png",
    imageAlt: "Guntur Teja S17 and Sannam dried red chillies",
    summary:
      "Sourced from the Guntur belt and sorted for colour, pungency and pod size. Supplied with or without stem, with lot-wise lab reports on request.",
    facts: [
      { label: "Varieties", value: "Teja S17, Sannam S4 (334)" },
      { label: "Origin", value: "Guntur, Andhra Pradesh" },
      { label: "Forms", value: "Whole, stemless, crushed, powder" },
      { label: "Used for", value: "Chilli powder, sauces, pickles, oleoresin" },
    ],
  },
  {
    slug: "indore-cumin-jeera",
    name: "Indore Cumin (Jeera)",
    tagline: "Machine-cleaned and sortex-cleaned cumin seed from Madhya Pradesh",
    image: "/jeera.png",
    imageAlt: "Indore cumin (jeera) seeds",
    summary:
      "Cleaned to Europe and Singapore quality standards for uniform colour, strong aroma and high volatile oil content.",
    facts: [
      { label: "Grades", value: "Europe quality, Singapore quality" },
      { label: "Origin", value: "Indore, Madhya Pradesh" },
      { label: "Forms", value: "Whole seed, ground on request" },
      { label: "Used for", value: "Spice blends, seasoning, food processing" },
    ],
  },
];

// Indicative export ranges. Replace with your own lab-tested values.
export const specColumns = ["Guntur Teja S17", "Guntur Sannam S4", "Indore Cumin"];

export const specRows: { parameter: string; values: string[] }[] = [
  { parameter: "ASTA colour value", values: ["30–60", "30–50", "N/A"] },
  {
    parameter: "SHU pungency",
    values: ["50,000–100,000", "25,000–50,000", "N/A"],
  },
  {
    parameter: "Moisture content",
    values: ["12% max", "12% max", "10% max"],
  },
  {
    parameter: "Foreign matter",
    values: ["1% max", "1% max", "1% max (Singapore), 0.5% max (Europe)"],
  },
  {
    parameter: "Purity",
    values: ["N/A", "N/A", "99% min, machine and sortex cleaned"],
  },
  { parameter: "Volatile oil", values: ["N/A", "N/A", "2.5% min"] },
  {
    parameter: "Stem",
    values: ["With or without stem", "With or without stem", "N/A"],
  },
  { parameter: "Crop year", values: ["2026 crop", "2026 crop", "2026 crop"] },
  {
    parameter: "Aflatoxin and residues",
    values: [
      "Within destination-market limits",
      "Within destination-market limits",
      "Within destination-market limits",
    ],
  },
];

export const packing = [
  {
    name: "25 kg PP bag",
    note: "Woven polypropylene, double-stitched. Suits smaller lots and buyers who repack.",
  },
  {
    name: "50 kg PP bag",
    note: "Standard bulk pack for chillies and cumin, and the most efficient for container loading.",
  },
  {
    name: "25 kg or 50 kg jute bag",
    note: "Breathable natural fibre, preferred by some buyers for dried chillies.",
  },
];

// Approximate net weights. Confirm against your actual loading experience.
export const containers = [
  { type: "20 ft FCL", chilli: "8–10 MT", cumin: "12–15 MT" },
  { type: "40 ft FCL", chilli: "16–20 MT", cumin: "24–26 MT" },
];

export const shippingTerms = [
  {
    code: "FOB",
    full: "Free on Board",
    text: "We deliver the cargo loaded on board the vessel at the Indian port of loading. You arrange ocean freight and marine insurance.",
  },
  {
    code: "CIF",
    full: "Cost, Insurance and Freight",
    text: "We arrange and pay for freight and minimum marine insurance to your destination port. Risk transfers once cargo is on board.",
  },
];

export const steps = [
  {
    title: "Send your requirements",
    text: "Share the product, grade, quantity, destination port and shipping terms.",
  },
  {
    title: "Receive a quotation and samples",
    text: "We reply with a priced offer and can send samples and lab reports for approval.",
  },
  {
    title: "Confirm the order",
    text: "Agree the specification, packing and payment terms, then we prepare the lot.",
  },
  {
    title: "Load, ship and document",
    text: "Cargo is cleaned, packed and loaded, and your shipping documents are issued.",
  },
];