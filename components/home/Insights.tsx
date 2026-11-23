import Image from "next/image";
import Link from "next/link";
import { SectionHeader, Icon, cardBase, sectionPad, btnSolid } from "../UI";

const articles: {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateTime: string;
  readTime: number;
  image?: string;
}[] = [
  {
    slug: "grading-guntur-teja-chillies-for-export",
    title: "How Guntur Teja Chillies Are Graded for Export",
    category: "Buyer’s guide",
    date: "October 2026",
    dateTime: "2026-10",
    readTime: 8,
  },
  {
    slug: "indore-jeera-europe-and-singapore-quality",
    title: "Indore Jeera: Europe and Singapore Quality Explained",
    category: "Product spec",
    date: "October 2026",
    dateTime: "2026-10",
    readTime: 7,
  },
  {
    slug: "packing-and-shipping-spices-for-importers",
    title: "Packing and Shipping Spices: A Guide for Importers",
    category: "Logistics",
    date: "September 2026",
    dateTime: "2026-09",
    readTime: 6,
  },
];

export default function Insights() {
  return (
    <section aria-labelledby="resources-heading" className="bg-white">
      <div className={sectionPad}>
        <SectionHeader
          eyebrow="Export insights"
          id="resources-heading"
          title="Resources for importers"
          text="Buyer guides, product specifications, market updates and export insights from our team, helping international importers source smarter from India."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className={`${cardBase} flex h-full flex-col overflow-hidden`}
            >
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-[#FBEDE8] to-[#EAF0F7]">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <Icon
                    paths={[
                      "M5 20C5 11 11 5 19 5c0 8-6 15-14 15z",
                      "M19 5l2-2",
                    ]}
                    size={44}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B5432A]">
                  {article.category}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-[#002147]">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="transition-colors duration-200 hover:text-[#B5432A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5432A]"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-auto pt-5 text-sm text-slate-500">
                  <time dateTime={article.dateTime}>{article.date}</time>,{" "}
                  {article.readTime} min read
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/blog" className={`${btnSolid} hover:bg-[#bc8521] transition-colors`}>
            View All Articles
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}