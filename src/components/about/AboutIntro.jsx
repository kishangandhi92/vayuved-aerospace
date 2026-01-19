import AboutBg from "../../assets/banners/about.jpg";

const AboutIntro = () => {
  return (
    <section className="relative isolate">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBg})` }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="">
          {/* Eyebrow */}
          <p className="text-sm font-semibold tracking-widest inline-block text-white rounded-full uppercase">
            About
          </p>

          {/* Company Name */}
          <h1 className="mt-4 text-4xl lg:text-5xl text-white font-secondary">
            Vayuved Aerospace Pvt. Ltd.
          </h1>

          {/* Content */}
          <div className="mt-10 space-y-8 text-lg text-gray-200 leading-relaxed">
            <p>
              Vayuved Aerospace Pvt. Ltd. is an{" "}
              <strong className="text-white">
                Indian aerospace engineering company </strong> focused on the <strong className="text-white"> design and
                development of flight control units, embedded avionics, and
                real-time control systems for unmanned platforms.
              </strong>
            </p>

            <p>
              The company was formed with a clear objective: to build{" "}
              <strong className="text-white">
                reliable, transparent, and standards-aligned drone electronics
              </strong>{" "}
              that engineers can trust in real operating environments. Vayuved
              Aerospace concentrates on{" "}
              <strong className="text-white">
                hardware-first stability, deterministic control behaviour, and
                system-level reliability
              </strong>
              , rather than feature-driven experimentation.
            </p>

            <p>
              Our work spans{" "}
              <strong className="text-white">
                professional flight control units, high-dynamics controllers for
                FPV and interceptor platforms, and supporting software and
                documentation
              </strong>{" "}
              required for integration, validation, and long-term operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
