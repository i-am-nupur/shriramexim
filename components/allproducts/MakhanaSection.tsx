import Image from "next/image";
import Link from "next/link";

const makhanaGrades = [
  {
    name: "6 Sutta HP (Premium Jumbo)",
    size: "25-28 mm+ • Top tier",
    tags: ["Premium", "Jumbo"],
    desc: "Hand-picked premium jumbo grade. The largest available makhana, perfectly popped, uniform size, white colour. Premium retail and specialty health-food brands.",
  },
  {
    name: "5 Sutta HP (Large)",
    size: "22-25 mm • Large grade",
    tags: ["Large", "Retail"],
    desc: "Hand-picked large grade. Excellent visual appeal, uniform pops. Strong demand in US, UAE and European retail markets.",
  },
  {
    name: "4 Sutta HP (Standard Premium)",
    size: "18-22 mm • Standard premium",
    tags: ["Most exported", "Versatile"],
    desc: "Most exported makhana grade. Excellent balance of size, appearance and price. Popular in flavoured snack manufacturing and retail.",
  },
  {
    name: "3 Sutta HP (Commercial)",
    size: "14-18 mm • Commercial grade",
    tags: ["Commercial", "Value tier"],
    desc: "Smaller commercial grade. Used in instant snack mixes, breakfast cereals and value-tier flavoured packs.",
  },
  {
    name: "Phool Makhana (Mixed)",
    size: "Mixed-size puffed grade",
    tags: ["Industrial", "Mixed size"],
    desc: "Mixed-size puffed makhana for industrial users: snack manufacturers, granola producers, traditional sweet makers.",
  },
  {
    name: "Flavoured Makhana",
    size: "Retail-ready snack packs",
    tags: ["Private label", "Retail ready"],
    desc: "Pre-roasted and seasoned: salted, peri-peri, cheese, tomato, masala, mint, butter. 50g, 100g, 200g retail packs with private label option.",
  },
];

export default function MakhanaSection() {
  return (
    <section className="bg-[#F9FAFB] py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="/makhana-blog.jpg" // Replace with actual Makhana image
              alt="Premium Indian Makhana (Fox Nuts)"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:py-4">
            <p className="text-xs font-bold tracking-widest text-[#B5432A] uppercase mb-4 bg-red-50 inline-block px-3 py-1 rounded-full">
              Category 04
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] mb-6 leading-tight">
              Makhana: Premium Indian Fox Nuts
            </h2>
            <div className="text-slate-600 space-y-5 mb-10 text-lg">
              <p>
                India produces over 90% of the world's makhana supply, with Bihar accounting for 80%+ of national production. 
                Mithila Makhana from the wetlands of Madhubani, Darbhanga and Purnea districts holds GI (Geographical Indication) 
                tag protection. Booming demand from health-food markets in the US, UK, UAE, Australia and Southeast Asia has made 
                makhana one of India's fastest-growing agro exports.
              </p>
              <p>
                We supply hand-picked, sortexed, size-graded makhana in five quality tiers from premium jumbo to commercial. 
                Available natural (unflavoured) for further processing or pre-flavoured (salted, peri-peri, cheese, masala) for retail buyers. 
                Custom retail packaging from 50g to 1 kg available.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-[#002147]">05</p>
                <p className="text-sm text-slate-500 mt-1">Quality grades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">14-28 mm</p>
                <p className="text-sm text-slate-500 mt-1">Size range</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">90%+</p>
                <p className="text-sm text-slate-500 mt-1">Global supply</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {makhanaGrades.map((grade) => (
            <div key={grade.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition">
              <h4 className="text-lg font-bold text-[#002147] mb-1">{grade.name}</h4>
              <p className="text-sm text-slate-500 mb-4">{grade.size}</p>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-1">{grade.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {grade.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with button */}
        <div className="mt-12 bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-[#002147]">Browse Our Complete Makhana Range</h4>
            <p className="text-sm text-slate-600 mt-1">Specifications, sourcing from Bihar's GI-tagged wetlands, packaging options and flavoured retail packs.</p>
          </div>
          <Link href="/products/makhana" className="bg-[#002147] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition shrink-0 whitespace-nowrap">
            Request a Quote →
          </Link>
        </div>

      </div>
    </section>
  );
}