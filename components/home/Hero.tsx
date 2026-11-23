import Image from "next/image";
import Link from "next/link";

const plusSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M28 23v10M23 28h10' stroke='white' stroke-opacity='0.10' stroke-width='1.6' stroke-linecap='round'/></svg>";
const plusPattern = `url("data:image/svg+xml,${encodeURIComponent(plusSvg)}")`;

const heroStats = [
  { value: "03", label: "Core products" },
  { value: "FCL", label: "20 ft and 40 ft loads" },
  { value: "24h", label: "Quote turnaround" },
  { value: "100%", label: "Documented exports" },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#012F6A",
        backgroundImage: `${plusPattern}, linear-gradient(135deg, #00152E 0%, #002147 45%, #0B3A6E 100%)`,
        backgroundSize: "56px 56px, 100% 100%",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-28">
        <div>
          <p className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15">
            GLOBAL B2B EXPORT PARTNER • INDIA
          </p>
          <h1
            id="hero-heading"
            className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[58px]"
          >
            Exporting Premium Quality{" "}
            <span className="text-[#F5b942]">Agro, Botanical & Natural Commodities</span> Worldwide
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            From farm-sourced spices and premium rice varieties to industrial coconut shell products and cosmetic-grade extracted oils-Shri Ram Exim LLP connects global buyers with certified quality, consistent supply, and seamless port-to-port logistics.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#bc8521] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#a3731c] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Request Bulk Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-[#a3731c] hover:bg-[#a3731c] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              View Our Products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-4 ring-1 ring-[#BC8521]/50 shadow-2xl shadow-[#00152E]/80 backdrop-blur-sm sm:p-5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/10">
            <Image
              src="/homebanner.jpeg"
              alt="Sacks of Indian spices packed and ready for export"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-xl bg-white/10 p-4"
              >
                <dt className="mt-1 text-sm text-white/75">{stat.label}</dt>
                <dd className="text-3xl font-extrabold text-[#F0A58F]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}