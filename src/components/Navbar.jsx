import React, { use, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const pages = ["Home", "About", "Skills", "Projects", "Education","Certificates","Snippets", "Resume", "Contact"];  

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex gap-4 justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="sm:text-xl md:text-2xl font-extrabold text-purple-800 dark:text-purple-500">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-4 md:overflow-auto lg:gap-8 items-center">
          {pages.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`pb-0 text-gray-700 md:font-bold pb-1 dark:text-gray-400 hover:text-purple-500 hover:scale-110 hover:border-b-3 hover:border-purple-500 ${location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "dark:text-purple-500 border-b-3 border-purple-500" : ""}`}
            >
              {item}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={toggleTheme}>
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
          {pages.map((item) => (
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
