export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#012F6A] leading-[1.2]">
            Building an Indian export partner the world can trust
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
            Most Indian agro exporters are decades old, transaction-driven and unwilling to change. 
            We started Shri Ram Exim to build the opposite kind of company: one that takes specifications 
            seriously, tests honestly, and treats every buyer relationship as a partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 items-start">
          
          {/* Left Text Content */}
          <div className="text-slate-600 font-medium leading-relaxed space-y-6">
            <p>
              <strong className="text-[#012F6A]">Shri Ram Exim is a B2B agro products exporter</strong> focused on rice, 
              spices, makhana, dehydrated vegetables and herbal powders. We work with farmers and processors 
              across eight Indian producing states and supply importers, distributors, food processors, 
              retail brands and private label buyers in target markets across the Middle East, Africa, Europe, 
              North America and Southeast Asia.
            </p>
            <p>
              India is the world's largest exporter of many of the products we deal in. The country produces 
              about 75% of global turmeric, ships 36% of the world's red chilli, accounts for 90%+ of global 
              makhana (fox nut) supply and is the largest Basmati rice exporter on earth. <strong className="text-[#012F6A]">The opportunity 
              is enormous; the average buyer experience is not.</strong> Inflated curcumin claims, surprise quality 
              variance between sample and shipment, late documentation, vague communication and unreliable lead times 
              are common complaints among importers who have worked with Indian suppliers.
            </p>
            <p>
              We believe a new-generation Indian exporter can do better. <strong className="text-[#012F6A]">Our approach is built around three commitments.</strong> First, 
              every consignment is tested at NABL-accredited laboratories with the actual results recorded on the Certificate of 
              Analysis, not estimates. Second, we work directly with origin: with sourcing relationships in the producing belts of 
              Andhra Pradesh, Telangana, Karnataka, Maharashtra, Tamil Nadu, Kerala, Bihar and Meghalaya, we can verify quality 
              at the source rather than at the port. Third, we are transparent about pricing, timelines and any constraints that 
              affect your shipment.
            </p>
            <p>
              We are <strong className="text-[#012F6A]">fully certified for international trade</strong> with registrations from APEDA (Agricultural and Processed Food 
              Products Export Development Authority), FSSAI (Food Safety and Standards Authority of India), the Spices Board of India 
              and an active IEC (Import Export Code) issued by the Government of India.
            </p>
            <p>
              We are early in our journey and we are honest about that. What we offer is not decades of legacy claims. What we offer 
              is rigorous quality control, complete documentation, hands-on attention to every order, and the kind of long-term 
              partnership mindset that grows businesses on both sides.
            </p>
          </div>

          {/* Right Snapshot Card */}
          <div className="bg-slate-50 border-[0.5px] border-slate-200 rounded-2xl p-8 sticky top-32">
            <h3 className="text-2xl font-semibold text-[#012F6A] mb-8">Company Snapshot</h3>
            
            <dl className="space-y-6">
              <div className="border-b-[0.5px] border-slate-200 pb-6">
                <dt className="text-sm text-slate-500 mb-1">Headquarters</dt>
                <dd className="text-base font-semibold text-[#012F6A]">Kolkata, India</dd>
              </div>
              <div className="border-b-[0.5px] border-slate-200 pb-6">
                <dt className="text-sm text-slate-500 mb-1">Business Model</dt>
                <dd className="text-base font-semibold text-[#012F6A]">B2B Agro Exports</dd>
              </div>
              <div className="border-b-[0.5px] border-slate-200 pb-6">
                <dt className="text-sm text-slate-500 mb-1">Target Markets</dt>
                <dd className="text-base font-semibold text-[#012F6A]">GCC, Africa, EU, US, SEA</dd>
              </div>
              <div className="border-b-[0.5px] border-slate-200 pb-6">
                <dt className="text-sm text-slate-500 mb-1">Sourcing Reach</dt>
                <dd className="text-base font-semibold text-[#012F6A]">8+ producing states</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500 mb-1">Primary Ports</dt>
                <dd className="text-base font-semibold text-[#012F6A]">JNPT, Mundra, Chennai, Cochin</dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}