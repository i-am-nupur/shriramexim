export default function HonestCommitments() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            What We Are & What We Are Not
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Honest commitments, <br /> upfront
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Most exporter websites overpromise. We would rather be honest about what we offer and 
            what we do not. Here is the unvarnished version.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* What We Are Card */}
          <div className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#012F6A]"></div>
            
            <div className="inline-block bg-[#EEF2F8] text-[#012F6A] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              What We Are
            </div>
            
            <h3 className="text-2xl font-semibold text-[#012F6A] mb-4">
              A serious, transparent Indian agro export partner
            </h3>
            
            <p className="text-slate-600 font-medium mb-8">
              We have built our operation around the things that actually matter to global buyers: quality 
              control, documentation, communication and accountability. Specifically, we offer:
            </p>
            
            <ul className="space-y-4">
              {[
                "Direct sourcing relationships in 8+ Indian producing states",
                "Full certifications from APEDA, FSSAI, Spices Board and DGFT (IEC)",
                "NABL-accredited lab testing on every consignment, with HPLC for curcumin and ASTA for chilli colour",
                "Lead, aflatoxin, MRL and Sudan dye testing per EU and FDA standards"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#012F6A] text-white text-xs mt-0.5">✓</span>
                  <span className="text-sm font-medium text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Are Not Card */}
          <div className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#BC8521]"></div>
            
            <div className="inline-block bg-[#FFF9F0] text-[#BC8521] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border-[0.5px] border-[#BC8521]/20">
              What We Are Not
            </div>
            
            <h3 className="text-2xl font-semibold text-[#012F6A] mb-4">
              We will not pretend to be something we are not
            </h3>
            
            <p className="text-slate-600 font-medium mb-8">
              You will not find inflated claims on this page. We believe transparency builds more durable trust 
              than legacy claims. Specifically, we do not claim:
            </p>
            
            <ul className="space-y-4">
              {[
                "Decades of export experience (we are early in our journey, and we are honest about that)",
                "Thousands of completed shipments (we are building this number with care, not inflating it)",
                "Testimonials from buyers we have not yet served",
                "Volume statistics we cannot verify with shipping documents",
                "Country counts we have not yet exported to (we list target markets clearly)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#BC8521] text-white text-xs mt-0.5">×</span>
                  <span className="text-sm font-medium text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}