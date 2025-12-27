export const products = [
  {
    id: "jta-01",
    title: "JTA-01",
    status: "Production-Ready",
    statusStyle: "success",
    emphasize: true,
    description:
      "Production-ready flight control unit based on a dual-core real-time architecture, designed for deterministic control, stability, and repeatable UAV and drone operations.",
    features: [
      "Dual-core NXP RT117x MCU for real-time deterministic control",
      "Triple-redundant IMU support for fault-tolerant operation",
      "Temperature-stabilized IMU design to reduce sensor drift",
      "Mechanically isolated IMU assembly for vibration attenuation",
      "Expanded peripheral support for complex UAV integrations",
    ],
  },
  {
    id: "jta-02",
    title: "JTA-02",
    status: "Active Development",
    statusStyle: "info",
    description:
      "Integrated flight control and onboard compute platform combining a deterministic FCU with a Raspberry Pi CM4 for AI, vision, and advanced autonomy workloads.",
    features: [
      "Deterministic flight control architecture derived from JTA-01",
      "On-board Raspberry Pi CM4 for AI, vision, and autonomy processing",
      "Tight FCU–companion integration for low-latency data exchange",
      "Wide input power support (3.3 V–18 V) for flexible UAV power architectures",
    ],
  },
  {
    id: "h7-fcu",
    title: "SAMPATHI - I",
    status: "Active Development",
    statusStyle: "info",
    description:
      "High-performance flight control unit based on STM32 H7 architecture, optimized for high-rate control, low latency, and aggressive flight profiles in FPV and interceptor-class UAVs.",
    features: [
      "STM32 H7-based real-time architecture for high-rate control loops",
      "Optimized for low-latency response and aggressive maneuvering",
      "Simplified, performance-focused design for FPV and interceptor UAVs",
      "Supports high-speed peripherals and fast sensor-to-actuator paths",
    ],
  },
  {
    id: "jta-03",
    title: "JTA-03",
    status: "Planned",
    statusStyle: "neutral",
    description:
      "Advanced flight control and onboard compute platform extending JTA-02 with dedicated real-time motor control and high-performance onboard image processing capabilities.",
    features: [
      "Integrated deterministic motor control core for precise, low-latency actuation",
      "Dedicated high-throughput image processing core for advanced vision workloads",
      "System architecture derived from JTA-02 with tightly coupled control and compute",
      "Designed for high-performance UAV platforms requiring control and perception at scale",
    ],
  },
];
