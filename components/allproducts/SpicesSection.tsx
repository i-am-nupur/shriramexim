import Image from "next/image";
import Link from "next/link";

const flagshipSpices = [
  {
    name: "Red Chilli",
    image: "/teja.png", // Replace with your actual chilli image path
    varieties: "9 varieties • 4,000–80,000 SHU range",
    desc: "Teja, S17, Byadgi, Kashmiri, Guntur, 334, 273, DD and Endo varieties. ASTA colour 20–160, SHU mapped per variety. Whole, stemless, broken, powder and oleoresin.",
    link: "/products/red-chilli",
  },
  {
    name: "Turmeric",
    image: "/turmeric.png", // Replace with your actual turmeric image path
    varieties: "11 varieties • 2–12% curcumin",
    desc: "Salem, Erode, Alleppey, Rajapuri, Nizamabad, Lakadong (7-12% curcumin, highest globally), Sangli, Waigaon and others. Finger, bulb, powder, polished, unpolished.",
    link: "/products/turmeric",
  },
];

const otherSpices = [
  {
    name: "Cumin Seeds (Jeera)",
    sub: "Singapore & Europe grades",
    tags: ["Gujarat", "Sortexed"],
    desc: "Indian cumin from Gujarat and Rajasthan. Singapore grade (1-2% impurity), Europe grade (under 1%). Machine-cleaned and sortexed.",
  },
  {
    name: "Coriander Seeds",
    sub: "Eagle & Scooter varieties",
    tags: ["Eagle", "Scooter"],
    desc: "Eagle (round, premium aroma) and Scooter (elongated) varieties from Rajasthan, MP and Gujarat. Whole, split and powder.",
  },
  {
    name: "Black Pepper",
    sub: "Malabar Garbled grades",
    tags: ["Malabar", "Garbled"],
    desc: "Indian Malabar Garbled (MG1, MG2 grades) and Tellicherry Special Extra Bold (TGEB) from Kerala. Whole, cracked and powder.",
  },
  {
    name: "Cardamom (Green & Black)",
    sub: "7mm to 8mm+ bold grades",
    tags: ["Idukki", "8mm Bold"],
    desc: "Small green cardamom from Idukki, Wayanad and Sirsi (7mm bold and 8mm extra bold). Black cardamom from Sikkim and Northeast.",
  },
  {
    name: "Fennel Seeds (Saunf)",
    sub: "European & Indian varieties",
    tags: ["Gujarat", "Sortexed"],
    desc: "Sortexed fennel from Gujarat. Whole, ground, candy-coated and lucknowi variants. Industrial and retail grades.",
  },
  {
    name: "Fenugreek (Methi)",
    sub: "Seeds & leaves",
    tags: ["Rajasthan", "Kasuri Methi"],
    desc: "Yellow fenugreek seeds from Rajasthan and Gujarat. Dried Kasuri Methi leaves available: whole, split, powder, sortexed.",
  },
  {
    name: "Mustard Seeds",
    sub: "Yellow, brown & black",
    tags: ["Multi-variety", "Oil grade"],
    desc: "Indian mustard seeds: yellow (oil seed grade), brown and black varieties. Whole and crushed; oil pressing and culinary grades.",
  },
  {
    name: "Ajwain (Carom Seeds)",
    sub: "Sortexed & cleaned",
    tags: ["Rajasthan", "Sortexed"],
    desc: "Indian carom seeds from Rajasthan and Gujarat. Whole and powder forms, machine-cleaned and sortexed grades for export.",
  },
  {
    name: "Custom Spice Blends",
    sub: "Private label • OEM blending",
    tags: ["Private label", "OEM"],
    desc: "Garam masala, biryani masala, curry powder and custom blends to buyer formula. Private label artwork and packaging available.",
  },
];

export default function SpicesSection() {
  return (
    <section id="catalogue" className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200">
            {/* You will need a top view image of spices in bowls here */}
            <Image
              src="/spices-grid.png" 
              alt="Assortment of Indian spices"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="text-xs font-bold tracking-widest text-[#B5432A] uppercase mb-4 bg-red-50 inline-block px-3 py-1 rounded-full">
              Category 01
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] mb-6 leading-tight">
              Spices: Ten Categories, Dozens of Grades
            </h2>
            <div className="text-slate-600 space-y-5 mb-10 text-lg">
              <p>
                India accounts for over 70% of global spice exports. We supply ten major spice
                categories sourced from the producing belts of Andhra Pradesh, Telangana, Karnataka,
                Gujarat, Tamil Nadu, Maharashtra and Kerala. Every consignment is Spices Board certified
                with HPLC testing for curcumin, ASTA for chilli colour, SHU for pungency and full MRL panel
                against EU and FDA standards.
              </p>
              <p>
                Forms include whole, ground, blended, oleoresin extract and custom retail packaging.
                Sudan dye absence verified per lot; lead testing per FDA 2.5 ppm limit for turmeric.
                Sample-first approach with written specification approval before shipment.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-[#002147]">10</p>
                <p className="text-sm text-slate-500 mt-1">Spice categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">20+</p>
                <p className="text-sm text-slate-500 mt-1">Specific varieties</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">100%</p>
                <p className="text-sm text-slate-500 mt-1">HPLC tested</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Spices */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#002147] mb-2">Flagship Spices</h3>
          <p className="text-slate-500 mb-8 max-w-3xl">
            Two spices form the backbone of our spices business: Indian red chilli and turmeric. Each has its own dedicated
            product page covering all varieties, lab parameters, sourcing regions and importer pain points in depth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flagshipSpices.map((spice) => (
              <div key={spice.name} className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row gap-6 border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="relative w-full sm:w-1/3 aspect-square sm:aspect-auto rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image src={spice.image} alt={spice.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-[#002147] mb-1">{spice.name}</h4>
                  <p className="text-sm text-[#B5432A] font-semibold mb-3">{spice.varieties}</p>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{spice.desc}</p>
                  <Link href={spice.link} className="text-sm font-bold text-[#002147] hover:text-[#B5432A] inline-flex items-center gap-1 mt-auto">
                    Explore {spice.name.toLowerCase()} range <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Spices Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#002147] mb-8">Other Spices in Our Range</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSpices.map((spice) => (
              <div key={spice.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col">
                <h4 className="text-lg font-bold text-[#002147]">{spice.name}</h4>
                <p className="text-sm text-slate-500 mb-4">{spice.sub}</p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">{spice.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {spice.tags.map(tag => (
                    <span key={tag} className="bg-[#EAF0F7] text-[#002147] text-xs font-semibold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#EEF2F8] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200">
          <div>
            <h4 className="text-lg font-bold text-[#002147]">Browse Our Complete Spices Range</h4>
            <p className="text-sm text-slate-600 mt-1">Specifications, sourcing regions, MRL compliance and ordering process for all ten spice categories.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/products" className="bg-[#002147] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition">
              Request a Quote →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}