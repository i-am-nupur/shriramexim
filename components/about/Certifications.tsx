const certs = [
  {
    icon: "🏛️",
    title: "APEDA",
    sub: "Agricultural & Processed Food Products Export Development Authority",
    desc: "Statutory body under the Ministry of Commerce regulating Indian agro export. Required for export of basmati rice, fruits, vegetables and most processed agro products."
  },
  {
    icon: "🌿",
    title: "Spices Board",
    sub: "Spices Board of India",
    desc: "Statutory body regulating Indian spice export. Required for the export of red chilli, turmeric, cumin, coriander, black pepper, cardamom and all major spice categories."
  },
  {
    icon: "✅",
    title: "FSSAI",
    sub: "Food Safety & Standards Authority of India",
    desc: "Food safety regulator under the Ministry of Health and Family Welfare. Required for all food product handling, processing and export across categories."
  },
  {
    icon: "📜",
    title: "IEC",
    sub: "Import Export Code, Government of India",
    desc: "Issued by the Directorate General of Foreign Trade (DGFT). Mandatory unique identifier for any business engaged in cross-border trade from India."
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            Certifications & Compliance
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            Fully certified for <br /> international agro export
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Shri Ram Exim holds all four core registrations required to operate as a serious agro 
            exporter from India. Copies of certificates are available on request as part of our buyer 
            onboarding pack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.title}
              className="bg-white border-[0.5px] border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#012F6A] transition-colors duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-slate-50 border-[0.5px] border-[#BC8521]/30 rounded-full mb-6 text-2xl">
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#012F6A] mb-2">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-[#BC8521] mb-6 min-h-[32px]">
                {cert.sub}
              </p>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}