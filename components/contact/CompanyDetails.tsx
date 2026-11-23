export default function CompanyDetails() {
  const timezones = [
    { region: "UAE / Gulf", time: "7:30 AM to 5:30 PM", flag: "🇦🇪" },
    { region: "Nigeria / West Africa", time: "4:30 AM to 2:30 PM", flag: "🇳🇬" },
    { region: "United Kingdom", time: "3:30 AM to 1:30 PM", flag: "🇬🇧" },
    { region: "Germany / EU", time: "4:30 AM to 2:30 PM", flag: "🇩🇪" },
    { region: "US East Coast", time: "From 10:30 PM (prev day)", flag: "🇺🇸" },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Reach Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Office hours & <br /> company details
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We are based in Kolkata, India, and work with buyers across global time zones. WhatsApp and 
            email are monitored beyond office hours, and we are happy to schedule calls to suit your 
            local time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card: Office Hours */}
          <div className="bg-white border-[0.5px] border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EEF2F8] flex items-center justify-center text-[#012F6A] text-xl">
                🕒
              </div>
              <h3 className="text-2xl font-semibold text-[#012F6A]">Office Hours (IST)</h3>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center pb-4 border-b-[0.5px] border-slate-100">
                <span className="text-sm font-medium text-slate-600">Monday to Friday</span>
                <span className="text-sm font-semibold text-[#012F6A]">9:00 AM to 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b-[0.5px] border-slate-100">
                <span className="text-sm font-medium text-slate-600">Saturday</span>
                <span className="text-sm font-semibold text-[#012F6A]">9:00 AM to 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b-[0.5px] border-slate-100">
                <span className="text-sm font-medium text-slate-600">Sunday</span>
                <span className="text-sm font-semibold text-slate-400">Closed (WhatsApp monitored)</span>
              </div>
            </div>

            <p className="text-xs font-bold tracking-widest text-[#012F6A] uppercase mb-6">
              When we are open, it is
            </p>
            
            <div className="space-y-4 mb-8">
              {timezones.map((tz) => (
                <div key={tz.region} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600 flex items-center gap-2">
                    <span className="text-lg">{tz.flag}</span> {tz.region}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">{tz.time}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FFF9F0] border-[0.5px] border-[#BC8521]/20 rounded-xl p-5">
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                <strong className="text-[#BC8521]">Different time zone?</strong> No problem. WhatsApp and email reach us anytime, 
                and we respond within 24 hours. For buyers in the Americas and East Asia, 
                we are glad to schedule a call at a time that suits you.
              </p>
            </div>
          </div>

          {/* Right Card: Company Details */}
          <div className="bg-white border-[0.5px] border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#EEF2F8] flex items-center justify-center text-[#012F6A] text-xl">
                🏢
              </div>
              <h3 className="text-2xl font-semibold text-[#012F6A]">Company Details</h3>
            </div>

            <dl className="space-y-5 mb-10">
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Company</dt>
                <dd className="text-sm font-semibold text-[#012F6A]">Shri Ram Exim LLP</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Headquarters</dt>
                <dd className="text-sm font-semibold text-[#012F6A]">Kolkata, India</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Founder & Director</dt>
                <dd className="text-sm font-semibold text-[#012F6A]">Vinay Gupta</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Sales Email</dt>
                <dd className="text-sm font-semibold text-[#BC8521] hover:underline cursor-pointer">export@shriramexim.in</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">General Email</dt>
                <dd className="text-sm font-semibold text-[#BC8521] hover:underline cursor-pointer">contact@shriramexim.in</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Phone / WhatsApp</dt>
                <dd className="text-sm font-semibold text-[#BC8521] hover:underline cursor-pointer">+91 00000 00000</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] pb-5 border-b-[0.5px] border-slate-100">
                <dt className="text-sm font-medium text-slate-500">Website</dt>
                <dd className="text-sm font-semibold text-[#BC8521] hover:underline cursor-pointer">shriramexim.in</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-2 mb-8">
              {['APEDA Registered', 'FSSAI Certified', 'Spices Board', 'IEC Holder'].map(tag => (
                <span key={tag} className="bg-[#EEF2F8] text-[#012F6A] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border-[0.5px] border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#012F6A] hover:bg-[#EEF2F8] transition-colors">📷</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border-[0.5px] border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#012F6A] hover:bg-[#EEF2F8] transition-colors">in</a>
              <a href="https://wa.me/910000000000" className="w-10 h-10 rounded-full bg-slate-50 border-[0.5px] border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#012F6A] hover:bg-[#EEF2F8] transition-colors">💬</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}