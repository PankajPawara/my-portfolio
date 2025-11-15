import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-500">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200">
          {["Home", "About", "Skills", "Projects", "Education","Certificates","Snippets", "Resume", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-500"
            >
              {item}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="ml-4">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col bg-gray-100 dark:bg-gray-800 px-6 py-4 space-y-4 overflow-hidden">
          {["Home", "About", "Skills", "Projects", "Education","Certificates","Snippets", "Resume", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-500"
            >
              {item}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="mt-4">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
