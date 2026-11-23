import React from 'react';

const ComparisonTable = () => (
  <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
    <p className="text-sm font-semibold tracking-wider text-[#9a3319] uppercase mb-2">Side-by-side Comparison</p>
    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">All 9 varieties at a glance</h2>
    <p className="text-gray-600 max-w-3xl mb-10">Quick reference for procurement teams comparing pungency, colour and physical specs. Actual lab values vary by harvest, lot and supplier and are confirmed with COA per shipment.</p>
    
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-[#f0e8dd]">
        <thead>
          <tr className="bg-[#9a3319] text-white text-sm uppercase tracking-wide">
            <th className="p-4 border border-[#b34022]">Variety</th>
            <th className="p-4 border border-[#b34022]">Origin</th>
            <th className="p-4 border border-[#b34022]">SHU</th>
            <th className="p-4 border border-[#b34022]">ASTA</th>
            <th className="p-4 border border-[#b34022]">Length</th>
            <th className="p-4 border border-[#b34022]">Heat</th>
            <th className="p-4 border border-[#b34022]">Best For</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700 bg-[#fcfaf7]">
          <tr className="border-b border-[#f0e8dd]">
            <td className="p-4 font-semibold text-[#9a3319] border-r border-[#f0e8dd]">Teja</td>
            <td className="p-4 border-r border-[#f0e8dd]">Khammam, Warangal (AP)</td>
            <td className="p-4 border-r border-[#f0e8dd]">75K to 100K+</td>
            <td className="p-4 border-r border-[#f0e8dd]">50 to 80</td>
            <td className="p-4 border-r border-[#f0e8dd]">4 to 6 cm</td>
            <td className="p-4 border-r border-[#f0e8dd]">Extra Hot</td>
            <td className="p-4">Hot sauces, spicy noodles, Bangladesh exports</td>
          </tr>
          <tr className="border-b border-[#f0e8dd] bg-white">
            <td className="p-4 font-semibold text-[#9a3319] border-r border-[#f0e8dd]">S11</td>
            <td className="p-4 border-r border-[#f0e8dd]">Andhra Pradesh</td>
            <td className="p-4 border-r border-[#f0e8dd]">35K to 50K</td>
            <td className="p-4 border-r border-[#f0e8dd]">100 to 130</td>
            <td className="p-4 border-r border-[#f0e8dd]">6 to 8 cm</td>
            <td className="p-4 border-r border-[#f0e8dd]">Medium</td>
            <td className="p-4">Masala, sauces, general culinary export</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default ComparisonTable;