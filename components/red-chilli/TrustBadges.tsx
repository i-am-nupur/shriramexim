import React from 'react';

const TrustBadges = () => (
  <section className="bg-[#fcfaf7] border-y border-gray-200 py-6 px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-[#5a2e1d] font-medium">
    
    <div className="flex items-center gap-2">
      <span className="text-xl text-[#8B2315]">🌶</span> 
      <div>
        Spices Board<br/>
        <span className="text-xs text-gray-500 font-normal">Registered Exporter</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      {/* Replaced inline style with text-[#012f6a] */}
      <span className="text-xl text-[#012f6a]">🌿</span> 
      <div>
        FSSAI<br/>
        <span className="text-xs text-gray-500 font-normal">Food Safety Certified</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      <span className="text-xl text-gray-700">🏛</span> 
      <div>
        APEDA<br/>
        <span className="text-xs text-gray-500 font-normal">Export Registered</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      <span className="text-xl text-blue-500">🔬</span> 
      <div>
        Lab Tested<br/>
        <span className="text-xs text-gray-500 font-normal">ASTA · SHU · MRL</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      <span className="text-xl text-yellow-700">📦</span> 
      <div>
        Custom Packing<br/>
        <span className="text-xs text-gray-500 font-normal">Bulk & Retail</span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      {/* Replaced inline style with text-[#012f6a] */}
      <span className="text-xl text-[#012f6a]">✅</span> 
      <div>
        Phytosanitary<br/>
        <span className="text-xs text-gray-500 font-normal">Per-Shipment</span>
      </div>
    </div>

  </section>
);

export default TrustBadges;