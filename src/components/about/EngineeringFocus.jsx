import EmbeddedIcon from "../../assets/icons/embedded.png";
import SensorIcon from "../../assets/icons/sensors.png";
import FlightControl from "../../assets/icons/air-traffic-controller.png";
import SafetySystem from "../../assets/icons/security-system.png";

export default function EngineeringFocus() {
  const operations = [
    {
      title: "Real-time embedded systems",
      icon: EmbeddedIcon,
    },
    {
      title: "Flight control and navigation electronics",
      icon: FlightControl,
    },
    {
      title: "Sensor integrity and vibration management",
      icon: SensorIcon,
    },
    {
      title: "Safety-critical system design",
      icon: SafetySystem,
    },
  ];

  return (
    <section id="engineering" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl text-ink">
            Our Engineering Focus
          </h2>

          <p className="mt-4 text-lg font-primary">
            Vayuved Aerospace operates at the intersection of:
          </p>
        </div>

        {/* Operations Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {operations.map((item, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300
  "
            >
              {/* Icon Placeholder */}
              <div className="mb-6 flex h-15 w-15 items-center justify-center">
                <img src={item.icon} alt={item.title} className="filter brightness-0" />
              </div>

              <h3 className="font-secondary font-medium text-lg text-ink">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <p className="">
            We approach every product as a <strong> system,</strong> not a collection of
            components. Design decisions are driven by <strong>predictability,
            repeatability, and long-term maintainability,</strong> especially for users
            operating in demanding environments.
          </p>
        </div>
      </div>
    </section>
  );
}
