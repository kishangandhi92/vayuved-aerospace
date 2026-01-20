import { memo } from "react";

const ContactBanner = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-r from-surface to-primary text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-secondary leading-tight">
            Contact Us
          </h1>
          <p className="max-w-xl text-white/80 leading-relaxed">
            For engineering support, flight control units, embedded avionics,
            and unmanned systems integration.
          </p>
        </div>
      </section>
    </>
  );
};

export default memo(ContactBanner);
