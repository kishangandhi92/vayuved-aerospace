import PlaceholderImage from "../assets/placeholder.png";
import Compliant_Flight_Control_Architecture from "../assets/products/Compliant_Flight_Control_Architecture.png";
import Deterministic_Real_Time_Multicore_Processing from "../assets/products/Deterministic_Real-Time_Multicore_Processing.jpg";
import Redundant_Inertial_Sensor_Architecture from "../assets/products/Redundant_Inertial_Sensor_Architecture.jpg";
import { Helmet } from "react-helmet-async";

const JTA01 = () => {
  return (
    <main>
      <Helmet>
        <title>
          JTA-01 Flight Controller | Pixhawk FMU v6x RT Compatible FCU
        </title>

        <meta
          name="title"
          content="JTA-01 Flight Controller | Pixhawk FMU v6x RT Compatible FCU"
        />

        <meta
          name="description"
          content="JTA-01 is a Pixhawk FMU v6x RT–compatible flight control unit designed for professional drones, UAVs, VTOL, and autonomous platforms."
        />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vayuved.com/products/jta-01" />
      </Helmet>
      {/* Page Header / Banner */}
      <section className="bg-linear-to-r from-surface to-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-15 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-secondary leading-tight">
              JTA-01 Flight Control Unit
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90 font-medium">
              Pixhawk FMU v6x RT–Compatible Professional Drone Flight Controller
            </h2>

            <p className="mt-8 text-base sm:text-lg text-white/80 leading-relaxed">
              JTA-01 is a professional-grade flight control unit (FCU) designed
              in full compliance with Pixhawk FMU v6x RT standards. It is
              engineered for reliable, deterministic flight control across
              multirotor, fixed-wing, VTOL, and unmanned ground or marine
              platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Standards-Compliant Flight Control Architecture */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Standards-Compliant Flight Control Architecture
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                A Pixhawk FMU v6x RT–compatible flight control unit built for
                interoperability and long-term support.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 follows the Pixhawk FMU v6x RT hardware architecture,
                ensuring compatibility with established autopilot firmware,
                ground control software, and Pixhawk-standard peripherals. This
                standards-based design allows system integrators to deploy
                JTA-01 without proprietary dependencies or workflow changes.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The result is predictable system behaviour, mature software
                tooling, and reduced integration risk.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                <img
                  src={Compliant_Flight_Control_Architecture}
                  alt="JTA-01 Standards & Architecture Overview"
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-out hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Real-Time Multicore Processing */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                <img
                  src={Deterministic_Real_Time_Multicore_Processing}
                  alt="JTA-01 Deterministic Real-Time Multicore Processing"
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-out hover:-translate-y-1"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Deterministic Real-Time Multicore Processing
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Real-time flight control where timing accuracy matters more than
                raw compute.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 is designed for deterministic real-time flight control.
                Time-critical control loops execute with consistent latency,
                isolated from non-critical system tasks. This architecture
                ensures stable attitude control, consistent motor output timing,
                and reliable behaviour under vibration and load.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The processing design prioritizes flight stability and safety
                over general-purpose performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redundant Inertial Sensor Architecture */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Redundant Inertial Sensor Architecture
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                IMU redundancy designed for fault detection and operational
                reliability.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 integrates multiple inertial measurement units (IMUs)
                arranged to reduce common-mode failures. Independent sensor
                buses and careful physical placement allow the flight stack to
                detect inconsistencies and maintain stable state estimation.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This approach improves robustness during high-vibration flight,
                electrically noisy environments, and extended missions.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                <img
                  src={Redundant_Inertial_Sensor_Architecture}
                  alt="JTA-01 Redundant Inertial Sensor Architecture"
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-out hover:-translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Integrity Power Architecture */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="JTA-01 Power Domain Architecture"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                High-Integrity Power Architecture
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Power domain separation engineered for clean sensing and stable
                control.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 implements a Pixhawk-style power architecture with
                separate internal domains for logic, sensors, and I/O. This
                minimizes noise coupling and improves resilience against voltage
                transients and power dips.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Support for voltage and current monitoring enables battery
                failsafes and power-aware flight behaviour, which are critical
                for safety-critical UAV operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Motor and Actuator Outputs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Deterministic Motor and Actuator Outputs
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Precise motor and actuator timing across all supported vehicle
                types.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 provides multiple high-rate motor and actuator outputs
                designed for deterministic timing. The output architecture
                supports traditional PWM as well as modern digital ESC
                protocols, depending on firmware configuration.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This makes JTA-01 suitable for multirotors, fixed-wing aircraft,
                VTOL platforms, and unmanned ground or marine vehicles.
              </p>
            </div>

            {/* <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="JTA-01 Motor Output Timing Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Robust Communication Interfaces */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="JTA-01 Connector Layout Visualization"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Robust Communication Interfaces
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Flight controller connectivity designed for real-world UAV
                systems.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 offers a comprehensive set of communication interfaces,
                including multiple UARTs for GPS, telemetry, and companion
                computers; CAN interfaces for peripheral networking; and I²C and
                SPI for auxiliary sensors. A USB interface supports
                configuration, firmware updates, and diagnostics.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Connector placement and signal routing are optimized to reduce
                EMI and simplify wiring in complex airframes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Native CAN and DroneCAN Support */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Native CAN and DroneCAN Support
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                CAN-based peripheral networking for noise-resistant UAV
                architectures.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 is designed for native use with DroneCAN peripherals such
                as CAN ESCs, CAN GPS modules, and CAN power sensors. CAN-based
                communication improves reliability in high-current systems and
                reduces wiring complexity compared to parallel PWM
                architectures.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This makes JTA-01 well-suited for larger platforms and
                high-power propulsion systems.
              </p>
            </div>

            {/* <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 CAN Network Topology"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Navigation-Ready Hardware Design */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 GPS and Compass Integration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Navigation-Ready Hardware Design
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Reliable navigation starts with hardware designed for
                positioning accuracy.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 includes a dedicated GPS interface aligned with Pixhawk
                pinout conventions and supports external compass integration.
                Signal routing and layout are optimized for stable heading
                estimation and accurate position tracking.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The hardware is designed to support position-hold, autonomous
                missions, and return-to-home functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Failsafe-First Design Philosophy */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Safety and Failsafe-First Design Philosophy
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                A flight control unit designed to prevent unsafe flight
                conditions.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 enforces arming checks and supports comprehensive
                failsafe mechanisms, including RC failsafe, battery failsafe,
                geofencing, return-to-home, and emergency motor stop logic.
                These features are designed to respond predictably to fault
                conditions rather than masking them.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Safety is treated as a core system function, not an optional
                feature.
              </p>
            </div>
{/* 
            <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Safety and Failsafe Flow Diagram"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Integrated Logging and Diagnostics */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Flight Log Analysis View"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Integrated Logging and Diagnostics
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Every flight produces actionable diagnostic data.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 provides onboard logging of sensor data, actuator
                outputs, power metrics, and system events. Logs are essential
                for first-flight validation, troubleshooting, performance
                tuning, and long-term reliability analysis.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Logging is always available and tightly integrated with
                supported ground control tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ground Control Software Compatibility */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Ground Control Software Compatibility
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Compatible with industry-standard UAV ground control software.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 works with Pixhawk-compatible ground control software for
                firmware flashing, calibration, mission planning, real-time
                monitoring, and log retrieval. No proprietary or closed software
                is required for normal operation.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This simplifies deployment, training, and long-term maintenance.
              </p>
            </div>

            {/* <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Ground Control Software Interface"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Mechanical and Integration Compatibility */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Mounting and Dimensions Render"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Mechanical and Integration Compatibility
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Pixhawk-standard form factor for straightforward airframe
                integration.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 uses a Pixhawk-standard mounting footprint and is
                intended for vibration-isolated installation. Clear orientation
                markings and consistent connector placement reduce installation
                errors and simplify field servicing.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The mechanical design supports both commercial drone frames and
                custom UAV enclosures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One Flight Controller for Multiple Platforms */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                One Flight Controller for Multiple Platforms
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                A single FCU architecture scalable across unmanned platforms.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 can be configured via firmware to support multirotor,
                fixed-wing aircraft, VTOL systems, and unmanned ground or marine
                vehicles. This reduces hardware variation and simplifies
                fleet-level support and maintenance.
              </p>
            </div>

            {/* <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Multi-Vehicle Platform Illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Designed for Field Deployment and Maintenance */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <img
                src={PlaceholderImage}
                alt="JTA-01 Field Deployment Scenario"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Designed for Field Deployment and Maintenance
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Engineered for repeatable deployment, testing, and long-term
                operation.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                JTA-01 emphasizes predictable boot behaviour, clear LED and
                buzzer status indicators, safe firmware recovery, and structured
                troubleshooting through logs. These features make it suitable
                for evaluation programs, operational deployments, and sustained
                field use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JTA01;
