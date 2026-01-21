import { FiExternalLink } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function DocumentationSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="font-secondary text-4xl text-ink">
            Technical Documentation
          </h2>

          <p className="mt-6 max-w-xl font-primary text-lg text-steel leading-relaxed">
            Comprehensive product documentation, integration guides, and system
            architecture notes. Access detailed specifications, API references,
            and implementation examples for seamless integration with your
            platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
            target="_blank"
              href="https://docs.vayuved.com/category/product---jta-01"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-primary text-sm hover:bg-ink/90 transition"
            >
              <IoDocumentTextOutline size={18} />
              Open Documentation
            </a>

            {/* <a
              href="/docs"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-white"
            >
              <FiExternalLink size={18} />
              Product Wiki
            </a> */}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 space-y-6">
          <DocItem
            icon={<IoDocumentTextOutline size={20} />}
            title="Integration Guides"
            description="Step-by-step instructions for integrating FCU with your platform."
           
          />

          <DocItem
            icon={<IoDocumentTextOutline size={20} />}
            title="System Architecture"
            description="Detailed technical specifications and system design documentation."
          
          />

          <DocItem
            icon={<IoDocumentTextOutline size={20} />}
            title="API Reference"
            description="Complete API documentation for software integration and control."
           
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */

function DocItem({ icon, title, description }) {
  return (
    <div
      className="flex items-start gap-4 p-2 rounded-lg hover:bg-bg transition"
    >
      <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-md bg-bg text-ink">
        {icon}
      </div>

      <div>
        <h4 className="font-primary text-base text-ink">{title}</h4>
        <p className="mt-1 text-sm text-steel">{description}</p>
      </div>
    </div>
  );
}
