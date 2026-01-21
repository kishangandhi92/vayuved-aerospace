import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products", hasSubmenu: true },
  { label: "Documentation", to: "https://docs.vayuved.com/category/product---jta-01" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const PRODUCTS = [
  {
    name: "JTA-01",
    description: "Pixhawk FMU v6x RT–Compatible Professional Drone Flight Controller",
  to: "/products/jta-01",
  },
  {
    name: "SAMPATHI-1",
    description: "STM32H7-Based Deterministic FCU for FPV, Racing, and Interceptor-Class Drones",
    to: "/products/sampathi-1",
  },
  {
    name: "JTA-02",
    description: "Coming soon",
    to: "#",
  },
  {
    name: "JTA-03",
    description: "Coming soon",
    to: "#",
  },
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

  // const renderNavLinks = (isMobile = false) =>
  //   NAV_ITEMS.map(({ label, to, hasSubmenu }) => {
  //     const isExternal = to.startsWith("http");

  //     /* ---------- PRODUCTS (WITH SUBMENU) ---------- */
  //     if (hasSubmenu) {
  //       return (
  //         <div
  //           key={label}
  //           className={`relative ${isMobile ? "" : "group"} py-1`}
  //         >
  //           {/* Parent */}
  //           <button
  //             onClick={() => isMobile && setProductsOpen(!productsOpen)}
  //             className={`
  //               flex items-center gap-1
  //               transition-colors
  //               ${isMobile ? "py-1" : ""}
  //               text-muted hover:text-primary
  //             `}
  //           >
  //             {label}
  //             <span className="text-xs"><FaChevronDown /></span>
  //           </button>

  //           {/* Desktop Dropdown */}
  //           {!isMobile && (
  //             <div
  //               className="
  //                 absolute left-0 top-full mt-0
  //                 hidden group-hover:block
  //                 w-64 rounded-lg bg-white shadow-lg border border-black/5
  //                 z-50
  //               "
  //             >
  //               <div className="py-2">
  //                 {PRODUCT_ITEMS.map((item) => (
  //                   <NavLink
  //                     key={item.label}
  //                     to={item.to}
  //                     className="block px-4 py-2 text-sm text-muted hover:bg-gray-50 hover:text-primary"
  //                   >
  //                     {item.label}
  //                   </NavLink>
  //                 ))}
  //               </div>
  //             </div>
  //           )}

  //           {/* Mobile Submenu */}
  //           {isMobile && productsOpen && (
  //             <div className="mt-2 ml-3 flex flex-col gap-4">
  //               {PRODUCT_ITEMS.map((item) => (
  //                 <NavLink
  //                   key={item.label}
  //                   to={item.to}
  //                   onClick={() => {
  //                     setOpen(false);
  //                     setProductsOpen(false);
  //                   }}
  //                   className="text-sm text-muted hover:text-primary"
  //                 >
  //                   {item.label}
  //                 </NavLink>
  //               ))}
  //             </div>
  //           )}
  //         </div>
  //       );
  //     }

  //     /* ---------- REGULAR LINKS ---------- */
  //     if (isExternal) {
  //       return (
  //         <a
  //           key={label}
  //           href={to}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className={`
  //             transition-colors
  //             ${isMobile ? "py-1" : ""}
  //             text-muted hover:text-primary
  //           `}
  //           onClick={() => isMobile && setOpen(false)}
  //         >
  //           {label}
  //         </a>
  //       );
  //     }

  //     return (
  //       <NavLink
  //         key={label}
  //         to={to}
  //         onClick={() => isMobile && setOpen(false)}
  //         className={({ isActive }) => `
  //           transition-colors
  //           ${isMobile ? "py-1" : ""}
  //           ${
  //             isActive
  //               ? "text-primary font-medium"
  //               : "text-muted hover:text-primary"
  //           }
  //         `}
  //       >
  //         {label}
  //       </NavLink>
  //     );
  //   });

  const renderNavLinks = (isMobile = false) =>
  NAV_ITEMS.map(({ label, to, hasSubmenu }) => {
    const isExternal = to.startsWith("http");

    /* ---------- PRODUCTS (MEGA MENU) ---------- */
    if (hasSubmenu) {
      return (
        <div
          key={label}
          className={`relative ${isMobile ? "" : "group"} py-1`}
        >
          {/* Trigger */}
          <button
            onClick={() => isMobile && setProductsOpen(!productsOpen)}
            className="
              flex items-center gap-1
              transition-colors
              text-muted hover:text-primary
            "
          >
            {label}
            <FaChevronDown className="text-xs opacity-70" />
          </button>

          {/* Desktop Mega Menu */}
          {!isMobile && (
            <div
              className="
                absolute left-1/2 top-full
                -translate-x-1/2
                hidden group-hover:block
                pt-2
                z-50
              "
            >
              <div
                className="
                  w-[720px]
                  rounded-xl bg-white
                  shadow-xl
                  border border-black/5
                  p-3
                "
              >
                <div className="grid grid-cols-2 gap-4">
                  {PRODUCTS.map((product) => (
                    <NavLink
                      key={product.name}
                      to={product.to}
                      className="
                        rounded-lg border border-black/5
                        p-5
                        bg-gray-50
                        hover:border-primary/40
                        hover:bg-gray-100
                        transition
                      "
                    >
                      <h4 className="font-semibold text-gray-900">
                        {product.name}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-medium text-primary">
                        View product →
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Mega Menu */}
          {isMobile && productsOpen && (
            <div className="mt-3 ml-3 flex flex-col gap-2">
              {PRODUCTS.map((product) => (
                <NavLink
                  key={product.name}
                  to={product.to}
                  onClick={() => {
                    setOpen(false);
                    setProductsOpen(false);
                  }}
                  className="
                    rounded-lg border border-black/5
                    p-4
                    bg-gray-50
                    hover:bg-gray-100
                    transition
                  "
                >
                  <h4 className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs text-gray-600">
                    {product.description}
                  </p>
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
          className="
            transition-colors
            text-muted hover:text-primary
          "
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
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium"
            : "text-muted hover:text-primary transition-colors"
        }
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
        <nav className="hidden md:flex items-center gap-5 lg:gap-10 text-sm">
          {renderNavLinks()}
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="mailto:engineering@vayuved.com"
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
    overflow-auto
    transition-all duration-300 ease-out
    ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}
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
            to="mailto:engineeringmailto:engineering@vayuved.com"
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
