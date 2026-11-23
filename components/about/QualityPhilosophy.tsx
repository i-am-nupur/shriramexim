const qualityPoints = [
  {
    icon: "🔬",
    title: "NABL Lab Testing",
    desc: "Every consignment is tested at NABL-accredited laboratories before dispatch. HPLC for curcumin, ASTA for colour, SHU for pungency, full microbiological and pesticide MRL panel. Results recorded on the Certificate of Analysis."
  },
  {
    icon: "🧪",
    title: "Sample-First Approach",
    desc: "Buyers approve specifications via lab-tested samples before order confirmation. Sample COA matches shipment COA. No surprises between approval and arrival at the destination port."
  },
  {
    icon: "🛡️",
    title: "EU & FDA Compliance",
    desc: "We test against the stricter of EU MRL (Regulation 396/2005) or US FDA limits, including lead in turmeric (FDA 2.5 ppm), Sudan dyes (absent), aflatoxin (below 10 ppb total) and salmonella (absent in 25g)."
  },
  {
    icon: "📋",
    title: "Complete Documentation",
    desc: "Phytosanitary, Certificate of Origin, Spices Board certificate, COA, fumigation certificate, packing list, BL, commercial invoice, plus destination-specific documents handled by our team."
  },
  {
    icon: "🔍",
    title: "Third-Party Inspection",
    desc: "Optional pre-shipment inspection by SGS, Bureau Veritas or Intertek at buyer cost. We do not refuse third-party verification because we trust our internal quality control processes."
  },
  {
    icon: "📊",
    title: "Transparent Specifications",
    desc: "We quote specifications honestly. If a variety typically delivers 3 to 4% curcumin, that is what we tell you. We do not inflate numbers to win an order only to fail at the lab stage."
  }
];

export default function QualityPhilosophy() {
  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Quality Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Lab-first. Document-complete. <br /> Sample-before-shipment.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            The single biggest complaint global importers have about Indian suppliers is quality 
            variance: the sample looks great, the shipment looks different. Our entire workflow is built to 
            prevent this.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPoints.map((point) => (
            <div 
              key={point.title}
              className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#EEF2F8] rounded-full mb-6 text-2xl">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#012F6A] mb-4">
                {point.title}
              </h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}