import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-[#012F6A] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Optional subtle background pattern/gradient can go here */}
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BC8521]"></span>
              Headquartered in India
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
              A new generation of <br />
              <span className="text-[#BC8521]">Indian agro exporters</span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
              Shri Ram Exim is an agro products exporter supplying rice, spices, makhana, 
              dehydrated vegetables and herbal powders to importers, distributors and food 
              businesses worldwide. We were built around a simple idea: that global buyers deserve 
              an Indian export partner who tests every consignment honestly, communicates clearly, 
              and treats every order as the start of a long relationship.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#BC8521] hover:bg-[#a6751c] text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                href="/products" 
                className="bg-transparent hover:bg-white/5 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
              >
                View Our Products <span>→</span>
              </Link>
            </div>
          </div>
          
          {/* Right Stats Box */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
              Shri Ram At A Glance
            </h3>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="text-4xl font-semibold text-[#BC8521] mb-2">05</p>
                <p className="text-sm text-slate-300 font-medium">Product Categories</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#BC8521] mb-2">30<span className="text-2xl">+</span></p>
                <p className="text-sm text-slate-300 font-medium">Varieties & Grades</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#BC8521] mb-2">08<span className="text-2xl">+</span></p>
                <p className="text-sm text-slate-300 font-medium">Sourcing States</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#BC8521] mb-2">24h</p>
                <p className="text-sm text-slate-300 font-medium">Quote Turnaround</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Trust Bar */}
      <div className="mt-20 border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Replace these placeholder divs with actual small logo SVGs or images if you have them */}
             <div className="flex items-center gap-3"><span className="text-xl">🏛️</span> <span className="text-xs font-semibold tracking-wider">APEDA REGISTERED</span></div>
             <div className="flex items-center gap-3"><span className="text-xl">🌿</span> <span className="text-xs font-semibold tracking-wider">SPICES BOARD</span></div>
             <div className="flex items-center gap-3"><span className="text-xl">✅</span> <span className="text-xs font-semibold tracking-wider">FSSAI CERTIFIED</span></div>
             <div className="flex items-center gap-3"><span className="text-xl">📜</span> <span className="text-xs font-semibold tracking-wider">IEC HOLDER</span></div>
             <div className="flex items-center gap-3"><span className="text-xl">🔬</span> <span className="text-xs font-semibold tracking-wider">LAB TESTED</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}