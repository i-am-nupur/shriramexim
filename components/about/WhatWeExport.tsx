import Link from "next/link";

const exportCategories = [
  {
    title: "Rice",
    sub: "Basmati & Non-Basmati",
    icon: "🌾",
    desc: "India is the world's largest Basmati exporter. Our range covers premium Basmati grades and high-volume Non-Basmati varieties for institutional and retail buyers.",
    points: [
      "Basmati: 1121, 1509, Pusa, Sharbati, Traditional, Sugandha",
      "Non-Basmati: IR-64, PR-11, Sona Masoori, Swarna",
      "Parboiled (Sella) and steam-finished options",
      "Broken Rice (100%, 25%, 5%) for industrial use"
    ],
    link: "/products/rice"
  },
  {
    title: "Spices",
    sub: "10 categories, dozens of grades",
    icon: "🌶️",
    desc: "India accounts for over 70% of global spice exports. We supply ten major spice categories with full HPLC testing, ASTA grading, MRL compliance and Sudan dye verification.",
    points: [
      "Red Chilli: 9 varieties (Teja, Byadgi, Kashmiri, Guntur, S17 etc.)",
      "Turmeric: 11 varieties including Lakadong (7-12% curcumin)",
      "Cumin, Coriander, Black Pepper, Cardamom",
      "Fennel, Fenugreek, Mustard, Ajwain"
    ],
    link: "/products/spices"
  },
  {
    title: "Makhana",
    sub: "Fox nuts from Bihar",
    icon: "🌰",
    desc: "India produces 90%+ of the world's makhana from the wetlands of Bihar. We supply five hand-picked grades sortexed and graded by size.",
    points: [
      "6 Sutta HP: Premium jumbo grade (25-28 mm+)",
      "5 Sutta HP: Large grade (22-25 mm)",
      "4 Sutta HP: Standard premium (18-22 mm)",
      "3 Sutta HP: Commercial grade (14-18 mm)",
      "Phool Makhana: Mixed-size puffed grade"
    ],
    link: "/products/makhana"
  },
  {
    title: "Dehydrated Vegetables",
    sub: "Onion, garlic, tomato",
    icon: "🧅",
    desc: "For food processors, seasoning manufacturers, instant food brands and bulk industrial buyers requiring stable-shelf vegetable ingredients.",
    points: [
      "Dehydrated Onion: Flakes, granules, powder",
      "Dehydrated Garlic: Flakes, granules, powder",
      "Dehydrated Tomato: Flakes, powder",
      "White and pink onion variants available",
      "Custom mesh sizes from 10 to 100 mesh"
    ],
    link: "/products/dehydrated-veg"
  },
  {
    title: "Herbal Powders",
    sub: "Moringa, multani mitti, botanicals",
    icon: "🌿",
    desc: "India is a global source for natural plant-based ingredients used in nutraceutical, cosmetic, Ayurvedic and wellness applications.",
    points: [
      "Moringa Powder: Leaf, seed, food and supplement grade",
      "Multani Mitti: Cosmetic grade Fuller's Earth",
      "Custom Indian botanicals available on request",
      "Powder, capsule-fill grade, extract"
    ],
    link: "/products/herbal-powders"
  }
];

export default function WhatWeExport() {
  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            What We Export
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Five product categories, <br /> 30+ varieties and grades
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We are a multi-category Indian agro exporter, not a single-product trader. Our range is built 
            around the categories where India holds a global supply advantage and where we have direct 
            sourcing relationships at origin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {exportCategories.map((cat) => (
            <div 
              key={cat.title} 
              className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-8 flex flex-col group hover:bg-[#012F6A] hover:border-[#012F6A] transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full mb-6 text-xl group-hover:bg-white/10">
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#012F6A] group-hover:text-white mb-1 transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm font-semibold text-[#BC8521] mb-6">
                {cat.sub}
              </p>
              <p className="text-sm font-medium text-slate-600 group-hover:text-slate-300 leading-relaxed mb-8 transition-colors">
                {cat.desc}
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {cat.points.map((point, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 group-hover:text-slate-300 flex items-start gap-2 transition-colors">
                    <span className="text-[#BC8521] mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={cat.link}
                className="inline-flex items-center text-sm font-semibold text-[#012F6A] group-hover:text-white transition-colors mt-auto"
              >
                Browse range <span aria-hidden="true" className="ml-1 text-[#BC8521]">→</span>
              </Link>
            </div>
          ))}

          {/* Dark 'More Categories' Card */}
          <div className="bg-[#012F6A] border-[0.5px] border-[#012F6A] rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              More Categories Coming
            </h3>
            <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8">
              We expand our product portfolio based on buyer demand. If you need a specific Indian 
              agro product not listed here, get in touch and we will tell you whether we can source it 
              through our network.
            </p>
            <Link 
              href="/contact"
              className="text-sm font-semibold text-[#BC8521] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Request a Custom Quote <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}