import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Makhana (Fox Nuts) Grades Explained | Shri Ram Exim",
  description: "Learn how makhana is graded by size, what quality checks matter, and how to choose the right grade for retail, snacking or food manufacturing.",
};

export default function MakhanaBlog() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fdfbd4] min-h-screen pb-20">
        
        {/* Overlapping Hero Section */}
        <section className="relative pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Hero Image Container */}
          <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/makhana-blog.jpg" // Make sure this image is in your public folder
              alt="Cargo ship and export logistics"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping White Text Card */}
          <div className="relative z-10 bg-white mx-auto max-w-4xl p-8 md:p-12 -mt-20 md:-mt-32 shadow-xl rounded-t-lg md:rounded-lg border-[0.5px] border-slate-100">
            <p className="text-xs font-bold tracking-widest text-[#012F6A] uppercase mb-4">
              Export Guide
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Makhana (Fox Nuts) Grades Explained: How Importers Should Choose the Right Size and Quality
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              By Team Shri Ram &bull; November 5, 2026
            </p>
          </div>
          
        </section>

        {/* Blog Content */}
        <section className="mt-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-lg border-[0.5px] border-slate-100 prose prose-lg prose-slate">
            
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Makhana, also called fox nut or lotus seed, has moved from a traditional Indian fasting food to a global health-snack ingredient. If you are importing or private-labelling makhana, the first decision you face is which grade to buy.
            </p>

            <h2 className="text-2xl font-semibold text-[#012F6A] mt-10 mb-4">Where Makhana Comes From</h2>
            <p className="text-slate-700 mb-8">
              Makhana is the popped seed of the <em>Euryale ferox</em> water lily, grown in ponds and wetlands. Bihar's Mithila region is India's main production hub. The seeds are harvested from the pond bed, sun-dried, roasted and popped by hand, which is why quality varies so much between suppliers.
            </p>

            <h2 className="text-2xl font-semibold text-[#012F6A] mt-10 mb-4">How Makhana is Graded</h2>
            <p className="text-slate-700 mb-6">
              Makhana is sorted mainly by size, using sieves. Indian suppliers usually describe grades in "suta" (for example 3 suta, 4 suta, 5 suta, 6 suta and above). Larger grades are generally pricier because fewer popped seeds reach that size.
            </p>

            {/* Custom Tailwind Table */}
            <div className="overflow-x-auto mb-8 not-prose">
              <table className="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-[#012F6A] text-white">
                    <th className="p-4 border border-slate-200 font-semibold">Grade (approx.)</th>
                    <th className="p-4 border border-slate-200 font-semibold">Typical Use</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="p-4 border border-slate-200 font-medium">Larger (5-6 suta and above)</td>
                    <td className="p-4 border border-slate-200">Premium retail packs, gifting, export retail</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border border-slate-200 font-medium">Medium (4-5 suta)</td>
                    <td className="p-4 border border-slate-200">Roasted and flavoured snacks, everyday retail</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-slate-200 font-medium">Smaller (3-4 suta)</td>
                    <td className="p-4 border border-slate-200">Powder, kheer/desserts, food manufacturing, blends</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-slate-500 mt-2 italic">*Exact size ranges differ between suppliers, so always confirm specifications in writing.</p>
            </div>

            <h2 className="text-2xl font-semibold text-[#012F6A] mt-10 mb-4">What to Check Besides Size</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-3 mb-8 marker:text-[#BC8521]">
              <li><strong>Colour:</strong> Bright, creamy white. Yellowing or dark spots indicate poor drying or storage.</li>
              <li><strong>Moisture:</strong> High moisture shortens shelf life and affects crunch.</li>
              <li><strong>Popping quality:</strong> Fully popped, round seeds with few broken pieces.</li>
              <li><strong>Purity:</strong> No shell fragments, dust or foreign matter.</li>
              <li><strong>Smell and taste:</strong> Clean and neutral, with no mustiness.</li>
              <li><strong>Lab reports:</strong> Microbial and pesticide residue tests, plus a Certificate of Analysis (COA) per batch.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#012F6A] mt-10 mb-4">How to Choose</h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-3 mb-10 marker:text-[#BC8521]">
              <li><strong>Premium retail brand</strong> &rarr; larger grades, strict colour and breakage limits</li>
              <li><strong>Flavoured snack manufacturer</strong> &rarr; medium grades, consistent size</li>
              <li><strong>Powder or dessert products</strong> &rarr; smaller grades at better value</li>
            </ul>

            {/* Call to Action Box */}
            <div className="bg-[#EEF2F8] border-l-4 border-[#BC8521] p-8 mt-12 not-prose">
              <h3 className="text-xl font-semibold text-[#012F6A] mb-3">Looking for Makhana in bulk?</h3>
              <p className="text-slate-700 mb-6">
                We supply graded, sorted and export-packed makhana with batch-wise quality reports.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-[#BC8521] text-white font-semibold px-6 py-3 rounded hover:bg-[#a3731c] transition-colors shadow-md"
              >
                Request a free sample and price quote &rarr;
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}