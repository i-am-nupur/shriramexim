import React from 'react';
import Image from 'next/image';

const varietiesData = [
  { 
    name: 'Teja Red Chilli', 
    tag: 'S17 · Extra hot variety', 
    origin: 'ANDHRA PRADESH', 
    shu: '75K to 100K+', 
    asta: '50 to 80', 
    len: '4 to 6 cm', 
    col: 'Dark red', 
    img: '/teja.png',
    desc: "India's hottest commercial chilli, grown predominantly in Khammam and Warangal. It is highly aromatic, intensely pungent, and widely used for fiery spice extraction." 
  },
  { 
    name: 'S11 Red Chilli', 
    tag: 'Sannam · Balanced heat', 
    origin: 'ANDHRA PRADESH', 
    shu: '35K to 50K', 
    asta: '100 to 130', 
    len: '6 to 8 cm', 
    col: 'Bright red', 
    img: '/s11.png',
    desc: "India's most exported red chilli variety, offering a perfect balance of moderate heat and rich colour. Features smooth skin and a uniform, attractive shape." 
  },
  { 
    name: 'Byadgi Red Chilli', 
    tag: 'Wrinkled · Premium colour', 
    origin: 'KARNATAKA', 
    shu: '8K to 15K', 
    asta: '130 to 180+', 
    len: '8 to 15 cm', 
    col: 'Deep dark red', 
    img: '/byadgi.png',
    desc: "A Geographical Indication (GI) tagged variety from Karnataka. It is famous for its exceptional deep red colour, wrinkled skin, and exceptionally high oleoresin content." 
  },
  { 
    name: 'Kashmiri Red Chilli', 
    tag: 'Vibrant · Very mild heat', 
    origin: 'JAMMU & KASHMIR', 
    shu: '1K to 2K', 
    asta: '150 to 180', 
    len: '7 to 10 cm', 
    col: 'Crimson red', 
    img: '/kashmiri.png',
    desc: "Known globally for its vibrant crimson red colour and very mild heat. It is perfect for imparting rich colour to dishes without overpowering spiciness." 
  },
  { 
    name: 'Guntur S4 Chilli', 
    tag: 'Sannam · Kitchen staple', 
    origin: 'ANDHRA PRADESH', 
    shu: '25K to 35K', 
    asta: '60 to 80', 
    len: '5 to 7 cm', 
    col: 'Bright red', 
    img: '/guntur-s4.png',
    desc: "A staple ingredient in traditional Indian cuisine, sourced from Andhra Pradesh. It delivers a sharp, biting pungency and imparts a bright red hue to curries." 
  },
  { 
    name: 'Ramnad Mundu', 
    tag: 'Round · Unique flavour', 
    origin: 'TAMIL NADU', 
    shu: '10K to 30K', 
    asta: '40 to 60', 
    len: '2 to 3 cm', 
    col: 'Orange-red', 
    img: '/ramnad.png',
    desc: "A unique round-shaped chilli originating from Tamil Nadu. It provides distinct flavour, moderate heat, and is highly preferred for tempering traditional South Indian dishes." 
  },
  { 
    name: 'Bhoot Jolokia', 
    tag: 'Ghost Pepper · Extreme', 
    origin: 'ASSAM', 
    shu: '1M+ (Very High)', 
    asta: '100 to 120', 
    len: '5 to 8 cm', 
    col: 'Bright red', 
    img: '/bhoot-jolokia.png',
    desc: "One of the world's hottest peppers, cultivated in Northeast India. It features extreme, intense heat and a distinct fruity aroma ideal for hot sauces." 
  },
  { 
    name: 'Endo 5 Red Chilli', 
    tag: 'Hybrid · Consistent quality', 
    origin: 'MADHYA PRADESH', 
    shu: '50K to 70K', 
    asta: '80 to 100', 
    len: '6 to 8 cm', 
    col: 'Bright dark red', 
    img: '/endo5.png',
    desc: "A premium hybrid variety highly valued for its consistent thick skin and vibrant colour. It boasts an excellent shelf life and a moderate pungency level." 
  },
  { 
    name: 'Kanthari Chilli', 
    tag: 'Bird’s Eye · Potent', 
    origin: 'KERALA', 
    shu: '50K to 100K', 
    asta: '50 to 70', 
    len: '1 to 2 cm', 
    col: 'Pale to bright red', 
    img: '/kanthari.png',
    desc: "A small but incredibly potent chilli grown largely in Kerala. It delivers an intense, sudden burst of heat and boasts excellent medicinal health benefits." 
  }
];

const VarietiesGrid = () => (
  <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#fcfaf7]">
    <p className="text-sm font-semibold tracking-wider text-[#9a3319] uppercase mb-2">Our Red Chilli Range</p>
    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">9 premium Indian red chilli varieties</h2>
    <p className="text-gray-600 max-w-3xl mb-10">From the extreme heat of Teja (100,000 SHU) to the deep colour of Byadgi (180+ ASTA) and the mild brightness of Kashmiri, our range covers every importer's pungency, colour and use profile.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {varietiesData.map((item, idx) => (
        <div key={idx} className="bg-white flex flex-col rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute top-4 left-4 z-10 bg-white/90 text-xs font-bold px-2 py-1 rounded text-gray-700">
              {item.origin}
            </div>
            
            <Image 
              src={item.img} 
              alt={item.name} 
              fill
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-serif text-gray-900">{item.name}</h3>
            <p className="text-sm text-[#bc8521] mb-6">{item.tag}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-gray-500 text-xs">SHU</p>
                <p className="font-semibold text-gray-900 border-l-2 border-[#9a3319] pl-2">{item.shu}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">ASTA</p>
                <p className="font-semibold text-gray-900 border-l-2 border-[#9a3319] pl-2">{item.asta}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">LENGTH</p>
                <p className="font-semibold text-gray-900 border-l-2 border-[#9a3319] pl-2">{item.len}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">COLOUR</p>
                <p className="font-semibold text-gray-900 border-l-2 border-[#9a3319] pl-2">{item.col}</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mt-4 flex-grow">{item.desc}</p>
            
            <div className="mt-6">
              <button className="w-full text-white py-2 rounded shadow hover:shadow-md bg-[#bc8521] hover:bg-[#9a3319] transition-colors duration-300 font-medium text-sm">
                Get Quotation
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  </section>
);

export default VarietiesGrid;