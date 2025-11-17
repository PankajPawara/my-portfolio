import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const pages = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certificates",
    // "Snippets",
    "Resume",
    "Contact",
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex gap-4 justify-between items-center h-16">
        
        {/* Logo */}
        <Link
          to="/"
          className="sm:text-xl md:text-2xl font-extrabold text-purple-800 dark:text-purple-500"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className=" hidden md:flex md:gap-4 lg:gap-8 items-center overflow-x-auto px-2">
          {pages.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`pb-1 md:font-bold text-gray-700 dark:text-gray-400 hover:text-purple-500 hover:scale-110 transition ${
                location.pathname ===
                (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "dark:text-purple-500 border-b-4 border-purple-500"
                  : ""
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle */}
          {/* <button onClick={toggleTheme} className="ml-2">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (dim background when menu is open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-gray-100 dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 space-y-4">
          {pages.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`text-gray-700 dark:text-gray-200 text-lg font-semibold hover:text-purple-500 transition ${
                location.pathname ===
                (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-purple-500 font-bold"
                  : ""
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="mt-6 flex items-center gap-3 text-purple-600 dark:text-gray-200 text-lg font-extrabold"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
