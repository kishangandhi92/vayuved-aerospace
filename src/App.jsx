import Pillars from "./components/Pillars";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EngineeringCapabilities from "./components/EngineeringCapabilities";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import DocumentationSection from "./components/DocumentationSection";
import ScrollToTop from "./components/ScrollToTop";
import ProductsSection from "./components/ProductsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-steel font-primary">
      <Header />
      <Hero />
      <Pillars />
      <ProductsSection />
      <EngineeringCapabilities />
      <DocumentationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
