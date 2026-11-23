import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page Sections
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExportRange from "@/components/home/ExportRange";
import Markets from "@/components/home/Markets";
import ProcessSteps from "@/components/home/ProcessSteps";
import Certifications from "@/components/home/Certifications";
import WorkingPromise from "@/components/home/WorkingPromise";
import Insights from "@/components/home/Insights";
import FAQs from "@/components/home/FAQs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <WhyChooseUs />
        <ExportRange />
        <Markets />
        <ProcessSteps />
        
        <WorkingPromise />
        <Insights />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}