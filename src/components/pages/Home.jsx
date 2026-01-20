import Hero from "../home/Hero";
import Pillars from "../home/Pillars";
import ProductsSection from "../home/ProductsSection";
import EngineeringCapabilities from "../home/EngineeringCapabilities";
import DocumentationSection from "../home/DocumentationSection";
import AboutSection from "../home/AboutSection";
import ContactSection from "../home/ContactSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Vayuved Aerospace | Engineering UAV & Drone Flight Controller Systems
        </title>

        <meta
          name="title"
          content="Vayuved Aerospace | Engineering UAV & Drone Flight Controller Systems"
        />
        <meta
          name="description"
          content="Vayuved Aerospace designs and manufactures deterministic flight control units, real-time embedded systems, and aerospace-grade electronics for UAV and advanced aerial platforms."
        />
        <meta
          name="keywords"
          content="flight control unit, FCU, UAV flight controller, aerospace embedded systems, real-time control systems, deterministic control architecture, drone electronics, aerospace engineering"
        />

        <meta property="og:title" content="About Vayuved Aerospace Pvt. Ltd." />
        <meta
          property="og:description"
          content="Vayuved Aerospace Pvt Ltd is an Indian aerospace engineering company focused on the design and development of flight control units, embedded avionics, and real-time control systems for unmanned platforms."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vayuved.com/" />
        <meta
          property="og:title"
          content="Vayuved Aerospace | Engineering UAV & Drone Flight Controller Systems"
        />
        <meta
          property="og:description"
          content="Engineering-driven design of deterministic flight control units, embedded systems, and UAV electronics built for reliability and long-term maintainability."
        />
        <meta property="og:image" content="https://www.vayuved.com/logo.png" />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vayuved.com/" />
      </Helmet>
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
