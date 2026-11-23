import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#012F6A] py-24 relative overflow-hidden">
      {/* Optional subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Let's start the conversation
        </h2>
        
        <p className="text-lg text-slate-300 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
          Whether you are placing your first order or looking for a more reliable long-term sourcing 
          partner for India, we would like to hear from you. Share your requirement and we will 
          respond within 24 hours with detailed specs, a sample plan and a transparent quotation.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link 
            href="/contact" 
            className="bg-[#BC8521] hover:bg-[#a6751c] text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <a 
            href="https://wa.me/910000000000" // Replace with actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            <span className="text-xl">💬</span> WhatsApp Us
          </a>
        </div>
        
        {/* Contact Links Footer inside CTA */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a href="mailto:contact@shriramexim.in" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold tracking-wide">
            contact@shriramexim.in
          </a>
          <a href="mailto:export@shriramexim.in" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold tracking-wide">
            export@shriramexim.in
          </a>
          <a href="tel:+910000000000" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold tracking-wide">
            +91 00000 00000
          </a>
          <a href="#" className="text-[#BC8521] hover:text-white transition-colors text-sm font-semibold tracking-wide">
            @shriramexim
          </a>
        </div>

      </div>
    </section>
  );
}