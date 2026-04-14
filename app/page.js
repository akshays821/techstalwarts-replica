import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AIMLSection from "@/components/AIMLSection";
import HowWeWork from "@/components/HowWeWork";
import IndustriesSection from "@/components/IndustriesSection";
import ClientsSection from "@/components/ClientsSection";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import LabSection from "@/components/LabSection";
import ProductsSection from "@/components/ProductsSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <AIMLSection />
      <HowWeWork />
      <IndustriesSection />
      <ClientsSection />
      <Testimonials />
      <CaseStudies />
      <LabSection />
      <ProductsSection />
      <ContactCTA />
    </main>
  );
}
