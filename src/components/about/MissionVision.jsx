import MissionIcon from "../../assets/icons/mission.png"
import VisionIcon from "../../assets/icons/vision.png";

export default function MissionVision() {
  return (
    <section className="bg-surface py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-secondary text-white">
            Mission & Vision
          </h2>

         
        </div>

        {/* Capability Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
            <div
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
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                <img
                  src={VisionIcon}
                  alt={'Vision'}
                  className=""
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl text-white font-secondary leading-snug">
                Vision
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
               To build dependable aerospace electronics in India that prioritise correctness, determinism, and engineering discipline over short-term innovation cycles.
              </p>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
               Our vision is to contribute to an ecosystem where <strong>Indian-designed avionics and flight control systems</strong> are trusted for professional, institutional, and defence-oriented unmanned platforms.
              </p>

            </div>

            <div
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
              <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                <img
                  src={MissionIcon}
                  alt={'Mission'}
                  className=""
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl text-white font-secondary leading-snug">
                Mission
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
              To design and deliver flight control and avionics systems that engineers can deploy with confidence, validate thoroughly, and operate predictably over time.
              </p>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
               We pursue this mission by:
              </p>

                <ul className="mt-1 space-y-2 text-sm text-white/65 list-disc list-inside">
                  <li>Adhering to established hardware and interface standards</li>
                  <li>Focusing on deterministic real-time behaviour</li>
                  <li>Solving problems at the hardware and system level</li>
                  <li>Providing clear documentation and integration guidance</li>
                </ul>
            </div>
         
        </div>
      </div>
    </section>
  );
}
