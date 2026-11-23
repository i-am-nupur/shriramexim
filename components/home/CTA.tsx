import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const contactInfo = {
  email: "export@yourdomain.com",
  phone: "+91 00000 00000",
  whatsappUrl: "https://wa.me/910000000000",
  linkedinUrl: "https://www.linkedin.com/company/your-company",
};

const plusSvg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><path d='M28 23v10M23 28h10' stroke='white' stroke-opacity='0.10' stroke-width='1.6' stroke-linecap='round'/></svg>";
const plusPattern = `url("data:image/svg+xml,${encodeURIComponent(plusSvg)}")`;
const darkBackground = {
  backgroundColor: "#002147",
  backgroundImage: `${plusPattern}, linear-gradient(135deg, #00152E 0%, #002147 45%, #0B3A6E 100%)`,
  backgroundSize: "56px 56px, 100% 100%",
};

export default function CTA() {
  return (
    <>
      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden text-white"
        style={darkBackground}
      >
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-24">
          <h2
            id="cta-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[44px]"
          >
            Looking for a reliable spice exporter from India?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Share your product, required quantity, destination port, packing
            requirement and target price if you have one. We reply within 24
            hours with a detailed quotation and clear next steps.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#bc8521] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D9573B] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#D9573B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
                <path d="M12 3C6.9 3 3 6.6 3 11c0 2 .8 3.8 2.2 5.2L4 21l4.3-1.7c1.1.4 2.4.7 3.7.7 5.1 0 9-3.6 9-8s-3.9-8-9-8z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/20 pt-8 text-base">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-[#bc8521] underline-offset-4 hover:underline"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-white/90 underline-offset-4 hover:underline"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bc8521] underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="newsletter-heading" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#002147] px-6 py-14 shadow-xl sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(55% 90% at 100% 0%, rgba(3, 4, 90, 0.45), transparent 70%), radial-gradient(40% 70% at 0% 100%, rgba(240,165,143,0.15), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2
                  id="newsletter-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
                >
                  Subscribe for Market Updates &amp; Global Spice Price Alerts
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  Crop reports, price movements and shipping notes from
                  Guntur and Indore, sent straight to your inbox.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}