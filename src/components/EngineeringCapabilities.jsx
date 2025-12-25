const capabilities = [
  "Custom FCU Design & Manufacturing",
  "Real-time Embedded Systems",
  "Hardware–Software Co-Design",
  "Sensor Fusion & Control Systems",
  "EMI / Vibration-Aware Design Practices",
  "System Integration & Testing",
];

export default function EngineeringCapabilities() {
  return (
    <section className="bg-surface py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-secondary text-white">
            Engineering Capabilities
          </h2>

          <p className="mt-4 text-steel text-white/70 leading-relaxed">
            Comprehensive in-house expertise spanning design, manufacturing, and
            system integration.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="
                bg-secondary
                rounded-xl
                p-8
                border border-white/5
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-white/10
                hover:bg-surface-soft/80
              "
            >
              {/* Icon Placeholder */}
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded border border-white/40" />
              </div>

              <h3 className="text-lg text-white font-secondary leading-snug">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
