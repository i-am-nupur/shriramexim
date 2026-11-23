import React from 'react';

const AboutSection = () => (
  <section className="py-16 px-6 md:px-16 lg:px-24 bg-white flex flex-col lg:flex-row gap-16">
    <div className="lg:w-3/5 space-y-6">
      <p className="text-sm font-semibold tracking-wider text-[#9a3319] uppercase">About Indian Red Chilli</p>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug">Why importers source red chilli from India</h2>
      <p className="text-gray-700 text-lg">
        India is the world's largest producer and exporter of red chilli, supplying over 36% of global chilli trade. From the heat of Teja to the colour of Byadgi, India offers a variety profile no other origin can match.
      </p>
      <div className="space-y-4 text-gray-700">
        <p><strong>India produces 1.7+ million metric tonnes of red chilli annually</strong>, with Andhra Pradesh, Telangana, Karnataka and Madhya Pradesh accounting for over 70% of the output. The country exports red chilli to more than 100 destinations including the United States, Vietnam, Bangladesh, Sri Lanka, the UAE, Saudi Arabia, the United Kingdom and Malaysia.</p>
        <p>What makes Indian red chilli unique is the <strong>genetic diversity across varieties</strong>. Teja delivers extreme pungency for hot sauce manufacturers. Byadgi gives deep colour for oleoresin extraction and paprika replacement. Kashmiri offers mild heat with vibrant colour for premium culinary brands. This range lets importers source exactly the heat, colour and use profile their market needs from a single origin.</p>
        <p>At Alstoe India Exports, we supply <strong>nine commercial red chilli varieties</strong> sourced directly from Guntur, Khammam, Warangal, Haveri and other producing belts. Available whole (with or without stem), powdered, in flakes, or crushed, with full export documentation, Spices Board compliance and destination-market label support.</p>
      </div>
    </div>
    <div className="lg:w-2/5">
      <div className="bg-[#fcfaf7] border border-[#f0e8dd] rounded-xl p-8 shadow-sm">
        <ul className="space-y-4 divide-y divide-[#f0e8dd]">
          <li className="flex justify-between pb-2"><span className="text-gray-600">India's share of global red chilli trade</span><strong className="text-[#9a3319]">36%+</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Annual production</span><strong className="text-[#9a3319]">1.7M+ MT</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Primary producing states</span><strong className="text-[#9a3319]">AP, Telangana, Karnataka</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Largest spot market</span><strong className="text-[#9a3319]">Guntur, Andhra Pradesh</strong></li>
          <li className="flex justify-between py-2"><span className="text-gray-600">Peak harvest season</span><strong className="text-[#9a3319]">December to April</strong></li>
          <li className="flex justify-between pt-2"><span className="text-gray-600">Export destinations</span><strong className="text-[#9a3319]">100+ countries</strong></li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;