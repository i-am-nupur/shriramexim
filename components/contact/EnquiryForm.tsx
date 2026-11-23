export default function EnquiryForm() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Text and Benefits */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
              Send Us Your Requirement
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
              Request a quote <br /> or send an enquiry
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Share your product requirement, destination market and approximate volume. Our export team 
              will respond within 24 hours with detailed specifications, sample availability and a 
              transparent quotation valid for an agreed window.
            </p>
            
            <ul className="space-y-5 mb-10">
              {[
                "24-hour response on detailed enquiries",
                "Samples dispatched within 48 to 72 hours of approval",
                "Locked pricing for a defined window (typically 7 to 15 days)",
                "No surprise invoicing between quote and Bill of Lading",
                "Complete documentation including country-specific requirements",
                "Your details are used only to respond, never shared with third parties"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#012F6A] text-white text-xs mt-0.5">✓</span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#EEF2F8] border-[0.5px] border-[#012F6A]/20 rounded-xl p-6">
              <h4 className="font-semibold text-[#012F6A] mb-2 text-sm">Tip: include these for the fastest, most accurate quote</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Product and variety or grade, quantity in MT or containers, destination port, preferred 
                packaging, preferred Incoterm (CIF, FOB, CFR, EXW), and target price if you have one. 
                The more detail you share, the faster we can respond accurately.
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white border-[0.5px] border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">First Name <span className="text-[#BC8521]">*</span></label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Last Name <span className="text-[#BC8521]">*</span></label>
                  <input type="text" placeholder="Smith" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Company Name <span className="text-[#BC8521]">*</span></label>
                  <input type="text" placeholder="Your trading or import company" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Country / Destination Market <span className="text-[#BC8521]">*</span></label>
                  <input type="text" placeholder="United Arab Emirates" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Email <span className="text-[#BC8521]">*</span></label>
                  <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+971 50 123 4567" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm mb-1" />
                  <p className="text-[10px] text-slate-500">Include country code. Used only to follow up on this enquiry.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-3">Products of Interest <span className="text-[#BC8521]">*</span> <span className="text-slate-400 font-normal">(tick all that apply)</span></label>
                <div className="flex flex-wrap gap-3">
                  {['Basmati Rice', 'Non-Basmati Rice', 'Spices', 'Red Chilli', 'Turmeric', 'Coffee', 'Makhana', 'Dehydrated Veg', 'Herbal Powders', 'Other / Custom'].map((prod) => (
                    <label key={prod} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-[0.5px] border-slate-300 cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 text-[#012F6A] border-slate-300 rounded focus:ring-[#012F6A]" />
                      <span className="text-sm font-medium text-slate-700">{prod}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Quantity Required</label>
                  <input type="text" placeholder="e.g. 25 MT / 1 FCL / 500 kg" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Destination Port</label>
                  <input type="text" placeholder="e.g. Jebel Ali, Lagos, Hamburg" className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Preferred Incoterm</label>
                  <select className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm bg-white">
                    <option value="">Select Incoterm</option>
                    <option value="fob">FOB</option>
                    <option value="cif">CIF</option>
                    <option value="cfr">CFR</option>
                    <option value="exw">EXW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Required By</label>
                  <select className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm bg-white">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">1-3 months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Your Message / Specific Requirements</label>
                <textarea 
                  rows={4} 
                  placeholder="Share variety preferences, target specifications (e.g. curcumin %, Suta grade, cup score), packaging requirements, certifications needed (Halal, Organic, Kosher), or any other context that helps us quote accurately."
                  className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm resize-none"
                ></textarea>
              </div>

              <div>
                <button type="button" className="w-full bg-[#012F6A] hover:bg-black text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Submit Enquiry <span>→</span>
                </button>
                <p className="text-[10px] text-slate-500 mt-3 text-center leading-relaxed">
                  By submitting this form you agree that we may contact you regarding your enquiry. We respond within 24 hours during working days (IST). Your data is used only to respond to this enquiry and is never shared with third parties.
                </p>
              </div>

            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}