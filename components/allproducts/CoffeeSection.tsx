import Image from "next/image";
import Link from "next/link";

const coffeeRange = [
  {
    name: "Plantation A (PLA)",
    sub: "Washed Arabica",
    desc: "India's most exported washed Arabica grade with clean, soft cup quality.",
  },
  {
    name: "Plantation AA & PB",
    sub: "Premium Washed Arabica",
    desc: "Bold AA beans and round Peaberry (PB) grades. High density and excellent roasting uniformity.",
  },
  {
    name: "Arabica Cherry AB",
    sub: "Natural Sun-dried Arabica",
    desc: "Unwashed Arabica with heavier body and sweet, fruity notes. Ideal for espresso blends.",
  },
  {
    name: "Robusta Parchment AB",
    sub: "Washed Robusta",
    desc: "Clean, washed Robusta delivering strong body and crema without harsh bitterness.",
  },
  {
    name: "Robusta Cherry AB",
    sub: "Natural Sun-dried Robusta",
    desc: "Classic Indian Robusta used globally as a high-caffeine base for commercial blends.",
  },
  {
    name: "Monsoon Malabar AA",
    sub: "Indian Specialty",
    desc: "Monsooned on the Malabar coast. Extremely low acidity with chocolate and spice notes.",
  },
];

export default function CoffeeSection() {
  return (
    <section className="bg-white py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 order-last lg:order-first">
            <Image
              src="/coffee-beans.jpeg" // Replace with your coffee image
              alt="Coffee beans in jute bags"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:py-4">
            <p className="text-xs font-bold tracking-widest text-[#B5432A] uppercase mb-4 bg-red-50 inline-block px-3 py-1 rounded-full">
              Category 03
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147] mb-6 leading-tight">
              Coffee: Arabica, Robusta & Specialty
            </h2>
            <div className="text-slate-600 space-y-5 mb-10 text-lg">
              <p>
                India is the seventh-largest coffee exporter in the world, producing 350,000-370,000 MT annually, 
                with 70% exported to over 60 countries. Italy, Germany, Belgium and Russia lead destinations. 
                India's shade-grown tradition under silver oak produces beans with exceptional density, low acidity and complex cup character.
              </p>
              <p>
                We supply green coffee beans, custom-roasted whole bean or ground, and 100% pure spray-dried or 
                agglomerated instant coffee. All Indian Coffee Board grades available (Plantation A/AA/PB, Arabica Cherry, 
                Robusta Parchment, Robusta Cherry) plus the three Indian flagship specialty coffees: Monsoon Malabar AA, 
                Mysore Nuggets Extra Bold and Robusta Kaapi Royale.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-[#002147]">30+</p>
                <p className="text-sm text-slate-500 mt-1">Coffee grades</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">3</p>
                <p className="text-sm text-slate-500 mt-1">Specialty coffees</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#002147]">82+</p>
                <p className="text-sm text-slate-500 mt-1">SCA cup score</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Range Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#002147] mb-8">Coffee Range</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {coffeeRange.map((coffee) => (
              <div key={coffee.name} className="border-b border-slate-200 pb-6">
                <h4 className="text-lg font-bold text-[#002147]">{coffee.name}</h4>
                <p className="text-sm text-slate-500 mb-3">{coffee.sub}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{coffee.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Banner with button */}
        <div className="mt-12 bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-[#002147]">Browse Our Complete Coffee Range</h4>
            <p className="text-sm text-slate-600 mt-1">Specifications, sourcing from Malabar GI-tagged, packaging options and flavoured retail packs.</p>
          </div>
          <Link href="/products/coffee" className="bg-[#002147] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition shrink-0 whitespace-nowrap">
            Request a Quote →
          </Link>
        </div>

      </div>
    </section>
  );
}