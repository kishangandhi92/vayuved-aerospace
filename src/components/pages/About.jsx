import AboutIntro from "../about/AboutIntro";
import EngineeringFocus from "../about/EngineeringFocus";
import { Helmet } from "react-helmet-async";
import MissionVision from "../about/MissionVision";
import Team from "../about/Team";
import Manufacturing from "../about/Manufacturing";
import WhyUs from "../about/WhyUs";

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
