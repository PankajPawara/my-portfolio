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
        <h1 className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/certificates">Certificates</Link>
          <Link to="/snippets">Snippets</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>

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
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-6 py-4 space-y-4 overflow-hidden">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/skills">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/education">Education</Link>
          <Link onClick={() => setOpen(false)} to="/certificates">Certificates</Link>
          <Link onClick={() => setOpen(false)} to="/snippets">Snippets</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/resume">Resume</Link>

          <button onClick={toggleTheme} className="mt-4">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
