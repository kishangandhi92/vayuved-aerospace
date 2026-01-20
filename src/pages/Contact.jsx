import { Helmet } from "react-helmet-async";

import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactAddresses from "../components/contact/ContactAddresses";

export default function ContactUs() {
  

  return (
    <>
      <Helmet>
        <title>
          Contact Vayuved Aerospace | Engineering & Flight Control Systems
        </title>


        <meta
          name="title"
          content="Contact Vayuved Aerospace | Engineering & Flight Control Systems"
        />

        <meta
          name="description"
          content="Contact Vayuved Aerospace Pvt Ltd for engineering support, flight control units, embedded avionics, and unmanned systems integration."
        />

        <meta
          name="keywords"
          content="Vayuved Aerospace, flight control units, embedded avionics, UAV electronics, aerospace engineering India"
        />

        <meta property="og:title" content="Contact Vayuved Aerospace" />
        <meta
          property="og:description"
          content="Engineering-driven aerospace systems and unmanned platform electronics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vayuved.com/contact" />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vayuved.com/contact" />
      </Helmet>
      <div className="w-full">
        <ContactBanner />
        <ContactForm />
        <ContactAddresses />
      </div>
    </>
  );
}
