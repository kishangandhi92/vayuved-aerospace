export default function Team() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-secondary text-4xl leading-tight">
          Our Team
        </h2>

        {/* Content */}
        <div className="mt-8 max-w-4xl space-y-6">
          <p className=" text-lg leading-relaxed">
            Vayuved Aerospace is led by engineers with <strong> hands-on experience in
            embedded systems, real-time software, and mission-critical hardware
            design.</strong>
          </p>

          <p className=" text-lg leading-relaxed">
            The company operates with a <strong>small, focused technical team,</strong>
            collaborating with domain experts, academic institutions, and
            industry partners where required.
          </p>
        </div>
      </div>
    </section>
  );
}
