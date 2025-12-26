import { useEffect, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        bg-white text-ink
        w-11 h-11 rounded-full
        flex items-center justify-center
        shadow-md
        hover:bg-ink/90
        cursor-pointer
        transition
      "
      aria-label="Scroll to top"
    >
      <MdOutlineArrowUpward size={18} />
    </button>
  );
}
