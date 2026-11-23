import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
// Future imports:
import OurStory from "@/components/about/OurStory";
import WhatWeExport from "@/components/about/WhatWeExport";
import SourcingNetwork from "@/components/about/SourcingNetwork";
import QualityPhilosophy from "@/components/about/QualityPhilosophy";
import Certifications from "@/components/about/Certifications";
import ProcessTimeline from "@/components/about/ProcessTimeline";
import FounderNote from "@/components/about/FounderNote";
import HonestCommitments from "@/components/about/HonestCommitments";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen font-sans">
        <AboutHero />
        <OurStory/>
        <WhatWeExport/>
        <SourcingNetwork/>
        <QualityPhilosophy/>
        <Certifications/>
        <ProcessTimeline/>
        <FounderNote/>
        <HonestCommitments/>
        <AboutCTA/>

        {/* We will add the other components here as we build them */}
      </main>
      <Footer />
    </>
  );
}