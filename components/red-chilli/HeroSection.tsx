import React from 'react';
import Link from 'next/link';

const HeroSection = () => (
  <section className="bg-[#9a3319] text-white py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1 space-y-6">
      <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
        India's Premier Red Chilli Origin
      </span>
      <h1 className="text-4xl md:text-5xl font-serif leading-tight">
        Indian Red Chilli <br /> Exporter{' '}
        <span className="text-[#bc8521]">from India</span>
      </h1>
      <p className="text-gray-100 max-w-xl text-lg leading-relaxed">
        Bulk supplier of nine premium Indian red chilli varieties including Teja, Byadgi, Kashmiri, Guntur and S11. Whole chilli, powder, flakes and crushed forms for food processors, masala manufacturers, paprika extractors, retail brands and HoReCa buyers across the Middle East, Africa, Europe and Americas.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          href="/contact?product=red-chilli"
          className="inline-flex items-center justify-center bg-[#bc8521] text-white px-6 py-3 font-semibold rounded shadow-md hover:shadow-lg hover:opacity-90 transition-all"
        >
          Request Red Chilli Quote
        </Link>
        <a
          href="#varieties"
          className="inline-flex items-center justify-center bg-transparent border border-white text-white px-6 py-3 font-semibold rounded hover:bg-white/10 transition-all"
        >
          View All 9 Varieties →
        </a>
      </div>
    </div>

    <div className="bg-[#b34022] rounded-xl p-8 shadow-lg max-w-sm w-full border border-white/10">
      <div className="space-y-6">
        <div>
          <h3 className="text-[#bc8521] text-3xl font-serif mb-1">09</h3>
          <p className="text-sm text-gray-200">Premium Varieties</p>
        </div>
        <div className="border-t border-white/20 pt-4">
          <h3 className="text-[#bc8521] text-3xl font-serif mb-1">1K-100K</h3>
          <p className="text-sm text-gray-200">SHU Range</p>
        </div>
        <div className="border-t border-white/20 pt-4">
          <h3 className="text-[#bc8521] text-3xl font-serif mb-1">50-180</h3>
          <p className="text-sm text-gray-200">ASTA Range</p>
        </div>
        <div className="border-t border-white/20 pt-4">
          <h3 className="text-[#bc8521] text-3xl font-serif mb-1">24h</h3>
          <p className="text-sm text-gray-200">Quote Turnaround</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;