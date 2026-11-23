import Image from "next/image";
import Link from "next/link";
import { SectionHeader, cardBase, sectionPad, btnSolid } from "../UI";

const rangeProducts = [
  {
    slug: "indian-red-chillies",
    name: "Guntur Red Chillies",
    image: "/teja.png",
    imageAlt: "Guntur Teja S17 and Sannam dried red chillies",
    description:
      "Teja S17 and Sannam S4 chillies from the Guntur belt of Andhra Pradesh. Whole, stemless, crushed and powder grades for global spice buyers.",
    groups: [
      { label: "Varieties", text: "Teja S17, Sannam S4, 334, 273" },
      {
        label: "Key specifications",
        text: "ASTA colour 30 to 60, SHU 25,000 to 100,000, moisture below 12%",
      },
    ],
    tags: [
      { label: "Whole & Powdered" },
      { label: "ASTA Tested" },
      { label: "Spices Board", warm: true },
    ],
    cta: "View Guntur Chilli Range",
  },
  {
    slug: "indore-cumin",
    name: "Indore Cumin",
    image: "/jeera.png",
    imageAlt: "Indore cumin seeds",
    description:
      "Machine-cleaned and sortex-cleaned cumin seed from Madhya Pradesh in Europe and Singapore quality. Whole seed, ground on request.",
    groups: [
      { label: "Grades", text: "Europe quality, Singapore quality" },
      {
        label: "Key specifications",
        text: "Purity 99% min, moisture 10% max, volatile oil 2.5% min",
      },
    ],
    tags: [
      { label: "Whole & Ground" },
      { label: "Sortex Cleaned" },
      { label: "FOB / CIF", warm: true },
    ],
    cta: "View Cumin Range",
  },
  
  {
    slug: "sona-masoori-rice",
    name: "Sona Masoori Rice",
    image: "/sona-masoori-rice.png",
    imageAlt: "Sona Masoori Rice",
    description:
      "Lightweight, aromatic medium-grain rice sourced from Andhra Pradesh and Telangana. Silky sortex-cleaned for uniform grain length and non-sticky cooking.",
    groups: [
      { label: "Varieties", text: "Raw, Steam, Parboiled (Silky Sortex)" },
      {
        label: "Key specifications",
        text: "Grain length 5.0–5.2 mm, moisture 13% max, broken 2% max",
      },
    ],
    tags: [
      { label: "Raw & Steam" },
      { label: "100% Sortex" },
      { label: "FOB / CIF", warm: true },
    ],
    cta: "View Rice Range",
  },
  {
    slug: "coconut-shell-charcoal",
    name: "Coconut Shell & Charcoal",
    image: "/coconut-shell-charcoal.png",
    imageAlt: "Coconut Shell & Charcoal",
    description:
      "Matured, high-density coconut shells and kiln-burned charcoal from South India’s coastal belts. Ideal for activated carbon, shisha, and industrial fuel.",
    groups: [
      { label: "Varieties", text: "Raw Dried Shells, Lump Charcoal, Granular" },
      {
        label: "Key specifications",
        text: "Fixed carbon 75% min, ash 3% max, moisture 8% max",
      },
      
    ],
    tags: [
      { label: "Raw & Charcoal" },
      { label: "Low Ash" },
      { label: "FOB / CIF", warm: true },
    ],
    cta: "View Coconut Range",
  },
  {
    slug: "byadgi-chilli",
    name: "Byadgi Chilli",
    image: "/byadgi.png",
    imageAlt: "Byadgi dried red chillies",
    description:
      "Wrinkled, long-podded chillies from Karnataka with deep natural colour and mild heat. Whole, stemless and powder forms.",
    groups: [
      { label: "Varieties", text: "Byadgi Kaddi, Byadgi Dabbi" },
      {
        label: "Key specifications",
        text: "ASTA colour 120 to 200, SHU 8,000 to 15,000, moisture below 12%",
      },
    ],
    tags: [
      { label: "Rich Colour" },
      { label: "Mild Heat" },
      { label: "Oleoresin Grade", warm: true },
    ],
    cta: "View Byadgi Range",
  },
];

export default function ExportRange() {
  return (
    <section id="products" aria-labelledby="range-heading" className="bg-[#F6F7F9]">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Export range"
          id="range-heading"
          title="Indian spices for export"
          text="Three active product lines supplied across global food import markets, with sourcing flexibility for other Indian spices on buyer request."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rangeProducts.map((product) => (
            <article
              key={product.slug}
              className={`${cardBase} group flex h-full flex-col overflow-hidden`}
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#002147]">
                  {product.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 space-y-4 rounded-xl bg-[#F6F7F9] p-5">
                  {product.groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#002147]">
                        {group.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {group.text}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <li
                      key={tag.label}
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        tag.warm
                          ? "bg-[#FBEDE8] text-[#9C3622]"
                          : "bg-[#EAF0F7] text-[#002147]"
                      }`}
                    >
                      {tag.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-[#002147] transition-colors duration-200 hover:text-[#B5432A]"
                  >
                    {product.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link 
            href="/products" 
            className={`${btnSolid} !bg-[#012f6a] hover:!bg-[#bc8521] text-white transition-colors duration-300`}
          >
            View Complete Catalogue
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}