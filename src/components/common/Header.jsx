import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "Engineering", to: "/engineering" },
  { label: "Products", to: "/products" },
  { label: "Documentation", to: "https://docs.vayuved.com" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

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
    NAV_ITEMS.map(({ label, to }) => (
      <NavLink
        key={label}
        to={to}
        onClick={() => isMobile && setOpen(false)}
        className={({ isActive }) =>
          `
          transition-colors
          ${isMobile ? "py-1" : ""}
          ${
            isActive
              ? "text-primary font-medium"
              : "text-muted hover:text-primary"
          }
        `
        }
      >
        {label}
      </NavLink>
    ));

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
      px-6 py-6 flex flex-col gap-4 text-sm
      transform transition-transform duration-300 ease-out
      ${open ? "translate-y-0" : "-translate-y-2"}
    `}
        >
          {renderNavLinks(true)}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-surface"
          >
            Talk to Engineering
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
