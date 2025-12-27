import FlightControlArchitectureIcon from "../../assets/icons/air-traffic-controller.png";
import RealTimeEmbeddedSystemsIcon from "../../assets/icons/real-time-embedded-systems.png";
import SensorIntegrationIcon from "../../assets/icons/sensor-integration.png";
import ControlActuationSystemsIcon from "../../assets/icons/control-actuation-systems.png";
import OnboardComputeVisionIcon from "../../assets/icons/onboard-compute-vision.png";
import HardwareSystemIntegrationIcon from "../../assets/icons/hardware-system-integration.png";

const capabilities = [
  {
    title: "Flight Control Architecture",
    icon: FlightControlArchitectureIcon,
    description:
      "Design of deterministic flight control architectures with clear task separation, timing guarantees, and well-defined system boundaries.",
    bullets: [
      "Control loop structuring",
      "Fault-aware system design",
      "Modular architecture planning",
    ],
  },
  {
    title: "Real-time Embedded Systems",
    icon: RealTimeEmbeddedSystemsIcon,
    description:
      "Development of real-time embedded systems focused on predictable execution, low latency, and stable operation under dynamic UAV conditions.",
    bullets: [
      "Bare-metal and RTOS systems",
      "High-rate control execution",
      "Timing and latency analysis",
    ],
  },
  {
    title: "Sensor Integration & Estimation",
    icon: SensorIntegrationIcon,
    description:
      "Integration of inertial, environmental, and navigation sensors with attention to calibration, synchronization, and sensor fusion readiness.",
    bullets: [
      "Multi-IMU architectures",
      "Timing alignment",
      "Noise and drift mitigation",
    ],
  },
  {
    title: "Control & Actuation Systems",
    icon: ControlActuationSystemsIcon,
    description:
      "Design of control algorithms and actuation paths with emphasis on deterministic behavior, precise timing, and stable motor response.",
    bullets: [
      "High-rate motor control",
      "Deterministic actuation paths",
      "Control-loop optimization",
    ],
  },
  {
    title: "Onboard Compute & Vision",
    icon: OnboardComputeVisionIcon,
    description:
      "System-level integration of onboard compute for vision, perception, and autonomy workloads alongside real-time flight control.",
    bullets: [
      "Companion computer integration",
      "Camera and vision pipelines",
      "Control–compute interfacing",
    ],
  },
  {
    title: "Hardware & System Integration",
    icon: HardwareSystemIntegrationIcon,
    description:
      "End-to-end hardware design covering schematics, layout, power architecture, thermal considerations, and mechanical integration.",
    bullets: [
      "Power domain design",
      "Thermal and vibration considerations",
      "Board-level integration",
    ],
  },
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

          <p className="mt-4 text-white/70 leading-relaxed">
            Core engineering competencies behind our flight control unit
            platforms
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
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
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <img
                  src={capability.icon}
                  alt={capability.title}
                  className=""
                />
              </div>

              {/* Title */}
              <h3 className="text-lg text-white font-secondary leading-snug">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {capability.description}
              </p>

              {/* Optional Bullets */}
              {capability.bullets?.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-white/65 list-disc list-inside">
                  {capability.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
