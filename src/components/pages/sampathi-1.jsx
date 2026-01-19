import PlaceholderImage from "../../assets/placeholder.png";
import { Helmet } from "react-helmet-async";
export default function SAMPATHI1() {
  return (
    <main>
      <Helmet>
        <title>
          SAMPATHI-1 Flight Controller | STM32H7 FCU for FPV & Interceptor
          Drones
        </title>

        <meta
          name="description"
          content="SAMPATHI-1 is an STM32H7-based deterministic flight control unit designed for FPV, racing, and interceptor-class drones requiring low latency and fast control response."
        />

        {/* Optional but recommended */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vayuved.com/products/sampathi-1" />
      </Helmet>

      {/* Page Header / Banner */}
      <section className="bg-linear-to-r from-surface to-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-15 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-secondary leading-tight">
              SAMPATHI-1 Flight Control Unit
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90 font-medium">
              STM32H7-Based Deterministic FCU for FPV, Racing, and
              Interceptor-Class Drones
            </h2>

            <p className="mt-8 text-base sm:text-lg text-white/80 leading-relaxed">
              SAMPATHI-1 is a high-performance flight control unit (FCU)
              developed using the STM32H7 microcontroller architecture as a
              deterministic, cost-effective alternative to high-end RT-class
              FCUs.
            </p>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              It is specifically engineered for FPV drones, racing platforms,
              and interceptor-class UAVs where low latency, fast control
              response, and timing determinism are critical.
            </p>
          </div>
        </div>
      </section>

      {/* STM32H7-Based FCU Architecture (ST Alternative to RT-Class Controllers)
       */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                STM32H7-Based FCU Architecture{" "}
                <span className="text-2xl">
                  (ST Alternative to RT-Class Controllers)
                </span>
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                An STM32H7 flight controller designed as a practical alternative
                to RT-class FCUs.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is developed as part of the ST alternative to RT1176
                strategy, using the STM32H7 MCU to deliver high control-loop
                rates and predictable real-time behavior without the complexity
                and cost overhead of dual-core RT-class processors.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The architecture focuses on:
                <ul className="list-disc list-inside mt-2">
                  <li>Single-MCU deterministic execution</li>
                  <li>Reduced software and scheduling complexity</li>
                  <li>Easier tuning and validation for high-dynamics flight</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This makes SAMPATHI-1 well-suited for FPV and interceptor builds
                where{" "}
                <strong>
                  reaction time matters more than heterogeneous compute.
                </strong>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 STM32H7 FCU Architecture Diagram"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Real-Time Control for High-Dynamics Flight */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Control Loop Timing / Jitter Comparison"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Deterministic Real-Time Control for High-Dynamics Flight
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Consistent loop timing for aggressive manoeuvres and repeatable
                tuning.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is designed to run stable, high-frequency control
                loops with minimal jitter. Deterministic scheduling ensures
                that:
                <ul className="list-disc list-inside mt-2">
                  <li>Single-MCU deterministic execution</li>
                  <li>Reduced software and scheduling complexity</li>
                  <li>Easier tuning and validation for high-dynamics flight</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Unlike feature-heavy FCUs, SAMPATHI-1 prioritises
                <strong> timing discipline over software bloat,</strong>{" "}
                resulting in cleaner flight behaviour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Optimised for FPV, Racing, and Interceptor Drones

       */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Architecture Optimised for FPV, Racing, and Interceptor Drones
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Purpose-built for speed, not generic mission profiles.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is not a repurposed industrial FCU. Its architecture
                is tailored for:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    FPV freestyle (fast recovery, smooth throttle response)
                  </li>
                  <li>Racing drones (low latency, tight control authority)</li>
                  <li>
                    Interceptor-class UAVs (rapid response, deterministic
                    behaviour)
                  </li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Design decisions prioritise{" "}
                <strong>
                  {" "}
                  control fidelity, fast state estimation, and minimal latency
                </strong>{" "}
                rather than peripheral overload.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 FPV / Racing / Interceptor Use Case Render"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Rate Sensor Path and Noise-Aware Layout */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 IMU Placement & Noise Isolation"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                High-Rate Sensor Path and Noise-Aware Layout
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Sensor data integrity under vibration and propwash conditions.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                For high-speed platforms, IMU performance under vibration is
                critical. SAMPATHI-1 is developed with:
                <ul className="list-disc list-inside mt-2">
                  <li>A high-rate inertial sensor acquisition path</li>
                  <li>
                    Layout practices aimed at reducing electrical and mechanical
                    noise coupling
                  </li>
                  <li>
                    Stable sensor timing aligned with control loop execution
                  </li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This results in <strong>cleaner attitude estimation</strong> and
                fewer tuning anomalies during aggressive flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motor Output Precision and Fast ESC Response */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Motor Output Precision and Fast ESC Response
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Motor outputs tuned for fast thrust changes and predictable
                response.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports precise motor and actuator output timing,
                suitable for modern ESC workflows used in FPV and racing
                ecosystems. The emphasis is on:
                <ul className="list-disc list-inside mt-2">
                  <li>Low-latency output updates</li>
                  <li>Consistent timing across channels</li>
                  <li>Stable response during rapid stick inputs</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This improves throttle resolution, “locked-in” feel, and overall
                pilot confidence.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Motor Output Timing Diagram"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interfaces Designed for Real FPV and Interceptor Builds */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Connector & Interface Layout"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Interfaces Designed for Real FPV and Interceptor Builds
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Sensor data integrity under vibration and propwash conditions.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 provides a focused set of interfaces commonly
                required in FPV and high-dynamics UAVs:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    {" "}
                    Multiple UARTs for RC receiver, telemetry, peripherals, and
                    companion systems{" "}
                  </li>
                  <li> SPI / I²C for sensors and expansion </li>
                  <li>
                    {" "}
                    USB for configuration, firmware update, and diagnostics{" "}
                  </li>
                  <li>
                    {" "}
                    Motor output interfaces suitable for modern ESC protocols
                    (firmware-dependent)
                  </li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The interface mix avoids unnecessary complexity while supporting
                real-world builds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Low-Latency RC Input and Telemetry Handling */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Low-Latency RC Input and Telemetry Handling
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Fast control input processing for responsive piloting.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is designed to handle modern RC receiver workflows
                used in FPV and racing drones, with emphasis on:
                <ul className="list-disc list-inside mt-2">
                  <li>Low input latency</li>
                  <li>Predictable input-to-output mapping</li>
                  <li>Stable link behaviour under aggressive manoeuvres</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This is essential for interceptor-class platforms where{" "}
                <strong>reaction time defines mission success.</strong>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 RC Input to Control Path"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability and Predictable Failsafe Behaviour */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Failsafe State Flow"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Reliability and Predictable Failsafe Behaviour
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Controlled outcomes under signal or power loss conditions.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports standard FCU safety mechanisms including:
                <ul className="list-disc list-inside mt-2">
                  <li>Arming checks</li>
                  <li>RC failsafe handling</li>
                  <li>Battery-based failsafe triggers</li>
                  <li>Controlled recovery behaviours (firmware-dependent)</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Failsafes are designed to behave predictably, which is critical
                for high-speed platforms operating in constrained environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logging and Diagnostics for Rapid Iteration */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Logging and Diagnostics for Rapid Iteration
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Fast build–test–tune cycles enabled by actionable flight data.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports onboard logging and diagnostic workflows
                that allow developers and pilots to:
                <ul className="list-disc list-inside mt-2">
                  <li>Analyse vibration and noise</li>
                  <li>Validate loop stability</li>
                  <li>Identify power or timing anomalies</li>
                  <li>Iterate tuning quickly</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This is especially valuable for FPV teams and interceptor
                development programs.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Flight Log Analysis"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed as an Alternative to Commercial STM32H7 FCUs */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Architecture Comparison Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Designed as an Alternative to Commercial STM32H7 FCUs
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Open, engineer-driven alternative to closed STM32H7 flight
                controllers.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is positioned as a transparent, engineer-controlled
                STM32H7 FCU, avoiding the limitations of closed commercial H7
                flight controllers. The design philosophy emphasises:
                <ul className="list-disc list-inside mt-2">
                  <li>Clear architecture</li>
                  <li>Predictable behaviour</li>
                  <li>Ease of validation and customisation</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This makes SAMPATHI-1 suitable for teams that need{" "}
                <strong>control over their flight stack,</strong> not just a
                black-box solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for FPV, Racing, and Interceptor Programs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Built for FPV, Racing, and Interceptor Programs
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                A focused FCU for platforms where milliseconds matter.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is being developed for:
                <ul className="list-disc list-inside mt-2">
                  <li>FPV freestyle and racing drones</li>
                  <li>High-speed interceptor UAVs</li>
                  <li>
                    Experimental and development programs requiring
                    deterministic control
                  </li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                It is not intended to be everything — it is intended to be{" "}
                <strong>fast, stable, and predictable.</strong>
              </p>
            </div>

            {/* <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Flight Log Analysis"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
