import React from "react";

const certifications = [
  {
    name: "APEDA",
    detail: "Registered Exporter",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 21H20V19H4V21ZM12 2L2 7H22L12 2ZM6 17H8V10H6V17ZM10 17H12V10H10V17ZM14 17H16V10H14V17ZM18 17H20V10H18V17Z" fill="#1e293b"/>
      </svg>
    ),
  },
  {
    name: "FSSAI",
    detail: "Food Safety Certified",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 11 16 7 12C3 8 2 3 2 3C2 3 7 4 11 8C15 12 16 16 16 16M12 22L16 16M12 22C12 22 17 21 20 18C23 15 22 10 22 10C22 10 19 11 16 14C13 17 12 22 12 22Z" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "IEC",
    detail: "Import Export Code",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2H15C15.5523 2 16 2.44772 16 3V5H8V3C8 2.44772 8.44772 2 9 2Z" fill="#94a3b8"/>
        <path d="M16 5H20C20.5523 5 21 5.44772 21 6V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H8V6C8 7.10457 8.89543 8 10 8H14C15.1046 8 16 7.10457 16 6V5Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2"/>
        <path d="M7 12H17M7 16H13" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Spices Board",
    detail: "Registered",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 4.2C18.8 4.2 16.5 3.5 13 5.5C9.5 7.5 5 13 4 15C3 17 4 19 6 19.5C8 20 12 17 15 13.5C18 10 19.5 5.5 19.5 5.5L18.8 4.2Z" fill="#1e293b"/>
        <path d="M4 15C3 17 2 20 2 20L6 19.5" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Bulk & Retail",
    detail: "FCL · LCL · Pouches",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V12M12 12L21.5 6.5M12 12L2.5 6.5M12 2L21.5 6.5V17.5L12 22L2.5 17.5V6.5L12 2Z" fill="#d4a373" stroke="#bc6c25" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 12L21.5 6.5" stroke="#bc6c25" strokeWidth="2"/>
        <path d="M12 2L6.5 5.5L12 9L17.5 5.5L12 2Z" fill="#fefae0"/>
      </svg>
    ),
  },
  {
    name: "Phytosanitary",
    detail: "Per-Shipment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#65a30d"/>
        <path d="M7 12.5L10.5 16L17 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function CertificationBanner() {
  return (
    <section className="w-full border-y border-slate-200 bg-white py-4 overflow-hidden">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max items-center px-4 md:px-8 mx-auto max-w-[1400px]">
          {certifications.map((item, index) => (
            <React.Fragment key={item.name}>
              <div className="flex items-center gap-3 px-6 hover:opacity-80 transition-opacity">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[15px] font-bold tracking-tight text-[#006054]">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              {index < certifications.length - 1 && (
                <div className="h-10 w-[1px] bg-slate-200 shrink-0" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}