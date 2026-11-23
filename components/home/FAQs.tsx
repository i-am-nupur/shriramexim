const faqs = [
  {
    question: "Is Shri Ram Exim LLP a spice exporter from India?",
    answer:
      "Yes. Shri Ram Exim LLP exports Guntur red chillies, Byadgi chillies and Indore jeera in bulk to importers, processors and distributors worldwide.",
  },
  {
    question: "Which spices do you export?",
    answer:
      "Our core lines are Guntur red chillies (Teja S17, Sannam S4), Byadgi chillies and Indore cumin (jeera). Other Indian spices can be sourced on buyer request.",
  },
  {
    question: "What grades of red chilli do you supply?",
    answer:
      "We supply Teja S17, Sannam S4, Byadgi and related varieties, with or without stem, in whole, crushed and powder forms. ASTA colour and SHU pungency are confirmed per lot.",
  },
  {
    question: "What are the specifications of your Indore jeera?",
    answer:
      "Indore jeera is machine and sortex cleaned in Europe and Singapore quality, with purity, moisture and volatile oil levels shared in the lab report before you order.",
  },
  {
    question: "Do you support bulk orders and container shipments?",
    answer:
      "Yes. We ship 20 ft and 40 ft full container loads in 25 kg or 50 kg PP or jute bags, and can arrange custom packing on request.",
  },
  {
    question: "Can buyers request CIF and FOB quotations?",
    answer:
      "Yes. Tell us your destination port and preferred Incoterm and we will quote FOB or CIF accordingly.",
  },
  {
    question: "Can you provide private label packaging?",
    answer:
      "Yes. We can pack under your brand with custom or bilingual labelling for your destination market. Share your artwork and requirements and we will confirm what is possible.",
  },
  {
    question: "Can I get samples before placing an order?",
    answer:
      "Yes. We send samples for approval before order confirmation, and lab reports are available for quality assurance.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQs() {
  return (
    <section aria-labelledby="faq-heading" className="bg-[#F6F7F9]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#B5432A]">
            Frequently asked
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#002147] sm:text-4xl lg:text-[44px]"
          >
            Common questions from global buyers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Answers to what importers and distributors ask most often before
            placing a first order. For anything not covered here, get in
            touch and we will reply within 24 hours.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-shadow duration-300 hover:shadow-md open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-6 py-5 text-base font-bold text-[#002147] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5432A] sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FBEDE8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B5432A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path d="M12 4v16M4 12h16" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 pr-16 leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}