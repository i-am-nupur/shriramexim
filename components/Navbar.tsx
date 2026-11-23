"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// Set to true if your logo image does not already contain the company name.
const showWordmark = false;

// Placeholders: replace with your real details.
const whatsappUrl = "https://wa.me/910000000000";
const emailUrl = "mailto:export@yourdomain.com";

type NavLink = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  megaMenuColumns?: {
    title: string;
    links: NavLink[];
  }[];
  promo?: {
    title: string;
    buttonText: string;
    href: string;
  };
  children?: NavLink[]; // For standard simple dropdowns
};

const items: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    isMegaMenu: true,
    megaMenuColumns: [
      {
        title: "MAIN PRODUCTS",
        links: [
          { label: "Indian Red Chillies", href: "/products/indian-red-chillies" },
          { label: "Sona Masoori Rice", href: "/products/indian-rice" },
          { label: "Ghost Pepper", href: "/products/pepper" },
          { label: "Indore Cumin", href: "/products/indore-cumin" },
          { label: "Turmeric", href: "/products/turmeric" },
          { label: "Makhana", href: "/products/makhana" },
        ],
      },
      {
        title: "OTHER CATEGORIES",
        links: [
          { label: "coconut shell & charcoal", href: "/products/coconut-shell-charcoal" },
          { label: "Indian spices", href: "/products/indian-spices" },
          { label: "Botanical Commodities", href: "/products/botanical-commodities" },
          { label: "Indian Rice", href: "/products/indian-rice" },
          { label: "All Products", href: "/products" },
        ],
      },
    ],
    promo: {
      title: "Free sample dispatch",
      buttonText: "REQUEST →",
      href: "/contact",
    },
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Middle East", href: "/markets/middle-east" },
      { label: "Southeast Asia", href: "/markets/southeast-asia" },
      { label: "Europe", href: "/markets/europe" },
      { label: "Africa", href: "/markets/africa" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc8521]";

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-[#bc8521] px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#012f6a] hover:shadow-lg uppercase " +
  focusRing;

const iconButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#012f6a] transition-colors duration-300 hover:border-[#bc8521] hover:text-[#bc8521] " +
  focusRing;

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.9 3 3 6.6 3 11c0 2 .8 3.8 2.2 5.2L4 21l4.3-1.7c1.1.4 2.4.7 3.7.7 5.1 0 9-3.6 9-8s-3.9-8-9-8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Helper to determine if a main nav item is active
  const isParentActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#bc8521]/20 bg-[#FCFBF9] shadow-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 sm:px-10"
      >
        <Link href="/" className={`flex shrink-0 items-center gap-3 ${focusRing}`}>
          <Image
            src="/logo.png"
            alt="Shri Ram Exim"
            width={300}
            height={300}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
          {showWordmark && (
            <span className="hidden sm:block">
              <span className="block text-2xl font-extrabold leading-tight text-[#012f6a]">
                Shri Ram Exim
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#bc8521]">
                Trusted Indian Exporters
              </span>
            </span>
          )}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {items.map((item) => {
            const active = isParentActive(item.href);
            return (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 py-4 text-[15px] font-semibold transition-colors duration-300 hover:text-[#bc8521] ${
                    active ? "text-[#bc8521]" : "text-[#012f6a]"
                  } ${focusRing}`}
                >
                  {item.label}
                  {(item.children || item.isMegaMenu) && (
                    <Chevron className="transition-transform duration-300 group-hover:-rotate-180 group-focus-within:-rotate-180" />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.isMegaMenu && item.megaMenuColumns && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[550px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {/* Top Arrow Pointer */}
                    <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#bc8521]/30 bg-white"></div>
                    
                    <div className="relative overflow-hidden rounded-xl border-t-4 border-[#bc8521] bg-white p-6 shadow-2xl ring-1 ring-slate-100">
                      <div className="grid grid-cols-2 gap-8">
                        {item.megaMenuColumns.map((col, idx) => (
                          <div key={idx}>
                            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#bc8521]">
                              {col.title}
                            </h4>
                            <ul className="space-y-3">
                              {col.links.map((link) => {
                                const isChildActive = pathname === link.href;
                                return (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className={`group/link flex items-center text-sm font-medium transition-colors hover:text-[#bc8521] ${
                                        isChildActive ? "text-[#bc8521]" : "text-[#012f6a]"
                                      }`}
                                    >
                                      <span
                                        className={`mr-3 h-[1px] transition-all group-hover/link:w-5 group-hover/link:bg-[#bc8521] ${
                                          isChildActive ? "w-5 bg-[#bc8521]" : "w-3 bg-[#bc8521]/40"
                                        }`}
                                      ></span>
                                      {link.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Promo Box */}
                      {item.promo && (
                        <div className="mt-6 flex items-center justify-between rounded-lg bg-[#012f6a] p-4">
                          <span className="font-serif text-lg italic text-white">
                            {item.promo.title}
                          </span>
                          <Link
                            href={item.promo.href}
                            className="rounded bg-[#bc8521] px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#012f6a]"
                          >
                            {item.promo.buttonText}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Standard Dropdown */}
                {!item.isMegaMenu && item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute -top-2 left-6 h-4 w-4 rotate-45 border-l border-t border-[#bc8521]/30 bg-white"></div>
                    <ul className="relative rounded-xl border-t-4 border-[#bc8521] bg-white p-2 shadow-xl ring-1 ring-slate-100">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#bc8521] focus-visible:bg-slate-50 focus-visible:outline-none ${
                                isChildActive ? "bg-slate-50 text-[#bc8521]" : "text-[#012f6a]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={iconButtonClass}
          >
            <ChatIcon />
          </a>
          <a href={emailUrl} aria-label="Send an email" className={iconButtonClass}>
            <MailIcon />
          </a>
          <Link href="/contact" className={ctaClass}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`p-2 text-[#012f6a] lg:hidden ${focusRing}`}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-[#FCFBF9] px-6 pb-8 pt-4 sm:px-10 lg:hidden"
        >
          <ul className="space-y-2">
            {items.map((item) => {
              const active = isParentActive(item.href);
              return (
                <li key={item.label} className="border-b border-slate-100 pb-2">
                  <Link
                    href={item.href}
                    onClick={close}
                    className={`block py-2 text-lg font-semibold transition-colors hover:text-[#bc8521] ${
                      active ? "text-[#bc8521]" : "text-[#012f6a]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Mega Menu Links */}
                  {item.isMegaMenu && item.megaMenuColumns && (
                    <div className="ml-4 mt-2 space-y-4 border-l-2 border-[#bc8521]/20 pl-4">
                      {item.megaMenuColumns.map((col, idx) => (
                        <div key={idx}>
                          <p className="mb-2 text-xs font-bold text-[#bc8521]">{col.title}</p>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={close}
                                  className={`block text-sm font-medium transition-colors hover:text-[#012f6a] ${
                                    pathname === link.href ? "text-[#012f6a]" : "text-slate-600"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Standard Links */}
                  {!item.isMegaMenu && item.children && (
                    <ul className="ml-4 mt-2 space-y-2 border-l-2 border-[#bc8521]/20 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className={`block py-1 text-sm font-medium transition-colors hover:text-[#012f6a] ${
                              pathname === child.href ? "text-[#012f6a]" : "text-slate-600"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={iconButtonClass}
              >
                <ChatIcon />
              </a>
              <a href={emailUrl} aria-label="Send an email" className={iconButtonClass}>
                <MailIcon />
              </a>
            </div>
            <Link href="/contact" onClick={close} className={`${ctaClass} w-full sm:w-auto`}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}