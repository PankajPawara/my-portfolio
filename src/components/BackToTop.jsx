import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all duration-300 
      bg-purple-600 text-white 
      hover:shadow-[0_0_15px_4px_rgba(147,51,234,0.8)] hover:scale-110
      dark:bg-purple-500
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
