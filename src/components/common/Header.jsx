import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "Engineering", to: "/engineering" },
  { label: "Products", to: "/products", hasSubmenu: true },
  { label: "Documentation", to: "https://docs.vayuved.com" },
  { label: "About", to: "/about" },
];

const PRODUCT_ITEMS = [
  { label: "JTA-01", to: "/products/jta-01" },
  { label: "SAMPATHI-1 FCU", to: "/products/sampathi-1" },
  { label: "JTA-02", to: "/products/jta-02" },
  { label: "JTA-03", to: "/products/jta-03" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");

    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add("shadow-sm");
      } else {
        header.classList.remove("shadow-sm");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    NAV_ITEMS.map(({ label, to, hasSubmenu }) => {
      const isExternal = to.startsWith("http");

      /* ---------- PRODUCTS (WITH SUBMENU) ---------- */
      if (hasSubmenu) {
        return (
          <div
            key={label}
            className={`relative ${isMobile ? "" : "group"} py-1`}
          >
            {/* Parent */}
            <button
              onClick={() => isMobile && setProductsOpen(!productsOpen)}
              className={`
                flex items-center gap-1
                transition-colors
                ${isMobile ? "py-1" : ""}
                text-muted hover:text-primary
              `}
            >
              {label}
              <span className="text-xs"><FaChevronDown /></span>
            </button>

            {/* Desktop Dropdown */}
            {!isMobile && (
              <div
                className="
                  absolute left-0 top-full mt-0
                  hidden group-hover:block
                  w-64 rounded-lg bg-white shadow-lg border border-black/5
                  z-50
                "
              >
                <div className="py-2">
                  {PRODUCT_ITEMS.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className="block px-4 py-2 text-sm text-muted hover:bg-gray-50 hover:text-primary"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Submenu */}
            {isMobile && productsOpen && (
              <div className="mt-2 ml-3 flex flex-col gap-4">
                {PRODUCT_ITEMS.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() => {
                      setOpen(false);
                      setProductsOpen(false);
                    }}
                    className="text-sm text-muted hover:text-primary"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      }

      /* ---------- REGULAR LINKS ---------- */
      if (isExternal) {
        return (
          <a
            key={label}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              transition-colors
              ${isMobile ? "py-1" : ""}
              text-muted hover:text-primary
            `}
            onClick={() => isMobile && setOpen(false)}
          >
            {label}
          </a>
        );
      }

      return (
        <NavLink
          key={label}
          to={to}
          onClick={() => isMobile && setOpen(false)}
          className={({ isActive }) => `
            transition-colors
            ${isMobile ? "py-1" : ""}
            ${
              isActive
                ? "text-primary font-medium"
                : "text-muted hover:text-primary"
            }
          `}
        >
          {label}
        </NavLink>
      );
    });


  return (
    <header
      className="
        sticky top-0 z-50
        bg-bg/90 backdrop-blur
        border-b border-black/7
        transition-shadow
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-tight text-primary"
        >
          <img src={Logo} alt="Vayuved Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {renderNavLinks()}
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-surface"
        >
          Talk to Engineering
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-primary cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-primary transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-primary transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-primary transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`
    md:hidden
    overflow-hidden
    transition-all duration-300 ease-out
    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
      >
        <nav
          className={`
      px-6 py-3 flex flex-col gap-3 
      transform transition-transform duration-300 ease-out
      ${open ? "translate-y-0" : "-translate-y-2"}
    `}
        >
          {renderNavLinks(true)}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-surface"
          >
            Talk to Engineering
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
