import { SectionHeader, Icon, cardBase, sectionPad } from "../UI";

const promises = [
  {
    text: "Specifications, grades and lab reports are shared before you commit, so the quote you approve is the lot you receive. If a grade is not available, we tell you straight away.",
    title: "Specifications, transparent",
    sub: "Our quality commitment",
    icon: [
      "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
      "M14 2v6h6",
      "M8 13h8M8 17h6",
    ],
  },
  {
    text: "Export documents are prepared alongside the cargo, not after it. Your complete set arrives accurate and on time for every shipment and every destination.",
    title: "Documentation, handled",
    sub: "Our execution commitment",
    icon: ["M3 15l2 5h14l2-5z", "M7 15V9h10v6", "M12 9V4"],
  },
  {
    text: "You deal with one person from first enquiry to customs clearance. We commit only to what we can ship, and we would rather decline an order than miss a promise.",
    title: "Communication, honest",
    sub: "Our relationship commitment",
    icon: ["M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"],
  },
];

export default function WorkingPromise() {
  return (
    <section aria-labelledby="promise-heading" className="bg-[#F6F7F9]">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Our working promise"
          id="promise-heading"
          title="How we work with buyers"
          text="We work with importers the way we would want to be worked with: clear specifications, realistic commitments, dependable execution and honest communication."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {promises.map((item) => (
            <article
              key={item.title}
              className={`${cardBase} flex h-full flex-col p-8`}
            >
              <span
                className="text-5xl font-extrabold leading-none text-[#B5432A]"
                aria-hidden="true"
              >
                “
              </span>
              <p className="mt-2 flex-1 text-lg leading-relaxed text-[#002147]">
                {item.text}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FBEDE8]">
                  <Icon paths={item.icon} size={22} />
                </span>
                <div>
                  <p className="font-bold text-[#002147]">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.sub}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}