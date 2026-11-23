import React from 'react';

const FormsCuts = () => (
  <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#fcfaf7]">
    <p className="text-sm font-semibold tracking-wider text-[#9a3319] uppercase mb-2">Forms & Cuts</p>
    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Available in every form your<br/>operation requires</h2>
    <p className="text-gray-600 max-w-2xl mb-10">All 9 varieties available across multiple processing formats. Tell us your application and we will recommend the right form and grade.</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Whole Chilli', desc: 'With stem or stemless. Sortexed for foreign matter and broken pieces. Sold by length grade.' },
        { title: 'Powder', desc: 'Fine, medium, or coarse mesh. Various ASTA grades. Standalone or blended to spec.' },
        { title: 'Crushed & Flakes', desc: 'Coarse crushed for pizza-grade flakes. With or without seeds. Variable mesh sizes.' },
        { title: 'Sortexed / Premium', desc: 'Colour-sorted, stem-removed, low-foreign-matter premium grade for retail and HoReCa.' }
      ].map((cut, i) => (
        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-[#fcfaf7] border border-[#f0e8dd] flex items-center justify-center mx-auto mb-4 text-[#9a3319] text-xl">🌶</div>
          <h3 className="font-serif text-lg text-gray-900 mb-2">{cut.title}</h3>
          <p className="text-sm text-gray-600">{cut.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FormsCuts;