import EngineeringMind from "../../assets/icons/engineering-mind.png";
import ArchitectureIcon from "../../assets/icons/architecture.png";
import SystemDesign from "../../assets/icons/system-design.png";
import ReliableIcon from "../../assets/icons/reliable.png";
import FrameIcon from "../../assets/icons/frame.png";

export default function WhyUs() {
  const operations = [
    {
      title: "Engineering-first mindset",
      icon: EngineeringMind,
    },
    {
      title: "Transparent system design",
      icon: SystemDesign,
    },
    {
      title: "Standards-aligned architectures",
      icon: ArchitectureIcon,
    },
    {
      title: "Focus on reliability over novelty",
      icon: ReliableIcon,
    },
    {
      title: "Clear boundaries between product capability and experimentation",
      icon: FrameIcon,
    },
  ];

  return (
    <section id="engineering" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-3xl lg:text-4xl text-ink">
            Why Vayuved Aerospace
          </h2>
        </div>

        {/* Operations Grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {operations.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-secondary/90 border border-border rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300 hover:bg-surface"
            >
              {/* Icon */}
              <div className="mb-6 flex h-15 w-15 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="filter invert brightness-0"
                />
              </div>

              <h3 className="font-secondary font-regular text-lg text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <p className="">
            Vayuved Aerospace exists to serve users who value{" "}
            <strong>
              {" "}
              engineering discipline, predictable behaviour, and long-term
              system ownership.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
