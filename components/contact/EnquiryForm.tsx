"use client";

import { useState, type FormEvent } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxmyEenutyxGRVOPyVu-mNxQzY3LhFqOEGx-pVsUB3M-LiO8-p56e8qOJ4tLBBpS-mTYA/exec";

const PRODUCT_OPTIONS = [
  "Basmati Rice",
  "Non-Basmati Rice",
  "Spices",
  "Red Chilli",
  "Turmeric",
  "Coffee",
  "Makhana",
  "Dehydrated Veg",
  "Herbal Powders",
  "Other / Custom",
];

type Status = "idle" | "loading" | "success" | "error";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    products: [] as string[],
    quantity: "",
    destinationPort: "",
    incoterm: "",
    requiredBy: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleProduct(product: string) {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg("");

    if (formData.products.length === 0) {
      setStatus("error");
      setErrorMsg("Please select at least one product of interest.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ formType: "quote", ...formData }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          products: [],
          quantity: "",
          destinationPort: "",
          incoterm: "",
          requiredBy: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-start">
          {/* Left Side: Text and Benefits */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#BC8521] uppercase mb-4">
              Send Us Your Requirement
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#012F6A] leading-tight mb-6">
              Request a quote <br /> or send an enquiry
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Share your product requirement, destination market and approximate volume. Our export team
              will respond within 24 hours with detailed specifications, sample availability and a
              transparent quotation valid for an agreed window.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "24-hour response on detailed enquiries",
                "Samples dispatched within 48 to 72 hours of approval",
                "Locked pricing for a defined window (typically 7 to 15 days)",
                "No surprise invoicing between quote and Bill of Lading",
                "Complete documentation including country-specific requirements",
                "Your details are used only to respond, never shared with third parties",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#012F6A] text-white text-xs mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#EEF2F8] border-[0.5px] border-[#012F6A]/20 rounded-xl p-6">
              <h4 className="font-semibold text-[#012F6A] mb-2 text-sm">
                Tip: include these for the fastest, most accurate quote
              </h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Product and variety or grade, quantity in MT or containers, destination port, preferred
                packaging, preferred Incoterm (CIF, FOB, CFR, EXW), and target price if you have one.
                The more detail you share, the faster we can respond accurately.
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white border-[0.5px] border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    First Name <span className="text-[#BC8521]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Last Name <span className="text-[#BC8521]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Company Name <span className="text-[#BC8521]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your trading or import company"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Country / Destination Market <span className="text-[#BC8521]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United Arab Emirates"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Email <span className="text-[#BC8521]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm mb-1"
                  />
                  <p className="text-[10px] text-slate-500">
                    Include country code. Used only to follow up on this enquiry.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-3">
                  Products of Interest <span className="text-[#BC8521]">*</span>{" "}
                  <span className="text-slate-400 font-normal">(tick all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {PRODUCT_OPTIONS.map((prod) => (
                    <label
                      key={prod}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-[0.5px] border-slate-300 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.products.includes(prod)}
                        onChange={() => toggleProduct(prod)}
                        className="w-4 h-4 text-[#012F6A] border-slate-300 rounded focus:ring-[#012F6A]"
                      />
                      <span className="text-sm font-medium text-slate-700">{prod}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 25 MT / 1 FCL / 500 kg"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Destination Port
                  </label>
                  <input
                    type="text"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    placeholder="e.g. Jebel Ali, Lagos, Hamburg"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Preferred Incoterm
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm bg-white"
                  >
                    <option value="">Select Incoterm</option>
                    <option value="fob">FOB</option>
                    <option value="cif">CIF</option>
                    <option value="cfr">CFR</option>
                    <option value="exw">EXW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Required By
                  </label>
                  <select
                    value={formData.requiredBy}
                    onChange={(e) => setFormData({ ...formData, requiredBy: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">1-3 months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Your Message / Specific Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share variety preferences, target specifications (e.g. curcumin %, Suta grade, cup score), packaging requirements, certifications needed (Halal, Organic, Kosher), or any other context that helps us quote accurately."
                  className="w-full px-4 py-3 rounded-lg border-[0.5px] border-slate-300 focus:outline-none focus:border-[#012F6A] focus:ring-1 focus:ring-[#012F6A] text-sm resize-none"
                />
              </div>

              {status === "success" && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                  Thank you! Your enquiry has been received. Our export team will respond within 24 hours.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#012F6A] hover:bg-black disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Submitting..." : "Submit Enquiry"} <span>→</span>
                </button>
                <p className="text-[10px] text-slate-500 mt-3 text-center leading-relaxed">
                  By submitting this form you agree that we may contact you regarding your enquiry. We respond within 24 hours during working days (IST). Your data is used only to respond to this enquiry and is never shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}