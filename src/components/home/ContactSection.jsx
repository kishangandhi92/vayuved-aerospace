import { FaArrowRight } from "react-icons/fa";
import { SlEnvolope, SlLocationPin } from "react-icons/sl";
export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
        {/* Heading */}
        <div className="max-w-3xl col-span-2">
          <h2 className="font-secondary text-4xl md:max-w-xl text-black leading-tight">
            Engage Directly with Our Engineering Team
          </h2>

          <p className="mt-6 text-lg text-steel  md:max-w-xl font-primary">
            Have technical questions or integration requirements? Reach out to
            our engineering team for detailed discussions about your specific
            needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="">
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

          {/* CTA */}
        {/* <div className="mt-5">
          <a
            href="mailto:engineering@vayuved.com"
            className="
              inline-flex items-center gap-2
              bg-primary text-white
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
        </div> */}

        </div>

        
      </div>
    </section>
  );
}
