import Link from "next/link";

export default function ExploreRange() {
  const categories = [
    { title: "Rice", sub: "Basmati & Non-Basmati", icon: "🌾", link: "/products/rice" },
    { title: "Spices", sub: "10 categories", icon: "🌶️", link: "/products/spices" },
    { title: "Coffee", sub: "Arabica & Robusta", icon: "☕", link: "/products/coffee" },
    { title: "Makhana", sub: "All Suta grades", icon: "🌰", link: "/products/makhana" },
    { title: "Dehydrated Veg", sub: "Onion, garlic, tomato", icon: "🧅", link: "/products/dehydrated-veg" },
    { title: "Herbal Powders", sub: "Moringa & more", icon: "🌿", link: "/products/herbal-powders" },
    { title: "All Products", sub: "Full catalogue", icon: "📦", link: "/products" },
    { title: "By Country", sub: "Destination guides", icon: "🌍", link: "/markets" },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Explore Our Range
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Browse products <br /> while you are here
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Not sure exactly what you need yet? Explore our product categories to see varieties, grades, 
            specifications and applications before you send your enquiry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.title}
              href={cat.link}
              className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-6 text-center hover:border-[#012F6A] hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-base font-semibold text-[#012F6A] mb-1">{cat.title}</h3>
              <p className="text-xs font-medium text-[#BC8521] group-hover:text-[#012F6A] transition-colors flex items-center justify-center gap-1">
                {cat.sub} <span>→</span>
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}