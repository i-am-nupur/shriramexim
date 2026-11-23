export default function ContactHero() {
  return (
    <section className="bg-white pt-5">
      {/* Top Dark Background Section - Padding reduced here (pt-16 pb-40) */}
      <div className="bg-[#012F6A] text-white pt-16 pb-40 relative overflow-hidden">
        {/* Subtle background pattern to match the dotted look */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-white/10 border-[0.5px] border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-slate-200">
            We respond within 24 hours
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Let's start the <br className="hidden sm:block" />
            <span className="text-[#BC8521]">conversation</span>
          </h1>
          
          <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Whether you are placing your first order or looking for a more reliable long-term 
            sourcing partner in India, we would like to hear from you. Share your requirement by 
            WhatsApp, email or the form below, and our export team responds within 24 hours 
            with detailed specifications, a sample plan and a transparent quotation.
          </p>
        </div>
      </div>

      {/* Overlapping Contact Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative -mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-8 text-left text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[0.5px] border-slate-200 flex flex-col">
            <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center text-2xl mb-6">
              💬
            </div>
            <h3 className="text-xl font-semibold text-[#012F6A] mb-3">WhatsApp</h3>
            <p className="text-sm text-slate-500 font-medium mb-8 flex-1">
              The fastest way to reach us. Message us directly for quick questions, quotes and order updates. Monitored beyond office hours.
            </p>
            <p className="font-semibold text-base mb-6 text-slate-800">+91 00000 00000</p>
            <a 
              href="https://wa.me/910000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 text-left text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[0.5px] border-slate-200 flex flex-col">
            <div className="w-12 h-12 bg-[#EEF2F8] text-[#012F6A] rounded-full flex items-center justify-center text-2xl mb-6">
              ✉️
            </div>
            <h3 className="text-xl font-semibold text-[#012F6A] mb-3">Email</h3>
            <p className="text-sm text-slate-500 font-medium mb-8 flex-1">
              Best for detailed requirements, specifications and document exchange. We reply to all serious inquiries within 24 hours.
            </p>
            <p className="font-semibold text-base mb-6 text-slate-800 truncate">export@shriramexim.in</p>
            <a 
              href="mailto:export@shriramexim.in" 
              className="block text-center w-full bg-[#012F6A] hover:bg-black text-white py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
            >
              Send an Email
            </a>
          </div>

          {/* Call Us Card */}
          <div className="bg-white rounded-2xl p-8 text-left text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[0.5px] border-slate-200 flex flex-col">
            <div className="w-12 h-12 bg-[#FFF9F0] text-[#BC8521] rounded-full flex items-center justify-center text-2xl mb-6">
              📞
            </div>
            <h3 className="text-xl font-semibold text-[#012F6A] mb-3">Call Us</h3>
            <p className="text-sm text-slate-500 font-medium mb-8 flex-1">
              Prefer to talk? Call us during office hours (Monday to Saturday, 9 AM to 7 PM IST). For other time zones, request a scheduled call.
            </p>
            <p className="font-semibold text-base mb-6 text-slate-800">+91 00000 00000</p>
            <a 
              href="tel:+910000000000" 
              className="block text-center w-full bg-[#BC8521] hover:bg-[#966b1a] text-white py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
            >
              Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}