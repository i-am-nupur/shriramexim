import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

// Import the newly created modular components
import HeroSection from '@/components/red-chilli/HeroSection';
import TrustBadges from '@/components/red-chilli/TrustBadges';
import AboutSection from '@/components/red-chilli/AboutSection';
import VarietiesGrid from '@/components/red-chilli/VarietiesGrid';
import ComparisonTable from '@/components/red-chilli/ComparisonTable';
import FormsCuts from '@/components/red-chilli/FormsCuts';
import TechSpecs from '@/components/red-chilli/TechSpecs';

export default function IndianRedChilliesPage() {
  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TrustBadges/>
      <AboutSection />
      <VarietiesGrid />
      <ComparisonTable />
      <FormsCuts />
      <TechSpecs />
      <Footer />
    </main>
  );
}