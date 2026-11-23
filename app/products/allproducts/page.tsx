import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/allproducts/ProductsHero";
import SpicesSection from "@/components/allproducts/SpicesSection";
import CoffeeSection from "@/components/allproducts/CoffeeSection";
import MakhanaSection from "@/components/allproducts/MakhanaSection";
import CustomSourcing from "@/components/allproducts/CustomSourcing";
import DestinationGuides from "@/components/allproducts/DestinationGuides";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <SpicesSection />
        <CoffeeSection />
        <MakhanaSection />
        <CustomSourcing />
        <DestinationGuides />
        {/* Baaki components hum yahan add karenge */}
      </main>
      <Footer />
    </>
  );
}