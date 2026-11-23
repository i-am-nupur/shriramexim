import Link from "next/link";

const middleEastGuides = [
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    desc: "Basmati rice import hub for the Gulf and East Africa",
    link: "/markets/uae",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    desc: "Largest single Basmati importer, SASO compliance",
    link: "/markets/saudi-arabia",
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
    desc: "Premium Basmati and traditional aged grades",
    link: "/markets/qatar",
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
    desc: "Retail and Sella for retail and food service",
    link: "/markets/kuwait",
  },
  {
    country: "Oman",
    flag: "🇴🇲",
    desc: "Basmati for Oman, also re-export to East Africa",
    link: "/markets/oman",
  },
  {
    country: "Middle East Overview",
    flag: "🌍",
    desc: "Regional ports, freight, payment and document norms",
    link: "/markets/middle-east",
  },
];

export default function DestinationGuides() {
  return (
    <section className="bg-[#F9FAFB] py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold tracking-widest text-[#B5432A] uppercase mb-4">
            Browse by destination country
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] mb-6 leading-tight">
            Buying from India? <br /> Country-specific guides for importers
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We have built dedicated landing pages for our priority destination markets. Each covers import duties, port logistics, payment norms, documentation specific to that country, popular product variants and recent shipment examples where relevant.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-[#002147]">Middle East (Gulf Region)</h3>
            <span className="text-sm text-slate-400">Primary Market</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {middleEastGuides.map((guide) => (
              <div key={guide.country} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col">
                <div className="text-2xl mb-4">{guide.flag}</div>
                <h4 className="text-lg font-bold text-[#002147] mb-2">{guide.country}</h4>
                <p className="text-sm text-slate-500 mb-6 flex-1">{guide.desc}</p>
                <Link href={guide.link} className="text-sm font-bold text-[#002147] hover:text-[#B5432A] flex items-center gap-1 mt-auto">
                  View {guide.country.replace(" Overview", "")} guide <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}