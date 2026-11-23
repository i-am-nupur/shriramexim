export default function NextSteps() {
  const steps = [
    {
      id: "1",
      title: "We Acknowledge",
      desc: "You receive a confirmation that your enquiry has reached our export team, usually within a few working hours."
    },
    {
      id: "2",
      title: "We Quote",
      desc: "Within 24 hours we send a detailed quotation with specifications, grade options, lead time and pricing valid for a defined window."
    },
    {
      id: "3",
      title: "We Sample",
      desc: "On request, a product sample is dispatched by courier with the lab report so you can verify quality before committing."
    },
    {
      id: "4",
      title: "We Execute",
      desc: "Once approved, we handle production, lab testing, documentation, packaging and shipment, with updates at every milestone."
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
            What Happens Next
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
            After you reach out
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            A clear, predictable process from your first message to a confirmed quotation. No chasing, 
            no silence, no surprises.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-[0.5px] bg-[#012F6A]/20 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg mb-6 shadow-sm ${index === steps.length - 1 ? 'bg-[#BC8521]' : 'bg-[#012F6A]'}`}>
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-[#012F6A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}