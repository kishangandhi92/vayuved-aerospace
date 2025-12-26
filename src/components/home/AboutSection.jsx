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
            Vayuved Aerospace is an engineering-driven aerospace company focused
            on the design and manufacturing of deterministic flight control
            units for unmanned aerial vehicles. Our work centers on building
            stable, predictable, and repeatable flight control systems for
            professional UAV platforms operating under demanding conditions.
          </p>

          <p className="font-primary text-lg text-white/80 leading-relaxed">
            Our engineering approach combines real-time embedded systems,
            control theory, and system-level architecture to develop flight
            control platforms that prioritize reliability, safety, and long-term
            operational stability. We work closely with UAV builders, research
            teams, and system integrators to deliver flight control solutions
            designed for serious, real-world deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
