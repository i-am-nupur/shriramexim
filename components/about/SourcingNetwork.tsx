import Image from "next/image";

const regions = [
  {
    title: "Punjab & Haryana",
    cities: "Karnal • Amritsar • Ambala",
    desc: "Basmati rice belt. Premium 1121 and 1509 grades, Traditional Basmati, Pusa varieties."
  },
  {
    title: "Bihar & Meghalaya",
    cities: "Darbhanga • Madhubani • Jaintia Hills",
    desc: "Makhana from Bihar (90% of global supply); Lakadong turmeric from Meghalaya (highest curcumin globally)."
  },
  {
    title: "Andhra Pradesh, Telangana, Karnataka",
    cities: "Guntur • Khammam • Warangal • Nizamabad • Haveri",
    desc: "India's chilli capital (Teja, S17, Guntur); high-curcumin turmeric (Nizamabad); Byadgi chilli and cardamom from Karnataka."
  },
  {
    title: "Maharashtra, Gujarat, Tamil Nadu, Kerala",
    cities: "Sangli • Unjha • Salem • Erode • Alleppey",
    desc: "Major spice hubs for turmeric, cumin, fennel, black pepper and blended spices."
  }
];

export default function SourcingNetwork() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Our Sourcing Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Direct relationships <br /> across India's producing belts
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We source directly from origin states, not from secondary middlemen. Direct sourcing gives 
            us better quality control, more competitive pricing, faster turnaround and complete supply 
            transparency for our buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          
          {/* Left Side: Map Placeholder */}
          <div className="bg-[#EEF2F8] border-[0.5px] border-slate-200 rounded-3xl aspect-[4/3] relative flex items-center justify-center overflow-hidden">
            {/* Jab aapke paas actual map SVG/Image ho, toh yahan daal dena */}
            <div className="text-center p-8">
              <span className="text-5xl mb-4 block">🗺️</span>
              <p className="text-sm font-semibold tracking-widest text-[#012F6A]/50 uppercase">
                India Sourcing Map
              </p>
            </div>
          </div>

          {/* Right Side: Region Cards */}
          <div className="space-y-4">
            {regions.map((region) => (
              <div 
                key={region.title}
                className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-6 hover:border-[#BC8521] hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#012F6A] mb-1">
                  {region.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {region.cities}
                </p>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {region.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}