import Link from "next/link";

export default function ProductsHero() {
  return (
    
    <section className="relative bg-[#fdfbd4] py-20 sm:py-28 overflow-hidden text-slate-800 z-0">
      {/* Light blurry background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#001f6a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#bc8521]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div>
            <p className="text-sm font-bold tracking-widest text-[#bc8521] uppercase mb-4">
              Complete Product Catalogue - Six Categories
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#001f6a] mb-6 leading-tight">
              All Products from India, in one place
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Browse the complete Shri Ram Exim catalogue. Six product categories
              with over fifty varieties, sourced directly from eight Indian producing states.
              From premium Basmati rice and Indian Coffee Board graded coffees to
              Spices Board certified turmeric and chilli, all lab-tested, fully documented
              and ready for global shipment. If you need something not listed, we source it
              on your behalf.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#bc8521] text-white px-6 py-3 rounded-md font-semibold shadow-md shadow-[#bc8521]/20 hover:bg-[#a1711c] transition-all"
              >
                Send Enquiry
              </Link>
              <Link
                href="#catalogue"
                className="bg-white/60 backdrop-blur-sm border border-slate-200 text-[#001f6a] px-6 py-3 rounded-md font-semibold hover:bg-[#001f6a] hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                Browse Catalogue ↓
              </Link>
            </div>
          </div>

          {/* Right Stats Box (Glassmorphism) */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white shadow-2xl shadow-slate-200/50">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">
              Catalogue at a glance
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-extrabold text-[#bc8521] mb-2">06</p>
                <p className="text-sm font-medium text-slate-600">Product Categories</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#bc8521] mb-2">50+</p>
                <p className="text-sm font-medium text-slate-600">Varieties & Grades</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#bc8521] mb-2">08+</p>
                <p className="text-sm font-medium text-slate-600">Sourcing States</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#bc8521] mb-2">24h</p>
                <p className="text-sm font-medium text-slate-600">Quote Turnaround</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}