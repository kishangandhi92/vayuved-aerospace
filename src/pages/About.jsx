import AboutIntro from "../components/about/AboutIntro";
import EngineeringFocus from "../components/about/EngineeringFocus";
import { Helmet } from "react-helmet-async";
import MissionVision from "../components/about/MissionVision";
import Team from "../components/about/Team";
import Manufacturing from "../components/about/Manufacturing";
import WhyUs from "../components/about/WhyUs";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
         About Vayuved Aersopace Pvt Ltd
        </title>

        <meta
          name="description"
          content="Vayuved Aerospace Pvt Ltd is an Indian aerospace engineering company focused on the design and development of flight control units, embedded avionics, and real-time control systems for unmanned platforms."
        />

        <meta property="og:title" content="About Vayuved Aerospace Pvt. Ltd." />
        <meta
          property="og:description"
          content="Vayuved Aerospace Pvt Ltd is an Indian aerospace engineering company focused on the design and development of flight control units, embedded avionics, and real-time control systems for unmanned platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vayuved.com/about" />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vayuved.com/about" />
      </Helmet>
      <AboutIntro />
      <EngineeringFocus />
      <MissionVision />
      <Team />
      <Manufacturing />
      <WhyUs />
    </>
  );
}
