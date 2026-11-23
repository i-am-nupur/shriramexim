const steps = [
  {
    id: "1",
    title: "Share Requirement",
    desc: "Product, variety, grade, quantity, target specifications, destination port, packaging, Incoterm. The more detail you share, the faster and more accurate our quotation."
  },
  {
    id: "2",
    title: "Get Quotation",
    desc: "CIF, FOB, CFR or EXW quote within 24 hours, with detailed specs, lab parameters, sample availability, lead time and pricing valid for 7 to 15 days."
  },
  {
    id: "3",
    title: "Sample Approval",
    desc: "Sample dispatched by courier with full lab COA. You approve specifications. Sample cost adjusted in final invoice. We move forward only after written approval."
  },
  {
    id: "4",
    title: "Packing & Inspection",
    desc: "Order processed at supplier facility. Pre-shipment lab testing. Phytosanitary, fumigation, Spices Board sampling, optional third-party inspection."
  },
  {
    id: "5",
    title: "Shipment & Documentation",
    desc: "Loaded at JNPT, Mundra, Chennai or Cochin. Full document set dispatched to buyer including BL, COA, COO, Phyto, Fumigation, Spices Board certificate and any destination-specific paperwork."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            From your first inquiry to <br /> customs clearance, in five steps
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            A consistent process for every order, regardless of product category or destination. 
            Standard turnaround from confirmed order to vessel loading is 15 to 25 days depending on 
            variety availability, packaging requirements and lab testing schedule.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[0.5px] bg-[#012F6A]/20 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-6 shadow-sm ${index === steps.length - 1 ? 'bg-[#BC8521]' : 'bg-[#012F6A]'}`}>
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-[#012F6A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}