export default function Footer() {
  return (
    <footer className="bg-surface text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-secondary font-semibold text-lg text-white">
              Vayuved Aerospace
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 font-primary max-w-sm">
              Engineering-driven aerospace company focused on building stable,
              deterministic flight control systems for unmanned aerial vehicles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-secondary font-semibold text-sm tracking-wide text-white">
              Navigation
            </h4>

            <ul className="mt-4 space-y-3 text-sm font-primary">
              <li>
                <a
                  href="/#products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="https://docs.vayuved.com/category/product---jta-01"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-secondary font-semibold text-sm tracking-wide text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm font-primary">
              <li>
                <a
                  href="mailto:engineering@vayuved.com"
                  className="hover:text-white transition-colors"
                >
                  engineering@vayuved.com
                </a>
              </li>
              <li className="text-gray-400">Hyderabad, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 text-center text-xs text-gray-400 font-primary">
          © 2025 Vayuved Aerospace Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
