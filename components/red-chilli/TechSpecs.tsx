import React from 'react';

const TechSpecs = () => (
  <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
    <p className="text-sm font-semibold tracking-wider text-[#9a3319] uppercase mb-2">Quality & Lab Testing</p>
    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Technical specifications<br/>tested per shipment</h2>
    <p className="text-gray-600 max-w-2xl mb-10">Every consignment is tested at NABL-accredited laboratories before dispatch. Below are the standard parameters with typical export-grade ranges. Custom tolerances can be specified per buyer requirement.</p>
    
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 bg-[#fcfaf7] border border-[#f0e8dd] rounded-xl p-8">
        <h3 className="text-2xl font-serif text-gray-900 mb-6">Physical Parameters</h3>
        <ul className="space-y-4 divide-y divide-[#f0e8dd]">
          <li className="flex justify-between pb-2"><span className="text-gray-600">Moisture content</span><strong className="text-gray-900">10% to 12% max</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Foreign matter</span><strong className="text-gray-900">1% to 2% max</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Broken pieces</span><strong className="text-gray-900">2% to 5% max</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Damaged pods</span><strong className="text-gray-900">3% max</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Insect damage</span><strong className="text-gray-900">Nil to 1% max</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Discoloured pods</span><strong className="text-gray-900">3% max</strong></li>
          <li className="flex justify-between pt-2"><span className="text-gray-600">Stem percentage</span><strong className="text-gray-900">As per order spec</strong></li>
        </ul>
      </div>
      
      <div className="flex-1 bg-[#fcfaf7] border border-[#f0e8dd] rounded-xl p-8">
        <h3 className="text-2xl font-serif text-gray-900 mb-6">Chemical & Microbiological</h3>
        <ul className="space-y-4 divide-y divide-[#f0e8dd]">
          <li className="flex justify-between pb-2"><span className="text-gray-600">ASTA colour value</span><strong className="text-gray-900">50 to 180+ (variety dependent)</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">SHU (Scoville)</span><strong className="text-gray-900">1K to 100K+ (variety dependent)</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Aflatoxin total</span><strong className="text-gray-900">Below 10 ppb (EU MRL)</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Aflatoxin B1</span><strong className="text-gray-900">Below 5 ppb</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Pesticide residue (MRL)</span><strong className="text-gray-900">EU and FDA compliant</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Salmonella</span><strong className="text-gray-900">Absent in 25g</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">E. coli</span><strong className="text-gray-900">Below 10 CFU/g</strong></li>
          <li className="flex justify-between pt-2"><span className="text-gray-600">Yeast & mould</span><strong className="text-gray-900">Below 10,000 CFU/g</strong></li>
        </ul>
      </div>
    </div>
  </section>
);

export default TechSpecs;