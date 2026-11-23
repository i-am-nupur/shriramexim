import { SectionHeader, Icon, cardBase, sectionPad } from "../UI";

const why = [
  {
    title: "Origin-Direct Sourcing",
    text: "We procure directly from India’s specialized agricultural and processing belts—eliminating unnecessary middlemen. This ensures fresher harvests, authentic regional grades (like Guntur chillies and Indore cumin), and competitive FOB/CIF pricing.",
    icon: ["M5 20C5 11 11 5 19 5c0 8-6 15-14 15z", "M19 5l2-2"],
  },
  {
    title: "Multi-Category Convenience",
    text: "From food-grade spices and rice to cosmetic-grade extracted oils and industrial coconut shells, global buyers can source multiple Indian commodities through a single, vetted export partner—saving vendor-vetting time and administrative overhead.",
    icon: [
      "M12 5a2 2 0 100 4 2 2 0 000-4z",
      "M5 15a2 2 0 100 4 2 2 0 000-4z",
      "M19 15a2 2 0 100 4 2 2 0 000-4z",
      "M12 9v3M12 12l-6 3M12 12l6 3",
    ],
  },
  {
    title: "Zero-Hassle Export Documentation",
    text: "Customs delays cost money. We handle end-to-end export compliance—accurate HS codes, commercial invoices, packing lists, certificates of origin, and fumigation certificates—so your cargo clears destination ports smoothly.",
    icon: [
      "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
      "M14 2v6h6",
      "M8 13h8M8 17h6",
    ],
  },
  {
    title: "Tailored Packaging & Private Labeling",
    text: "Whether you need 25kg/50kg PP or Jute bags for bulk grains, vacuum-sealed spice packs, HDPE/steel drums for cosmetic oils, or custom buyer-branded packaging, we pack strictly to international transit and retail standards.",
    icon: ["M21 8l-9-5-9 5v8l9 5 9-5V8z", "M3.3 7.5L12 12l8.7-4.5", "M12 22V12"],
  },
  {
    title: "Lab-Tested & Inspection Ready",
    text: "Every shipment is backed by strict batch quality checks for moisture, purity, and grading. We support pre-shipment third-party inspections (such as SGS/Intertek) and provide complete technical documentation, including COA, MSDS (for oils), and Phytosanitary certificates.",
    icon: ["M3 15l2 5h14l2-5z", "M7 15V9h10v6", "M12 9V4"],
  },
  {
    title: "Transparent, Founder-Led Accountability",
    text: "Unlike slow, layered trading houses, you get direct, responsive communication from inquiry to port delivery—with clear timelines, real-time shipment updates, and a long-term partnership mindset.",
    icon: ["M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"],
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-white">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Why Shri Ram Exim LLP"
          id="why-heading"
          title="Built for Global Buyers Who Value Consistency Over Promises"
          text="We eliminate the friction of cross-border sourcing—combining origin-direct Indian commodities with strict quality control and seamless export documentation."
        />

        {/* max-w-6xl aur mx-auto lagaya hai taaki container center mein rahe aur over-stretch na ho */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {why.map((item) => (
            <article 
              key={item.title} 
              // Hover classes, transition, aur padding (p-8 se p-6) add kiya hai
              className={`${cardBase} p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[0.97] hover:shadow-2xl hover:shadow-gray-400 cursor-pointer`}
            >
              {/* Icon size aur container thora chota kiya */}
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBEDE8]">
                <Icon paths={item.icon} size={22} />
              </span>
              
              {/* Heading ko thin karne ke liye font-bold se font-medium aur size thora kam (text-lg) kiya */}
              <h3 className="mt-5 text-lg font-medium text-[#002147]">
                {item.title}
              </h3>
              
              {/* Paragraph ko text-sm aur font-light dekar thin look diya */}
              <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}