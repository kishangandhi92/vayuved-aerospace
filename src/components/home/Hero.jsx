import { FaArrowRight } from "react-icons/fa";
import BannerImage from "../../assets/banners/hero.png";
// import BannerImage from "../../assets/banners/hero2.jpg";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <h1 className="text-4xl lg:text-5xl tracking-tight text-primary font-secondary">
          Mission-Critical Flight Control Systems Engineered for Reliability
        </h1>

        {/* <p className="mt-6 max-w-xl text-lg text-muted">
          Our flight control units are engineered for predictable system
          behaviour, stability, and repeatable performance under real-world UAV
          operating conditions.
        </p> */}

        <p className="mt-6 max-w-xl text-lg text-muted">
          Our design philosophy emphasizes clear system interfaces, robust
          control loops, and disciplined system architecture to support reliable
          drone and unmanned aerial vehicle operations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-surface"
          >
            Talk to Engineering <FaArrowRight className="ml-2" />
          </a>

          <a
            href="#docs"
            className="inline-flex items-center rounded-md border-2 border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-gray-100"
          >
            View Product Documentation
          </a>
        </div>
      </div>

      {/* Right Visual Placeholder */}
      <div className="h-[360px] rounded-xl bg-surface flex items-center justify-center">
        <img
          src={BannerImage}
          alt="System Architecture Visual"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
