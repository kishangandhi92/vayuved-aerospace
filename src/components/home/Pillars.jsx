import SystemIcon from "../../assets/icons/system.png";
import SensorIcon from "../../assets/icons/sensors.png";
import PowerIcon from "../../assets/icons/power.png";
import EnvironmentIcon from "../../assets/icons/environment.png";

export default function Pillars() {
  const pillars = [
    {
      title: "Deterministic Control Architecture",
      icon: SystemIcon,
      description:
        "Predictable, real-time control loops with guaranteed response times for mission-critical operations.",
    },
    {
      title: "Redundant Sensor Design",
      icon: SensorIcon,
      description:
        "Multi-sensor fusion with automatic failover mechanisms ensuring continuous system operation.",
    },
    {
      title: "Wide Power Input Support",
      icon: PowerIcon,
      description:
        "Operates reliably across extended voltage ranges for diverse platform integration requirements.",
    },
    {
      title: "Built for Harsh Environments",
      icon: EnvironmentIcon,
      description:
        "Engineered for extreme temperatures, vibration, and electromagnetic interference conditions.",
    },
  ];

  return (
    <section id="engineering" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl text-ink">
            Core Engineering Pillars
          </h2>

          <p className="mt-4 text-lg text-muted font-primary">
            Built on principles of reliability, redundancy, and operational
            stability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300
  "
            >
              {/* Icon Placeholder */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center">
                <img src={pillar.icon} alt={pillar.title} />
              </div>

              <h3 className="font-secondary text-lg text-ink">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted font-primary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
