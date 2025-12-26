import { FaArrowRight } from "react-icons/fa";
import { SlEnvolope, SlLocationPin } from "react-icons/sl";
export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="font-secondary text-4xl text-black leading-tight">
            Engage Directly with Our Engineering Team
          </h2>

          <p className="mt-6 text-lg text-steel font-primary">
            Have technical questions or integration requirements? Reach out to
            our engineering team for detailed discussions about your specific
            needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {/* Email Card */}
          <div className="bg-white rounded-xl border border-border p-6 transition hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg text-black">
                {/* Email Icon */}
                <SlEnvolope className="w-7 h-7" />
              </div>

              <div>
                <p className="font-secondary text-lg text-black">Email</p>
                <p className="mt-1 text-steel font-primary">
                  <a
                    href="mailto:engineering@vayuved.com"
                    className="text-primary"
                  >
                    engineering@vayuved.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl border border-border p-6 transition hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg text-black">
                {/* Location Icon */}
                <SlLocationPin className="w-7 h-7" />
              </div>

              <div>
                <p className="font-secondary text-lg text-black">Location</p>
                <p className="mt-1 text-steel font-primary">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="mailto:engineering@vayuved.com"
            className="
              inline-flex items-center gap-2
              bg-surface text-white
              px-6 py-3
              rounded-lg
              font-primary
              transition
              hover:bg-black/90
            "
          >
            Talk to Engineering
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
