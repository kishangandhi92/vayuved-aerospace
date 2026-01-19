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
              STM32H7-Based Deterministic FCU for FPV, Racing, and Interceptor
              Drones
            </h2>

            <p className="mt-8 text-base sm:text-lg text-white/80 leading-relaxed">
              SAMPATHI-1 is a high-performance flight control unit (FCU)
              designed for FPV drones, racing platforms, and high-dynamics
              interceptor-class UAVs. Built around the STM32H7 microcontroller,
              SAMPATHI-1 prioritises low latency, deterministic control
              behaviour, and clean sensor acquisition for platforms where
              milliseconds directly impact flight performance.
            </p>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              This product page highlights the <strong> core architectural strengths and
              unique engineering features</strong> of SAMPATHI-1.
            </p>
          </div>
        </div>
      </section>

      {/*Deterministic Real-Time Control Architecture
       */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Deterministic Real-Time Control Architecture
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Consistent control timing for aggressive and high-speed flight
                profiles.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is engineered for{" "}
                <strong> deterministic real-time execution</strong> of flight
                control loops. Control tasks are scheduled to maintain
                consistent timing and minimal jitter, even under rapid throttle
                changes and high-acceleration manoeuvres.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This deterministic behaviour improves:
                <ul className="list-disc list-inside mt-2">
                  <li>PID tuning consistency</li>
                  <li>Predictable stick-to-response feel </li>
                  <li>Stable handling during aggressive flight</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is optimised for pilots and developers who demand{" "}
                <strong>repeatable control behaviour,</strong> not variable
                performance.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1  Deterministic Real-Time Control Architecture"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STM32H7-Centric Performance Design */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 STM32H7-Centric Performance Design"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                STM32H7-Centric Performance Design
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                High control-loop performance without architectural complexity.
              </h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 leverages the STM32H7 MCU to deliver {" "}
                <strong>
                  high instruction throughput and fast interrupt response
                </strong>  {" "}
                within a single-core deterministic execution model. This avoids
                unnecessary scheduling overhead and simplifies real-time control
                behaviour.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The result is:
                <ul className="list-disc list-inside mt-2">
                  <li>Faster control loop execution</li>
                  <li>Reduced timing uncertainty</li>
                  <li>Easier tuning and validation</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This approach is well suited for {" "}
                <strong>FPV and racing drones,</strong> where simplicity and
                speed outperform feature-heavy designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Integrity Focused Design

       */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Sensor Integrity Focused Design
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                Clean inertial data under vibration and propwash conditions.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is designed with a <strong>noise-aware sensor acquisition path,</strong> ensuring stable inertial measurements during:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    High-RPM motor operation
                  </li>
                  <li>Propeller-induced vibration</li>
                  <li>
                    Rapid throttle transitions
                  </li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Careful layout and timing discipline help maintain sensor data integrity, improving attitude estimation accuracy and reducing the need for excessive filtering. This directly benefits flight stability in <strong>high-dynamics UAV platforms.</strong>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Sensor Integrity Focused Design"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Rate Motor Output and ESC Compatibility */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 High-Rate Motor Output and ESC Compatibility"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                High-Rate Motor Output and ESC Compatibility
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Fast and precise motor control for responsive flight.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports high-rate motor output control, optimised for modern ESC workflows commonly used in FPV and racing ecosystems. Output timing is designed to remain consistent across channels, enabling smooth thrust transitions and predictable response.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Benefits include:
                <ul className="list-disc list-inside mt-2">
                  <li>Improved throttle resolution</li>
                  <li>
                    Reduced latency between command and thrust
                  </li>
                  <li>
                    Stable behaviour during aggressive manoeuvres
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interfaces Designed for FPV and Interceptor Builds */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
               Interfaces Designed for FPV and Interceptor Builds
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
               Only the interfaces that matter — nothing unnecessary.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 provides a <strong> focused and practical interface set </strong>commonly required in high-dynamics drone builds:
                <ul className="list-disc list-inside mt-2">
                  <li>Multiple UARTs for RC receivers, telemetry, and peripherals</li>
                  <li>SPI and I²C for sensors and expansion modules</li>
                  <li>USB for configuration, firmware update, and diagnostics</li>
                  <li>Motor output interfaces compatible with modern ESC protocols (firmware-dependent)</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This interface selection simplifies wiring, reduces integration errors, and supports fast build iteration.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Interfaces Designed for FPV and Interceptor Builds"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-Latency RC Input and Telemetry Handling */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Connector & Interface Layout"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Low-Latency RC Input and Telemetry Handling
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Fast control input processing for precision piloting.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is designed to handle <strong>modern low-latency RC input workflows,</strong> ensuring minimal delay between pilot input and actuator response. Input processing is optimised for stability under high update rates and aggressive manoeuvres.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
               This is critical for:
                <ul className="list-disc list-inside mt-2">
                  <li>
                   FPV freestyle flying
                  </li>
                  <li>Competitive racing </li>
                  <li>Interceptor-class UAV control
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Predictable Safety and Failsafe Behaviour */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Predictable Safety and Failsafe Behaviour
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
             Controlled responses when conditions deviate from normal.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports standard FCU safety mechanisms including:
                <ul className="list-disc list-inside mt-2">
                  <li>Arming checks</li>
                  <li>RC signal failsafe handling</li>
                  <li>Battery-based failsafe triggers</li>
                  <li>Controlled recovery behaviour (firmware-dependent)</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Failsafe logic is designed to behave <strong>predictably and consistently,</strong> which is essential for high-speed platforms operating in constrained environments.
              </p>
            </div>

            {/* <div className="flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 RC Input to Control Path"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Integrated Logging and Diagnostics */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Failsafe State Flow"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Integrated Logging and Diagnostics
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Flight data that accelerates tuning and development cycles.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 supports onboard logging of:
                <ul className="list-disc list-inside mt-2">
                  <li>Inertial sensor data</li>
                  <li>Control loop behaviour</li>
                  <li>Motor outputs</li>
                  <li>System events</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                These logs enable rapid diagnosis, tuning refinement, and performance validation — especially important for teams iterating builds frequently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for FPV, Racing, and Interceptor-Class UAVs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Built for FPV, Racing, and Interceptor-Class UAVs
              </h2>

              <h4 className="mt-4 text-xl font-medium text-gray-800">
                A purpose-built FCU for platforms where milliseconds matter.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
                SAMPATHI-1 is developed specifically for:
                <ul className="list-disc list-inside mt-2">
                  <li>FPV freestyle drones</li>
                  <li>Racing drones</li>
                  <li>High-dynamics interceptor-class UAV platforms</li>
                </ul>
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                It is not a general-purpose controller adapted for speed. Every design decision is guided by <strong>latency, determinism, and control fidelity.</strong>
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

      {/* Designed for Rapid Deployment and Iteration */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <img
                  src={PlaceholderImage}
                  alt="SAMPATHI-1 Architecture Comparison Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-gray-900 font-secondary">
                Designed for Rapid Deployment and Iteration
              </h2>

              <h4 className="mt-4 font-medium text-gray-800 text-xl">
                Engineered for fast builds, tuning, and redeployment.
              </h4>

              <p className="mt-4 text-gray-600 leading-relaxed">
               SAMPATHI-1 supports predictable boot behaviour, clear system feedback, and straightforward configuration workflows. This enables faster turnaround between build, test, tune, and redeploy cycles — a critical requirement for FPV and interceptor programs.
              </p>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
