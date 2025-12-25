import { useState, useEffect } from "react";

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
        <div className="text-xl font-semibold tracking-tight text-primary">
          Vayuved
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#engineering" className="hover:text-primary">
            Engineering
          </a>
          <a href="#products" className="hover:text-primary">
            Products
          </a>
          <a href="#docs" className="hover:text-primary">
            Documentation
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-surface"
        >
          Talk to Engineering
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-primary cursor-pointer"
          aria-label="Toggle menu"
        >
          {/* Hamburger / Close Icon */}
          <span className="sr-only">Open menu</span>
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
      {open && (
        <div className="md:hidden border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-4 text-sm text-muted">
            <a
              onClick={() => setOpen(false)}
              href="#engineering"
              className="hover:text-primary"
            >
              Engineering
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#products"
              className="hover:text-primary"
            >
              Products
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#docs"
              className="hover:text-primary"
            >
              Documentation
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#about"
              className="hover:text-primary"
            >
              About
            </a>

            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-surface"
            >
              Talk to Engineering
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
