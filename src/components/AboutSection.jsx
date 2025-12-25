export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-secondary text-4xl text-white leading-tight">
          About Vayuved Aerospace
        </h2>

        {/* Content */}
        <div className="mt-8 max-w-4xl space-y-6">
          <p className="font-primary text-lg text-white/80 leading-relaxed">
            Vayuved Aerospace Pvt Ltd is an engineering-driven aerospace company
            focused on building stable, deterministic flight control systems for
            unmanned aerial vehicles. Designed and developed in Hyderabad,
            India, our systems prioritize reliability, safety, and long-term
            operational stability.
          </p>

          <p className="font-primary text-lg text-white/80 leading-relaxed">
            Our team combines deep expertise in embedded systems, control
            theory, and aerospace engineering to deliver mission-critical
            solutions that meet the highest standards of performance and
            dependability.
          </p>
        </div>
      </div>
    </section>
  );
}
