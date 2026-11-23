import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Certificates", href: "/certificates" },
];

const productLinks = [
  { label: "Indore Cumin", href: "/products/indore-cumin" },
  { label: "Guntur Teja Chilli", href: "/products/guntur-teja-chilli" },
  { label: "Byadgi Chilli", href: "/products/byadgi-chilli" },
  { label: "Turmeric", href: "/products/turmeric" },
  { label: "Makhana", href: "/products/makhana" },
  { label: "Coffee", href: "/products/coffee" },
  { label: "Ghost Pepper", href: "/products/ghost-pepper" },
  { label: "Rice", href: "/products/rice" },
];

const contact = {
  phone: "+91 89814 31663",
  email: "info@shriramexim.com", // Replace with your actual email
};

// Removed opacity (/80) and added font-medium for darker, bolder text
const linkClass =
  "text-[#012f6a] font-medium transition-colors duration-200 hover:text-[#bc8521] focus-visible:text-[#bc8521] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc8521]";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-[#012f6a]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Socials */}
          <div>
            <Link
              href="/"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc8521]"
            >
              <Image
                src="/logo.png"
                alt="Shri Ram Exim"
                width={240}
                height={240}
                className="h-16 w-auto object-contain"
              />
            </Link>
            {/* Added font-medium and removed opacity */}
            <p className="mt-6 max-w-xs font-medium leading-relaxed text-[#012f6a]">
              Exporter of premium Spices and custom products to importers worldwide.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#012f6a]/10 text-[#012f6a] transition-all duration-300 hover:bg-[#bc8521] hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#012f6a]/10 text-[#012f6a] transition-all duration-300 hover:bg-[#bc8521] hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#012f6a]/10 text-[#012f6a] transition-all duration-300 hover:bg-[#bc8521] hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#012f6a]/10 text-[#012f6a] transition-all duration-300 hover:bg-[#bc8521] hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-serif text-lg font-bold">Quick Links</h2>
            <div className="mt-4 h-0.5 w-8 bg-[#bc8521]" aria-hidden="true" />
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Footer products">
            <h2 className="font-serif text-lg font-bold">Products</h2>
            <div className="mt-4 h-0.5 w-8 bg-[#bc8521]" aria-hidden="true" />
            <ul className="mt-6 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-serif text-lg font-bold">Contact</h2>
            <div className="mt-4 h-0.5 w-8 bg-[#bc8521]" aria-hidden="true" />
            
            <address className="mt-6 not-italic">
              {/* Added font-medium and removed opacity */}
              <div className="flex flex-col space-y-1 font-medium text-[#012f6a]">
                <span>42/211, Bedia Danga, 2nd Lane</span>
                <span>Kolkata - 700039</span>
                <span>West Bengal, India</span>
              </div>

              <div className="mt-4 space-y-2">
                <p>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={linkClass}>
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {contact.email}
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar: Removed opacity (/70) and added font-medium */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[#012f6a]/20 pt-8 text-sm font-medium text-[#012f6a] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Shri Ram Global Trade &amp; Exim LLP. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}