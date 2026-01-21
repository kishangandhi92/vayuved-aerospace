import { Helmet } from "react-helmet-async";
import {
  SpecsCard,
  SpecsTable,
  Row,
  Pill
} from "../specifications/SpecsLayout";


const Jta01Specs = () => {
  return (
    <main>
      <Helmet>
        {/* Primary SEO */}
        <title>
          JTA-01 Specifications | Pixhawk FMU v6X-RT Flight Control Unit
        </title>

        <meta
          name="description"
          content="Detailed technical specifications of the JTA-01 flight control unit, a Pixhawk FMU v6X-RT compliant FCU engineered for deterministic real-time control, redundant sensing, and professional UAV systems."
        />

        <meta
          name="keywords"
          content="JTA-01 specifications, Pixhawk FMU v6X-RT, flight control unit specs, UAV flight controller, aerospace embedded systems, deterministic flight control, PX4 compatible FCU"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vayuved Aerospace Pvt Ltd" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.vayuved.com/products/jta-01/specifications"
        />

        {/* Open Graph / Social */}
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="JTA-01 Specifications | Pixhawk FMU v6X-RT Flight Control Unit"
        />
        <meta
          property="og:description"
          content="Explore the complete technical specifications of the JTA-01 Pixhawk FMU v6X-RT compliant flight control unit, designed for deterministic control and aerospace-grade reliability."
        />
        <meta
          property="og:url"
          content="https://www.vayuved.com/products/jta-01/specifications"
        />
        <meta property="og:image" content="https://www.vayuved.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JTA-01 Specifications | Pixhawk FMU v6X-RT FCU"
        />
        <meta
          name="twitter:description"
          content="Complete specifications of the JTA-01 flight control unit engineered for deterministic real-time UAV control and PX4 compatibility."
        />
        <meta name="twitter:image" content="https://www.vayuved.com/logo.png" />
      </Helmet>

      {/* Page Header / Banner */}
      <section className="bg-linear-to-r from-surface to-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-15 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-secondary leading-tight">
              JTA-01 Specifications
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90 font-medium">
              Pixhawk FMU v6X-RT compliant flight control unit, engineered for
              deterministic real-time control and robust sensing.
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-bg text-steel">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Specs Cards */}
          <div className="space-y-10">
            {/* Core Architecture */}
            <SpecsCard title="Core Architecture" hint="Key differentiators">
              <SpecsTable>
                <Row label="Standards Alignment">
                  Pixhawk FMU v6X-RT compliant
                </Row>
                <Row label="Processor Class">
                  Dual-core Arm Cortex-M7 + Cortex-M4 (i.MX RT1176 class)
                </Row>
                <Row label="Processing Model">
                  Deterministic real-time control with asymmetric multicore
                  separation
                </Row>
                <Row label="Sensor Reliability">
                  Triple-redundant IMU and double-redundant barometer on
                  separate buses (FMU v6X-RT class)
                </Row>
                <Row label="PX4 Ecosystem">
                  Native PX4 Autopilot support (QGroundControl compatible)
                </Row>
              </SpecsTable>
            </SpecsCard>

            {/* Inertial */}
            <SpecsCard
              title="Inertial Sensing & Navigation"
              hint="Redundancy-oriented architecture"
            >
              <SpecsTable>
                <Row label="IMU Configuration">
                  Triple-redundant IMU architecture (FMU v6X-RT class)
                </Row>
                <Row label="Barometer Configuration">
                  Double-redundant barometer architecture (FMU v6X-RT class)
                </Row>
                <Row label="Isolation Strategy">
                  Vibration-aware sensing design for stable state estimation
                  under high-frequency vibration
                </Row>
                <Row label="External Magnetometer">
                  Supported via Pixhawk-aligned GPS/compass interfaces
                </Row>
              </SpecsTable>
            </SpecsCard>

            {/* Interfaces */}
            <SpecsCard
              title="Interfaces"
              hint="Exact port counts (FMU v6X-RT class)"
            >
              <SpecsTable>
                <Row label="Serial / UART">
                  <Pill>4× General-purpose serial ports</Pill>
                  <Pill>2× GPS ports</Pill>
                  <div>
                    Includes telemetry-class ports (with flow control on 3
                    ports) and dedicated GPS connectors (full + basic).
                  </div>
                </Row>

                <Row label="CAN">
                  <Pill>3× CAN buses</Pill>
                  <div>
                    PX4 support may vary by firmware configuration; CAN is
                    commonly used for DroneCAN peripherals.
                  </div>
                </Row>

                <Row label="I²C">
                  <Pill>1× I²C port</Pill>
                  <div>
                    Used for supported external peripherals and sensors
                    (ecosystem dependent).
                  </div>
                </Row>

                <Row label="SPI (External)">
                  <Pill>1× SPI bus</Pill>
                  <Pill>2× Chip Select</Pill>
                  <Pill>2× DRDY</Pill>
                  <Pill>SYNC</Pill>
                  <Pill>RESET</Pill>
                  <div>
                    External SPI expansion interface for additional
                    sensors/payloads (SPI).
                  </div>
                </Row>

                <Row label="Ethernet">
                  <Pill>1× Ethernet port</Pill>
                  <Pill>100 Mbps</Pill>
                  <div>
                    FMU v6X-RT class supports Ethernet mission-computer
                    integration; carrier implementations may use 100Base-T1.
                  </div>
                </Row>

                <Row label="USB">
                  <Pill>USB-C</Pill>
                  <Pill>USB on JST-GH</Pill>
                  <div>
                    USB-C and JST-GH USB are parallel pin connections (not
                    independent ports).
                  </div>
                </Row>

                <Row label="RC Input">
                  RC input support (ecosystem dependent)
                </Row>

                <Row label="Debug">
                  Pixhawk debug interface class (SWD + console access)
                </Row>
              </SpecsTable>
            </SpecsCard>

            {/* Actuation */}
            <SpecsCard
              title="Actuation & Outputs"
              hint="Control output capability"
            >
              <SpecsTable>
                <Row label="PWM Outputs">
                  <Pill>12× PWM</Pill>
                  <Pill>8× DShot-capable</Pill>
                </Row>
                <Row label="Output Timing">
                  Designed for consistent motor output timing under vibration
                  and system load
                </Row>
              </SpecsTable>
            </SpecsCard>

            {/* Power */}
            <SpecsCard
              title="Power"
              hint="Integration-ready power architecture"
            >
              <SpecsTable>
                <Row label="Power Inputs">
                  Dual power input ports with SMBus (FMU v6X-RT class)
                </Row>
                <Row label="Power Domains">
                  Segregated sensing and compute domains (architecture
                  dependent)
                </Row>
              </SpecsTable>
            </SpecsCard>

            {/* Mechanical */}
            <SpecsCard title="Mechanical" hint="Ecosystem alignment">
              <SpecsTable>
                <Row label="Form Factor">
                  Pixhawk FMU v6X-RT ecosystem alignment
                </Row>
                <Row label="Mounting">
                  Vibration-isolated mounting recommended
                </Row>
              </SpecsTable>
            </SpecsCard>
          </div>

          {/* Footdiv */}
          <div className="mt-16 bg-secondary p-6 rounded-lg text-sm text-white leading-relaxed">
            <p>
              <strong>Notes:</strong> Some specifications depend on firmware
              configuration and product revision. Integration performance
              depends on airframe design, vibration management, and system
              tuning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jta01Specs;
