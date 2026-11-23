import { SectionHeader, Icon, sectionPad } from "../UI";

const markets = [
  { name: "UAE", cities: "Dubai, Abu Dhabi, Sharjah" },
  { name: "Saudi Arabia", cities: "Riyadh, Jeddah, Dammam" },
  { name: "Singapore", cities: "Singapore Port" },
  { name: "United Kingdom", cities: "London, Felixstowe Port" },
  { name: "United States", cities: "East and West Coast" },
];
const moreMarkets = "Qatar, Kuwait, Oman, Malaysia, Sri Lanka, Australia";

export default function Markets() {
  return (
    <section aria-labelledby="markets-heading" className="bg-white">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Export destinations"
          id="markets-heading"
          title="Markets we serve globally"
          text="We work with importers across major food import markets in the Middle East, Southeast Asia, Europe and North America, shipping from Indian ports on FOB and CIF terms."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          
          {/* Replaced Map with a Modern Trade Routes Visual */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-[#002147] p-8 text-white md:p-12">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h3 className="mb-10 text-2xl font-bold tracking-tight text-white/90 sm:text-3xl">
                Global Trade Network
              </h3>
              
              <div className="relative ml-2 border-l-2 border-slate-600/50 pl-8 space-y-10">
                {/* Origin */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[#B5432A] ring-4 ring-[#B5432A]/30"></div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#B5432A]">Origin</p>
                  <p className="mt-1 text-2xl font-bold text-white">Indian Ports</p>
                  <p className="mt-2 text-sm text-slate-400">Loading ports across the East and West coasts of India</p>
                </div>

                {/* Destinations */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-4 border-[#002147] bg-white"></div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Major Destinations</p>
                  
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white">
                      Europe & UK
                    </span>
                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white">
                      Middle East
                    </span>
                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white">
                      Southeast Asia
                    </span>
                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white">
                      Africa
                    </span>
                    <span className="rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white">
                      The Americas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Markets List */}
          <ul className="space-y-3">
            {markets.map((market) => (
              <li
                key={market.name}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg hover:ring-[#B5432A]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBEDE8] text-[#B5432A]">
                  <Icon
                    paths={[
                      "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z",
                      "M12 7a3 3 0 100 6 3 3 0 000-6z",
                    ]}
                    size={20}
                  />
                </span>
                <div>
                  <p className="font-bold text-[#002147]">{market.name}</p>
                  <p className="text-sm text-slate-600">{market.cities}</p>
                </div>
              </li>
            ))}
            <li className="rounded-2xl border-2 border-dashed border-slate-300 p-5">
              <p className="font-bold text-[#002147]">More markets on request</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {moreMarkets}
              </p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}