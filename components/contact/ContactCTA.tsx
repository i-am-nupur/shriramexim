"use client";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#012f6a] py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl font-semibold text-white mb-6">
          Prefer to talk right now?
        </h2>
        
        <p className="text-base text-slate-300 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
          Send us a WhatsApp message and get a fast response. Or call us during office hours. We are 
          a founder-led team, so when you reach out, you reach someone who can actually help.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="https://wa.me/910000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BC8521] hover:bg-[#a6751c] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 text-sm"
          >
            <span className="text-lg">💬</span> WhatsApp Us
          </a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 text-sm"
          >
            Fill the Enquiry Form ↑
          </button>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href="mailto:export@shriramexim.in" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold">
            export@shriramexim.in
          </a>
          <a href="tel:+910000000000" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold">
            +91 00000 00000
          </a>
          <a href="#" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold">
            @shriramexim
          </a>
        </div>

      </div>
    </section>
  );
}