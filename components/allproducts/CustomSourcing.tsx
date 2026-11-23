import Link from "next/link";

const demandExamples = [
  { title: "Pulses & lentils", items: "chickpea, masoor, moong, urad, toor dal" },
  { title: "Oil seeds", items: "sesame, groundnut, sunflower, niger, safflower" },
  { title: "Teas", items: "Assam, Darjeeling, Nilgiri, green tea, masala chai" },
  { title: "Fresh fruits", items: "mango, pomegranate, grapes, banana" },
  { title: "Dry fruits", items: "cashew, raisin, walnut, almond, fig" },
  { title: "Jaggery & sugar", items: "organic jaggery, refined sugar, brown sugar" },
  { title: "Honey", items: "wild, multi-floral, mustard, lychee honey" },
  { title: "Processed foods", items: "instant mixes, ready-to-cook, snacks, papad" },
];

const sourcingSteps = [
  {
    step: "1",
    title: "Share specification",
    desc: "Product, target specs, volume, destination port and target price. The more detail, the better.",
  },
  {
    step: "2",
    title: "Sourcing feasibility",
    desc: "Within 24-48 hours we confirm whether we can source, expected timeline and indicative pricing.",
  },
  {
    step: "3",
    title: "Sample shipment",
    desc: "If specs match, we courier sample with lab COA. You approve before order confirmation.",
  },
  {
    step: "4",
    title: "Order execution",
    desc: "Full procurement, lab testing, documentation, packaging and shipment by our team.",
  },
];

export default function CustomSourcing() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Card Container */}
      <div className="mx-auto max-w-7xl bg-[#012f6a] text-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16">
          
          {/* Left Side */}
          <div>
            <p className="text-xs font-bold tracking-widest text-[#bc8521] uppercase mb-4">
              Need something not listed?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              We source on demand. <br /> Tell us what you need.
            </h2>
            <p className="text-[#A2B8B0] text-lg mb-8 leading-relaxed">
              Our published catalogue covers six categories and over fifty varieties, but India produces hundreds of agricultural commodities, and we have direct relationships with farmers, processors, mandi traders and exporters across the country. If the product you need is grown or manufactured in India, we can almost certainly source it for you.
            </p>
            
            <p className="font-bold text-white mb-4">Examples of products we have sourced or can source on demand:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {demandExamples.map((ex) => (
                <div key={ex.title} className="bg-white/10 rounded-lg p-4 border border-white/10">
                  <p className="font-bold text-sm text-[#bc8521]">{ex.title}:</p>
                  <p className="text-sm text-[#A2B8B0] mt-1">{ex.items}</p>
                </div>
              ))}
            </div>

            <p className="text-[#A2B8B0] text-sm mb-8 leading-relaxed">
              If you have a target specification, target FOB price and target volume, share it with us. We respond within 24 hours with sourcing feasibility, indicative pricing, sample timeline and required lead time.
            </p>
            <Link href="/contact" className="inline-block bg-[#bc8521] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#9e6f1a] transition">
              Submit a Custom Sourcing Request
            </Link>
          </div>

          {/* Right Side */}
          <div className="lg:pl-10">
            <h3 className="text-2xl font-bold mb-8">How Custom Sourcing Works</h3>
            <div className="space-y-8">
              {sourcingSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#bc8521] text-white font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[#A2B8B0] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}