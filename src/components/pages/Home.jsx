import Hero from "../home/Hero";
import Pillars from "../home/Pillars";
import ProductsSection from "../home/ProductsSection";
import EngineeringCapabilities from "../home/EngineeringCapabilities";
import DocumentationSection from "../home/DocumentationSection";
import AboutSection from "../home/AboutSection";
import ContactSection from "../home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ProductsSection />
      <EngineeringCapabilities />
      <DocumentationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
