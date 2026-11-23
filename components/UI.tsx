export const btnSecondary =
  "inline-flex items-center justify-center rounded-full border-2 border-[#002147] bg-white px-7 py-3 text-base font-semibold text-[#002147] transition-colors duration-300 hover:bg-[#002147] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002147]";

export const btnSolid =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#002147] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#B5432A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002147] sm:w-auto";

export const cardBase =
  "rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-shadow duration-300 hover:shadow-lg";

export const sectionPad = "mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28";

export function SectionHeader({
  id,
  title,
  text,
  eyebrow,
}: {
  id: string;
  title: string;
  text: string;
  eyebrow?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#B5432A]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`${
          eyebrow ? "mt-3 " : ""
        }text-3xl font-extrabold leading-tight tracking-tight text-[#002147] sm:text-4xl lg:text-[44px]`}
      >
        {title}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

export function Icon({
  paths,
  size = 24,
  color = "#B5432A",
}: {
  paths: string[];
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}