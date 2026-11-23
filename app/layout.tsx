import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Initializing Playfair Display for a royal, thin serif look
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shri Ram Exim LLP | Guntur Red Chilli & Indore Jeera Exporter",
  description:
    "Shri Ram Exim LLP exports premium Guntur red chillies (Teja S17, Sannam S4), Byadgi chillies and Indore jeera to importers and distributors worldwide.",
  keywords: [
    "Guntur red chilli exporter",
    "Teja S17 exporter",
    "Indore jeera exporter",
    "Indian spice exporter",
    "bulk spices export India",
  ],
  openGraph: {
    title: "Shri Ram Exim LLP | Premium Indian Spice Exporter",
    description:
      "Graded Guntur red chillies and Indore jeera, supplied in bulk with lab reports and complete export documentation.",
    type: "website",
    locale: "en_IN",
    siteName: "Shri Ram Exim LLP",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shri Ram Global Trade & Exim LLP",
  alternateName: "Shri Ram Exim LLP",
  description:
    "Exporter of Guntur red chillies, Byadgi chillies and Indore jeera.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} bg-white text-[#002147] antialiased tracking-wide`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}