import Image from "next/image";
import Link from "next/link";

export default function FounderNote() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-12 lg:mb-16">
          A Note From The Founder
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Founder Card */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 mb-6 border-[0.5px] border-slate-200 shadow-sm">
              {/* Apni/Founder ki image yahan daalna */}
              <Image 
                src="/founder-image.jpg" 
                alt="Founder & Director" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#012F6A] mb-1">Vinay Gupta</h3>
              <p className="text-sm font-semibold text-[#BC8521] mb-6">Founder & Director</p>
              <div className="flex gap-3">
                <Link href="#" className="bg-[#EEF2F8] text-[#012F6A] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#012F6A] hover:text-white transition-colors">LinkedIn</Link>
                <Link href="mailto:contact@shriramexim.in" className="bg-[#EEF2F8] text-[#012F6A] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#012F6A] hover:text-white transition-colors">Email</Link>
                <Link href="#" className="bg-[#EEF2F8] text-[#012F6A] px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#012F6A] hover:text-white transition-colors">WhatsApp</Link>
              </div>
            </div>
          </div>

          {/* Right Side: Letter Text */}
          <div className="text-slate-600 font-medium leading-relaxed space-y-6">
            <blockquote className="text-xl sm:text-2xl font-semibold text-[#012F6A] leading-snug italic mb-8">
              "When I started Shri Ram Exim, my goal was simple: to build the kind of Indian agro export partner I would want to work with as a buyer."
            </blockquote>
            
            <p>
              Too many Indian export companies treat buyers as transactions. They make claims that do not hold up at the lab. 
              They quote one price and ship at another. They are slow on documentation and slower on communication. The result 
              is a global perception of Indian exports as cheap but unreliable, when the reality is that India produces some of 
              the finest agro products in the world.
            </p>
            
            <p>
              I wanted to build something different. A <strong className="text-[#012F6A]">new generation Indian agro exporter</strong> that takes specifications 
              seriously, tests every consignment honestly, responds within hours instead of days, and treats every buyer 
              relationship as a long-term partnership rather than a single trade.
            </p>
            
            <p>
              We are early in this journey. We do not claim decades of legacy or thousands of shipments. What we do claim is 
              rigour, transparency and accountability. Every quote we give, every COA we issue and every commitment we make is 
              something we can stand behind in writing.
            </p>
            
            <p className="pb-8 border-b-[0.5px] border-slate-200">
              If you are an importer or distributor evaluating Indian suppliers, I would welcome the conversation. We can discuss 
              your requirement in detail and you can decide for yourself whether we are the right fit. I respond to all serious 
              inquiries personally within 24 hours.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-[#012F6A]">Vinay Gupta</h4>
              <p className="text-sm text-slate-500">Founder & Director, Shri Ram Exim LLP</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}