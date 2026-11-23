import { SectionHeader, sectionPad } from "../UI";

const processSteps = [
  {
    title: "Share Requirement",
    text: "Tell us the product, grade, quantity, destination port and preferred payment terms (LC, TT or CAD).",
  },
  {
    title: "Receive Quotation",
    text: "Get a clear FOB or CIF quote within 24 hours, with grade specifications and packing options.",
  },
  {
    title: "Approve Sample",
    text: "We dispatch a sample before you confirm the order, and lab reports are available for quality assurance.",
  },
  {
    title: "Packing & Documentation",
    text: "We handle packing, APEDA formalities, phytosanitary and fumigation certificates and port loading.",
  },
  {
    title: "Shipment & Updates",
    text: "Cargo ships on time with the bill of lading, COA and full document set, and we stay in touch until customs clearance.",
  },
];

export default function ProcessSteps() {
  return (
    <section aria-labelledby="process-heading" className="bg-[#F6F7F9]">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Our process"
          id="process-heading"
          title="How to source spices from India with Shri Ram Exim"
          text="A simple, transparent five-step export process designed around buyer clarity, with complete documentation at every stage."
        />

        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div
            className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-slate-300 lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <span
                className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold text-white ring-8 ring-[#F6F7F9] ${
                  index === processSteps.length - 1
                    ? "bg-[#bc8521]"
                    : "bg-[#012f6a]"
                }`}
              >
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold text-[#002147]">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}