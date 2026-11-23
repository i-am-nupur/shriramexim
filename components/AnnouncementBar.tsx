
// Placeholder messages: edit these to match what you can actually promise.
const messages = [
  "Free sample and lab report on request",
  "Quote within 24 hours",
  "FOB and CIF shipping from Chennai, Krishnapatnam and Nhava Sheva",
  "Phytosanitary and fumigation certificates on every shipment",
  "Guntur red chillies, Byadgi chillies and Indore jeera",
  "Registered with APEDA, FSSAI, MSME and Spices Board India",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {messages.map((message) => (
        <li key={message} className="flex items-center gap-10">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-white/90">
            {message}
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F0A58F]"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export default function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Announcements"
      className="announce-bar overflow-hidden bg-[#00152E] py-2.5"
    >
      <style>{`
        @keyframes announce-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .announce-track { animation: announce-scroll 50s linear infinite; }
        .announce-bar:hover .announce-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .announce-track { animation: none; }
        }
      `}</style>
      <div className="announce-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}