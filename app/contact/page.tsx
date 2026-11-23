import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ContactHero from "@/components/contact/ContactHero";
// Future imports:
import EnquiryForm from "@/components/contact/EnquiryForm";
import NextSteps from "@/components/contact/NextSteps";
import CompanyDetails from "@/components/contact/CompanyDetails";
import ExploreRange from "@/components/contact/ExploreRange";
import ContactCTA from "@/components/contact/ContactCTA";


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen font-sans">
        <ContactHero />
        <EnquiryForm/>
        <NextSteps/>
        <CompanyDetails/>
        <ExploreRange/>
        <ContactCTA/>
        {/* We will add the other components here as we build them */}
      </main>
      <Footer />
    </>
  );
}